const CACHE_NAME = 'padel-v5.41';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './icon.svg',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js'
];

self.addEventListener('install', e => {
    e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
    self.skipWaiting();
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});

// La pagina puede pedir que el service worker nuevo tome el control de inmediato
self.addEventListener('message', e => {
    if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});

// Network first. Lo propio se pide con cache: 'no-store' para saltarse la cache
// HTTP del navegador, que en iOS servia el index.html viejo durante horas.
self.addEventListener('fetch', e => {
    if (e.request.method !== 'GET') return;
    const mismoOrigen = new URL(e.request.url).origin === self.location.origin;
    const peticion = mismoOrigen
        ? new Request(e.request, { cache: 'no-store' })
        : e.request;
    e.respondWith(
        fetch(peticion)
            .then(response => {
                const clone = response.clone();
                caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
                return response;
            })
            .catch(() => caches.match(e.request))
    );
});

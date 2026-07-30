const CACHE_NAME = 'padel-v4.0';
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

// Network first: intenta la red, si falla usa el cache (para offline)
self.addEventListener('fetch', e => {
    e.respondWith(
        fetch(e.request)
            .then(response => {
                const clone = response.clone();
                caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
                return response;
            })
            .catch(() => caches.match(e.request))
    );
});

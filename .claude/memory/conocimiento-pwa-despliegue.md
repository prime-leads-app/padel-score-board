---
name: conocimiento-pwa-despliegue
description: Por que la PWA instalada se quedaba con la version vieja y como se publica sin repetirlo
metadata: 
  node_type: memory
  type: reference
  updated: 2026-07-31
  review_by: 2026-10-31
  originSessionId: 3f0c74ee-036b-4a00-a437-ba79ac59d1c9
  modified: 2026-07-31T13:34:53.290Z
---

## El bug que costo tres intentos (2026-07-31)
La app instalada en el iPhone no veia los cambios aunque el push y el build de Pages estuvieran bien.

**Causa medida:** GitHub Pages sirve el HTML con `Cache-Control: max-age=600`.
```
curl -sI https://prime-leads-app.github.io/padel-score-board/index.html
  ETag: "..."   Cache-Control: max-age=600
```
El service worker usaba "red primero", pero ese `fetch` respetaba la cache HTTP de Safari: recibia la
copia vieja y la volvia a guardar. En una PWA de pantalla de inicio se agrava porque iOS mantiene la
app suspendida y al reabrirla ni siquiera vuelve a pedir la pagina.

**Arreglo (v4.1-v4.2):**
1. `sw.js` pide los recursos propios con `cache: 'no-store'` (los del CDN se quedan como estaban).
2. La comprobacion NO usa `registration.update()` a secas: eso solo detecta cambios en `sw.js`, asi
   que un despliegue que no toque ese archivo pasaba desapercibido y la app respondia "ya tienes la
   ultima version" sin tenerla. Ahora `checkForUpdate` descarga el `index.html` publicado con
   `no-store`, le extrae `meta[name=app-version]` y lo compara con el que corre.
3. Si difieren: borra todas las caches, `reg.update()` y recarga con cache-busting (`forceUpdate`).

## Convencion de publicacion: subir la version SIEMPRE
En cada despliegue hay que tocar los tres, o el mecanismo de arriba queda ciego:
- `index.html`: `<meta name="app-version" content="X.Y">`
- `index.html`: `<span id="app-version-label">X.Y</span>` (el pie lo sobrescribe leyendo el meta)
- `sw.js`: `const CACHE_NAME = 'padel-vX.Y'`

## Pages no siempre dispara el build
Hubo despliegues en que el push quedo en GitHub pero Pages siguio sirviendo el commit anterior. Se
fuerza con:
```
gh api -X POST repos/prime-leads-app/padel-score-board/pages/builds --jq .status
```
Y se confirma comparando contra el commit local, no solo mirando que el push salio:
```
gh api repos/prime-leads-app/padel-score-board/pages/builds/latest --jq '.commit + " " + .status'
```

## Remote con doble destino
`origin` tiene dos push URLs: GitHub (`prime-leads-app/padel-score-board`) y el Gitea propio
(`git.tecno-group.mx:2222/git.admin/padel-score-board`). Un `git push origin main` empuja a ambos.

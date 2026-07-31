<!-- MNEMO INDEX-ROUTER. Solo punteros + hechos criticos de 1 linea. NADA de detalle.
     Caps del indice: < 200 lineas Y < 25 KB, ninguna linea > 3000 chars, ningun puntero > 250 chars.
     Frontmatter y estos comentarios HTML NO cuentan al budget (se descartan antes de medir).
     Este es el UNICO archivo que se carga solo: un shard que no cuelgue de aqui (directo, o por
     cadena si es un OLD-*) es inalcanzable. No hay busqueda semantica que lo rescate.
     Formato de puntero: - [Titulo](archivo.md) -- descripcion (updated: YYYY-MM-DD) -->
# Memoria del proyecto

App de una sola pagina (`index.html`, vanilla JS + localStorage) publicada en GitHub Pages.

## Estado
- [estado.md](estado.md) -- estado vivo de la sesion (updated: 2026-07-31)

## Decisiones
- [decisiones-retas.md](decisiones-retas.md) -- ADR de las reglas de negocio de las retas: reparto de puntos, fin de tiempo, boton Fin, tabla editable (updated: 2026-07-31)
<!-- punteros a decisiones-*.md (ADR, append-only) -->

## Conocimiento / Diseno
- [conocimiento-retas-dinamica.md](conocimiento-retas-dinamica.md) -- rotacion en cancha (el que gana se queda pero separado) y reparto de enfrentamientos (updated: 2026-07-31)
- [conocimiento-pwa-despliegue.md](conocimiento-pwa-despliegue.md) -- por que la PWA se quedaba vieja en iOS; hay que subir app-version y CACHE_NAME en cada publicacion (updated: 2026-07-31)
- [conocimiento-ui-criterios.md](conocimiento-ui-criterios.md) -- criterios de interfaz del usuario: cada boton solo si sirve, cada modal se cierra solo (updated: 2026-07-31)
<!-- punteros a conocimiento-*.md -->

## Referencia / Bugs
- [por-clasificar.md](por-clasificar.md) -- bandeja de lo que espera clasificacion; vaciada en la auditoria del 2026-07-31 (updated: 2026-07-31)
<!-- punteros a referencia-*.md -->

## Bitacora
- [bitacora.md](bitacora.md) -- historico append-only, una linea por unidad cerrada (updated: 2026-07-31)
<!-- 1 puntero a bitacora.md -->

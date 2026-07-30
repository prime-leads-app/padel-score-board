---
name: por-clasificar
description: Bandeja de entrada; lo que se registro en caliente y espera clasificacion en el proximo cierre
type: project
updated: 2026-07-30
---
<!-- POR CLASIFICAR. Bandeja de entrada del registro incremental. Aqui aterriza lo que una nota no
     puede colocar sola: contenido sin shard donde vivir, y candidatos a DECISION que esperan
     confirmacion. NO es estado.md: aquello se REEMPLAZA en cada nota y lo aparcado ahi se perderia.
     El ritual de cierre vacia esta bandeja creando los shards y promoviendo los candidatos.
     Si esto crece sin vaciarse, es que el cierre no se esta corriendo. -->

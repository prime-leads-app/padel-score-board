---
name: por-clasificar
description: Bandeja de entrada; lo que se registro en caliente y espera clasificacion en el proximo cierre
metadata: 
  node_type: memory
  type: project
  updated: 2026-08-06
  originSessionId: 3f0c74ee-036b-4a00-a437-ba79ac59d1c9
  modified: 2026-07-31T13:36:55.044Z
---

<!-- POR CLASIFICAR. Bandeja de entrada del registro incremental. Aqui aterriza lo que una nota no
     puede colocar sola: contenido sin shard donde vivir, y candidatos a DECISION que esperan
     confirmacion. NO es estado.md: aquello se REEMPLAZA en cada nota y lo aparcado ahi se perderia.
     El ritual de cierre vacia esta bandeja creando los shards y promoviendo los candidatos.
     Si esto crece sin vaciarse, es que el cierre no se esta corriendo. -->

## Sin shard donde vivir
<!-- Vaciada en la auditoria del 2026-07-31: las reglas de negocio de retas se promovieron a
     [[decisiones-retas]] como ADR (corrigiendo "Fin partido" -> "Fin", que es el nombre actual del
     boton), y la dinamica de cancha quedo en [[conocimiento-retas-dinamica]]. -->
(vacio)


## Candidatos a DECISION
- 2026-08-06-15-59-53-01: En Retas se usan los terminos Error/Acierto: Error concede el punto al rival, Acierto al equipo propio y la zona grande conserva la anotacion rapida sin atribucion; Deshacer revierte marcador y estadisticas.
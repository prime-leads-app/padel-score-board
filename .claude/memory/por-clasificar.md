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


## Sin shard donde vivir
- 2026-07-30-14-05-43-01: Reglas de negocio de Retas definidas por el usuario el 2026-07-30 (no derivables del codigo): (1) solo suma la pareja GANADORA y cada ganador suma los juegos completos que gano su equipo; si el partido se define con juegos empatados cuentan los juegos completos, no el disputado. (2) Al agotarse el tiempo: con ventaja en juegos cierra de inmediato descartando el juego en curso; con empate en juegos el juego en curso sigue hasta que alguien lo gane. (3) El boton Fin partido corta cuando ya no alcanza el tiempo de cancha: gana quien lleve mas puntos en el juego en disputa, y con empate absoluto avisa sin cerrar. (4) La tabla permite editar puntos a mano porque hay situaciones que se resuelven fuera de cancha. (5) Historial doble: la reta completa y ademas cada partido por separado. El boton de juegos sin limite lleva solo el simbolo infinito porque el texto desborda los botones cuadrados del diseno actual.
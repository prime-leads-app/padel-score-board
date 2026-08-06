---
name: bitacora
description: "Historico append-only, una linea corta por unidad de trabajo cerrada"
metadata: 
  node_type: memory
  type: reference
  updated: 2026-08-06
  originSessionId: 3f0c74ee-036b-4a00-a437-ba79ac59d1c9
  modified: 2026-07-31T13:36:22.612Z
---

<!-- BITACORA. Append-only. UNA LINEA CORTA por unidad cerrada, fecha ISO absoluta, ~150 bytes.
     Dice QUE se cerro y remite al shard con el detalle. NO metas aqui la decision, el bug, la
     metrica ni el proximo paso: cada uno tiene su clase. Una bitacora que revienta el cap de
     25 KB casi siempre es eso, y se arregla RECLASIFICANDO, no rotando. -->
- 2026-07-30-14-05-43-01: retas convertidas en sesion con roster, cronometro regresivo y clasificacion individual (commit 9a97ff6)
- 2026-07-30: v4.1-v4.4 pantalla Reta propia, boton Iniciar y barra que muestra solo lo util (96e1f3b..7f8cd50); criterios en [[conocimiento-ui-criterios]]
- 2026-07-30: v4.1-v4.2 arreglada la PWA que se quedaba en version vieja en iOS (5489f52, 632130c); causa y convencion en [[conocimiento-pwa-despliegue]]
- 2026-07-30: rotacion en cancha y control de cruces en la sugerencia de parejas (e4992f8, 1a575a9, a581c55); reglas en [[conocimiento-retas-dinamica]]
- 2026-07-30: cronometro persistente por marca absoluta de arranque, sobrevive al refresco (a581c55)
- 2026-07-31: v4.5-v5.0 borrado de partidos individuales con sus estadisticas vinculadas por matchId (4c4a665, 74da886)
- 2026-07-31: v5.0-v5.1 cambio de integrantes y clasificacion accesibles desde el encabezado del marcador (7db2f9f, fe1607c)
- 2026-07-31: v5.3 ayuda de la app actualizada al estado real; v5.4 cada modal se cierra por su cuenta (0b496bd, 986d923)
- 2026-07-31-08-43-27-01: memoria Mnemo auditada, versionada en git y pusheada (commits b663270, 55bfc7b)
- 2026-08-06-15-59-53-01: v5.5 incorpora Error/Acierto por jugador en Retas con persistencia y Deshacer
- 2026-08-06-16-06-57-02: v5.6 centra Error/Acierto y aumenta los nombres sin redimensionar tarjetas
- 2026-08-06-16-19-33-03: v5.7 amplía los nombres de jugadores sin cambiar las tarjetas

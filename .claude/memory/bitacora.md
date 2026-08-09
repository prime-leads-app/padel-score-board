---
name: bitacora
description: "Historico append-only, una linea corta por unidad de trabajo cerrada"
metadata: 
  node_type: memory
  type: reference
  updated: 2026-08-08
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
- 2026-08-06-16-41-52-04: v5.8 reubica Error/Acierto en Reta y separa participantes en listado y alta compactos, verificados a 320 y 390 px
- 2026-08-06-16-57-24-05: v5.9 agrega Editar junto a Eliminar y propaga el nombre a parejas, clasificacion y estadisticas de la reta activa
- 2026-08-06-17-10-13-06: v5.10 centra verticalmente los nombres cuando Error/Acierto esta sin detalle y conserva el desplazamiento del modo detallado
- 2026-08-06-17-17-42-07: v5.11 confirma antes de eliminar participantes, libera su pareja solo al aceptar y conserva el centrado vertical sin detalle
- 2026-08-06-17-46-05-08: v5.12 agrega historial en vivo del partido con Error/Acierto, beneficiario y marcador por punto, mostrando primero lo mas reciente.
- 2026-08-06-18-05-46-09: v5.13 agrega Star Point como cuarta regla de 40-40, conserva las otras tres y mantiene los cuatro botones en una fila.
- 2026-08-06-18-33-36-10: v5.14 agrega Estadísticas a la clasificación, incluye el partido en curso sin duplicarlo y conserva el resumen en Retas anteriores.
- 2026-08-06-19-06-03-11: v5.15 agrega Historial como tercera pestaña de la clasificación y reutiliza el detalle punto a punto del partido actual.
- 2026-08-06-19-13-16-12: v5.16 mueve el acceso superior de Historial al extremo derecho; se verificaron dos cambios de juego y Deshacer sincronizado con historial y estadísticas.
- 2026-08-06-19-19-18-13: v5.17 equilibra la cabecera móvil en grupos de tres, conserva Historial al final y elimina traslapes con el reloj entre 320 y 430 px.
- 2026-08-06-19-29-17-14: v5.18 elimina el acceso superior redundante de Historial y deja la copa como centro de Clasificación, Estadísticas e Historial; la cabecera conserva cinco botones sin traslapes.
- 2026-08-06-19-32-26-15: Se registra que actualizar la aplicación después de publicar un cambio se da por entendido y no debe proponerse como siguiente paso ni requerir confirmación.
- 2026-08-06-19-40-39-16: v5.19 fija la altura del modal de Clasificación, Estadísticas e Historial durante una reta; el contenido central desplaza internamente y el estado sin reta sigue compacto.
- 2026-08-06-19-44-52-17: v5.20 restablece el orden acordado de las pestañas del resumen: Clasificación, Historial y Estadísticas; conserva la altura estable del modal.
- 2026-08-06-20-09-02-18: v5.21 agrega Máx. pts configurable en Retas, predeterminado 6; limita solo el aporte a clasificación, conserva marcador real y persiste el aporte para Deshacer. Verificado 6-0 con tope 4 y reversión a cero.
- 2026-08-06-20-32-34-19: v5.22 compacta la cabecera de Reta en dos accesos, Tiempo y Máx. pts, que muestran el valor actual y abren selectores propios; al reabrir, la pantalla vuelve al inicio.
- 2026-08-06-21-52-32-20: v5.23 alinea Fecha, Tiempo y Máx. pts en una sola fila de la pantalla Reta; Fecha muestra el horario como dato secundario y abre un editor propio. Verificado a 320 y 390 px.
- 2026-08-06-22-00-50-21: v5.24 iguala el ancho de Fecha, Tiempo y Máx. pts y elimina los encabezados visuales Error/Acierto, Participantes y Parejas de este partido; conserva sus etiquetas accesibles. Verificado a 320 y 390 px.
- 2026-08-06-22-14-30-22: v5.25 renombra el modo de seguimiento a Registrar Error/Acierto y Sólo sumar puntos; ajusta proporción y tipografía para una sola línea sin desbordar el modal. Ayuda y README actualizados; verificado a 320 y 390 px.
- 2026-08-06-22-21-15-23: v5.26 cambia el modo a Registrar Errores/Aciertos en botón, ayuda y README; conserva una sola línea a 320 px sin reducir más la tipografía.
- 2026-08-06-22-35-41-24: v5.27 agrega borrado individual de retas anteriores con confirmación y limpieza de sus partidos vinculados por matchId; Borrar todo aplica la misma regla.
- 2026-08-06-22-55-52-25: v5.28 agrega sacador individual: un clic cambia equipo, doble clic cambia jugador y cada juego alterna automáticamente equipo y compañero; Deshacer, cambio de lado y recarga conservan el orden.
- 2026-08-06-23-04-48-26: v5.29 añade triple toque en Saque para intercambiar izquierda/derecha del equipo sacador; el borde queda en la posición y estadísticas, selección y persistencia siguen a cada jugador.
- 2026-08-06-23-17-06-27: v5.30 mueve Saque al encabezado, agrega un control separado para posiciones y elimina el gesto triple; Datos del partido pasa al menú.
- 2026-08-06-23-28-24-28: v5.31 separa equipo sacador, jugador sacador y posiciones en tres botones; elimina del encabezado el cambio de lado y valida el borde amarillo.
- 2026-08-06-23-43-21-29: v5.32 restaura en el encabezado el botón para cambiar equipos de lado con su marcador, estadísticas y saque, conservando los tres controles independientes.
- 2026-08-06-23-57-22-30: v5.33 coloca el botón amarillo de jugador sacador en la cuarta posición del encabezado, después del control de posiciones.
- 2026-08-07-00-03-08-01: v5.34 mueve Participantes junto al menú y traslada el intercambio de posiciones al grupo derecho, conservando ambos comportamientos.
- 2026-08-07-00-15-05-02: v5.35 usa flechas verticales para intercambiar equipos y horizontales para posiciones internas, en ese orden a la derecha del reloj.
- 2026-08-07-00-52-00-03: v5.36 agrega auditoría de saques, reinicios y alertas de secuencia a la cronología de las retas.
- 2026-08-08-08-36-06-01: v5.37 agrega detalle contextual de golpes para Acierto y Error en retas, con persistencia, reportes y Deshacer.
- 2026-08-08-10-40-39-02: v5.38 replica la administración de participantes dentro de Jugadores del partido.
- 2026-08-08-16-17-09-03: v5.39 reorganiza Configuración en tres perfiles independientes sin mover la gestión operativa de Reta.
- 2026-08-08-17-36-36-04: v5.40 centraliza la configuración editable de Retas y elimina controles duplicados.
- 2026-08-08-17-54-14-05: v5.41 integra el editor de Retas en su pestaña y elimina el paso intermedio.
- 2026-08-08-18-08-52-06: v5.42 reduce la altura de los cards de reglas de Retas sin recortar contenido.
- 2026-08-08-18-23-04-07: v5.43 compacta toda la pestaña de Retas para mostrar el pie en la altura útil del teléfono.
- 2026-08-08-18-30-47-08: v5.44 recupera altura visual en Retas y conserva el pie completo con margen corto.
- 2026-08-08-18-45-26-09: v5.45 ordena secuencialmente los datos de los eventos de saque en la cronología.
- 2026-08-08-19-08-44-10: v5.46 diferencia visualmente Error, Acierto y Saque en la cronología de la reta.
- 2026-08-08-19-24-14-11: v5.47 limpia el partido al reiniciar y simplifica los eventos de punto.
- 2026-08-08-19-35-18-12: v5.48 separa visualmente los juegos dentro de la cronología.
- 2026-08-08-20-02-48-13: v5.49 muestra el resultado correcto en el punto que cierra un juego o partido.
- 2026-08-08-20-15-26-14: v5.50 identifica cada marcador de la cronología con los nombres de ambas parejas.
- 2026-08-08-20-46-18-15: v5.51 separa el resultado del juego y el turno de saque en la cronología.
- 2026-08-08-20-59-02-16: v5.52 integra el resultado de cada partido en los nombres de las parejas.
- 2026-08-08-21-06-43-17: v5.53 aplica el marcador con paréntesis al encabezado del partido actual.
- 2026-08-08-21-17-01-18: v5.54 identifica juego y evento con dos marcadores circulares.
- 2026-08-08-21-30-12-19: v5.55 muestra juegos acumulados en la cronología y amplía el cartel ganador.
- 2026-08-08-21-53-39-20: v5.56 alterna el encabezado del partido según esté expandido o colapsado.
- 2026-08-08-21-58-36-21: v5.57 recupera el borde superior y elimina el rótulo de partidos terminados.
- 2026-08-08-22-09-19-22: v5.58 mantiene los marcadores de la cronología en una sola línea.
- 2026-08-08-22-33-10-23: v5.59 separa la finalización del partido del último turno de saque.
- 2026-08-08-22-38-58-24: v5.60 simplifica el card de saque terminado.
- 2026-08-08-22-49-57-25: v5.61 compacta Registro y Golpes en dos menús desplegables.
- 2026-08-08-23-01-38-26: v5.62 muestra Golpes antes de Registro en la configuración de retas.

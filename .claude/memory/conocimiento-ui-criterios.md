---
name: conocimiento-ui-criterios
description: Criterios de interfaz que fijo el usuario y que ya costaron correcciones
metadata: 
  node_type: memory
  type: reference
  updated: 2026-08-08
  review_by: 2027-01-31
  originSessionId: 3f0c74ee-036b-4a00-a437-ba79ac59d1c9
  modified: 2026-07-31T13:35:15.106Z
---

## Un boton solo se muestra cuando sirve
La barra del marcador oculta lo que no aplica, para que los visibles queden mas anchos y sean faciles
de acertar con el pulgar (pasaron de 58px a 69-88px).

| Momento | Botones |
|---|---|
| Antes de iniciar | **Iniciar** (parpadeando) · Saque · Reiniciar · Limpiar |
| Partido en curso | Saque · Deshacer · Reiniciar · Limpiar · Fin |
| Partido terminado | Saque · Deshacer · Reiniciar · Limpiar |

La condicion de Deshacer y Fin es **el partido iniciado**, no "que haya puntos": se acordo asi y
cambiarlo por mi cuenta fue un error que hubo que revertir.

## Cada modal se cierra por su propio procedimiento
Abrir un modal encima de otro NO cierra el de abajo, y cancelar una confirmacion devuelve al usuario
exactamente donde estaba. Si la confirmacion queda tapada, la solucion es **z-index**, no cerrar el
modal de abajo (ese atajo rompio el flujo de "Cerrar reta → Cancelar").
Unica excepcion deliberada: al confirmar el cierre de la reta se cierran clasificacion, pantalla Reta
y modal de jugadores, porque la jornada dejo de existir.

## Otros criterios ya fijados
- El reloj se ancla al **centro de la pantalla** (`position:absolute; left:50%`), no al hueco entre
  botones: con 2 botones a la izquierda y 3 a la derecha, ese hueco queda ~20px corrido.
- Después de publicar un cambio, **actualizar la aplicación se da por entendido**. No sugerirlo como
  siguiente paso ni esperar confirmación del usuario para continuar con una solicitud posterior.
- Los avisos del boton Iniciar parpadean **verde ↔ amarillo trafico** con corte nitido
  (`steps(1,end)`); el fundido de opacidad anterior no se notaba en el telefono.
- No meter la gestion de la reta dentro de Configuracion: son dos cosas distintas y amontonarlas
  rompio la reticula 2x2 de las cards. La reta vive en su propia pantalla.
- Las parejas se muestran **una por fila**, cada equipo en su caja con el color del marcador
  (rojo/azul) y un VS en medio, para distinguirlas de un vistazo.

## Verificar el layout movil sin telefono
El truco que funciona: cargar la app en un **iframe de 390px** dentro de la pagina de pruebas; ahi las
media queries se evaluan contra el ancho del iframe. Medir con `offsetWidth`/`offsetTop` (no con
`getBoundingClientRect` si el iframe tiene `transform: scale`, que las distorsiona).

## 2026-08-06-16-06-57-02
En las tarjetas divididas de Retas, Error y Acierto van centrados dentro de cada mitad; el nombre usa 18.88 px y peso 700 a 390 px, conservando una tarjeta medida de 172.33 x 62 px.

## 2026-08-06-16-19-33-03
Los nombres usan 24.18 px a 390 px mediante clamp(1.3rem, 6.2vw, 1.55rem), con padding 12px 2px 0; la tarjeta conserva 172.33 x 62 px y quedan 4.57 px entre las etiquetas Error/Acierto y el nombre.

## 2026-08-06-17-46-05-08
El encabezado incluye un acceso directo al historial del partido actual. La lista conserva un evento por punto con jugador, Error/Acierto, equipo beneficiado y marcador resultante; los eventos se muestran del mas reciente al mas antiguo y Deshacer elimina tambien el ultimo registro.

## 2026-08-08-10-40-39-02
El modal Jugadores del partido muestra antes de las parejas los mismos accesos Ver participantes y Agregar de la pantalla Reta. Ambos reutilizan los modales existentes; el contador del roster se sincroniza mediante data-reta-roster-count y cerrar cada submodal regresa a la alineación sin perder selecciones.

## 2026-08-08-16-17-09-03
### Configuración por modalidad
Configuración usa una sola fila con Pádel normal, Pádel retas y Libre. Cada perfil conserva nombres, registro por jugadores o equipos, detalle de golpes y reglas compartidas; los valores exclusivos siguen siendo propios de su modalidad. Participantes, parejas y fecha permanecen en la pantalla Reta, accesible desde el perfil de Retas.

## 2026-08-08-18-45-26-09
### Cronología con lectura vertical
Los eventos de saque deben leerse en una secuencia vertical estable: jugador y hora de inicio en el encabezado, después Fin, Contexto, Cierre cuando exista y Marcador. No se debe enfrentar contexto y marcador en columnas opuestas porque obliga a alternar la lectura y provoca saltos de línea confusos en móvil.

## 2026-08-08-19-08-44-10
La cronología codifica el tipo de evento con fondo y círculo semánticos: rojo para Error, verde para Acierto, amarillo para Saque y neutro para puntos sin detalle. El equipo beneficiado permanece explícito en el texto Punto para, evitando que el color tenga dos significados. Se verificaron los tres estados juntos a 390 x 844.

## 2026-08-08-19-24-14-11
Reiniciar descarta marcador, cronología, saques, golpes y estadísticas del partido actual; ya no conserva eventos naranjas de reinicio. En los eventos de punto, el golpe se muestra junto a Error/Acierto, Punto para queda solo, Juego ocupa su propia línea y el marcador muestra únicamente Puntos, sin repetir Juegos.

## 2026-08-08-19-35-18-12
La cronología detecta el cambio de número de juego y coloca entre ambos grupos un separador ligero con Juego N finalizado y el marcador acumulado de juegos. El separador no cuenta como evento ni altera la numeración, y funciona tanto en el partido actual como en partidos guardados.

## 2026-08-08-20-02-48-13
Un punto normal muestra el marcador de puntos. Si el punto cierra un juego, el card indica Con este punto gana el Juego N y Marcador de juegos. Si además cierra el partido, muestra la pareja ganadora y el resultado final. Los eventos antiguos se reconocen comparando el marcador de juegos con el evento anterior, evitando mostrar el 0-0 inicial del siguiente juego como resultado.

## 2026-08-08-20-15-26-14
Los cards de punto y los resultados de juego o partido usan formato de marcador deportivo: Pareja 1 (valor) - Pareja 2 (valor). Los nombres provienen de la composición guardada en cada evento, los valores son puntos o juegos según el contexto y el diseño admite nombres largos sin ocultar el número.

## 2026-08-08-20-46-18-15
Cada elemento de la cronología tiene una sola responsabilidad: el separador Juego N finalizado muestra el marcador de juegos con ambas parejas; el punto decisivo sólo indica que cerró el juego o partido; el card amarillo muestra únicamente jugador al saque, intervalo, juego y estado. Los motivos de juegos anteriores permanecen almacenados pero no se mezclan visualmente; los cambios manuales sí se distinguen.

## 2026-08-08-20-59-02-16
El encabezado interior de un partido terminado usa Pareja 1 (juegos) VS Pareja 2 (juegos). Se eliminó la segunda línea redundante Resultado y el conteo de eventos; las puntuaciones conservan el amarillo y los colores identificadores de cada pareja.

## 2026-08-08-21-06-43-17
El encabezado del partido en curso muestra Pareja 1 (puntos actuales) VS Pareja 2 (puntos actuales). Se eliminó la segunda línea Puntos/Juegos y el rótulo Partido actual · Más recientes primero; los encabezados de partidos terminados conservan el ajuste previo.

## 2026-08-08-21-17-01-18
Cada card de la cronología muestra una columna de marcadores: círculo JN arriba y círculo de número de evento o icono de saque/reinicio abajo. Se eliminaron las líneas independientes Juego N de puntos y saques, y el reinicio ya no repite el juego en el contenido.

## 2026-08-08-21-30-12-19
En retas, el encabezado del partido actual usa los juegos acumulados entre paréntesis y no los puntos del juego recién iniciado. El cartel ganador dejó de estar duplicado dentro de cada equipo: ahora es una sola capa sobre el scoreboard completo y cubre ambos paneles, conservando las acciones según el modo.

## 2026-08-08-21-53-39-20
Un partido terminado colapsado muestra directamente Pareja 1 (juegos) VS Pareja 2 (juegos). Al expandirlo se oculta ese summary exterior y el marcador interior actúa como botón para volver a colapsar, eliminando la duplicación sin perder el control.

## 2026-08-08-21-58-36-21
El cuerpo de un partido expandido tiene separación superior equivalente a los laterales, dejando visible el borde completo del marcador interior. Se eliminó el rótulo Partidos terminados; si conviven un partido actual y partidos previos sólo se conserva una separación visual sin texto.

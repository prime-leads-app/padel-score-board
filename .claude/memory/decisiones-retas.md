---
name: decisiones-retas
description: "ADR de las reglas de negocio de las retas, dictadas por el usuario"
metadata: 
  node_type: memory
  type: project
  updated: 2026-08-08
  originSessionId: 3f0c74ee-036b-4a00-a437-ba79ac59d1c9
  modified: 2026-07-31T13:34:10.302Z
---

<!-- ADR APPEND-ONLY. Una decision revocada NO se borra ni se edita en su sitio: se supera con una
     entrada NUEVA que diga que la anterior quedo sin efecto y por que. Sin review_by a proposito:
     el rationale no caduca. -->

## 2026-07-30 · Como se reparten los puntos en la reta
Solo suma la pareja **ganadora**, y cada uno de los dos ganadores suma los **juegos completos** que
gano su equipo (ganan 6-2 → 6 pts a cada ganador, 0 a los perdedores).
Si el partido se definio con los juegos empatados, cuentan los juegos completos, no el disputado
(3-3 resuelto por puntos = 3 pts).
**Por que:** es como se cuenta en cancha; el marcador del partido y la tabla individual no pueden
decir cosas distintas. Descartado dar 1 pto por victoria: ignoraba la diferencia entre 6-0 y 6-5.

## 2026-07-30 · Fin de tiempo con y sin ventaja
Al agotarse el tiempo: si un equipo va **arriba en juegos**, gana de inmediato y el juego en curso se
descarta. Si van **empatados en juegos**, el juego en curso sigue hasta que alguien lo gane.
**Por que:** el reloj no puede dejar un partido sin ganador, pero tampoco romper un juego vivo.

## 2026-07-30 · El boton Fin corta el partido a media cancha
El boton **Fin** (se llamo "Fin partido" hasta la v4.5) termina el partido cuando ya no alcanza el
tiempo de cancha: gana quien vaya arriba en juegos, y si van iguales, quien lleve mas puntos en el
juego en disputa. Con empate absoluto la app **avisa y no cierra**.
**Por que:** en la practica se acaba la hora de cancha a mitad de un juego y hay que resolver con lo
que hay; un partido sin ganador no puede entrar a la tabla.

## 2026-07-30 · La tabla se puede editar a mano
Los puntos de la clasificacion son editables por jugador.
**Por que:** hay situaciones que se resuelven fuera de cancha y modifican con cuantos juegos se
registra la pareja ganadora.

## 2026-07-30 · Historial doble
Se guarda la reta completa (tabla final, participantes, fecha, hora, partidos) **y ademas** cada
partido por separado en el historial general.
**Por que:** la jornada se consulta como conjunto, pero un partido concreto tambien se revisa solo.

## 2026-07-30 · El boton de juegos sin limite lleva solo el simbolo ∞
Sin texto acompanante.
**Por que:** cualquier palabra desborda los botones cuadrados del diseno actual (`cfg-sq-btn`, 38px).

## 2026-07-31 · La reta se abre sola al empezar a jugar
En formato Retas, tocar Iniciar o anotar el primer punto abre la jornada si no habia una: toma la
fecha y hora de ese momento y, si la lista esta vacia, a los cuatro que esten en cancha.
**Por que:** se jugo un partido completo que no conto para ninguna clasificacion. Se descarto
bloquear el marcador con una capa: mete friccion en la cancha. Para un partido suelto esta el
formato Normal.

## 2026-08-06-18-05-46-09
Se conserva Oro, 1 Ventaja y 2 Ventajas, y se agrega Star como cuarta modalidad independiente. Los cuatro botones deben permanecer siempre en una sola fila. Star permite dos ventajas como maximo y, si regresan a 40-40 despues de la segunda, el siguiente punto decide el juego.

## 2026-08-06 · Tope configurable de puntos por partido
Cada ganador suma a la clasificacion `minimo(juegos ganados, tope configurado)`. El tope
predeterminado es **6**, acepta 4, 6, 8, un valor personalizado o ∞ para conservar el conteo sin
limite. El marcador y las estadisticas guardan el resultado real; cada partido conserva aparte el
aporte computable para que Deshacer sea exacto. Cambiar el tope no recalcula partidos ya cerrados.
**Por que:** los partidos cronometrados pueden producir marcadores muy distintos y el tope evita que
un solo resultado desequilibre la clasificacion de toda la reta.

## 2026-08-08-17-36-36-04
### Una sola fuente de configuración para Retas
La pantalla Reta es el único editor de Fecha, Tiempo, Máx. pts, Juegos, Fin, 40-40, Error/Acierto y detalle de golpes. Configuración > Pádel retas muestra sólo el resumen y abre ese editor; Jugadores del partido conserva parejas y participantes y ofrece un resumen pulsable que lleva al mismo editor.

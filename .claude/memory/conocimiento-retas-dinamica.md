---
name: conocimiento-retas-dinamica
description: Como rota la gente en una reta y como se reparten los enfrentamientos
metadata: 
  node_type: memory
  type: reference
  updated: 2026-08-08
  review_by: 2027-01-31
  originSessionId: 3f0c74ee-036b-4a00-a437-ba79ac59d1c9
  modified: 2026-07-31T13:34:28.705Z
---

## Rotacion en cancha (regla dictada por el usuario, 2026-07-31)
La reta arranca con dos parejas. Al terminar cada partido:
1. La pareja que **gana se queda en la cancha, pero SEPARADA**: cada ganador pasa a un lado distinto.
2. Los que **pierden salen** y entran dos de los que esperan, uno como companero de cada ganador.
3. Entran primero **los que menos partidos llevan jugados**; si empatan, el de mas arriba en la lista.
4. Con **banca de 1** (5 participantes) el lugar que sobra lo toma el perdedor que menos ha jugado.
5. Con **exactamente 4** y nadie esperando, se **cruzan las parejas** entre ellos.

Consecuencia natural y buscada: el que gana encadena partidos. No es un reparto parejo, es la
dinamica real de la cancha.

## Todos contra todos
Dos jugadores "se enfrentaron" solo si estuvieron en **bandos contrarios**. Haber sido companeros NO
cuenta: la app buscara ponerlos en contra en algun momento.
- Se registra quien enfrento a quien y quien jugo con quien (`retaHistoryPairs`).
- `suggestMatchup` respeta la rotacion de arriba y, entre los repartos posibles, elige el que estrena
  mas cruces; penaliza repetir companeros y a quien ya jugo de mas.
- Es **aviso, no candado**: si quieren repetir, se juega igual. En cancha pasa que alguien se va o
  llega un invitado, y bloquear dejaria sin forma de reflejarlo.

## Donde vive esto
`index.html`: `retaWinnersLosers`, `suggestMatchup`, `checkRotation`, `analyzeMatchup`,
`suggestEntrants`, `prepareNextLineup`. La ayuda de la app lo explica en "Como jugar retas", puntos
8 y 9.

## 2026-08-07-00-52-00-03
## Auditoría de saque (2026-08-07)
Cada partido de reta registra el sacador, inicio y fin del turno, juego, marcador y motivo del cambio. La rotación automática cierra y abre turnos con la misma marca de tiempo; reiniciar conserva la cronología y anota el marcador previo. Un cambio manual fuera de la secuencia esperada avisa quién debería sacar y cuántos turnos previos tiene la selección, pero permite confirmar una corrección real.

## 2026-08-08-08-36-06-01
En modo Jugadores, Con detalle de golpes se sincroniza entre Configuración y Reta. Acierto conserva Volea/Bandeja/Globo/Smash/Remate/Otro; Error registra Derecha-Revés, Volea, Globo, Salida de pared, Bandeja-Smash, Saque-Resto u Otro en errorShots. La cronología muestra Golpe o Error en según outcome; los acumulados, borrado de partidos y Deshacer procesan ambos mapas.

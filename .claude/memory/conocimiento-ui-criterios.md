---
name: conocimiento-ui-criterios
description: Criterios de interfaz que fijo el usuario y que ya costaron correcciones
metadata: 
  node_type: memory
  type: reference
  updated: 2026-08-06
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

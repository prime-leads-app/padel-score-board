# Padel Scoreboard

Marcador digital para partidos de pádel y retas. Funciona como PWA (Progressive Web App), se puede instalar en el celular y usar sin conexión.

**Demo en vivo:** [https://prime-leads-app.github.io/padel-score-board/](https://prime-leads-app.github.io/padel-score-board/)

## Modos de juego

### Padel (Normal)

Formato oficial de pádel con sets, juegos y puntos.

- **Puntos:** 0 → 15 → 30 → 40 → gana juego
- **Juegos por set:** 6 o 4 (configurable)
- **Sets para ganar:** 1, 2 o 3 (configurable)
- **Empate a 40:** Punto de Oro, 1 Ventaja o 2 Ventajas
- **Tie-break:** Se activa automáticamente si empatan en juegos (6-6 o 4-4)

### Padel (Retas)

Formato informal popular en México. Una reta es una **jornada con varios partidos** entre 6, 7 o los jugadores que sean, que van rotando de pareja. No hay número definido de partidos: se juegan los que dé el tiempo.

**Cada partido:**

- **Juegos:** 4, 6, 8 o **∞** (sin tope; define el tiempo o el botón Fin partido)
- **Tiempo por partido:** 15, 20, 30 min, el valor que escribas, o ∞ para jugar sin reloj. El cronómetro va en cuenta regresiva y suena una alarma al llegar a cero
- **Puntos:** Igual que pádel oficial (0 → 15 → 30 → 40)
- **Desempate:** Si empatan (ej: 3-3 en reta de 6), se juega un juego extra
- **Fin del partido:**
  - **Todos:** Se juegan todos los juegos, gana quien tenga más al final
  - **Anticipado:** Termina cuando un equipo tiene mayoría matemática

**Cuando se acaba el tiempo:**

- Si un equipo va arriba en juegos, gana ahí mismo aunque el juego en curso quede a medias
- Si van empatados en juegos, el juego en curso se sigue jugando y quien lo gane, gana el partido

**Botón Fin partido:** corta el partido en cualquier momento. Gana quien vaya arriba en juegos; si van iguales, gana quien lleve más puntos en el juego en disputa. Si van iguales en juegos y en puntos, la app avisa y no cierra.

**Participantes y parejas:** capturas la lista de jugadores de la reta (se guarda en el dispositivo para la próxima) y antes de cada partido eliges de listas desplegables quiénes forman cada equipo. Un jugador no puede estar en dos lugares a la vez.

**Clasificación individual:** solo suma la pareja que gana, y cada uno de los dos ganadores suma los juegos que ganó su equipo (ganan 6-2 → 6 pts a cada ganador). Si el partido se definió con juegos empatados, cuentan los juegos completos. Los puntos de la tabla se pueden **editar a mano** desde la clasificación.

**Rotación de la reta:** la pareja que gana se queda en la cancha pero **se separa**, uno de cada lado; los que pierden salen y entran dos de los que esperan, uno como compañero de cada ganador. Entran primero los que menos partidos llevan jugados. Con solo cuatro participantes (sin banca) se cruzan las parejas entre ellos. La app propone la rotación correcta y avisa si las parejas elegidas no la respetan.

**Todos contra todos:** la app registra quién se ha enfrentado con quién. Al elegir las parejas avisa si el cruce ya se jugó, muestra quiénes faltan por enfrentarse y con **Armar el mejor partido** propone la combinación que estrena más cruces y reparte los partidos entre quienes menos han jugado. Es un aviso, no un candado.

**Cronómetro a prueba de refrescos:** se guarda la hora exacta de arranque del partido, así que si cierras la app o recargas la página, la cuenta regresiva continúa donde iba. Si el tiempo se agotó mientras estaba cerrada, al volver se aplica la regla de fin de tiempo.

**Borrar un partido:** cada partido de la clasificación tiene un botón de papelera. Al borrarlo (con confirmación) se descuentan sus puntos, partidos jugados, ganados y estadísticas de golpes de todos los involucrados, y el partido también desaparece del historial de Partidos. Cada partido guarda su propio aporte, así que se puede borrar cualquiera, no solo el último.

**Cerrar la reta:** guarda la tabla final, participantes, fecha, hora de inicio y todos los partidos en **Retas anteriores**.

### Libre

Modo libre para cualquier actividad. Cada toque suma 1 punto.

- **Puntos para ganar:** 5, 10, 15, 20, 25 o 30 (configurable)

## Funcionalidades

- **Nombres editables:** Modo Jugadores (2 nombres por equipo) o Equipos (1 nombre por equipo)
- **Sonidos diferenciados:** Cada equipo tiene un tono distinto al anotar
- **Indicador de saque:** Borde amarillo en el card del equipo que saca
- **Cooldown de 3 segundos:** Borde animado que recorre el perímetro del card para evitar toques accidentales
- **Vibración:** Feedback háptico al anotar punto (en dispositivos compatibles)
- **Temporizador:** Cuenta el tiempo del partido desde el primer punto hasta que termina
- **Compartir resultado:** Botón para compartir el resultado final (Web Share API o copiar al portapapeles)
- **Estadísticas individuales:** Al tocar el nombre de un jugador, se le atribuye el punto. Luego se puede registrar el tipo de golpe (Volea, Bandeja, Globo, Smash, Remate, Otro). En retas también se acumulan a lo largo de toda la jornada
- **Retas:** Roster de participantes, selección de parejas por partido, cronómetro con tiempo definido, tabla de clasificación individual editable e historial de retas anteriores
- **Historial de puntos:** Registro de todos los puntos con hora, separado por modo
- **Historial de partidos:** Registro de partidos terminados con fecha, resultado, duración, estadísticas individuales y detalle punto a punto con jugador y tipo de golpe
- **Tema claro/oscuro:** Toggle desde el menú para uso al aire libre
- **Deshacer:** Permite revertir el último punto anotado
- **Reiniciar:** Resetea solo los marcadores, mantiene nombres
- **Limpiar:** Resetea marcadores y nombres
- **Persistencia:** Todo se guarda en localStorage, no se pierde al cerrar
- **PWA:** Se puede instalar como app en el celular
- **Landscape:** En mobile, las tarjetas se muestran lado a lado en modo horizontal

## Controles del marcador

**Encabezado:** ☰ menú · ⓘ datos del partido · reloj al centro (cuenta regresiva en Retas, ascendente en los demás modos) · 👥 jugadores del partido · ⇄ cambiar de lado · 🏆 clasificación. Los tres últimos solo aparecen en Retas.

**Barra inferior:** solo se muestran los botones útiles en cada momento, para que los visibles sean más grandes.

| Botón | Cuándo aparece | Qué hace |
|-------|----------------|----------|
| Iniciar | Retas, antes de arrancar | Pone en marcha el partido y el cronómetro. Parpadea hasta que lo tocas |
| Saque | Siempre | Alterna qué equipo saca |
| Deshacer | Con el partido ya empezado | Quita el último punto |
| Reiniciar | Siempre | Marcador a cero con los mismos jugadores |
| Limpiar | Siempre | Además suelta a los jugadores; en Retas vacía las parejas sin tocar el roster |
| Fin | Retas, partido en curso | Termina el partido |

## Navegación

Toda la app se controla desde el menú hamburguesa (icono ☰) en la parte superior:

- **Configuración** - Muestra/oculta todas las opciones de juego (modo, nombres, formato, etc.)
- **Ayuda opciones** - Explica qué significa cada opción de configuración
- **Cómo jugar pádel/retas/libre** - Reglas y ejemplos de cada modo
- **Reta** - Participantes, parejas, fecha y tiempo por partido
- **Clasificación** - Tabla de la reta en curso, sus partidos y cierre de la jornada
- **Retas anteriores** - Historial de retas cerradas con tabla final y participantes
- **Partidos** - Historial de partidos terminados, con opción de borrar uno por uno
- **Buscar actualización** - Comprueba contra la red si hay una versión nueva publicada
- **Historial** - Registro de puntos anotados
- **Tema claro/oscuro** - Alterna entre modo oscuro y claro

## Configuración

Accesible desde el menú hamburguesa > Configuración:

| Opción | Valores | Descripción |
|--------|---------|-------------|
| Modo | Padel / Libre | Tipo de marcador |
| Nombres | Jugadores / Equipos | 2 nombres por equipo o 1 nombre de equipo |
| Formato | Normal / Retas | Formato de partido (solo Padel) |
| Sets | 1, 2, 3 | Sets para ganar (solo Normal) |
| Juegos | 6, 4 | Juegos por set (solo Normal) |
| Juegos | 4, 6, 8, ∞ | Juegos por partido, ∞ = sin tope (solo Retas) |
| Tiempo | 15, 20, 30, otro, ∞ | Minutos por partido, ∞ = sin reloj (solo Retas) |
| Fin | Todos / Anticipado | Jugar todos los juegos o terminar con mayoría (solo Retas) |
| Participantes | Lista de nombres | Roster de la reta y parejas de cada partido (solo Retas) |
| Puntos | 5, 10, 15, 20, 25, 30 | Puntos para ganar (solo Libre) |
| 40-40 | Oro / 1 Ventaja / 2 Ventajas | Qué pasa en empate a 40 |

## Instalar en el celular

La app se puede agregar a la pantalla de inicio y funciona como una app nativa.

**iPhone (Safari):**
1. Abre la app en Safari
2. Toca el botón de compartir (icono de cuadro con flecha hacia arriba)
3. Selecciona "Agregar a pantalla de inicio"
4. Toca "Agregar"

**Android (Chrome):**
1. Abre la app en Chrome
2. Toca el menú de tres puntos (esquina superior derecha)
3. Selecciona "Agregar a pantalla de inicio" o "Instalar app"
4. Confirma la instalación

Una vez instalada, se abre sin barra de navegador y funciona sin conexión a internet.

**¿Se actualiza sola?** Sí. Cuando se publica una nueva versión, la app se actualiza automáticamente la próxima vez que la abras (requiere conexión a internet en ese momento). No es necesario reinstalarla.

## Tecnología

- HTML, CSS, JavaScript (vanilla, sin frameworks)
- Bootstrap 5 (solo CSS) + Bootstrap Icons
- Web Audio API para sonidos
- Service Worker para uso offline
- LocalStorage para persistencia

## Contribuir

1. Fork del repositorio
2. Crea tu rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit de tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

Para sugerencias directas: [Enviar mensaje por WhatsApp](https://wa.me/525951109110?text=Hola%2C+quiero+aportar+una+sugerencia+o+reportar+un+problema+de+la+app+PadelScoreBoard)

## Autor

Desarrollado por **FrankZamora**

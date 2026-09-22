# Halloween Arcade

for PXT/Arcade

Extensión de bloques temática de Halloween para MakeCode Arcade, con el nivel
`halloweenNivel1` embebido, reglas de juego y control del jugador.

## Categoría Halloween

### Escenarios
- **Establecer nivel inicial con imagen [fondo]** — fija la imagen de fondo
  (picker de fondos, preseteado 160x120), activa el tilemap embebido `halloweenNivel1`
  (30x8) y registra las reglas de nivel:
  - Cofre (`chestClosed`): sonido `baDing`, +100 puntos y reemplaza la baldosa.
  - Enemigo: si el jugador cae desde arriba lo destruye (efecto de fuego) y
    gana; si lo golpea desde abajo, pierde.

### Sprites
- **Establecer [mySprite] como objeto [img] de tipo [Player]** — crea al
  jugador (imagen 16x16 vacía por defecto), con tipo configurable como el
  bloque `sprites.create`, la cámara lo sigue y activa la regla de caerse de la
  pantalla (y >= 120 → game over). Si el tipo es **Enemy**, lo coloca en la
  baldosa (26, 4), lo escala x4 y le da gravedad con un vaivén automático
  de 1 s a la derecha (vx 50) y 1 s a la izquierda (vx -50), por siempre.

### Fisicas
- **Establecer [mySprite] GRAVEDAD como [800]** — aplica aceleración vertical.

### Coordenadas Cartesianas
- **Establecer [mySprite] en la posicion x [50] y [80]** — coloca al jugador.

### Controles
- **Mover [mySprite] con los controles y velocidad [100]** — control
  izquierda/derecha (solo eje X).
- **Saltar [mySprite] con A o Boton Arriba con fuerza [300]** — salta solo al
  tocar el suelo.

## Limitaciones
- El tilemap `halloweenNivel1` va embebido en la extensión; no es un parámetro.
- El salto solo se ejecuta si el sprite está en contacto con el suelo.
- Depende de la extensión **Extra Effects** (fuego al aplastar enemigos) y de
  los tiles `sprites.dungeon.*` del target.

## Licencia
MIT
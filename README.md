# Halloween Arcade

for PXT/Arcade

Extensión de bloques temática de Halloween para MakeCode Arcade.

## Bloques

### Nivel
- **Establecer nivel inicial con imagen [img]** — fija la imagen de fondo y activa el tilemap embebido `nivel1` (30x8).

### Jugador
- **set [mySprite] to Establecer como objeto [img] de tipo player** — crea al jugador (imagen 16x16 vacía por defecto) y la cámara lo sigue.
- **Establecer [mySprite] GRAVEDAD como [800]** — aplica aceleración vertical.
- **Establecer [mySprite] en la posicion x [50] y [80]** — coloca al jugador.
- **Mover [mySprite] con los controles y velocidad [100]** — control izquierda/derecha (solo eje X).
- **Saltar [mySprite] con A o Boton Arriba con fuerza [300]** — salta solo al tocar el suelo.

## Limitaciones
- El tilemap `nivel1` va embebido en la extensión; no es un parámetro.
- El salto solo se ejecuta si el sprite está en contacto con el suelo.

## Licencia
MIT
/**
 * Bloques de Halloween para Arcade.
 * Incluye el nivel "nivel1" embebido (tilemap 30x8, TileScale.Sixteen).
 */
//% color="#FF6D00" icon="\uf6e2" weight=100 block="Halloween"
//% groups=['Nivel', 'Jugador', 'others']
namespace halloween {
    // ===== Estado interno (no expuesto a bloques) =====
    let _jumpSprite: Sprite = null
    let _jumpForce = 300
    let _jumpHooked = false

    // Solo salta si el sprite apoya sobre un tile (suelo).
    function _onGround(s: Sprite): boolean {
        return !!s && s.isHittingTile(CollisionDirection.Bottom)
    }

    function _hookJump(): void {
        if (_jumpHooked) return
        _jumpHooked = true
        const handler = () => {
            if (_jumpSprite && _onGround(_jumpSprite)) {
                _jumpSprite.vy = -_jumpForce
            }
        }
        controller.A.onEvent(ControllerButtonEvent.Pressed, handler)
        controller.up.onEvent(ControllerButtonEvent.Pressed, handler)
    }

    // ===== Shadow interno: imagen de jugador 16x16 vacía por defecto =====
    /**
     * Selector de imagen de jugador (lienzo 16x16 vacío por defecto).
     * @param img imagen del sprite
     */
    //% blockId=halloween_image_default
    //% block="$img"
    //% shim=TD_ID
    //% img.fieldEditor="sprite"
    //% img.fieldOptions.taggedTemplate="img"
    //% img.fieldOptions.decompileIndirectFixedInstances="true"
    //% img.fieldOptions.decompileArgumentAsString="true"
    //% img.fieldOptions.filter="!tile !dialog !background"
    //% img.fieldOptions.disableResize=1
    //% img.fieldOptions.initWidth=16
    //% img.fieldOptions.initHeight=16
    //% duplicateShadowOnDrag
    //% blockHidden=1
    //% weight=0
    export function _imageDefault(img: Image): Image {
        return img
    }

    /**
     * Establece la imagen de fondo y activa el nivel embebido "nivel1".
     * @param img imagen de fondo (160x120 aprox.)
     */
    //% blockId=halloween_set_initial_level
    //% block="Establecer nivel inicial con imagen $img"
    //% img.shadow=screen_image_picker
    //% group="Nivel" weight=100
    export function setInitialLevel(img: Image): void {
        scene.setBackgroundImage(img || image.create(160, 120))
        tiles.setCurrentTilemap(tilemap`nivel1`)
    }

    /**
     * Crea el jugador con la imagen dada (16x16 vacía por defecto), lo guarda en
     * la variable (mySprite) y hace que la cámara lo siga.
     * @param img la imagen del jugador
     */
    //% blockId=halloween_set_player
    //% block="Establecer como objeto $img de tipo player"
    //% blockSetVariable=mySprite
    //% img.shadow=halloween_image_default
    //% group="Jugador" weight=100
    export function setPlayer(img: Image): Sprite {
        const s = sprites.create(img || image.create(16, 16), SpriteKind.Player)
        scene.cameraFollowSprite(s)
        return s
    }

    /**
     * Aplica gravedad vertical al jugador.
     * @param sprite el jugador
     * @param ay aceleración vertical en px/s^2
     */
    //% blockId=halloween_set_gravity
    //% block="Establecer $sprite GRAVEDAD como $ay"
    //% sprite.shadow=variables_get
    //% sprite.defl=mySprite
    //% ay.defl=800
    //% group="Jugador" weight=90
    export function setGravity(sprite: Sprite, ay: number): void {
        sprite.ay = ay
    }

    /**
     * Coloca el jugador en la posición indicada.
     * @param sprite el jugador
     * @param x posición horizontal
     * @param y posición vertical
     */
    //% blockId=halloween_set_position
    //% block="Establecer $sprite en la posicion x $x y $y"
    //% sprite.shadow=variables_get
    //% sprite.defl=mySprite
    //% x.defl=50
    //% y.defl=80
    //% group="Jugador" weight=80
    export function setPosition(sprite: Sprite, x: number, y: number): void {
        if (sprite) sprite.setPosition(x, y)
    }

    /**
     * Mueve al jugador con el control cruzado (izquierda/derecha).
     * @param sprite el jugador
     * @param v velocidad horizontal
     */
    //% blockId=halloween_move_player
    //% block="Mover $sprite con los controles y velocidad $v"
    //% sprite.shadow=variables_get
    //% sprite.defl=mySprite
    //% v.defl=100
    //% group="Jugador" weight=70
    export function movePlayer(sprite: Sprite, v: number): void {
        if (sprite) controller.moveSprite(sprite, v, 0)
    }

    /**
     * Hace saltar al jugador con A o el botón Arriba, solo si está tocando el suelo.
     * @param sprite el jugador
     * @param f fuerza del salto (se aplica invertida, hacia arriba)
     */
    //% blockId=halloween_jump
    //% block="Saltar $sprite con A o Boton Arriba con fuerza $f"
    //% sprite.shadow=variables_get
    //% sprite.defl=mySprite
    //% f.defl=300
    //% group="Jugador" weight=60
    export function jump(sprite: Sprite, f: number): void {
        _jumpSprite = sprite
        _jumpForce = f
        _hookJump()
    }
}
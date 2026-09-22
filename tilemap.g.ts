// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "nivel1":
            case "nivel1":return tiles.createTilemap(hex`1e000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000004030305000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040305000000000000000000000000000000000000000000000000000000000000000000000000000000040500000000000000000000000000000000000000000000000000000000000000000000000000030303030101030303030303030303030305010201040303030303030303`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . 2 2 2 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.hazardLava1,sprites.dungeon.hazardLava0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.chestClosed], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "miMosaico":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.

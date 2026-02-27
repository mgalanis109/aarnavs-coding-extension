player.onChat("creative", function () {
    gameplay.setGameMode(
    CREATIVE,
    mobs.target(LOCAL_PLAYER)
    )
})
player.onChat("pig", function () {
    blocks.fill(
    GLASS,
    pos(0, 0, 0),
    pos(7, 7, 7),
    FillOperation.Outline
    )
    blocks.fill(
    MAGMA_BLOCK,
    pos(0, 0, 0),
    pos(7, 0, 7),
    FillOperation.Outline
    )
    for (let index = 0; index < 30; index++) {
        mobs.spawn(PIG, randpos(
        pos(2, 1, 2),
        pos(5, 3, 5)
        ))
    }
})
player.onChat("skeleton", function () {
    blocks.fill(
    GLASS,
    pos(0, 0, 0),
    pos(7, 7, 7),
    FillOperation.Outline
    )
    blocks.fill(
    MAGMA_BLOCK,
    pos(0, 0, 0),
    pos(7, 0, 7),
    FillOperation.Outline
    )
    for (let index = 0; index < 30; index++) {
        mobs.spawn(mobs.monster(SKELETON), randpos(
        pos(2, 1, 2),
        pos(5, 5, 5)
        ))
    }
})
player.onChat("cow", function () {
    blocks.fill(
    GLASS,
    pos(0, 0, 0),
    pos(7, 7, 7),
    FillOperation.Outline
    )
    blocks.fill(
    MAGMA_BLOCK,
    pos(0, 0, 0),
    pos(7, 0, 7),
    FillOperation.Outline
    )
    for (let index = 0; index < 30; index++) {
        mobs.spawn(COW, randpos(
        pos(2, 1, 2),
        pos(5, 3, 5)
        ))
    }
})
player.onChat("zombie", function () {
    blocks.fill(
    GLASS,
    pos(0, 0, 0),
    pos(7, 7, 7),
    FillOperation.Outline
    )
    blocks.fill(
    MAGMA_BLOCK,
    pos(0, 0, 0),
    pos(7, 0, 7),
    FillOperation.Outline
    )
    for (let index = 0; index < 30; index++) {
        mobs.spawn(mobs.monster(ZOMBIE), randpos(
        pos(2, 1, 2),
        pos(5, 3, 5)
        ))
    }
})
player.onChat("sheep", function () {
    blocks.fill(
    GLASS,
    pos(0, 0, 0),
    pos(7, 7, 7),
    FillOperation.Outline
    )
    blocks.fill(
    MAGMA_BLOCK,
    pos(0, 0, 0),
    pos(7, 0, 7),
    FillOperation.Outline
    )
    for (let index = 0; index < 30; index++) {
        mobs.spawn(SHEEP, randpos(
        pos(2, 1, 2),
        pos(5, 3, 5)
        ))
    }
})
player.onChat("survival", function () {
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
})
player.onChat("creeper", function () {
    blocks.fill(
    GLASS,
    pos(0, 0, 0),
    pos(7, 7, 7),
    FillOperation.Outline
    )
    blocks.fill(
    MAGMA_BLOCK,
    pos(0, 0, 0),
    pos(7, 0, 7),
    FillOperation.Outline
    )
    for (let index = 0; index < 30; index++) {
        mobs.spawn(mobs.monster(CREEPER), randpos(
        pos(2, 1, 2),
        pos(5, 3, 5)
        ))
    }
})
player.onChat("fish", function () {
    blocks.fill(
    GLASS,
    pos(0, 0, 0),
    pos(7, 7, 7),
    FillOperation.Outline
    )
    blocks.fill(
    MAGMA_BLOCK,
    pos(0, 0, 0),
    pos(7, 0, 7),
    FillOperation.Outline
    )
    for (let index = 0; index < 30; index++) {
        mobs.spawn(TROPICAL_FISH, randpos(
        pos(2, 1, 2),
        pos(5, 3, 5)
        ))
    }
})
player.onChat("water", function () {
    blocks.fill(
    LOG_OAK,
    pos(0, 0, 0),
    pos(100, 100, 100),
    FillOperation.Replace
    )
})
player.onChat("spider", function () {
    blocks.fill(
    GLASS,
    pos(0, 0, 0),
    pos(7, 7, 7),
    FillOperation.Outline
    )
    blocks.fill(
    MAGMA_BLOCK,
    pos(0, 0, 0),
    pos(7, 0, 7),
    FillOperation.Outline
    )
    for (let index = 0; index < 30; index++) {
        mobs.spawn(mobs.monster(SPIDER), randpos(
        pos(2, 1, 2),
        pos(5, 3, 5)
        ))
    }
})
player.onChat("chicken", function () {
    blocks.fill(
    GLASS,
    pos(0, 0, 0),
    pos(7, 7, 7),
    FillOperation.Outline
    )
    blocks.fill(
    MAGMA_BLOCK,
    pos(0, 0, 0),
    pos(7, 0, 7),
    FillOperation.Outline
    )
    for (let index = 0; index < 30; index++) {
        mobs.spawn(CHICKEN, randpos(
        pos(2, 1, 2),
        pos(5, 3, 5)
        ))
    }
})
player.say("Enter the type of mob in the chat which you would like to farm")
player.say("The options are: spider, creeper, zombie, skeleton, cow, chicken, sheep, fish, pig")

# Event trigger
**Fires when a certain event occurs.**

The following variables will be added
### When a player chats

| name    | description                | type                                |
|---------|----------------------------|-------------------------------------|
| target  | The player that sent the chat | [player](/variable/types.md#player) |
| message | Chat contents              | [string](/variable/types.md#string) |

### When a player executes a command

| name    | description                         | type                                     |
|---------|-------------------------------------|------------------------------------------|
| target  | The player that execute the command | [player](/variable/types.md#player)      |
| message | Entire text of command              | [string](/variable/types.md#string)      |
| cmd     | Command name                        | [string](/variable/types.md#string)      |
| args    | Command arguments                   | [list [string]](/variable/types.md#list) |

### When the player touches the block

| name   | description                       | type                                |
|--------|-----------------------------------|-------------------------------------|
| target | The player that touched the block | [player](/variable/types.md#player) |
| block  | Block                             | [block](/variable/types.md#block)   |

### When a player joins a server

| name   | description                       | type                                |
|--------|-----------------------------------|-------------------------------------|
| target | The player that joined the server | [player](/variable/types.md#player) |

### When a player leaves the server

| name   | description                     | type                                |
|--------|---------------------------------|-------------------------------------|
| target | The player that left the server | [player](/variable/types.md#player) |

### When a player breaks a block

| name   | description                    | type                                |
|--------|--------------------------------|-------------------------------------|
| target | The player that breaks a block | [player](/variable/types.md#player) |
| block  | Block                          | [block](/variable/types.md#block)   |

### When a player places a block

| name   | description                    | type                                |
|--------|--------------------------------|-------------------------------------|
| target | The player that places a block | [player](/variable/types.md#player) |
| block  | Block                          | [block](/variable/types.md#block)   |

### When the server start

| name | description | type |
|------|-------------|------|

### When the text of the sign is changed

| name       | description                | type                                     |
|------------|----------------------------|------------------------------------------|
| target     | Player who edited the sign | [player](/variable/types.md#player)      |
| sign_lines | Texts of sign              | [list [string]](/variable/types.md#list) |
| block      | Sign block                 | [block](/variable/types.md#block)        |

### When a player takes damage

| name    | description                        | type                                                                     |
|---------|------------------------------------|--------------------------------------------------------------------------|
| target  | The player that has been damaged   | [player](/variable/types.md#player)                                      |
| damager | The player or entity that attacked | [player](/variable/types.md#player), [entity](/variable/types.md#entity) |
| damage  | Amount of Damage                   | [number](/variable/types.md#number)                                      |
| cause   | Cause of Damage                    | [number](/variable/types.md#number)                                      |

### When a player attacks

| name    | description                               | type                                                                     |
|---------|-------------------------------------------|--------------------------------------------------------------------------|
| target  | The player or entity that attacked        | [player](/variable/types.md#player), [entity](/variable/types.md#entity) |
| damaged | The player or entity that took the damage | [player](/variable/types.md#player), [entity](/variable/types.md#entity) |
| damage  | Amount of Damage                          | [number](/variable/types.md#number)                                      |
| cause   | Cause of Damage                           | [number](/variable/types.md#number)                                      |

### When a player toggles their flying state

| name   | description                         | type                                |
|--------|-------------------------------------|-------------------------------------|
| target | The player that switched the flight | [player](/variable/types.md#player) |
| state  | True if the player is flying        | [bool](/variable/types.md#bool)     |

### When a player dies

| name   | description                                                                | type                                |
|--------|----------------------------------------------------------------------------|-------------------------------------|
| target | The player that died                                                       | [player](/variable/types.md#player) |
| killer | Player who killed the `target` (only if the target was killed by a player) | [player](/variable/types.md#player) |

### When an entity or player dies

| name   | description                                                                | type                                                                     |
|--------|----------------------------------------------------------------------------|--------------------------------------------------------------------------|
| target | Then entity or player that dead                                            | [player](/variable/types.md#player), [entity](/variable/types.md#entity) |
| killer | Player who killed the `target` (only if the target was killed by a player) | [player](/variable/types.md#player)                                      |

### When a player switches to another world

| name         | description                            | type                                                                     |
|--------------|----------------------------------------|--------------------------------------------------------------------------|
| target       | The player or entity that moved worlds | [player](/variable/types.md#player), [entity](/variable/types.md#entity) |
| origin_world | Source world                           | [world](/variable/types.md#world)                                        |
| target_world | Destination world                      | [world](/variable/types.md#world)                                        |

### When a player crafts

| name    | description                    | type                                   |
|---------|--------------------------------|----------------------------------------|
| target  | The player that crafted a item | [player](/variable/types.md#player)    |
| inputs  | Ingredients                    | [list [item]](/variable/types.md#list) |
| outputs | Crafted items                  | [list [item]](/variable/types.md#list) |

### When a player drops an item

| name   | description                     | type                                |
|--------|---------------------------------|-------------------------------------|
| target | The player that dropped an item | [player](/variable/types.md#player) |
| item   | Item                            | [item](/variable/types.md#item)     |

### When the furnace burns

| name | description | type                            |
|------|-------------|---------------------------------|
| fuel | Fuel        | [item](/variable/types.md#item) |

### When a world loaded

| name  | description | type                              |
|-------|-------------|-----------------------------------|
| world | World       | [world](/variable/types.md#world) |

### When a player sleeps in the bed

| name   | description                    | type                                |
|--------|--------------------------------|-------------------------------------|
| target | The player sleeping in the bed | [player](/variable/types.md#player) |
| block  | Bed                            | [block](/variable/types.md#block)   |

### When a player changes their own skin

| name   | description | type                                |
|--------|-------------|-------------------------------------|
| target | The player  | [player](/variable/types.md#player) |

### When a player's hunger level is reduced

| name   | description                | type                                |
|--------|----------------------------|-------------------------------------|
| target | The player                 | [player](/variable/types.md#player) |
| amount | Amount of hunger reduction | [number](/variable/types.md#number) |
| cause  | Cause of hunger reduction  | [number](/variable/types.md#number) |

### When a player eat an item

| name   | description                 | type                                |
|--------|-----------------------------|-------------------------------------|
| target | The player that ate an item | [player](/variable/types.md#player) |
| item   | Item                        | [item](/variable/types.md#item)     |

### When a player moves

| name      | description            | type                                    |
|-----------|------------------------|-----------------------------------------|
| target    | The player that moved  | [player](/variable/types.md#player)     |
| move_to   | Location before moving | [location](/variable/types.md#location) |
| move_from | Location after moving  | [location](/variable/types.md#location) |

### When a player toggles their sneaking state

| name   | description                    | type                                |
|--------|--------------------------------|-------------------------------------|
| target | The player                     | [player](/variable/types.md#player) |
| state  | True if the player is sneaking | [bool](/variable/types.md#bool)     |

### When a player toggles their sprinting state

| name   | description                     | type                                |
|--------|---------------------------------|-------------------------------------|
| target | The player                      | [player](/variable/types.md#player) |
| state  | True if the player is sprinting | [bool](/variable/types.md#bool)     |

### When a player jumps

| name   | description            | type                                |
|--------|------------------------|-------------------------------------|
| target | The player that jumped | [player](/variable/types.md#player) |

### When a projectile hits an entity

| name       | description                               | type                                                                     |
|------------|-------------------------------------------|--------------------------------------------------------------------------|
| target     | The entity that was hit by the projectile | [player](/variable/types.md#player), [entity](/variable/types.md#entity) |
| projectile | The projectile                            | [entity](/variable/types.md#entity)                                      |

### When a player pick up an item

| name   | description                       | type                                |
|--------|-----------------------------------|-------------------------------------|
| target | The player that picked up an item | [player](/variable/types.md#player) |
| item   | Item                              | [item](/variable/types.md#item)     |

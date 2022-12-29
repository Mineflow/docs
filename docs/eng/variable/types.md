# Variable types

### string

| operator | right | description | result |
| ---- | ---- | ---- | ---- |
| + | [string](#string) | join strings | [string](#string) |
| - | [string](#string) | delete a string | [string](#string) |
| * | [number](#number) | repeat a string | [string](#string) |

<details>
<summary>methods</summary>

> #### length
> Get a string length  
> examples: `{str.length()}`
>
> |arguments | description   | type |
> |---------------| ---- | ---- |
> | return value | string length | [number](#number) |

> #### toLowerCase
> Make a string lowercase  
> examples: `{str.toLowerCase()}`
>
> |arguments | description | type |
> | ---- | ---- | ---- |
> | return value | lowercased string | [string](#string) |

> #### toUpperCase
> Make a string uppercase  
> examples: `{str.toUpperCase()}`
>
> |arguments | description | type |
> | ---- | ---- | ---- |
> | return value | uppercased string | [string](#string) |

> #### substring
> Return part of a string  
> examples: `{str.substring(1, 5)}`
>
> |arguments | description | type |
> | ---- | ---- | ---- |
> | start | index to start | [number](#number) |
> | length | length of part of a string | [number](#number) |
> | return value | extracted part of string | [string](#string) |

</details>

### number

| operator | right | description | result |
| ---- | ---- | ---- | ---- |
| + | [number](#number) | addition | [number](#number) |
| - | [number](#number) | subtraction | [number](#number) |
| * | [number](#number) | multiplication | [number](#number) |
| / | [number](#number) | division | [number](#number) |

### bool

| operator | right | description | result |
| ---- | ---- | ---- | ---- |
|  +  | [bool](#bool) | Logical OR of the left variable and right variable | [bool](#bool) |
|  *  | [bool](#bool) | Logical AND of the left variable and right variable | [bool](#bool) |

### list

| operator | right | description | result |
| ---- | ---- | ---- | ---- |
|  +  | except [list](#list) | Apply + to each element in the list | [number](#number) |
|  -  | except [list](#list) | Apply - to each element in the list | [number](#number) |
|  *  | except [list](#list) | Apply * to each element in the list | [number](#number) |
|  /  | except [list](#list) | Apply / to each element in the list | [number](#number) |
|  \>  | - | [\>operator](/variable/about.md#\>operator) | [list](#list) |

<details>
<summary>methods</summary>

> #### count
> Get the number of elements  
> examples: `{list.count()}`
>
> | arguments | description | type |
> | ---- | ---- | ---- |
> | return value | Number of elements | [number](#number) |

</details>

### map

| operator | right | description | result |
| ---- | ---- | ---- | ---- |
|  +  | except [list](#list) | Apply + to each element in the map | [number](#number) |
|  -  | except [list](#list) | Apply - to each element in the map | [number](#number) |
|  *  | except [list](#list) | Apply * to each element in the map | [number](#number) |
|  /  | except [list](#list) | Apply / to each element in the map | [number](#number) |
|  \>  | - | [\>operator](/variable/about.md#\>operator) | [map](#map) |

<details>
<summary>methods</summary>

> #### count
> Get the number of elements  
> examples: `{list.count()}`
>
> | arguments | description | type |
> | ---- | ---- | ---- |
> | return value | Number of elements | [number](#number) |

</details>

### item

A variable containing item data.  
properties:

| property | description | type |
| ---- | ---- | ---- |
| name | name of item | [string](#string) |
| vanilla_name | vanilla name of item  |  [string](#string) |
| custom_name | custom name of item  |  [string](#string) |
| id | id of item | [number](#number) |
| damage | damage value of item | [number](#number) |
| meta | damage value of item | [number](#number) |
| count | number of items | [number](#number) |
| lore | lore of item | [list [string]](#list) |
| block | a block when a player placed item  |  [block](#block) |

### world

A variable containing world data.  
properties:

| property | description | type |
| ---- | ---- | ---- |
| name | name of world | [string](#string) |
| folderName | folder name of world | [string](#string) |
| id | id of world | [number](#number) |
| spawn | spawn point of the world | [position](#position) |
| safe_spawn | safe spawn point of the world | [position](#position) |
| time | world time | [number](#number) |
| players | list of players in the world | [list [player]](#list) |
| livings | list of livings in the world | [list [entity]](#list) |
| entities | list of entities in the world | [list [entity]](#list) |

### vector3

A variable containing 3D vector data.  
properties:

| property | description | type |
| ---- | ---- | ---- |
| x | x-coordinate value of the position | [number](#number) |
| y | y-coordinate value of the position | [number](#number) |
| z | z-coordinate value of the position | [number](#number) |
| xyz | x, y and z coordinate value of the position | [string](#string) |
| down | coordinates of the lower neighbor | [vector3](#vector3) |
| up | coordinates of the upper neighbor | [vector3](#vector3) |
| north | coordinates next to north | [vector3](#vector3) |
| south | coordinates next to south | [vector3](#vector3) |
| west | coordinates next to west | [vector3](#vector3) |
| east | coordinates next to east | [vector3](#vector3) |

### position

A variable containing position data.  
properties:  
(You can also use all the properties of the [vector3](#vector3).)

| property | description | type |
| ---- | ---- | ---- |
| world | world of the position | [world](#world) |
| position | coordinates | [position](#position) |
| down | coordinates of the lower neighbor | [position](#position) |
| up | coordinates of the upper neighbor | [position](#position) |
| north | coordinates next to north | [position](#position) |
| south | coordinates next to south | [position](#position) |
| west | coordinates next to west | [position](#position) |
| east | coordinates next to east | [position](#position) |

### location

A variable containing location data.  
properties:  
(You can also use all the properties of the [vector3](#vector3) and [position](#position).)

| property | description | type |
| ---- | ---- | ---- |
| yaw | angle of the player's body | [number](#number) |
| pitch | angle of the player's head | [number](#number) |
| down | coordinates of the lower neighbor | [location](#location) |
| up | coordinates of the upper neighbor | [location](#location) |
| north | coordinates next to north | [location](#location) |
| south | coordinates next to south | [location](#location) |
| west | coordinates next to west | [location](#location) |
| east | coordinates next to east | [location](#location) |

### block

A variable containing block data.  
properties:  
(You can also use all the properties of the [vector3](#vector3) and [position](#position).)

| property | description | type |
| ---- | ---- | ---- |
| name | name of block | [string](#string) |
| id | id of block | [number](#number) |
| damage | damage value of block | [number](#number) |
| meta | damage value of block | [number](#number) |
| item | items obtained when a player middle clicks on a block | [number](#number) |
| down | block of the lower neighbor | [block](#block) |
| up | block of the upper neighbor | [block](#block) |
| north | block next to north | [block](#block) |
| south | block next to south | [block](#block) |
| west | block next to west | [block](#block) |
| east | block next to east | [block](#block) |

### inventory
A variable containing inventory data.
properties:

|  property  |  description  | type |
| ---- | ---- | ---- |
| all | all items | [list [item]](#list) |
| size | inventory size | [number](#number) |
| `number` | a item at the index of `number` in the inventory  | [item](#item) |

### aabb
A variable containing area data.
properties:

|  property  |  description  | type |
| ---- | ---- | ---- |
| min_x | minimum x-coordinate value | [number](#number) |
| min_y | minimum y-coordinate value | [number](#number) |
| min_z | minimum z-coordinate value | [number](#number) |
| max_x | maximum x-coordinate value | [number](#number) |
| max_y | maximum y-coordinate value | [number](#number) |
| max_z | maximum z-coordinate value | [number](#number) |
| min | coordinates with min_x, min_y, and min_z | [vector3](#vector3) |
| max | coordinates with max_x, max_y, and max_z | [vector3](#vector3) |

### entity

A variable containing entity data.  
properties:  
(You can also use all the properties of the [vector3](#vector3) and [position](#position).)

| property | description | type |
| ---- | ---- | ---- |
| id | entity id | [number](#number) |
| nameTag | The name floating above the entity | [string](#string) |
| health | entity's current health | [number](#number) |
| maxHealth | entity's max health | [number](#number) |
| yaw | entity's yaw | [number](#number) |
| pitch | entity's pitch | [number](#number) |
| direction | entity's direction (number, 0=South, 1=West, 2=North, 3=East) | [number](#number) |
| onGround | true if the entity is on ground | [bool](#bool) |
| bounding_box | bounding box of the entity | [aabb](#aabb) |

### living

A variable containing living data.  
properties:  
(You can also use all the properties of the [vector3](#vector3), [position](#position), and [entity](#entity).)

|  property  |  description  | type |
| ---- | ---- | ---- |
| armor | armor inventory of the player | [inventory](#inventory) |
| sprinting | true if the player is sprinting | [bool](#bool) |
| sneaking | true if the player is sneaking | [bool](#bool) |
| gliding | true if the player is gliding | [bool](#bool) |
| swimming | true if the player is swimming | [bool](#bool) |

### human

A variable containing human data.  
properties:  
(You can also use all the properties of the [vector3](#vector3), [position](#position), [living](#living), and [entity](#entity).)

| property | description | type |
| ---- | ---- | ---- |
| hand | player's hand item | [item](#item) |
| food | player's food level | [number](#number) |
| xp | current total xp of a player | [number](#number) |
| xp_level | xp level of a player | [number](#number) |
| xp_progress | xp progress of a player | [number](#number) |
| inventory | inventory of the player | [inventory](#inventory) |

### player

A variable containing player data.  
properties:  
(You can also use all the properties of the [vector3](#vector3), [position](#position), [entity](#entity), [living](#living), and [human](#human).)

| property | description                       | type |
| ---- |-----------------------------------| ---- |
| name | name of player                    | [string](#string) |
| display_name | display name of player            | [string](#string) |
| ping | ping of player                    | [number](#number) |
| locale | language that the player is using | [string](#string) |
| ip | ip address of the player          | [string](#string) |
| port | client port number of the player  | [number](#number) |
| uuid | UUID of the player                | [string](#string) |
| spawn_point | spawn point of the player         | [position](#position) |
| flying | true if the player is flying      | [bool](#bool) |
| first_played | time the player first played      | [number](#number) |
| last_played  | time the player last played       | [number](#number) |

### event

A variable containing event data.  
properties:

| property | description | type |
| ---- | ---- | ---- |
| name | name of event | [string](#string) |
| isCanceled | true if the event is canceled | [bool](#bool) |

### server

A variable containing server data.  
properties:

| property      | description            | type                   |
|---------------|------------------------|------------------------|
| name          | server name            | [string](#string)      |
| motd          | server motd            | [string](#string)      |
| ip            | server ip address      | [string](#string)      |
| port          | server port            | [number](#number)      |
| tick          | server tick            | [number](#number)      |
| default_world | default world          | [number](#number)      |
| worlds        | loaded worlds          | [list [world]](#list)  |
| players       | players in the server  | [list [player]](#list) |
| livings       | livings in the server  | [list [entity]](#list) |
| entities      | entities in the server | [list [entity]](#list) |
| ops           | server operators       | [list [string]](#list) |
| bans          | banned players         | [list [string]](#list) |
| ip_bans       | ip banned players      | [list [string]](#list) |
| whitelist     | whitelisted players    | [list [string]](#list) |

### config

A variable containing config file data.

| operator | right | description                                 | result |
| ---- | ---- |---------------------------------------------| ---- |
|  \>  | - | [\>operator](/variable/about.md#\>operator) | [list](#list) |

### scoreboard

A variable containing scoreboard data.

# 変数のタイプ

### string

| 演算子 | 右辺の型              | 説明       | 演算後の型             |
|-----|-------------------|----------|-------------------|
| +   | [string](#string) | 文字列を連結する | [string](#string) |
| -   | [string](#string) | 文字列を削除する | [string](#string) |
| *   | [number](#number) | 文字列を繰り返す | [string](#string) |

<details>
<summary>メソッド一覧</summary>

> #### length
> 文字列の長さを取得する  
> 使用例: `{str.length()}`
>
> | 引数 | 説明 | 型 |
> | ---- | ---- | ---- |
> | 戻り値 | 文字列の長さ | [number](#number) |

> #### toLowerCase, lowercase
> 文字列を小文字にする  
> 使用例: `{str.toLowerCase()}`
>
> | 引数 | 説明 | 型 |
> | ---- | ---- | ---- |
> | 戻り値 | 小文字になった文字列 | [string](#string) |

> #### toUpperCase, uppercase
> 文字列を大文字にする  
> 使用例: `{str.toUpperCase()}`
>
> | 引数 | 説明 | 型 |
> | ---- | ---- | ---- |
> | 戻り値 | 大文字になった文字列 | [string](#string) |

> #### substring
> 文字列の一部を取得する  
> 使用例: `{str.substring(1, 5)}`
>
> | 引数 | 説明 | 型 |
> | ---- | ---- | ---- |
> | start | 開始位置 | [number](#number) |
> | length | 文字列の長さ | [number](#number) |
> | 戻り値 | 文字列 | [string](#string) |

</details>

### number

| 演算子 | 右辺の型              | 説明              | 演算後の型             |
|-----|-------------------|-----------------|-------------------|
| +   | [number](#number) | 左辺の変数と右辺の変数を足す  | [number](#number) |
| -   | [number](#number) | 左辺の変数から右辺の変数を引く | [number](#number) |
| *   | [number](#number) | 左辺の変数に右辺の変数を掛ける | [number](#number) |
| /   | [number](#number) | 左辺の変数を右辺の変数で割る  | [number](#number) |

### bool

| 演算子 | 右辺の型          | 説明           | 演算後の型         |
|-----|---------------|--------------|---------------|
| +   | [bool](#bool) | 左辺と右辺の変数の論理和 | [bool](#bool) |
| *   | [bool](#bool) | 左辺と右辺の変数の論理積 | [bool](#bool) |

### list

| 演算子 | 右辺の型            | 説明                | 演算後の型             |
|-----|-----------------|-------------------|-------------------|
| +   | [list](#list)以外 | リストの各要素に対して+演算をする | [number](#number) |
| -   | [list](#list)以外 | リストの各要素に対して-演算をする | [number](#number) |
| *   | [list](#list)以外 | リストの各要素に対して*演算をする | [number](#number) |
| /   | [list](#list)以外 | リストの各要素に対して/演算をする | [number](#number) |
| \>  | -               | [\>演算子](/variable/about.md#\>演算子)   | [list](#list)     |

<details>
<summary>メソッド一覧</summary>

> #### count
> リストの要素数を取得する  
> 使用例: `{list.count()}`
>
> |  引数 | 説明  | 型 |
> | ---- | ---- | ---- |
> |  戻り値  | リストの要素数  | [number](#number) |

</details>

### map

|  演算子  | 右辺の型 | 説明                                | 演算後の型 |
| ---- | ---- |-----------------------------------| ---- |
|  +  | [list](#list)以外 | マップの各要素に対して+演算をする                 | [number](#number) |
|  -  | [list](#list)以外 | マップの各要素に対して-演算をする                 | [number](#number) |
|  *  | [list](#list)以外 | マップの各要素に対して*演算をする                 | [number](#number) |
|  /  | [list](#list)以外 | マップの各要素に対して/演算をする                 | [number](#number) |
|  \>  | - | [\>演算子](/variable/about.md#\>演算子) | [map](#map) |

<details>
<summary>メソッド一覧</summary>

> #### count
> マップの要素数を取得する  
> 使用例: `{list.count()}`
>
> |  引数 | 説明  | 型 |
> | ---- | ---- | ---- |
> |  戻り値  | マップの要素数  | [number](#number) |

</details>

### item

アイテムの情報を持っている変数  
プロパティ一覧:

|  プロパティ名  |  説明  | 型 |
| ---- | ---- | ---- |
| name | アイテムの名前  |  [string](#string) |
| vanilla_name | バニラでのアイテムの名前  |  [string](#string) |
| custom_name | プラグインなどで設定したアイテムの名前  |  [string](#string) |
| id | アイテムのID  |  [number](#number) |
| damage |　アイテムのダメージ値  |  [number](#number) |
| meta |　アイテムのダメージ値  |  [number](#number) |
| count | アイテムの個数  |  [number](#number) |
| lore | アイテムの説明  |  [list [string]](#list) |
| block | 地面をタップしたときに設定されるブロック  |  [block](#block) |

### world

ワールドの情報を持っている変数  
プロパティ一覧:

|  プロパティ名  |  説明  | 型 |
| ---- | ---- | ---- |
| name | ワールド名 | [string](#string) |
| folderName | ワールドのフォルダー名 | [string](#string) |
| id | ワールドのID | [number](#number) |
| spawn | ワールドのスポーンポイント | [position](#position) |
| safe_spawn | ワールドの安全なスポーンポイント | [position](#position) |
| time | ワールドの時間 | [number](#number) |
| players | ワールドにいるプレイヤー一覧 | [list [player]](#list) |
| livings | ワールドにいる生き物一覧 | [list [entity]](#list) |
| entities | ワールドにいるエンティティ一覧 | [list [entity]](#list) |

### vector3

3次元ベクトルの情報を持っている変数  
プロパティ一覧:

|  プロパティ名  |  説明  | 型 |
| ---- | ---- | ---- |
| x | x座標の値 | [number](#number) |
| y | y座標の値 | [number](#number) |
| z | z座標の値 | [number](#number) |
| xyz | x座標とy座標とz座標の値 | [string](#string) |
| down | 1つ下の座標 | [vector3](#vector3) |
| up | 1つ上の座標 | [vector3](#vector3) |
| north | 1つ北の座標 | [vector3](#vector3) |
| south | 1つ南の座標 | [vector3](#vector3) |
| west | 1つ西の座標 | [vector3](#vector3) |
| east | 1つ東の座標 | [vector3](#vector3) |

### position

座標の情報を持っている変数  
プロパティ一覧:  
([vector3](#vector3)のプロパティもすべて使用できます)

|  プロパティ名  |  説明  | 型 |
| ---- | ---- | ---- |
| world | 座標のワールド | [world](#world) |
| position | 座標 | [position](#position) |
| down | 1つ下の座標 | [position](#position) |
| up | 1つ上の座標 | [position](#position) |
| north | 1つ北の座標 | [position](#position) |
| south | 1つ南の座標 | [position](#position) |
| west | 1つ西の座標 | [position](#position) |
| east | 1つ東の座標 | [position](#position) |

### location

座標と向きの情報を持っている変数  
プロパティ一覧:  
([vector3](#vector3),[position](#position)のプロパティもすべて使用できます)

|  プロパティ名  |  説明  | 型 |
| ---- | ---- | ---- |
| yaw | 体の向き | [number](#number) |
| pitch | 頭の向き | [number](#number) |
| down | 1つ下の座標 | [location](#location) |
| up | 1つ上の座標 | [location](#location) |
| north | 1つ北の座標 | [location](#location) |
| south | 1つ南の座標 | [location](#location) |
| west | 1つ西の座標 | [location](#location) |
| east | 1つ東の座標 | [location](#location) |

### block

ブロックの情報を持っている変数  
プロパティ一覧:  
([vector3](#vector3),[position](#position)のプロパティもすべて使用できます)

|  プロパティ名  |  説明  | 型 |
| ---- | ---- | ---- |
| name | ブロックの名前 | [string](#string) |
| id | ブロックのID | [number](#number) |
| damage | ブロックのダメージ値 | [number](#number) |
| meta | ブロックのダメージ値 | [number](#number) |
| item | ミドルクリックしたときに手に入るアイテム | [number](#number) |
| down | 1つ下のブロック | [block](#block) |
| up | 1つ上のブロック | [block](#block) |
| north | 1つ北のブロック | [block](#block) |
| south | 1つ南のブロック | [block](#block) |
| west | 1つ西のブロック | [block](#block) |
| east | 1つ東のブロック | [block](#block) |

### inventory
インベントリの情報を持っている変数
プロパティ一覧:

|  プロパティ名  |  説明  | 型 |
| ---- | ---- | ---- |
| all | 全てのアイテム | [list [item]](#list) |
| size | インベントリのサイズ | [number](#number) |
| `数字` | `数字`の場所にあるアイテム | [item](#item) |

### aabb
範囲の情報を持っている変数
プロパティ一覧:

|  プロパティ名  |  説明  | 型 |
| ---- | ---- | ---- |
| min_x | 小さい方のx座標の値 | [number](#number) |
| min_y | 小さい方のy座標の値 | [number](#number) |
| min_z | 小さい方のz座標の値 | [number](#number) |
| max_x | 大きい方のx座標の値 | [number](#number) |
| max_y | 大きい方のy座標の値 | [number](#number) |
| max_z | 大きい方のz座標の値 | [number](#number) |
| min | min_x, min_y, min_zをまとめた座標 | [vector3](#vector3) |
| max | max_x, max_y, max_zをまとめた座標 | [vector3](#vector3) |

### entity

エンティティの情報を持っている変数  
プロパティ一覧:  
([vector3](#vector3),[position](#position)のプロパティもすべて使用できます)

|  プロパティ名  |  説明  | 型 |
| ---- | ---- | ---- |
| id | エンティティのID | [number](#number) |
| nameTag | エンティティの頭の上に浮いている名前 | [string](#string) |
| health | エンティティの体力 | [number](#number) |
| maxHealth | エンティティの最大体力 | [number](#number) |
| yaw | エンティティの体の向き | [number](#number) |
| pitch | エンティティの頭の向き | [number](#number) |
| direction | エンティティの向いている方角 (0=南, 1=西, 2=北, 3=東) | [number](#number) |
| onGround | エンティティが地面に触れているか | [bool](#bool) |
| bounding_box | エンティティのバウンディングボックス | [aabb](#aabb) |

### living

生き物の情報を持っている変数  
プロパティ一覧:  
([vector3](#vector3),[position](#position),[entity](#entity)のプロパティもすべて使用できます)

|  プロパティ名  |  説明  | 型 |
| ---- | ---- | ---- |
| armor | プレイヤーのアーマーインベントリ | [inventory](#inventory) |
| sprinting | プレイヤーが走っているか | [bool](#bool) |
| sneaking | プレイヤーがスニークしているか | [bool](#bool) |
| gliding | プレイヤーがエリトラで滑走しているか | [bool](#bool) |
| swimming | プレイヤーが泳いでいるか | [bool](#bool) |

### human

人間の情報を持っている変数  
プロパティ一覧:  
([vector3](#vector3),[position](#position),[living](#living),[entity](#entity)のプロパティもすべて使用できます)

|  プロパティ名  |  説明  | 型 |
| ---- | ---- | ---- |
| hand | プレイヤーの手にあるアイテム | [item](#item) |
| food | プレイヤーの空腹度 | [number](#number) |
| xp | プレイヤーの経験値 | [number](#number) |
| xp_level | プレイヤーの経験値レベル | [number](#number) |
| xp_progress | プレイヤーの経験値の進捗 | [number](#number) |
| inventory | プレイヤーのインベントリ | [inventory](#inventory) |

### player

プレイヤーの情報を持っている変数  
プロパティ一覧:  
([vector3](#vector3),[position](#position),[entity](#entity),[living](#living),[human](#human)のプロパティもすべて使用できます)

| プロパティ名       | 説明              | 型 |
|--------------|-----------------| ---- |
| name         | プレイヤーの名前        | [string](#string) |
| display_name | プレイヤーの表示名       | [string](#string) |
| ping         | プレイヤーのping      | [number](#number) |
| locale       | プレイヤーの使用している言語  | [string](#string) |
| ip           | プレイヤーのIPアドレス    | [string](#string) |
| port         | プレイヤーのポート番号     | [number](#number) |
| uuid         | プレイヤーのUUID      | [string](#string) |
| spawn_point  | プレイヤーのスポーンポイント  | [position](#position) |
| flying       | プレイヤーが飛んでいるか    | [bool](#bool) |
| first_played | プレイヤーが最初に参加した時間 | [number](#number) |
| last_played  | プレイヤーが最後に参加した時間 | [number](#number) |

### event

イベントの情報を持っている変数  
プロパティ一覧:

|  プロパティ名  |  説明  | 型 |
| ---- | ---- | ---- |
| name | イベントの名前 | [string](#string) |
| isCanceled | イベントがキャンセルされたか | [bool](#bool) |

### server

サーバーの情報を持っている変数  
プロパティ一覧:

| プロパティ名        | 説明                      | 型                      |
|---------------|-------------------------|------------------------|
| name          | サーバーの名前                 | [string](#string)      |
| motd          | サーバーのmotd               | [string](#string)      |
| ip            | サーバーのipアドレス             | [string](#string)      |
| port          | サーバーのport               | [number](#number)      |
| start_time    | サーバーを起動した時間             | [number](#number)      |
| tick          | サーバーのtick               | [number](#number)      |
| microtime     | 現在のマイクロ秒                | [number](#number)      |
| time          | 現在の時刻                   | [map](#map)            |
| time.hours    | 現在の時間                   | [number](#number)      |
| time.minutes  | 現在の分                    | [number](#number)      |
| time.seconds  | 現在の秒                    | [number](#number)      |
| date          | 現在の日付                   | [map](#map)            |
| date.year     | 現在の年                    | [number](#number)      |
| date.month    | 現在の月                    | [number](#number)      |
| date.day      | 現在の日                    | [number](#number)      |
| default_world | デフォルトのワールド              | [number](#number)      |
| worlds        | サーバーに読み込まれたワールド         | [list [world]](#list)  |
| players       | サーバーにいるプレイヤー            | [list [player]](#list) |
| livings       | サーバーにいる生き物              | [list [entity]](#list) |
| entities      | サーバーにいるエンティティ           | [list [entity]](#list) |
| ops           | 全てのopの名前                | [list [string]](#list) |
| bans          | banされたプレイヤーの名前          | [list [string]](#list) |
| ip_bans       | ip banされたプレイヤーの名前       | [list [string]](#list) |
| whitelist     | ホワイトリストに追加されているプレイヤーの名前 | [list [string]](#list) |

### config

設定ファイルの情報を持っている変数

|  演算子  | 右辺の型 | 説明  | 演算後の型 |
| ---- | ---- | ---- | ---- |
|  \>  | - | [\>演算子](/variable/about.md#\>演算子) | [config](#config) |

### scoreboard

スコアボードの情報を持っている変数

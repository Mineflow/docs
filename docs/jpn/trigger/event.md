# イベントトリガー
**特定のイベントが起こったときに発火します**

以下の変数が追加されます
### プレイヤーがチャットしたとき

| 変数名   | 説明                | 型 |
|---------|-------------------| ---- |
| target  | チャットを送信したプレイヤー    | [player](/variable/types.md#player) |
| message | チャット内容            | [string](/variable/types.md#string) |

### プレイヤーがコマンドを実行したとき

| 変数名 | 説明             | 型 |
| ---- |----------------| ---- |
| target | コマンドを実行したプレイヤー | [player](/variable/types.md#player) |
| message | コマンド全体         | [string](/variable/types.md#string) |
| cmd | コマンド名          | [string](/variable/types.md#string) |
| args | コマンドパラメータ      | [list [string]](/variable/types.md#list) |

### プレイヤーがブロックを触ったとき

| 変数名 | 説明 | 型 |
| ---- | ---- | ---- |
| target | ブロックを触ったプレイヤー | [player](/variable/types.md#player) |
| block | 触ったブロック | [block](/variable/types.md#block) |

### プレイヤーがサーバーに参加したとき

| 変数名 | 説明 | 型 |
| ---- | ---- | ---- |
| target | サーバーに参加したプレイヤー | [player](/variable/types.md#player) |

### プレイヤーがサーバーから退室したとき

| 変数名 | 説明 | 型 |
| ---- | ---- | ---- |
| target | サーバーから退出したプレイヤー | [player](/variable/types.md#player) |

### プレイヤーがブロックを壊したとき

| 変数名 | 説明 | 型 |
| ---- | ---- | ---- |
| target | ブロックを壊したプレイヤー | [player](/variable/types.md#player) |
| block | 壊したブロック | [block](/variable/types.md#block) |

### プレイヤーがブロックを置いたとき

| 変数名 | 説明 | 型 |
| ---- | ---- | ---- |
| target | ブロックを置いたプレイヤー | [player](/variable/types.md#player) |
| block | 置いたブロック | [block](/variable/types.md#block) |

### サーバーが開始したとき

| 変数名 | 説明 | 型 |
| ---- | ---- | ---- |

### 看板の内容が変更されたとき

| 変数名 | 説明 | 型 |
| ---- | ---- | ---- |
| target | 看板に書いたプレイヤー | [player](/variable/types.md#player) |
| sign_lines | 看板の文字 | [list [string]](/variable/types.md#list) |
| block | 看板 | [block](/variable/types.md#block) |

### プレイヤーがダメージを受けたとき

| 変数名 | 説明 | 型 |
| ---- | ---- | ---- |
| target | ダメージを受けたプレイヤー | [player](/variable/types.md#player) |
| damager | 攻撃したプレイヤー(エンティティ) | [player](/variable/types.md#player), [entity](/variable/types.md#entity) |
| damage | ダメージ量 | [number](/variable/types.md#number) |
| cause | ダメージを受けた原因 | [number](/variable/types.md#number) |

### プレイヤーが攻撃したとき

| 変数名 | 説明 | 型 |
| ---- | ---- | ---- |
| target | 攻撃したプレイヤー(エンティティ) | [player](/variable/types.md#player), [entity](/variable/types.md#entity) |
| damaged | ダメージを受けたプレイヤー(エンティティ) | [player](/variable/types.md#player), [entity](/variable/types.md#entity) |
| damage | ダメージ量 | [number](/variable/types.md#number) |
| cause | ダメージを受けた原因 | [number](/variable/types.md#number) |

### プレイヤーがフライ状態を切り替えたとき

| 変数名 | 説明 | 型 |
| ---- | ---- | ---- |
| target | プレイヤー | [player](/variable/types.md#player) |
| state | 飛行しているか | [bool](/variable/types.md#bool) |

### プレイヤーが死亡したとき

| 変数名 | 説明 | 型 |
| ---- | ---- | ---- |
| target | 死亡したプレイヤー | [player](/variable/types.md#player) |
| killer | 殺したプレイヤー (プレイヤーに殺された場合のみ) | [player](/variable/types.md#player) |

### プレイヤーかエンティティが死亡したとき

| 変数名 | 説明 | 型 |
| ---- | ---- | ---- |
| target | 死亡したエンティティ | [player](/variable/types.md#player), [entity](/variable/types.md#entity) |
| killer | 殺したプレイヤー (プレイヤーに殺された場合のみ) | [player](/variable/types.md#player) |

### プレイヤーがワールドを移動したとき

| 変数名 | 説明 | 型 |
| ---- | ---- | ---- |
| target | ワールドを移動したプレイヤー(エンティティ) | [player](/variable/types.md#player), [entity](/variable/types.md#entity) |
| origin_world | 移動元のワールド | [world](/variable/types.md#world) |
| target_world | 移動先のワールド | [world](/variable/types.md#world) |

### プレイヤーがクラフトしたとき

| 変数名 | 説明 | 型 |
| ---- | ---- | ---- |
| target | クラフトしたプレイヤー | [player](/variable/types.md#player) |
| inputs | 材料 | [list [item]](/variable/types.md#list) |
| outputs | クラフトしてできたアイテム | [list [item]](/variable/types.md#list) |

### プレイヤーがアイテムを捨てたとき

| 変数名 | 説明 | 型 |
| ---- | ---- | ---- |
| target | アイテムを捨てたプレイヤー | [player](/variable/types.md#player) |
| item | 捨てられたアイテム | [item](/variable/types.md#item) |

### かまどが燃えたとき

| 変数名 | 説明 | 型 |
| ---- | ---- | ---- |
| fuel | 燃料 | [item](/variable/types.md#item) |

### ワールドが読みこまれたとき

| 変数名 | 説明 | 型 |
| ---- | ---- | ---- |
| world | 読み込まれたワールド | [world](/variable/types.md#world) |

### ベッドに入ったとき

| 変数名 | 説明 | 型 |
| ---- | ---- | ---- |
| target | ベッドに入ったプレイヤー | [player](/variable/types.md#player) |
| block | ベッド | [block](/variable/types.md#block) |

### プレイヤーがスキンを変更したとき

| 変数名 | 説明 | 型 |
| ---- | ---- | ---- |
| target | プレイヤー | [player](/variable/types.md#player) |

### 空腹度が減ったとき

| 変数名 | 説明 | 型 |
| ---- | ---- | ---- |
| target | プレイヤー | [player](/variable/types.md#player) |
| amount | 空腹度の減った量 | [number](/variable/types.md#number) |
| cause | 空腹度が減った原因 | [number](/variable/types.md#number) |

### アイテムを食べたとき

| 変数名 | 説明 | 型 |
| ---- | ---- | ---- |
| target | アイテムを食べたプレイヤー | [player](/variable/types.md#player) |
| item | アイテム | [item](/variable/types.md#item) |

### プレイヤーが動いたとき

| 変数名 | 説明 | 型 |
| ---- | ---- | ---- |
| target | 動いたプレイヤー | [player](/variable/types.md#player) |
| move_to | 元々いた場所 | [location](/variable/types.md#location) |
| move_from | 移動先の場所 | [location](/variable/types.md#location) |

### プレイヤーがスニーク状態を切り替えたとき

| 変数名 | 説明 | 型 |
| ---- | ---- | ---- |
| target | プレイヤー | [player](/variable/types.md#player) |
| state | スニークしているか | [bool](/variable/types.md#bool) |

### プレイヤーが走り始めた/走り終わったとき

| 変数名 | 説明 | 型 |
| ---- | ---- | ---- |
| target | プレイヤー | [player](/variable/types.md#player) |
| state | 走っているか | [bool](/variable/types.md#bool) |

### プレイヤーがジャンプしたとき

| 変数名 | 説明 | 型 |
| ---- | ---- | ---- |
| target | ジャンプしたプレイヤー | [player](/variable/types.md#player) |

### 発射されたものがエンティティに当たったとき

| 変数名 | 説明 | 型 |
| ---- | ---- | ---- |
| target | 当たったエンティティ | [player](/variable/types.md#player), [entity](/variable/types.md#entity) |
| projectile | 発射されたもの | [entity](/variable/types.md#entity) |

### プレイヤーがアイテムを拾った時

| 変数名 | 説明 | 型 |
| ---- | ---- | ---- |
| target | アイテムを拾ったプレイヤー | [player](/variable/types.md#player) |
| item | アイテム | [item](/variable/types.md#item) |

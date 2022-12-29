# フォームトリガー
**フォームを送信したとき，ボタンを押した時に発火します**

以下の変数が追加されます
### モーダル

| 変数名              | 説明                | 型                                    |
|------------------|-------------------|--------------------------------------|
| data             | `はい`ボタンがクリックされたか  | [bool](/variable/types.md#bool)     |
| button1          | `はい`ボタンの内容        | [map](/variable/types.md#map)       |
| button1.selected | `はい`ボタンがクリックされたか  | [bool](/variable/types.md#bool)     |
| button1.text     | `はい`ボタンのテキスト      | [string](/variable/types.md#string) |
| button2          | `いいえ`ボタンの内容       | [map](/variable/types.md#map)       |
| button2.selected | `いいえ`ボタンがクリックされたか | [bool](/variable/types.md#bool)     |
| button2.text     | `いいえ`ボタンのテキスト     | [string](/variable/types.md#string) |

### リスト

| 変数名 | 説明                        | 型                                    |
| ---- |---------------------------|--------------------------------------|
| data             | クリックされたボタンのインデックス (0から開始) | [number](/variable/types.md#number) |
| button          | クリックされたボタンのテキスト           | [string](/variable/types.md#string) |

### カスタム

| 変数名     | 説明                                  | 型                                         |
|---------|-------------------------------------|-------------------------------------------|
| data    | 入力されたデータのリスト                        | [list](/variable/types.md#list)          |
| selected | 選択された`ドロップダウン`,`ステップスライダー`のテキストのリスト | [list [string]](/variable/types.md#list) |

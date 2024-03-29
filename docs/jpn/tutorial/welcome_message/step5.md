# 条件分岐を使用する

前のステップで設定した「こんにちは」を時間帯によって「おはようございます」などに変更するにはIFアクションを使用することが出来ます．

1. まず，前のステップで追加した`チャット欄にメッセージを送る`アクションを削除します．

!form
```json
{
    "type": "form",
    "title": "hello > アクション > チャット欄にメッセージを送る",
    "content": "targetのチャット欄に「こんにちは{target}さん!」と送る",
    "buttons": [
        {"text": "<ひとつ前の画面に戻る>"},
        {"text": "<編集する>"},
        {"text": "名前変更"},
        {"text": "<移動させる>"},
        {"text": "<複製する>"},
        {"text": "<削除する>", "selected": true}
    ]
}
```

2. レシピのメニューから`<アクションを編集する>`，`<アクションを追加する>`，`スクリプト`，`[もし~なら]`，`もし~なら...する`，`<追加する>`ボタンをクリックし，IFアクションを追加します．

!form
```json
{
    "type": "form",
    "title": "tutorial1/hello",
    "contents": [
        "プレイヤーがサーバーに参加したとき",
        "~~~~~~~~~~~~~",
        "targetのtitle欄に「AIUEO SERVER」、subtitle欄に「」と送る. (20, 60, 20)"
    ],
    "buttons": [
        {"text": "<ひとつ前の画面に戻る>"},
        {"text": "<アクションを編集する>", "selected": true},
        {"text": "名前を設定する"},
        {"text": "実行する"},
        {"text": "トリガーを編集する"},
        {"text": "引数，戻り値の設定"},
        {"text": "ターゲットを変更する"},
        {"text": "有効化/無効化"},
        {"text": "保存する"},
        {"text": "レシピ出力"},
        {"text": "<削除する>"}
    ]
}
```

3. `<条件を編集する>`, `<条件を追加する>`, `スクリプト`, `数値を比較する`ボタンを押し，条件を追加します．

!form
```json
{
    "type": "form",
    "title": "もし~なら...する",
    "contents": [
        "===========if===========",
        "~~~~~~~~~~~~~~~~~~~",
        "========================"
    ],
    "buttons": [
        {"text": "<ひとつ前の画面に戻る>"},
        {"text": "<条件を編集する>", "selected": true},
        {"text": "<アクションを編集する>"},
        {"text": "名前変更"},
        {"text": "<移動させる>"},
        {"text": "<複製させる>"},
        {"text": "<削除する>"}
    ]
}
```

4. `数値を比較する`の設定画面で以下のように入力します．  
まず，`{time.hours}`変数が5以上(現在時刻が5時より後)かの条件を追加します．

!form
```json
{
    "type": "custom_form",
    "title": "数値を比較する",
    "content": [
        {
            "type": "label",
            "text": "<value1> <operator> <value2>"
        },
        {
            "type": "input",
            "text": "<value1> 一つ目の値",
            "default": "{time.hours}"
        },
        {
            "type": "dropdown",
            "text": "<operator> 演算子",
            "options": [">="]
        },
        {
            "type": "input",
            "text": "<value2> 二つ目の値",
            "default": "5"
        },
        {
            "type": "toggle",
            "text": "<キャンセルして戻る>"
        }
    ]
}
```

5. もう一つ`数値を比較する`を追加し，設定画面で以下のように入力します．  
`{time.hours}`変数が11以下(現在時刻が11時より前)かの条件を追加します．

> [!INFO]
> 複数条件を追加したときの判定はANDになります．(両方の条件を満たした時にアクションを実行する)
> ORなどに変更するには`スクリプト > or`条件を使用することで実現できます．

!form
```json
{
    "type": "custom_form",
    "title": "数値を比較する",
    "content": [
        {
            "type": "label",
            "text": "<value1> <operator> <value2>"
        },
        {
            "type": "input",
            "text": "<value1> 一つ目の値",
            "default": "{time.hours}"
        },
        {
            "type": "dropdown",
            "text": "<operator> 演算子",
            "options": ["<="]
        },
        {
            "type": "input",
            "text": "<value2> 二つ目の値",
            "default": "11"
        },
        {
            "type": "toggle",
            "text": "<キャンセルして戻る>"
        }
    ]
}
```

6. 2.で追加したIFで`<アクションを編集する>`, `<アクションを追加する>`, `チャット欄にメッセージを表示する`ボタンを押し，アクションを追加します．

!form
```json
{
    "type": "form",
    "title": "もし~なら...する",
    "contents": [
        "===========if===========",
        "{time.hours} >= 5",
        "{time.hours} <= 11",
        "~~~~~~~~~~~~~~~~~~~",
        "========================"
    ],
    "buttons": [
        {"text": "<ひとつ前の画面に戻る>"},
        {"text": "<条件を編集する>"},
        {"text": "<アクションを編集する>", "selected": true},
        {"text": "名前変更"},
        {"text": "<移動させる>"},
        {"text": "<複製させる>"},
        {"text": "<削除する>"}
    ]
}
```

7. `チャット欄にメッセージを送る`の設定画面で以下のように入力します．

!form
```json
{
    "type": "custom_form",
    "title": "チャット欄にメッセージを送る",
    "content": [
        {
            "type": "label",
            "text": "<player>のチャット欄に「<message>」と送る."
        },
        {
            "type": "dropdown",
            "text": "<player> プレイヤーの変数名",
            "options": ["target"]
        },
        {
            "type": "input",
            "text": "<message> 送信するメッセージ",
            "default": "§aおはようございます{target}さん!"
        },
        {
            "type": "toggle",
            "text": "<キャンセルして戻る>"
        }
    ]
}
```

8. 時間が5時から11時までの間ならチャット欄に`§aおはようございます{target}さん!`と送信するIFが完成しました．

!form
```json
{
    "type": "form",
    "title": "もし~なら...する",
    "contents": [
        "===========if===========",
        "{time.hours} >= 5",
        "{time.hours} <= 11",
        "~~~~~~~~~~~~~~~~~~~",
        "targetのチャット欄に「§aおはようございます{target}さん!」と送る",
        "========================"
    ],
    "buttons": [
        {"text": "<ひとつ前の画面に戻る>"},
        {"text": "<条件を編集する>"},
        {"text": "<アクションを編集する>"},
        {"text": "名前変更"},
        {"text": "<移動させる>"},
        {"text": "<複製させる>"},
        {"text": "<削除する>"}
    ]
}
```

9. 次に時間が5時から11時までの間以外で，17時までの場合に「§aこんにちは{target}さん!」とメッセージを送るIFを作成します．  
10. レシピのメニューに戻り，`<アクションを編集する>`，`<アクションを追加する>`，`スクリプト`，`[もし~なら]`，`直前の条件に一致せず、条件に一致したら...する`，`<追加する>`ボタンをクリックし，IF-ELSEアクションを追加します．

> [!TIP]
> `IF`アクションの後に`IF-ELSE`アクション(直前の条件に一致せず、条件に一致したら...する)を追加すると，
> `IF-ELSE`アクションより前にあり，隣接している`IF`,`IF-ELSE`アクションの全ての条件に当てはまらないかつ，新しい条件に当てはまる時に実行するアクションを作ることが出来ます．

!form
```json
{
    "type": "form",
    "title": "直前の条件に一致せず、条件に一致したら...する",
    "contents": [
        "===========elseif===========",
        "~~~~~~~~~~~~~~~~~~~",
        "========================"
    ],
    "buttons": [
        {"text": "<ひとつ前の画面に戻る>"},
        {"text": "<条件を編集する>", "selected": true},
        {"text": "<アクションを編集する>"},
        {"text": "名前変更"},
        {"text": "<移動させる>"},
        {"text": "<複製させる>"},
        {"text": "<削除する>"}
    ]
}
```

11. 10.で追加したアクションに`スクリプト > 数値を比較する`条件を追加し，`{time.hours}`変数が12以上(現在時刻が12時より後)に設定します．

!form
```json
{
    "type": "custom_form",
    "title": "数値を比較する",
    "content": [
        {
            "type": "label",
            "text": "<value1> <operator> <value2>"
        },
        {
            "type": "input",
            "text": "<value1> 一つ目の値",
            "default": "{time.hours}"
        },
        {
            "type": "dropdown",
            "text": "<operator> 演算子",
            "options": [">="]
        },
        {
            "type": "input",
            "text": "<value2> 二つ目の値",
            "default": "12"
        },
        {
            "type": "toggle",
            "text": "<キャンセルして戻る>"
        }
    ]
}
```

11. 10.で追加したアクションにもう一つ`スクリプト > 数値を比較する`条件を追加し，`{time.hours}`変数が17以下(現在時刻が17時より前)に設定します．

!form
```json
{
    "type": "custom_form",
    "title": "数値を比較する",
    "content": [
        {
            "type": "label",
            "text": "<value1> <operator> <value2>"
        },
        {
            "type": "input",
            "text": "<value1> 一つ目の値",
            "default": "{time.hours}"
        },
        {
            "type": "dropdown",
            "text": "<operator> 演算子",
            "options": ["<="]
        },
        {
            "type": "input",
            "text": "<value2> 二つ目の値",
            "default": "17"
        },
        {
            "type": "toggle",
            "text": "<キャンセルして戻る>"
        }
    ]
}
```

12. 10.で追加したアクションに`チャット欄にメッセージを表示する`アクションを追加します．

!form
```json
{
    "type": "custom_form",
    "title": "チャット欄にメッセージを送る",
    "content": [
        {
            "type": "label",
            "text": "<player>のチャット欄に「<message>」と送る."
        },
        {
            "type": "dropdown",
            "text": "<player> プレイヤーの変数名",
            "options": ["target"]
        },
        {
            "type": "input",
            "text": "<message> 送信するメッセージ",
            "default": "§aこんにちは{target}さん!"
        },
        {
            "type": "toggle",
            "text": "<キャンセルして戻る>"
        }
    ]
}
```

13. 時間が12時から17時までの間ならチャット欄に`§aこんにちは{target}さん!`と送信するアクションが完成しました．

!form
```json
{
    "type": "form",
    "title": "直前の条件に一致せず、条件に一致したら...する",
    "contents": [
        "===========elseif===========",
        "{time.hours} >= 12",
        "{time.hours} <= 17",
        "~~~~~~~~~~~~~~~~~~~",
        "targetのチャット欄に「§aこんにちは{target}さん!」と送る",
        "========================"
    ],
    "buttons": [
        {"text": "<ひとつ前の画面に戻る>"},
        {"text": "<条件を編集する>", "selected": true},
        {"text": "<アクションを編集する>"},
        {"text": "名前変更"},
        {"text": "<移動させる>"},
        {"text": "<複製させる>"},
        {"text": "<削除する>"}
    ]
}
```

14. 最後に残りの時間の場合に「§aこんばんは{target}さん!」とメッセージを送るアクションを作成します．
15. レシピのメニューに戻り，`<アクションを編集する>`，`<アクションを追加する>`，`スクリプト`，`[もし~なら]`，`直前の条件に一致しなかった時...する`，`<追加する>`ボタンをクリックし，ELSEアクションを追加します．

> [!TIP]
> `IF`アクションの後に`ELSE`アクション(直前の条件に一致しなかった時...する)を追加すると，
> `ELSE`アクションより前にあり，隣接している`IF`,`IF-ELSE`アクションの全ての条件に当てはまらない場合に実行するアクションを作ることが出来ます．

16. 15.で追加したアクションに`チャット欄にメッセージを表示する`アクションを追加します．

!form
```json
{
    "type": "custom_form",
    "title": "チャット欄にメッセージを送る",
    "content": [
        {
            "type": "label",
            "text": "<player>のチャット欄に「<message>」と送る."
        },
        {
            "type": "dropdown",
            "text": "<player> プレイヤーの変数名",
            "options": ["target"]
        },
        {
            "type": "input",
            "text": "<message> 送信するメッセージ",
            "default": "§aこんばんは{target}さん!"
        },
        {
            "type": "toggle",
            "text": "<キャンセルして戻る>"
        }
    ]
}
```

17. 完成!

!form
```json
{
    "type": "form",
    "title": "tutorial1/hello",
    "contents": [
        "プレイヤーがサーバーに参加したとき",
        "~~~~~~~~~~~~~",
        "targetのtitle欄に「AIUEO SERVER」、subtitle欄に「」と送る. (20, 60, 20)\n",
        "===========if===========",
        "{time.hours} >= 5",
        "{time.hours} <= 11",
        "~~~~~~~~~~~~~~~~~~~",
        "targetのチャット欄に「§aおはようございます{target}さん!」と送る",
        "========================\n",
        "===========elseif===========",
        "{time.hours} >= 12",
        "{time.hours} <= 17",
        "~~~~~~~~~~~~~~~~~~~",
        "targetのチャット欄に「§aこんにちは{target}さん!」と送る",
        "========================\n",
        "===========else===========",
        "targetのチャット欄に「§aこんばんは{target}さん!」と送る",
        "========================"
    ],
    "buttons": [
        {"text": "<ひとつ前の画面に戻る>"},
        {"text": "<アクションを編集する>", "selected": true},
        {"text": "名前を設定する"},
        {"text": "実行する"},
        {"text": "トリガーを編集する"},
        {"text": "引数，戻り値の設定"},
        {"text": "ターゲットを変更する"},
        {"text": "有効化/無効化"},
        {"text": "保存する"},
        {"text": "レシピ出力"},
        {"text": "<削除する>"}
    ]
}
```

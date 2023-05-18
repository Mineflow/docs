# Step1. カスタムアクションのレシピを作成する

1. 今回はプレイヤー(`{player}`)のチャット欄に指定した回数(`{count}`)メッセージ(`{message}`)を送信するアクションを作成します．    
まず，レシピを実行する際に必要な3つの変数`player`,`count`,`message`をレシピに追加します．

!form
```json
{
    "type": "form",
    "title": "addon/message/main",
    "content": "~~~~~~~~~~~~~",
    "buttons": [
        {"text": "<ひとつ前の画面に戻る>"},
        {"text": "<アクションを編集する>"},
        {"text": "名前を設定する"},
        {"text": "実行する"},
        {"text": "トリガーを編集する"},
        {"text": "引数，戻り値の設定", "selected": true},
        {"text": "ターゲットを変更する"},
        {"text": "有効化/無効化"},
        {"text": "保存する"},
        {"text": "レシピ出力"},
        {"text": "<削除する>"}
    ]
}
```

!form
```json
{
    "type": "form",
    "title": "引数，戻り値の設定",
    "content": "ボタンを押してください",
    "buttons": [
        {"text": "<ひとつ前の画面に戻る>"},
        {"text": "受け入れる値の設定", "selected": true},
        {"text": "実行元のレシピに戻す変数"}
    ]
}
```

2. `<引数を追加する>`ボタンを押し，メッセージを送信する対象の`player`変数を追加します．     
タイプにはプレイヤー型である`player`を，名前には`player`を入力します．

!form
```json
{
    "type": "custom_form",
    "title": "<引数を追加する>",
    "content": [
        {
            "type": "dropdown",
            "text": "タイプ",
            "options": ["player"]
        },
        {
            "type": "input",
            "text": "名前",
            "default": "player"
        },
        {
            "type": "input",
            "text": "説明",
            "default": "メッセージを送信するプレイヤー"
        },
        {
            "type": "toggle",
            "text": "<キャンセルして戻る>",
            "default": false
        }
    ]
}
```

3. `<引数を追加する>`ボタンを押し，メッセージを送信する回数の`count`変数を追加します．    
タイプには数字の型である`number`を，名前には`count`を入力します．

!form
```json
{
    "type": "custom_form",
    "title": "<引数を追加する>",
    "content": [
        {
            "type": "dropdown",
            "text": "タイプ",
            "options": ["number"]
        },
        {
            "type": "input",
            "text": "名前",
            "default": "count"
        },
        {
            "type": "input",
            "text": "説明",
            "default": "メッセージを送信する回数"
        },
        {
            "type": "toggle",
            "text": "<キャンセルして戻る>",
            "default": false
        }
    ]
}
```

4. `<引数を追加する>`ボタンを押し，メッセージの`message`変数を追加します．    
タイプには文字列の型である`string`を，名前には`message`を入力します．

!form
```json
{
    "type": "custom_form",
    "title": "<引数を追加する>",
    "content": [
        {
            "type": "dropdown",
            "text": "タイプ",
            "options": ["string"]
        },
        {
            "type": "input",
            "text": "名前",
            "default": "message"
        },
        {
            "type": "input",
            "text": "説明",
            "default": "メッセージ"
        },
        {
            "type": "toggle",
            "text": "<キャンセルして戻る>",
            "default": false
        }
    ]
}
```

5. 次に同じレシピにアクションを追加します

!form
```json
{
    "type": "form",
    "title": "addon/message/main",
    "contents": [
        "",
        "~~~~~~~~~~~~~",
        "",
        "=======repeat({repeat})=======",
        "playerのチャット欄に「{message}」と送る",
        "============================="
    ],
    "buttons": [
        {"text": "<ひとつ前の画面に戻る>"},
        {"text": "<アクションを編集する>"},
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
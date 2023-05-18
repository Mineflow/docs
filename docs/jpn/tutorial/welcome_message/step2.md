# レシピにアクションを追加する

1. `<アクションを編集する>`ボタン，`<アクションを追加する>`ボタンをクリックし，アクション追加画面を表示します．

!form
```json
{
    "type": "form",
    "title": "tutorial1/hello",
    "content": "~~~~~~~~~~~~~",
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

!form
```json
{
    "type": "form",
    "title": "hello > アクション一覧",
    "content": "ボタンを押してください",
    "buttons": [
        {"text": "<ひとつ前の画面に戻る>"},
        {"text": "<アクションを追加する>", "selected": true}
    ]
}
```

2. `プレイヤー`ボタン，`メッセージ`ボタン，`title欄にメッセージを送る`ボタンをクリックし，アクションを追加します．

> [!TIP]
> アクションが見つからないときは一番下にある`検索`ボタンからアクションの名前で検索することが出来ます．

!form
```json
{
    "type": "form",
    "title": "hello > 新規アクション > カテゴリー選択",
    "content": "ボタンを押してください",
    "buttons": [
        {"text": "<ひとつ前の画面に戻る>"},
        {"text": "お気に入り"},
        {"text": "一般"},
        {"text": "プレイヤー", "selected": true},
        {"text": "エンティティ"},
        {"text": "インベントリ"},
        {"text": "..."},
        {"text": "<検索>"}
    ]
}
```

!form
```json
{
    "type": "form",
    "title": "hello > 新規アクション > player > アクション選択",
    "content": "ボタンを押してください",
    "buttons": [
        {"text": "<ひとつ前の画面に戻る>"},
        {"text": "[メッセージ]", "selected": true},
        {"text": "[ボスバー]"},
        {"text": "..."}
    ]
}
```

!form
```json
{
    "type": "form",
    "title": "hello > 新規アクション > message > アクション選択",
    "content": "ボタンを押してください",
    "buttons": [
        {"text": "<ひとつ前の画面に戻る>"},
        {"text": "..."},
        {"text": "title欄にメッセージを送る", "selected": true},
        {"text": "..."}
    ]
}
```

3. `<追加する>`ボタンをクリックし，表示されたフォームで送信するメッセージ等の設定を行います．  
必要事項を記入した後に`送信`ボタンを押すとレシピにアクションが追加されます．

> [!NOTE]
> `フェードインの時間`などの単位はtickです． (20tick=1秒, 1tick=0.05秒)

!form
```json
{
    "type": "custom_form",
    "title": "title欄にメッセージを送る",
    "content": [
        {
            "type": "label",
            "text": "<player>のtitle欄に「<title>」、subtitle欄に「<subtitle>」と送る. (<fadein>, <stay>, <fadeout>)"
        },
        {
            "type": "dropdown",
            "text": "<player> プレイヤーの変数名",
            "options": ["target"]
        },
        {
            "type": "input",
            "text": "<title> タイトル欄に送るメッセージ",
            "default": "AIUEO SERVER"
        },
        {
            "type": "input",
            "text": "<subtitle> サブタイトル欄に送るメッセージ"
        },
        {
            "type": "input",
            "text": "<fadein> フェードインの時間 (tick, 20tick=1秒)",
            "default": "20"
        },
        {
            "type": "input",
            "text": "<stay> 表示する時間 (tick)",
            "default": "60"
        },
        {
            "type": "input",
            "text": "<fadeout> フェードアウトの時間",
            "default": "20"
        },
        {
            "type": "toggle",
            "text": "<キャンセルして戻る>"
        }
    ]
}
```

## 実行する
1. レシピのメニューの`実行する`ボタンから実行することが出来ます．

!form
```json
{
    "type": "form",
    "title": "tutorial1/hello",
    "contents": [
        "~~~~~~~~~~~~~",
        "targetのtitle欄に「AIUEO SERVER」、subtitle欄に「」と送る. (20, 60, 20)"
    ],
    "buttons": [
        {"text": "<ひとつ前の画面に戻る>"},
        {"text": "<アクションを編集する>"},
        {"text": "名前を設定する"},
        {"text": "実行する", "selected": true},
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

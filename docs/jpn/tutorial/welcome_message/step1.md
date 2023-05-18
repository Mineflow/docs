# 新しいレシピを作成する

1. まず，`/mineflow`コマンドを実行してMineflowのメニューを表示します．正しくコマンドが実行できた場合以下のようなフォームが表示されます．

!form
```json
{
    "type": "form",
    "title": "tutorial1/hello",
    "content": "ボタンを押してください",
    "buttons": [
        {"text": "レシピ", "selected": true},
        {"text": "コマンド"},
        {"text": "イベント"},
        {"text": "フォーム"},
        {"text": "設定"},
        {"text": "<終了>"}
    ]
}
```

2. 次に`レシピ`ボタンをクリックしてレシピメニューを開きます．

!form
```json
{
    "type": "form",
    "title": "レシピ",
    "content": "ボタンを押してください",
    "buttons": [
        {"text": "<ひとつ前の画面に戻る>"},
        {"text": "<追加する>", "selected": true},
        {"text": "<編集する>"},
        {"text": "レシピ一覧"},
        {"text": "レシピ出力"},
        {"text": "レシピ読み込み"}
    ]
}
```

3. `追加する`ボタンをクリックし，表示されたフォームでレシピの名前，グループの名前を入力します．テンプレートは`<無し>`を選択します．

> [!TIP]
> グループの名前は`tutorial/tutorial1`のように`/`で区切って階層を深くすることも出来ます．

!form
```json
{
    "type": "custom_form",
    "title": "レシピ > 追加",
    "content": [
        {
            "type": "input",
            "text": "レシピの名前",
            "default": "hello",
            "placeholder": "recipe"
        },
        {
            "type": "input",
            "text": "グループの名前",
            "default": "tutorial1"
        },
        {
            "type": "dropdown",
            "text": "テンプレート",
            "options": ["<無し>"]
        },
        {
            "type": "toggle",
            "text": "<キャンセルして戻る>"
        }
    ]
}
```

4. 次のようなフォームが表示されるとレシピの作成は完了です．

!form
```json
{
    "type": "form",
    "title": "tutorial1/hello",
    "content": "~~~~~~~~~~~~~",
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

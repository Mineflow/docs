# Step2. マニフェストレシピを作成する

1. 前回作成したレシピと同じグループに名前が`_manifest`のレシピを作成します．  
作成時に`アドオンのマニフェストレシピ`テンプレートを選択することで手順を簡単化することが出来ます．

!form
```json
{
    "type": "custom_form",
    "title": "レシピ > 追加",
    "content": [
        {
            "type": "input",
            "text": "レシピの名前",
            "default": "_manifest"
        },
        {
            "type": "input",
            "text": "グループの名前",
            "default": "addon/message"
        },
        {
            "type": "dropdown",
            "text": "テンプレート",
            "options": ["アドオンのマニフェストレシピ"]
        },
        {
            "type": "toggle",
            "text": "<キャンセルして戻る>",
            "default": false
        }
    ]
}
```

2. 表示されたフォームで`対象のレシピ名`にstep1で作成したレシピの名前を，`アクションID`に他と重複しないようなidを，`アクションカテゴリ`に追加するアクションのカテゴリを入力します．

!form
```json
{
    "type": "custom_form",
    "title": "アドオンのマニフェストレシピ",
    "content": [
        {
            "type": "input",
            "text": "対象のレシピ名",
            "default": "addon/message/main"
        },
        {
            "type": "input",
            "text": "アクションID",
            "default": "aieuo_repeat_message"
        },
        {
            "type": "dropdown",
            "text": "アクションカテゴリ",
            "options": ["メッセージ"]
        }
    ]
}
```

3. 最後に，Step1で作成したレシピとStep2で作成したレシピをまとめて出力して完成です．   
使用するには`plugin_data/mineflow/exports`ディレクトリに作成されたファイルを`plugin_data/mineflow/addons`ディレクトリにコピーしてください．  

> [!NOTE]
> アドオンはサーバーを起動した際に自動で読み込まれます．サーバー起動中に読み込みたい場合は`/mineflow addon reload`コマンドを実行してください 

!form
```json
{
    "type": "form",
    "title": "出力するレシピ一覧",
    "content": "ボタンを押してください",
    "buttons": [
        {"text": "この内容で出力する", "selected": true},
        {"text": "addon/message/main"},
        {"text": "addon/message/_manifest"}
    ]
}
```
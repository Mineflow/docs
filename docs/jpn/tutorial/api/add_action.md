# アクション/条件を追加する

## 1. クラスの作成

`aieuo\mineflow\flowitem\FlowItem`を継承したクラスを作成します  
条件の場合はインターフェース`aieuo\mineflow\flowitem\Condition`を実装してください  
```php
class AllowFlight extends FlowItem {
    public function __construct() {
        parent::__construct(self::ALLOW_FLIGHT, FlowItemCategory::PLAYER);
    }
}
```  

コンストラクタでは`parent::__construct()`で親クラスにアクションID等を渡します  
`aieuo\mineflow\flowitem\FlowItem`のコンストラクタのパラメータは以下の通りです  

|     | 型                           | 説明        |
|-----|-----------------------------|-----------|
| 引数1 | `string $id`                | アクションID   |
| 引数2 | `string $category`          | アクションカテゴリ |
| 引数3 | `array  $permissions = []`  | アクションの権限  |


## 2. アクションで保持する値を設定する

必要に応じてアクションで保持する値をクラスプロパティ等で定義します  

保持する値がプレイヤーなどのオブジェクトの場合`PlayerFlowItem`,`PlayerFlowItemTrait`等のトレイトを使用できます  
使用できるトレイトには以下の物があります

| クラス                               | インターフェース                | トレイト                         |
|-----------------------------------|-------------------------|------------------------------|
| `pocketmine\math\AxisAlignedBB`   | `AxisAlignedBBFlowItem` | `AxisAlignedBBFlowItemTrait` |
| `pocketmine\block\Block`          | `BlockFlowItem`         | `BlockFlowItemTrait`         |
| `pocketmine\utils\Config`         | `ConfigFlowItem`        | `ConfigFlowItemTrait`        |
| `pocketmine\entity\Entity`        | `EntityFlowItem`        | `EntityFlowItemTrait`        |
| `pocketmine\entity\Human`         | `HumanFlowItem`         | `HumanFlowItemTrait`         |
| `pocketmine\item\Item`            | `ItemFlowItem`          | `ItemFlowItemTrait`          |
| `pocketmine\player\Player`        | `PlayerFlowItem`        | `PlayerFlowItemTrait`        |
| `pocketmine\world\Position`       | `PositionFlowItem`      | `PositionFlowItemTrait`      |
| `aieuo\mineflow\utils\Scoreboard` | `ScoreboardFlowItem`    | `ScoreboardFlowItemTrait`    |
| `pocketmine\math\Vector3`         | `Vector3FlowItem`       | `Vector3FlowItemTrait`       |
| `pocketmine\world\World`          | `WorldFlowItem`         | `WorldFlowItemTrait`         |

また，`public function isDataValid(): bool`を定義します  
この関数はアクションの実行前に呼び出され，戻り値が`false`の場合エラーメッセージを表示しレシピの実行が中断します    

```php
class AllowFlight extends FlowItem implements PlayerFlowItem {
    use PlayerFlowItemTrait;

    private bool $allowed;

    public function __construct(string $player = "", string $allowed = "true") {
        parent::__construct(self::ALLOW_FLIGHT, FlowItemCategory::PLAYER, [FlowItemPermission::CHEAT]);

        $this->setPlayerVariableName($player);
        $this->allowed = $allowed === "true";
    }

    public function setAllowed(bool $allowed): void {
        $this->allowed = $allowed;
    }

    public function isAllowed(): bool {
        return $this->allowed;
    }

    public function isDataValid(): bool {
        return $this->getPlayerVariableName() !== "";
    }
}
```

## 3. ファイルに保存する値とファイルから読み込む際の設定

`public function loadSaveData(array $content): void`で読み込む際の処理を，
`public function serializeContents(): array`で保存する値を設定します．

```php
class AllowFlight extends FlowItem implements PlayerFlowItem {
    use PlayerFlowItemTrait;

    private bool $allowed;
    
    public function __construct(string $player = "", string $allowed = "true");
    
    public function setAllowed(bool $allowed): void;
    
    public function isAllowed(): bool;
    
    public function isDataValid(): bool;

    public function loadSaveData(array $content): void {
        $this->setPlayerVariableName($content[0]);
        $this->setAllowed($content[1]);
    }

    public function serializeContents(): array {
        return [$this->getPlayerVariableName(), $this->isAllowed()];
    }
}
```

## 4. 処理の実装

`protected function onExecute(FlowItemExecutor $source): \Generator`を追加し，アクション実行時の処理を記述します．  
関数の最後には`yield Await::ALL;`と記述してください．  

```php
class AllowFlight extends FlowItem implements PlayerFlowItem {
    use PlayerFlowItemTrait;

    private bool $allowed;
    
    public function __construct(string $player = "", string $allowed = "true");
    
    public function setAllowed(bool $allowed): void;
    
    public function isAllowed(): bool;
    
    public function isDataValid(): bool;

    protected function onExecute(FlowItemExecutor $source): \Generator {
        $player = $this->getOnlinePlayer($source);

        $player->setAllowFlight($this->isAllow());

        yield Await::ALL;
    }

    public function loadSaveData(array $content): void {
        $this->setPlayerVariableName($content[0]);
        $this->setAllowed($content[1]);
    }

    public function serializeContents(): array {
        return [$this->getPlayerVariableName(), $this->isAllowed()];
    }
}
```

> [!INFO]
> `PlayerFlowItemTrait`を使用している場合は`$this->getOnlinePlayer($source)`指定した変数のプレイヤーを取得することが出来ます．

## 5. 名前の設定

`ActionNameWithMineflowLanguage`/`ConditionNameWithMineflowLanguage`トレイトを使用し，
名前とアクション設定時に表示される文，レシピのアクション一覧に表示される文を設定します．  

> [!NOTE]
> `ActionNameWithMineflowLanguage`トレイトを使用せずに次の3個のメソッドをクラスに直接実装することも可能です  
> - `public function getName(): string` 名前
> - `public function getDescription(): string` アクション設定時に表示される文
> - `public function getDetail(): string` レシピのアクション一覧に表示される文

`aieuo\mineflow\utils\Language`に`action.<アクションID>.name`というキーで名前を，`action.<アクションID>.detail`というキーでアクション設定時に表示される文とレシピのアクション一覧に表示される文を登録します

```php
$messages = [
    "action.allowFlight.name" => "プレイヤーの飛行を許可する",
    "action.allowFlight.detail" => "({%0})の飛行を{%1}",
    "action.allowFlight.allow" => "許可する",
    "action.allowFlight.notAllow" => "許可しない",
];
Language::add($messages, "jpn");
```

次に作成したアクションのクラスに`public function getDetailDefaultReplaces(): array`と`public function getDetailReplaces(): array`を追加し，
登録した`action.<アクションID>.detail`内の置き換える値を返します．

```php
class AllowFlight extends FlowItem implements PlayerFlowItem {
    use PlayerFlowItemTrait;
    use ActionNameWithMineflowLanguage;

    private bool $allowed;
    
    public function __construct(string $player = "", string $allowed = "true");

    public function getDetailDefaultReplaces(): array {
        return ["player", "allow"];
    }

    public function getDetailReplaces(): array {
        return [$this->getPlayerVariableName(), Language::get("action.allowFlight.".($this->isAllow() ? "allow" : "notAllow"))];
    }
    
    public function setAllowed(bool $allowed): void;
    
    public function isAllowed(): bool;
    
    public function isDataValid(): bool;

    protected function onExecute(FlowItemExecutor $source): \Generator;

    public function loadSaveData(array $content): void;

    public function serializeContents(): array;
}
```

## 6. 設定フォーム

`HasSimpleEditForm`トレイトを使用し，設定フォームを作成します．

> [!NOTE]
> `HasSimpleEditForm`トレイトを使用せずに次のメソッドをクラスに直接実装することも可能です
> - `public function edit(Player $player, array $variables, bool $isNew): \Generator`

作成したアクションのクラスに`public function buildEditForm(SimpleEditFormBuilder $builder, array $variables): void`を追加し，
`$builder->elements()`等を使用してフォームに表示するエレメントを設定します．

```php
class AllowFlight extends FlowItem implements PlayerFlowItem {
    use PlayerFlowItemTrait;
    use ActionNameWithMineflowLanguage;
    use HasSimpleEditForm;

    private bool $allowed;
    
    public function __construct(string $player = "", string $allowed = "true");

    public function getDetailDefaultReplaces(): array;

    public function getDetailReplaces(): array;
    
    public function setAllowed(bool $allowed): void;
    
    public function isAllowed(): bool;
    
    public function isDataValid(): bool;

    protected function onExecute(FlowItemExecutor $source): \Generator;

    public function buildEditForm(SimpleEditFormBuilder $builder, array $variables): void {
        $builder->elements([
            new PlayerVariableDropdown($variables, $this->getPlayerVariableName()),
            new Toggle("@action.allowFlight.form.allow", $this->isAllow()),
        ]);
    }

    public function loadSaveData(array $content): void;

    public function serializeContents(): array;
}
```

## 7. FlowItemFactoryに登録する

```php
FlowItemFactory::register(new AllowFlight());
```

## クラスの全文
<details>
<summary>AllowFlight.php</summary>

```php
class AllowFlight extends FlowItem implements PlayerFlowItem {
    use PlayerFlowItemTrait;
    use ActionNameWithMineflowLanguage;
    use HasSimpleEditForm;

    private bool $allow;

    public function __construct(string $player = "", string $allow = "true") {
        parent::__construct(self::ALLOW_FLIGHT, FlowItemCategory::PLAYER);
        $this->setPermissions([FlowItemPermission::CHEAT]);

        $this->setPlayerVariableName($player);
        $this->allow = $allow === "true";
    }

    public function getDetailDefaultReplaces(): array {
        return ["player", "allow"];
    }

    public function getDetailReplaces(): array {
        return [$this->getPlayerVariableName(), Language::get("action.allowFlight.".($this->isAllow() ? "allow" : "notAllow"))];
    }

    public function setAllow(bool $allow): void {
        $this->allow = $allow;
    }

    public function isAllow(): bool {
        return $this->allow;
    }

    public function isDataValid(): bool {
        return $this->getPlayerVariableName() !== "";
    }

    protected function onExecute(FlowItemExecutor $source): \Generator {
        $player = $this->getOnlinePlayer($source);

        $player->setAllowFlight($this->isAllow());

        yield Await::ALL;
    }

    public function buildEditForm(SimpleEditFormBuilder $builder, array $variables): void {
        $builder->elements([
            new PlayerVariableDropdown($variables, $this->getPlayerVariableName()),
            new Toggle("@action.allowFlight.form.allow", $this->isAllow()),
        ]);
    }

    public function loadSaveData(array $content): void {
        $this->setPlayerVariableName($content[0]);
        $this->setAllow($content[1]);
    }

    public function serializeContents(): array {
        return [$this->getPlayerVariableName(), $this->isAllow()];
    }
}
```
</details>
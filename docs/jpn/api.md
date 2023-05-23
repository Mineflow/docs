## aieuo\mineflow\Mineflow

### `Mineflow::getVariableHelper()`

**VariableHelperを取得する**

```php
use aieuo\mineflow\Mineflow;

$helper = Mineflow::getVariableHelper();
```

### `Mineflow::getRecipeManager()`

**RecipeManagerを取得する**

```php
use aieuo\mineflow\Mineflow;

$recipeManager = Mineflow::getRecipeManager();
```

## aieuo\mineflow\utils\Language

### `Language::add()`

**メッセージを追加する**

|     | 型                         | 説明        |
|-----|---------------------------|-----------|
| 引数1 | `array $messages`         | メッセージの配列  |
| 引数2 | `string $language = null` | 言語名       |
| 戻り値 | `void`                    |        |

第2引数を省略した場合は，現在Mineflowで使用されている言語に対してメッセージが追加されます．

```php
use aieuo\mineflow\utils\Language;

$messages = [
    "key" => "message",
];
Language::add($messages, "eng");
```

### `Language::get()`

**メッセージを取得する**

|     | 型                         | 説明                        |
|-----|---------------------------|---------------------------|
| 引数1 | `string $key`             | メッセージのキー                  |
| 引数2 | `array $replaces = []`    | 置き換える値の配列                 |
| 引数3 | `string $language = null` | 言語名                       |
| 戻り値 | `string` | 指定したキーのメッセージ．存在しない場合は`$key` |

第2引数に配列を指定するとメッセージ内の`{%key}`が`$replaces["key"]`の値で置き換えられます．  
第3引数を省略した場合は，現在Mineflowで使用されている言語に対してメッセージが追加されます．

```php
use aieuo\mineflow\utils\Language;

$message = Language::get("language.selected", ["aieuo"]);
```

### `Language::replace()`

**テキストに埋め込まれたメッセージのキーを置き換える**

文字列の中の`@key`の形式の値を`Language::get(key)`の値で置き換えます．

|     | 型              | 説明                          |
|-----|----------------|-----------------------------|
| 引数1 | `string $text` | メッセージのキー                    |
| 戻り値 | `string`       | 置き換えた後のメッセージ |

```php
use aieuo\mineflow\utils\Language;

$message = Language::replace("@language.name");
```

## aieuo\mineflow\flowItem\FlowItemCategory

### `FlowItemCategory::add()`

**カテゴリを追加する**

|     | 型                       | 説明                                   |
|-----|-------------------------|--------------------------------------|
| 引数1 | `string $category`      | カテゴリid                               |
| 引数2 | `string $parent = null` | 親カテゴリのid                             |
| 戻り値 | `bool`                  | すでにカテゴリidが使用されていたら`false`，それ以外は`true` |

```php
use aieuo\mineflow\flowItem\FlowItemCategory;

FlowItemCategory::add("script");
FlowItemCategory::add("loop", "script");
```

### `FlowItemCategory::all()`

**カテゴリを全て取得する**

|     | 型          | 説明       |
|-----|------------|----------|
| 戻り値 | `string[]` | カテゴリのリスト |

```php
use aieuo\mineflow\flowItem\FlowItemCategory;

$categories = FlowItemCategory::all();
```

### `FlowItemCategory::root()`

**親カテゴリを持たないカテゴリを全て取得する**

|     | 型          | 説明       |
|-----|------------|----------|
| 戻り値 | `string[]` | カテゴリのリスト |

```php
use aieuo\mineflow\flowItem\FlowItemCategory;

$categories = FlowItemCategory::root();
```

### `FlowItemCategory::getChildren()`

**指定した親カテゴリのカテゴリを取得する**

|     | 型                      | 説明       |
|-----|------------------------|----------|
| 引数1 | `?string $category` | 親カテゴリの名前 |
| 戻り値 | `string[]`             | カテゴリのリスト |

```php
use aieuo\mineflow\flowItem\FlowItemCategory;

$categories = FlowItemCategory::getChildren(FlowItemCategory::PLAYER);
```

## aieuo\mineflow\variable\VariableHelper

### `VariableHelper->exists()`

**グローバル変数が存在するか**

|     | 型              | 説明    |
|-----|----------------|-------|
| 引数1 | `string $name` | 変数名   |
| 戻り値 | `bool`         | 存在するか |

```php
use aieuo\mineflow\Mineflow;

$helper = Mineflow::getVariableHelper();
$exists = $helper->exists("var");
```

### `VariableHelper->get()`

**グローバル変数を取得する**

|     | 型                       | 説明                   |
|-----|-------------------------|----------------------|
| 引数1 | `string $name`          | 変数名                  |
| 戻り値 | `Variable` &#124; `null` | 変数，存在しなければ`null` |

```php
use aieuo\mineflow\Mineflow;

$helper = Mineflow::getVariableHelper();
$variable = $helper->get("var");
```

### `VariableHelper->getNested()`

**ネストしたグローバル変数を取得する**  
`.`で区切った文字列から変数や変数のプロパティを取得します．

|     | 型                       | 説明    |
|-----|-------------------------|-------|
| 引数1 | `string $name`          | 変数名   |
| 戻り値 | `Variable` &#124; `null` | 変数，存在しなければ`null` |

```php
use aieuo\mineflow\Mineflow;

$helper = Mineflow::getVariableHelper();
$variable = $helper->getNested("var.key");
```

### `VariableHelper->mustGetVariableNested()`

**ネストしたグローバル変数を取得する**  
`VariableHelper::getNested`と違い，変数が存在しない場合は`UndefinedMineflowVariableException`が，プロパティが存在しない場合は`UndefinedMineflowPropertyException`が発生します．

|     | 型             | 説明    |
|-----|---------------|-------|
| 引数1 | `string $name` | 変数名   |
| 戻り値 | `Variable`    | 変数 |

```php
use aieuo\mineflow\Mineflow;

$helper = Mineflow::getVariableHelper();
$variable = $helper->mustGetVariableNested("var.key");
```

### `VariableHelper->add()`

**グローバル変数を追加する**

> [!NOTE]
> 追加した変数が保存できる変数の場合，サーバー終了時にファイルに保存されます

|     | 型                    | 説明  |
|-----|----------------------|-----|
| 引数1 | `string $name`       | 変数名 |
| 引数2 | `Variable $variable` | 変数  |
| 戻り値 | `void`               |     |

```php
use aieuo\mineflow\Mineflow;
use aieuo\mineflow\variable\StringVariable;

$helper = Mineflow::getVariableHelper();
$helper->add("var", new StringVariable("text"));
```

### `VariableHelper->delete()`

**グローバル変数を削除する**

|     | 型              | 説明                   |
|-----|----------------|----------------------|
| 引数1 | `string $name` | 変数名                  |
| 戻り値 | `void`               |     |

```php
use aieuo\mineflow\Mineflow;

$helper = Mineflow::getVariableHelper();
$variable = $helper->delete("var");
```

### `VariableHelper->saveAll()`

**グローバル変数をファイルに保存する**

|     | 型              | 説明                   |
|-----|----------------|----------------------|
| 戻り値 | `void`               |     |

```php
use aieuo\mineflow\Mineflow;

$helper = Mineflow::getVariableHelper();
$variable = $helper->saveAll();
```

### `VariableHelper->findVariables()`

**文字列内の変数を見つける**

|     | 型                | 説明     |
|-----|------------------|--------|
| 引数1 | `string $string` | 文字列    |
| 戻り値 | `array`          | 変数名の配列 |

```php
use aieuo\mineflow\Mineflow;

$helper = Mineflow::getVariableHelper();
$variables = $helper->findVariables("あいうえお{var}かきくけこ");
```

### `VariableHelper->replaceVariables()`

**文字列内の変数を全て置き換える**

|     | 型                                    | 説明               |
|-----|--------------------------------------|------------------|
| 引数1 | `string $string`                     | 文字列              |
| 引数2 | `array $variables`                   | 変数リスト            |
| 引数3 | `bool $global = true`                | グローバル変数を取得するか    |
| 戻り値 | `string`                             | 置き換えた後の文字列       |

```php
use aieuo\mineflow\Mineflow;
use aieuo\mineflow\variable\StringVariable;

$helper = Mineflow::getVariableHelper();
$result = $helper->replaceVariables("あいうえお{var}かきくけこ", [
    "var" => new StringVariable("text"),
]);
```

### `VariableHelper->isVariableString()`

**文字列が変数か**

|     | 型                  | 説明  |
|-----|--------------------|-----|
| 引数1 | `string $variable` | 文字列 |
| 戻り値 | `bool`             | 文字列が変数か  |

```php
use aieuo\mineflow\Mineflow;

$helper = Mineflow::getVariableHelper();
$result = $helper->isVariableString("{var}");
```

### `VariableHelper->isSimpleVariableString()`

**文字列が変数か**

> [!NOTE]
> `VariableHelper->isVariableString()`と違い`[]`でのプロパティの指定があると`false`になります．

|     | 型                  | 説明  |
|-----|--------------------|-----|
| 引数1 | `string $variable` | 文字列 |
| 戻り値 | `bool`             | 文字列が変数か  |

```php
use aieuo\mineflow\Mineflow;

$helper = Mineflow::getVariableHelper();
$result = $helper->isSimpleVariableString("{var}");
```

### `VariableHelper->containsVariable()`

**文字列に変数が含まれているか**

|     | 型                  | 説明             |
|-----|--------------------|----------------|
| 引数1 | `string $variable` | 文字列            |
| 戻り値 | `bool`             | 文字列に変数が含まれているか |

```php
use aieuo\mineflow\Mineflow;

$helper = Mineflow::getVariableHelper();
$result = $helper->containsVariable("あいうえお{var}かきくけこ");
```

### `VariableHelper->arrayToListVariable()`

**PHPの配列をリスト変数,又はマップ変数に変換する**

|     | 型                                  | 説明    |
|-----|------------------------------------|-------|
| 引数1 | `array $data`                      | PHP配列 |
| 戻り値 | `ListVariable` &#124; `MapVariable` | 変数  |

```php
use aieuo\mineflow\Mineflow;

$helper = Mineflow::getVariableHelper();
$variable = $helper->arrayToListVariable([
    "a", "b", "c"
]);
```

### `VariableHelper->tagToVariable()`

**NBTタグをMineflow変数に変換する**

|     | 型          | 説明    |
|-----|------------|-------|
| 引数1 | `Tag $tag` | NBTタグ |
| 戻り値 | `Variable` | 変数  |

```php
use aieuo\mineflow\Mineflow;

$helper = Mineflow::getVariableHelper();
$variable = $helper->tagToVariable($tag);
```

### `VariableHelper->variableArrayToArray()`

**Mineflow変数の配列をPHPの配列に変換する**

|     | 型          | 説明           |
|-----|------------|--------------|
| 引数1 | `array $variables` | Mineflow変数配列 |
| 戻り値 | `Variable` | PHP配列        |

```php
use aieuo\mineflow\Mineflow;
use aieuo\mineflow\variable\StringVariable;

$helper = Mineflow::getVariableHelper();
$variable = $helper->variableArrayToArray([
    new StringVariable("aaa"),
    new StringVariable("bbb"),
]);
```

## aieuo\mineflow\variable\DummyVariable

**変数のタイプの情報を持った変数**

### `DummyVariable->__construct()`

|     | 型          | 説明     |
|-----|------------|--------|
| 引数1 | `string $valueClass = ""` | 変数のクラス |
| 引数2 | `string $description = ""` | 変数の説明  |

```php
use aieuo\mineflow\variable\DummyVariable;
use aieuo\mineflow\variable\StringVariable;

$type = new DummyVariable(StringVariable::class);
```

## aieuo\mineflow\variable\Variable

### `Variable->getValue()`

**変数の値を取得する**

|     | 型       | 説明                                                      |
|-----|---------|---------------------------------------------------------|
| 戻り値 | `mixed` | 変数の値 |

```php
use aieuo\mineflow\variable\StringVariable;

$variable = new StringVariable("text");
$value = $variable->getValue();
```

### `Variable::registerProperty()`

**変数にプロパティを追加する**  
`{変数名.プロパティ}`で取得できるプロパティを追加します．

|     | 型                                         | 説明                   |
|-----|-------------------------------------------|----------------------|
| 引数1 | `string $class`                           | プロパティを追加する変数のクラス     |
| 引数2 | `string $name`                            | プロパティ名               |
| 引数3 | `VariableProperty $property`               | プロパティ               |
| 引数5 | `bool $override = false`                  | すでにプロパティが存在する場合上書きするか |
| 引数6 | `array $aliases = []`                     | エイリアス名                |
| 戻り値 | `void`                                    |                      |

引数4のクロージャの第1引数には変数の値が渡されます．

```php
use aieuo\mineflow\variable\Variable;
use aieuo\mineflow\variable\VariableProperty;
use aieuo\mineflow\variable\DummyVariable;
use aieuo\mineflow\variable\NumberVariable;
use aieuo\mineflow\variable\StringVariable;

Variable::registerProperty(StringVariable::class, "length", new VariableProperty(
    new DummyVariable(NumberVariable::class),
    function (string $value) {
        return mb_strlen($value);
    }
), aliases: ["len"]);
```

### `Variable::getProperties()`

**変数のプロパティ一覧を取得する**

|     | 型            | 説明                                                      |
|-----|--------------|---------------------------------------------------------|
| 戻り値 | `array<string, callable>` | キーが変数名，値が`Variable::registerProperty`の第4引数で指定したクロージャの配列 |

```php
use aieuo\mineflow\variable\StringVariable;

$properties = StringVariable::getProperties();
```

### `Variable::getPropertyTypes()`

**変数のプロパティの型一覧を取得する**

|     | 型            | 説明                                                           |
|-----|--------------|--------------------------------------------------------------|
| 戻り値 | `array<string, DummyVariable>` | キーが変数名，値が`Variable::registerProperty`の第3引数で指定したDummyVariable |

```php
use aieuo\mineflow\variable\StringVariable;

$types = StringVariable::getPropertyTypes();
```

### `Variable->getProperty()`

**変数のプロパティを取得する**

|     | 型                       | 説明      |
|-----|-------------------------|---------|
| 引数1 | `string $name`          | プロパティ名  |
| 戻り値 | `Variable` &#124; `null` | プロパティの値 |

```php
use aieuo\mineflow\variable\StringVariable;

$var = new StringVariable("aiueo");
$length = $var->getProperty("length");
```

### `Variable::registerMethod()`

**変数にプロパティを追加する**  
`{変数名.メソッド名(引数1, 引数2...)}`で実行できるメソッドを追加します．

|     | 型                                         | 説明                   |
|-----|-------------------------------------------|----------------------|
| 引数1 | `string $class`                           | メソッドを追加する変数のクラス      |
| 引数2 | `string $name`                            | メソッド名                |
| 引数3 | `VariableMethod $method`                  | メソッドの型               |
| 引数5 | `bool $override = false`                  | すでにメソッドが存在する場合上書きするか |
| 引数6 | `array $aliases = []`                     | エイリアス名               |
| 戻り値 | `void`                                    |                      |

引数4のクロージャの第1引数には変数の値が，第2引数以降にはメソッドの引数が渡されます．

```php
use aieuo\mineflow\Mineflow;
use aieuo\mineflow\variable\Variable;
use aieuo\mineflow\variable\VariableMethod;
use aieuo\mineflow\variable\DummyVariable;
use aieuo\mineflow\variable\NumberVariable;
use aieuo\mineflow\variable\StringVariable;

Variable::registerMethod(StringVariable::class, "substring", new VariableMethod(
    new DummyVariable(NumberVariable::class),
    function (string $value, float $start, ?float $length = null) {
        return mb_substr($value, (int)$start, $length === null ? null : (int)$length);
    }
), aliases: ["substr"]);
```

### `Variable::getMethods()`

**変数のメソッド一覧を取得する**

|     | 型            | 説明                                                      |
|-----|--------------|---------------------------------------------------------|
| 戻り値 | `array<string, callable>` | キーがメソッド名，値が`Variable::registerMethod`の第4引数で指定したクロージャの配列 |

```php
use aieuo\mineflow\variable\StringVariable;

$methods = StringVariable::getMethods();
```

### `Variable::getMethodTypes()`

**変数のメソッドの型一覧を取得する**

|     | 型            | 説明                                                             |
|-----|--------------|----------------------------------------------------------------|
| 戻り値 | `array<string, DummyVariable>` | キーがメソッド名，値が`Variable::registerMethod`の第3引数で指定したDummyVariable |

```php
use aieuo\mineflow\variable\StringVariable;

$types = StringVariable::getMethodTypes();
```

### `Variable->callMethod()`

**変数のメソッドを実行する**

|     | 型                       | 説明      |
|-----|-------------------------|---------|
| 引数1 | `string $name`          | プロパティ名  |
| 戻り値 | `Variable` &#124; `null` | プロパティの値 |

```php
use aieuo\mineflow\variable\StringVariable;

$var = new StringVariable("aiueo");
$length = $var->callMethod("length");
```

## aieuo\mineflow\variable\VariableSerializer

### `VariableSerializer::register()`

**VariableSerializerに変数を追加する**

|     | 型                                            | 説明                             |
|-----|----------------------------------------------|--------------------------------|
| 引数1 | `string $type`                               | 変数のタイプ名                        |
| 引数2 | `callable(Variable $var): mixed $serializer` | 変数を受け取り，JsonSerialize出来る値を返す関数 |
| 引数3 | `bool $override = false`                     | すでに存在する場合上書きするか                |
| 戻り値 | `void`                                       |                         |

```php
use aieuo\mineflow\variable\VariableSerializer;
use aieuo\mineflow\variable\StringVariable;

VariableSerializer::register(StringVariable::getTypeName(), static fn(StringVariable $var) => $var->getValue());
```

### `VariableSerializer::isSerializable()`

**変数をシリアライズできるか**

|     | 型              | 説明                             |
|-----|----------------|--------------------------------|
| 引数1 | `string $type` | 変数のタイプ名                        |
| 戻り値 | `bool`         | シリアライズできるか |

```php
use aieuo\mineflow\variable\VariableSerializer;
use aieuo\mineflow\variable\StringVariable;

$serializable = VariableSerializer::isSerializable(StringVariable::getTypeName());
```

## aieuo\mineflow\variable\VariableDeserializer

### `VariableDeserializer::register()`

**VariableDeserializerに変数を追加する**

|     | 型                                          | 説明                                          |
|-----|--------------------------------------------|---------------------------------------------|
| 引数1 | `string $type`                             | 変数のタイプ名                                     |
| 引数2 | `callable(mixed): ?Variable $deserializer` | `VariableSerializer`でシリアライズした値を受け取り，変数を返す関数 |
| 引数3 | `bool $override = false`                   | すでに存在する場合上書きするか                             |
| 引数4 | `array $aliases = []`                   | 変数のタイプ名のエイリアス                               |
| 戻り値 | `void`                                       |                         |

```php
use aieuo\mineflow\variable\VariableDeserializer;
use aieuo\mineflow\variable\StringVariable;

VariableDeserializer::register(StringVariable::getTypeName(), static fn($data) => new StringVariable((string)$data), aliases: [0]);
```

### `VariableDeserializer::isDeserializable()`

**変数をシリアライズできるか**

|     | 型              | 説明                             |
|-----|----------------|--------------------------------|
| 引数1 | `string $type` | 変数のタイプ名                        |
| 戻り値 | `bool`         | シリアライズできるか |

```php
use aieuo\mineflow\variable\VariableDeserializer;
use aieuo\mineflow\variable\StringVariable;

$deserializable = VariableDeserializer::isDeserializable(StringVariable::getTypeName());
```

## aieuo\mineflow\recipe\argument\RecipeArgument

### `RecipeArgument::addType()`

**レシピ引数に変数を追加する**  

|     | 型                             | 説明              |
|-----|-------------------------------|-----------------|
| 引数1 | `string $class`               | 変数のクラス          |
| 引数2 | `callable $formElement`       | 変数のタイプ名         |
| 引数3 | `bool $override = false`      | すでに存在する場合上書きするか |
| 戻り値 | `void`                        |                 |

```php
use aieuo\mineflow\recipe\argument\RecipeArgument;
use aieuo\mineflow\variable\object\ItemVariable;
use aieuo\mineflow\formAPI\element\mineflow\ItemVariableDropdown;

RecipeArgument::addType(ItemVariable::class, fn(string $text, array $variables) => new ItemVariableDropdown($variables, text: $text));
```

## aieuo\mineflow\recipe\Recipe

### `Recipe->addAction()`

**レシピにアクションを追加する**

```php
use aieuo\mineflow\flowItem\action\common\SendMessageToConsole;
use aieuo\mineflow\recipe\Recipe;

$recipe = new Recipe("test");
$recipe->addAction(new SendMessageToConsole("Hello!"));
```

### `Recipe->executeAllTargets()`

**レシピを実行する**

|     | 型                                | 説明                    |
|-----|----------------------------------|-----------------------|
| 引数1 | `?Entity $player = null`         | レシピを実行するプレイヤー(エンティティ) |
| 引数2 | `array $variables = []`          | レシピに追加する変数            |
| 引数3 | `?Event $event = null`           | イベントトリガーから実行された際のイベント |
| 引数4 | `array $args = []`               | レシピ実行時の引数             |
| 引数5 | `?FlowItemExecutor $from = null` | 実行元の`FlowItemExecutor`  |
| 引数6 | `?callable $callback = null`     | レシピの実行が終了した後に実行する     |

`$from`を指定した場合，レシピの戻り値を`$from`に追加し`$from`の実行を再開します．

```php
use aieuo\mineflow\recipe\Recipe;
use aieuo\mineflow\flowitem\FlowItemExecutor;
use pocketmine\player\Player;

$recipe = new Recipe("test1");
$recipe->executeAllTargets();

/** @var Player $target */
$recipe2 = new Recipe("test2");
$recipe2->executeAllTargets($target, callback: function (FlowItemExecutor $executor) {
    var_dump($executor->getVariables());
});
```

## aieuo\mineflow\trigger\Trigger

### `Trigger->getVariablesDummy()`

**実行時にレシピに追加される変数の型を取得する**

|     | 型                              | 説明                          |
|-----|--------------------------------|-----------------------------|
| 戻り値 | `array<string, DummyVariable>` | キーが変数名，値が`DummyVariable`の配列 |

```php
use aieuo\mineflow\trigger\block\BlockTrigger;

$trigger = new BlockTrigger("0,0,0,world");
$trigger->getVariablesDummy();
```

### `Trigger->getVariables()`

**実行時にレシピに追加される変数を取得する**

|     | 型                         | 説明                     |
|-----|---------------------------|------------------------|
| 引数1 | `mixed $data`             | トリガーの情報 |
| 戻り値 | `array<string, Variable>` | キーが変数名，値が`Variable`の配列 |

```php
use aieuo\mineflow\trigger\block\BlockTrigger;
use pocketmine\block\Block;

/** @var Block $block */
$pos = $block->getPosition();
$trigger = new BlockTrigger($pos->getX().",".$pos->getY().",".$pos->getZ().",".$pos->getWorld()->getFolderName());
$trigger->getVariables($block);
```

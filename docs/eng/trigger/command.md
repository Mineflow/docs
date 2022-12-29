# Command trigger
**Fires when a player executes a command．**

The following variables will be added

| name | description                                                               | type                                     |
|------|---------------------------------------------------------------------------|------------------------------------------|
| cmd  | First part of command separated by spaces                                 | [string](/variable/types.md#string)      |
| args | Command arguments. (If the command is `/warp aieuo`, `{args.0}` is aieuo) | [list [string]](/variable/types.md#list) |

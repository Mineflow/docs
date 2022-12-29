# Default variables

| name | description | type |
| ---- | ---- | ---- |
| server | server | [server](#server) |
| server_name | server name | [string](#string) |
| microtime | current microtime | [number](#number) |
| time | current time | [string](#string) |
| date | current date | [string](#string) |
| default_world | default world name | [string](#string) |
| onlines | names of online players | [list [string]](#list) |
| ops | name of operators | [list [string]](#list) |
| event | event when the recipe executes | [event](#event) |
| target | a player/entity who executed the recipe | [player](#player), [entity](#entity) |

> [!WARNING]
> These variables are not updated during execution. If you want to get the exact current time with the `microtime`, `time`, or `date` variables, use the `server.microtime`, `server.time`, or `server.date` variables instead. 

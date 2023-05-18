# Form trigger
**Fires when a form is submitted and a form button is pressed**

The following variables will be added

### Modal form

| name             | description                          | type                                 |
|------------------|--------------------------------------|--------------------------------------|
| data             | True if the `Yes` button is clicked. | [bool](/variable/types.md#bool)     |
| button1          | Data for `Yes` button                | [map](/variable/types.md#map)       |
| button1.selected | True if the `Yes` button is clicked. | [bool](/variable/types.md#bool)     |
| button1.text     | Label of `Yes` button                | [string](/variable/types.md#string) |
| button2          | Data for `No` button                 | [map](/variable/types.md#map)       |
| button2.selected | True if the `No` button is clicked.  | [bool](/variable/types.md#bool)     |
| button2.text     | Label of `No` button                 | [string](/variable/types.md#string) |

### List form

| name   | description                                   | type                                 |
|--------|-----------------------------------------------|--------------------------------------|
| data   | Index of the clicked button (starting from 0) | [number](/variable/types.md#number) |
| button | Label of the clicked button                   | [string](/variable/types.md#string) |

### Custom form

| name     | description                                                      | type                                      |
|----------|------------------------------------------------------------------|-------------------------------------------|
| data     | List of input data                                               | [list](/variable/types.md#list)          |
| selected | List of labels for selected `dropdown` and `step slider` options | [list [string]](/variable/types.md#list) |

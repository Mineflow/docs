# Variable

Characters enclosed by "{" and "}" are recognized as variables and will be replaced.  
examples: `{target}`, `{item}`

## Operator

Some variables can be calculated using `+`, `-`, `*`, and `/`.  
operator priority: `* /` > `+ -` > `>`.   
examples: `{number1 + number2}`, `{number * 10}`, `{target.name * 2}`, `{server.players > it.hand}`

### \>operator

`>` is used to apply the right-hand expression to the elements of the left-hand list variable.  
When the right-hand side expression is executed, each element of the list is added as a variable named `it`.    
Usage example:  
**Create a list of names of items that players on the server have in their hands**
`{server.players > it.hand > it.name}`  
**Create a list of the stats of creatures on the server multiplied by 10**
`{server.livings > it.health * 10}`

## Property (index)

You can specify the property by separating the variable names with a period like `{aiueo.oo}`.  
examples: `{list.0}`, `{target.name}`, `{target.item.id}`

## Method

You can execute a method by adding `.` and `methodname()` after the variable name like `{aiueo.oo()}`.  
(It is also used to distinguish properties from those of variables whose properties change dynamically.)  
examples: `{list.count()}`, `{aieuo.aie(a, 10)}`

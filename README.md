## How TypeScript Helps in Improving Code Quality and Project Maintainability

TypeScript adds types to JavaScript, which helps catch mistakes before running the code. This means if we make a small error, like using the wrong data type, TypeScript will warn us while we are coding not later but when the programmar is writting the code .

It also makes our code more organized and easier to understand, especially in big projects. With features like interface and classe, our code gets a proper structure, which helps when working in team or when we come back to our code after a long time.

TypeScript can also reform our modern code into older JavaScript versions, so it can work on all browsers. Overall, it helps us write cleaner, safer, and easy-to-maintain code.


## Differences Between Interfaces and Types in TypeScript

Though interface and type are quite similar, they have a few key differences.

 Interfaces are usually used for describing object structures, especially for things like class contracts.
 on the contrary Types are more flexible — for example, type is used to describe the structure of string | number | array | object | class etc.

 interface can be typeguarded by extend and type can't use extend

Overall,interface for object shapes and type for more advanced stuff like combining types or creating aliases is better.
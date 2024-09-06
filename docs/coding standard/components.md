# Coding Standard: Components

## Import

0. `// next components`
1. Next components
2. `// utils`
3. Utils

> - No CSS import
> - Component can't include an information about model or service
> - Component can't include another component (rather use 'children')

```ts
// next components
import Link from "next/link"

// utils
import { NewID } from "@/utils/id"
```

## Constants about component

Define constants about component without comment.

## Props defination

0. `// props`
1. Types for props defination (and export)
2. Props defination with `interface` (and export)

> - All types and interface about props should be exported
> - If props defination is in another file, should import it at the top of the file without comment

```ts
// props
export enum FlexDirection { Row = "r" , Column = "c" }
export enum FlexJustifying { Start = "st", SpaceBetween = "sb", Center = "c" }

export interface FlexProps {
    children: JSX.Element | Array<JSX.Element>,
    direction: FlexDirection,
    justifying: FlexJustifying
}
```

## Component defination

Define a component with `const` and arrow function.
And export it with `export default ...`

> If *implicit return* is possible, just use it with `()`

```tsx
const Greeting = (name: string) => (
    <h1>Hello, {name}!</h1>
)

export default Greeting
```

# Coding Standard: Components

## Overview

1. Imports
2. Constants
3. Props
4. Component

## File

### Imports

1. Comment: `// next components`
2. Import next components
3. Comment: `// utils`
4. Import utils

> - No CSS import
> - Component can't include an information about model or service
> - Component can't include another component (rather use 'children')

### Constants

Define constants about component without comment.

### Props

1. Comment: `// props`
2. Types that props defination depends on (and export)
3. Props defination itself with `interface` (and export)

> - All types and interface about props should be exported
> - If props defination is in another file, should import it at the top of the file without comment

### Component

Define a component with `const` and arrow function.
And export it with `export default ...`

> If *implicit return* is possible, just use it with `()`

## Example

```tsx
// next components
import Link from "next/link"

export interface GreetingProps {
    name: string
    href: string
}

const Greeting = ({ name, href }: GreetingProps) => (
    <Link href={href}>Hello, {name}!</Link>
)

export default Greeting
```

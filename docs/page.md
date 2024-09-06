# Page

## Import

0. `// model and service`
1. Model
2. Service
3. `// components`
4. User-defiend components
5. Icon components
6. Next components
7. `// utils`
8. Utils

> No CSS import without *layout.tsx*

```ts
// model and service
import { ContactName } from "@/model/contact"

import { GetAllMajorServcies } from "@/service/service"
import { GetContactByName  } from "@/service/contact"

// components
import Flex, { FlexDirection, FlexJustifying } from "@/components/flex"
import Grid from "@/components/grid"
import Card from "@/components/card"
import Jumbotron from "@/components/jumbotron"

import Link from "next/link"

// utils
import { NewID } from "@/utils/id"
```

## Page defination

Define a page with `const` and arrow function.
And export it with `export default ...`

> If *implicit return* is possible, just use it with `()`

```tsx
const About = () => (
    <h1>This is About page</h1>
)

export default About
```
# Coding Standard: `page.tsx`

## Overview

1. Imports
2. Constants
3. Page
4. ISR

## File

### Imports

1. Comment: `// model and service`
2. Import model
3. Import service
4. Comment: `// components`
5. Import user-defiend components
6. Import icon components
7. Impoty next components
8. Comment: `// utils`
9. Import utils

> No CSS import

### Constants

Define constants about component without comment.

### Page

Define a page with `const` and arrow function.
And export it with `export default ...`

> If *implicit return* is possible, just use it with `()`

```tsx
const About = () => (
    <h1>This is About page</h1>
)

export default About
```

## Metadata

If page has metadata with next `Metadata` type, export it under the page defination

## ISR

If page is rendered with **ISR**, export `revalidate` at the bottom of the file.

## Example

```ts
// model and service
import { ContactName } from "@/model/contact"

import { GetContactByName } from "@/service/contact"

// components
import Grid from "@/components/grid"
import Flex, { FlexDirection, FlexJustifying } from "@/components/flex"

import { DiscordIcon } from "@/components/icon/discord"
import { EmailIcon } from "@/components/icon/email"
import { PhoneIcon } from "@/components/icon/phone"

import Link from "next/link"

const Contact = async () => {
    const discord = await GetContactByName(ContactName.Discord)
    const email = await GetContactByName(ContactName.Email)
    const phone = await GetContactByName(ContactName.Phone)
    
    return ...
}

export default Contact

export const metadata: Metadata = {
    title: '...',
    description: '...',
    ...
}

export const revalidate = 60
```


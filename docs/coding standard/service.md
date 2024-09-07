# Coding Standard: Service

## Warnings

- Functions for actually fetching data
- Functions for buffer zone between `app` and `model`
- Take pure model data as an argument
- Return pure model data as a return value
- Users of service functions should not know about *how to fetch data in service*

## Overview

1. Imports
2. Constants
3. Service

## File

### Imports


0. `// model`
1. Model
2. `// [data-fetching library for service]`
3. Library for data-fetching

### Constants

Define contants for data-fetching

### Service

Define service functions

- Should use `export` and array function
- Use appropriate words about *what action that function does*
- Use appropriate words about *if that function fetches multiple data*
- Use appropriate words about *which argument that function uses to fetches data*

```ts
export const GetAllContactsByName = async (name: ContactName) => {
    ...
}

// what action that function does                       -> Get
// if that function fetches multiple data               -> All
// which argument that function uses to fetches data    -> ByName
```

## Example

```ts
// model
import { Contact, ContactName } from "@/model/contact"

// firebase
import { collection, query, getDocs, where } from "firebase/firestore"
import { firestore_DB } from "./firebase/firestore"

const FIREBASE_CONTACT_COLLECTION_NAME = "contact"

export const GetAllContacts = async () => {
    return ...
}

export const GetContactByName = async (name: ContactName) => {
    return ...
}

export const GetAllContactsByName = async (name: ContactName) => {
    return ...
}
```
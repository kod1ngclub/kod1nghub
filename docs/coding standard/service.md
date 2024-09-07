# Coding Standard: Service

- Functions for actually fetching data
- Functions for buffer zone between `app` and `model`
- Take pure model data as an argument
- Return pure model data as a return value
- Users of service functions should not know about *how to fetch data in service*

```ts
import { Contact, ContactName } from "@/model/contact"

export const GetAllContacts = async (): Array<Contact> => {
    return ...
}

// GetAllContacts: void -> Array<Contact>
```

## Import

0. `// model`
1. Model
2. `// [data-fetching library for service]`
3. Library for data-fetching

## Constants

Define contants for data-fetching

## Service defination

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

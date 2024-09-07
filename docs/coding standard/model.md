# Coding Standard: Model

## Warnings

- No import
  - An entity should be completely defined in **one file**
  - No library or framework can interfere with entity definations
- Use only `type` and `interface`
- Export all types and definations about an entity

## File

As file goes down, `type` and `interface` should follow **upward tendancy** from the perspective of **bottom up** model

```ts
export enum CompanyName {
    Google,
    Amazon,
    Apple
} // low in bottom up model

export interface Company {
    name: CompanyName,
    stock: number,
    slogan: string
} // high in bottom up model
```

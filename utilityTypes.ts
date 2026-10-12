type Partial<T> = {
  [K in keyof T]?: T[K]
}

type OptionalFruit = Partial<{ name: string; color: string }>;
// type OptionalFruit = {
//   name?: string,
//   color?: string
// }

// Required
// Create a mapped type which marks all of the properties of the passed in
// generic `T` as required.

// (Hint: This is the same as removing the optional modifier from
//  every property)
type Required<T> = {
  [K in keyof T]-?: T[K]
}
type RequiredFruit = Required<{ name?: string; color?: string }>;
// type RequiredFruit = {
//   name: string,
//   color: string
// }

// Readonly
// Create a mapped type which marks all of the properties of the passed
// in generic `T` as readonly.
type Readonly<T> ={
  readonly[K in keyof T]: T[K]
}

type ReadonlyFruit = Readonly<{ name: string; color: string }>;
// type ReadonlyFruit = {
//   readonly name: string,
//   readonly color: string
// }

// Record
// Create a mapped type which takes in two generics: `K` is a union type
// of property names and `T` is the value of those properties.
type Record <K extends keyof any,T> = {
  [P in K]: T
}

type FruitRecord = Record<"name" | "color", string>;
// type FruitRecord = {
//   name: string,
//   color: string
// }

// Exclude
// Create a conditional type which takes in two generics: `T` is a Union,
// and `U` is a Union. Exclude from `T` types that are assignable to `U`.
type Exclude<T, U> = T extends U ? never : T

type ExcludedValues = Exclude<"a" | "b" | "c", "c">;
// type ExcludedValues = "a" | "b"

// Extract
// Create a conditional type which takes in two generics: `T` is a Union,
// and `U` is a Union. Extract from `T` types that are assignable to `U`.
// (Hint: This is opposite of Exclude)
type Extract<T,U> = T extends U ? T : never
type ExtractedValues = Extract<"a" | "b" | "c", "c">;
// type ExtractedValues = "c"

// Pick
// Create a mapped type which takes in two generics: `T` is an interface,
// and `K` is a Union of literal types that represent some of the keys
// of `T`. This mapped type constructs a type which only has the properties
// that are in the Union `K`, removing the other properties.
type Pick<T,K extends keyof T> = {
  [P in K]: T[P]
}
type PickedValues = Pick<
  { name: string; color: string; sweetness: number },
  "name" | "color"
>;
// type PickedValues = {
//   name: string,
//   color: string
// }
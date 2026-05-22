/* eslint-disable @typescript-eslint/no-unused-vars */
interface Fruit {
  name: string;
  sweetness: number;
  color: unknown;
}

// Add the necessary return types and implementation for these
// user-defined type guards
function isString(maybeString: unknown): maybeString is string {
  return typeof maybeString === "string";
}
function isFruit(maybeFruit: unknown): maybeFruit is Fruit {
  if ((typeof maybeFruit !== "object") | (typeof maybeFruit === null)) {
    return false;
  }
  return name in maybeFruit && sweetness in maybeFruit && color in maybeFruit;
}
function assertIsFruit(maybeFruit: unknown): asserts maybeFruit is Fruit {
  if (!isFruit(maybeFruit)) {
    throw new Error("Dane muszą być obiektem!");
  }
}

// Don't change anything in this function
function checkFruit(fruit: unknown) {
  if (isFruit(fruit)) {
    if (isString(fruit.color)) {
      console.log(fruit.color.toUpperCase());
    }
  }
  assertIsFruit(fruit);

  console.log(`This fruit is ${fruit.name}`);
}



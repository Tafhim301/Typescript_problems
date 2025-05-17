function formatString(input: string, toUpper?: boolean): string {
  if (toUpper || typeof toUpper === "undefined") {
    return input.toUpperCase();
  } else {
    return input.toLocaleLowerCase();
  }
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const output: T[] = [];

  for (let array of arrays) {
    for (let item of array) {
      output.push(item);
    }
  }

  return output;
}

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);

    this.model = model;
  }

  getModel() {
    return `Model: ${this.model}`;
  }
}

function processValue(value: string | number): number {
  if (typeof value === "number") {
    return value * 2;
  } else {
    return value.length;
  }
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }

  let highestPricedProduct: Product = products[0];
  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    if (product.price > highestPricedProduct.price) {
      highestPricedProduct = product;
    }
  }

  return highestPricedProduct;
}


enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}


function getDayType(day: Day): string{
  if(day === Day.Saturday|| day === Day.Sunday){

    return "Weekend"
    

  }

  else{
   return "Weekday"
  }

}

async function squareAsync(n: number): Promise<number>{
  await new Promise(resolve => setTimeout(resolve, 1000));

  if(n >= 0 ){
    return n * n;
  }

  else{
    throw new Error("Error : Negative number not allowed");
    
    
  }

}


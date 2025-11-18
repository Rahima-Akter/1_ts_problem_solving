type DataTypes = string | number | boolean;

const formatValue = (value: DataTypes): DataTypes => {
  if (typeof value === "string") {
    return value.toLocaleUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }
  return value;
};

// -----------------------------------------------------------------------------

type valueType = string | unknown[];
const getLength = (value: valueType): number => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
};

// -----------------------------------------------------------------------------

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

const person1 = new Person("John Doe", 30);

const person2 = new Person("Alice", 25);

// -----------------------------------------------------------------------------

type BooksType = { title: string; rating: number }[];

const filterByRating = (value: BooksType): BooksType => {
  return value.filter((ratings) => ratings.rating >= 4 && ratings.rating <= 5);
};

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: -3.2 },
  { title: 'Book C', rating: 6.0 },
];

console.log(filterByRating(books));

// -----------------------------------------------------------------------------

type UserType = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}[];

const filterActiveUsers = (data: UserType): UserType => {
  return data.filter((users) => users.isActive === true);
};

// ------------------------------------------------------------------------------------

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (data: Book): string => {
  return `Title: ${data.title}, Author: ${data.author}, Published: ${
    data.publishedYear
  }, Available: ${data.isAvailable === true ? "Yes" : "No"}`;
};

// ------------------------------------------------------------------------------------

type ArrayType = unknown[];
const getUniqueValues = (arr1: ArrayType, arr2: ArrayType) => {
  let result: ArrayType = [];
  arr1.forEach((val1) => {
    if (!result.includes(val1)) {
      result.push(val1);
    }
  });
  arr2.forEach((val2) => {
    if (!result.includes(val2)) {
      result.push(val2);
    }
  });
  return result;
};

// ------------------------------------------------------------------------------------

type ProductType = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}[];

const calculateTotalPrice = (value: ProductType): number => {
  return value.reduce((total, current) => {
    const totalPrice =
      current.price * current.quantity * (1 - (current.discount ?? 0) / 100);
    return total + totalPrice;
  }, 0);
};

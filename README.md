### ♦️What are some differences between interfaces and types in TypeScript?

- ইন্টারফেস বাবহার করা হয় কোন অবজেক্ট এর আকৃতি/কাঠামো কেমন হবে তা বর্ণনা করার জন্য। অর্থাৎ এটি কোন ধরণের প্রপার্টি ও টাইপ ধারণ করে তার সম্পর্কে পরিষ্কার ধারণা দেয়।

- টাইপ ব্যবহার করা হয়, যে কোনো ধরণের ভেরিএবলের এর টাইপ কে বর্ণনা করার জন্য। যেমন (objects, unions, primitives, functions, etc.)

- ইন্টারফেস এর ভ্যালু বার বার এসাইন/পরিবর্তন করা যায়।
  যেমন :

```ts
interface A { x: number; } ✅
interface A { y: number; } ✅
```

- টাইপ এর ভ্যালু বার বার এসাইন/পরিবর্তন করা যায় না। যেমন :

```ts
type A = { x: number; } ✅
type A = { y: number;} ❌
```

- ইন্টারফেস এ ইনহেরিটেন্স ব্যবহার করতে হলে **extends** কীওয়ার্ড ব্যবহার করে করতে হয়। যেমন :

```ts
interface A {
  x: number;
}
interface B extends A {
  y: number;
}
```

- টাইপ এর ক্ষেত্রে ইনহেরিটেন্স ব্যবহার করতে হলে **intersection (&)** চিহ্ন ব্যবহার করে করতে হয়। যেমন :

```ts
type A = { x: number; }
type B = A & { y: number; } ✅
```

- ইন্টারফেস এ Tuple রিপ্রেজেন্ট করা যায় না।

- টাইপ এ Tuple রিপ্রেজেন্ট করা যায়। যেমন:

```ts
type Value = [number, number];
```

### ♦️What is the use of the keyof keyword in TypeScript? Provide an example.

- keyof এর মাধ্যমে একটি object এর key type গুলো দিয়ে একটি নতুন type তৈরী করা যায়।
  অর্থাৎ এটি object এর সবগুলো property-name (key) গুলো কে union হিসেবে দেয়।
  যেমন :

  ```ts
  type Person{
  name: string;
  phnNum: number;
  isAlive: boolean;
  }

  type NewPerson = keyof Person;
  //("name" | "phnNum" | "isAlive")
  ```

### ♦️Explain the difference between any, unknown, and never types in TypeScript.

- **_any:_**
  এটি যে কোনো ধরণের Value ধারণ করে, typescript এর type চেক করে না। এর safety কম।
  এটি হলো ফোন বুথ এর মতো যে কেউ চাইলেই কল করতে পারে। যেমন :

```ts
let canCall: any;

canCall = "calling";
canCall = 2.55;
canCall = true;
canCall = { A: "obj" };
console.log(canCall.toFixed(1)); // ভ্যালু যদি number না হয় তাহলে এটি runtime error দিবে, যদিও typescript এটি allow করে
```

- **_unknown:_**
  এটিও any এর মতো যে কোনো ধরণের Value ধারণ করে, তবে run করার আগে typescript এর type চেক করে। এর safety any অপেক্ষা বেশি।
  এটি হলো mystery-box এর মতো এর ভেতর কি আছে না জেনে ব্যবহার করা যায় না। যেমন :

```ts
let num: unknown;
num = 3;
if (typeof num === "number") {
  console.log(num * num);
}
```

- **_never:_**
  এটি এমন কিছু represent করে যা কখনোই হয় ঘটে না।
  এটি সাধারণত function এ error throw করার জন্য অথবা কোনো কিছুই return না করার জন্য use করা হয়। যেমন :

```ts
function throwError(msg: string): never {
  throw new Error(msg);
}
```

### ♦️Provide an example of using union and intersection types in TypeScript.

- **_Union_**

```ts
type Union = string | number | boolean;
let user: Union = 3;
console.log("this is user: ", user);
// Result: this is user:  3
```

- **_Intersection_**

```ts
type Person = {
  name: string;
};

type Employed = {
  employeeId: number;
};

type EmployedPerson = Person & Employed;

const employeedUser: EmployedPerson = {
  name: "sam",
  employeeId: 1234,
};
console.log("this is employeedUser: ", employeedUser);
// Result: this is employeedUser:  { name: 'sam', employeeId: 1234 }
```

### ♦️What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

- TypeScript এ enum হলো একটি ফিক্সড রুলস তৈরী করার পদ্ধতি। অর্থাৎ enum এর মাধ্যমে set of constants তৈরী করা হয় ,যার মাধ্যমে কোড এর readability বাড়ে এবং code সহজে maintain করা যায়। যেমন :

```ts
enum TrafficLight {
  Stop = "RED",
  StandBy = "YELLOW",
  Go = "GREEN",
}
let car: TrafficLight = TrafficLight.Go;
console.log(car);
// Result: GREEN

enum Numbers {
  BigNumber = 300,
  SmallNumber = 3,
}
let num: Numbers = Numbers.SmallNumber;
console.log(num);
// Result: 3
```

- enum ব্যবহার এর মাধ্যমে code self-explanatory দেখায়। এবং type-safety ও দেয়।

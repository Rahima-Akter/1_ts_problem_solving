### ♦️ What are some differences between interfaces and types in TypeScript?

- ইন্টারফেস ব্যবহার করা হয় কোন অবজেক্ট এর আকৃতি/কাঠামো কেমন হবে তা বর্ণনা করার জন্য। অর্থাৎ এটি কোন ধরণের প্রপার্টি ও টাইপ ধারণ করে তার সম্পর্কে পরিষ্কার ধারণা দেয়।

- টাইপ ব্যবহার করা হয়, যে কোনো ধরণের ভেরিএবলের টাইপ কে বর্ণনা করার জন্য। যেমন (objects, unions, primitives, functions, etc.)

- ইন্টারফেস এর ভ্যালু বার বার অ্যাসাইন/পরিবর্তন করা যায়।  
  যেমন :

```ts
interface A { x: number; }  // ✅
interface A { y: number; }  // ✅
```

- টাইপ এর ভ্যালু বার বার অ্যাসাইন/পরিবর্তন করা যায় না।
যেমন :

```ts
type A = { x: number; }  // ✅
type A = { y: number; }  // ❌
```

- ইন্টারফেস এ ইনহেরিটেন্স ব্যবহার করতে হলে extends কীওয়ার্ড ব্যবহার করে করতে হয়।
যেমন :

```ts
interface A { x: number; }
interface B extends A { y: number; }
```
- টাইপ এর ক্ষেত্রে ইনহেরিটেন্স ব্যবহার করতে হলে intersection (&) চিহ্ন ব্যবহার করে করতে হয়।
যেমন :

```ts
type A = { x: number; }
type B = A & { y: number; }
```
- ইন্টারফেস এ টাপল রিপ্রেজেন্ট করা যায় না। // ❌

-টাইপ এ টাপল রিপ্রেজেন্ট করা যায়।  // ✅
যেমন :

```ts
type Value = [number, number];
```

### ♦️What is the use of the keyof keyword in TypeScript? Provide an example.
keyof এর মাধ্যমে একটি object এর key type গুলো দিয়ে একটি নতুন type তৈরি করা যায়।
অর্থাৎ একটি object এর সবগুলো property-name (key) গুলো কে union হিসেবে দেয়।

```ts
type Person {
  name: string;
  phn-num: number;
  isAlive: boolean;
}

type NewPerson = keyof Person; 
// ("name" | "phn-num" | "isAlive")
```

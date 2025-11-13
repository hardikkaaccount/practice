## **Module 4: TypeScript with JavaScript**
## **Module 4: TypeScript with JavaScript**

### **4.1 Interoperability**

Interoperability refers to how **TypeScript** and **JavaScript** can work together within the same codebase. Since TypeScript is a superset of JavaScript, it’s designed to integrate seamlessly with existing JS code.

---

#### **Using JavaScript Libraries in TypeScript**

TypeScript allows you to use almost any JavaScript library — even if that library wasn’t written with TypeScript in mind.

There are **three main ways** to do this:

1. **Using libraries with built-in TypeScript definitions**

   * Many modern libraries already include their type definitions.
   * Example: React, Lodash, and Axios come with built-in TypeScript support.
   * You can simply install and use them:

     ```bash
     npm install lodash
     ```

     ```ts
     import _ from "lodash";

     const numbers = [1, 2, 3];
     console.log(_.reverse(numbers)); // Works with types automatically
     ```

2. **Using libraries with type definitions from DefinitelyTyped**

   * If a library doesn’t include its own types, check the **DefinitelyTyped** repository.
   * These can be installed with the `@types` prefix:

     ```bash
     npm install lodash @types/lodash
     ```
   * TypeScript will automatically use these definitions for type checking and IntelliSense.

3. **Using JavaScript libraries without type definitions**

   * If no type definitions are available, you can:

     * Use the `any` type temporarily.
     * Or, create a **custom declaration file** (explained in section 4.2).

   Example:

   ```ts
   // Using JS library with no types
   const someLib: any = require("some-legacy-lib");
   someLib.doSomething(); // TypeScript won’t check types here
   ```

---

#### **Typing for Existing JavaScript Code**

If you’re migrating an existing JS project to TypeScript, you can incrementally add type safety:

1. **Rename `.js` to `.ts` or `.tsx`**

   * TypeScript will infer types wherever possible.

2. **Use JSDoc annotations in JS files**

   * You can get type checking **without renaming files**:

     ```js
     // @ts-check
     /**
      * @param {number} x
      * @param {number} y
      */
     function add(x, y) {
       return x + y;
     }
     ```

3. **Enable gradual migration**

   * In your `tsconfig.json`, set:

     ```json
     {
       "allowJs": true,
       "checkJs": true
     }
     ```
   * This allows TypeScript to analyze both JS and TS files in the same project.

---

### **4.2 Declaration Files**

Declaration files (`.d.ts`) are TypeScript files that contain **only type information** — no implementation.

They tell the TypeScript compiler what types exist in JavaScript code or third-party libraries.

---

#### **Creating and Using Declaration Files**

1. **Creating a custom `.d.ts` file**

   * Suppose you’re using a JS library with no TypeScript support.

   * You can create a `someLib.d.ts` file like this:

     ```ts
     // someLib.d.ts
     declare module "someLib" {
       export function doSomethingCool(input: string): void;
       export const version: string;
     }
     ```

   * Now you can safely import and use it:

     ```ts
     import { doSomethingCool, version } from "someLib";

     doSomethingCool("TypeScript rocks!");
     console.log(version);
     ```

2. **Global declarations**

   * You can also declare global variables or functions:

     ```ts
     // globals.d.ts
     declare const APP_VERSION: string;
     declare function logMessage(msg: string): void;
     ```

   * TypeScript will treat them as existing globally across your project.

3. **Organizing declarations**

   * Usually, declaration files are stored in a folder like:

     ```
     src/
       types/
         someLib.d.ts
     ```
   * Then reference them in your `tsconfig.json`:

     ```json
     {
       "compilerOptions": {
         "typeRoots": ["./src/types", "./node_modules/@types"]
       }
     }
     ```

---

#### **Typing for Third-Party Libraries**

If a third-party library doesn’t come with types, you can:

1. **Install from DefinitelyTyped:**

   ```bash
   npm install @types/jquery
   ```

   Then:

   ```ts
   import $ from "jquery";
   $("#app").text("Hello TypeScript!");
   ```

2. **Write your own `.d.ts` file:**

   * Example for a simple math library:

     ```ts
     // mathLib.d.ts
     declare module "mathLib" {
       export function add(a: number, b: number): number;
       export function subtract(a: number, b: number): number;
     }
     ```

3. **Use `declare global` for globals**

   * If the library attaches variables to the `window` object:

     ```ts
     // globals.d.ts
     declare global {
       interface Window {
         myGlobalConfig: {
           debug: boolean;
         };
       }
     }
     ```

---

### ✅ **Key Takeaways**

* TypeScript can work with existing JavaScript seamlessly.
* `.d.ts` files describe the shape of JS code for TypeScript.
* Use **DefinitelyTyped** (`@types/`) packages whenever possible.
* You can incrementally migrate JS code by enabling `allowJs` and `checkJs`.
* Declaration files improve type safety and developer experience when working with untyped libraries.


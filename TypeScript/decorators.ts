// ============================
// 1️⃣ CLASS DECORATOR
// ============================
function Logger(value: any, context: any) {
  console.log("📌 Class Decorator executed for:", context.name);
}

// ============================
// 2️⃣ METHOD DECORATOR
// ============================
function Log(value: any, context: any) {
  const originalMethod = value;

  return function (...args: any[]) {
    console.log(`🚀 Method "${String(context.name)}" called with:`, args);
    return originalMethod.apply(this, args);
  };
}

// ============================
// 3️⃣ PROPERTY DECORATOR
// ============================
function Uppercase(value: undefined, context: any) {

  return function (initialValue: any) {
    if (typeof initialValue === "string") {
      return initialValue.toUpperCase();
    }
    return initialValue;
  };
}

// ============================
// USING ALL THREE DECORATORS
// ============================
@Logger
class User {

  @Uppercase
  name = "hardik";

  @Log
  greet(msg: string) {
    console.log("User says:", msg);
  }
}

console.log("========== Program Started ==========");

const u = new User();
console.log("👤 Name:", u.name);

u.greet("good morning");

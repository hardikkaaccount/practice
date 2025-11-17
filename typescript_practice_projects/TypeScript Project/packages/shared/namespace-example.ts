// Example of TypeScript namespaces (modules are preferred in modern TS)
namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }

  const lettersRegexp = /^[A-Za-z]+$/;
  const numberRegexp = /^[0-9]+$/;

  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
      return lettersRegexp.test(s);
    }
  }

  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
      return s.length === 5 && numberRegexp.test(s);
    }
  }
}

// Usage example
const validators: { [s: string]: Validation.StringValidator } = {};
validators['ZIP code'] = new Validation.ZipCodeValidator();
validators['Letters only'] = new Validation.LettersOnlyValidator();

const strings = ['Hello', '98052', '101'];

for (const s of strings) {
  for (const name in validators) {
    const isMatch = validators[name].isAcceptable(s);
    console.log(`'${s}' ${isMatch ? 'matches' : 'does not match'} '${name}'.`);
  }
}
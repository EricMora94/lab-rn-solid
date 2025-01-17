export class Animal {
  // TODO: Fill in the missing code to adhere to the Liskov Substitution Principle
  getInfo(): string {
      return ''
  }
}

export class Dog extends Animal {
  private name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  // TODO: Fill in the missing code to adhere to the Liskov Substitution Principle

  getInfo(): string {
    return `Dog - ${this.name}`;
  }
}

export class Fish extends Animal {
  private type: string;

  constructor(type: string) {
    super();
    this.type = type;
  }

  // TODO: Fill in the missing code to adhere to the Liskov Substitution Principle
  getInfo(): string {
    return `Fish - ${this.type}`;
  }
}

// Example Usage:
export function printInfo(animal: Animal): void {
  console.log(`Info: ${animal.getInfo()}`);
}



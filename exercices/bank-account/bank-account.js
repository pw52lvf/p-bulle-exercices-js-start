//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
    #somme;
    #isoppen;
  constructor() {
    this.#isoppen = false;
  }

  open() {
    if (!this.#isoppen){
      this.#isoppen = true;
      this.#somme = 0;
    }
    else {
      throw new ValueError();
    }
  }

  close() {
    if (this.#isoppen){
      this.#isoppen = false;
    }
    else{
      throw new ValueError();
    }
  }

  deposit(value) {
    if (this.#isoppen && value > 0){
      this.#somme += value;
    }
    else {
      throw new ValueError();
    }
  }

  withdraw(value) {
    if (this.#isoppen && this.#somme >= value && value > 0){
      this.#somme -= value;
    }
    else{
      throw new ValueError();
    }
  }

  get balance() {
    if (this.#isoppen){
      return this.#somme
    }
    else {
      throw new ValueError();
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
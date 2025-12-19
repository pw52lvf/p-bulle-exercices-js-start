//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
    #somme;
    #isoppen;
  constructor() {
    isoppen = false;
  }

  open() {
    if (!isoppen){
      isoppen = true;
      somme = 0;
    }
    else {
      throw new ValueError();
    }
  }

  close() {
    if (isoppen){
      isoppen = false;
    }
    else{
      throw new ValueError();
    }
  }

  deposit(value) {
    if (isoppen && value > 0){
      somme += value;
    }
    else {
      throw new ValueError();
    }
  }

  withdraw(value) {
    if (isoppen && somme >= value && value > 0){
      somme -= value;
    }
    else{
      throw new ValueError();
    }
  }

  get balance() {
    if (isoppen){
      return somme
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
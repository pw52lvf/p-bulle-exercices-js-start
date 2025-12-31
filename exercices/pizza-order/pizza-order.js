/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  let cost = 0;
  const stuff = [...extras];
  for (let i = 0; i < stuff.length; i++){
    if (stuff[i] === 'ExtraSauce'){
      cost++;
    }
    else if (stuff[i] === 'ExtraToppings'){
      cost += 2;
    }
  }

  switch(pizza){
    case 'Margherita':
      cost += 7;
      break;
    case 'Caprese':
      cost += 9;
      break;
    case 'Formaggio':
      cost += 10;
      break;
  }

  return cost;
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let cost = 0;
  for (let i = 0; i < pizzaOrders.length; i++){
    cost += pizzaPrice(pizzaOrders[i].pizza, ...pizzaOrders[i].extras)
  }

  return cost;
}

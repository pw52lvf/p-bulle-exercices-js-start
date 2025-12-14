// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  if (name === 'Pure Strawberry Joy'){
    return 0.5
  }
  else if (name === 'Green Garden' || name === 'Energizer'){
    return 1.5
  }
  else if (name === 'Tropical Island'){
    return 3
  }
  else if (name === 'All or Nothing'){
    return 5
  }
  else {
    return 2.5
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let num = 0;
  for (let i = 0; i < limes.length; i++){
    if (wedgesNeeded > 0){
      if (limes[i] === 'small'){
        wedgesNeeded -= 6;
        num++;
      }
      else if (limes[i] === 'medium'){
        wedgesNeeded -= 8;
        num++;
      }
      else if (limes[i] === 'large'){
        wedgesNeeded -= 10;
        num++;
      }
    }
  }
  return num
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  for (let i = 0; timeLeft > 0; i++){
    timeLeft -= timeToMixJuice(orders[i]);
    orders.shift()
  }

  return orders
}

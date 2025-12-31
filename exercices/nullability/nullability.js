// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines the text to print on a badge
 *
 * @param {number | null} id id of the employee, or null if they're new hires
 * @param {string} name the name of the employee
 * @param {string | null} department the department or null if they're the owner
 *
 * @returns {string} the text to print on the badge
 */
export function printBadge(id, name, department) {
  if (!id){
    if (!department){
      return name + ' - OWNER'
    }
    else {
      return name + ' - ' + department.toUpperCase();
    }
  }
  else if (!department){
    return '[' + id + '] ' + name + ' - OWNER'
  }
  else {
    return '[' + id + '] ' + name + ' - ' + department.toUpperCase();
  }
}

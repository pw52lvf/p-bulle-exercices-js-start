//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, seconds) => {
  switch (planet) {
    case 'mercury':
      return calculation(0.2408467, seconds);
    case 'venus':
      return calculation(0.61519726, seconds);
    case 'earth':
      return calculation(1, seconds);
    case 'mars':
      return calculation(1.8808158, seconds);
    case 'jupiter':
      return calculation(11.862615, seconds);
    case 'saturn':
      return calculation(29.447498, seconds);
    case 'uranus':
      return calculation(84.016846, seconds);
    case 'neptune':
      return calculation(164.79132, seconds);
    default:
      throw new Error("not a planet");
  }
};

const calculation = (num, seconds) => {
    return Math.round((seconds / 31557600 / num) * 100) / 100;
}
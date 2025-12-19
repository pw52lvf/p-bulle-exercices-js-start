//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  let gigadate = new Date(date)
  gigadate.setTime(gigadate.getTime() + 10 ** 12)
  return gigadate;
};

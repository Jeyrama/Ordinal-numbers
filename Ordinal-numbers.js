/*
Ordinal numbers are used to tell the position of something in a list. 
Unlike regular numbers, they have a special suffix added to the end of them.

Task: 
  Your task is to write the ordinal(number, brief) function. 
  Number will be an integer. 
  You need to find the ordinal suffix of said number.

Brief is an optional parameter and defaults to false. 
When using brief notation, nd and rd use d instead. 
All others are the same.

ordinal(number, brief) should return a string containing those two characters 
(or one character) that would be tagged onto the end of the number.

The last two digits determine the ordinal suffix.

Notation for general notation
0  1  2  3  4  5  6  7  8  9
th st nd rd th th th th th th

Notation for brief notation
0  1  2  3  4  5  6  7  8  9
th st d  d th th th th th th

However, when the last two digits of the number are 11, 12, or 13, 
th is used instead of st,nd,rd respectively.

Examples:
  *General
  1 - 1st
  2 - 2nd
  3 - 3rd
  5 - 5th
  11- 11th
  149 - 149th
  903 - 903rd

  *Brief
  1 - 1st
  2 - 2d
  3 - 3d
  5 - 5th
  11- 11th
  149 - 149th
  903 - 903d

Notes:
  Numbers might be passed in replacement of booleans, 
  so false may be passed in as 0 and true may be passed in as 1.
*/


// Solution

function ordinal(number, brief) {
  let lastDigit = number % 10;
  let penultimateDigit = ((number - lastDigit) / 10) % 10;
  
  if(penultimateDigit === 1 || lastDigit === 0 || lastDigit >= 4) return "th";
  if(lastDigit === 1) return "st";
  if(brief) return "d";
  if(lastDigit === 2) return "nd";
  if(lastDigit === 3) return "rd";
}

// or

const ordinal = (number, brief) => {
  const map = {
    0: 'th', 1: 'st', 2: 'nd', 3: 'rd', 4: 'th', 5: 'th', 6: 'th', 7: 'th', 8: 'th', 9: 'th',
    10: 'th', 11: 'th', 12: 'th', 13: 'th'
  };
  
  let result;
  if (number <= 13) result = map[number]
  else if (map[`${number}`.slice(-2)]) result = map[`${number}`.slice(-2)];
  else result = map[`${number}`.slice(-1)];
  
  return brief ? result.replace(/nd|rd/g, 'd') : result;
}
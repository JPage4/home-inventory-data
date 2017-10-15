/* this is long form... use a for loop instead */


const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
const grades = {"A": 0, "B": 0, "C": 0, "D": 0,"F": 0,} // You'll need to change this line of code
let count = {}

for (let i = 0; i < scores.length; i++) 
    /*
      If the score is greater than 90, increment grades.A by 1.

      You can use a series of `if/then` blocks, but you could
      also achieve this with a switch statement.
    */
switch (true) {
    case (scores[i]) > 90:
        grades["A"]++
        break;

    case (scores[i]) > 80:
        grades["B"]++
        break;

    case (scores[i]) > 70:
        grades["C"]++
        break;

    case (scores[i]) > 60:
        grades["D"]++
        break;
    default: 
        grades["F"]++
        break;
    
}

console.log(grades)


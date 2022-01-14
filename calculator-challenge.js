/* Arguments
student score, total possible score
15/20 -> You got a C (75%)!*/

let gradeCalc = function (studentScore, totalScore) {
  let grade = (studentScore / totalScore) * 100;
  let letter = "F";

  if (grade >= 90) {
    letter = "A";
  } else if (grade >= 80) {
    letter = "B";
  } else if (grade >= 70) {
    letter = "C";
  } else if (grade >= 60) {
    letter = "D";
  }

  return `You got ${grade}%, your grade is ${letter}!`;
};

let totalGrade = gradeCalc(12, 100);
console.log(totalGrade);

// giammarco -> 5, 6, 3, 2
// ebube -> 7, 2, 6, 6
// tigne -> 1, 2, 3, 4

const giammarco = [5, 6, 3, 2];
const ebube =     [7, 2, 6, 6];
const tigne =     [1, 2, 3, 4];
const cadrobbi =  [0, 0 ,0, 1];

let giammarcoSum = 0;
let ebubeSum = 0;
let tigneSum = 0;
let cadrobbiSum = 0;
for (let i = 0; i < giammarco.length; i = i + 1) {
  giammarcoSum = giammarcoSum + giammarco[i];
  ebubeSum = ebubeSum + ebube[i];
  tigneSum = tigneSum + tigne[i]
  cadrobbiSum = cadrobbiSum + cadrobbi[i];
}

const giammarcoAvg = giammarcoSum / giammarco.length;
const ebubeAvg = ebubeSum / ebube.length;
const tigneAvg = tigneSum / tigne.length;
const cadrobbiAvg = cadrobbiSum / cadrobbi.length;

console.log('Giammarco final grade:' + giammarcoAvg);
console.log('Ebube final grade:' + ebubeAvg);
console.log('Tigne final grade:' + tigneAvg);
console.log('Cadrobbi final grade:' + cadrobbiAvg);


// You can think two Dimensional Array as a table
/*              test1         test2       test3       test4
  giammarco       5             6           7           2
  ebube           7             2           6           6
  tigne           1             2           3           4
  cadrobbi        0             0           0           1
  
  newStudent      5             6           6           6
*/

const twoDimensionalArray = [
  giammarco,
  ebube,
  tigne,
  cadrobbi,
  [5, 6, 6, 6],
];

for (let i = 0; i < twoDimensionalArray.length; i = i + 1) {
  let sum = 0;
  const currentStudent = twoDimensionalArray[i];
  for (let j = 0; j < currentStudent.length; j = j + 1) {
    sum = sum + currentStudent[j];
  }
  console.log(sum / currentStudent.length);
}

let globalSum = 0;
const testNumber = 4;
for (let i = 0; i < twoDimensionalArray.length; i = i + 1) {
  for (let j = 0; j < 4; j = j + 1) {
    globalSum = globalSum + twoDimensionalArray[i][j]
  }
}

const globalAvg = globalSum / (twoDimensionalArray.length * testNumber);
console.log('Global avg:' + globalAvg);


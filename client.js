// Functions!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function employeeBonus (worker) {
  console.log('in employeeBonus',worker);
  let afterraise = {
    name: worker.name,
    bonusPercentage: 0,
    totalBonus: 0,
    totalCompensaction: 0
  }
  //console.log(afterraise);
  newBonuspercentage = Number(bonusCalculator(worker));
  afterraise.bonusPercentage = Number(newBonuspercentage),
  afterraise.totalBonus = Math.floor(worker.annualSalary*newBonuspercentage),
  afterraise.totalCompensaction = Number(worker.annualSalary)+Number(worker.annualSalary*newBonuspercentage)
  console.log(afterraise);
}

function bonusCalculator (worker) {
  let changedPercentage = 0;
  console.log('in employeeCalculator');
  
  if(worker.reviewRating<=2){
    changedPercentage = 0;
  }
  else if(worker.reviewRating===3){
    changedPercentage = 4;
  }
  else if(worker.reviewRating===4){
    changedPercentage = 6;
  }
  else if(worker.reviewRating===5){
    changedPercentage = 10;
  }
  if (worker.employeeNumber.toString().length=== 4 ){
    changedPercentage += 5;
  }
  if (worker.annualSalary > 65000){
    changedPercentage -= 1;
  }
  if (changedPercentage > 13){
    changedPercentage = 13;
  }
  if (changedPercentage < 0){
    changedPercentage = 0;
  }

  return changedPercentage/100;
}
// Functions!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

//Testing########################################################################
for(i=0; i<employees.length; i++){
  employeeBonus(employees[i]);
}

//Testing########################################################################

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

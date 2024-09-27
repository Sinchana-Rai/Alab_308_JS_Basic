const distance = 1500;
const fuelBudget = 175;
const fuelCostPerGallon = 3;

// At 55 miles per hour, you get 30 miles per gallon.
// How many gallons of fuel will you need for the entire trip?
// Will your budget be enough to cover the fuel expense?
// How long will the trip take, in hours?


const results55GallonsNeeded = distance / 30;
const results55FuelCost = results55GallonsNeeded * fuelCostPerGallon;
const results55TravelTime =  distance / 55;
const results55IsBudgetEnough =  results55FuelCost <= fuelBudget;


console.log(`at 55 mph:
   - gallons Needed: ${results55GallonsNeeded}
   - fuel Cost: ${results55FuelCost}
   -Travel time: ${results55TravelTime}
   -Budget enough: ${results55IsBudgetEnough}`);


   /********************************************************* */
//    At 60 miles per hour, you get 28 miles per gallon

// How many gallons of fuel will you need for the entire trip?
// Will your budget be enough to cover the fuel expense?
// How long will the trip take, in hours?

const results60GallonsNeeded = distance / 28;
const results60FuelCost = results60GallonsNeeded * fuelCostPerGallon;
const results60TravelTime =  distance / 60;
const results60IsBudgetEnough =  results60FuelCost <= fuelBudget;


console.log(`at 60 mph:
   - gallons Needed: ${results60GallonsNeeded}
   - fuel Cost: ${results60FuelCost}
   -Travel time: ${results60TravelTime}
   -Budget enough: ${results60IsBudgetEnough}`);


      /********************************************************* */
//    At 75 miles per hour, you get 23 miles per gallon.

// How many gallons of fuel will you need for the entire trip?
// Will your budget be enough to cover the fuel expense?
// How long will the trip take, in hours?

const results75GallonsNeeded = distance / 23;
const results75FuelCost = results75GallonsNeeded * fuelCostPerGallon;
const results75TravelTime =  distance / 75;
const results75IsBudgetEnough =  results75FuelCost <= fuelBudget;


console.log(`at 75 mph:
   - gallons Needed: ${results75GallonsNeeded}
   - fuel Cost: ${results75FuelCost}
   -Travel time: ${results75TravelTime}
   -Budget enough: ${results75IsBudgetEnough}`);

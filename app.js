console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// 1. Declare a function named `printOdds` using declaration notation (`function <name>(){...}`)
// 2. The function should take in one parameter named `count`
// 3. The function body should:
//    - contain a `for loop` that counts to the parameter passed in,
//    - an `if/else` statement that determines if the current value is odd,
//    - and then `console.log()` the odd value to the console
// 4. BONUS: Now that you do not know exactly what number may be passed in as `count`, use an `if` statement to account for a negative `count` being passed in.

function printOdds(count)
{
    if (count < 0)
    {
        count = Math.abs(count);
    }

    for (i = 1; i <= count; i++)
    {
        if (i % 2 != 0)
        {
            console.log(i);
        }
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

// 1. Declare a function named `checkAge` using declaration notation (`function <name>(){...}`)
// 2. The function should take in two-parameters named userName & age
// 3. The function body should:
//    - declare and initialize an aboveSixteen local variable with string value: "Congrats ${userName}, you can drive!",
//    - declare and initialize an belowSixteen local variable with string value: "Sorry ${userName}, but you need to wait until you're 16.",
//    - an `if/else` statement that determines if the `age` value is below 16,
//    - and then `console.log()` the correct message to the console.
// 4. BONUS: Remember that paramaters are optional, and no `name` or `age` value could be passed in. Correctly account for no parameter being passed in.

function checkAge(userName, age)
{
    if (userName === undefined || age === undefined) 
    {
        console.log("Both userName and age must be provided.");
        return;
    }

    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16`;

    if (age < 16)
    {
        console.log(belowSixteen);
    }

    else
    {
        console.log(aboveSixteen)
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

// Write a function that receives two parameters, x and y coordinates in
// the Cartesian plane, and prints out a message indicating if the point (x, y) lies on either the x or y axis,
//  or what quadrant the point lies in.

//  For example:

//  - (0, 2) is on the x axis
//  - (1, 2) is in Quadrant 1
//  - (-6, 18) is in Quadrant 2

function whatQuadrant(x, y)
{
    if (x == 0 && y != 0)
    {
        console.log(`${x},${y} is on the Y axis`);        
    }

    else if (x != 0 && y == 0)
    {
        console.log(`${x},${y} is on the X axis`);
    }

    else if (x > 0 && y > 0)
    {
        console.log('QUadrant 1');
    }

    else if (x > 0 && y < 0)
    {
        console.log(`Quadrant 4`);
    }

    else if (X < 0 && y < 0)
    {
        console.log(`Quadrant 3`);
    }

    else if (x < 0 && y > 0)
    {
        console.log(`Quadrant 2`);
    }

    else if (x == 0 && y == 0)
    {
        console.log('No axis or quadrant')
    }
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

// Write a function that receives three numbers that represent the lengths of a triangles three sides. If the three
// sides do not form a valid triangle (the sum of two sides should always be greater than the length of the third side),
//  you should return a message indicating an invalid triangle. Otherwise, return a string indicating the type of triangle
// the three sides make (equilateral: all side lengths equal, isosceles: only two side lengths equal, or scalene: all different side lengths).

function isATriangle(a, b, c)
{
    if ((a + b) > c || (a + c) > b || (b + c) > a)
    {
        if (a == b && a == c)
        {
            console.log(`Valid triangle, equilateral`);
        }

        if (a == b || a == c || b == c)
        {
            console.log(`Valid triangle, isosceles`);
        }

        if (a != b && a !=c && b != c)
        {
            console.log(`Valid triangle, scalene`);
        }
    }

    else
    {
        console.log(`Not a valid triangle`);
    }
            
}


// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

// Write a function that will display feedback on cell phone data usage. Cell phone
// plans for this particular company give you a certain amount of data every 30 days
// which must be used or they are lost (no rollover). We want to track the average amount of data
//  used per day and inform the user if they are using too much data or can
// afford to use more.

// Write a function that accepts the following parameters:

// - `planLimit`: amount of data in the plan per 30 day period
// - `day`: the current day in the 30 day period
// - `usage`: the total amount of data used so far

// The function should compute whether the user is over, under, or right on the average
// daily usage under the plan. It should also inform them of how much data is left
// and how much, on average, they can use per day for the rest of the month. If
// they’ve run out of data, it should inform them of that too.

function cellPlan(planLimit, day, usage)
{
    if (usage >= planLimit)
    {
        if (usage > planLimit)
        {
            console.log(`You are over your limit.`);
        }

        else
        {
            console.log(`You have reached your limit.`);
        }
    }

    else
    {
        let dataLeft = planLimit - usage;

        let dataAverage = dataLeft / (30 - day);

        if (dataAverage == day / usage)
        {
            console.log(`You are on track to continue using ${dataAverage} per day`)
        }

        else
        {
            console.log(`You need to use ${dataAverage} per day to be on track for the rest of the month`)
        }
    }

}
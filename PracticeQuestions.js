////////////////////////////////////////////////////////////
//// JAVASCRIPT JS BASICS
////////////////////////////////////////////////////////////

const x = 6;

// 1. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.

function sum(a, b) {
  return a + b + x;
}

console.log("1.", sum(5, 8));

// 2. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.

const sumArrow = (a, b) => {
  return a + b + x;
};

console.log("2.", sumArrow(10, 5));

// 3. Write a function that returns another function. (use arrow functions please)

const funcReturn = () => {
  return (sum = (a, b) => a + b);
};

console.log("3.", funcReturn()(10, 5));

// 4. Given the following code explain why the function that returns from getFunction still has access to variable "y" even when "y" is not a global variable.

const getFunction = () => {
  const y = 5;

  const insideFunc = (a) => y + a;

  return insideFunc;
};

console.log(getFunction()(2));

/* Javascript closure allows an inner function to have access to its outer function's scope */

// 5. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and and log the result to the console.
// Make sure to handle errors that could be thrown by "couldThrowError()"
// If there is an error log "sorry, there was an error" to the console.

const couldThrowError = () => {
  if (Math.ceil(Math.random() * 2) < 2) {
    throw new Error("Error was thrown");
  }

  return "success";
};

const displayResult = () => {
  try {
    const result = couldThrowError();
    console.log(result);
  } catch {
    console.log("sorry, there was an error");
  }
};

displayResult();

////////////////////////////////////////////////////////////
//// Handling data:
////////////////////////////////////////////////////////////

const userData = [
  {
    id: "111",
    name: "Peter",
    favorites: {
      food: ["burgers", "pizza"],
      activites: ["basketball", "baseball"],
    },
  },
  {
    id: "222",
    name: "John",
    favorites: {
      food: ["burgers", "tacos"],
      activites: ["football", "golf"],
    },
  },
  {
    id: "333",
    name: "Mary",
    favorites: {
      food: ["pizza", "tacos", "fried chicken"],
      activites: ["volleyball", "softball"],
    },
  },
];

// 5. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

const mapped = userData.map((user) => {
  const id = user.id;
  const favoriteFoods = user.favorites.food.length;
  return { id, favoriteFoods };
});

console.log("5.", mapped);

// 6. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']

const pizzaLovers = userData.reduce((arr, curr) => {
  if (curr.favorites.food.includes("pizza")) {
    arr.push(curr.name);
  }
  return arr;
}, []);

console.log("6.", pizzaLovers);

// 7. Show an an example of a switch statement being used

const id = "555";
switch (id) {
  case "111":
    console.log("This is Peter.");
    break;
  case "222":
    console.log("This is John.");
    break;
  case "333":
    console.log("This is Mary.");
    break;
  default:
    console.log(`ID ${id} not found.`);
}

////////////////////////////////////////////////////////////
//// OBJECT AND ARRAY DESTRUCTURING
////////////////////////////////////////////////////////////

const userPersonalData = {
  name: "peter",
  age: "56",
  birthday: "jan 1st",
};
const userGameData = {
  score: 4546,
  accomplishments: [
    "won award for being good gamer",
    "won 1st win",
    "got good score on the weekend",
  ],
};

// 8. Combine the personalData and userGameData into a user object that is equal to the object below, by using the spread operator:
// const user = {
//  name: 'peter',
//  age: '56',
//  birthday: 'jan 1st',
//  score: 4546,
//  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
// }

const userObj = { ...userPersonalData, ...userGameData };
console.log("8.", userObj);

// 9. Make a copy of your new user object but override the birthday to december 31st

const userBday = { ...userObj, birthday: "december 31st" };
console.log("9.", userBday);

// 10. Use the spread operator to make a copy of the accomplishments array and store it in a new variable

const accomplishments = [...userGameData.accomplishments];
console.log("10.", accomplishments);

//  11.Given the object bellow, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
//  and store it in a variable name food

var user = {
  name: "pete",
  age: "32",
  favoriteThings: {
    food: ["pizza", "tacos", "burgers", "italian"],
    movies: [],
  },
};

const { food } = user.favoriteThings;
console.log("11.", food);

// 12. Once you have grabbed the favorite foods. Destructure the food array to grab only the first 2 values. //

const [first, second] = food;
console.log("12.", [first, second]);

// 13. use object destructuring and the rest operator to transform the following array into 3 variables: name, age, and food.
//    the food variable should have all the array items starting from the third one.
const data = ["peter", "34", "apple", "oranges", "pizza", "tacos"];

const [name, age, ...foodArr] = data;
console.log("13.", name, age, foodArr);

// 14. use object destructuring to grab the following from the userInfo object:
// - The user's name and in a constant named userName.
// - The user's favorite food array and name it favoriteFood.
// - The users first favorite thing (cars) and name it favoriteThing
// - The users second favorite thing (jewelry) and name it secondfavoriteThing

const userInfo = {
  name: "Peter",
  favorites: {
    needs: {
      food: ["burger", "pizza", "tacos", "fried chicken", "sushi"],
    },
    wants: {
      things: ["cars", "jewelry"],
    },
  },
};

const {
  name: userName,
  favorites: {
    needs: { food: favoriteFood },
    wants: {
      things: [favoriteThing, secondFavoriteThing],
    },
  },
} = userInfo;

console.log("14.", userName, favoriteFood, favoriteThing, secondFavoriteThing);

var fetchData = () =>
  new Promise((resolve, reject) => {
    console.log("fetchingData from imaginary database");
    setTimeout(() => {
      try {
        // fetchingData from imaginary database
        if (Math.ceil(Math.random() * 2) < 2) {
          throw new Error("Error!");
        }
        resolve({ name: "john", age: 42 });
      } catch (error) {
        reject(error);
      }
    }, 5000);
  });

module.exports = fetchData;

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promises:
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function that returns a promise.
var fetchData = () =>
  new Promise((resolve, reject) => {
    console.log("fetchingData from imaginary database");
    setTimeout(() => {
      try {
        // fetchingData from imaginary database
        if (Math.ceil(Math.random() * 2) < 2) {
          throw new Error("Error!");
        }
        resolve({ name: "john", age: 42 });
      } catch (error) {
        reject(error);
      }
    }, 5000);
  });

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 15. Call fetchData (which returns a promise) and use the .then()  method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

fetchData().then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error.message);
  }
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 16. Call fetchData (which returns a promise) and use the async/await method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const logValue = async () => {
  try {
    const value = await fetchData();
    console.log(value);
  } catch (error) {
    console.log(error.message);
  }
};
logValue();

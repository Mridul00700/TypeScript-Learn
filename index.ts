console.log("Hi!");

let firstName = "Max";

let count: number = 10;

//  Tuple ::

type StringAndNumber = [string, number];

let x: StringAndNumber = ["Hello", 5];

// Enumns ::

enum Continents {
  NorthAmerica, //= 0
  SouthAmerica, //=1
  Asia, //=2
  Europe, //....
  Africa,
  Australia,
  Antartica,
}

let region = Continents.Asia;

// Interface

interface User {
  name: string;
  id: number;
}

const user: User = {
  name: "Max",
  id: 0,
};

// Composing Types :: Union

type WindowState = "open" | "Closed" | "minimised";
let state: WindowState = "open";
type oddNumber = 1 | 3 | 5 | 7 | 9;
let odd: oddNumber = 5;

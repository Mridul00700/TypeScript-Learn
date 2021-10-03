console.log("Hi!");
var firstName = "Max";
var count = 10;
var x = ["Hello", 5];
// Enumns ::
var Continents;
(function (Continents) {
    Continents[Continents["NorthAmerica"] = 0] = "NorthAmerica";
    Continents[Continents["SouthAmerica"] = 1] = "SouthAmerica";
    Continents[Continents["Asia"] = 2] = "Asia";
    Continents[Continents["Europe"] = 3] = "Europe";
    Continents[Continents["Africa"] = 4] = "Africa";
    Continents[Continents["Australia"] = 5] = "Australia";
    Continents[Continents["Antartica"] = 6] = "Antartica";
})(Continents || (Continents = {}));
var region = Continents.Asia;

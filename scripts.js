// /**************************
//
// Cookie Clicker
//
// ****************************\
let cookieCount = 0;
let clickPower = 1;
let clickPowerPriceAmount = 50;
let clickPowerLevelNumber = 1;

let buyClickPower = document.getElementById('buy-click-power');
let clickPowerPrice = document.getElementById('click-power-price');
let clickPowerLevel = document.getElementById('click-power-level');
let clickPowerMultiple = document.getElementById('click-power-multiple');


let cookieCounter = document.getElementById('cookie-counter');
let cookieClicker = document.getElementById('cookie-clicker');
cookieCounter.innerHTML = cookieCount;

cookieClicker.addEventListener("click", function(){
    cookieCount = cookieCount + clickPower;
    cookieCounter.innerHTML = cookieCount;

})

let refreshCookieCount = function () {
    cookieCounter.innerHTML = cookieCount;
}

let refreshPowerClick = function () {
    clickPowerLevel.innerHTML = clickPowerLevelNumber;
    clickPowerPrice.innerHTML = clickPowerPrice;
}

let refreshClickPowerMultiple = function () {
    clickPowerMultiple.innerHTML = clickPower;
}
// Buy click Power
buyClickPower.addEventListener("click", function(){
    if (cookieCount >= clickPowerPriceAmount){
        cookieCount -= clickPowerPriceAmount;


        clickPowerLevelNumber += 1;
        clickPower = (clickPowerLevelNumber-1) * 50;
        clickPowerPrice = Math.floor(clickPowerPrice * 1.33)

        refreshCookieCount();
        refreshPowerClick();
        refreshClickPowerMultiple();

        // cookieCounter.innerHTML = cookieCount;
        console.log("Buy dem cookies");
    } else {
        console.log("Need more of dem cookies");
    }
})

/********************************

          Grandmas

********************************/

//set default variables
let grandmaPower = 50;
let grandmaPriceAmount = 500;
let grandmaLevelNumber = 0;
let grandmaAuto = false;

//declare DOM variables
let buyGrandma = document.getElementById('buy-grandma');
let grandmaPrice = document.getElementById('grandma-price');
let grandmaLevel = document.getElementById('grandma-level');
let grandmaMultiple = document.getElementById('grandma-multiple')

let autoGrandmaStart = function () {
    let grandmaInt = window.setInterval(function(){
        cookieCount += grandmaPower;
        refreshCookieCount();
    }, 1000);
}



//buy a grandma
buyGrandma.addEventListener("click", function() {
    if (cookieCount >= grandmaPriceAmount){
        cookieCount -= grandmaPriceAmount;
        refreshCookieCount();

        grandmaLevelNumber += 1;

        //update price
        grandmaPriceAmount = Math.floor(grandmaPriceAmount * 1.33);

        //update grandma power
        grandmaPower += 10;

        //turn grandma on
        autoGrandma = true;
        autoGrandmaStart();

        //refresh shop item
        refreshGrandma();


        // cookieCounter.innerHTML = cookieCount;
        console.log("Hire dem grandmas");
    } else {
        console.log("Need more of dem cookies");
    }

})

let refreshGrandma = function() {
  grandmaLevel.innerHTML = grandmaLevelNumber
  grandmaPrice.innerHTML = grandmaPriceAmount;
  grandmaMultiple.innerHTML = grandmaPower;
  grandmaMultiple.innerHTML = grandmaPower - 10;
}

/*****************
    Facilities
******************/
// set default values
let facilityAuto = false;
let facilityPower = 2000;
let facilityPriceAmount = 10000;
let facilityLevelNumber = 0;

//declare DOM variables
let buyFacility = document.getElementById('buy-facility');
let facilityPrice = document.getElementById('facility-price');
let facilityLevel = document.getElementById('facility-level');
let facilityMultiple = document.getElementById('facility-mulitple');
//Buy a facility
buyFacility.addEventListener("click", function () {
    console.log("we clicked it");
    //set autoloop to false
    facilityAuto = false;
    //make sure we have enough Cookies
if (cookieCount >= facilityPriceAmount) {
    cookieCount -= facilityPriceAmount;
    refreshCookieCount();

    //upgrade power Level
facilityLevelNumber += 1;
    //update price
facilityPriceAmount = Math.floor(facilityPriceAmount * 1.33);
    //update facility Power
facilityPower += 600 + Math.floor(facilityLevelNumber * 1.33);
    //turn autoFacility on!
facilityAuto = true;
autoFacilityStart();
    // refresh shop item
refreshFacility();
}
})
//game loop
let autoFacilityStart = function() {
    let facilityInt = window.setInterval(function () {
        cookieCount += facilityPower;
        refreshCookieCount();
    }, 1000);
}
//refresh shop
let refreshFacility = function (){
    facilityLevel.innerHTML = facilityLevelNumber;
    facilityPrice.innerHTML = facilityPriceAmount;
    facilityMultiple.innerHTML = facilityPower - 600;
}

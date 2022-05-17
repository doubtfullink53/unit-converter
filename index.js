
let supportingTextConversionMetersToFeet = document.getElementById("supporting-text-conversion-fahrenheit-celcius")

let supportingTextConversionLitersToGallons = document.getElementById("supporting-text-conversion-liters-gallons")

let supportingTextConversionMetersToPounds = document.getElementById("supporting-text-conversion-kilo-pounds")

var number;


function submit(){
 number =   document.getElementById("quantity").value
 //console.log(number)

    meterFeet(number);
    literGallon(number);
    kiloPounds(number);
 
}

function meterFeet(){
    let meter = number;
    let feet = number; 

   let  meterToFeet = (meter * 3.28084).toFixed(3);
   let feetToMeter = (feet / 3.28084).toFixed(3)

   supportingTextConversionMetersToFeet.textContent = meter + " meters" + " = " + meterToFeet + " feet" + " |" + feet  + " feet" + " = " + feetToMeter + " meters";
    // console.log(meterToFeet)
}


function literGallon(){
    let gallons = number;
    let liters = number;
    let gallonsToLiter = (gallons *  4.546).toFixed(3);
    let litersToGallon = (liters / 3.78541).toFixed(3);
    supportingTextConversionLitersToGallons.textContent = liters + " liters" + " = " + litersToGallon + " gallons" + " | " + gallons +  " gallons" + " = " + gallonsToLiter + " liters"

}

function kiloPounds(){
    console.log('test')
    let kilo = number;
    let pounds = number;
     let kiloToPounds = (kilo *  2.20462).toFixed(3);
     let poundsToKilo = (pounds / 2.205).toFixed(3);
    supportingTextConversionMetersToPounds.textContent = kilo + " kilos " + " = " + kiloToPounds + " pounds" +  " | " + pounds + " pounds " + " = " + poundsToKilo + " kilos"

}
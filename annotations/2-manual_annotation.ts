//***** ANY TYPE *****/

//Functions that returns "any" type. Here newLoc returns any

const place = '{"lat": 45, "lon": -70}'
const newLoc = JSON.parse(place)

//It should look like

const truePlace = '{"lat": 45, "lon": -70}'
const trueLoc: {lat: number; long: number} = JSON.parse(truePlace)


//***** VARIABLE INITIALIZED IN A DIFFERENT LINE *****//

let day: number;
day = 3

//***** TYPE CAN'T BE INFERRED || TWO TYPES OR MORE *****//
let temperatures = [8, 5, -2]
let subzero: boolean | number = false;

for (let i = 0; i < temperatures.length; i++){
    if (temperatures[i] < 0){
        subzero = temperatures[i]
    }
}
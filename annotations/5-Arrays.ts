//Typed arrays have ALL their elements of the same type.

const favorites: string[] = [] //Only strings
const favorites2: string[][] = [["String"]] //String nested

const test: (number | string[])[] = [["Uno"], 2] //Only those two

//Typescript can inference from the array, avoiding mistakes.

const office = favorites[1] // It knows it's an string.

//You can specify the order/type of the contents

const track: [string, boolean, number] = ["rock", false, 120]

type Track = [string, boolean, number]
const track1: Track = ["rock", true, 80] //Assigned directly
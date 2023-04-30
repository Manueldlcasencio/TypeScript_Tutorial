
const earthquake = {
    date: new Date(),
    velocity: 4.5
}

//When calling and object parameters, you can resume like this

const logVelocity = ({date, velocity}: {date:Date; velocity: number}): void => {
    console.log(date, velocity)
}

logVelocity(earthquake)

//Check this way of using functions inside the object, and annotations

const client = {
    id: "12345",
    ages: 24,
    BMI: 1.5,
    condition: {
        mass: 80,
        height: 185
    },
    setBMI(mass: number, height: number): void {
        this.BMI = mass / (height * height)
    }
}

const { id, ages }: { id: string; ages: number } = client
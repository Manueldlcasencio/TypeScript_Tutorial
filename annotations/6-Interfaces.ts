//Interface are written with a capital letter. It's a summary of types.
//It may have a generic name, instead of a variable, that has a
//specific name.

interface Movie {
    title: string;
    date: Date;
    rating: Number;
    genre: string[];
}

const currentMovie = {
    title: "dune",
    date: new Date(2021, 9, 24),
    rating: 8.2,
    genre: ["action", "adventure"]
}

const logMovie = (movie: Movie): void => { //Just Movie works.
    console.log(`Title: ${movie.title}`)
}

//Type forces to comply with everything (it's its type), but interface
//just check if it has whatever you asked, not everything.

interface Detail {
    title: string;
}

const log2 = (movie: Detail): void => {
    console.log(`Title: ${movie.title}`) //No errors. Movie has a title.
}
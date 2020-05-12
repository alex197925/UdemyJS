"use strict";
// Massiv Dannix,obiekti.Voproci :'kakoy?','kak?'.

// const answer = [];

// answer[0] = prompt('kak tebya zovut?', '');
// answer[0] = prompt('kak tvoya familiya?', '');
// answer[0] = prompt('ckolko tebe let?', '');

// console.log(typeof (answer));


// const user = ('Alex');
// alert(`privet, ${ user }`);


const namberOfMovies = +prompt('How many movies did you see?', '');

const personalMovieDB = {
	count: namberOfMovies,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt('Whitch last movie you saw?', ''),
	b = prompt('How good was movie?', ''),
	c = prompt('Whitch last movie you saw?', ''),
	d = prompt('How good was movie', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
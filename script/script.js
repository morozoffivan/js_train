/* Задание на урок 1:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */


/* Задание на урок 2:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/


// Код возьмите из предыдущего домашнего задания

'use strict';

let questionAboutCountsOfFilms;

function start() {
    questionAboutCountsOfFilms = +prompt('Сколько фильмов вы уже посмотрели? ');

    while (questionAboutCountsOfFilms == '' || questionAboutCountsOfFilms == null ||
        isNaN(questionAboutCountsOfFilms)) {
        questionAboutCountsOfFilms = +prompt('Сколько фильмов вы уже посмотрели? ');
    }
}

start();


const personalMovieDB = {
    count: questionAboutCountsOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {

        const questionAboutLastFilm = prompt('Один из последних просмотренных фильмов? ');
        const questionAboutMarkOfLastFilm = +prompt('На сколько оцените его? ');
        const lengthQuestionAboutLastFilm = questionAboutLastFilm.length;
    
        if (questionAboutLastFilm != '' && questionAboutMarkOfLastFilm != '' &&
            questionAboutLastFilm != null && questionAboutMarkOfLastFilm != null &&
            lengthQuestionAboutLastFilm < 50) {
            personalMovieDB.movies[questionAboutLastFilm] = questionAboutMarkOfLastFilm;
        } else {
            i--;
        };
    
    }

};

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов')
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель')
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман')
    } else {
        console.log('Произошла ошибка')
    };
};

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();
// console.log(personalMovieDB);
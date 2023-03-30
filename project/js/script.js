/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против пиратов"
        ]
    };

    const ad = document.querySelector('.promo__adv');
    const genre = document.querySelector('.promo__genre');
    const bg = document.querySelector('.promo__bg');
    const list = document.querySelector('.promo__interactive-list');
    const textInput = document.querySelector('.adding__input');
    const submit = document.querySelector('form > button');
    const checkBox = document.querySelector('form > [type="checkbox"]');
    const addForm = document.querySelector('.add');
    const deleteEl = document.querySelector('.delete');




    submit.addEventListener('click', (e) => {
        e.preventDefault();

        SubmitPress();
        addForm.reset();
    });

    MovieUpdate(movieDB.movies, list);

    function MovieUpdate(films, parent) {
        parent.innerHTML = "";

        films.sort();

        films.forEach((film, i) => {
            if (film.length > 21) {
                film = `${film.substring(0,22)}...`;

                parent.innerHTML += `<li class="promo__interactive-item">${i+1}. ${film}
                            <div class="delete"></div>
                        </li>`;
            } else {
                parent.innerHTML += `<li class="promo__interactive-item">${i+1}. ${film}
                            <div class="delete"></div>
                        </li>`;
            }
        });

        // deleteEl.forEach((btn, i) => {
        //     btn.addEventListener('click', () => {
        //         btn.parentElement.remove();
        //         films.splice(i, 1);
        //     });
        // });
    }

    function SubmitPress() {
        const newFilm = textInput.value;
        const favorite = checkBox.checked;


        if (newFilm) {

            movieDB.movies.push(newFilm);
            MovieUpdate(movieDB.movies, list);
        }

        if (favorite) {
            console.log('Сделать любимым');
        }

    }

    const deleteAdv = (array) => array.remove();
    deleteAdv(ad);

    genre.textContent = "драма";

    bg.style.backgroundImage = 'url("img/bg.jpg")';


});
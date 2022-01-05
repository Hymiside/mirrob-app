<template>
    <Header />
    <div class="filter">
        <div class="container">
            <div class="filter__body">
                <p class="filter__head">ПРИМЕРЫ СОБЕСЕДОВАНИЙ И ТЕСТОВЫХ ЗАДАНИЙ В IT КОМПАНИИ</p>
                <div class="filter__buttons">
                    <button>Все</button>
                    <button>Бэкенд</button>
                    <button>Фронтенд</button>
                    <button>Аналитика</button>
                    <button>Тестирование</button>
                    <button>UX/UI дизайн</button>
                    <button>Геймдев</button>
                    <button>Геймдизайн</button>
                    <button>Управление проектами и продуктами</button>
                </div>
            </div>
        </div>
    </div>
    <div class="content">
        <div class="container">
            <div class="content__body">
                <div class="content__examples">

                    <div class="content__example">
                        <div class="content__example__head">
                            <img class="content__example__head__picture" :src="yandex" alt="yandex">
                            <p class="content__example__head__company">Яндекс</p>
                        </div>
                        <p class="content__example__title">Собеседование разработчика на Python в Формы</p>
                        <p class="content__example__description">
                            Команда разрабатывает Яндекс.Формы. Опросы в Дзене, формы обратной связи, регистрация
                            на мероприятия Яндекса и партнеров — всё это и многое другое работает на движке Форм. Также
                            Формы необходимы для бизнес-процессов самого Яндекса.
                        </p>
                        <div class="content__example__footer">
                            <p class="content__example__date">Nov 17, 2021</p>
                            <div class="content__example__circle"></div>
                            <p class="content__example__filter">Бэкенд</p>
                            <div class="content__example__circle"></div>
                            <img :src="favorite" alt="favorite" class="content__example__favorite">
                        </div>
                    </div>

                    <div class="content__example">
                        <div class="content__example__head">
                            <img class="content__example__head__picture" :src="yandex" alt="yandex">
                            <p class="content__example__head__company">Яндекс</p>
                        </div>
                        <p class="content__example__title">Собеседование разработчика на Python в Формы</p>
                        <p class="content__example__description">
                            Команда разрабатывает Яндекс.Формы. Опросы в Дзене, формы обратной связи, регистрация
                            на мероприятия Яндекса и партнеров — всё это и многое другое работает на движке Форм. Также
                            Формы необходимы для бизнес-процессов самого Яндекса.
                        </p>
                        <div class="content__example__footer">
                            <p class="content__example__date">Nov 17, 2021</p>
                            <div class="content__example__circle"></div>
                            <p class="content__example__filter">Бэкенд</p>
                            <div class="content__example__circle"></div>
                            <img :src="favorite" alt="favorite" class="content__example__favorite">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import yandex from '../assets/img/yandex.svg';
import favorite from '../assets/img/favorite.svg';

export default {
    name: 'Examples',
    components: {
        Header,
        Footer
    },
    data() {
        return {
            yandex,
            favorite
        }
    }
}
</script>

<style scoped>
*,*:before, *:after {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
}
button {
    color: black;
}
.container {
    max-width: 1200px;
    margin: 0 auto;
}


.filter { margin: 265px 0 0 0; }
.filter__head {
    font-size: 25px;
    font-weight: bold;
    text-align: center;
}
.filter__buttons {
    margin: 70px 0 0 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.filter__buttons button {
    background: none;
    border: 1px solid black;
    border-radius: 3px;
    padding: 10px 17px;
    font-size: 20px;
    font-weight: normal;
    margin: 20px 35px 0 0;
}
@media (max-width: 768px) {
    .filter { margin: 155px 0 0 0; }
    .filter__head {
        font-size: 17px;
        text-align: left;
    }
    .filter__buttons {
        margin: 30px 0 0 0;
        justify-content: left;
    }
    .filter__buttons button {
        padding: 8px 10px;
        font-size: 15px;
        margin: 20px 25px 0 0;
    }
}



.content__examples { margin: 140px 0 0 0; }
.content__example {margin: 80px 0 0 0;}
.content__example__head {
    display: flex;
    align-items: center;
}
.content__example__head__picture { width: 50px; height: 50px; }
.content__example__head__company{
    font-size: 23px;
    font-weight: 500;
    margin: 0 0 0 20px;
}
.content__example__title {
    font-weight: 500;
    font-size: 28px;
    margin: 25px 0 0 0;
}
.content__example__description {
    font-size: 21px;
    color: #757579;
    margin: 8px 0 0 0;
}
.content__example__footer { margin: 20px 0 0 0; display: flex; align-items: center; }
.content__example__date {
    font-size: 17px;
    color: #757579;
}
.content__example__circle {
    border-radius: 50%;
    background: #757579;
    width: 3px;
    height: 3px;
    margin: 0 0 0 15px;
}
.content__example__filter {
    font-size: 17px;
    color: #757579;
    background: #F2F2F2;
    padding: 7px 15px;
    border-radius: 25px;
    margin: 0 0 0 15px;
}
.content__example__favorite{ margin: 0 0 0 15px;}

@media (max-width: 768px) {
    .content__examples { margin: 60px 0 0 0; }
    .content__example {margin: 40px 0 0 0;}
    .content__example__head__picture { width: 40px; height: 40px; }
    .content__example__head__company{
        font-size: 18px;
        margin: 0 0 0 15px;
    }
    .content__example__title {
        font-size: 21px;
        margin: 15px 0 0 0;
    }
    .content__example__description {
        font-size: 16px;
    }
    .content__example__footer { margin: 18px 0 0 0; }
    .content__example__date, .content__example__filter { font-size: 15px; }
}
</style>

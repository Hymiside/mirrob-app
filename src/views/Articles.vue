<template>
    <Header />
    <div class="title">
        <div class="container">
            <div class="title__body">
                <p class="title__content">СТАТЬИ АВТОРИТЕТНЫХ И НЕПОДКУПНЫХ АЙТИШНИКОВ</p>
            </div>
        </div>
    </div>

    <Filter />

    <div class="content">
        <div class="container">
            <div class="content__body">

                <div class="content__create__article">
                    <a href="#" class="content__create__article__button"
                            @click="$router.push({ name: 'Create' })"
                    >Написать статью</a>
                </div>

                <div class="content__articles">

                    <div class="content__article">
                        <div class="content__article__head">
                            <img class="content__article__head__picture" :src="avatar" alt="yandex">
                            <p class="content__article__head__company">Григорий Бакунов</p>
                        </div>
                        <p class="content__article__title">Собеседование разработчика на Python в Формы</p>
                        <p class="content__article__description">
                            Команда разрабатывает Яндекс.Формы. Опросы в Дзене, формы обратной связи, регистрация
                            на мероприятия Яндекса и партнеров — всё это и многое другое работает на движке Форм. Также
                            Формы необходимы для бизнес-процессов самого Яндекса.
                        </p>
                        <div class="content__article__footer">
                            <p class="content__article__date">Nov 17, 2021</p>
                            <div class="content__article__circle"></div>
                            <p class="content__article__filter">Бэкенд</p>
                            <div class="content__article__circle"></div>
                            <img :src="like" alt="favorite" class="content__article__like">
                            <div class="content__article__circle"></div>
                            <img :src="favorite" alt="favorite" class="content__article__favorite">
                        </div>
                    </div>

                    <div class="content__article">
                        <div class="content__article__head">
                            <img class="content__article__head__picture" :src="avatar" alt="yandex">
                            <p class="content__article__head__company">Григорий Бакунов</p>
                        </div>
                        <p class="content__article__title">Собеседование разработчика на Python в Формы</p>
                        <p class="content__article__description">
                            Команда разрабатывает Яндекс.Формы. Опросы в Дзене, формы обратной связи, регистрация
                            на мероприятия Яндекса и партнеров — всё это и многое другое работает на движке Форм. Также
                            Формы необходимы для бизнес-процессов самого Яндекса.
                        </p>
                        <div class="content__article__footer">
                            <p class="content__article__date">Nov 17, 2021</p>
                            <div class="content__article__circle"></div>
                            <p class="content__article__filter">Бэкенд</p>
                            <div class="content__article__circle"></div>
                            <img :src="like" alt="favorite" class="content__article__like">
                            <div class="content__article__circle"></div>
                            <img :src="favorite" alt="favorite" class="content__article__favorite">
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
import Filter from "@/components/Filter"

import avatar from '../assets/img/avatar.svg';
import favorite from '../assets/img/favorite.svg';
import like from '../assets/img/like.svg';


export default {
    name: 'Examples',
    components: {
        Header,
        Footer,
        Filter
    },
    data() {
        return {
            avatar,
            favorite,
            like
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


.title {
    margin: 265px 0 0 0;
}
.title__content {
    font-size: 25px;
    font-weight: bold;
    text-align: center;
}


.content__create__article { margin: 125px 0 0 0; }
.content__create__article__button {
    padding: 15px 23px;
    font-size: 20px;
    background: black;
    color: white;
    border: none;
    border-radius: 25px;
    text-decoration: none;
}
.content__articles { margin: 90px 0 0 0; }
.content__article {margin: 80px 0 0 0;}
.content__article__head {
    display: flex;
    align-items: center;
}
.content__article__head__picture { width: 50px; height: 50px; }
.content__article__head__company{
    font-size: 23px;
    font-weight: 500;
    margin: 0 0 0 20px;
}
.content__article__title {
    font-weight: 500;
    font-size: 28px;
    margin: 25px 0 0 0;
}
.content__article__description {
    font-size: 21px;
    color: #757579;
    margin: 8px 0 0 0;
}
.content__article__footer { margin: 20px 0 0 0; display: flex; align-items: center; }
.content__article__date {
    font-size: 17px;
    color: #757579;
}
.content__article__circle {
    border-radius: 50%;
    background: #757579;
    width: 3px;
    height: 3px;
    margin: 0 0 0 15px;
}
.content__article__filter {
    font-size: 17px;
    color: #757579;
    background: #F2F2F2;
    padding: 7px 15px;
    border-radius: 25px;
    margin: 0 0 0 15px;
}
.content__article__favorite,
.content__article__like { margin: 0 0 0 15px;}

@media (max-width: 768px) {
    .title { margin: 155px 0 0 0; }
    .title__content {
        text-align: left;
        font-size: 17px;
    }
    .content__create__article { margin: 60px 0 0 0; }
    .content__create__article__button {
        padding: 12px 18px;
        font-size: 17px;
        background: black;
        color: white;
        border: none;
        border-radius: 25px;
    }
    .content__articles { margin: 50px 0 0 0; }
    .content__article {margin: 40px 0 0 0;}
    .content__article__head__picture { width: 40px; height: 40px; }
    .content__article__head__company{
        font-size: 18px;
        margin: 0 0 0 15px;
    }
    .content__article__title {
        font-size: 21px;
        margin: 15px 0 0 0;
    }
    .content__article__description {
        font-size: 16px;
    }
    .content__article__footer { margin: 18px 0 0 0; }
    .content__article__date, .content__article__filter { font-size: 15px; }
}
</style>

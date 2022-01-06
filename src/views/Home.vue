<template>
    <Header />
    <div class="offer">
        <div class="container">
            <div class="offer__body">

                <div class="offer__text">
                    <p class="offer__text__head">
                        Большая библиотека
                        собеседований в лучшие
                        российские IT компании
                    </p>
                    <p class="offer__text__description">
                        Подготовьтесь к собеседованию и получите
                        оффер в IT компанию своей мечты
                    </p>
                    <button class="offer__button">Начать подготовку</button>
                </div>

                <div class="offer__picture">
                    <img :src="picture" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="content">
        <div class="container">
            <div class="content__body">
                <p class="content__head">ПРИМЕРЫ СОБЕСЕДОВАНИЙ</p>

                <div class="content__articles">

                    <div class="content__article">
                        <div class="content__example__header">
                            <p class="content__example__number">01</p>
                            <img class="content__example__picture" :src="yandex" alt="">
                            <p class="content__example__company">Яндекс</p>
                        </div>
                        <p class="content__article__title">
                            Собеседование разработчика на Go Главной страницы в Поиск
                        </p>
                        <p class="content__example__data">Nov 17, 2021</p>
                    </div>

                    <div class="content__article">
                        <div class="content__example__header">
                            <p class="content__example__number">02</p>
                            <img class="content__example__picture" :src="yandex" alt="">
                            <p class="content__example__company">Яндекс</p>
                        </div>
                        <p class="content__article__title">
                            Собеседование разработчик на Python в Поиск
                        </p>
                        <p class="content__example__data">Nov 17, 2021</p>
                    </div>

                    <div class="content__article">
                        <div class="content__example__header">
                            <p class="content__example__number">03</p>
                            <img class="content__example__picture" :src="yandex" alt="">
                            <p class="content__example__company">Яндекс</p>
                        </div>
                        <p class="content__article__title">
                            Собеседование разработчик на Python в Поиск
                        </p>
                        <p class="content__example__data">Nov 17, 2021</p>
                    </div>

                    <div class="content__article">
                        <div class="content__example__header">
                            <p class="content__example__number">04</p>
                            <img class="content__example__picture" :src="yandex" alt="">
                            <p class="content__example__company">Яндекс</p>
                        </div>
                        <p class="content__article__title">
                            Собеседование разработчик на Python в Поиск
                        </p>
                        <p class="content__example__data">Nov 17, 2021</p>
                    </div>

                </div>
                <div class="content__button__more">
                    <button>Посмотреть больше</button>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

import picture from '../assets/img/picture.svg';
import yandex from '../assets/img/yandex.svg';

export default {
    name: 'Home',
    components: {
        Header,
        Footer
    },
    data() {
        return {
            picture,
            yandex
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


.offer {}
.offer__body {
    padding: 200px 0 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.offer__text__head {
    font-family: Playfair Display, serif;
    font-size: 45px;
    line-height: 53px;
    width: 530px;
}
.offer__text__description {
    font-size: 20px;
    font-weight: lighter;
    margin: 30px 0 0 0;
    width: 410px;
}
.offer__button {
    padding: 13px 25px;
    border-radius: 25px;
    background: none;
    border: 1px solid black;
    font-size: 17px;
    font-weight: normal;
    margin: 50px 0 0 0;
}

@media (max-width: 1024px) {
    .offer__body {
        flex-wrap: wrap;
    }
}
@media (max-width: 768px) {
    .offer__body {
        padding: 130px 0 0 0;
    }
    .offer__picture img {
        width: 355px;
        height: 266px;
    }
    .offer__text__head {
        width: 355px;
        font-size: 30px;
        line-height: 38px;
    }
    .offer__text__description {
        width: 355px;
        font-size: 17px;
        margin: 15px 0 0 0;
    }
    .offer__button {
        margin: 40px 0 0 0;
    }
}



.content {}
.content__body {
    padding: 160px 0 0 0;
}
.content__head {
    font-size: 20px;
    font-weight: bold;
}
.content__articles {
    margin: 40px 0 0 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.content__article {
    margin: 40px 0 0 0;
    width: 355px;
}
.content__example__header {
    display: flex;
    align-items: center;
}
.content__example__number {
    font-size: 45px;
    font-weight: 800;
    color: #e6e6e6;
    margin: 0 25px 0 0;
}
.content__example__company {
    font-size: 18px;
    font-weight: 500;
    margin: 0 0 0 15px;
}
.content__article__title {
    margin: 15px 0 0 78px;
    font-size: 20px;
    font-weight: 500;
}
.content__example__data {
    font-weight: normal;
    font-size: 15px;
    color: #757579;
    margin: 7px 0 0 78px;
}
.content__button__more {
    margin: 60px 0 0 0;
    display: flex;
    justify-content: center;
}
.content__button__more button {
    padding: 13px 25px;
    border: 1px solid black;
    background: none;
    font-size: 17px;
    font-weight: normal;
    border-radius: 25px;
}
@media (max-width: 768px) {
    .content__body { padding: 80px 0 0 0; }
    .content__example__number {
        margin: 0 15px 0 0;
    }
    .content__article__title {
        font-size: 17px;
        margin: 3px 0 0 67px;
    }
    .content__example__data {
        font-size: 13px;
        margin: 5px 0 0 67px;
    }
    .content__articles { margin: 10px 0 0 0; }
    .content__article { margin: 35px 0 0 0; }
}
</style>

<template>
    <header class="header">
        <div class="container">
            <div class="header__body">
                <a href="#" class="header__logo">
                    <img :src="logo" alt="" @click="$router.push({ name: 'Home' })">
                </a>

                <div
                    class="header__burger"
                    v-bind:class="{ active: isActive}"
                    @click="burgerMenu"
                ></div>

                <nav
                    class="header__menu"
                    v-bind:class="{ active: isActive }"
                >
                    <ul class="header__list">
                        <li>
                            <a href="#" class="header__link"
                               @click="$router.push({ name: 'Examples' })"
                            >Подготовка к собеседованию</a>
                        </li>
                        <li>
                            <a href="#" class="header__link"
                               @click="$router.push({ name: 'Articles' })"
                            >Статьи</a>
                        </li>
                        <li>
                            <a href="#" class="header__link">Курсы</a>
                        </li>
                        <li>
                            <a href="#" class="header__link">Вакансии</a>
                        </li>
                        <li>
                            <a href="#" class="header__link header__button"
                               @click="$router.push({ name: 'SignIn' })"
                            >Войти</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
import logo from '../assets/img/mirrob.svg';

export default {
    name: 'App',
    data() {
        return {
            isActive: false,
            logo
        }
    },

    methods: {
        burgerMenu() {
            this.isActive = this.isActive === false;
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
    padding: 0 10px;
}

.header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 50;
    font-family: Roboto, sans-serif;
    border-bottom: 1px solid black;
}
.header:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    z-index: 3;
}
.header__body {
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;
}
.header__logo {
    overflow: hidden;
    position: relative;
    z-index: 3;
}
.header__logo img {
    max-width: 100%;
    display: block;
}


.header__burger { display: none }
.header__menu {}

.header__list {
    display: flex;
    position: relative;
    z-index: 3;
}
.header__list li {
    list-style: none;
    margin: 0 0 0 35px;
}
.header__link {
    color: black;
    font-size: 18px;
    text-decoration: none;
    font-weight: normal;
}
.header__button {
    border-radius: 25px;
    background: black;
    color: white;
    padding: 10px 25px;
}

@media (max-width: 768px) {
    .header__body {
        height: 68px;
    }
    .header__burger {
        display: block;
        position: relative;
        width: 38px;
        height: 20px;
        z-index: 3;
    }
    .header__burger:before, .header__burger:after {
        content: '';
        background-color: black;
        position: absolute;
        width: 100%;
        height: 3px;
        left: 0;
        transition: all 0.3s ease 0s;
    }
    .header__burger:before {
        top: 0;
    }
    .header__burger:after {
        bottom: 0;
    }
    .header__burger.active:before {
        transform: rotate(45deg);
        top: 8px;
    }
    .header__burger.active:after {
        transform: rotate(-45deg);
        bottom: 9px;
    }
    .header__menu {
        position: fixed;
        top: -100%;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: white;
        padding: 110px 10px 20px 10px;
        transition: all 0.3s ease 0s;
    }
    .header__menu.active {
        top: 0;
    }
    .header__list {
        display: block;
    }
    .header__list li {
        margin: 0 0 32px 0;
    }
    .header__link {
        font-size: 20px;
    }
}
</style>

<template>
    <Header />
    <div class="signin">
        <div class="container">
            <div class="signin__body">

                <p class="signin__head">ВОЙДИТЕ, ЧТОБЫ ВОСПОЛЬЗОВАТЬСЯ ВСЕМИ ФУКЦИЯМИ</p>

                <div class="signin__forms__flex">
                    <div class="signin__forms">
                        <div><label><input type="email" class="signin__form__email" placeholder="Введите электронную почту"></label></div>
                        <div><label><input type="password" class="signin__form__password" placeholder="Введите пароль"></label></div>
                    </div>
                </div>
                <div class="signin__footer">
                    <div class="signin__footer__button">
                        <button>Войти</button>
                    </div>

                    <div class="signin__text__already">
                        <p>ЕЩЕ НЕТ АККАУНТА? <a href="#"
                            @click="$router.push({ name: 'SignUp' })"
                        >ЗАРЕГИСТРИРУЙТЕСЬ</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: 'SignUp',
    components: {
        Footer,
        Header
    }
}
</script>

<style scoped>
.container {
    max-width: 1200px;
    margin: 0 auto;
}

.signin { margin: 225px 0 0 0; }
.signin__head {
    font-size: 23px;
    text-align: center;
    font-weight: bold;
    margin: 0;
}
.signin__forms__flex {
    margin: 45px 0 0 0;
    display: flex;
    justify-content: center;
}
.signin__forms input {
    width: 400px;
    height: 64px;
    background: none;
    border: 1px solid black;
    border-radius: 3px;
    font-size: 16px;
    padding: 0 0 0 22px;
    margin: 18px 0 0 0;
    outline: none;
}
.signin__footer { margin: 50px 0 0 0; }
.signin__footer__button,
.signin__text__already {
    display: flex;
    justify-content: center;
}
.signin__footer__button button {
    padding: 18px 35px;
    background: black;
    color: white;
    font-size: 20px;
    border-radius: 30px;
    border: none;
}
.signin__text__already {margin: 28px 0 0 0; }
.signin__text__already p {
    font-size: 18px;
    font-weight: bold;
    margin: 0;
}
.signin__text__already a {
    color: black;
    text-decoration: underline;
}

@media (max-width: 768px) {
    .signin__footer { margin: 35px 0 0 0; }
    .signin__head {
        font-size: 17px;
        margin: 0;
    }
    .signin { margin: 155px 0 0 0; }
    .signin__forms input {
        height: 56px;
        width: 310px;
        margin: 10px 0 0 0;
    }
    .signin__forms__flex {
        margin: 30px 0 0 0;
    }
    .signin__footer__button button {
        padding: 15px 30px;
        font-size: 16px;
    }
    .signin__text__already p {
        font-size: 15px;
        margin: 0;
    }
    .signin__text__already { margin: 20px 0 0 0; }

}
</style>

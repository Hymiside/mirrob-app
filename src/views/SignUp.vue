<template>
    <Header />
    <div class="signup">
        <div class="container">
            <div class="signup__body">

                <p class="signup__head">ЗАРЕГИСТРИРУЙТЕСЬ, ЧТОБЫ ВОСПОЛЬЗОВАТЬСЯ ВСЕМИ ФУКЦИЯМИ</p>

                <div class="signup__forms__flex">
                    <div class="signup__forms">
                        <div><label><input type="text" class="signup__form__first__name" placeholder="Введите имя"></label></div>
                        <div><label><input type="text" class="signup__form__last__name" placeholder="Введите фамилию"></label></div>
                        <div><label><input type="text" class="signup__form__nickname" placeholder="Придумайте никнейм"></label></div>
                        <div><label><input type="email" class="signup__form__email" placeholder="Введите электронную почту"></label></div>
                        <div><label><input type="password" class="signup__form__password" placeholder="Придумайте пароль"></label></div>
                    </div>
                </div>
                <div class="signup__footer">
                    <div class="signup__footer__button">
                        <button>Зарегистрироваться</button>
                    </div>

                    <div class="signup__text__already">
                        <p>УЖЕ ЕСТЬ АККАУНТ? <a href="#"
                            @click="$router.push({ name: 'SignIn' })"
                        >ВОЙДИТЕ</a></p>
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

.signup { margin: 225px 0 0 0; }
.signup__head {
    font-size: 23px;
    text-align: center;
    font-weight: bold;
    margin: 0;
}
.signup__forms__flex {
    margin: 45px 0 0 0;
    display: flex;
    justify-content: center;
}
.signup__forms input {
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
.signup__footer { margin: 50px 0 0 0; }
.signup__footer__button,
.signup__text__already {
    display: flex;
    justify-content: center;
}
.signup__footer__button button {
    padding: 18px 30px;
    background: black;
    color: white;
    font-size: 20px;
    border-radius: 30px;
    border: none;
}
.signup__text__already {margin: 28px 0 0 0; }
.signup__text__already p {
    font-size: 18px;
    font-weight: bold;
    margin: 0;
}
.signup__text__already a {
    color: black;
    text-decoration: underline;
}

@media (max-width: 768px) {
    .signup__footer { margin: 35px 0 0 0; }
    .signup__head {
        font-size: 17px;
        margin: 0;
    }
    .signup { margin: 155px 0 0 0; }
    .signup__forms input {
        height: 56px;
        width: 310px;
        margin: 10px 0 0 0;
    }
    .signup__forms__flex {
        margin: 30px 0 0 0;
    }
    .signup__footer__button button {
        padding: 15px 30px;
        font-size: 16px;
    }
    .signup__text__already p {
        font-size: 15px;
        margin: 0;
    }
    .signup__text__already { margin: 20px 0 0 0; }

}

</style>

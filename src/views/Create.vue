<template>
    <Header />
    <div class="create">
        <div class="container">
            <div class="create__body">

                <div class="create__buttons">
                    <div><button class="create__button__publish">Опубликовать</button></div>
                    <div><button class="create__button__check">Предпросмотр</button></div>
                    <div><button class="create__button__tutorial">Инструкция</button></div>
                </div>

                <div class="create__input">
                    <TitleTextarea />
                    <ArticleTextarea />
                </div>

            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import TitleTextarea from "@/components/TitleTextarea.vue";
import ArticleTextarea from "@/components/ArticleTextarea.vue";

export default {
    name: 'Create',
    components: {
        Footer,
        Header,
        TitleTextarea,
        ArticleTextarea
    }
};
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


.create {
    margin: 220px 0 0 0;
}
.create__input {
    margin: 50px 0 0 0;
}

.create__buttons {
    display: flex;
    align-items: center;
}
.create__buttons button {
    font-size: 18px;
    border-radius: 25px;
    border: 1px solid black;
    padding: 11px 20px;
    background: none;
}
.create__button__check,
.create__button__tutorial {
    margin: 0 0 0 30px;
}

@media (max-width: 767px) {
    .create {
        margin: 110px 0 0 0;
    }
    .create__input {
        margin: 30px 0 0 0;
    }
    .create__buttons {
        display: block;
    }
    .create__buttons button {
        font-size: 15px;
        padding: 9px 18px;
    }
    .create__button__check,
    .create__button__tutorial {
        margin: 10px 0 0 0;
    }
}
</style>

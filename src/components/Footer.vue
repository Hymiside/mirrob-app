<template>
    <div class="footer">
        <div class="container">
            <div class="footer__body">
                <ul class="footer__list">
                    <li>
                        <a href="#" class="footer__link"
                           @click="$router.push({ name: 'Examples' })"
                        >Подготовка к собеседованию</a>
                    </li>
                    <li>
                        <a href="#" class="footer__link"
                           @click="$router.push({ name: 'Articles' })"
                        >Статьи</a>
                    </li>
                    <li>
                        <a href="#" class="footer__link">Курсы</a>
                    </li>
                    <li>
                        <a href="#" class="footer__link">Вакансии</a>
                    </li>
                </ul>

                <ul class="footer__contacts">
                    <li>
                        <a href="#" class="footer__email">Mirrob@info.com</a>
                    </li>
                    <li>
                        <a href="#" class="footer__telegram">tg: @hymiside</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.footer {
    font-family: Roboto, sans-serif;
}
.footer__body {
    margin: 80px 0 0 0;
    padding: 0 0 50px 0;
}
.footer__list {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.footer__body li {
    list-style: none;
    margin: 15px 20px 0 20px;
}
.footer__email,
.footer__telegram,
.footer__link {
    color: #757579;
    font-size: 15px;
    text-decoration: none;
    font-weight: normal;
}
.footer__contacts {
    margin: 15px 0 0 0;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
</style>

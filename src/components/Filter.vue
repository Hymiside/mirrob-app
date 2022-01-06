<template>
    <div class="filter">
        <div class="container">
            <div class="filter__body">
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
</template>

<script>

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


.filter { margin: 50px 0 0 0; }
.filter__buttons {
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
    .filter { margin: 28px 0 0 0; }
    .filter__buttons {
        justify-content: left;
    }
    .filter__buttons button {
        padding: 8px 10px;
        font-size: 15px;
        margin: 20px 25px 0 0;
    }
}
</style>

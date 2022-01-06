<template>
    <div class="wrapper">
    <textarea
        rows="15"
        class="textarea"
        placeholder="Ваша статья..."
        @input="resizeAuto"
    ></textarea>
    </div>
</template>

<script>
import AutoResize from "../resize_textarea/AutoResize.js";

export default {
    name: 'ArticleTextarea',
    mixins: [AutoResize]
};
</script>

<style scoped>
textarea {
    font-family: "Playfair Display", serif;
    font-size: 20px;
    width: 100%;
    margin: 30px 0 0 0;
    resize: none;
    outline: none;
    border: none;
}
@media (max-width: 768px) {
    textarea {
        font-size: 17px;
        margin: 5px 0 0 0;
    }
}
</style>

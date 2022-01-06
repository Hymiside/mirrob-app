<template>
    <div class="wrapper">
    <textarea
        rows="1"
        class="textarea"
        placeholder="Название статьи"
        @input="resizeAuto"
    ></textarea>
    </div>
</template>

<script>
import AutoResize from "../resize_textarea/AutoResize.js";

export default {
    name: 'TitleTextarea',
    mixins: [AutoResize]
};
</script>

<style scoped>
textarea {
    font-size: 23px;
    outline: none;
    font-family: Roboto, sans-serif;
    width: 100%;
    resize: none;
    border: none;
}
@media (max-width: 768px) {
    textarea {
        font-size: 20px;
    }
}
</style>

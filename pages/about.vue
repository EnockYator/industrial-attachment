<template>
    <Header />
    <div>
        <h1>About</h1>
    </div>
    <Footer />
</template>

<script>
import Header from '/components/common/Header.vue';
import Footer from '/components/common/Footer.vue';

export default {
    name: "about",
    components: {
        Header,
        Footer,
    }

}
</script>

<style scoped>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

</style>
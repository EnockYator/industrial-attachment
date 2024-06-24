<template>
    <div class="index-page">
        <Header />
        <h2>HR Index</h2>
        <Footer />
    </div>
  
</template>

<script>
import Header from '/components/common/Header.vue';
import Footer from '/components/common/Footer.vue';

export default {
    name: "index",
    components: {
        Header,
        Footer
    }

}
</script>

<style>
.index-page{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
}

</style>
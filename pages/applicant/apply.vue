<template>
    <div class="apply">
        <Header />
        <h2>Apply</h2>
        <Footer />
    </div>
  
</template>

<script>
import Header from '/components/common/Header.vue';
import Footer from '/components/common/Footer.vue';

export default {
    name: "apply",
    components: {
        Header,
        Footer
    }

}
</script>

<style>
.apply{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
}

</style>
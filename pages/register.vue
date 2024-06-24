<template>
    <div class="register">
        <Header />
        <h2>Register</h2>
        <Footer />
    </div>
  
</template>

<script>
import Header from '/components/common/Header.vue';
import Footer from '/components/common/Footer.vue';

export default {
    name: "register",
    components: {
        Header,
        Footer
    }

}
</script>

<style>
.register{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
}

</style>
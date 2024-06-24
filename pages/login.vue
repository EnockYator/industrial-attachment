<template>
    <div class="login">
        <Header />
        <h2>Login</h2>
        <Footer />
    </div>
  
</template>

<script>
import Header from '/components/common/Header.vue';
import Footer from '/components/common/Footer.vue';

export default {
    name: "login",
    components: {
        Header,
        Footer
    }

}
</script>

<style>
.login{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
}

</style>
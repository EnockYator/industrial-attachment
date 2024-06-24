<template>
    <div class="hr-dashboard">
        <Header />
        <h2>HR Dashboard</h2>
        <Footer />
    </div>
  
</template>

<script>
import Header from '/components/common/Header.vue';
import Footer from '/components/common/Footer.vue';

export default {
    name: "dashboard",
    components: {
        Header,
        Footer
    }

}
</script>

<style>
.hr-dashboard{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
}

</style>
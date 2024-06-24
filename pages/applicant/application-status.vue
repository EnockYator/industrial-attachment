<template>
    <div class="application-status">
        <Header />
        <h2>Application Status</h2>
        <Footer />
    </div>
  
</template>

<script>
import Header from '/components/common/Header.vue';
import Footer from '/components/common/Footer.vue';

export default {
    name: "application-status",
    components: {
        Header,
        Footer
    }

}
</script>

<style>
.application-status{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
}

</style>
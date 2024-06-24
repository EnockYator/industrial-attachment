<template>
    <div class="hr-reports">
        <Header />
        <h2>HR Reports</h2>
        <Footer />
    </div>
  
</template>

<script>
import Header from '/components/common/Header.vue';
import Footer from '/components/common/Footer.vue';

export default {
    name: "reports",
    components: {
        Header,
        Footer
    }

}
</script>

<style>
.hr-reports{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
}

</style>
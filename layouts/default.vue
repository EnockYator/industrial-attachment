<template>
    <div class="layout-container">
        <div class="header-container">
            <Header />
        </div>

        <div class="slot-container">
            <slot />
        </div>
        
        <div class="footer-container">
            <Footer />
        </div>        
    </div>
</template>

<script>
import Header from '/components/common/Header.vue';
import Footer from '/components/common/Footer.vue';

export default {
    name: "default",
    components: {
        Header,
        Footer,
    }

} 
</script>

<style scoped>
.layout-container{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
}

.slot-container{
    width: 100vw;
    min-height: 80vh;
    max-height: fit-content;
    padding: 20px;
}
</style>
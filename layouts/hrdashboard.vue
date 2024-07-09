<template>
    <div class="layout-container">
        <div class="header-container">
            <Header />
        </div>

        <div class="sidebar-and-slot-container">
            <div class="sidebar-container">
                <HrSideBar />              
            </div>
            <div class="slot-container">
                <slot />
            </div>
        </div>
        
        <div class="footer-container">
            <Footer />
        </div>        
    </div>
</template>

<script>
import Header from '/components/common/Header.vue';
import Footer from '/components/common/Footer.vue';
import HrSideBar from '/components/common/HrSideBar.vue';

export default {
    name: "hrdashboard",
    components: {
        Header,
        Footer,
        HrSideBar
    }

} 
</script>

<style scoped>
.layout-container{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
}

.sidebar-and-slot-container{
    height: 75vh;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.9);
}

.sidebar-container{
    width: 20%;
    height: 100%;
    padding: 20px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
}

.slot-container{
    width: 80%;
    height: 100%;
    padding: 20px;
    overflow: scroll;
}

</style>
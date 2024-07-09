<template>
    <div id="pageHeader">

<div class="first-navbar">
    <div class="header-icons">
        <ul>
            <li><NuxtLink to="/">&copy;</NuxtLink></li>
            <li><NuxtLink to="/">&copy;</NuxtLink></li>
            <li><NuxtLink to="/">&copy;</NuxtLink></li>
            <li><NuxtLink to="/">&copy;</NuxtLink></li>
            <li><NuxtLink to="/">&copy;</NuxtLink></li>
            
        </ul>
    </div>

    <div class="header-quick-links">
        <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="about">About</NuxtLink></li>
            <li><NuxtLink to="apply">How to Apply</NuxtLink></li>
            <li><NuxtLink to="contact-us">Contact us</NuxtLink></li>
            <li><NuxtLink to="faqs">FAQs</NuxtLink></li>
            
        </ul>
    </div>
</div>

<div class="second-navbar">
    
    <div class="logo">
        <img class="logo-image" src="/assets/images/kvda-logo-image.png" alt="logo-img">
    </div>

    <div class="nav-bar">
    <ul>
        <!--conditional rendering-->
        <li ><NuxtLink to="/login">Login</NuxtLink></li>
        <li ><NuxtLink to="/register">Register</NuxtLink></li>
    </ul>
    </div>
</div>

</div>
</template>

<script>

export default{
    name: 'Header'
}

</script>

<style scoped>

*{
    overflow: hidden !important;
}

#pageHeader{
    height: 150px;
    width: 100vw !important;
    position: relative;
    top: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    float: left;
    
}

.first-navbar{
    height: 50px;
    width: 100vw;
    float: left;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 15px 100px 15px 10px;
    justify-content: space-between;
    background-color: rgba(48, 48, 173, 0.7);
    font-weight: bold
}

.header-icons li,.header-quick-links li{
    padding-left: 50px;
}

.second-navbar{
    height: 100px;
    width: 100vw;
    float: left;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;

}

#pageHeader .logo{
    height: 100%;
    width: 300px;
    float: left;
    padding: 10px 0 10px 60px;
}

#pageHeader .logo-image{
    background-position: center;
    background-size: cover; 
}

#pageHeader ul{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}

.second-navbar .nav-bar{
    height: 100%;
    float: left;
    padding: 25px;
}

#pageHeader .nav-bar li{
    padding-right: 60px;
}



</style>
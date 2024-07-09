<template>
    <div id="pageFooter">
        <div class="hyperlinks flex-item">
            <ul>
                <li><NuxtLink to="apply">Apply</NuxtLink></li>
                <li><NuxtLink to="about">About us</NuxtLink></li>
                <li><NuxtLink to="/">Media centre</NuxtLink></li>
                <li><NuxtLink to="/">Careers</NuxtLink></li>
                <li><NuxtLink to="register">Register</NuxtLink></li>
                <li><NuxtLink to="login">Login</NuxtLink></li>
            </ul>
        </div>
        <div class="need-help flex-item">
            <ul>
                <li><h3>Need help?</h3></li>
                <li><NuxtLink to="contact-us">Contact us</NuxtLink></li>
                <li><NuxtLink to="faqs">FAQs</NuxtLink></li>
            </ul>
        </div>
        <div class="connect-with-us flex-item">
            <ul>
                <li><h3>Connect with us</h3></li>
                <li><NuxtLink to="/">fb-&copy;</NuxtLink></li>
                <li><NuxtLink to="/">x-&copy;</NuxtLink></li>
                <li><NuxtLink to="/">ig-&copy;</NuxtLink></li>
            </ul>
        </div>

        <p class="copyright">&copy; 2024</p>
    </div>
</template>

<script>
export default{
    name: 'Footer'
}

</script>

<style scoped>

*{
    overflow: hidden !important;
    color: white;
}

#pageFooter{
    margin-top: 20px;
    float: left;
    height: 400px;
    width: 100vw !important;
    background-color: rgb(0, 0, 0);
    position: relative;
    bottom: 0;
    padding: 50px 100px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}

#page-Footer .flex-item{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}

#pageFooter .flex-item *{
    margin: 20px auto;
}

#pageFooter .copyright{
    position: absolute;
    bottom: 50px;

}

</style>
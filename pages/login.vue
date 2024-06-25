<template>
    <Header />
    <div id="loginPage">
        <div class="login-container">
            <div class="login-heading">
                <h3>Login Here</h3>
            </div>

            <div class="login-form">
                <form>
                    <label for="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder="Email address" required>

                    <label for="password">Password:</label>
                    <input type="password" name="password" id="password" placeholder="Password" required>

                    <button type="submit" class="login-btn">Login</button>

                    <p>
                        Don't have an account? 
                        <NuxtLink to="register" class="login-alternative">
                            Register<span> here</span>
                        </NuxtLink>
                    </p>
                </form>
            </div>
        </div>
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

<style scoped>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#loginPage{
    height: fit-content;
    width: 100vw;
    float: left;
    margin: 20px auto;

}

.login-container{
    height: fit-content;
    width: 315px;
    margin: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
    align-items: center;
    
}

.login-heading{
    width: 100%;
    height: 40px;
    background-color: blue;
    border-radius: 10px 10px 0 0;
    padding: 5px;
}

.login-heading h3{
    color: white;
    text-align: center;
    font-size: 25px;
}

.login-form{
    padding: 20px;
}

.login-form input{
    width: 100%;
    margin: 15px 0;
    outline: none !important;
    border-radius: 5px;
    padding: 5px 10px;
    background-color: rgba(0, 255, 255, 0.148);
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 18px;
}

.login-form .login-btn{
    width: 80%;
    padding: 5px 0;
    margin: 15px 10%;
    background-color: blue;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    font-size: 18px;

}

.login-form .login-alternative{
    color: blue !important;
    font-size: 18px;
}
</style>
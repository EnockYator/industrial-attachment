<template>
    <Header />
    <div id="signupPage">
        <div class="signup-container">
            <div class="signup-heading">
                <h3>Register</h3>
            </div>

            <div class="signup-form">
                <form>
                    <label for="fullNames">Full Names:</label>
                    <input type="text" name="fullNames" id="fullNames" placeholder="John Paul" required>

                    <label for="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder="example@gmail.com" required>

                    <!--<label for="email">Role:</label>
                    Hr<input type="radio" name="role" id="role" value="hrOfficer">
                    Applicant<input type="radio" name="role" id="role" value="applicant">-->
                    <label for="password">Password:</label>
                    <input type="password" name="password" id="password" placeholder="Password" required>

                    <label for="confirmedPassword">Password:</label>
                    <input type="password" name="confirmedPassword" id="confirmedPassword" placeholder="Confirm Password" required>

                    <button type="submit" class="signup-btn">Register</button>

                    <p>
                        Already have an account? 
                        <NuxtLink to="login" class="signup-alternative">
                            Login<span> here</span>
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
    name: "register",
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

#signupPage{
    height: fit-content;
    width: 100vw;
    float: left;
    margin: 20px auto;

}

.signup-container{
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

.signup-heading{
    width: 100%;
    height: 40px;
    background-color: blue;
    border-radius: 10px 10px 0 0;
    padding: 5px;
}

.signup-heading h3{
    color: white;
    text-align: center;
    font-size: 25px;
}

.signup-form{
    padding: 15px;
}

.signup-form input{
    width: 100%;
    margin: 6px 0;
    outline: none !important;
    border-radius: 5px;
    padding: 6px 10px;
    background-color: rgba(0, 255, 255, 0.148);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 15px;
}

.signup-form .signup-btn{
    width: 60%;
    padding: 5px 0;
    margin: 15px 20%;
    background-color: blue;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    font-size: 18px;

}

.signup-form .signup-alternative{
    color: blue !important;
    font-size: 18px;
}


</style>
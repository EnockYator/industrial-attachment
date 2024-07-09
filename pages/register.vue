<template>
    <div id="signupPage">
        <div class="signup-container">
            <div class="signup-heading">
                <h3>Register</h3>
            </div>

            <div class="signup-form">
                <form @submit.prevent="registerUser">
                    <label for="fullNames">Full Names:</label>
                    <input type="text" name="fullNames" id="fullNames" placeholder="John Paul" 
                    v-model="fullNames" required>

                    <label for="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder="example@gmail.com" 
                    v-model="email" required>

                    <!--<label for="email">Role:</label>
                    Hr<input type="radio" name="role" id="role" value="hrOfficer">
                    Applicant<input type="radio" name="role" id="role" value="applicant">-->
                    <label for="password">Password:</label>
                    <input type="password" name="password" id="password" placeholder="Password" 
                    v-model="password" required>

                    <label for="confirmedPassword">Password:</label>
                    <input type="password" name="confirmedPassword" id="confirmedPassword" placeholder="Confirm Password" 
                    v-model="confirmedPassword" required>

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
export default {
    data() {
        return {
            email: "kl@n.com",
            fullNames: "John Doe",
            password: "pa1111",
            confirmedPassword: "123"
        }
    },
    methods: {
        async registerUser() {
            try {
                const response = await this.$axios.post('/api/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            name: this.fullNames,
                            mail: this.email,
                            password: this.password,
                            confirmedPassword: this.confirmedPassword
                        })
                    }
                )

                if (response.ok) {
                    // register successful
                    // redirect to login page
                    this.$route.push('/login')
                }
                else {
                    // register failure
                    // handle error
                    console.error('Register failed')
                }
            }
            catch (error) {
                console.error('Error: ', error)
            }

        }
    }
}
 
            

            //logging to console
            // if(this.register){
            //     console.log(this.register.fullNames);
            //     console.log(this.register.email);
            //     console.log(this.register.password);
            //     console.log(this.register.confirmedPassword);
            // }
            //
        

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
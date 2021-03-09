<template>
  
  <div class="login col-lg-12 py-1" style="height:100vh">


  
    <div class="header d-flex col-lg-3 offset-lg-5 mb-3">
      <img src="../assets/logo-white.png" class="ml-2" alt="">

    </div>

<div class="login-form col-lg-4 offset-lg-4 py-1">

<h2 class="text-center mb-2 mt-2">Log In</h2>

    <form @submit="gotoProfile" class="form-group mt-4">
        <input  type="email" class="form-control " placeholder="Email-Address" v-model="email">
         <span class="text-danger" v-if="(!$v.email.required || !$v.email.email) && $v.email.$dirty">Email is required!</span>
        <input  type="password" class="form-control mt-4" placeholder="Password" v-model="password">
         <span class="text-danger" v-if="!$v.password.required && $v.password.$dirty">Please enter password</span>
        <input type="submit" value="Login to your account" class="form-control login-button mt-4">
    </form>
      
    </div>

    <p class="text-center mt-2">New to Jarviz pay? <router-link to="/student-signup"> Sign up</router-link></p>
  </div>
 
</template>

<script>
// @ is an alias to /src
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'Home',
  components: {
  
  }, 

  data(){
    return{
      email:'',
      password:''
    }
  },
  validations:{
email:{
  required,
  email
},
password:{
  required
}

  },
  methods:{
    gotoProfile(e){

       this.$v.$touch();
      if(this.$v.$invalid){
        console.log(`error`)
      }

      else{
      this.$router.push({path:'/body-profile'})
    
    }

      e.preventDefault()
    }
  }
}
</script>

<style scoped>
.login{
  background: #0E4870;

  

}


.header{
color:white;
font-size:1.5rem;
margin-top: 40px;
}

.login-form{
    background-color: white;
  
  border-radius: 10px;
}

.login-form input{
    height:50px;
}

.login-button{

  color:#ffffff;
  background: #0E4870;
padding-top: 5px;
padding-bottom: 5px;
border:none;


}

.login h2{
    font-size: 1.3rem;
}

</style>





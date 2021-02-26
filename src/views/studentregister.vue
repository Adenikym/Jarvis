<template>
  
  <div class="login col-lg-12 py-1" style="">
 
    <div class="header d-flex col-lg-3 offset-lg-5 mb-3">
      <img src="../assets/credit-card.svg" width="40px" class="ml-2" alt="">
<p class="mt-1 ml-1">JARVIS Pay</p>
    </div>

    <div class="register col-lg-4 offset-lg-4 py-1">
        <h2 class="text-center mt-3">Student Sign Up</h2>
<form class="form-group" @submit="gotoLoginPage">
    <input type="text" class="form-control" placeholder="First Name" v-model="firstName">
    <span class="text-danger" v-if="!$v.firstName.required && $v.firstName.$dirty">First name is required!</span>
     <span class="text-danger" v-if="!$v.firstName.alpha && $v.firstName.$dirty">First name is required!</span>
    
    <input type="text" class="form-control" placeholder="Last Name" v-model="lastName">
     <span class="text-danger" v-if="!$v.lastName.required && $v.lastName.$dirty">First name is required!</span>
     <span class="text-danger" v-if="!$v.lastName.alpha && $v.lastName.$dirty">First name should contain letters only!</span>
    
    <input type="text" class="form-control" placeholder="Email Address" v-model="email">
    <span class="text-danger" v-if="(!$v.email.required || !$v.email.email)  && $v.email.$dirty">Valid email is required!</span>
    
    <input type="number" class="form-control" placeholder="Matric Number" v-model="mnumber">
     <span class="text-danger" v-if="!$v.mnumber.required   && $v.mnumber.$dirty">Matriculation number is required!</span>
      <span class="text-danger" v-if="(!$v.mnumber.minLength || !$v.mnumber.maxLength)  && $v.mnumber.$dirty">matric number must be 6 chracters long.</span>
    
    <input type="tel" class="form-control" placeholder="Phone Number" v-model="phone">
    <span class="text-danger" v-if="!$v.phone.required && $v.phone.$dirty">Phone number is required!</span>
    
    <input type="password" class="form-control" placeholder="Password" v-model="pass">
     <span class="text-danger" v-if="!$v.pass.required && $v.pass.$dirty">Please enter password</span>
     <span class="text-danger" v-if="(!$v.pass.minLength || !$v.pass.maxLength)  && $v.pass.$dirty">Password must be 8-12 chracters long.</span>
   
    <input type="submit" value="Create my account" class="form-control register-button" >
</form>
    </div>
<p class="text-center mt-2">Already have an account? <span > <router-link to="/login">login</router-link> </span> </p>
  </div>
</template>

<script>
// @ is an alias to /src
import { required, minLength,  maxLength,alpha,email } from 'vuelidate/lib/validators'

export default {
  name: 'Home',
  components: {
  
  }, 

  data(){
    return{
      firstName:'',
      lastName:'',
phone:'',
mnumber:'',
pass:'',
email:''
    }
  },

  validations:{
    firstName:{
      required, alpha
    },
    lastName:{required, alpha},
    email:{
      required,
      email
    },
    pass:{
      required,
      maxLength: maxLength(12),
      minLength:minLength(8)
    },
    mnumber:{
required,
maxLength: maxLength(6),
      minLength:minLength(6)
    },
    phone:{
      required
    }
  },
  methods:{
    gotoLoginPage(e){

      this.$v.$touch();
      if(this.$v.$invalid){
        console.log(`error`)
      }

      else{

       this.$router.push({
          
           path:'/login'
        })
      }

     

         e.preventDefault(); 
    }
  }
}
</script>

<style scoped>
.login{
  background: #E87312;
  height: 100vh;

}


.header{
color:white;
font-size:1.5rem;
margin-top: 40px;
}

.register{
      background-color: white;
  
  border-radius: 10px;
}

.register h2{
    font-size: 1.3rem;
}

.register input{
    height:35px;
    margin-top: 20px;
    margin-top: 20px;
    border-radius:0;
}

.register-button{color:#ffffff;
  background: #0E4870;
padding-top: 5px;
padding-bottom: 5px;
border:none;}



</style>





<template>
  
  <div class="login col-lg-12 py-1" style="">
  
    <div class="header d-flex col-lg-3 offset-lg-5  col-md-4 offset-md-4 mb-3 col-sm-5 offset-sm-4 col-8 offset-2 mb-3">
      <img src="../assets/logo-white.png" alt="">

    </div>
 <div class="register col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2   py-1">
        <h2 class="text-center mt-3">Student Body Sign Up</h2>
<form class="form-group" @submit="registerBody">
    <input type="text" class="form-control" placeholder="Student Body Name" v-model="bodyName">
   <span class="text-danger" v-if="!$v.bodyName.required && $v.bodyName.$dirty">Full name is required!</span>
    <input type="email" class="form-control" placeholder="Email Address" v-model="email">
     <span class="text-danger" v-if="(!$v.email.required || !$v.email.email)  && $v.email.$dirty">Valid email is required!</span>
    <input type="tel" class="form-control" placeholder="Phone Number" v-model="phone">
     <input list="bodies" name="body" id="body" v-model="bodyType" placeholder="What category does this body fall under?" class="form-control ">
<span class="text-danger" v-if="!$v.bodyType.required && $v.bodyType.$dirty">Body type is required!</span>
<datalist id="bodies">
  <option value="student union"></option>
  <option value="Club"></option>
 
</datalist>

        <input list="abbrs" name="abbr" id="abbr" v-model="abbr" placeholder="Official body name abbreviation?" class="form-control ">
<span class="text-danger" v-if="!$v.abbr.required && $v.abbr.$dirty">Please select matching abbreviation.</span>
<datalist id="abbrs">
  <option value="UIMSA"></option>
  <option value="FASSA"></option>
 
</datalist>
    <input type="password" class="form-control" placeholder="Password" v-model="password">
     <span class="text-danger" v-if="!$v.password.required && $v.password.$dirty">Please enter password</span>
     <span class="text-danger" v-if="(!$v.password.minLength || !$v.password.maxLength)  && $v.password.$dirty">Password must be 8-12 chracters long.</span>
    
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
    return{bodyName:'',
    bodyType:'',
    abbr:'',
    phone:'',
    email:'',
    password:''}
    

  },
  validations:{
bodyName:{
  required,
  alpha
},
bodyType:{
  required
},
 email:{
      required,
      email
    },
    password:{
      required,
      maxLength: maxLength(12),
      minLength:minLength(8)
    },
    abbr:{
      required
    }
  },
  methods:{
    registerBody(e){
 this.$v.$touch();
      if(this.$v.$invalid){
        console.log(`error`)
      }else{
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
  background: #0E4870;
 
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





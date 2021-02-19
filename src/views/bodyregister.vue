<template>
  
  <div class="login col-lg-12 py-1" style="">
  
    <div class="header d-flex col-lg-3 offset-lg-5 mb-3">
      <img src="../assets/credit-card.svg" width="40px" class="ml-2" alt="">
<p class="mt-2 ml-2">JARVIS Pay</p>
    </div>
 <div class="register col-lg-4 offset-lg-4 py-1">
        <h2 class="text-center mt-3">Student Body Sign Up</h2>
<form class="form-group" @submit="gotoLoginPage">
    <input type="text" class="form-control" placeholder="Student Body Name">
   
    <input type="email" class="form-control" placeholder="Email Address">
    <input type="tel" class="form-control" placeholder="Phone Number">
    <input type="text" class="form-control" placeholder="Type of Body">
     <input type="text" class="form-control" placeholder="Body Abbreviation">
    <input type="password" class="form-control" placeholder="Password">
    
    <input type="submit" value="Create my account" class="form-control register-button" >
</form>
    </div>
    
<p class="text-center mt-2">Already have an account? <span > <router-link to="/login">login</router-link> </span> </p>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
  
  }, 
  methods:{
    
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
    height: 440px;
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





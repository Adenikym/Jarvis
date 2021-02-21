<template>
  
  <div class="login col-lg-12 py-1" style="">


  
    <div class="header d-flex col-lg-3 offset-lg-5 mb-3">
      <img src="../assets/credit-card.svg" width="40px" class="ml-2" alt="">
<p class="mt-2 ml-2">JARVIS Pay</p>
    </div>

<div class="login-form col-lg-4 offset-lg-4 py-1">

<h2 class="text-center mb-2 mt-2">Log In</h2>

    <form @submit="gotoProfile" class="form-group mt-4">
        <input  type="text" class="form-control " placeholder="Email-Address">
        <input  type="text" class="form-control mt-4" placeholder="Password">
        <input type="submit" value="Login to your account" class="form-control login-button mt-4">
    </form>
      
    </div>

    <p class="text-center mt-2">New to Jarviz pay? <router-link to="/student-signup"> Sign up</router-link></p>
  </div>
 
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
  
  }, 
  methods:{
    gotoProfile(e){
      this.$router.push({path:'/body-profile'})
      e.preventDefault()
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

.login-form{
    background-color: white;
    height: 280px;
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





<template>
  <div class="home col-lg-12 py-1" style="">
  <div class="select">
    <div class="header d-flex col-lg-3 offset-lg-5 col-md-4 offset-md-4 mb-3 col-sm-5 offset-sm-4 col-8 offset-2">
      <img src="../assets/credit-card.svg" width="40px" class="ml-3 ml-md-3 ml-lg-2" alt="">
<p class="mt-2 ml-2">JARVIZ Pay</p>
    </div>

    <div class="select-box col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2 py-1">
      <h2 class="text-center mt-2 mb-4">Sign Up</h2>

      <button @click="goToStudent" class="col-lg-10 offset-lg-1 mt-4 mb-2">Continue as a Student</button>
      <button @click="goToBody" class="col-lg-10 offset-lg-1 mt-4 mb-4">Continue as a Body</button>
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
  
  }, 
  methods:{
    goToStudent(){
      this.$router.push({path:'/student-signup'})
    },
    goToBody(){
      this.$router.push({
        path:'/body'
      })
    }
  }
}
</script>

<style scoped>
.home{
 background: #0E4870;

  height: 100vh;

}

.select-box{
  background-color: white;
  height: 280px;
  border-radius: 10px;
}

.select-box button{
  color:#ffffff;
  background: #0E4870;
padding-top: 5px;
padding-bottom: 5px;
border:none;
height: 40px;

}

.header{
color:white;
font-size:1.5rem;
margin-top: 40px;
}

</style>
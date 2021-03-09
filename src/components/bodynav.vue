<template>
    <div class="wrapper px-0 py-1 ">
        <div class="logo d-flex mt-4 col-lg-10 offset-lg-1 ">
 <img src="../assets/credit-card.svg" width="40px" class="ml-2" alt="">
<p class="mt-2 ml-2">JARVIS Pay</p>
        </div>
<ul class="nav-list px-1 mt-4">
  <div @click="goToProfile" class="d-flex  col-lg-10 offset-lg-1 mt-4"> <img class="mt-3" src="../assets/User.svg" alt="user icon" width="20px" height="20px"> <li class="ml-3 mt-3">Body Profile</li></div> 
    <div  @click=" goToDues" class="d-flex col-lg-10 offset-lg-1 mt-4"> <img class="mt-2" src="../assets/Pay.svg" alt="pay icon" width="20px" height="20px"> <li class="ml-3 mt-2">Dues</li></div> 
    <div @click="goToHistory"    class="d-flex col-lg-10 offset-lg-1 mt-4"> <img class="mt-2" src="../assets/Chart.svg" alt="chart icon" width="20px" height="20px"> <li class="ml-3 mt-2">Pay history</li></div> 
</ul>
    </div>
</template>


<script>
export default {
methods:{
    goToHistory(){
        this.$router.push({
            path:'/payment-history'
        })
    },

    goToProfile(){
       this.$router.push({
            path:'/body-profile'
        }) 
    },

    goToDues(){
      this.$router.push({
            path:'/dues'
        })   
    }
}
}
</script>


<style scoped>
.wrapper{
    background: #0E4870;
    height:100vh;
}
.nav-list{
    list-style: none;
    color:white;
}
</style>
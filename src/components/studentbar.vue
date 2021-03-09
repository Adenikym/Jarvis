<template>
  <div>
       <div class="d-flex">
   <img src="../assets/Logo.png" alt="">
<img @click="openNav" class="offset-sm-5 offset-3 mt-3" src="../assets/menu.svg" width="30px" height="25px" alt="">
  </div>

  <div v-if="nav" class="wrap">
          <img @click="closeNav" src="../assets/close.svg" class="mb-2 offset-10 mt-3" alt="" height="40px" width="40px">
        <div class="logo d-flex mt-4 col-lg-10 offset-lg-1 ">
 
<img src="../assets/Logo.png" class="mt-2 ml-2">
        </div>
<ul class="nav-list px-1 mt-4 text-center">
  <div @click="goToProfile" class="d-flex  col-lg-10 offset-lg-1 mt-4 text-center"> <img class="mt-3 ml-3" src="../assets/User.svg" alt="user icon" width="35px" height="35px"> <li class="ml-3 mt-3">Student Profile</li></div> 
    <div @click="initiatePay()"  class="d-flex col-lg-10 offset-lg-1 mt-4 text-center"> <img class="mt-2 ml-3" src="../assets/Pay.svg" alt="pay icon" width="35px" height="35px"> <li class="ml-3 mt-2">Initiate a pay</li></div> 
    <div @click="goToHistory"    class="d-flex col-lg-10 offset-lg-1 mt-4 text-center"> <img class="mt-2 ml-3" src="../assets/Chart.svg" alt="chart icon" width="35px" height="35px"> <li class="ml-3 mt-2">Pay history</li></div> 
</ul>
    </div>

  </div>
</template>

<script>
export default {
data(){
    return{
        nav:false,
    }
},
methods:{
closeNav(){
this.nav=false;
},
goToHistory(){
        this.$router.push({
            path:'/payment-history'
        })
    },

    goToProfile(){
       this.$router.push({
            path:'/student-profile'
        }) 
    },

    initiatePay(){
        this.$router.push({
            path:'/initiate-pay'
        })
    },
    openNav(){
        this.nav=true
    }
}
}
</script>

<style>
.wrap{
    position:absolute;
    z-index: 1;
    top:0;
     background: #0E4870;;
    width:100%;
    height: 100vh;
    color:white;
   
}

.wrap ul{
     list-style: none;
     font-size:2rem;
}
</style>
<template>
    <div class="col-lg-12 px-0 d-lg-flex d-md-flex d-block">
      <div v-if="nav" class="wrap d-lg-none d-sm-none d-block">
          <img @click="closeNav" src="../assets/close.svg" class="mb-2 offset-10 mt-3" alt="" height="40px" width="40px">
        <div class="logo d-flex mt-4 col-lg-10 offset-lg-1 ">
 
<img src="../assets/Logo.png" class="mt-2 ml-2">
        </div>
<ul class="nav-list px-1 mt-4 text-center">
  <div @click="goToProfile" class="d-flex  col-lg-10 offset-lg-1 mt-4 text-center"> <img class="mt-3 ml-3" src="../assets/User.svg" alt="user icon" width="35px" height="35px"> <li class="ml-3 mt-3">Body Profile</li></div> 
    <div @click="initiatePay()"  class="d-flex col-lg-10 offset-lg-1 mt-4 text-center"> <img class="mt-2 ml-3" src="../assets/Pay.svg" alt="pay icon" width="35px" height="35px"> <li class="ml-3 mt-2">Initiate a pay</li></div> 
    <div @click="goToHistory"    class="d-flex col-lg-10 offset-lg-1 mt-4 text-center"> <img class="mt-2 ml-3" src="../assets/Chart.svg" alt="chart icon" width="35px" height="35px"> <li class="ml-3 mt-2">Pay history</li></div> 
</ul>
    </div>
     <div class="d-md-none d-flex">
   <img src="../assets/Logo.png" alt="">
<img @click="openNav"  class="offset-sm-5 offset-3 mt-3" src="../assets/menu.svg" width="30px" height="25px" alt="">
  </div>
<sidenav class="col-lg-2  col-md-3 d-md-block d-none"></sidenav>
<div class="main-content col-lg-10 col-md-9 px-0">
<greybar class="d-md-block d-none " ></greybar>

<div class="heading d-md-flex d-none col-lg-6">
    <rectangle class="mt-2" ></rectangle>
    <h1 class="mt-3 ml-2 col-lg-8" >Student Profile</h1>    
</div>

<div class="mobile-head d-md-none d-block col-12 px-0  mt-4"><p class="ml-4 mt-2"> Student Profile</p></div>

<div class="student-details col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-12 offset-0 p-4 mt-4">
    <div class="name d-flex mt-4">
        <p class="col-lg-4 mt-4">Name</p> <p class="offset-lg-4 mt-4">Oguntade Muhammad</p>
    </div>

       <div class="name d-flex mt-4">
        <p class="col-lg-4 ">Email</p> <p class="offset-lg-4">Oguntade@gmail.com</p>
    </div>

       <div class="name d-flex mt-4">
        <p class="col-lg-4 ">Phone Number</p> <p class="offset-lg-4">997-998-997</p>
    </div>
</div>
</div>



</div>

</template>



<script>
const sidenav=  () => import(/* webpackChunkName: "studentnav" */ '../components/sudentnav');
const greybar= () => import(/* webpackChunkName: "bar" */ '../components/bar' );
const rectangle= () => import(/* webpackChunkName: "rectangle" */ '../components/rectangle' )

export default {
    components:{
        sidenav,
        greybar,
        rectangle,
      
       
    },
    data(){
        return{
            nav:false
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


<style scoped>
.heading h1{
    color: #0E4870;
font-size:1.9rem;
}
.student-details{
    background-color: #e5e5e5;
    color:black;
    height: 350px;
    font-weight: bold;
    border-radius: 15px;
}

.mobile-head{
   background: #407093;
   color:white;
   padding-top:1px;
   padding-bottom: 1px;
}

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
<template>
   <div class="login col-lg-12  px-0 d-md-flex d-block" style="">
     <mobilebar class="d-md-none d-block"></mobilebar>
     <div class="mobile-head d-md-none d-block col-12 px-0  mt-4"><p class="ml-4 mt-2"> Student Profile</p></div>
  <sidenav class="col-lg-2  col-md-3 d-md-block d-none"></sidenav>
  <div class="main-content col-lg-10 px-0">
<greybar class="d-md-block d-none"></greybar>
<div class="heading d-flex mt-2">
<rectangle></rectangle>
  <h1 class="ml-2 mt-1">Initiate Pay</h1>
</div>

<initiateform class="col-lg-6 offset-lg-3"></initiateform>
</div>



  </div>
  
</template>

<script>

const sidenav= () => import(/* webpackChunkName: "about" */ '../components/sudentnav' );
const greybar= () => import(/* webpackChunkName: "bar" */ '../components/bar' );
const rectangle= () => import(/* webpackChunkName: "rectangle" */ '../components/rectangle' )
const initiateform=() =>  import(/* webpackChunkName: "initiate" */ '../components/initiate' )
const mobilebar=() =>  import(/* webpackChunkName: "mobilebar" */ '../components/studentbar' )
export default {
components:{
    sidenav,
    greybar,
    rectangle,
    initiateform,
    mobilebar

}
}
</script>

<style scoped>
.mobile-head{
   background: #407093;
   color:white;
   padding-top:1px;
   padding-bottom: 1px;
}
</style>
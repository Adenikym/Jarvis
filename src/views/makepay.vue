<template>
   <div class="login col-lg-12  px-0 d-flex" style="">
  <sidenav class="col-lg-2"></sidenav>
  <div class="main-content col-lg-10 px-0">
<greybar></greybar>
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
export default {
components:{
    sidenav,
    greybar,
    rectangle,
    initiateform

}
}
</script>

<style>

</style>
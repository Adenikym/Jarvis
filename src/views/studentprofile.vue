<template>
    <div class="col-lg-12 px-0 d-flex">
<sidenav class="col-lg-2"></sidenav>
<div class="main-content col-lg-10 px-0">
<greybar></greybar>

<div class="heading d-flex col-lg-3">
    <rectangle class="mt-2" ></rectangle>
    <h1 class="mt-3 ml-2" >Student Profile</h1>
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
        rectangle
    }
}
</script>


<style scoped>
.heading h1{
    color: #0E4870;
font-size:1.9rem;
}
</style>
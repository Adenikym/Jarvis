<template>
    <div class="col-lg-12 px-0 d-md-flex d-block">
        <mobilenav class="d-sm-none d-block"></mobilenav>
        <mobilebar class="d-md-none d-block"></mobilebar>
<sidenav class="col-lg-2  col-md-3 d-md-block d-none"></sidenav>
<div class="main-content col-lg-10 px-0">
<greybar class="d-md-block d-none" ></greybar>

<div class="heading d-md-flex d-none col-lg-6">
    <rectangle class="mt-2" ></rectangle>
    <h1 class="mt-3 ml-2 col-lg-8" >Student Profile</h1>    
</div>

<div class="mobile-head d-md-none d-block col-12 px-0  mt-4"><p class="ml-4 mt-2"> Student Body Profile</p></div>

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
const mobilebar=() => import(/* webpackChunkName: "edit" */ '../components/mobilebar' )
const mobilenav=() => import(/* webpackChunkName: "edit" */ '../components/mobilenav' )
export default {
    components:{
        sidenav,
        greybar,
        rectangle,
        mobilebar,
        mobilenav
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
</style>
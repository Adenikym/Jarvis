<template>
    <div class="col-lg-12 px-0 d-flex">
<sidenav class="col-lg-2"></sidenav>
<div class="main-content col-lg-10 px-0">
<greybar></greybar>

<div class="heading d-flex col-lg-3">
    <rectangle class="mt-2" ></rectangle>
    <h1 class="mt-3 ml-2" >Student Profile</h1>    
</div>

<div class="student-details col-lg-6 offset-lg-3 p-4 mt-4">
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
        rectangle
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
</style>
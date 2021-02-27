<template>
  
  <div class="login col-lg-12  px-0 d-md-flex d-block" style="">
    <mobilebar class="d-md-none d-block"></mobilebar>
  <sidenav class="col-lg-2 d-md-block d-none"></sidenav>
  <div class="main-content col-lg-10 px-0">
<div class="bar d-md-block d-none"></div>

<div class="heading d-md-flex d-none mt-2">
<div class="rectangle ml-3 d-md-block d-none"></div>
  <h1 class="ml-2 mt-1">Student Body Profile</h1>
</div>

<div class="mobile-head d-md-none d-block  mt-2"><p class="ml-4 mt-2"> Student Body Profile</p></div>

<div class="details d-flex mt-4">
<div class="pic-logo col-lg-4">
<div class="inner-box offset-lg-3">
<div class="pic-circle rounded-circle offset-lg-2 mt-4"></div>
</div>
</div>

<div class="info col-lg-5 offset-lg-2">
  <h2>Profile Information</h2>
  <p class="address">Faculty of Computer Science, <span> FACS</span></p>
  <p class="mail">facs@computer.com</p>
  <p class="tel">09020213148</p>
</div>
</div>

<editOption v-if="editing" class="col-lg-12 mt-4"></editOption>
<div v-else class="account col-lg-12">
  <h2 class="ml-4 mt-4">Account Information</h2>
<div class="more-details d-flex ml-4">
  <div class="account-details ml-4 mt-4">
    <div class="name d-flex">
      <p>Account Name</p>
      <p class="ml-4">Not Filled</p>
    </div>

     <div class="number d-flex mt-4">
      <p>Account Number</p>
      <p>Not Filled</p>
    </div>
  </div>
  <div class="bank-details mt-4 offset-lg-4">
     <div class="bank d-flex">
      <p>Bank Name</p>
      <p class="ml-4">Not Filled</p>
    </div>
  </div>
</div>
<button class="col-lg-2 offset-lg-5 edit px-0 mb-2">Edit</button>
</div>

  </div>

  
  </div>
</template>

<script>

// @ is an alias to /src
const sidenav= () => import(/* webpackChunkName: "about" */ '../components/bodynav' )
const editOption= () => import(/* webpackChunkName: "edit" */ '../components/editProfile' )
const mobilebar=() => import(/* webpackChunkName: "edit" */ '../components/mobilebar' )
export default {
  name: 'Home',
  components: {
  sidenav,
  editOption,
  mobilebar
  
  }, 
  data(){
    return{editing:true}
    
  },
  methods:{
    
  }
}
</script>

<style scoped>

.bar{
  height:50px;
  background: #f5f5f5;
}

.rectangle{
  background: #E87312;
width:5px;
height:50px;
}

.heading h1{
  color: #0E4870;
font-size:1.9rem;
}

.pic-logo .inner-box{
  border:1px solid #c4c4c4;
  height:250px;
  width:250px;
}

.inner-box .pic-circle{
  width:150px;
  height:150px;
  border:1px solid  #CBE2FF;

}

.info h2, .account h2{
  font-size: 1.5rem;
  color: #0E4870;

}

.edit{
  color:white;
  background:#E87312 ;
  border:none;
  height:40px;
  border-radius:8px;
}

.mobile-head{
   background: #407093;
   color:white;
   padding-top:1px;
   padding-bottom: 1px;
}
</style>





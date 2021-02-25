<template>
  <div >
      <form v-if="detailsgotten" @submit="openTransaction" class="form-group initiate-form p-2" action="">
          <h2 class="text-center">Personal Information</h2>
          <input type="text" class="form-control col-lg-10 offset-lg-1 mt-4" placeholder="Name">
          <input type="email" class="form-control col-lg-10 offset-lg-1 mt-4" placeholder="Email">
          <input type="tel" class="form-control col-lg-10 offset-lg-1 mt-4" placeholder="Phone Number">
          <input type="number" class="form-control col-lg-10 offset-lg-1 mt-4" placeholder="Level">
         
         <input list="departments" name="department" id="department" placeholder="Department" class="form-control col-lg-10 offset-lg-1 mt-4">

<datalist id="departments">
  <option value="Department of visual arts"></option>
  <option value="Department of health sciences"></option>
 
</datalist>

         <input list="genders" name="gender" id="gender" placeholder="Gender" class="form-control col-lg-10 offset-lg-1 mt-4">

<datalist id="genders">
  <option value="Male"></option>
  <option value="Female"></option>
 
</datalist>
          <input type="submit" value="continue to transaction" class="form-control col-lg-10 offset-lg-1 mt-4 continue">
      </form>

      <form v-else action="" class="form-group transact-form p-2 ">
          <h2 class="text-center mt-4 mb-2">Transaction Details </h2>
          <p  class="text-center mt-4">Additional 4% charge is included for all transactions</p>
         
          <input list="bodies" name="body" id="body" placeholder="What body are you paying to?" class="form-control col-lg-10 offset-lg-1 mt-4">

<datalist id="bodies">
  <option value="UIMSA"></option>
  <option value="FASSA"></option>
 
</datalist>

 <input list="sessions" name="session" id="session" placeholder="What session are you paying for?" class="form-control col-lg-10 offset-lg-1 mt-4">

<datalist id="sessions">
  <option value="1"></option>
  <option value="2"></option>
 
</datalist>

 <input list="purposes" name="purpose" id="purpose" placeholder="Purpose" class="form-control col-lg-10 offset-lg-1 mt-4 mb-4">

<datalist id="purposes">
  <option value="for voting"></option>
  <option value="for participation"></option>
 
</datalist>

<input type="submit" value="continue to payment" class="form-control continue col-lg-10 offset-lg-1">
      </form>
  </div>
</template>

<script>
export default {
data(){
    return{
    detailsgotten:true }
},
methods:{
openTransaction(e){
e.preventDefault();
this.detailsgotten=false

}
}
}
</script>

<style>
.initiate-form, .transact-form{

    border:1px solid #e5e5e5;
}

.initiate-form input{
    height: 45px;
    border:1px solid black;

}

.initiate-form h2{
    font-size:1.2rem;
}

.continue{
    color:white;
    background-color: #0e4870;
}

.transact-form input{
    height:45px;
    border:1px solid #e5e5e5;
    border-radius: 0;
    
}
</style>
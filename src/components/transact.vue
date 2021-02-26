<template>
  <div>
      <form @submit="submitForm"  action="" class="form-group transact-form p-2 ">
          <h2 class="text-center mt-4 mb-2">Transaction Details </h2>
          <p  class="text-center mt-4">Additional 4% charge is included for all transactions</p>
           <input list="bodies" name="body" id="body" v-model="bodyName" placeholder="What body are you paying to?" class="form-control col-lg-10 offset-lg-1 mt-4">
<span class="text-danger" v-if="!$v.bodyName.required && $v.bodyName.$dirty">Full name is required!</span>
<datalist id="bodies">
  <option value="UIMSA"></option>
  <option value="FASSA"></option>
 
</datalist>

        
 <input list="sessions" name="session" id="session" v-model="payment" placeholder="What session are you paying for?" class="form-control col-lg-10 offset-lg-1 mt-4">
<span class="text-danger" v-if="!$v.payment.required && $v.payment.$dirty">Please select a session</span>
<datalist id="sessions">
  <option value="1"></option>
  <option value="2"></option>
 
</datalist>

 <input list="purposes" name="purpose" id="purpose" v-model="purpose" placeholder="Purpose" class="form-control col-lg-10 offset-lg-1 mt-4 mb-4">
<span class="text-danger" v-if="!$v.purpose.required && $v.purpose.$dirty">Full name is required!</span>
<datalist id="purposes">
  <option value="for voting"></option>
  <option value="for participation"></option>
 
</datalist>

<input type="submit" value="continue to payment" class="form-control continue col-lg-10 offset-lg-1">
      </form>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
data(){
    return{
purpose:'',
    payment:'',
    bodyName:"" 
    }
    
},
validations:{
purpose:{
    required
},
payment:{
    required
},
bodyName:{
    required
}
},
methods:{
    submitForm(e){
         this.$v.$touch();
      if(this.$v.$invalid){
        console.log(`error`)
      }else{
          console.log('sucessful')
      }
      e.preventDefault();
      
    }
}
}
</script>

<style>
.transact-form{

    border:1px solid #e5e5e5;
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
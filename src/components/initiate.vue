<template>
  <div >
      <form v-if="detailsgotten" @submit="openTransaction" class="form-group initiate-form p-2" action="">
          <h2 class="text-center">Personal Information</h2>
          <input type="text" class="form-control col-lg-10 offset-lg-1 mt-4" placeholder="Name" v-model="name">
           <span class="text-danger" v-if="!$v.name.required && $v.name.$dirty">Full name is required!</span>
          
          <input type="email" class="form-control col-lg-10 offset-lg-1 mt-4" placeholder="Email" v-model="email">
          <span class="text-danger" v-if="(!$v.email.required || !$v.email.email)  && $v.email.$dirty">Valid email is required!</span>

          <input type="tel" class="form-control col-lg-10 offset-lg-1 mt-4" placeholder="Phone Number" v-model="phone">
             <span class="text-danger" v-if="!$v.phone.required && $v.phone.$dirty">Please enter mobile number</span>

          <input type="number" class="form-control col-lg-10 offset-lg-1 mt-4" placeholder="Level" v-model="level">
           <span class="text-danger" v-if="!$v.level.required && $v.level.$dirty">Please indicate current level</span>
         
         <input list="departments" name="department" v-model="department" id="department" placeholder="Department" class="form-control col-lg-10 offset-lg-1 mt-4">
  <span class="text-danger" v-if="!$v.department.required && $v.department.$dirty">Please select your department</span>
<datalist id="departments">
  <option value="Department of visual arts"></option>
  <option value="Department of health sciences"></option>
 
</datalist>

         <input list="genders" name="gender" v-model="gender" id="gender" placeholder="Gender" class="form-control col-lg-10 offset-lg-1 mt-4">
  <span class="text-danger" v-if="!$v.gender.required && $v.gender.$dirty">Please select your gender</span>
<datalist id="genders">
  <option value="Male"></option>
  <option value="Female"></option>
 
</datalist>
          <input type="submit" value="continue to transaction" class="form-control col-lg-10 offset-lg-1 mt-4 continue">
      </form>

      <transactForm v-else></transactForm>
  </div>
</template>

<script>
import { required,email } from 'vuelidate/lib/validators'
const transactForm= () => import(/* webpackChunkName: "transact" */ '../components/transact' );
export default {
  components:{
    transactForm
  },
data(){
    return{
    detailsgotten:true,
    name:'',
    email:'',
    phone:'',
    level:'',
    department:'',
    gender:'',
   
     }
},
validations:{
name:{
  required,
 
},
email:{
  required,
  email
},
phone:{
  required
},
level:{
  required
},
department:{
  required
},
gender:{
  required
},


},

methods:{
openTransaction(e){
  
 this.$v.$touch();
      if(this.$v.$invalid){
        console.log(`error`)
      }else{
this.detailsgotten=false

      }
e.preventDefault();

}
}
}
</script>

<style>
.initiate-form{

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


</style>
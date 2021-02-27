<template>
  <div class="col-lg-12 px-0 d-flex">
<sidenav class=col-lg-2></sidenav>
<div class="main-content col-lg-10 px-0">
  <greybar></greybar>
     <div class="heading d-flex col-lg-3 mt-2">
        <rectangle class="mt-2"></rectangle>
        <h1 class="mt-3 ml-2">Create Due</h1>
    </div>

    <form @submit="createDue"  class="due-form col-lg-6 offset-lg-3 mt-4 p-2 ">
<div class="form-group d-flex offset-lg-1 mt-4">
    <label class="col-lg-4 m1-4 mt-4" for="">Due Purpose</label>
    <input type="text" class="form-control col-lg-7 mt-4" v-model="duePurpose">

</div>
<span class="text-warning ml-4" v-if="!$v.duePurpose.required && $v.duePurpose.$dirty">Please enter due purpose.</span>
<div class="form-group d-flex offset-lg-1 mt-4">
    <label class="col-lg-4 m1- mt-4" for="">Amount</label>
    <input type="text" class="form-control col-lg-7 mt-4" v-model="amount">
</div>
<span class="text-warning ml-4" v-if="!$v.amount.required && $v.amount.$dirty">Please provide due amount.</span>

<div class="form-group d-flex offset-lg-1 mt-4">
    <label class="col-lg-4 m1-4 mt-4" for="">Closing Date</label>
    <input type="date" class="form-control col-lg-7 mt-4" v-model="date">
</div>

<span class="text-warning mb-2 ml-4" v-if="!$v.date.required && $v.date.$dirty">Please provide due amount.</span>

 <input type="submit" value="create" class="create col-lg-2 offset-lg-5 mt-4 p-1 form-control">
    </form>

   
</div>
  </div>
</template>

<script>
const sidenav= () => import(/* webpackChunkName: "about" */ '../components/bodynav' );
const greybar= () => import(/* webpackChunkName: "bar" */ '../components/bar' );
const rectangle= () => import(/* webpackChunkName: "rectangle" */ '../components/rectangle' )
import { required, numeric} from 'vuelidate/lib/validators'
export default {

components:{
        sidenav,
        greybar,
        rectangle
    },
    data(){
        return{  duePurpose:'',
        amount:'',
        date:''}
      
    },

    validations:{
        duePurpose:{
required
        }
    ,
    amount:{
        numeric,
        required
    },
    date:{
        required
    }
},
methods:{
    createDue(e){
        this.$v.$touch();
      if(this.$v.$invalid){
        console.log(`error`)
      }else{
this.$router.push({
  path:'/dues'
})
      }
      e.preventDefault();
      
    }
}
}
</script>

<style scoped>
.due-form{
    background-color: #0E4870;
    color:white;
   
    border-radius:10px;
}

.due-form label{
    font-size:1.3rem;
}

.create{
     background-color: #0E4870;
    color:white;
    border:none;
    font-size:1.4rem;
    font-weight:bold;
}
</style>
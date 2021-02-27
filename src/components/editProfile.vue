<template>
  <div>
    <h2>Account Information</h2>  

    <form action="" class="form-group  col-lg-12 mt-4">

      <div class="wrapping col-lg-12 px-0 d-flex">
      <div class="left col-lg-6">
         <div class="form-group col-lg-12 px-0  d-flex">
        <label class="col-lg-4" >Account Name</label>
        <input type="text" class="form-control">
      </div>  
      
      <div class="form-group col-lg-12 px-0  d-flex">
        <label class="col-lg-4" >Account Number</label>
        <input type="number" class="form-control">
      </div>


      </div>

      <div class="right  col-lg-6">
         
         <div class="form-group col-lg-12 px-0 d-flex">
        <label class="col-lg-2" >Bank</label>
        <input type="text" class="form-control">
      </div>  
      
      <div class="form-group col-lg-12 px-0 d-flex mt-4">
        <label class="mt-1 col-lg-2">BVN</label>
        <input  type="number" class="form-control mt-1">
      </div>

      </div>
    </div>
    <button class="col-lg-2 offset-lg-5 mt-2 save p-1" type="submit">Save</button>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h2{
  font-size: 1.5rem;
  color: #0E4870;
}

.save{
  background-color: #0E4870;
  color:white;
  border:none;
}
</style>
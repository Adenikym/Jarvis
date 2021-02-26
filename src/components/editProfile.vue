<template>
  <div>
    <h2>Account Information</h2>  

    <form action="" class="form-group d-flex ml-4 mt-4">
      <div class="left">
         <div class="form-group d-flex">
        <label >Account Name</label>
        <input type="text" class="form-control">
      </div>  
      
      <div class="form-group d-flex">
        <label >Account Number</label>
        <input type="number" class="form-control">
      </div>


      </div>

      <div class="right offset-lg-3">
         
         <div class="form-group d-flex">
        <label >Bank</label>
        <input type="text" class="form-control">
      </div>  
      
      <div class="form-group d-flex">
        <label >BVN</label>
        <input type="number" class="form-control">
      </div>

      </div>
     
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
</style>
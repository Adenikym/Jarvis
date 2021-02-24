<template>
  <div class="col-lg-12 px-0 d-flex">
<sidenav class=col-lg-2></sidenav>
<div class="main-content col-lg-10 px-0">
  <greybar></greybar>
     <div class="heading d-flex col-lg-3 mt-2">
        <rectangle class="mt-2"></rectangle>
        <h1 class="mt-3 ml-2">Active Dues</h1>
    </div>

    <div class="dues-table mt-4">

   

    <table class="table table-borderless ">
  <thead>
    <tr>
      <th scope="col">Date Created</th>
      <th scope="col">Due Purpose</th>
      <th scope="col">No. of payments made</th>
      <th scope="col">Amount</th>
        <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
 </div>

 <button class="create col-lg-2 offset-lg-4 mt-4 p-2">Create a New Due</button>
</div>
  </div>
</template>

<script>
const sidenav= () => import(/* webpackChunkName: "about" */ '../components/bodynav' );
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
.create{
    background-color: #0E4870;
    color:white;
    border:none;
}
</style>
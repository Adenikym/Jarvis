<template>
    <div class="col-lg-12 px-0 d-md-flex d-block">
       <mobilebar class="d-md-none d-block"></mobilebar>
        <div class="mobile-head d-md-none d-block col-12 px-0  mt-4"><p class="ml-4 mt-2"> Student Profile</p></div>
<sidenav class="col-lg-2  col-md-3 d-md-block d-none" ></sidenav>

<div class="main-content col-lg-10 px-0">
    <greybar  class="d-md-block d-none"></greybar>

    <div class="heading d-flex col-lg-3">
        <rectangle class="mt-2"></rectangle>
        <h1 class="mt-3 ml-2">Pay History</h1>
    </div>

    <div class="pay-table mt-4">
        <table class="table table-borderless">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Name</th>
      <th scope="col">Matric Number</th>
      <th scope="col">Department</th>
       <th scope="col">Level</th>
      <th scope="col">Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
         <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
       <td>the Bird</td>
      <td>@twitter</td>
    </tr>

      <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
       <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </div>
    <button class="download mt-3 col-lg-3 offset-lg-4 p-2 shadow">Download as Excel Sheet</button>
</div>

    </div>
</template>


<script>
const sidenav= () => import(/* webpackChunkName: "about" */ '../components/bodynav' );
const greybar= () => import(/* webpackChunkName: "bar" */ '../components/bar' );
const rectangle= () => import(/* webpackChunkName: "rectangle" */ '../components/rectangle' )
const mobilebar=() =>  import(/* webpackChunkName: "mobilebar" */ '../components/studentbar' )
export default {
    components:{
        sidenav,
        greybar,
        rectangle,
        mobilebar
    }
}
</script>

<style scoped>
.heading h1{
    color: #0E4870;
font-size:1.9rem;
}

.download{
    border:none;
    background-color:#0E4870 ;
    color:white;
}

.mobile-head{
   background: #407093;
   color:white;
   padding-top:1px;
   padding-bottom: 1px;
}
</style>
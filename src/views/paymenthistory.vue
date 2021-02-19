<template>
    <div class="col-lg-12 px-0">
<sidenav class=col-lg-2></sidenav>

    </div>
</template>


<script>
const sidenav= () => import(/* webpackChunkName: "about" */ '../components/bodynav' )
export default {
    components:{
        sidenav
    }
}
</script>
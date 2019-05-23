<template>
    <div>
        极简项目
        <headerCom></headerCom>
        <navbar></navbar>
        <router-view/>
    </div>
</template>
<script>
import headerCom from './../components/Header'
import navbar from './../components/Navbar'
export default {
    name: 'lightmodel',
    components: {
        headerCom:headerCom,
        navbar:navbar
    }
}
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <button @click="getData()">请求数据</button> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    // getData() {
    //   var api = '/master/login';

    //   this.$http.get(api).then((data) =>{
    //       console.log(data)
    //   }, (err)=>{
    //       console.log(err)
    //   })
    // }
  }
}
</script>

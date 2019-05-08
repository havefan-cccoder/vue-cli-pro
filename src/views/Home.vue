<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="getChild()">获取子组件</button>
    <hr>
    <HelloWorld msg="Welcome to Your Vue.js App" title="好的" :run="run" :home="this" ref="childcomponent"/>
    <!-- <button @click="getData()">请求数据</button> -->

    <br>
    <hr>
    <onecom />
    <twocom />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import onecom from '@/components/onecom.vue'
import twocom from '@/components/twocom.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    onecom,
    twocom
  },
  data () {
    return {
      message: '父组件的数据'
    }
  },
  methods: {
    run(val) {
      alert(val)
    },
    getChild() {
      alert(this.$refs.childcomponent.childdata);
      this.$refs.childcomponent.childFun();
    }
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

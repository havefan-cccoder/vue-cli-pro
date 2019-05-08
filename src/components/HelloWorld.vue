<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>首页子组件{{title}}</p>
    <button @click="run('123')">子组件里按钮</button>
    <button @click="getParent()">获取父组件</button>
    <p>{{childdata}}</p>

    <button @click="getParentData()">主动获取父组件数据</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    title: String,
    run: Function,
    home: Object // 把整个父组件传进来了
  },
  data () {
    return {
      childdata: '子组件数据'
    }
  },
  methods: {
    getParent(){
      this.run(145)
      //或者this.home.run(145)
    },
    childFun(){
      alert('childFn');
    },
    getParentData() {
      alert(this.$parent.message);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

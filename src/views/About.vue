<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>基本使用说明</p>
    <p>{{message}}</p>
    <input type="text" name="" id="" v-model="message">
    <p>{{objvalue.name}}</p>
    <hr>
    <br>
    <ul>
      <li v-for="item in list">{{item}}</li>
    </ul>
    <hr>
    <br>
    <ul>
      <li v-for="item in list1">{{item.title}}</li>
    </ul>
    <hr>
    <br>
    <ul>
      <li v-for="item in list2">
        {{item.cate}}
        <ol>
          <li v-for="i in item.lists">{{i.title}}</li>
        </ol>
      </li>
    </ul>
    <hr>
    <br>
    <div v-bind:title="title">这是有title的</div>
    <div v-bind:class="{'redclass':flag}">这是一个红色div</div>
    <ul>
      <li v-for="(item, key) in list" v-bind:class="{'redclass': key==0, 'blueclass': key==1}">{{item}}</li>
    </ul>
    <div class="box" v-bind:style="{'width': widthvalue}">
      这是一块
    </div>
    <hr>
    <br>
    <button v-on:click="getMsg()">获取</button>
    <button v-on:click="setMsg()">设置</button>
    <hr>
    <br>
    <input type="text" ref="userinfo" />
    <div ref="box">box</div>
    <button v-on:click="getInputValue()">获取input值,并改变div颜色</button>
    <hr>
    <br>
    <button data-aid="133" @click="eventFn($event)">事件获取自定义属性值</button>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      message:'哈哈',
      objvalue: {
        name: '张三'
      },
      list: [1, 2, 3],
      list1: [
        { title: 111 },
        { title: 222 },
        { title: 333 }
      ],
      list2: [
        {
          cate: '国内新闻',
          lists: [
            { title: 'aaa' },
            { title: 'bbb' },
            { title: 'ccc' }
          ]
        },
        {
          cate: '国外新闻',
          lists: [
            { title: 'AAA' },
            { title: 'BBB' },
            { title: 'CCC' }
          ]
        }
      ],
      flag: true,
      title: '这是title',
      widthvalue: '300px'
    }
  },
  methods: {
    getMsg() {
      alert(this.message)
    },
    setMsg() {
      this.message = '我是Vue'
    },
    getInputValue() {
      alert(this.$refs.userinfo.value);
      this.$refs.box.style.background = "red";
    },
    eventFn(e) {
        console.log(e);
        alert(e.srcElement.dataset.aid);
    }
  }
}
</script>

<style lang="less" scoped>
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
.redclass{
  color: red;
}
.blueclass{
  color: blue;
}
.box{
  height: 100px;
  background: #42b983;
}
</style>

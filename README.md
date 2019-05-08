# demo2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 父组件向子组件传参——
### 父组件里：
    传递：
    <HelloWorld msg="Welcome to Your Vue.js App" title="好的" :run="run" :home="this" />
    定义：
    methods: {
        run(val) {
            alert(val)
        }
    }
### 子组件里：
    接收：
    props: {
        msg: String,
        title: String,
        run: Function,
        home: Object // 把整个父组件传进来了
    },
    使用:
    <h1>{{ msg }}</h1>
    <p>首页子组件{{title}}</p>
    <button @click="run('123')">子组件里按钮</button><!--这里直接调用父组件的方法-->
    <button @click="getParent()">获取父组件</button><!--这里是获得了整个父组件后，在这个方法里就能直接调用父组件的方法-->

    methods: {
        getParent(){
        this.run(145)
        //或者this.home.run(145)
        }
    }

## 父组件向子组件传参（子组件主动获取）——
this.$parent.属性，this.$parent.方法


## 子组件向父组件传参（父组件主动获取）——
### 父组件里:
    接收：
    <HelloWorld ref="childcomponent" />
    使用：
    <button @click="getChild()">获取子组件</button>

    methods: {
        getChild() {
            alert(this.$refs.childcomponent.childdata);
            this.$refs.childcomponent.childFun();
        }
    }
### 子组件里：
    定义：
    data () {
        return {
            childdata: '子组件数据'
        }
    },
    methods: {
        childFun(){
            alert('childFn');
        }
    }


## 子组件向父组件传参以及非父子组件之间传值——
1.新建js文件，import vue，用new实例化Vue，然后export
```
import Vue from 'vue';

var VueEvent  = new Vue();

export default VueEvent;
```
2.需要广播的组件里，先import 刚才那个实例，然后$emit
```
import VueEvent from '../model/VueEvent.js'

methods: {
        sendData() {
            VueEvent.$emit('to-about', this.message);
        }
}
```
3.需要接收数据的组件里，$on
```
VueEvent.$on('to-about', function(data){
    alert(data)
})
```
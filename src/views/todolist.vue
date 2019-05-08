<template>
    <div id="todolist">
        <p>待办事项</p>
        <input type="text" v-model="todo" @keyup="doAdd($event)" />
        <button @click="doAdd()">增加</button>
        <br>
        <hr>
        <h1>正在进行</h1>
        <ul>
            <li v-for="(item, key) in list" v-if="!item.checkedflag">
                <input type="checkbox" name="" id="" v-model="item.checkedflag" @change="saveList()">
                {{item.title}}
                <button @click="delData(key)">删除</button>
            </li>
        </ul>
        <h1>已完成</h1>
        <ul>
            <li v-for="(item, key) in list" v-if="item.checkedflag">
                <input type="checkbox" name="" id="" v-model="item.checkedflag" @change="saveList()">
                {{item.title}}
                <button @click="delData(key)">删除</button>
            </li>
        </ul>

    </div>
</template>

<script>
import storage from '../model/storage.js'

export default {
    name: 'todolist',
    data () {
        return {
            todo: '',
            list: []
        }
    },
    methods: {
        doAdd(e) {
            if(e && e.keyCode == 13 || !e){ // %%%判断回车事件%%%
                this.list.push({
                    title: this.todo,
                    checked: false
                });
                this.todo = ''; 

                storage.set('list', this.list); // %%%使用封装的组件%%%
                // localStorage.setItem('list', JSON.stringify(this.list));
            }
            
        },
        delData(_key) {
            this.list.splice(_key,1);
            storage.set('list', this.list);
        },
        saveList() {
            storage.set('list', this.list);
            // localStorage.setItem('list', JSON.stringify(this.list));
        }
    },
    mounted () {//生命周期函数
        var list = storage.get('list');
        // var list = JSON.parse(localStorage.getItem('list'));
        if(list){
            this.list = list;
        }
    }
}
</script>

<style lang="less" scoped>
ul {
  list-style-type: none;
  padding: 0;
  text-align: left;
}
li {
//   display: inline-block;
  margin: 0 10px;
}
</style>

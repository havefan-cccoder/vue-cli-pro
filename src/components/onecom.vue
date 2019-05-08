<template>
    <div>
        <p>{{message}}</p>
        <button @click="sendData()">向子组件2传值</button>
    </div>
</template>

<script>
import VueEvent from '../model/VueEvent.js'

export default {
    name: 'onecom',
    data () {
        return {
            message: '子组件1'
        }
    },
    methods: {
        sendData() {
            VueEvent.$emit('to-about', this.message);
        }
    }
}
</script>

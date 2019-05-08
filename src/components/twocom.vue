<template>
    <div>
        <p>子组件二</p>
    </div>
</template>

<script>
import VueEvent from '../model/VueEvent.js'

export default {
    name: 'twocom',
    mounted () {
        VueEvent.$on('to-about', function(data){
            alert(data)
        })
    }
}
</script>


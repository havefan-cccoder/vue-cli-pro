<template>
    <div class="outerbox">
        <p>计算方法名称组件？：加减乘除</p>
        <div>
            Round:{{rounds}}&nbsp;&nbsp;Scores:{{scores}}%&nbsp;&nbsp;Wrong:{{wrongs}}
        </div>
        <label >{{num1}}</label>
        +
        <label>{{num2}}</label>
        =
        <button class="box" v-if="!tureanswer" @click="showAnswer()">?</button>
        <button v-if="tureanswer" class="reusltbox">{{sumvvalue}}</button>
        <button v-if="tureanswer" class="rightanswer"  @click="chooseResult('y')">√</button>
        <button v-if="tureanswer" class="wronganswer"  @click="chooseResult('n')">×</button>
    </div>
</template>

<script>
export default {
    name: 'calculator',
    data () {
        return {
            scores:0,
            rounds:0,
            num1: 1,
            num2: 2,
            tureanswer: false,
            wrongs: 0,
            sumvvalue: 0
        }
    },
    // mounted () {
        
    // },
    computed: {
        sumval: function() {
            return this.num1 + this.num2
        }
    },
    methods: {
        chooseResult(val) {
            this.tureanswer = false;
            this.rounds++;
            if (val === 'n' && this.sumvvalue === this.sumval ||
                val === 'y' && this.sumvvalue != this.sumval) {
                this.wrongs++;
                this.scores = (this.rounds - this.wrongs)/this.rounds*100;
            }else{
                this.scores = (this.rounds - this.wrongs)/this.rounds*100;
            }
            var NUM = new Number(this.scores);
            this.scores = NUM.toFixed(2);
            //必须先计算分数再随机生成要计算的数，不然computed会被更改
            this.num1 = Math.floor(Math.random()*1000);
            this.num2 = Math.floor(Math.random()*1000);
        },
        showAnswer() {
            this.tureanswer = true;
            var num = Math.floor(Math.random()*10);
            if (this.rounds % num === 0) {
                this.sumvvalue = this.sumval;
            }else{
                this.sumvvalue = Math.floor(Math.random()*1000);
            }
        }
    },
    filters: {
        getPercent(oval, nval) {
            
        }
    }
}
</script>

<style scoped>
.outerbox{
    width: 320px;
    margin: 0 auto;
    text-align: left;
}
button{
    outline: none;
    border: none;
    font-size: 20px;
    margin-right: 10px;
}
.box{
    width: 70px;
    height: 50px;
    line-height: 50px;
    background: wheat;
    cursor: pointer;
}
.rightanswer{
    width: 30px;
    height: 30px;
    line-height: 30px;
    background: green;
    color: #fff;
    cursor: pointer;
}
.wronganswer{
    width: 30px;
    height: 30px;
    line-height: 30px;
    background: red;
    color: #fff;
    cursor: pointer;
}
.reusltbox{
    width: 70px;
    height: 50px;
    line-height: 50px;
    display: inline-block;
    background: #ddd;
    cursor: inherit;
}
</style>


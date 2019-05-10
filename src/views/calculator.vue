<template>
    <div class="outerbox">
        <!--借鉴-->
        <div class="choose-type">
            <input type="radio" id="addition" name="arithmetic-type" value="1" v-model="arithmeticType">
            <label for="addition">addition</label>
            <input type="radio" id="subtraction" name="arithmetic-type" value="2" v-model="arithmeticType">
            <label for="subtraction">subtraction</label>
            <input type="radio" id="multiplication" name="arithmetic-type" value="3" v-model="arithmeticType">
            <label for="multiplication">multiplication</label>
            <input type="radio" id="division" name="arithmetic-type" value="4" v-model="arithmeticType">
            <label for="division">division</label>
        </div>
        <div class="countbox">
            <button class="resetbtn" @click="resetData()">重置</button>
            Round:{{rounds}}&nbsp;&nbsp;Scores:{{scores | getDecimal}}%&nbsp;&nbsp;Wrong:{{wrongs}}
        </div>
        <label >{{num1}}</label>
        {{operations}}
        <label>{{num2}}</label>
        =
        <button class="box" v-if="!tureanswer" @click="showAnswer()">?</button>
        <button v-if="tureanswer" class="reusltbox">{{sumvvalue | getDecimal}}</button>
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
            num1: Math.floor(Math.random()*1000),
            num2: Math.floor(Math.random()*1000),
            tureanswer: false,
            wrongs: 0,
            sumvvalue: 0,
            // 借鉴
            arithmeticType: 1,
            properties: {
                1: { operation: '+', f: (x, y) => x + y},
                2: { operation: '-', f: (x, y) => x - y},
                3: { operation: '×', f: (x, y) => x * y},
                4: { operation: '÷', f: (x, y) => x / y},
            }
        }
    },
    // mounted () {
    //     this.num1 = Math.floor(Math.random()*1000);
    //     this.num2 = Math.floor(Math.random()*1000);
    // },
    computed: {
        // 借鉴
        sumval: function() {
            return this.properties[this.arithmeticType].f(this.num1, this.num2)
        },
        operations: function() {
            return this.properties[this.arithmeticType].operation
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
            // var NUM = new Number(this.scores);
            // this.scores = NUM.toFixed(2);
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
        },
        resetData() {
            this.scores = 0;
            this.rounds = 0;
            this.num1 =  Math.floor(Math.random()*1000);
            this.num2 =  Math.floor(Math.random()*1000);
            this.tureanswer =  false;
            this.wrongs =  0;
            this.sumvvalue =  0;
        }
    },
    filters: {
        getDecimal(oval) { // 分数取两位小数
            var NUM = new Number(oval);
            return NUM.toFixed(2)
        }
    }
}
</script>

<style scoped>
.countbox{
    margin-bottom: 10px;
    margin-top: 10px;
    text-align: center;
}
.outerbox{
    width: 420px;
    margin: 0 auto;
    text-align: left;
}
button{
    outline: none;
    border: none;
    font-size: 20px;
    border-radius: 5px;
    margin-right: 10px;
}
.box{
    width: 75px;
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
    width: 75px;
    height: 50px;
    line-height: 50px;
    display: inline-block;
    background: #ddd;
    cursor: inherit;
}
.resetbtn{
    padding: 5px 10px;
    background: #407ccf;
    color: #fff;
    font-size: 14px;
}
/* 借鉴  */
.choose-type input[name=arithmetic-type] {
	position: absolute;
	visibility: hidden;
}

.choose-type label {
    font-size: 20px;
    color: skyblue;
    margin: 0.3em;
	letter-spacing: 0.02em;
    position: relative;
    transition: 0.3s;
}

.choose-type label:not(:first-of-type)::before {
	content: '|';
	position: absolute;
	color: skyblue;
	left: -0.5em;
	filter: opacity(0.6);
}

.choose-type label:hover {
	color: deepskyblue;
	cursor: pointer;
}

.choose-type input[name=arithmetic-type]:checked + label {
	text-transform: capitalize;
    color: deepskyblue;
	border-style: solid;
	border-width: 0 0 0.1em 0;
}
</style>


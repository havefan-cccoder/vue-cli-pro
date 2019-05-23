<template>
    <div>
        用户名：
        <input type="text" name="" id="">
        密码：
        <input type="text" name="" id="">
        <button @click="login()">登录</button>
    </div>
</template>

<script>
export default {
    name: 'login',
    methods: {
        login() {
            this.$router.push('/start')
        }
    }
}
</script>


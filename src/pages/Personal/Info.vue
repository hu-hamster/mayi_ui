<template>
    <q-page>
        <div class="title">修改用户信息</div>
        <q-separator></q-separator>
        <div style="margin-top: 12px;">
            <img src="~/assets/daily/star.png"/>
            <a class="subtitle">用户名</a>
            <q-input class="input"
                color="grey"
                outlined
                type="text"
                placeholder="用户名" 
                v-model="userName">
            </q-input>
        </div>
        <div style="margin-top: 12px;">
            <img src="~/assets/daily/star.png"/>
            <a class="subtitle">邮箱</a>
            <q-input class="input"
                color="grey"
                outlined
                type="text"
                placeholder="邮箱"
                :hint="hint"
                v-model="email">
            </q-input>
        </div>
        <div>
            <q-btn class="btn" color="blue" label="提交" @click="changeUserInfo"></q-btn>
        </div>
    </q-page>
</template>
<script src="../../js/personal/info.js" language="JavaScript" type="text/javascript"></script>

<style scoped>
@import "../../css/personal.css";
</style>
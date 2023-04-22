<template>
    <q-page>
        <div class="title">修改用户密码</div>
        <q-separator></q-separator>
        <div style="margin-top: 12px;">
            <img src="~/assets/daily/star.png"/>
            <a class="subtitle">旧密码</a>
            <q-input class="input"
                color="grey"
                outlined
                type="password"
                v-model="oldPassword"
                placeholder="旧密码">
            </q-input>
        </div>
        <div style="margin-top: 12px;">
            <img src="~/assets/daily/star.png"/>
            <a class="subtitle">新密码</a>
            <q-input class="input"
                color="grey"
                outlined
                type="password"
                v-model="newPassword"
                placeholder="新密码">
            </q-input>
        </div>
        <div style="margin-top: 12px;">
            <img src="~/assets/daily/star.png"/>
            <a class="subtitle">确认新密码</a>
            <q-input class="input"
                color="grey"
                outlined
                type="password"
                v-model="reNewPassword"
                placeholder="确认新密码">
            </q-input>
        </div>
        <p 
            style="margin-left: 12px; 
            margin-top:5px;
            font-size: 16px; 
            color: red;">
            {{ hint }}
        </p>
        <div>
            <q-btn class="btn" color="blue" label="提交" @click="changePassword"></q-btn>
        </div>
    </q-page>
</template>

<script src="../../js/personal/security.js" language="JavaScript" type="text/javascript"></script>


<style scoped>
@import "../../css/personal.css";
</style>
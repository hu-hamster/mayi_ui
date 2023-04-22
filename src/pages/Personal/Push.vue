<template>
    <q-page>
        <div class="title">添加推送设置</div>
        <q-separator></q-separator>
        <select class="select" v-model="selectIndex" @change="getPushDetail">
            <option v-for="(elem, index) in pushType" :value="index">{{elem.type}}</option>
        </select>
        <div v-for="(value, key) in pushType[selectIndex].content">
            <div style="margin-top: 12px;">
                <img src="~/assets/daily/star.png"/>
                <a class="subtitle">{{key}}</a>
                <q-input 
                    v-model="modelValues[selectIndex][key]"
                    class="input"
                    style="width:500px"
                    color="grey"
                    outlined
                    type="text"
                    :placeholder="key"
                    :hint="value">
                </q-input>
            </div>
        </div>
        <q-btn v-if="selectIndex > 0" class="button" @click="changePushInfo">提交</q-btn>
    </q-page>
</template>

<script src="../../js/personal/push.js" language="JavaScript" type="text/javascript"></script>

<style scoped>
@import "../../css/personal.css";
</style>
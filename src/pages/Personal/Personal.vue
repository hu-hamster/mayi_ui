<template>
    <q-page>
        <div class="q-gutter-y-md" style="max-width: 600px">
            <q-tabs
            class="text-grey"
            active-color="dark"
            align="justify"
            >   
                <q-tab name="info" label="信息设置"></q-tab>
                <q-tab name="security" label="安全设置"></q-tab>
                <q-tab name="push" label="推送设置"></q-tab>
                <q-tab name="about" label="关于"></q-tab>
            </q-tabs>
        </div>
        <q-page-container>
            <router-view ></router-view>
        </q-page-container>
    </q-page>
</template>

<script src="../../js/personal.js" language="JavaScript" type="text/javascript"></script>
<style scoped>

</style>
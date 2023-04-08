<template>
    <q-layout view="hHh Lpr lFf">
        <q-header>
            <q-toolbar style="background-color: #f1f1f1" class="shadow-2 text-secondary">
                <q-btn flat dense icon="menu" class="q-mr-sm" @click="drawer = !drawer"></q-btn>
                <q-space></q-space>
                <q-btn-dropdown flat round no-caps dropdown-icon="expand_more" style="color: #222222;"
                    icon="img:https://cdn.quasar.dev/logo-v2/svg/logo.svg">
                    <q-list>
                        <q-item clickable v-close-popup @click="onPersonalClick">
                            <q-item-section>
                                <q-item-label style="font-size: 15px">
                                    个人中心
                                </q-item-label>
                            </q-item-section>
                        </q-item>
                        <q-item clickable v-close-popup @click="onQuitClick">
                            <q-item-section>
                                <q-item-label style="font-size: 15px">
                                    退出登录
                                </q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-list>
                </q-btn-dropdown>

            </q-toolbar>

        </q-header>
        <q-page-container>
            <router-view :drawer="drawer"></router-view>
        </q-page-container>
    </q-layout>
</template>

<script src="../js/userlayout.js" language="JavaScript" type="text/javascript"></script>
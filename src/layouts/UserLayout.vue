<template>
    <q-layout view="hHh Lpr lFf">
        <q-header>
            <q-toolbar style="background-color: #f1f1f1" class="shadow-2 text-secondary">
                <q-btn flat dense icon="menu" class="q-mr-sm"></q-btn>
                <q-space></q-space>
                <q-btn flat round>
                    <q-avatar>
                        <img alt="Avatar" src="~assets/layout/avatar.jpg">
                    </q-avatar>
                </q-btn>
                
            </q-toolbar>
            
        </q-header>
        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script src="../js/userlayout.js" language="JavaScript" type="text/javascript"></script>
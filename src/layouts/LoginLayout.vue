<template>
    <q-layout view="lHh Lpr lFf">
      <q-header style="height: 64px;">
        <q-toolbar>
          <img
            alt="A-Tune logo"
            src="~assets/layout/logo2.png"
            style="padding-left: 16px; width:130px"
            @click="onMainClick"
          />
          <!-- <q-toolbar-title class="text-dark"> A-Tune </q-toolbar-title> -->
          <div class="button-group">
            <q-btn
              class="btn-loginlayout"
              flat
              label="首页"
              @click="onMainClick"
            ></q-btn>
          </div>
        </q-toolbar>
      </q-header>
      <q-page-container>
        <router-view></router-view>
      </q-page-container>
    </q-layout>
  </template>
  
  <script src="../js/loginlayout.js" language="JavaScript" type="text/javascript"></script>
  
  <style scoped>
  @import "../css/loginlayout.css";
  </style>
  
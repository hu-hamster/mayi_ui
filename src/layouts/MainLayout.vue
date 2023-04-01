<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar style="background-color: #f1f1f1">
        <img alt="Mayi logo" src="~assets/layout/logo2.png" 
            style="padding-left: 16px; width: 130px;"/>
        <div style="position: absolute; right: 0%;">
          <q-btn
              flat
              style="
                color: #000000;
                font-size: 16px;
                margin: 0px;
                padding: 0px 24px;
                height: 32px;
                text-align: right; 
              "
              label="登录"
              size="sm"
              @click="onLoginClick"
            ></q-btn>
            <q-btn
              flat
              style="
                background: #3681de;
                color: white;
                margin-right: 32px;
                height: 32px;
                width: 64px;
                font-size: 16px;
                text-align: right; 
              "
              label="注册"
              size="sm"
              @click="onRegisterClick"
            ></q-btn>
          </div>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script src="../js/mainlayout.js" language="JavaScript" type="text/javascript"></script>

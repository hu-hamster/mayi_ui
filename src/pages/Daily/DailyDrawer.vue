<template>
    <q-page>
        <!-- 侧边栏 -->
        <q-drawer 
          v-model="draw"
          show-if-above
          :width="200"
          :breakpoint="500"
        >
        <q-scroll-area class="fit">
            <q-list class="menu-list">
              <q-item clickable v-ripple @click="OnTodayClick">
                <q-item-section avatar>
                  <q-icon name="today"></q-icon>
                </q-item-section>

                <q-item-section>
                  今天
                </q-item-section>
              </q-item>
  
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="preview"></q-icon>
                </q-item-section>
  
                <q-item-section>
                  预览
                </q-item-section>
              </q-item>
  
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="edit"></q-icon>
                </q-item-section>
  
                <q-item-section>
                  脚本管理
                </q-item-section>
              </q-item>
  
              <q-item clickable v-ripple @click="OnSystemClick">
                <q-item-section avatar>
                  <q-icon name="settings"></q-icon>
                </q-item-section>
  
                <q-item-section>
                  系统设置
                </q-item-section>
              </q-item>
            </q-list>
          </q-scroll-area>
        </q-drawer>
        <q-page-container style="margin:0 auto; padding-left: 0; padding-top: 0">
            <router-view ></router-view>
        </q-page-container>
    </q-page>
</template>

<script src="../../js/daily/dailydrsoawer.js" language="JavaScript" type="text/javascript"></script>


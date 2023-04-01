<template>
    <q-page>
        <!-- 侧边栏 -->
        <q-drawer 
        v-model="drawer"
        show-if-above

        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"

        :width="200"
        :breakpoint="500"
        bordered
        class="bg-grey-3"
        >
        <q-scroll-area class="fit">
            <q-list  class="menu-list">
              <q-item clickable v-ripple>
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
  
              <q-item clickable v-ripple>
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

    
        <q-page-container>
            <router-view></router-view>
        </q-page-container>
    </q-page>
</template>

<script>
import "@quasar/extras/material-icons-sharp"

export default {
    data() {
        return {
            drawer: false,
            miniState: true,
        }
    }
}
</script>
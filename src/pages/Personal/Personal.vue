<template>
    <q-page>
        <div class="q-gutter-y-md" style="max-width: 600px">
            <q-tabs
            v-model="selectedTab"
            class="text-grey" 
            active-color="dark"
            align="justify"    
            >   
                <q-tab v-for="tab in tabs" :name=tab.name :label=tab.label></q-tab>
            </q-tabs>

            
        </div>
        <q-tab-panels v-model="selectedTab">
            <q-tab-panel v-for="(tab, index) in tabs" :key="index" :name="tab.name">
              <router-view :name="tab.name" />
            </q-tab-panel>
        </q-tab-panels>
       
        <!-- <q-page-container>
            <router-view ></router-view>
        </q-page-container> -->
    </q-page>
</template>

<script src="../../js/personal.js" language="JavaScript" type="text/javascript"></script>

<style scoped>
@import "../../css/personal.css";
</style>
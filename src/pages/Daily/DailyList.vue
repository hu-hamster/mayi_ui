<template>
  <q-page>
    <div class="row">
      <div class="col-sm-6 col-md-4 col-lg-3" v-for="task in taskList" :key="task.ID">
          <q-card bordered class="my-card">
            <q-card-section>     
              <div class="row no-wrap items-center">
                <div class="col text-h6 ellipsis">
                  {{ task.Name }}
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                  <q-checkbox color="blue" v-model=task.Finished></q-checkbox>
                </div>
              </div>
      
              <q-rating v-model="stars" :max="5" size="32px"></q-rating>
            </q-card-section>
      
            <q-card-section class="q-pt-none">
              <div class="text-subtitle1">
                {{ task.Description }}
              </div>
              <div class="text-caption text-grey">
                {{ taskType[task.Type] }}
              </div>
            </q-card-section>
      
            <q-separator></q-separator>
    
            <q-card-actions>
                <q-btn flat round icon="event"></q-btn>
                <q-btn flat>
                  {{ task.Date }}
                </q-btn>
              </q-card-actions>
          </q-card>
      </div>
      <div class="fixed-button">
        <q-btn push color="black" size="lg" @click="addNewTask">
            <div class="items-center no-wrap">
              <q-icon name="add"></q-icon>
              <br>
              <div class="text-center">
                添加任务
              </div>
            </div>
          </q-btn>
      </div>

      
    </div>
  </q-page>
</template>
  
<script src="../../js/daily/dailylist.js" language="JavaScript" type="text/javascript"></script>

<style scoped>
@import "../../css/dailylist.css";
</style>
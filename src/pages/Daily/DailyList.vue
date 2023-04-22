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
              {{ taskType[task.Type - 1] }}
            </div>
          </q-card-section>
    
          <q-separator></q-separator>
  
          <q-card-actions>
            <div class="q-pa-md select-time">
              <q-input filled v-model="task.Date" style="background-color:#DDDDDD">
                <template v-slot:prepend>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                      <q-date v-model="task.Date" color="blue" text-color="black" mask="YYYY-MM-DD HH:mm">
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup label="Close" color="blue" flat></q-btn>
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
          
                <template v-slot:append>
                  <q-icon name="access_time" class="cursor-pointer">
                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                      <q-time v-model="task.Date" color="blue" text-color="black" mask="YYYY-MM-DD HH:mm" format24h>
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup label="Close" color="blue" flat></q-btn>
                        </div>
                      </q-time>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
              <q-btn flat round icon="event"></q-btn>
              <q-btn flat>
                {{ task.Date }}
              </q-btn>
            </q-card-actions>
        </q-card>
      </div>
      <div class="fixed-button">
        <q-btn push color="black" size="lg" @click="addNewTaskCard">
            <div class="items-center no-wrap">
              <q-icon name="add"></q-icon>
              <br>
              <div class="text-center">
                添加任务
              </div>
            </div>
          </q-btn>
      </div>
      <div id="fade" class="black_overlay"></div>
      <div>
        <q-card id="card_addTask" class="pop-win">
          <q-card-section class="row" style="justify-content: space-between">
            <div class="card-title">添加任务</div>
            <div class="close-card" @click="closeWinpass"></div>
          </q-card-section>
          <div>
            <div class="addTask-info">
              <img src="~/assets/daily/star.png"/>
              <a>任务名称</a>
              <input
                class="info-input"
                placeholder="--请输入--"
                v-model="cardTask.name"
              />
            </div>
          </div>
          <div>
            <div class="addTask-info">
              <img src="~/assets/daily/star.png"/>
              <a>任务类型</a>
              <select class="info-input" v-model="cardTask.taskType">
                <option v-for="(type, index) in taskType" :value="index">{{type}}</option>
              </select>
            </div>
          </div>
          <div v-show="cardTask.taskType == 1">
            <div class="addTask-info">
              <img src="~/assets/daily/star.png"/>
              <a>推送类型</a>
              <select class="info-input" v-model="cardTask.pushType">
                <option v-for="(type, index) in pushType" :value="index">{{type}}</option>
              </select>
            </div>
          </div>
          <div>
            <div class="addTask-info">
              <a style="margin-left: 50px;">任务描述</a>
              <input
                class="info-input"
                placeholder="--请输入--"
                v-model="cardTask.description"
              />
            </div>
          </div>
          <div>
            <div class="q-pa-md select-time">
              <q-input filled v-model="date" style="background-color:#DDDDDD">
                <template v-slot:prepend>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                      <q-date v-model="date" color="blue" text-color="black" mask="YYYY-MM-DD HH:mm">
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup label="Close" color="blue" flat></q-btn>
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
          
                <template v-slot:append>
                  <q-icon name="access_time" class="cursor-pointer">
                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                      <q-time v-model="date" color="blue" text-color="black" mask="YYYY-MM-DD HH:mm" format24h>
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup label="Close" color="blue" flat></q-btn>
                        </div>
                      </q-time>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
          </div>
          <p style="margin-left: 50px; margin-top: 5px ; font-size: 17px; color: red;">{{ hint }}</p>
          
          <!-- --------------------------- -->
          <div class="row" style="position: absolute; bottom: 0px; left: 28%">
            <button class="button-add-chart-no" @click="closeWinpass">取消</button>
            <button class="button-add-chart-yes" @click="addNewTask">添加</button>
          </div>
        </q-card>
      </div>

      
    </div>
  </q-page>
</template>
  
<script src="../../js/daily/dailylist.js" language="JavaScript" type="text/javascript"></script>

<style scoped>
@import "../../css/dailylist.css";
</style>
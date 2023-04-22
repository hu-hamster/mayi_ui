<template>
    <div>
      <q-date v-model="date" />
  
      <div class="q-mt-md">
        <q-btn label="Add Time" @click="showTimePicker" color="primary" />
      </div>
  
      <q-popup-proxy
        ref="timePicker"
        transition-show="scale"
        transition-hide="scale"
      >
        <q-time v-model="time" />
      </q-popup-proxy>
    </div>
  </template>
  
  <script>
  import { QDate, QBtn, QPopupProxy, QTime } from 'quasar'
  
  export default {
    components: {
      QDate,
      QBtn,
      QPopupProxy,
      QTime
    },
  
    data () {
      return {
        date: '',
        time: ''
      }
    },
  
    methods: {
      showTimePicker () {
        this.$refs.timePicker.show()
      }
    }
  }
  </script>
  
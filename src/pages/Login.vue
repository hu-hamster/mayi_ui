<template>
    <q-page>
        <div class="row" style=" justify-content: center">
            <div class="col-12  row" style="width: 1920px">
              <div class="col" style="user-select: none;">
                <img alt="A-Tune piciure" src="../assets/layout/logo1.png"
                  style="margin: 100px 156px 0px 266px" />
                <br />
                <a class="text-pic-bottom">码忆是一款方便您生活的任务清单</a>
              </div>
              <q-card class="login-card">
                <q-card-section>
                  <q-form class="q-gutter-md">
                    <div class="text-login text-center" style="user-select: none;">登录</div>
                    <input class="login-input" placeholder="请输入邮箱" type="email" v-model="user.email"/>
                    <input class="login-input" placeholder="请输入密码" type="password" v-model="user.password"/>
                    <p class="login-hint">{{ hint }}</p>
                    <div class="row" style="justify-content: space-between; margin-bottom: 32px">
                      <div>
                        <input style="margin: 0px 8px 0px 24px" type="checkbox" value="" />记住密码
                      </div>
                      <div class="login-tips">忘记密码？</div>
                    </div>
                    <div>
                      <q-btn class="btn-login" unelevated label="登录" @click="onLoginClick" />
                      <div class="text-right row" style="margin-bottom: 40px; justify-content: flex-end">
                        <div style="font-size: 14px">还没账号？</div>
                        <div style="color: #3781de; font-size: 14px; margin-right: 24px" @click="onRegisterClick">
                          点击注册
                        </div>
                      </div>
                    </div>
                  </q-form>
                </q-card-section>
              </q-card>
            </div>
          </div>
    </q-page>
</template>

<script src="../js/login.js" language="JavaScript" type="text/javascript"></script>

<style scoped>
@import "../css/login.css";
</style>
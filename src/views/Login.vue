<script setup>
import {reactive,ref} from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const loginForm = reactive({
  username: '',
  password: ''
})
const loginFormRef = ref()
const loginRules = reactive({
  username: [
    {
      required: true,message:"请输入用户名",trigger:"blur",
    }
  ],
  password: [
    {
      required: true,message:"请输入密码",trigger:"blur",
    }
  ]
})

const router = useRouter()
const submitForm = ()=>{
  //1校验表单
  loginFormRef.value.validate(valid => {
    console.log(valid)
    if (valid) {
      //2拿到表单内容提交后台
      console.log(valid)
      //3设置token
      localStorage.setItem("token","kerwin");
      axios.get("/users").then((res)=>{
        console.log(res.data)
      })
      router.push('/index')
    }
  })


}

const options = {
  //背景色
  background: {
    color: {
      value: '#2d3a4b'
    }
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push'
      },
      onHover: {
        enable: true,
        mode: 'repulse'
      },
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40
      },
      push: {
        quantity: 4
      },
      repulse: {
        distance: 200,
        duration: 0.4
      }
    }
  },
  particles: {
    // 点的颜色
    color: {
      value: '#ffffff'
    },
    // 线的颜色
    links: {
      color: '#ffffff',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: 'bounce',
      random: false,
      speed: 6,
      straight: false
    },
    number: {
      density: {
        enable: true,
      },
      value: 80
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: 'circle'
    },
    size: {
      value: { min: 1, max: 5 }
    }
  },
  detectRetina: true
}
</script>

<template>
  <div>
    <vue-particles
      id="tsparticles"
      :options="options"
    />
    <div class="formContainer">
      <h3>智慧课栈</h3>
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        status-icon
        :rules="loginRules"
        label-width="auto"
        class="loginForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password" autocomplete="off" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">
            登录
          </el-button>
        </el-form-item>
      </el-form>

    </div>
    <button @click="handleLogin" >login</button>
  </div>
</template>

<style scoped>
.formContainer{
  width: 500px;
  height: 300px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background:rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
  padding: 20px;

  h3{
    font-size: 30px;
  }
  .loginForm{
    margin-top: 20px;
  }
}
:deep.el-form-item_label{
  color:white;
}
</style>

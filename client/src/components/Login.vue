<template>
  <div >
    <div class="card shadow" id="loginForm">
      <div class="card-body">
        <input v-model="email" class="card-item" type="text" placeholder="Your e-mail" > <br> <br>
        <input v-model="password" class="card-item" type="password" placeholder="Your password"> <br> <br>
        <input type="button" @click="login(email, password)" class="btn btn-success" value="Login">
      </div>
        <p>Don't have account? Please regist <a href="#">here.</a></p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data: () => {
      return {
        email: '',
        password: '',
        message: '',
        token: ''
      }
    },

    methods: {
      login: (email, password) => {
        let self = this;
        axios({
          method: 'post',
          url: 'http://localhost:3012/users/signin',
          data: { email, password }
        })
        .then(result => {
          console.log(result.data.message);
          console.log(result.data.token);
          self.message = result.data.message;
          self.token = result.data.token;
        })
        .catch(err => {
          console.log(err);
        })
      }
    }
  }
</script>

<style>
  #loginForm {
    border-radius: 0;
  }

  p {
    font-size: 12px;
  }

  p a {
    color: #00CC7F;
  }
</style>

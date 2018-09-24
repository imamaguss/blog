<template>
  <div>
    <div class="row">
      <div class="col col-md-7"></div>
      <div class="col col-md-5">
        <div class="card shadow" id="loginForm">
          <div class="card-body">
            <input v-model="email" class="card-item" type="text" placeholder="Your e-mail" > <br> <br>
            <input v-model="password" id="x" class="card-item" type="password" placeholder="Your password"> <br> <br>
            <input type="button" @click="login(email, password)" class="btn btn-success" id="login-btn" value="Login">
          </div>
            <p>Don't have account? Please regist <a href="/register">here.</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Login',
    data () {
      return {
        email: '',
        password: '',
        message: '',
      }
    },
    watch: {
      // password () {
      //   if (this.password.length < 6) {
      //     document.getElementById('x').style.color = "red"
      //   } else {
      //     document.getElementById('x').style.color = "blue"
      //   }
      // }
    },
    methods: {
      login(email, password) {
        let self = this;
        axios({
          method: 'post',
          url: 'http://localhost:3012/users/signin',
          data: { email, password }
        })
        .then(result => {
          this.$parent.$parent.isLogin = true
          this.$router.push('/');
          localStorage.setItem('token', result.data.token);
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

  #login-btn {
    border-radius: 0;
  }
</style>

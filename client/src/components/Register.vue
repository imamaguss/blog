<template>
  <div>
    <div class="row">
      <div class="col col-md-7"></div>
      <div class="col col-md-5">
        <div class="card shadow" id="registerForm">
          <div class="card-body">
            <input v-model="name" class="card-item" type="text" placeholder="Your name" required> <br> <br>
            <input v-model="email" class="card-item" type="text" placeholder="Your e-mail" required> <br> <br>
            <input v-model="password" class="card-item" type="password" placeholder="Your password" required> <br> <br>
            <a class="btn btn-success" @click="register(name, email, password)" id="register-btn">Register</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const baseUrl = 'http://localhost:3012'
export default {
  name: 'Register',
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register: (name, email, password) => {
      console.log(name);
      axios
        .post(`${baseUrl}/users/signup`, {
          name, email, password
        })
        .then(result => {
          console.log(result);
          alert(result.data.message);
        })
        .catch(err => {
          console.log(err);
          
        })
    }
  }
}
</script>

<style>
  #registerForm {
    border-radius: 0;
  }

  #register-btn {
    color: white;
    border-radius: 0;
  }
</style>

<template>
  <div id="nav">
      <nav class="navbar navbar-expand-md" id="topnav">
      <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="#">
            <img src="./assets/logo.png">
          </a>
        </div>
          <div class="form-inline my-2 my-lg-0">
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item">
                  <router-link to="/">Home</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/about">About</router-link>
                </li>
              </ul>
            </div>
          </div>
      </div>
      </nav>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 10px;
}

#nav a.router-link-exact-active {
  color: white;
}

/* custom start here */
#topnav {
  padding: 0;
  background-color: #d38347;
  margin-bottom: 30px;
}
</style>

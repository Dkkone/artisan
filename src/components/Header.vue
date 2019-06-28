<template>
   <div>


        <!--Navbar-->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark info-color">

  <!-- Navbar brand -->
  <a class="navbar-brand" href="http://localhost:8080/#/">LoGO</a>

  <!-- Collapse button -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <!-- Collapsible content -->
  <div class="collapse navbar-collapse" id="basicExampleNav">

    <!-- Links -->
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <a class="nav-link active"><router-link to="/">Home</router-link></a>
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#"><router-link to="/register">Register</router-link></a>

      </li>
      <li class="nav-item">
      <a class="nav-link" href="#"><router-link to="/login">Login</router-link></a>

      </li>
      <li class="nav-item">
      <a class="nav-link" href="#"><router-link to="/loginAdmin">Admin</router-link></a>

      </li>



    </ul>
    </div>
</nav>
<!--/.Navbar-->
   </div>
</template>

<script>

export default {
  name: 'Header',
  props: {
    msg: String
  }
}

</script>

<style>

</style>

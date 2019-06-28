// Register.vue

<template>

    <div>
    <div class="container">
<form class="form-horizontal m-5" role="form" method="POST" action="/register">
   <div class="row">
       <div class="col-md-3"></div>
       <div class="col-md-6">
           <h2>Register New User</h2>
           <hr>
       </div>
   </div>
   <div class="row">
       <div class="col-md-3 field-label-responsive">
           <label for="name">Name</label>
       </div>
       <div class="col-md-6">
           <div class="form-group">
               <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                   <div class="input-group-prepend"><span class="input-group-text"><font-awesome-icon icon="user" /></span></div>
                   <input type="text" name="name" class="form-control" id="name"
                          placeholder="karim" required autofocus>
               </div>
           </div>
       </div>
       <div class="col-md-3">
           <div class="form-control-feedback">
                   <span class="text-danger align-middle">
                       <!-- Put name validation error messages here -->
                   </span>
           </div>
       </div>
   </div>
   <div class="row">
       <div class="col-md-3 field-label-responsive">
           <label for="email">Email</label>
       </div>
       <div class="col-md-6">
           <div class="form-group">
               <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                   <div class="input-group-text" style="width: 2.6rem"><font-awesome-icon icon="address-card" /></div>
                   <input type="text" name="email" class="form-control" id="email"
                          placeholder="karim@gmail.com" required autofocus>
               </div>
           </div>
       </div>
       <div class="col-md-3">
           <div class="form-control-feedback">
                   <span class="text-danger align-middle">
                       <!-- Put e-mail validation error messages here -->
                   </span>
           </div>
       </div>
   </div>
   <div class="row">
       <div class="col-md-3 field-label-responsive">
           <label for="password">Password</label>
       </div>
       <div class="col-md-6">
           <div class="form-group has-danger">
               <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                   <div class="input-group-text" style="width: 2.6rem"><font-awesome-icon icon="key" /></div>
                   <input type="password" name="password" class="form-control" id="password"
                          placeholder="Password" required>
               </div>
           </div>
       </div>
       <div class="col-md-3">

       </div>
   </div>
   <div class="row">
       <div class="col-md-3 field-label-responsive">
           <label for="password">Confirm Password</label>
       </div>
       <div class="col-md-6">
           <div class="form-group">
               <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                   <div class="input-group-text" style="width: 2.6rem">
                   <font-awesome-icon icon="redo" />
                   </div>
                   <input type="password" name="password-confirmation" class="form-control"
                          id="password-confirm" placeholder="Password" required>
               </div>
           </div>
       </div>
   </div>
   <div class="row">
       <div class="col-md-3"></div>
       <div class="col-md-6">
           <button type="submit" class="btn btn-warning"><router-link to="/dash">valider</router-link></button>
       </div>
   </div>
</form>
</div>
    </div>


</template>

<script>

export default {

}

</script>

<style>
@media(min-width: 768px) {
  .field-label-responsive {
    padding-top: .5rem;
    text-align: right;
  }
}
</style>

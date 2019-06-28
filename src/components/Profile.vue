<template>
   <div>
   <form>
     <div class="form-row">
     <div class="form-group col-md-6">
       <label for="inputEmail4">Nom</label>
       <input type="text" class="form-control" id="inputEmail4" placeholder="Koné">
     </div>
     <div class="form-group col-md-6">
       <label for="inputPassword4">Prénom</label>
       <input type="text" class="form-control" id="inputPassword4" placeholder="karim">
     </div>
       <div class="form-group col-md-6">
         <label for="inputEmail4">Email</label>
         <input type="email" class="form-control" id="inputEmail4" placeholder="karim@gmail.com">
       </div>
       <div class="form-group col-md-6">
         <label for="inputPassword4">Password</label>
         <input type="password" class="form-control" id="inputPassword4" placeholder="password">
       </div>
     </div>
     <div class="form-group">
       <label for="inputAddress">Adresse</label>
       <input type="text" class="form-control" id="inputAddress" placeholder="3 avenue de goussainville">
     </div>

     <div class="form-row">
       <div class="form-group col-md-6">
         <label for="inputCity">ville</label>
         <input type="text" class="form-control" id="inputCity">
       </div>
       
       <div class="form-group col-md-2">
         <label for="inputZip">Code Postale</label>
         <input type="text" class="form-control" id="inputZip">
       </div>
     </div>
     <div class="form-group">
       <div class="form-check">
         <input class="form-check-input" type="checkbox" id="gridCheck">
         <label class="form-check-label" for="gridCheck">
           Check me out
         </label>
       </div>
     </div>
     <button type="submit" class="btn btn-primary">Valider</button>
   </form>
  </div>
</template>

<script>

export default {
  name: 'Profile',
  props: {
    msg: String
  }
}

</script>

<style>

</style>

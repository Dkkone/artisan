<template>
   <div>
   <form>
     <div class="form-row">
       <div class="form-group col-md-6">
         <label for="inputEmail4">Entreprise</label>
         <input type="text" class="form-control" id="inputEmail4" placeholder="Entreprise">
       </div>
       <div class="form-group col-md-6">
         <label for="inputPassword4">Numéro siret</label>
         <input type="text" class="form-control" id="inputPassword4" placeholder="Numéro siret">
       </div>
     </div>
     <div class="form-group">
       <label for="inputAddress">Adresse</label>
       <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
     </div>

     <div class="form-row">
       <div class="form-group col-md-6">
         <label for="inputCity">Ville</label>
         <input type="text" class="form-control" id="inputCity">
       </div>

       
       <div class="form-group col-md-2">
         <label for="inputZip">Code Postale</label>
         <input type="text" class="form-control" id="inputZip">
       </div>
     </div>
     <div class="form-group">
   <label for="exampleFormControlTextarea1">Description</label>
   <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
 </div>
     <div class="form-group">
     <label for="inputImages">Images</label>
     <div class="custom-file">
  <input type="file" class="custom-file-input" id="customFile">
  <label class="custom-file-label" for="customFile">Choose file</label>
</div>
</div>
     <button type="submit" class="btn btn-primary">Valider</button>
   </form>
  </div>
</template>

<script>

export default {
  name: 'Entreprise',
  props: {
    msg: String
  }
}

</script>

<style>

</style>

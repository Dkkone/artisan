<template>
<div>
<div style="height: 250px; background-image: url('https://mdbootstrap.com/img/Photos/Others/architecture.jpg');">
      <form class="">

             <div class="row">
                <div class="lg-md-6 mx-auto">
                   <div class="row p-5 m-5" style="background-color: rgba(0, 0, 0, 0.6);">
                    <div class="col">
                    <input type="text" class="form-control" placeholder="électricien">
                    </div>
                    <div class="col">
                    <input type="text" class="form-control" placeholder="Poissy">
                    </div>
                    <div class="col">
                    <button type="submit" class="btn btn-warning col h-44"><router-link to="/results">valider</router-link></button>
                    </div>
                  </div>
                </div>
             </div>
      </form>
</div>
</div>
</template>

<script>

export default {
  name: 'Search',
  props: {
    msg: String
  }
}

</script>

<style>

</style>

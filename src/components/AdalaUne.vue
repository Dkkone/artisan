<template>
 <div>
 <div class="card" style="">
<img v-bind:src="photos[1].url" class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">Rénovation</h5>
<p class="card-text">Prestations de services</p>
<p class="card-text">Goussainville 95190</p>
<p class="card-text"><small class="text-muted">Aujourd'hui, 18:30</small></p>
</div>
</div>

 </div>
</template>

<script>

export default {
  name: 'AdalaUne',
  props: {
    msg: String
  },
  data(){
              return{
                  photos: []
              }
          },
        created: function()
        {
            this.fetchProducts();
        },
        methods: {
          fetchProducts(){
            {
                this.$http.get('https://jsonplaceholder.typicode.com/photos').then((response) => {
                    this.photos = response.data;
                });
            }
          }
        }
}

</script>

<style>

</style>

<template>
 <div>
    <div v-for="photo in photos" :key="photo.id">
    <router-link to="/ad">
      <div class="card mb-3 rounded" style="">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img v-bind:src="photo.url" class="card-img" alt="">
          </div>
          <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Rénovation</h5>
                <p class="card-text">Prestations de services</p>
                <p class="card-text">Goussainville 95190</p>
                <p class="card-text"><small class="text-muted">Aujourd'hui, 18:30</small></p>
              </div>
        </div>
      </div>

    </div>
    </router-link>
   </div>
   <b-pagination align="center" size="md" :total-rows="30" v-model="currentPage" :perPage="10" @input="fetchProducts(currentPage)">
   </b-pagination>

 </div>
</template>

<script>
export default {
  name: 'ShortAd',
  props: {
    msg: String
  },
  data(){
              return{
                  perPage: 10,
                  currentPage: 1,
                  photos: []
              }
          },
        created: function()
        {
            this.fetchProducts();
        },
        methods: {
          fetchProducts(currentPage){
            {
                this.$http.get('https://jsonplaceholder.typicode.com/photos?_page='+this.currentPage+'&_limit='+this.perPage).then((response) => {
                    this.photos = response.data;
                });
            }
          }
        },
        computed: {
      rows() {
        return this.photos.length
      }
    }
}
</script>

<style>

</style>

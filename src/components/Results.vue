// Home.vue

<template>
    <div>
        <Search msg="formulaire"/>

        <div class="m-5 row">
             <div class="col-md-8">
                <div class="mb-4 row">
                 <div class="col">

                      <ShortAd msg="formulaire"/>
                      

                 </div>
                </div>

             </div>
             <div class="col-md-4">
             <div class="mb-4 row">
              <div class="col">

                   <router-link to="/ad"><AdalaUne msg="formulaire"/></router-link>
              </div>
             </div>

             </div>
       </div>

    </div>
</template>

<script>
import Search from './Search.vue' ;
import ShortAd from './ShortAd.vue' ;
import AdalaUne from './AdalaUne.vue' ;


export default {
components: {
  Search , ShortAd , AdalaUne
},
data(){
            return{
                perPage: 4,
                currentPage: 1,
                messages: []
            }
        },
      created: function()
      {
          this.fetchProducts(currentPage);
      },
      methods: {
        fetchProducts(currentPage){
          {
              this.$http.get('http://localhost:3000/messages?_page='+this.currentPage+'&_limit='+this.perPage).then((response) => {
                  this.messages = response.data;
              });
          }
        }
      },
      computed: {
    rows() {
      return this.messages.length
    }
  }

}
</script>

<style>

</style>

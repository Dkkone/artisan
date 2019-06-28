<template>
  <div>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 rounded">
      <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->

    </b-carousel>

    <div class="card border-secondary" style="">
      <div class="card-header">Description</div>
      <div class="card-body text-secondary">
        <p class="card-text">
        -Tous Travaux Électriques

-Électricité Générale - Neuf et Rénovation

- Dépannage Toutes Installations (Monophasé et Triphasé) particuliers et professionnels

- 10 année d'expérience

• Mise aux normes NF
• Recherche de pannes électriques
• Commandes électriques
• Raccordement suite court-circuit
• Installation réseau électrique d’intérieur / extérieur
• Bilan rénovation électrique
• Branchements électriques
• Déplacement compteurs
• Eau chaude électrique
• Prise électrique
• Interrupteur
• Interventions urgentes
Notre équipe d'électriciens est disponible immédiatement pour résoudre tous types de pannes électriques ou pour vous accompagner d'un projet de rénovation électrique et remise aux normes.

Nos électriciens qualifiés interviennent chez vous rapidement pour détecter l'origine de cette panne et la résoudre.

        </p>
      </div>
    </div>

    <div class="card mb-5">
      <div class="card-body">
      <div class="embed-responsive embed-responsive-21by9">
  <iframe class="embed-responsive-item" src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
</div>
      </div>
    </div>



      </div>
      <div class="col-lg-4">

      <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png" alt="card image"></p>
                                    <h4 class="card-title">Sunlimetech</h4>
                                    <p class="card-text">This is basic card with image on top, title, description and button.</p>
                                </div>
                            </div>

      <div class="card">


<div class="card-body">
<div class="">
  <div class="m-2">
    <b-button block id="popover-button-disable-event" variant="primary">Voir le numéro</b-button>
  </div>



  <b-popover ref="popover" target="popover-button-disable-event" title="Appeler moi sur ce numéro">
    <strong>0600000000</strong>
  </b-popover>
</div>
<div class="m-2">
<button type="button" class="btn btn-secondary btn-lg btn-block">Envoyer un mail</button>
</div>
</div>
</div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
  methods: {
      onEnable() {
        this.$refs.popover.$emit('enable')
      },
      onDisable() {
        this.$refs.popover.$emit('disable')
      }
    }
  }
</script>

<style>

</style>

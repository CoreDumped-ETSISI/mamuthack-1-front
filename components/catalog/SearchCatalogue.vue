<template>
<div id="book-test">
  <div class="row lowMargin">
    <div class="col-md-9 m-auto">
      <h1 class="text-center display-4 my-4">Busca una oferta</h1>
      <multiselect
        v-model="value"
        tag-placeholder="Add this as new tag"
        placeholder="Introduce los parámetros de búsqueda"
        :options="options"
        :multiple="true"
        :taggable="true"
        @tag="addTag">
      </multiselect>
      <b-form-input v-model="text" placeholder="Introduce los términos de búsqueda"></b-form-input>
    </div>
  </div>
    <h2 class="text-center noResult" v-if="noResult">No hay ningun libro con esos parámetros</h2>
    <b-row class="offers-row">
         <Offer
            v-for="offer of searchAllFields"
            v-bind:key="offer.id"
            :id=offer._id
            :photo=offer.photo
            :title=offer.title
            :status=offer.status
            :description=offer.description
            :location=offer.location
            :labels=offer.labels
            :servings=offer.servings
            :coordinates=offer.coordinates
            :contains=offer.contains
            :publisher=offer.publisher>
        </Offer>
    </b-row>
</div>
</template>

<script>
import axios from 'axios';
import Offer from '~/components/media/Offer.vue'
import Multiselect from 'vue-multiselect'

export default {
  components: {
    Offer,
    Multiselect
  },
  methods: {
      addTag () {
        this.options.push(tag)
        this.value.push(tag)
        console.log(this.value)
      },
      myData() {
        console.log(this.value)
      }
    },
    data() {
    return {
      offers: [],
      errors: [],
      text: '',
      selected: null,
      options: ['title', 'description', 'labels'],
      value: [],
      noResult: false
    }
  },

  computed: {
    searchAllFields() {
      let localThis = this
      let categories = this.value
      if(categories.length == 0)
        categories = this.options

      this.noResult = true
      return this.offers.filter(function(offer){
        var i
        for(i=0 ; i<categories.length ; i++){
          if(categories[i] === 'labels'){
            if(offer[categories[i]].length > 0 && offer[categories[i]].filter(s =>
             s.includes(localThis.text.toLowerCase())).length>0){
              localThis.noResult = false
              return true
             }
          }
          else if(offer[categories[i]]!=null && offer[categories[i]].toLowerCase().includes(localThis.text.toLowerCase())){
            localThis.noResult = false
            return true
          }
        }
        return false
      })
    }
  },

  mounted() {
    axios.get(`http://localhost:3001/offer`)
      .then(response => {
        console.log(response.data)
        if(response.data.length>0)
          for(var i = 0;i<response.data.length;i++){
            if(response.data[i].status=="pub")
              this.offers.push(response.data[i])
          }
        console.log(this.offers)
      })
      .catch(e => {
        this.errors.push(e)
      })
    this.offers.push({
      "id":"12345",
      "title":"Pollo con arroz",
      "photo":"https://www.chatelaine.com/wp-content/uploads/2019/01/canada-new-food-guide-2019.jpeg",
      "status":"pending",
      "description":"Este es un plato de pollo con arroz que he hecho hoy para mi familia. Ibamos a tirar el resto, pero puedes venir a por un plato",
      "contains":["frutos secos","marisco"],
      "labels":["pollo","arroz","receta"],
      "coordinates":[39.1111, -6.89798],
      "servings": 3,
      "publisher": "Mamuthack UAB"
    })
    this.offers.push({
      "id":"123456",
      "title":"Patatas a la riojana",
      "photo":"https://cocina-casera.com/wp-content/uploads/2015/02/receta-patatas-riojana.jpg",
      "status":"pub",
      "description":"Esta es una antigua receta familiar de patatas a la riojana, me la enseñó mi abuela y ella querría que la compartiera.",
      "contains":["lacteos","carne"],
      "labels":["patatas","pimenton","carne"],
      "coordinates":[68.1111, -23.89798],
      "servings": 1,
      "publisher": "SandroBlue"
    })
    this.offers.push({
      "id":"1234567",
      "title":"Menestra de verduras",
      "photo":"https://unareceta.com/wp-content/uploads/2016/10/menestra-de-verduras.jpg",
      "status":"pub",
      "description":"Este es un revuelto de verduras que e sobró tras la cena de navidad",
      "contains":["huevo"],
      "labels":["menestra","verdura","brocoli"],
      "coordinates":[67.1231, -9.6798],
      "servings": 3,
      "publisher": "AnitaPower"
    })
    this.offers.push({
      "id":"12345678",
      "title":"Tortilla de patata",
      "photo":"https://lacocinadefrabisa.lavozdegalicia.es/wp-content/uploads/2019/05/tortilla-espa%C3%B1ola.jpg",
      "status":"pub",
      "description":"Mis hijos no la quieren comer porque eché demasiados huevos, espero que alguien la pueda apreciar.",
      "contains":["lacteos","huevo"],
      "labels":["patatas","cebolla","huevo"],
      "coordinates":[43.2345, -24.4567],
      "servings": 1,
      "publisher": "AngelaNovoa"
    })
    this.offers.push({
      "id":"123456789",
      "title":"Pimientos rellenos",
      "photo":"https://www.cocinaabuenashoras.com/files/pimientos-rellenos-al-horno-copia-1-768x512.jpg",
      "status":"pub",
      "description":"Tengo un bar y siempre me sobran bastantes al terminar el día, podeis venir a por ellos antes de que se pasen",
      "contains":["lacteos","marisco"],
      "labels":["pimiento","atun","cebolla"],
      "coordinates":[39.1111, -6.89798],
      "servings": 23,
      "publisher": "SandroBlue"
    })
    /*axios.get(`http://localhost:3003/book/getAllBooks`)
    .then(response => {
      this.posts = response.data.books
      this.posts = this.posts.filter(function(post){
        if(post.status === "pending")
          return true
        return false
      })
      console.log(this.posts)
    })
    .catch(e => {
			this.errors.push(e)
    })*/
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
  .lowMargin {
    margin-bottom: 20px;
    width: 100vw;
  }

  .noResult {
    margin-top: 50px;
    color: grey
  }

  .offers-row {
    max-width: 100vw;
  }
</style>

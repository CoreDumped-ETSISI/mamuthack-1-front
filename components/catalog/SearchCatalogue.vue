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
    <b-card-group columns>     
         <Offer 
            v-for="offer of searchAllFields" 
            v-bind:key="offer.id" 
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
    </b-card-group>
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
        if(response.data.length>0)
          this.offers.push(response.data[0])
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
      "description":"Este es un plato de pollo con arroz que he hecho hoy para mi familia. Como mi abuela ha muerto repentinamente sobra 1 plato, ven ya a por el :)",
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
      "status":"pending",
      "description":"Esta es una antigua receta familiar de patatas a la riojana, me la enseñó mi abuela tras morir",
      "contains":["lacteos","carne"],
      "labels":["patatas","pimenton","carne"],
      "coordinates":[39.1111, -6.89798],
      "servings": 1,
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
    margin-bottom: 20px !important;
  }

  .noResult {
    margin-top: 50px;
    color: grey
  }
</style>

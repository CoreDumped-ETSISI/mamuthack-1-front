<template>
<div id="book-test">
    <b-card-group columns>     
        <Offer 
            v-for="offer of offers" 
            v-bind:key="offer.id" 
            :photo=offer.photo 
            :title=offer.title
            :status=offer.status 
            :description=offer.description 
            :labels=offer.labels
            :servings=offer.servings
            :coordinates=offer.coordinates
            :contains=offer.contains>
        </Offer>
    </b-card-group>
    <div class="overflow-auto">
    </div>
</div>
</template>

<script>
import axios from 'axios';
import Offer from '~/components/media/Offer.vue'

export default {
  components: {
    Offer
  },
  data() {
    return {
      offers: [],
      errors: []
    }
  },

  mounted() {
    this.offers.push({
      "id":"12345",
      "title":"Pollo con arroz",
      "photo":"https://www.chatelaine.com/wp-content/uploads/2019/01/canada-new-food-guide-2019.jpeg",
      "status":"pending",
      "description":"Este es un plato de pollo con arroz que he hecho hoy para mi familia. Como mi abuela ha muerto repentinamente sobra 1 plato, ven ya a por el :)",
      "labels":["hola","adios"],
      "servings": 3,
      "coordinates": [41.500242, 2.111834],
      "contains": ["gluten", "marisco"]
    })
    this.offers.push({
      "id":"123456",
      "title":"Patatas a la riojana",
      "photo":"https://cocina-casera.com/wp-content/uploads/2015/02/receta-patatas-riojana.jpg",
      "status":"pending",
      "description":"Esta es una antigua receta familiar de patatas a la riojana, me la enseñó mi abuela tras morir",
      "labels":["sin lactosa","celiaco"],
      "servings": 1,
      "coordinates": [41.500242, 2.111834],
      "contains": ["carne", "lactosa"]
    })
    /*axios.get(`http://localhost:3003/book/getAllBooks`)
    .then(response => {
      this.posts = response.data.books
    })
    .catch(e => {
			this.errors.push(e)
    })*/
  }
}
</script>

<template>
  <section class="container">
    <h2 class="text-center" v-if="message">{{ message }}</h2>
    <div class="info" v-if="!message">
      <b-card class="c-card">
        <b-row no-gutters>
          <b-col md="5">
            <b-card-img :src="offers.photo" class="rounded-0"></b-card-img>
            <b-button class="topmargin" variant="success" block>Confirmar</b-button>
          </b-col>
          <b-col md="7">
            <b-card-body :title="offers.title" :sub-title="getCoordinates">
              <b-badge v-for="badge in offers.labels" v-bind:key="badge" variant="success">{{badge}}</b-badge>
              <b-card-text class="limitLines">{{ offers.description }}</b-card-text>
              <b-list-group flush>
                <b-list-group-item>
                  <strong>Publicado por:</strong>
                  {{ offers.publisher }}
                </b-list-group-item>
                <b-list-group-item>
                  <strong>Raciones:</strong>
                  {{ offers.servings }}
                </b-list-group-item>
                <b-list-group-item>
                  <strong>Contiene:</strong>
                  <b-badge v-for="badge in offers.contains" v-bind:key="badge" variant="danger">{{badge}}</b-badge>
                </b-list-group-item>
              </b-list-group>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      offers: {},
      message: ''
    };
  },
  computed: {
      getCoordinates(){
        return this.offers.coordinates
      }
    },
  mounted() {
    let localThis = this;
    axios.get(`http://localhost:3001/offer/getOfferPublisher/`+localStorage.user)
    .then(response => {
        console.log(response.data)
        if(response.data.length>0)
          localThis.offers = response.data[0]
        else
          localThis.message = "No tienes ninguna oferta pendiente"
      })
      .catch(e => {
        alert(e)
        localThis.message = "No tienes ninguna oferta pendiente"
      })
  }
};
</script>
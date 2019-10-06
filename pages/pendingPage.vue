<template>
  <section class="container">
    <div class="info">
      <b-card class="c-card">
        <b-row no-gutters>
          <b-col md="5">
            <b-card-img :src="pedido.photo" class="rounded-0"></b-card-img>
            <b-button class="topmargin" variant="success" block>Confirmar</b-button>
          </b-col>
          <b-col md="7">
            <b-card-body :title="pedido.title" :sub-title="getCoordinates">
              <b-badge v-for="badge in pedido.labels" v-bind:key="badge" variant="success">{{badge}}</b-badge>
              <b-card-text class="limitLines">{{ pedido.description }}</b-card-text>
              <b-list-group flush>
                <b-list-group-item>
                  <strong>Publicado por:</strong>
                  {{ pedido.publisher }}
                </b-list-group-item>
                <b-list-group-item>
                  <strong>Raciones:</strong>
                  {{ pedido.servings }}
                </b-list-group-item>
                <b-list-group-item>
                  <strong>Contiene:</strong>
                  <b-badge v-for="badge in pedido.contains" v-bind:key="badge" variant="danger">{{badge}}</b-badge>
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
      pedido: {}
    };
  },
  computed: {
      getCoordinates(){
        return this.pedido.coordinates
      }
    },
  mounted() {
    let localThis = this
    axios.get(`http://localhost:3001/offer/getClaimClaimant/`+localStorage.user)
    .then(response => {
        console.log(response.data)
        if(response.data.length>0)
          localThis.pedido = response.data[0]
        else
          localThis.message = "No tienes ninguna peticion pendiente"
      })
      .catch(e => {
        alert(e)
        localThis.message = "No tienes ninguna peticion pendiente"
      })
  }
};
</script>
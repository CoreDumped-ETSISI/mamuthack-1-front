<template>
  <section class="container">
    <div class="info">
      <h2 class="text-center" v-if="message">{{ message }}</h2>
      <div class="info" v-if="!message">
        <b-card class="c-card">
        <b-row no-gutters>
          <b-col md="5">
            <b-card-img :src="pedido.photo" class="rounded-0"></b-card-img>
            <b-button class="topmargin" variant="success" block v-on:click="confirm()">Confirmar</b-button>
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
    </div>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      pedido: {},
      message: ''
    };
  },
  computed: {
      getCoordinates(){
        return this.pedido.coordinates
      }
    },
  mounted() {
    let localThis = this
    let found = false
    axios.get(`http://localhost:3001/offer/getClaimClaimant/`+localStorage.user)
    .then(response => {
        console.log(response.data)
        if(response.data.length>0)
          for(var i = 0;i<response.data.length;i++){
            if(response.data[i].status=="pend" || response.data[i].status=="pub"){
              localThis.pedido = response.data[i]
              found = true
              break
            }
          }
        if(!found)
          localThis.message = "No tienes ninguna oferta pendiente"
      })
      .catch(e => {
        alert(e)
        localThis.message = "No tienes ninguna peticion pendiente"
      })
  },
  methods: {
    confirm(){
      let localThis = this
      axios.patch( 'http://localhost:3001/offer/'+this.pedido._id,
          {
            "status" : "ok"
          }).then(function(response){
            localThis.message = "No tienes ninguna oferta pendiente"
        })
        .catch(function(err){
          alert(err);
        });
    }
  }
};
</script>
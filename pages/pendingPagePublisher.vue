<template>
  <section class="container">
    <h2 class="text-center" v-if="message">{{ message }}</h2>
    <div class="info" v-if="!message">
      <b-card class="c-card">
        <b-row no-gutters>
          <b-col md="5">
            <b-card-img :src="ofertas.photo" class="rounded-0"></b-card-img>
            <b-button class="topmargin" variant="success" block>Confirmar</b-button>
          </b-col>
          <b-col md="7">
            <b-card-body :title="ofertas.title" :sub-title="getCoordinates">
              <b-badge v-for="badge in ofertas.labels" v-bind:key="badge" variant="success">{{badge}}</b-badge>
              <b-card-text class="limitLines">{{ ofertas.description }}</b-card-text>
              <b-list-group flush>
                <b-list-group-item>
                  <strong>Publicado por:</strong>
                  {{ ofertas.publisher }}
                </b-list-group-item>
                <b-list-group-item>
                  <strong>Raciones:</strong>
                  {{ ofertas.servings }}
                </b-list-group-item>
                <b-list-group-item>
                  <strong>Contiene:</strong>
                  <b-badge v-for="badge in ofertas.contains" v-bind:key="badge" variant="danger">{{badge}}</b-badge>
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
export default {
  data() {
    return {
      ofertas: {},
      message: ''
    };
  },
  computed: {
      getCoordinates(){
        return this.ofertas.coordinates
      }
    },
  mounted() {
    this.ofertas = JSON.parse(localStorage.getItem("ofertas"));
    if(this.ofertas == null)
        this.message = "No tienes ninguna oferta pendiente"
    console.log(this.ofertas);
  }
};
</script>
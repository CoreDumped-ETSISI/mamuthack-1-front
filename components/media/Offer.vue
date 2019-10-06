<template>
  <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="5">
        <b-card-img :src=photo class="rounded-0"></b-card-img>
        <b-button class="topmargin" variant="warning" v-on:click="checkUser()">Descarga</b-button>
      </b-col>
      <b-col md="7">
        <b-card-body :title="title" :sub-title="getCoordinates">
        <b-badge 
          v-for="badge in labels"
          v-bind:key="badge"
          variant="success">{{badge}}
        </b-badge>
        <b-card-text class="limitLines">
          {{ this.description }}
        </b-card-text>
         <b-list-group flush>
          <b-list-group-item><strong>Publicado por: </strong>{{ publisher }}</b-list-group-item>
          <b-list-group-item><strong>Raciones: </strong>{{ servings }}</b-list-group-item>
          <b-list-group-item><strong>Contiene: </strong>
            <b-badge 
              v-for="badge in contains"
              v-bind:key="badge"
              variant="danger">{{badge}}
            </b-badge>
          </b-list-group-item>
        </b-list-group>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import axios from 'axios';

export default {    
    
    data(){
        return {
            statuses: ['pending', 'accepted', 'denied', 'erased'],
            selected: this.status,
            options: [
							{ item: 'pending', text: 'Status: pending' },
							{ item: 'accepted', text: 'Status: accepted' },
							{ item: 'denied', text: 'Status: denied' },
							{ item: 'erased', text: 'Status: erased' }
						]
        }
    },
    computed: {
      getCoordinates(){
        return this.coordinates.join(", ")
      }
    },
    props: {
        id: String,
        description: String,
        photo: String,
        status: String,
        labels: Array,
        title: String,
        servings: Number,
        coordinates: Array,
        contains: Array,
        publisher: String
    },

    methods: {
      checkUser(){
        if(localStorage.user != this.publisher){
          this.saveStuff()
        }
        else
          alert('No puedes reservar tu propia oferta')
      },
      saveStuff(){
        let localThis = this
        axios.patch( 'http://localhost:3001/offer/'+this.id,
          {
            "status" : "pend",
            "claimant" : localStorage.user
          }).then(function(response){
            localThis.changePage()
        })
        .catch(function(err){
          alert(err);
        });
      },
      changePage(){
        this.$router.push({
            path: '/pendingPage'
        })
      }
    }
}


</script>



<style scoped>
.pxmargin{
    margin-right: 2px;
}
.topmargin {
    display: block;
    width: 100%;
    margin-top: 5px;
}
.limitLines {
  overflow: hidden;
  position: relative; 
  line-height: 1.2em;
  max-height: 7.2em; 
  margin-right: -1em;
  padding-right: 1em;
}
</style>

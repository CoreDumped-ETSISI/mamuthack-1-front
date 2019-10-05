<template>
  <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="5">
        <b-card-img :src=photo class="rounded-0"></b-card-img>
        <b-button class="topmargin" variant="warning" v-on:click="claim()">Descarga</b-button>
      </b-col>
      <b-col md="7">
        <b-card-body :title="title">
        <b-badge 
          v-for="badge in labels"
          v-bind:key="badge"
          variant="success">{{badge}}
        </b-badge>
        <b-card-text class="limitLines">
          {{ this.description }}
        </b-card-text>
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
            description: 'Descripción por defecto, quizá demasiado corta',
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
      getTag(){
        return this.languages[this.language]
      },
    },
    props: {
        id: String,
        description: String,
        photo: String,
        status: String,
        labels: Array,
        title: String
    },

    methods: {
      claim(){
        alert("owo")
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

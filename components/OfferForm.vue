<template>
<div>
  <b-card class="col-md-6 mx-auto card">
		<img class="card-img-top" src="~/assets/logo.png">
    <b-form  @submit="onSubmit" v-if="show">
      <b-form-group id="input-group-1" label="Titulo de plato:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.title"
          required
          placeholder="Introduce el nombre de tu plato"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Descripción:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.description"
          required
          placeholder="Introduce la descripción de tu plato"
        ></b-form-input>
      </b-form-group>

			<b-form-group id="input-group-3" label="Raciones:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.servings"
          required
          type="number"
          placeholder="Introduce cuantas personas puede alimentar tu plato"
        ></b-form-input>
      </b-form-group>

      <b-badge 
          v-for="badge in getTags"
          v-bind:key="badge"
          variant="success">{{badge}}
      </b-badge>
      <b-form-group id="input-group-4" label="Etiquetas:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.tags"
          required
          placeholder="Introduce etiquetas separadas por comas"
        ></b-form-input>
      </b-form-group>

			<b-form-group label="Mi plato contiene:">
        <b-form-checkbox-group
          id="checkbox-group-1"
          v-model="selected"
          :options="options"
          name="flavour-1"
        ></b-form-checkbox-group>
      </b-form-group>

      <b-form-file v-model="image" :state="Boolean(image)"
        placeholder="Choose a book cover..."
        drop-placeholder="Drop file here..."
        accept=".png, .PNG, .jpg, .JPG, .jpeg, .JPEG, .jpe, .JPE, .jif, .JIF, .jfif, .JFIF, .jfi, .JFI"
        name="image" class="mb-2"></b-form-file>
			<b-button type="submit" block variant="warning">Registrate</b-button>
    </b-form>
  </b-card>
</div>
</template>

<script>
	import axios from 'axios';
  export default {
    data() {
      return {
        form: {
          title: '',
		      description: '',
          servings: 0,
          tags: ''
        },
        image: '',
        selected: [], // Must be an array reference!
        options: [
          { text: 'Lácteos', value: 'lacteos' },
          { text: 'Carne', value: 'carne' },
          { text: 'Gluten', value: 'gluten' },
          { text: 'Marisco', value: 'marisco' },
          { text: 'Frutos secos', value: 'frutos secos' },
          { text: 'Huevo', value: 'huevo' }
        ],
        show: true
      }
    },
    computed: {
      getTags () {
        var tagArr = this.form.tags.split(",")
        for(var i=0;i<tagArr.length;i++)
          tagArr[i] = tagArr[i].trim()
        if(tagArr[tagArr.length-1] === "")
          tagArr.pop();
        return tagArr;
      }
    },

    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        this.storeOffer()
      },
			uploadFile(){
				this.changePage()
      },
      storeOffer(){
        let localThis = this
				axios.post( 'http://localhost:3001/offer',
          {
            'title':localThis.form.title,
            'description':localThis.form.description,
            'servings':localThis.form.servings,
            'contains':localThis.selected,
            'coordinates': [41.500242, 2.111834],
            'labels': localThis.getTags,
            'publisher': localStorage.user
          }
        ).then(function(response){
          localThis.changePage()
        })
        .catch(function(err){
          console.log(err)
        });
      },
			changePage(){
        this.$router.push({
            path: '/search'
        })
      }
    }
	}
	
</script>

<style scoped>
	.card-img-top {
			display: block;
			margin-left: auto;
			margin-right: auto;
			width: 20%;
	}
	.card {
		margin-top: 20px;
	}
	.grey-text {
		margin-top: 10px;
	}
</style>
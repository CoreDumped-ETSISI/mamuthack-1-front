<template>
<div>
  <b-card class="col-md-6 mx-auto card">
	<img class="card-img-top" src="~/assets/logo.png">
    <b-form  @submit="onSubmit" v-if="show">
      <b-form-group id="input-group-1" label="Nombre:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.username"
          required
          placeholder="Introduce tu nombre"
        ></b-form-input>
      </b-form-group>

     
		<b-form-group id="input-group-2" label="Contraseña:" label-for="input-2">
        <b-form-input
          id="input-2"
        	v-model="form.password"
        	required
			type="password"
        	placeholder="Introduce tu contraseña"
        ></b-form-input>
      </b-form-group>
		<b-button type="submit" block variant="warning">Acceder</b-button>
    </b-form>
		<p class="font-small grey-text d-flex justify-content-end">
		No estás registrado? <a href="register" class="blue-text ml-1"> Únete</a></p>
  </b-card>
	
</div>
</template>

<script>
	import axios from 'axios';
  export default {
    data() {
      return {
        form: {
        	username: '',
			password: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
			evt.preventDefault()
			this.login()
      },
		login(){
			if(this.form.username === "antonio03" && this.form.password === "antonio03"){
				localStorage.user ="antonio03"
				this.changePage()
			}
			else if(this.form.username === "sandra99" && this.form.password === "sandra99"){
				localStorage.user="sandra99"
				this.changePage()
			}
			else
				alert("Usuario o contraseña incorrectos")
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
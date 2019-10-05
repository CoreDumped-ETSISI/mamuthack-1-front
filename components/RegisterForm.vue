<template>
<div>
  <b-card class="col-md-6 mx-auto card">
		<img class="card-img-top" src="~/assets/logo.png">
    <b-form  @submit="onSubmit" v-if="show">
      <b-form-group id="input-group-1" label="Nombre de usuario:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.username"
          required
          placeholder="Introduce tu nombre de usuario"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Nombre:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Introduce tu nombre"
        ></b-form-input>
      </b-form-group>

			<b-form-group id="input-group-3" label="Apellido:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.lastName"
          required
          placeholder="Introduce tu apellido"
        ></b-form-input>
      </b-form-group>

			<b-form-group id="input-group-4" label="Contraseña:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.password"
          required
					type="password"
          placeholder="Introduce tu contraseña"
        ></b-form-input>
      </b-form-group>

			<b-form-group id="input-group-5" label="Repite la contraseña:" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="form.passwordRepeat"
          required
					type="password"
          placeholder="Introduce tu contraseña"
        ></b-form-input>
      </b-form-group>
			 <b-button type="submit" block variant="warning">Registrate</b-button>
    </b-form>
		<p class="font-small grey-text d-flex justify-content-end">
		Ya eres miembro? <a href="login" class="blue-text ml-1"> Accede</a></p>
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
					name: '',
					lastName: '',
					password: '',
					passwordRepeat: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        this.register()
      },
			register(){
				if(this.form.password === this.form.passwordRepeat)
					this.changePage()
				else
          alert("Las contraseñas no coinciden")
			},
			changePage(){
        this.$router.push({
            path: '/login'
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
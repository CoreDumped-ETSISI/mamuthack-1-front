<template>
  <div>
    <NavbarNotLogged></NavbarNotLogged>
    <RegisterForm></RegisterForm>
  </div>
</template>

<script>
import RegisterForm from '~/components/RegisterForm.vue'
import NavbarNotLogged from '~/components/NavbarNotLogged.vue'
export default {
  components: {
    RegisterForm,
    NavbarNotLogged
  }
}
</script>

<style scoped>
</style>
<template>
<div class="small">
    <NavbarNotLogged></NavbarNotLogged>
    <Login></Login>
    </div>
</template>

<script>
import Login from '~/components/Login.vue'
import NavbarNotLogged from '~/components/NavbarNotLogged.vue'

export default {
  components: {
    Login,
    NavbarNotLogged
  }
}
</script>

<style scoped>
</style>

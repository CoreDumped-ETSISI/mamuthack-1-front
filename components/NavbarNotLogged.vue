<template>
<div>
  <b-navbar fixed="top" toggleable="lg" type="light" variant="warning">
    <b-navbar-brand href="/">
      <img src="../assets/logoNavbar.png" width="100">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    
    <b-collapse id="nav-collapse" is-nav>
    <b-navbar-nav>
        <b-nav-item href="login">Entra en tu cuenta</b-nav-item>
        <b-nav-item href="register">Regístrate</b-nav-item>
    </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
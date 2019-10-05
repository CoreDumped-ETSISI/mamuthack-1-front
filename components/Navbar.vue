<template>
<div>
  <b-navbar fixed="top" toggleable="lg" type="light" variant="warning">
    <b-navbar-brand href="/">HE PERDIDO</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Busqueda</b-button>
        </b-nav-form>

        

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template slot="button-content"><em>Usuario</em></template>
          <b-dropdown-item href="#">Perfil</b-dropdown-item>
          <b-dropdown-item href="#">Desconexión</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

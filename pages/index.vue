<template>
  <section class="container">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />

    <div>
      <h1 class="title">biblio-front</h1>
      <h2 class="subtitle">Biblioteca digital Core Dumped, sección frontend</h2>
      <div class="links">
        <a href="/login" target="_blank" class="button--grey">Login</a>
        - OR -
        <a href="/register" target="_blank" class="button--grey">Register</a>
      </div>

      <div>
        <b-card-group deck>
          <b-card>
            <b-card-text>
              <p>
                <i class="fas fa-hands-helping fa-10x"></i>
              </p>This is a wider card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </b-card-text>
          </b-card>

          <b-card>
            <b-card-text>
              <p>
                <i class="fas fa-utensils fa-10x"></i>
              </p>This card has supporting text below as a natural lead-in to additional content.
            </b-card-text>
          </b-card>

          <b-card>
            <b-card-text>
              <p>
                <i class="fas fa-trash-alt fa-10x"></i>
              </p>This is a wider card with supporting text below as a natural lead-in to additional content.
              This card has even longer content than the first to show that equal height action.
            </b-card-text>
          </b-card>
        </b-card-group>
      </div>

      <div>
        <b-card-group deck>
          <b-card
            title="Acción contra el hambre"
            img-src="https://i.imgur.com/9qLjNnI.jpg"
            img-alt="Image"
            img-top
          >
            <b-card-text class="text-justify">
              <mdb-icon fab icon="accessible-icon" />Somos la primera generación que puede acabar con el hambre en el mundo. Con tu ayuda reducimos el riesgo y salvamos el mayor número de personas
            </b-card-text>
            <b-button href="https:\\www.accioncontraelhambre.org" variant="primary">Ayudanos</b-button>
            <template v-slot:footer>
              <small class="text-muted">Last updated 53 mins ago</small>
            </template>
          </b-card>

          <b-card
            title="Welt hunger hilfe"
            img-src="https://i.imgur.com/AyP6q3B.jpg"
            img-alt="Image"
            img-top
          >
            <b-card-text
              class="text-justify"
            >Hunger can be defeated. Its causes are known, so are the solutions. This is why Welthungerhilfe has taken on the goal of doing all it can to end hunger: “Zero hunger wherever we work”.</b-card-text>
            <b-button href="welthungerhilfe.org" variant="primary">Ayudanos</b-button>
            <template v-slot:footer>
              <small class="text-muted">Last updated 30 mins ago</small>
            </template>
          </b-card>

          <b-card
            title="No hunger, evento benéfico para la ONG Acción contra el Hambre"
            img-src="https://i.imgur.com/Q6megSM.jpg"
            img-alt="Image"
            img-top
          >
            <b-card-text
              class="text-justify"
            >Estudiantado de cuarto de Publicidad y Relaciones Públicas de la Universitat Jaume I, ha organizado un evento benéfico para la ONG Acción contra el Hambre.</b-card-text>
            <b-button
              href="https://www.vivecastellon.com/noticiario/no-hunger-evento-benefico-para-la-ong-accion-contra-el-hambre-30118.html"
              variant="primary"
            >Ayudanos</b-button>
            <template v-slot:footer>
              <small class="text-muted">Last updated 3 mins ago</small>
            </template>
          </b-card>
        </b-card-group>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  components: {},

  methods: {
    changePage() {
      console.log("Hey");
      this.$router.push({
        name: "login",
        params: { name: "world" }
      });
    }
  }
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.links a {
  margin: 0 15px;
}
</style>

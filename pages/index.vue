<template>
  <section class="container">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />
    <div>
      <div id="banner" class="banner">
        <h1 class="title" id="banner-title">biblio-front</h1>
        <h2 class="subtitle" id="banner-subtitle">Biblioteca digital Core Dumped, sección frontend</h2>
        <div class="links">
          <a href="/login" class="button--grey">Acceder</a>
          - OR -
          <a href="/register" class="button--grey">Registrarse</a>
        </div>
      </div>

      <div class="info">
        <b-card-group deck>
          <b-card class="c-card">
            <b-card-text>
              <p>
                <i class="fas fa-hands-helping fa-10x"></i>
              </p>Textp para manos
            </b-card-text>
          </b-card>

          <b-card class="c-card">
            <b-card-text>
              <p>
                <i class="fas fa-utensils fa-10x"></i>
              </p>Texto para utensilios
            </b-card-text>
          </b-card>

          <b-card class="c-card">
            <b-card-text>
              <p>
                <i class="fas fa-trash-alt fa-10x"></i>
              </p>Texto de basura
            </b-card-text>
          </b-card>
        </b-card-group>
      </div>

      <div class="news">
        <b-card-group deck>
          <b-card class="c-card"
            title="Acción contra el hambre"
            img-src="https://i.imgur.com/9qLjNnI.jpg"
            img-alt="Image"
            img-top
          >
            <b-card-text class="text-justify">
              <mdb-icon fab icon="accessible-icon" />Somos la primera generación que puede acabar con el hambre en el mundo. Con tu ayuda reducimos el riesgo y salvamos el mayor número de personas
            </b-card-text>
            <b-button href="https:\\www.accioncontraelhambre.org" variant="primary">Ayúdanos</b-button>
            <template v-slot:footer>
              <small class="text-muted">Última actualización 53 mins ago</small>
            </template>
          </b-card>

          <b-card class="c-card"
            title="Welt hunger hilfe"
            img-src="https://i.imgur.com/AyP6q3B.jpg"
            img-alt="Image"
            img-top
          >
            <b-card-text
              class="text-justify"
            >El hambre puede ser derrotado. Sus causas son conocidas, sus soluciones tambien. Es por esto que Welthungerhilfe tiene el objetivo de hacer todo lo que puede para acabar con el hambre: “Zero hunger wherever we work”.</b-card-text>
            <b-button href="welthungerhilfe.org" variant="primary">Ayúdanos</b-button>
            <template v-slot:footer>
              <small class="text-muted">Última actualización 45 mins ago</small>
            </template>
          </b-card>

          <b-card class="c-card"
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
            >Más información</b-button>
            <template v-slot:footer>
              <small class="text-muted">Última actualización 35 mins ago</small>
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
  },
    mounted() {
      window.addEventListener("resize", function () {
        var title = document.getElementById('banner-title');
        var subtitle = document.getElementById('banner-subtitle');
        var width = window.innerWidth;
        if(width <= 750) {
            title.classList.remove('big-title');
            title.classList.add('small-title');
            subtitle.classList.remove('big-subtitle');
            subtitle.classList.add('small-subtitle');
        } else {
            title.classList.remove('small-title');
            title.classList.add('big-title');
            subtitle.classList.remove('small-subtitle');
            subtitle.classList.add('big-subtitle');
        }
      });
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

.big-title {
  font-size: 100px;
}

.small-title {
  font-size: 60px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.big-subtitle {
  font-size: 42px;
}

.small-subtitle {
  font-size: 28px;
}

.links {
  padding-top: 15px;
}

.links a {
  margin: 0 15px;
}

.banner {
  background: rgba(0, 0, 0, 0.16);
  width: 100%;
  margin-bottom: 15%;
  padding: 50px 15px 100px;
  margin-top: 15%;
  box-shadow: 0 0 15px 8px;
}

.news {
  margin-bottom: 10%;
  width: 90vw;
}

.info {
  margin-bottom: 5%;
  width: 90vw;
}

.c-card {
  box-shadow: 0 0 10px 1px;
}
</style>

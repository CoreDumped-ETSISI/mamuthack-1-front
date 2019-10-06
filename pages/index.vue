<template>
  <section class="container">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />
    <link href='https://fonts.googleapis.com/css?family=Architects Daughter' rel='stylesheet'/>
    <link href='https://fonts.googleapis.com/css?family=Archivo Black' rel='stylesheet'/>
    <div class="background">
      <NoSsr>
        <parallax :speed-factor="0.3" sectionClass="container" containerClass="background" breakpoint="(min-width: 80px)">
          <img src="../assets/food-ground.jpg"width="1900">
        </parallax>
      </NoSsr>
    </div>
    <div>
      <div id="banner" class="banner">
        <img src="../assets/logo2.png" class="title" id="banner-title" alt="juejue"/>
        <h2 class="subtitle" id="banner-subtitle">Biblioteca digital Core Dumped, sección frontend</h2>
        <hr/>
        <b-row class="links">
          <b-col id="log-col" cols="12" md="5">
            <b-button id="loginButton" variant="info">Acceder</b-button>
          </b-col>
          <b-col id="or-col" cols="12" md="2">
            -- O --
          </b-col>
          <b-col id="reg-col" cols="12" md="5">
            <b-button id="registerButton" variant="success">Registrarse</b-button>
          </b-col>
        </b-row>
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
  import Parallax from "vue-parallaxy";

  function fixBannerResize() {
      var title = document.getElementById('banner-title');
      var subtitle = document.getElementById('banner-subtitle');
      var width = window.innerWidth;
      var logColumn = document.getElementById('log-col');
      var regColumn = document.getElementById('reg-col');
      var logButton = document.getElementById('loginButton');
      var registerButton = document.getElementById('registerButton');
      if(width <= 770) {
          title.classList.remove('big-title');
          title.classList.add('small-title');
          subtitle.classList.remove('big-subtitle');
          subtitle.classList.add('small-subtitle');
          logColumn.style.textAlign = 'center';
          regColumn.style.textAlign = 'center';
          registerButton.style.fontSize = '22px';
          logButton.style.fontSize = '22px';
      } else {
          title.classList.remove('small-title');
          title.classList.add('big-title');
          subtitle.classList.remove('small-subtitle');
          subtitle.classList.add('big-subtitle');
          logColumn.style.textAlign = 'right';
          regColumn.style.textAlign = 'left';
          registerButton.style.fontSize = '25px';
          logButton.style.fontSize = '25px';
      }
      var regButtonWidth = registerButton.offsetWidth;
      logButton.style.width = `${regButtonWidth}px`;
  }
export default {
  components: {
      Parallax
  },

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
      fixBannerResize();
      window.addEventListener("resize", fixBannerResize);
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
  display: block;
  margin: -8% auto -8% auto;
}

.big-title {
  width: 50%;
}

.small-title {
  width: 85%;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  font-family: 'Architects Daughter';
  color: black;
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
  background: rgba(255, 255, 255, 0.67);
  width: 75%;
  margin: 5% auto 15% auto;
  padding: 5% 5% 2.5% 5%;
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

#log-col {
  text-align: right;
}

#or-col {
  font-size: 175%;
  white-space: nowrap;
}

#reg-col {
  text-align: left;
}

#registerButton {
  font-size: 32px;
}

#loginButton {
  font-size: 38px;
}

.background {
  position: fixed;
  z-index: -10;
  background: #35495e;
  width: 100vw;
  height: 200vh;
}
</style>

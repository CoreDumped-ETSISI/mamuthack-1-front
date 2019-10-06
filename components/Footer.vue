<template>
  <b-navbar class="footer" toggleable="lg">
    <b-row>
      <b-col cols="0" sm="2"/>
      <b-col cols="12" sm="2">
        <p>
          <i class="fas fa-envelope"></i>
          alfredm3007@gmail.com
        </p>
        <p>
          <i class="fas fa-phone"></i>
          682455790
        </p>
        <p>
          <i class="fas fa-map-marker-alt"></i>
          Calle falsa 123, Madrid
        </p>
      </b-col>
      <b-col cols="0" sm="4"/>
      <b-col cols="12" sm="2">
        <p>
          <a href="#">
            <i class="fab fa-twitter-square"></i>
            Twitter
          </a>
        </p>
        <p>
          <a href="#">
            <i class="fab fa-facebook-square"></i>
            Facebook
          </a>
        </p>
        <p>
          <a href="#">
            <i class="fab fa-instagram"></i>
            Instagram
          </a>
        </p>
      </b-col>
      <b-col cols="0" sm="2"/>
    </b-row>
  </b-navbar>
</template>


<style scoped>
  .footer {
    background-color: #464646;
    padding: 50px;
  }

  .footer .row {
    width: 100%;
  }

  p, a {
    color: white;
    white-space: nowrap;
  }

  .fab {
    font-size: 30px;
    vertical-align: middle;
    color: white;
  }

  .fas {
    font-size: 30px;
    color: white;
    vertical-align: middle;
  }

</style>

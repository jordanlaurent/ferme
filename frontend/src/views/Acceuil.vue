<template>
<div >
  <Navbar-header class="navbarAcceuil" />
  <Search class="searchAcceuil"/>
  <Footer class="footerAcceuil" />
</div>
</template>

<script>

import NavbarHeader from '../components/NavbarHeader.vue';

import Footer from '../components/Footer.vue';
import Search from '../components/Search.vue';
export default {
  components: {  NavbarHeader,Footer, Search },
  created: function () {
    document.title = "Acceuil";
  },
  name: "Acceuil",
}
</script>

<style>
@media (max-width: 1040px){ 
html{background-image: url("../assets/homeBackround.webp");
 background-color:transparent;
  background-size: cover;
  width: 100%;
  height: 100%;}
}
@media (min-width: 1040px){ 
html{background-image: url("../assets/homeBackround.webp");
background-color:transparent;
 background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;}
}
.navbarAcceuil{
  position: relative;
  left: 0;
  right: 0;
  z-index: 3 ! important;
}
.searchAcceuil{
  z-index: 2 ! important;
}
.footerAcceuil{
  position: fixed;
   z-index: 3 ! important;
}
@media (max-width: 765px){ 
  .searchAcceuil{
  z-index: 2 ! important;
  padding-top: 50%;
}
}
@media (max-width: 965px){ 
  .searchAcceuil{
  z-index: 2 ! important;
  padding-top: 40%;
}
}
@media (max-width: 565px){ 
  .searchAcceuil{
  z-index: 2 ! important;
  padding-top: 70%;
}
}
</style>
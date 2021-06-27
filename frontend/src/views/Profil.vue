<template>
  <div>
  <Navbar-header />
   <Myprofil />
  <Footer />
</div>
</template>

<script>
import NavbarHeader from '../components/NavbarHeader.vue';
import Myprofil from '../components/Myprofil.vue';
import Footer from '../components/Footer.vue';
export default {
  components: {  NavbarHeader,Footer,Myprofil },
  created: function () {
    document.title = "Profil";
  },
  name: "Profil",
    data() {
    return {
		users:"",
    };

  },
}
</script>


<style >

</style>
<template>
<div>
  <Navbar-header />
  <InfoProto />
  <CommentProto />
  <Newprotoacceuil/>
  <Footer />
</div>
</template>

<script>
export default {
  created: function () {
    document.title = "Prototip";
  },
  name: 'Prototip',
    mounted () {
    var jwt = localStorage.getItem("jwt");
      if (jwt == null) {
         window.location = "/Connexion";
      } else {
        console.log("");
      }
  }
}
</script>

<script>
import Footer from '../components/Footer.vue';
import InfoProto from '../components/InfoProto.vue';
import CommentProto from '../components/CommentProto.vue';
import NavbarHeader from '../components/NavbarHeader.vue';
import Newprotoacceuil from '../components/NewProtoAcceuil.vue';
export default {
   components: { Footer, NavbarHeader,InfoProto,CommentProto,Newprotoacceuil },
  name: "PageProto",
};
</script>
<template>
<div  >
    <Navbar-header />
    <br>
    <br>
    <div class="mt-5 p-5 ">
    <div class="container ">
        <div class="row justify justify-content-center">
            <div class="col-11 col-md-8 col-lg-6">
                <form>
                    <div class="card bg-white">
                        <div class="row mt-0">
                            <div class="col-md-12 ">
                                <h4 class="text-success text-center pb-3">Contactez-nous</h4>
                                <p>Utilisez le formulaire ci-dessous pour partager vos questions, idées ou commentaires </p>
                            </div>
                        </div>
                        <div class="form-group row mb-3">
                            <div class="col-md-12 mb-0">
                                <p class="mb-1">Email</p> <input id="e-mail" type="text" placeholder="Entrer votre email" name="email" class="form-control input-box rm-border">
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-12 mb-2">
                                <p class="mb-1">Message</p> <textarea id="message" type="text" placeholder="Entrer votre message" name="message" class="form-control input-box rm-border"></textarea>
                            </div>
                        </div>
                        <div class="form-group row justify-content-center mb-0">
                            <div class="col-md-12 px-3"> <input type="submit" value="Envoyer" class="btn btn-block btn-success rm-border"> </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

    <Footer />
</div>
</template>

<script>

import NavbarHeader from '../components/NavbarHeader.vue';
import Footer from '../components/Footer.vue';
export default {
  components: {  NavbarHeader,Footer, },
  created: function () {
    document.title = "Contact";
  },
  name: "Contact",
}
</script>
<style scoped>

.box {
    margin: auto
}

.card {
    padding: 8%;
    padding-top: 35px;
    margin-top: 60px;
    margin-bottom: 80px
}

textarea[name="message"] {
    resize: none
}

#e-mail {
    height: 45px
}

#message {
    height: 120px
}

input.input-box,
textarea.input-box {
    background-color: #616161;
    border: #616161;
    color: #BDBDBD
}

input.input-box:focus,
textarea.input-box:focus {
    background-color: #000000;
    color: #BDBDBD
}

.rm-border:focus {
    border-color: inherit;
    -webkit-box-shadow: none;
    box-shadow: none
}

form .form-control::-webkit-input-placeholder {
    color: #9E9E9E
}

::-moz-placeholder {
    color: #9E9E9E !important
}

input.btn-purple {
    background-color: #5C6BC0;
    color: #ffffff
}

</style>
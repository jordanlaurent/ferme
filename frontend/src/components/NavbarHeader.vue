<template>
<header>
    <div class="px-3 py-2 bg-dark text-white">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between">

          <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small text-center">          
            <img  class="w-25" src="../assets/logo-manger-local-france.webp" alt="loho manger regional france"> 
            <li>
              <router-link to="Acceuil"  class="nav-link text-white btn-dark">
                <i class=" bi d-block mx-auto mb-1 fas fa-home" width="24" height="24"></i>
                Acceuil
              </router-link>
            </li>
            <li>
              <router-link to="Poster-votre-annonce" class="nav-link text-white btn-dark">
                  <i class="fas fa-pen bi d-block mx-auto mb-1 " width="24" height="24"></i>
                Poster une annonce
              </router-link>
            </li>
            <li>
              <router-link to="Contact"  class="nav-link text-white btn-dark">
                <i class="fas fa-envelope-open-text bi d-block mx-auto mb-1 " width="24" height="24"></i>
                Contact
              </router-link>
            </li>
            <li>
              <router-link v-if=" connecteds == 1 "  to="Favoris" class="nav-link text-white btn-dark">
                <i class="fas fa-heart bi d-block mx-auto mb-1 text-danger" width="24" height="24"></i>
                Favoris
              </router-link>
            </li>
            <li>
              <router-link v-if=" connecteds == 1 "  to="Profil" class="nav-link text-white btn-dark mr-4">
                <i class="fas fa-user-circle bi d-block mx-auto mb-1" width="24" height="24"></i>
                Profil
              </router-link>
            </li>
            <li>
              <a  class="nav-link text-white btn-danger btn" @click="disconnect"  v-if=" connecteds == 1 ">
               <i class="fas fa-sign-out-alt bi d-block mx-auto mb-1" width="24" height="24"></i>
                Déconnexion
              </a>
            </li>
             <!-- <li>
              <router-link v-if=" connecteds != 1 " to="Connexion" class="nav-link bg-light btn text-dark  mr-2">
                <i class="fas fa-user-circle bi d-block mx-auto mb-1" width="24" height="24"></i>
                Connexion
              </router-link>
            </li>
              <li>
              <router-link v-if=" connecteds != 1 " to="Inscription" class="nav-link bg-primary btn text-white ">
                <i class="fas fa-user-check bi d-block mx-auto mb-1" width="24" height="24"></i>
                Inscription
              </router-link>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
    <div v-if=" connecteds != 1 " class="px-3 py-2 border-bottom mb-3 pt-3 bg-white">
      <div class="container d-flex flex-wrap justify-content-center">
         <router-link to="Connexion"> <button  v-if=" connecteds != 1 " class="bg-light btn text-dark  mr-2"  >Connexion</button> </router-link>
           <router-link to="Inscription"> <button  v-if=" connecteds != 1 " class="bg-primary btn text-white  mr-2"  >Inscription</button> </router-link>
      </div>
    </div>
  </header>

</template>


<script>
export default {
  name: 'HelloWorld',
      data() {
    return {
		connecteds:localStorage.getItem("connected"),
    };

  },
  props: {
    msg: String
  },
 methods: {
      disconnect(){
      localStorage.clear();
      window.location = "/";
    },
 },
}
</script>


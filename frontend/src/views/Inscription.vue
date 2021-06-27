<template>
<div class="container-fluid">
  <div class="row no-gutter">
    <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
    <div class="col-md-8 col-lg-6 bgwhite">
      <div class="login d-flex align-items-center py-5">
        <div class="container">
			<h3 class="login-heading mb-4  text-center">BIENVENUE SUR MANGER-REGIONNAL.FR !</h3>
       <section class="popup" v-if="errors">
          <p class="text-danger FontGrass display-2">{{errors}}</p>
        </section>
          <div class="row">
            <div class="col-md-9 col-lg-8 mx-auto">
              <form  @submit="postData" method="post" role="form">
                <div class="form-label-group">
<input id="name" class="form-control" name="name" placeholder="Prenom" type="text" v-model="name" required autofocus />
                  <label for="name">  Prenom </label>
                </div>
                <div class="form-label-group">
					<input id="last_name" class="form-control" name="last_name" placeholder="Nom" type="text" v-model="last_name" required />
                  <label for="last_name"> Nom  </label>
                </div>
                <div class="form-label-group">
					<input id="email" v-model="email"  type="email" class="form-control" placeholder="Email" required autofocus />
                  <label for="email"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  class="bi bi-person " viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg>   Adresse email  </label>
                </div>

                <div class="form-label-group">
					
                  <input id="password" v-model="password" type="password" class="form-control" placeholder="Mots de passe" required />
                  <label for="password"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
<path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
</svg> Mots de passe</label>
                </div>

                <div class="custom-control custom-checkbox mb-3">
                  <input type="checkbox" class="custom-control-input" id="customCheck1">
                  <label class="custom-control-label" for="customCheck1">Se souvenir du mots de passe</label>
                </div>
                <button class="btn btn-lg btn-success btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Inscription</button>
                <div class="text-center">
                 <p>Vous avez déja un compte  ?</p>  <router-link to="Connexion" class="text-success">Connexion</router-link>  <br> <a class="small text-success" href="#">Mots de passe oublié ?</a></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  <!-- <div class="row ">
        <div class=" well well-sm centerTxt colorWTSP p-2">
            <legend class="text-success ">Inscription !</legend>
            <form @submit="postData" method="post" class="form " role="form">
            <div class="row pb-3">
                <div class="col-xs-6 col-md-6">
                    <input id="name" class="form-control" name="name" placeholder="Prenom" type="text" v-model="name"
                        required autofocus />
                </div>
                <div class="col-xs-6 col-md-6">
                    <input id="last_name" class="form-control" name="last_name" placeholder="Nom" type="text" v-model="last_name" required />
                </div>
            </div>
            <input id="email" class="form-control mb-3" name="email" placeholder="Adresse Email" type="email" v-model="email" required />
            <input id="password" class="form-control mb-3" name="password" placeholder="Mots de passe" type="password" v-model="password" required />
            <div class="form-group text-light">
        <label for="file" class="label-profil-group mr-2 text-dark " id="label-file">Image de profil  </label>
        <input  type="file" id="file" name="image" ref="file" accept="image/png, image/jpeg, image/jpg" class="text-dark ">
      </div>
      <section class="popup" v-if="errors">
          <p class=" text-dark FontGrass">{{errors}}</p>
        </section>
            <button class="btn btn-lg btn-success btn-block" type="submit"> Inscription</button>
            </form>
            <div class="d-flex justify-content-center links pt-3 text-dark">
					Vous avez déja un compte  ?<router-link to="Connexion" class="text-success">Connexion</router-link>
				</div>
        </div>
    </div> -->
</template>

<script>
const axios = require('axios');
export default {
  name: "Inscription",
   data() {
    return {
      email: '',
      password: "",
      name: "",
      last_name:"",
      studio_name:"",
      errors:'',
    };
  },
  methods: {
    postData(e) {
        e.preventDefault();
      var optionAxios = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
     axios
        .post(
          "http://localhost:3000/api/auth/signup",
          {
            email: this.email,
            password: this.password,
            name: this.name,
            last_name:this.last_name,
            //studio_name: this.studio_name,
          },
          { optionAxios }
        )
        .then(() => {
            window.location = "/Connexion";
        })
        .catch((error) => {
           (this.errors = error.response.data);
        });
    }
  },

};
</script>
<style scoped>
@media (max-width: 765px){ 
  body{color: white;}
  label{color: rgb(0, 0, 0);}
  .bgwhite{background-color: rgba(2, 2, 2, 0.541);
  }
}
@media (min-width: 766px){ 
  h3,p{color: black;}
  .bgwhite{background-color: white;
  }
  label{color: black;}
}
</style>
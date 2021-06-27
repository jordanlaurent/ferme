<template>
<div class="container-fluid">
  <div class="row no-gutter">
    <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
    <div class="col-md-8 col-lg-6 bgwhite">
      <div class="login d-flex align-items-center py-5">
        <div class="container">
			<h3 class="login-heading mb-4  text-center">Content de te revoir !</h3>
          <div class="row">
            <div class="col-md-9 col-lg-8 mx-auto">
				<section class="popup" v-if="errors">
          <p class=" text-danger FontGrass display-3">{{errors}}</p>
        </section>
              <form @submit="postData" method="post" role="form">
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
                <button class="btn btn-lg btn-success btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Connexion</button>
                <div class="text-center">
                  <router-link to="Inscription" class="text-success">Crée un compte</router-link> <br> <a class="small text-success" href="#">Mots de passe oublié ?</a></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
const axios = require('axios');
export default {
  created: function () {
    document.title = "Connexion";
  },
  name: "Connexion",
     data() {
    return {
		errors:'',
      email: '',
      password: "",
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
          "http://localhost:3000/api/auth/login",
          {
            email: this.email,
            password: this.password,
          },
          { optionAxios }
        )
        .then((res) => {
          console.log(res)
            localStorage.setItem("user", res.data.token)
             localStorage.setItem("connected", 1)
            this.$router.replace({ name: "Acceuil" });
        })
        .catch((error) => {
          (this.errors = error.response.data.error)
        });
    }
  },
};
</script>
<style>
:root {
  --input-padding-x: 1.5rem;
  --input-padding-y: 0.75rem;
}

.login,
.image {
  min-height: 100vh;
}

.bg-image {
  background-image: url('../assets/homeBackround.webp');
  background-size: cover;
  background-position: center;
}

.login-heading {
  font-weight: 300;
}

.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
  border-radius: 2rem;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group>input,
.form-label-group>label {
  padding: var(--input-padding-y) var(--input-padding-x);
  height: auto;
  border-radius: 2rem;
}

.form-label-group>label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0;
  /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  cursor: text;
  /* Match the input under the label */
  border: 1px solid transparent;
  border-radius: .25rem;
  transition: all .1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
  padding-bottom: calc(var(--input-padding-y) / 3);
}

.form-label-group input:not(:placeholder-shown)~label {
  padding-top: calc(var(--input-padding-y) / 3);
  padding-bottom: calc(var(--input-padding-y) / 3);
  font-size: 12px;
  color: #777;
}

/* Fallback for Edge
-------------------------------------------------- */

@supports (-ms-ime-align: auto) {
  .form-label-group>label {
    display: none;
  }
  .form-label-group input::-ms-input-placeholder {
    color: #777;
  }
}

/* Fallback for IE
-------------------------------------------------- */

@media all and (-ms-high-contrast: none),
(-ms-high-contrast: active) {
  .form-label-group>label {
    display: none;
  }
  .form-label-group input:-ms-input-placeholder {
    color: #777;
  }
}
@media (max-width: 765px){ 
  body{color: white;}
  label{color: rgb(0, 0, 0);}
  .bgwhite{background-color: rgba(2, 2, 2, 0.541);
  }
}
@media (min-width: 766px){ 
  h3{color: black;}
  .bgwhite{background-color: white;
  }
  label{color: black;}
}
</style>
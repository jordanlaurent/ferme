<template>

<div class="wrapper blocProfil ">
    <div class="col text-center "> <img class="imgprofil" :src="user.picture"  alt="">
    <div class="pl-sm-5  mt-5">
    <h3>{{ user.name}} {{ user.last_name}}</h3>
    <br>
    <h5>{{ user.email }}</h5>
    <br>
     <form action="submit" @submit.prevent="editProfil" class="user-modify" enctype="multipart/form-data">                                                                                                                                              
      <div class="form-group">
        <label for="file" class=" text-white mr-2 mt-2 btn btn-dark " id="label-file">Changer votre avatar

        <input type="file" id="file" name="image" ref="file"  accept="image/png, image/jpeg, image/jpg" @change="handleFileUpload()">
        </label>
        <button id="submit-profil" class="btn-success btn">Publier profil</button>
      </div>
    </form>
        </div>
    </div>
    <div class="py-2">
        <div class="row py-2">
            <div class="col-md-6"> <label class="text-dark" for="firstname">Prenom</label> <input type="text" class="bg-light form-control" placeholder="Steve"> </div>
            <div class="col-md-6 pt-md-0 pt-3"> <label class="text-dark" for="lastname">Nom de famille</label> <input type="text" class="bg-light form-control" placeholder="Smith"> </div>
        </div>
        <div class="row py-2">
            <div class="col-md-6"> <label class="text-dark" for="email">Adresse Email</label> <input type="text" class="bg-light form-control" placeholder="steve_@email.com"> </div>
            <div class="col-md-6 pt-md-0 pt-3"> <label  class="text-dark" for="phone">Numero de telephone</label> <input type="tel" class="bg-light form-control" placeholder="06 25 25 25 25 "> </div>
        </div>
        <div class="row py-2">
            <div class="col-md-6"> <label class="text-dark" for="country">Votre région : </label> <select name="country" id="country" class="bg-dark btn-dark">
                    <option value="india" selected>India</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                    <option value="uae">UAE</option>
                </select> </div>
            <div class="col-md-6 pt-md-0 pt-3" id="lang"> <label class="text-dark" for="language">Vous étes :</label>
                <div class="arrow"> <select name="language" id="language" class="bg-dark btn-dark">
                        <option value="Producteur" selected>Producteur</option>
                        <option value="Consomateur">Consomateur</option>
                    </select> </div>
            </div>
        </div>
        <div class="py-3 pb-4 border-bottom"> <button class="btn btn-primary mr-3">Sauvegarder les changements</button> <button class="btn border button">Annuler</button> </div>
        <div class="d-sm-flex align-items-center pt-3" id="deactivate">
            <div> <b>Supprimer votre compte</b>
                <p>Toute les informations seront effacer de notre base de données</p>
            </div>
            <div class="ml-auto">  <b-button id="show-btn" class="btn btn-danger" @click="showModal">Supprimer mon compte</b-button>
        <b-modal ref="my-modal" hide-footer title="Etes vous sur de vouloir supprimer votre compte ?">
          <b-button @click.prevent="delecteAccount" class="mt-3 btn-danger" block>Valider</b-button>
          <b-button class="mt-2" block @click="toggleModal">Annuler</b-button>
        </b-modal> </div>
        </div>
    </div>
</div>
</template>

<script>
const axios = require('axios');
import FormData from 'form-data';
export default {
  name: 'Myprofil',
  data() {
    return {
		user:"",
        file: '',
        userid : localStorage.getItem("user")
    };

  },
methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
        toggleModal() {
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
   handleFileUpload() {
        this.file = this.$refs.file.files[0];
        },
     editProfil() {
            const formData = new FormData();
            formData.append('image', this.file)
             formData.append('userid', this.userid)
            axios.put('http://localhost:3000/api/auth/photo' , formData, {
                headers : {'Content-Type' : 'multipart/form-data'}
            })
                this.$router.go(0);
        },
        delecteAccount() {
      axios
        .delete("http://localhost:3000/api/auth/user/delete", {
          data: {
            userid: localStorage.getItem("user"),
          },
        })
        .then((response) => {
          localStorage.clear;
          //window.location = "/";
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
},
  mounted () {
    var jwt = localStorage.getItem("user");
      if (jwt == null) {
         window.location = "/";
      } else {
        console.log("");
      }
       axios.post("http://localhost:3000/api/auth/user",
        {
            userid: localStorage.getItem("user"),
          }).then((response) => {
            this.user = response.data 
            console.log(response) 
     })
   }
}
</script>

<style>
p,h5,label{
    color: black;
}
body{
  background-color: #f1f2f6 ! important;
}
@media (min-width: 1040px){ 
.imgprofil{
    height:180px;
    width:180px;
     border-radius: 50%;
   object-fit: cover;
}
.blocProfil{padding-left: 20%;padding-right: 20%;padding-top: 2%;}
}
@media (max-width: 1040px){ 
.imgprofil{
  height:180px;
    width:180px;
     border-radius: 50%;
 object-fit: cover;
}
.blocProfil{padding-left: 2%;padding-right: 2%; display: flex;flex-wrap: wrap;padding-top: 10%;margin: 0%; }
}
#file{
 display: none;
}
</style>

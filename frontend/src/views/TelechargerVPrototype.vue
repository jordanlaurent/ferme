<template>
<div >
  <Navbar-header />
<br>
<div class="wrapper protoSize">
    <div class="form-left">
        <h2 class="text-uppercase">information</h2>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et molestie ac feugiat sed. Diam volutpat commodo. </p>
        <p class="text"> <span>Sub Head:</span> Vitae auctor eu augudsf ut. Malesuada nunc vel risus commodo viverra. Praesent elementum facilisis leo vel. </p>
        <div class="form-field"> <input type="submit" class="account" value="Une question ?"> </div>
    </div>
    <form @submit="postData" method="post" role="form" class="form-right">
        <h2 class="text-uppercase text-success">Votre annonce</h2>
            <div class="mb-3"> <label>Nom de l'exploitation</label> <input type="text" name="manufacturer" id="manufacturer" v-model="manufacturer" class="input-field" required> </div>
            <div class="mb-3"> <label>Adresse </label> <input type="text" name="adresse" id="adresse" v-model="adresse" class="input-field" placeholder="99, rue des Dunes SAINT-MALO" required> </div>
            <div class="mb-3"> <label>Numero de telephone de contact (non obligatoire)</label> <input type="number" name="phone" id="phone" v-model="phone" class="input-field"> </div>
             <div class="mb-3"> <label>Email de contact (non obligatoire)</label> <input type="email" name="email" id="email" class="input-field" v-model="email"> </div>
              <div class="dropdown mb-3"> <button class="btn btn-secondary dropdown-toggle" type="button" id="region" name="region" data-toggle="dropdown"  aria-expanded="false"> Département </button>
                            <ul  class="dropdown-menu scrollable-menu" aria-labelledby="region" >
                                <li><option class="dropdown-item" href="#">01	Ain</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 02	Aisne</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 03	Allier</option></li>
                                 <hr>
                               <li><option class="dropdown-item" href="#">04	Alpes-de-Haute-Provence</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 05	Hautes-Alpes</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 06	Alpes-Maritimes</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 07	Ardèche</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 08	Ardennes</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 09	Ariège</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 10	Aube</option></li>
                                 <hr>
                               <li><option class="dropdown-item" href="#">11	Aude</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 12	Aveyron</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 13	Bouches-du-Rhône</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 14	Calvados</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 15	Cantal</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 16	Charente</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 17	Charente-Maritime</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 18	Cher</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 19	Corrèze</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 2A	Corse-du-Sud</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 2B	Haute-Corse</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 21	Côte-d'Or</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 22	Côtes d'Armor</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 23	Creuse</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 24	Dordogne</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 25	Doubs</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 26	Drôme</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 27	Eure</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 28	Eure-et-Loir</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 29	Finistère</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 30	Gard</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 31	Haute-Garonne</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 32	Gers</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 33	Gironde</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 34	Hérault</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 35	Ille-et-Vilaine</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 36	Indre</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 37	Indre-et-Loire</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 38	Isère</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 39	Jura</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 40	Landes</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 41	Loir-et-Cher</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 42	Loire</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 43	Haute-Loire</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 44	Loire-Atlantique</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 45	Loiret</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 46	Lot</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 47	Lot-et-Garon</option></li>ne
                                <hr>
                               <li><option class="dropdown-item" href="#"> 48	Lozère</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 49	Maine-et-Loire</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 50	Manche</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 51	Marne</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 52	Haute-Marne</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 53	Mayenne</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 54	Meurthe-et-Mosel</option></li>le
                                <hr>
                               <li><option class="dropdown-item" href="#"> 55	Meuse</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 56	Morbihan</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 57	Moselle</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 58	Nièvre</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 59	Nord</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 60	Oise</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 61	Orne</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 62	Pas-de-Calais</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 63	Puy-de-Dôme</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 64	Pyrénées-Atlantiques</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 65	Hautes-Pyrénées</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 66	Pyrénées-Orientales</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 67	Bas-Rhin</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 68	Haut-Rhin</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 69	Rhône</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 70	Haute-Saône</option></li>
                                <hr>
                               <li><option class="dropdown-item" href="#"> 71	Saône-et-Loire</option></li>
                                <hr>
                               <li><option class="dropdown-item" value="72	Sarthe"> 72	Sarthe</option></li>
                               <hr>
                               <li><option class="dropdown-item" value="73	Savoie">  73	Savoie</option></li>
                               <hr>
                               <li><option class="dropdown-item" value="74	Haute-Savoie">  74	Haute-Savoie</option></li>
                               <hr>
                               <li><option class="dropdown-item" value="75	Paris">  75	Paris</option></li>
                               <hr>
                               <li><option class="dropdown-item" value="76	Seine-Maritime">  76	Seine-Maritime</option></li>
                                <hr>
                               <li><option class="dropdown-item" value="77	Seine-et-Marne"> 77	Seine-et-Marne</option></li>
                               <hr>
                               <li><option class="dropdown-item" value="78	Yvelines">  78	Yvelines</option></li>
                                <hr>
                               <li><option class="dropdown-item" value="79	Deux-Sèvres"> 79	Deux-Sèvres</option></li>
                                <hr>
                               <li><option class="dropdown-item" value="80	Somme"> 80	Somme</option></li>
                               <hr>
                               <li><option class="dropdown-item" value="81	Tarn">  81	Tarn</option></li>
                               <hr>
                               <li><option class="dropdown-item" value="82	Tarn-et-Garon">  82	Tarn-et-Garon</option></li>ne
                               <hr>
                               <li><option class="dropdown-item" value="83	Var">  83	Var</option></li>
                              <hr>
                               <li><option class="dropdown-item" value="84	Vaucluse">   84	Vaucluse</option></li>
                               <hr>
                               <li><option class="dropdown-item" value="85	Vendée">  85	Vendée</option></li>
                               <hr>
                               <li><option class="dropdown-item" value="86	Vienne">  86	Vienne</option></li>
                                <hr>
                               <li><option class="dropdown-item" value="87	Haute-Vienne"> 87	Haute-Vienne</option></li>
                               <hr>
                               <li><option class="dropdown-item" value="88	Vosges">  88	Vosges</option></li>
                               <hr>
                               <li><option class="dropdown-item" value="89	Yonne">  89	Yonne</option></li>
                                <hr>
                               <li><option class="dropdown-item" value="90	Territoire de Belfort"> 90	Territoire de Belfort</option></li>
                               <hr>
                               <li><option class="dropdown-item" value="91	Essonne">  91	Essonne</option></li>
                                <hr>
                               <li><option class="dropdown-item" value="92	Hauts-de-Seine"> 92	Hauts-de-Seine</option></li>
                                <hr>
                               <li><option class="dropdown-item" value="93	Seine-St-Denis"> 93	Seine-St-Denis</option></li>
                                <hr>
                               <li><option class="dropdown-item" value="94	Val-de-Marne"> 94	Val-de-Marne</option></li>
                                <hr>
                               <li><option class="dropdown-item" value="95	Val-D'Oise"> 95	Val-D'Oise</option></li>
                            </ul>
                        </div>

                        <!-- Choix producteur/ boucherie ... -->
                    <div class="choiceProducteur">
                        <div class="col text-left ">
                         <div class="row"> <input type="checkbox" id="legume" v-model="legume" value="legume"  name="legume" >
                                <label for="scales" class="text-info ml-2"> Legume</label>
                            </div>
                            <br>
                            <div class="row"> <input type="checkbox" id="fruits" v-model="fruits" value="fruits"  name="fruits" >
                                <label for="scales" class="text-success ml-2">fruits</label>
                            </div>
                            <br>
                            <div class="row"> <input type="checkbox" id="viande" v-model="viande" value="viande"  name="viande" >
                                <label for="scales" class="text-secondary ml-2">viande</label>
                            </div>
                        </div>
                        <div class="col text-left mb-3">
                            <br>
                            <div class="row"> <input type="checkbox" id="poisson" v-model="poisson" value="poisson"  name="poisson" >
                                <label for="scales" class="text-primary ml-2"> poisson</label>
                            </div>
                            <br>
                            <div class="row"> <input type="checkbox" id="fromage" v-model="fromage" value="fromage"  name="fromage" >
                                <label for="scales" class="text-warning ml-2"> fromage</label>
                            </div>
                             <br>
                            <div class="row"> <input type="checkbox" id="vignoble" v-model="vignoble" value="vignoble"  name="vignoble" >
                                <label for="scales" class="text-danger ml-2"> vignoble</label>
                            </div>
                        </div>
                    </div>
                    <!-- Votre site web ... -->
        <div class="mb-3"> <label>Site web / page facebook</label> <input type="text" class="input-field" name="website" id="website" v-model="website"> </div>
        <div class="row">
          <!-- message de presentation ... -->
        <div class="col-md-12 mb-2">
          <p class="mb-3 text-dark">Message de présentation </p> <textarea  id="description" name="description" v-model="description" type="text" placeholder="Mon exploitation vends des produit bio depuis plus de 20 ans. Nous vendons des pomme, poire..."  class="form-control input-box rm-border" required></textarea>
        </div>    
         <label for="file" class=" text-white mr-2 mt-2 btn btn-dark " id="label-file">Image de votre annonce

        <input type="file" id="file" name="image" ref="file"  accept="image/png, image/jpeg, image/jpg" @change="handleFileUpload()"></label>          
        </div>
        <div class="mb-3"> <label class="option">Je suis d'accord avec les <a href="#" class="text-success">Termes et conditions</a> <input type="checkbox" required> <span class="checkmark"></span> </label> </div>
        <div class="form-field"> <input type="submit" value="Enregistrer" class="register bg-success" name="register"> </div>
    </form>
</div>

  <Footer />
</div>
</template>

<script>
const axios = require('axios');
import NavbarHeader from '../components/NavbarHeader.vue';
import Footer from '../components/Footer.vue';
export default {
  components: {  NavbarHeader,Footer, },
  created: function () {
    document.title = "Poster votre annonce";
  },
  name: "Telecharger_Votre_Prototype",
  data() {
      return {
         userId: localStorage.getItem("user"),
         manufacturer:"",
         description:"",
         phone:"",
         email:"",
         website:"",
         legume: "",
         fruits: "",
         viande: "",
         poisson: "",
         fromage: "",
         vignoble: "",
         file: '',
         adresse:"",
         region:"", 
      }
  },
    methods: {
        handleFileUpload() {
        this.file = this.$refs.file.files[0];
        },
    postData(e) {
        e.preventDefault();
      var optionAxios = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
     axios
        .post(
          "http://localhost:3000/api/sauces/create",
          {
         userId: this.userId,
         manufacturer: this.manufacturer,
         description:this.description,
         phone:this.phone,
         email:this.email,
         website:this.website,
         legume:this.legume,
         fruits: this.fruits,
         viande: this.viande,
         poisson: this.poisson,
         fromage: this.fromage,
         vignoble: this.vignoble,
         imageUrl: this.imageUrl,
         adresse:this.adresse,
         region:this.region, 
          },
          { optionAxios }
        )
        .then(() => {
           // window.location = "/listAnnonces";
        })
        .catch((error) => {
           (this.errors = error.response.data);
        });
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif
}

body {
    background: #00E5FF;
    min-height: 100vh
}
textarea {
  width: 300px;
  min-height: 150px;
}

.wrapper {
    max-width: 850px;
    background-color: #fff;
    border-radius: 10px;
    position: relative;
    display: flex;
    margin: 50px auto;
    box-shadow: 0 8px 20px 0px #1f1f1f1a;
    overflow: hidden
}

.wrapper .form-left {
    background: #06ac0f;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 20px 40px;
    position: relative;
    width: 100%;
    color: #fff
}

.wrapper h2 {
    font-weight: 700;
    font-size: 25px;
    padding: 5px 0 0;
    margin-bottom: 34px;
    pointer-events: none
}

.wrapper .form-left p {
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 1.5;
    pointer-events: none
}

.wrapper .form-left .text {
    margin: 20px 0 25px
}

.wrapper .form-left p span {
    font-weight: 700
}

.wrapper .form-left input {
    padding: 15px;
    background: #fff;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 180px;
    border: none;
    margin: 15px 0 50px 0px;
    cursor: pointer;
    color: #333;
    font-weight: 700;
    font-size: 0.9rem;
    appearance: unset;
    outline: none
}

.wrapper .form-left input:hover {
    background-color: #f2f2f2
}

.wrapper .form-right {
    padding: 20px 40px;
    position: relative;
    width: 100%
}

.wrapper .form-right h2 {
    color: #3786bd
}

.wrapper .form-right label {
    font-weight: 600;
    font-size: 15px;
    color: #666;
    display: block;
    margin-bottom: 8px
}

.wrapper .form-right .input-field {
    width: 100%;
    padding: 10px 15px;
    border: 1px solid #e5e5e5;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;
    outline: none;
    color: #333
}

.wrapper .form-right .input-field:focus {
    border: 1px solid #31a031
}

.wrapper .option {
    display: block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 12px;
    font-size: 0.95rem;
    font-weight: 900;
    cursor: pointer;
    user-select: none
}

.wrapper .option input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0
}

.wrapper .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    background-color: #fff;
    border: 2px solid #ddd;
    border-radius: 2px
}

.wrapper .option:hover input~.checkmark {
    background-color: #f1f1f1
}

.wrapper .option input:checked~.checkmark {
    border: 2px solid #e5e5e5;
    background-color: #fff;
    transition: 300ms ease-in-out all
}

.wrapper .checkmark:after {
    content: "\2713";
    position: absolute;
    display: none;
    color: #3786bd;
    font-size: 1rem
}

.wrapper .option input:checked~.checkmark:after {
    display: block
}

.wrapper .option .checkmark:after {
    left: 2px;
    top: -4px;
    width: 5px;
    height: 10px
}

.wrapper .register {
    padding: 12px;
    background: #3786bd;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 130px;
    border: none;
    margin: 6px 0 50px 0px;
    cursor: pointer;
    color: #fff;
    font-weight: 700;
    font-size: 15px
}

.wrapper .register:hover {
    background-color: #3785bde0
}

.wrapper a {
    text-decoration: none
}

@media (max-width: 860.5px) {
    .wrapper {
        margin: 50px 5px
    }
}

@media (max-width: 767.5px) {
    .wrapper {
        flex-direction: column;
        margin: 30px 20px
    }

    .wrapper .form-left {
        border-bottom-left-radius: 0px
    }
}

@media (max-width: 575px) {
    .wrapper {
        margin: 30px 15px
    }

    .wrapper .form-left {
        padding: 25px
    }

    .wrapper .form-right {
        padding: 25px
    }
}
.protoSize {
 padding: 5%;
    
}
.choiceProducteur{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
<template>
    <form @submit="postData" method="post" role="form" class="text-center search">
        <h1 class=" p-2 mb-4">Envie de trouver des produits locaux près de chez toi ?</h1>
        <div class="input-group justify-content-center col pb-5">
            <div class="dropdown mr-5 mb-2"> <button class="btn btn-success pl-5 pr-5 ml-3 font-weight-bold dropdown-toggle btn-lg" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false"> Département </button>
                            <ul class="dropdown-menu scrollable-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item" href="#">01	Ain</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 02	Aisne</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 03	Allier</a></li>
                                 <hr>
                               <li><a class="dropdown-item" href="#">04	Alpes-de-Haute-Provence</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 05	Hautes-Alpes</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 06	Alpes-Maritimes</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 07	Ardèche</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 08	Ardennes</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 09	Ariège</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 10	Aube</a></li>
                                 <hr>
                               <li><a class="dropdown-item" href="#">11	Aude</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 12	Aveyron</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 13	Bouches-du-Rhône</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 14	Calvados</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 15	Cantal</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 16	Charente</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 17	Charente-Maritime</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 18	Cher</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 19	Corrèze</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 2A	Corse-du-Sud</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 2B	Haute-Corse</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 21	Côte-d'Or</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 22	Côtes d'Armor</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 23	Creuse</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 24	Dordogne</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 25	Doubs</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 26	Drôme</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 27	Eure</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 28	Eure-et-Loir</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 29	Finistère</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 30	Gard</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 31	Haute-Garonne</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 32	Gers</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 33	Gironde</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 34	Hérault</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 35	Ille-et-Vilaine</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 36	Indre</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 37	Indre-et-Loire</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 38	Isère</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 39	Jura</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 40	Landes</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 41	Loir-et-Cher</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 42	Loire</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 43	Haute-Loire</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 44	Loire-Atlantique</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 45	Loiret</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 46	Lot</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 47	Lot-et-Garon</a></li>ne
                                <hr>
                               <li><a class="dropdown-item" href="#"> 48	Lozère</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 49	Maine-et-Loire</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 50	Manche</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 51	Marne</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 52	Haute-Marne</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 53	Mayenne</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 54	Meurthe-et-Mosel</a></li>le
                                <hr>
                               <li><a class="dropdown-item" href="#"> 55	Meuse</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 56	Morbihan</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 57	Moselle</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 58	Nièvre</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 59	Nord</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 60	Oise</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 61	Orne</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 62	Pas-de-Calais</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 63	Puy-de-Dôme</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 64	Pyrénées-Atlantiques</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 65	Hautes-Pyrénées</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 66	Pyrénées-Orientales</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 67	Bas-Rhin</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 68	Haut-Rhin</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 69	Rhône</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 70	Haute-Saône</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 71	Saône-et-Loire</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 72	Sarthe</a></li>
                               <hr>
                               <li><a class="dropdown-item" href="#">  73	Savoie</a></li>
                               <hr>
                               <li><a class="dropdown-item" href="#">  74	Haute-Savoie</a></li>
                               <hr>
                               <li><a class="dropdown-item" href="#">  75	Paris</a></li>
                               <hr>
                               <li><a class="dropdown-item" href="#">  76	Seine-Maritime</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 77	Seine-et-Marne</a></li>
                               <hr>
                               <li><a class="dropdown-item" href="#">  78	Yvelines</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 79	Deux-Sèvres</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 80	Somme</a></li>
                               <hr>
                               <li><a class="dropdown-item" href="#">  81	Tarn</a></li>
                               <hr>
                               <li><a class="dropdown-item" href="#">  82	Tarn-et-Garon</a></li>ne
                               <hr>
                               <li><a class="dropdown-item" href="#">  83	Var</a></li>
                              <hr>
                               <li><a class="dropdown-item" href="#">   84	Vaucluse</a></li>
                               <hr>
                               <li><a class="dropdown-item" href="#">  85	Vendée</a></li>
                               <hr>
                               <li><a class="dropdown-item" href="#">  86	Vienne</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 87	Haute-Vienne</a></li>
                               <hr>
                               <li><a class="dropdown-item" href="#">  88	Vosges</a></li>
                               <hr>
                               <li><a class="dropdown-item" href="#">  89	Yonne</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 90	Territoire de Belfort</a></li>
                               <hr>
                               <li><a class="dropdown-item" href="#">  91	Essonne</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 92	Hauts-de-Seine</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 93	Seine-St-Denis</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 94	Val-de-Marne</a></li>
                                <hr>
                               <li><a class="dropdown-item" href="#"> 95	Val-D'Oise</a></li>
                            </ul>
                        </div>
            <div class="form-outline row mb-2 mr-2">
                <input type="search" id="adresse" name="adresse" v-model="adresse" class="form-control btn-lg"  placeholder="Chercher par ville "/>
            </div>
            <div class=" mr-5 mb-2">
            <button type="submit" class="btn btn-success pl-5 pr-5 ml-3 font-weight-bold btn-lg">
             Rechercher   
            </button>
            </div>
        </div>
      <div class="bg-dark rounded pt-2">
          <input type="checkbox" id="legume" v-model="legume" value="legume"  name="legume" >
          <label for="scales" class="text-info ml-2"><i class="fas fa-carrot"></i><br> Legume</label>

          <input class=" pl-4 ml-5 text-success" type="checkbox" id="fruits" v-model="fruits" value="fruits"  name="fruits" >
          <label for="scales" class="text-success ml-1"><i class="fas fa-apple-alt"></i><br>fruits</label>

          <input class=" p-4 ml-5 " type="checkbox" id="viande" v-model="viande" value="viande"  name="viande" >
          <label for="scales" class="text-secondary ml-1"><i class="fas fa-drumstick-bite"></i><br>viande</label>

          <input class="p-4 ml-5 text-danger" type="checkbox" id="poisson" v-model="poisson" value="poisson"  name="poisson" >
            <label for="scales" class="text-primary ml-1"><i class="fas fa-fish"></i><br> poisson</label>

          <input class=" p-4 ml-5 text-danger" type="checkbox" id="fromage" v-model="fromage" value="fromage"  name="fromage" >
          <label for="scales" class="text-warning ml-1"><i class="fas fa-cheese"></i><br> fromage</label>

          <input class=" p-4 ml-5 text-danger" type="checkbox" id="vignoble" v-model="vignoble" value="vignoble"  name="vignoble" >
          <label for="scales" class="text-danger ml-1"><i class="fas fa-glass-cheers "></i><br> vignoble</label>
      </div>
  </form>
</template>

<script>
const axios = require('axios');
export default  ({
  name: 'search',
  data() {
    return {
      legume: "",
      fruits: "",
      viande: "",
      poisson: "",
      fromage: "",
      vignoble: "",
      region:"",
      adresse:"",
    }
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
          "http://localhost:3000/api/sauces/search",{
         legume:this.legume,
         fruits: this.fruits,
         viande: this.viande,
         poisson: this.poisson,
         fromage: this.fromage,
         vignoble: this.vignoble,
         adresse:this.adresse,
         region:this.region, 
            },
          { optionAxios }
        )
        .then((response) => {
          this.annonces = response.data
            window.location = "/listAnnonces";
        })
        .catch((error) => {
           (this.errors = error.response.data);
        });
    }
  },
})
</script>

<style>
.search{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 15%;
    background-image: url("../assets/search-manger-local.webp");
    background-size: cover;
    justify-content: center;
    overflow-y: scroll;

overflow-x: hidden;
}
label{
    color: white;
    font-size: 20px;
}
.scrollable-menu {
    height: auto;
    max-height: 320px;
    overflow-x: hidden;
}
</style>
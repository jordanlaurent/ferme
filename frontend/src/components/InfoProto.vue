<template>
<section class=" Pres   pb-5">
    <img class="imgAnnonce img-thumbnail mx-auto d-block " src="https://media.lesechos.com/api/v1/images/view/5f7de923d286c2613b49d2e7/1280x720/0604024908745-web-tete.jpg" >
    <div class="textPres">
    <h1 class="text-dark pb-4 text-nowrap"> OLIVIA production de pomme local  </h1>
    <h4 class="text-dark pb-3"><i class="fas fa-star text-warning"></i> Note moyenne : 8.4 / 10   </h4>
    <div class="dropdown">
								<a class="text-dark" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<p>Votre note: <i class="fas fa-chevron-down"></i> </p>
								</a>

								<div class="dropdown-menu text-center" aria-labelledby="dropdownMenuLink">
									<a class="dropdown-item text-white bg-success" href="#">10</a>
									<a class="dropdown-item text-white bg-success" href="#">9</a>
                                    <a class="dropdown-item text-white bg-primary" href="#">8</a>
                                    <a class="dropdown-item text-white bg-primary" href="#">7</a>
                                    <a class="dropdown-item text-white bg-info" href="#">6</a>
                                    <a class="dropdown-item text-white bg-info" href="#">5</a>
                                    <a class="dropdown-item text-white bg-warning" href="#">4</a>
                                    <a class="dropdown-item text-white bg-warning" href="#">3</a>
                                    <a class="dropdown-item text-white bg-danger" href="#">2</a>
                                    <a class="dropdown-item text-white bg-danger" href="#">1</a>
								</div>
							</div>
    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
    <br>
   <button class="btn btn-light p-4 m-2 text-info"><i class="fas fa-carrot"></i><br>Legume</button>
       <button class="btn btn-light p-4 m-2 text-success"><i class="fas fa-apple-alt"></i><br>Fruits</button>
       <button class="btn btn-light p-4 m-2 text-secondary"><i class="fas fa-drumstick-bite"></i><br>Viande</button>
       <button class="btn btn-light p-4 m-2 text-primary"><i class="fas fa-fish"></i><br>Poisson</button>
       <button class="btn btn-light p-4 m-2 text-warning"><i class="fas fa-cheese"></i><br>Fromage</button>
       <button class="btn btn-light p-4 m-2 text-danger"><i class="fas fa-glass-cheers "></i><br>Vignoble</button>
    <br>
    </div>
    <aside>  
        <h3 class=" btnDownload text-nowrap text-dark"> CONTACT :</h3>
       <p class="bg-dark btnDownload  p-2 rounded text-light text-nowrap text-left"><i class="fas fa-phone-square-alt"></i> : 06.06.06.06.06</p>
        <p class="bg-dark btnDownload mb-5 p-2 rounded text-light text-nowrap text-left"><i class="fas fa-envelope"></i> : olivia.agriculture@outlook.fr</p>
       <h3 class="pb-3 btnDownload text-nowrap text-dark"> ADRESSE :</h3>
        <p class=" bg-success text-white btnDownload text-nowrap p-2 rounded"> 2 place de l'etoile 95000 Paris</p>
        <p class=" bg-success text-white btnDownload text-nowrap p-2 rounded"> Région : Île-de-France</p>
    </aside>
</section>
</template>

<style>
@media (min-width: 1040px){ 
.Pres{ padding-top: 3%; padding-left: 3%; display: flex; flex-direction: row;}
.textPres{width: 100%; margin-left: 4%; margin-right: 15%;}
.imgAnnonce {width: 25%;}
.btnDownload{ position: relative;left: 30%;transform: translateX(-50%); text-align: center; }
}
@media (max-width: 1040px){ 
    .textPres{width: 100%;  }
    h1{text-align: center;}
}
.Pres{ padding-top: 5%; padding-left: 1%; }
.imgAnnonce{
    object-fit: cover;
}
</style>

<script>
const axios = require('axios');
export default {
  name: 'Myprofil',
  data() {
    return {
		annonce:"",
        userid : localStorage.getItem("user")
    };

  },
  mounted () {
       axios.get("http://localhost:3000/api/sauces/:id",
        {
            
          }).then((response) => {
            this.annonce = response.data 
            console.log(response) 
     })
   }
}
</script>
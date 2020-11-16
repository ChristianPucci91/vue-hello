// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere un’immagine presa anch’essa da un data
// Altro possibile Bonus:
// gestire una funzione con un evento nel modo Vue.

// Avvio e dichiaro vue nel container
var app = new Vue({
el: '#root',
data: {
  message:"Scrivi qui",
  image:'img/vueimage.png'

},

methods: {
 changeimg: function () {
    if (this.image === 'img/vueimage.png') {
      this.image = 'img/imgvue2.webp';
    } else {
      this.image = 'img/vueimage.png';
    }
 }
}
});

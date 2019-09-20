let db=firebase.firestore();
document.addEventListener('DOMContentLoaded',function () {
   var mainimg=document.getElementById('mainimg');
   mainimg.src=localStorage.getItem('imgsrc');
   var fetch=localStorage.getItem('imgsrc');
   db.collection(localStorage.getItem('searchplace')+'-hotel').get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
          if(fetch==doc.data().img_urls[0]){
               document.getElementById('hotel-name').innerHTML=doc.data().title;
          }
      }) ;
   });
});

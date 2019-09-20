let db=firebase.firestore();
let source=document.getElementById('source');
let destiny=document.getElementById('destiny');
let date=document.getElementById('date');
let pplcount=document.getElementById('ticketscount');
document.getElementById('searchflight').addEventListener('click',function () {
    alert(destiny.value);
   db.collection(source.value+'-flight').get().then(function(querySnapshot){
       querySnapshot.forEach(function (doc) {

            if(destiny.value==(doc.data().dest)){
                alert(doc.data().time);
            }
       });
   });
});
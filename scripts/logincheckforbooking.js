firebase.auth().onAuthStateChanged(function (user) {
    if(user){
        document.getElementById("loginpage").innerHTML="LOGOUT";
    }
    else{
        document.getElementById("loginpage").innerHTML="LOGIN";

    }

});
document.getElementById('hotelpage').addEventListener('click',function () {
    firebase.auth().onAuthStateChanged(function (user) {
        if(user){
            location.href="hotel.html";
        }
        else{

            alert("Login to make booking!!");
        }

    });
});

document.getElementById('loginpage').addEventListener('click',function () {
    if(document.getElementById('loginpage').innerHTML=="LOGIN"){
        location.href='login.html';
    }
    else{
        firebase.auth().signOut().then(function () {
            alert("logged out");
        }) ;
    }
});
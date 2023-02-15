




/* Username */
var username = prompt('Kullanıcı adını gir:');

if (username.length > 0) {
document.getElementById("merhaba").innerHTML = "Merhaba, ";
document.getElementById("usernameadd").innerHTML = username + "!";
document.getElementById("wel").innerHTML = "Geçmiş olsun!";
/* Username end */

/* Hafta Start */
switch(new Date().getDay()){
    case 0:
    day = "Pazar"
    document.getElementById("tarih").innerHTML = day;
    break;
    
    case 1:
    day = "Pazartesi"
    document.getElementById("tarih").innerHTML = day;
    break;
    
    case 2:
    day = "Salı"
    document.getElementById("tarih").innerHTML = day;
    break;
    
    case 3:
    day = "Çarşamba"
    document.getElementById("tarih").innerHTML = day;
    break;
    
    case 4:
    day = "Perşembe"
    document.getElementById("tarih").innerHTML = day;
    break;
    
    case 5:
    day = "Cuma"
    document.getElementById("tarih").innerHTML = day;
    break;
    
    case 6:
    day = "Cumartesi"
    document.getElementById("tarih").innerHTML = day;
    break;
}
/* Hafta end */

/* Saat */
function displayTime(){
    var zaman = new Date();
    var saat = zaman.getHours();
    var dakika = zaman.getMinutes();
    var saniye = zaman.getSeconds();
    
    document.getElementById('saat').innerHTML = saat+":"+dakika+":"+saniye;
}
setInterval(displayTime, 10);
/* Saat End */

/* Else */
} else {
    document.getElementById("sz").remove();
    let aab = document.getElementById("size").innerText = "Kullanıcı bilgileri bulunamadı"
}
var dezenfektan = {

    yukseklik: "15 cm",
    agirlik: "100 gr.",
    bas: function(kim) {
        console.log(kim + "a dezenfektan sikildi");
    }



}

var mutlu={
    isim:"mutlu",
    soyisim: "akbas"
}

function yazdir() {


    dezenfektan.bas("hasan");
    dezenfektan.bas(mutlu.isim + mutlu.soyisim);
}

yazdir();
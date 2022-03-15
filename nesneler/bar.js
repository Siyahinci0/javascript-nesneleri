var bar = {

    sandalyeSayisi: 12,
    rafSayisi: 4,
    calisanSayisi: 2,
    calisan: {
        adi: "johnson",
        yasi: 55,
        cinsiyet: "erkek"
    },
    efesVarmi: true
};

function yazdir () {
    console.log("bar calisan adi" + bar.calisan.adi);
}

yazdir();

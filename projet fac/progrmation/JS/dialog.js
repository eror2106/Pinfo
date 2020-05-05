
function valider()
{
    traitement();
    document.getElementById("confirm").style.display = "block";
}
function hide()
{
    document.getElementById("confirm").style.display = "none";
}

function traitement()
{
        var date= document.getElementById("date").value;
        var dateFin = document.getElementById("dateFin").value;
        var nbAdulte = document.getElementById("nbAdulte").value;
        var nbEnfant = document.getElementById("nbEnfant").value;
        var nbCh = document.getElementById("nbCh").value;
        replace(date,dateFin,nbAdulte,nbEnfant,nbCh);
}

function replace(dispDate,dispDateFin,dispNbAdulte,dispNbEnfant,dispNbCh){
    document.getElementById("dispDate").innerText=dispDate;
    document.getElementById("dispInfo").innerText=" Fin du séjour: "+dispDateFin+" \r Nombre d'adulte: "+dispNbAdulte+" \r Nombre d'enfant: "+dispNbEnfant+" \rNombre de chambre: "+dispNbCh;
    
}
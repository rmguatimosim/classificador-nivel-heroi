let heroi = {nome: "Serjão Berranteiro Matador de Onça", xp: 5000, nivel: ""}

if(heroi.xp<=1000 && heroi.xp>0){
    nivelHeroi = "Ferro";
    heroi.nivel = "Ferro";
}
else if(heroi.xp>=1001 && heroi.xp<=2000){
    nivelHeroi = "Bronze";
    heroi.nivel = "Bronze";
}
else if(heroi.xp>=2001 && heroi.xp<=5000){
    nivelHeroi = "Prata";
    heroi.nivel = "Prata";
}
else if(heroi.xp>=5001 && heroi.xp<=7000){
    nivelHeroi = "Ouro";
    heroi.nivel = "Ouro";
}
else if(heroi.xp>=7001 && heroi.xp<=8000){
    nivelHeroi = "Platina";
    heroi.nivel = "Platina";
}
else if(heroi.xp>=8001 && heroi.xp<=9000){
    nivelHeroi = "Ascendente";
    heroi.nivel = "Ascendente";
}
else if(heroi.xp>=9001 && heroi.xp<=10000){
    nivelHeroi = "Imortal";
    heroi.nivel = "Imortal";
}
else{
    nivelHeroi = "Radiante";
    heroi.nivel = "Radiante";
}


console.log("O Herói de nome *"+ heroi.nome +"* está no nível de *"+ heroi.nivel +"*");


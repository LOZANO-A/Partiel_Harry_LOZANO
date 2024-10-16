/*let X = 0;
let i=1;*/
/* TP11 V1
while(i<101)
{
    X += i;
    i++;
}
console.log(X)*/

/* TP11 V2
let val;
do{
    val = parseInt(prompt("saisir valeur"))
}while(val < 1 || val > 100)

do{
    X += i;
    i++;
}while(i<=(val));
console.log(X);*/






let tab = ["A1","B2","C3","D4","E5","F6","G7","H8","I9","J10"]
/* TP12.2
console.log(tab[0]);
console.log(tab[1]);
console.log(tab[2]);
console.log(tab[3]);
console.log(tab[4]);
console.log(tab[5]);
console.log(tab[6]);
console.log(tab[7]);*/

/*TP12.3 
for(var i=0; i<8; i++)
{
    console.log(tab[i])
}*/

//TP12.4
for(var i=0; i<tab.length; i++)
{
    console.log(tab[i]);
}
function validarnumero(e){
    var code=(document.all)?e.keyCode:e.which;
    if((code>=48 && code<=57)||code==46) { 
        return true;
      } else{ 
        return false;}
}
function calcular(){
    var ventas1= parseFloat(document.problema2.venta1.value);
    var ventas2= parseFloat(document.problema2.venta2.value);
    var ventas3= parseFloat(document.problema2.venta3.value);
    var comi= (ventas1+ventas2+ventas3)*0.1;
    document.problema2.comicion.value = "$"+comi;

    var tota= parseFloat(document.problema2.sueldo.value)+ comi;
    document.problema2.total.value = "$"+tota;
}

function descuento(){
    var ventas1= parseFloat(document.problema3.venta1.value);
    var des= ventas1*0.85;
    document.problema3.descuentos.value ="$" + des;
}
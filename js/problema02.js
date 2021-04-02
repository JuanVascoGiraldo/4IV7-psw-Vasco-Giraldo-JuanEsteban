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

function calificación(){
    var ca1= parseFloat(document.problema4.calif1.value);
    var ca2= parseFloat(document.problema4.calif2.value);
    var ca3= parseFloat(document.problema4.calif3.value);
    var exa= parseFloat(document.problema4.califexa.value);
    var tra= parseFloat(document.problema4.califtra.value);

    var pro= (ca1+ca2+ca3)/3;
    var total= (pro*0.55)+(exa*0.3)+(tra*0.15);
    if(total<6){
        document.problema4.califinal.value = total + "  Calificación reporbatoria"
    }
    else{
        document.problema4.califinal.value = total + "  Calificación aprobatoria"
    }
    
}

function validarnumero1(e){
    var code=(document.all)?e.keyCode:e.which;
    if(code>=48 && code<=57) { 
        return true;
      } else{ 
        return false;}
}

function porcentajes(){
    var hom= parseFloat(document.problema5.hombres.value);
    var muj= parseFloat(document.problema5.mujeres.value);

    var estudiantes= hom + muj;

    document.problema5.totalEstudiantes.value= estudiantes;

    var porchom= (hom*100)/estudiantes;
    var porcMuj= (muj*100)/estudiantes;

    document.problema5.porcH.value = "%" + porchom;
    document.problema5.porcM.value = "%" + porcMuj;

}

function validarnumero2(e){
    var code=(document.all)?e.keyCode:e.which;
    if((code>=48 && code<=57)||code==46||code==45) { 
        return true;
      } else{ 
        return false;}
}

function operacionesnum(){
    var n1= parseFloat(document.problema7.num1.value);
    var n2= parseFloat(document.problema7.num2.value);
        var re= 0;
        var op= "";
        if(n1==n2){
            re= n1*n2;
            op="Multiplicación"
        }else{
            if(n1>n2){
                re= n1-n2;
                op="Resta"
            }
            else{
                re= n1+n2;
                op="Suma"
            }
        }    

        document.problema7.opera.value= op;
        document.problema7.resul.value= re;
}

function numayor(){
    var n1= parseFloat(document.problema8.num1.value);
    var n2= parseFloat(document.problema8.num2.value);
    var n3= parseFloat(document.problema8.num3.value);
    if(n1>n2 && n1>n3){
        document.problema8.mayor.value= n1;
    }else{
        if(n2>n1 && n2>n3){
            document.problema8.mayor.value= n2;
        }
        else{
            if(n3>n1 && n3>n2){
                document.problema8.mayor.value= n3;
            }
            else{
                document.problema8.mayor.value= "Los Numeros son Iguales";
            }
        }
    }
}

function horass(){
    var ho= parseFloat(document.problema9.horas.value);
    var pag= parseFloat(document.problema9.pagoh.value);
    var extrash=0;
    var total=0;
    var trip=0;
    if(ho<=40){
        document.problema9.extra.value=0;
        total= ho*pag;
        document.problema9.totap.value ="$"+total;
    }
    else{
        if(ho<=48){
            extrash= ho-40;
            document.problema9.extra.value= extrash;
            total= (extrash*pag*2)+ (40*pag);
            document.problema9.totap.value ="$"+total;
        }
        else{
            extrash= ho-40;
            document.problema9.extra.value= extrash;
            trip= extrash-8;
            total= (8*pag*2)+ (40*pag)+ (trip*pag*3);
            document.problema9.totap.value ="$"+total;
        }
    }

}

function CaUtilidad(){
    var mes= parseFloat( document.problema10.meses.value);
    var sala= parseFloat( document.problema10.pagom.value);
    var total=0;
    var ut=0;
    if(mes<12){
        ut= sala*0.05;
        total= sala + ut;
    }
    else{
        if(mes<24){
            ut= sala*0.07;
            total= sala + ut;
        }
        else{
            if(mes<60){
                ut= sala*0.1;
                total= sala + ut;
            }
            else{
                if(mes<120){
                    ut= sala*0.15;
                    total= sala + ut;
                }
                else{
                    ut= sala*0.2;
                    total= sala + ut;
                }
            }
        }
    }
    document.problema10.utilidad.value="$"+ut;
    document.problema10.totap.value="$"+total;
}

function CalEdad(){
    var año= parseInt(document.problema6.añoNaci.value);
    var mes= parseInt(document.problema6.mesNaci.value);
    var fecha= new Date();
    var añoAc= fecha.getFullYear();
    const mesAc = fecha.getMonth() + 1; 
    if((año>1920 && año<añoAc)&&(mes>0 && mes<13)){
        var edades= añoAc - año;
        if(mes>mesAc){
            var edadAc= edades-1; 
            document.problema6.edad.value="Tienes "+ edadAc+ " años, pero este mismo año cumples "+ edades+ " años" ;
        }
        if(mes==mesAc){
            document.problema6.edad.value="Este mes cumples "+ edades + " años";
        }
        if(mes<mesAc){
            document.problema6.edad.value="Tienes "+ edades + " años";
        }
    }
    else{
        alert("los Datos ingresados no son validos");
    }
    

}
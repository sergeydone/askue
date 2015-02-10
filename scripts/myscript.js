var h=navigator.cookieEnabled;  // проверка поддержка cookie браузером
//var tarif="min"; // установка минимального тарифа для расчета

function saveCookie(cname,cvalue) {  //Сохранение кукисов
document.cookie=""+cname+"="+cvalue+"; max-age="+(60*60*2);
}



function readCookie(cookiename) {   //функция чтения значения из куки
//alert("cookiename="+cookiename)
var allcookies=document.cookie;
//alert("full value="+allcookies);
var temp=allcookies.indexOf(cookiename);
if (temp!=-1) { //alert("start to work");
var beginingvalue=temp+0; // начало значения
var endingvalue=allcookies.indexOf(";",beginingvalue); //окончание значения
if (endingvalue==-1) {endingvalue=allcookies.length; }//alert("endingvalue= "+endingvalue);}
var beginname=allcookies.substring(beginingvalue, endingvalue);
var value=beginname;
//alert("value1= "+value);
var allvalue=value.split("=");
//alert("value2 = "+allvalue[1]);
return allvalue[1];
}
else return false;//alert("value not defined");		
}




//Создание массива коэффициентов
koef=new Array(13);

// Функция округления до двух знаков после запятой
function okrugl(x,n){
var tochnost=Math.pow(10,n);
var y=(Math.round(x*tochnost))/tochnost;
return y;
}

//фукция сохранения параметров клиента в кукисы
function saveParametr(){
//alert("saving work");
var recname=document.forms.formaRecord.rec1.value;
saveCookie('askuename',recname);
var reclname=document.forms.formaRecord.rec2.value;
saveCookie('askuelname',reclname);
var reccod=document.forms.formaRecord.rec3.value;
saveCookie('askuecode',reccod);
					var recElectro1=document.forms.formaSchet.Electro1.value;
					saveCookie('askueElectro1',recElectro1);
					var recElectro2=document.forms.formaSchet.Electro2.value;
					saveCookie('askueElectro2',recElectro2);
					var recGas1=document.forms.formaSchet.Gas1.value;
					saveCookie('askueGas1',recGas1);
					var recGas2=document.forms.formaSchet.Gas2.value;
					saveCookie('askueGas2',recGas2);
					var recWater1=document.forms.formaSchet.Water1.value;
					saveCookie('askueWater1',recWater1);
					var recWater2=document.forms.formaSchet.Water2.value;
					saveCookie('askueWater2',recWater2);
					var recHwater1=document.forms.formaSchet.Hwater1.value;
					saveCookie('askueHwater1',recHwater1);
					var recHwater2=document.forms.formaSchet.Hwater2.value;
					saveCookie('askueHwater2',recHwater2);

					
//alert("wow = "+fname);
//alert("");
}



// Проверка сохранности массива коэффициентов сначала. Теперь тестовая проверка
function probaK() {
//for (var i=1;i<12;i++){
//alert(koef[i]);
var allcookies=document.cookie;
alert("full value="+allcookies);

}

function toStart() {   //функция запускающая начало вычислений
proba();
//saveCookie(); //('askuename','Ivan');
//readCookie('askuename');
}


//Функция скрытия и отображения нужных для расчета строк квитанции
function proba() {
//-----Блок автозаполнения колонок---------------------------------------------------------------------------------------
if (readCookie('askuename')) { 
document.getElementById('rec1').value=readCookie('askuename');} 
if (readCookie('askuelname')) { 
document.getElementById('rec2').value=readCookie('askuelname');} 
if (readCookie('askuecode')) { 
document.getElementById('rec3').value=readCookie('askuecode');} 
				if (readCookie('askueElectro1')) { 
				document.getElementById('Electro1').value=readCookie('askueElectro1');} 
				if (readCookie('askueElectro2')) {
				document.getElementById('Electro2').value=readCookie('askueElectro2');}
				if (readCookie('askueGas1')) {
				document.getElementById('Gas1').value=readCookie('askueGas1');}
				if (readCookie('askueGas2')) {
				document.getElementById('Gas2').value=readCookie('askueGas2');}
				if (readCookie('askueWater1')) {
				document.getElementById('Water1').value=readCookie('askueWater1');}
				if (readCookie('askueWater2')) {
				document.getElementById('Water2').value=readCookie('askueWater2');}
				if (readCookie('askueHwater1')) {
				document.getElementById('Hwater1').value=readCookie('askueHwater1');}
				if (readCookie('askueHwater2')) {
				document.getElementById('Hwater2').value=readCookie('askueHwater2');}
//-----Конец блока автозаполнения колонок-----------------------------------------------------------------------------------------


	
//Обнуление коэффициентов
for(var i=0;i<12;i++) {koef[i]=0;}

//$('#test1').css({color:'green'});
//var row11=document.parametres.row1.checked;
//$('#test1').hide();
//alert("success "+row11);
//if (document.parametres.prov1.checked) {alert("success ");}
if (h) { 
document.getElementById('primechanie').innerHTML="*все готово к вычислениям"; 
document.getElementById('primechanie').style="color:green"; 
}
else { 
document.getElementById('primechanie').innerHTML="*сохранение значений не поддеживается вашим браузером"; 
document.getElementById('primechanie').style="color:red"; 
}
if (!(document.parametres.prov1.checked)) {$('#rows1').hide(); koef[1]=0;};
if (!(document.parametres.prov2.checked)) {$('#rows2').hide(); koef[2]=0;};
if (!(document.parametres.prov3.checked)) {$('#rows3').hide(); koef[3]=0};
if (!(document.parametres.prov4.checked)) {$('#rows4').hide(); koef[4]=0};
if (!(document.parametres.prov5.checked)) {$('#rows5').hide(); koef[5]=0};
if (!(document.parametres.prov6.checked)) {$('#rows6').hide(); koef[6]=0};
if (!(document.parametres.prov7.checked)) {$('#rows7').hide(); koef[7]=0};
if (!(document.parametres.prov8.checked)) {$('#rows8').hide(); koef[8]=0};
if (!(document.parametres.prov9.checked)) {$('#rows9').hide(); koef[9]=0};
if (!(document.parametres.prov10.checked)) {$('#rows10').hide(); koef[10]=0};
if (!(document.parametres.prov11.checked)) {$('#rows11').hide(); koef[11]=0};
if ((document.parametres.prov1.checked)) {$('#rows1').show(); koef[1]=1;}
if ((document.parametres.prov2.checked)) {$('#rows2').show(); koef[2]=1;}
if ((document.parametres.prov3.checked)) {$('#rows3').show(); koef[3]=1;}
if ((document.parametres.prov4.checked)) {$('#rows4').show(); koef[4]=1;}
if ((document.parametres.prov5.checked)) {$('#rows5').show(); koef[5]=1;}
if ((document.parametres.prov6.checked)) {$('#rows6').show(); koef[6]=1;}
if ((document.parametres.prov7.checked)) {$('#rows7').show(); koef[7]=1;}
if ((document.parametres.prov8.checked)) {$('#rows8').show(); koef[8]=1;}
if ((document.parametres.prov9.checked)) {$('#rows9').show(); koef[9]=1;}
if ((document.parametres.prov10.checked)) {$('#rows10').show(); koef[10]=1;}
if ((document.parametres.prov11.checked)) {$('#rows11').show(); koef[11]=1;}
var tarif="max";
koef.tarif=tarif;
var city=document.parametres.provcity.value;
koef.city=city;
return koef;

}

//Функция подсчета стоимости коммунальных услуг 
function messme() {
var city=koef.city;
// Тарифы Донецка - константы
if (city=="Донецк") {
var tarif1=2.07*100; // квартплата 100m2
var tarif2=0.3084; // электро
var tarif3=1.089; // газ
var tarif4=3.372; // вода
var tarif5=2.136; // стоки
var tarif6=3.48*100; // отопление 100m2
var tarif7=17.58; // горячая вода
var tarif8=14.43*3; // вывоз тбо за 3 человек
var tarif9=150; // УГСО
var tarif10=39.91; // телефон
var tarif11=7.00; // домофон
}
// Тарифы Мариуполя - константы
if (city=="Мариуполь") {
var tarif1=2.07*100*2; // квартплата 100m2
var tarif2=0.3084; // электро
var tarif3=1.089; // газ
var tarif4=3.372*2; // вода
var tarif5=2.136*2; // стоки
var tarif6=3.48*100*2; // отопление 100m2
var tarif7=17.58*2; // горячая вода
var tarif8=14.43*3*2; // вывоз тбо за 3 человек
var tarif9=150*2; // УГСО
var tarif10=39.91*2; // телефон
var tarif11=7.00; // домофон
}
// Тарифы Красноармейска - константы
if (city=="Красноармейск") {
var tarif1=2.07*100*3; // квартплата 100m2
var tarif2=0.3084; // электро
var tarif3=1.089; // газ
var tarif4=3.372*3; // вода
var tarif5=2.136*3; // стоки
var tarif6=3.48*100*3; // отопление 100m2
var tarif7=17.58*3; // горячая вода
var tarif8=14.43*3*3; // вывоз тбо за 3 человек
var tarif9=150*3; // УГСО
var tarif10=39.91*3; // телефон
var tarif11=7.00*3; // домофон
}
// Заполнение формы сохраненными значениями
//if (readCookie('askueElectro1')) { 
//document.getElementById('Electro1').value=readCookie('askueElectro1');} 

//Расчет платежей за каждую услугу
//Квартплата
var plata1=okrugl(tarif1,2); //квартплата
//document.getElementById('bFlat').innerHTML=Math.floor(tarif1)+"-"+Math.floor((tarif1).toFixed(2).slice(2));
document.getElementById('bFlat').innerHTML=plata1;

//Стоимость электроэнерги
var a2=document.forms.formaSchet.Electro1.value;
var b2=document.forms.formaSchet.Electro2.value;
/*var c2=b2-a2;
var c21=parseInt(c2);
var c22=(c2%1).toFixed(2).slice(2);
var d2=c2*tarif2;
var plata2=d2 //электроэнергия
var d21=parseInt(d2); 
var d22=(d2%1).toFixed(2).slice(2); 
document.getElementById('sElectro').innerHTML=c21+"."+c22;
document.getElementById('bElectro').innerHTML=Math.floor(d21)+"-"+Math.floor(d22);
*/
var c2=okrugl((okrugl(b2,2)-okrugl(a2,2)),2);
var d2=c2*tarif2;
var plata2=okrugl(d2,2); //электроэнергия
document.getElementById('sElectro').innerHTML=c2;
document.getElementById('bElectro').innerHTML=plata2;
	
//Стоимость природного газа
var a3=document.forms.formaSchet.Gas1.value;
var b3=document.forms.formaSchet.Gas2.value;
/*var c3=b3-a3;
var c31=parseInt(c2);
var c32=(c3%1).toFixed(2).slice(2);
var d3=c3*tarif3;
var plata3=d3;//газ
var d31=parseInt(d3); 
var d32=(d3%1).toFixed(2).slice(2); 
document.getElementById('sGas').innerHTML=c31+"."+c32;
document.getElementById('bGas').innerHTML=Math.floor(d31)+"-"+Math.floor(d32);*/
var c3=okrugl((okrugl(b3,2)-okrugl(a3,2)),2);
var d3=c3*tarif3;
var plata3=okrugl(d3,2); //природный газ
document.getElementById('sGas').innerHTML=c3;
document.getElementById('bGas').innerHTML=plata3;

//Стоимость холодной воды
var a4=document.forms.formaSchet.Water1.value;
var b4=document.forms.formaSchet.Water2.value;
/* var c4=b4-a4;
var c41=parseInt(c4);
var c42=(c4%1).toFixed(2).slice(2);
var d4=c3*tarif4;
var plata4=d4;//вода
var d41=parseInt(d4); 
var d42=(d4%1).toFixed(2).slice(2); 
document.getElementById('sWater').innerHTML=c41+"."+c42;
document.getElementById('bWater').innerHTML=Math.floor(d41)+"-"+Math.floor(d42); */
var c4=okrugl((okrugl(b4,2)-okrugl(a4,2)),2);
var d4=c4*tarif4;
var plata4=okrugl(d4,2); //Холодная вода
document.getElementById('sWater').innerHTML=c4;
document.getElementById('bWater').innerHTML=plata4;

//Стоимость стоков
var d5=c4*tarif5;
var plata5=okrugl(d5,2); //Стоки
//document.getElementById('bStoki').innerHTML=Math.floor(tarif5)+"-"+Math.floor((tarif5).toFixed(2).slice(2));
document.getElementById('bStoki').innerHTML=plata5;

//Стоимость отопления
var plata6=okrugl(tarif6,2); //Отопление
//document.getElementById('bOtoplenie').innerHTML=Math.floor(tarif6)+"-"+Math.floor((tarif6).toFixed(2).slice(2));
document.getElementById('bOtoplenie').innerHTML=plata6;

//Стоимость горячей воды
var a7=document.forms.formaSchet.Hwater1.value;
var b7=document.forms.formaSchet.Hwater2.value;
/*var c7=b7-a7;
var c71=parseInt(c7);
var c72=(c7%1).toFixed(2).slice(2);
var d7=c7*tarif7;
var plata7=d7;//Горячая вода
var d71=parseInt(d7); 
var d72=(d7%1).toFixed(2).slice(2); 
document.getElementById('sHwater').innerHTML=c71+"."+c72;
document.getElementById('bHwater').innerHTML=Math.floor(d71)+"-"+Math.floor(d72);*/
var c7=okrugl((okrugl(b7,2)-okrugl(a7,2)),2);
var d7=c7*tarif7;
var plata7=okrugl(d7,2); //горячая вода
document.getElementById('sHwater').innerHTML=c7;
document.getElementById('bHwater').innerHTML=plata7;

//Стоимость вывоза ТБО
var plata8=okrugl(tarif8,2); //Вывоз ТБО
//document.getElementById('bTBO').innerHTML=Math.floor(tarif8)+"-"+Math.floor((tarif8).toFixed(2).slice(2));
document.getElementById('bTBO').innerHTML=plata8;

//Стоимость услуг охраны
var plata9=okrugl(tarif9,2); //Услуги УГСО 
//document.getElementById('bUGSO').innerHTML=Math.floor(tarif9)+"-"+Math.floor((tarif9).toFixed(2).slice(2));
document.getElementById('bUGSO').innerHTML=plata9;

//Стоимость телефона
var plata10=okrugl(tarif10,2); //Телефон
//document.getElementById('bTelephon').innerHTML=Math.floor(tarif10)+"-"+Math.floor((tarif10).toFixed(2).slice(2));
document.getElementById('bTelephon').innerHTML=plata10;

//Стоимость домофона
var plata11=okrugl(tarif11,2); //Домофон
//document.getElementById('bDomophon').innerHTML=Math.floor(tarif11)+"-"+Math.floor((tarif11).toFixed(2).slice(2));
document.getElementById('bDomophon').innerHTML=plata11;

//Итоговая сумма платежа
var itogo=plata1*koef[1]+plata2*koef[2]+plata3*koef[3]+plata4*koef[4]+plata5*koef[5]+plata6*koef[6]+plata7*koef[7]+plata8*koef[8]+plata9*koef[9]+plata10*koef[10]+plata11*koef[11];
var platasum=okrugl(itogo,2);
//document.getElementById('bItogo').innerHTML=Math.floor(itogo)+"-"+Math.floor((itogo).toFixed(2).slice(2));
document.getElementById('bItogo').innerHTML=platasum;


}
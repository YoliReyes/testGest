//copiamos los datos actualizados tras completas el formulario a una página nueva

function selectData(){
var originalSpreadsheet = SpreadsheetApp.getActive();
var Respuestas=originalSpreadsheet.getActiveSheet()
var name=Respuestas.getName()
var nombre

if (name == "RespuestasFormulario_Castellano"){ //elegimos qué sheet tiene que coger como report - la de inglés o castellano -
nombre = "Report1"}
else if (name == "RespuestasFormulario_Italiano"){ //elegimos qué sheet tiene que coger como report - la de inglés o castellano -
nombre = "ReportItaliano"}
else { nombre = "ReportIngles"}


var Row=Respuestas.getLastRow();
var columnas=Respuestas.getLastColumn();

var datos = Respuestas.getRange(Row,1,1,(columnas)).getValues(); 
var DatosFin = originalSpreadsheet.getSheetByName("DatosDelReport");
DatosFin.activate();
DatosFin.getRange(2,1,1,(columnas)).setValues(datos);




// Opción para añadir pregunta
/*var datos1 = Respuestas.getRange("A"+Row+":Y"+Row).getValues(); 
var datos2 = Respuestas.getRange("AQ"+Row).getValues(); 
var datos3 = Respuestas.getRange("Z"+Row+":AP"+Row).getValues(); 

var DatosFin = originalSpreadsheet.getSheetByName("DatosDelReport");
DatosFin.activate();
DatosFin.getRange("A2:Y2").setValues(datos1);
DatosFin.getRange("Z2").setValues(datos2);
DatosFin.getRange("AA2:AQ2").setValues(datos3);*/
  
AlmacenarDatos_Horizontal2();
hide(nombre);
SeleccionarRespuestas(nombre);
AnalizarDatosIndustria(nombre);
HacerPromedioIndustria(nombre);
exportSomeSheets(nombre); 
}






//hide the unnecessary rows of the parts in the final report

function hide(Hoja) {

  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var Report1 = ss.getSheetByName(Hoja);
  Report1.activate();
  
  
  var Range1 = Report1.getRange(5,9,5,1); //cogemos la primera columna de nuestra "tabla resumen" para contrastar los nombres de las secciones
  var Values = Range1.getValues();
  
 // var length=(Range1.getNumRows()-1);
  var columns=Report1.getMaxColumns();
  
 Report1.hideColumns(8,(columns-7 )); //oculta columnas en las que se encuentran los datos de las secciones
  
var Rango = Report1.getLastRow();

var InicioDistribucion
var InicioTransformar
var InicioProducto
var InicioReintrod
var InicioSimb 

for (var i =1; i<(Rango-1); i++){
if (Report1.getRange("A"+i+":A"+i).getValue()==Values[0][0]){
InicioTransformar = i}
if (Report1.getRange("A"+i+":A"+i).getValue()==Values[1][0]){
InicioDistribucion = i}
if (Report1.getRange("A"+i+":A"+i).getValue()==Values[2][0]){
InicioProducto = i}
if (Report1.getRange("A"+i+":A"+i).getValue()==Values[3][0]){
InicioReintrod = i}
if (Report1.getRange("A"+i+":A"+i).getValue()==Values[4][0]){
InicioSimb = i}

}

var FinTransformar = InicioDistribucion -1 ;
var FinDistribucion=  InicioProducto-1;
var FinProduct = InicioReintrod - 1;
var FinReintrod = InicioSimb - 1;

//cogemos ahora el rango en el que aparece el número de fila inicio y fin de las secciones (en amarillo)

  var Range2 = Report1.getRange(5,11,4,2);
  var Values2 = Range2.getValues();
  
  Values2[0][0] = InicioTransformar
  Values2[0][1]=FinTransformar
  Values2[1][0]=InicioDistribucion
  Values2[1][1]=FinDistribucion
  Values2[2][0]=InicioProducto
  Values2[2][1]=FinProduct
  Values2[3][0]=InicioReintrod
  Values2[3][1]=FinReintrod
  
  
Report1.getRange(5,11,4,2).setValues(Values2)

//cogemos ahora toda la tabla resumen para poder coger el número de filas que hay en cada sección (columna quinta de la tabla resumen)
//y tambien la columna 2 donde aparecen los "sí" o "no"

var Range3 = Report1.getRange(5,9,5,5);
var Values3 = Range3.getValues();


  
  var rangeTransform = Report1.getRange(Values3[0][2] , 1, Values3[0][4], columns);
  var rangeDistrib = Report1.getRange(Values3[1][2] ,1, Values3[1][4] , columns);
  var rangeConsum = Report1.getRange(Values3[2][2] ,1, Values3[2][4] , columns);
  var rangeReintrod = Report1.getRange(Values3[3][2] ,1, Values3[3][4] , columns);
  
  
  
  if( Values3[0][1] == "No"){
    Report1.hideRows( Values3[0][2] ,  Values3[0][4]);
    }
   else {Report1.unhideRow(rangeTransform)}
   
   if( Values3[1][1] == "No"){
    Report1.hideRows( Values3[1][2] , Values3[1][4] );
   }
   else {Report1.unhideRow(rangeDistrib)}
   
  
  if( Values3[2][1] == "No"){
    Report1.hideRows( Values3[2][2] , Values3[2][4]);
   }
   else {Report1.unhideRow(rangeConsum)}
   
   if( Values3[3][1] == "No"){
    Report1.hideRows( Values3[3][2] , Values3[3][4] );
   }
   else {Report1.unhideRow(rangeReintrod)} 
  
  
 } 
 
function SeleccionarRespuestas(nombre){


var ss = SpreadsheetApp.getActiveSpreadsheet();
var DatosRespuestas = ss.getSheetByName("RespuestasPersonalizadas_Industrias");
var DatosActuales = ss.getSheetByName("DatosDelReport");
var EquivalenciaIndustrias = ss.getSheetByName("EqIndustria");

var Industria = DatosActuales.getRange("D2").getValue();


if (nombre =="Report1"){var cont=1}
if (nombre == "ReportIngles"){var cont =2}
if (nombre == "ReportItaliano"){var cont = 3}



var ultimaFila=DatosRespuestas.getLastRow();

for (var j=12; j<(ultimaFila+1); j++){

if(cont==1){

if(Industria==DatosRespuestas.getRange("A"+j).getValue()){
var Datos=DatosRespuestas.getRange("B"+j+":S"+j).getValues();
DatosRespuestas.getRange("B3:S3").setValues(DatosRespuestas.getRange("B"+j+":S"+j).getValues())
break;
}
else {DatosRespuestas.getRange("B3:S3").setValues(DatosRespuestas.getRange("B12:S12").getValues())}
}

if(cont==2){
if(Industria==DatosRespuestas.getRange("U"+j).getValue()){
var Datos=DatosRespuestas.getRange("V"+j+":AM"+j).getValues();
DatosRespuestas.getRange("B4:S4").setValues(DatosRespuestas.getRange("V"+j+":AM"+j).getValues())
break;
}
else {DatosRespuestas.getRange("B4:S4").setValues(DatosRespuestas.getRange("V12:AM12").getValues())}
}

if(cont==3){
if(Industria==DatosRespuestas.getRange("AP"+j).getValue()){
var Datos=DatosRespuestas.getRange("AQ"+j+":BH"+j).getValues();
DatosRespuestas.getRange("B5:S5").setValues(DatosRespuestas.getRange("AQ"+j+":BH"+j).getValues())
break;
}
else {DatosRespuestas.getRange("B5:S5").setValues(DatosRespuestas.getRange("AQ12:BH12").getValues())}
}


}


}
 

 
 
/*function SeleccionarRespuestas(){

var ss = SpreadsheetApp.getActiveSpreadsheet();
var DatosRespuestas = ss.getSheetByName("RespuestasPersonalizadas_Industrias");
var DatosActuales = ss.getSheetByName("DatosDelReport");
var EquivalenciaIndustrias = ss.getSheetByName("EqIndustria");

var Industria = DatosActuales.getRange("D2").getValue();
var Industrias_castellano = EquivalenciaIndustrias.getRange("A3:A24");


var contCast=0;

for (var i=3; i<25;i++){
var IndustriaEsp=EquivalenciaIndustrias.getRange(i,1).getValue();
var IndustriaIng=EquivalenciaIndustrias.getRange(i,2).getValue();
var IndustriaIta=EquivalenciaIndustrias.getRange(i,3).getValue();

if(Industria == EquivalenciaIndustrias.getRange(i,1).getValues())
  {contCast=1}
if (Industria ==  EquivalenciaIndustrias.getRange(i,2).getValues()){contCast=2}

}
if (Industria ==  EquivalenciaIndustrias.getRange(i,3).getValues()){contCast=3}

}

if(contCast==1){
var IndustriaCast=Industria ;
var IndustriaIngles=EquivalenciaIndustrias.getRange("I2:I2").getValue();
}

if (contCast==2){
var IndustriaIngles=Industria;
var IndustriaCast=EquivalenciaIndustrias.getRange("I2:I2").getValue();
}

var ultimaFila=DatosRespuestas.getLastRow();

for (var j=11; j<(ultimaFila+1); j++){

if(IndustriaCast==DatosRespuestas.getRange("A"+j).getValue()){
var Datos=DatosRespuestas.getRange("B"+j+":S"+j).getValues();
DatosRespuestas.getRange("B3:S3").setValues(DatosRespuestas.getRange("B"+j+":S"+j).getValues())
break;
}
else {DatosRespuestas.getRange("B3:S3").setValues(DatosRespuestas.getRange("B11:S11").getValues())}
}

for (var j=11; j<(ultimaFila+1); j++){
if(IndustriaIngles==DatosRespuestas.getRange("U"+j).getValue()){
DatosRespuestas.getRange("B4:S4").setValues(DatosRespuestas.getRange("V"+j+":AM"+j).getValues())
break;
}
else {DatosRespuestas.getRange("B4:S4").setValues(DatosRespuestas.getRange("V11:AM11").getValues())}

}}
 
 */
//Hacemos pdf y enviamos correo de "Report1" 
function exportSomeSheets(Hoja) {


  // Set the Active Spreadsheet so we don't forget
  var originalSpreadsheet = SpreadsheetApp.getActive();
  var sheets=originalSpreadsheet.getSheets()

  var Report1 = originalSpreadsheet.getSheetByName(Hoja);
   
  Report1.activate();
 
  
  
  var empresa = Report1.getRange("A2:A2").getValues();
  // Set the message to attach to the email.
  var message = "Please see attached"; 
  
  // Get Email  from Cell C2
  
  var RangeMail = Report1.getRange("C2:C2");
  var emailTo = RangeMail.getValues();
   
  // Construct the Subject Line
  var subject = "Resumen del status en economía circular de " + empresa + "/ Review of the cicular economy status of "+empresa ; 
  
  
  for (var i = 0; i < sheets.length; i++) {
    if (sheets[i].getSheetName() == Hoja) {}
    else {
       if(sheets[i].getSheetName() == Hoja+"Parte2"){}
      else {sheets[i].hideSheet()}
    }
  }
  
  var folder = DriveApp.getFoldersByName('Salida de Documentos').next();
  var ReportPDF = folder.createFile(originalSpreadsheet.getBlob().getAs('application/pdf').setName(empresa +'CEReview / ResumenEC' +empresa));
  
  for (var i = 0; i < sheets.length; i++) {
   sheets[i].showSheet(); 
  }
  
 // var ReportPDF = export('Report1')
  
  // Send the freshly constructed email 
  MailApp.sendEmail(emailTo, subject, message, {attachments:ReportPDF.getBlob()});
  
}






//función semejante a AlmacenarDatos_Horizontal pero independiente de las casillas. *****DEPENDE DE LOS ENUNCIADOS DE LAS SECCIONES ESCRITAS EN PRIMERA FILA 
function AlmacenarDatos_Horizontal2() {


var ss = SpreadsheetApp.getActiveSpreadsheet();
var DatosActuales = ss.getSheetByName("DatosDelReport");
var DatosHistoricos = ss.getSheetByName("DatosAcumulados_Horizontal");
var Puntuacion = ss.getSheetByName("PropuestaPuntuacion");
var lastRow=DatosHistoricos.getLastRow();


var Act_Info
var Act_Tomar
var Act_Transformar
var Dec_Transformar
var Act_Distribuir
var Dec_Distribuir
var Act_Usar
var Dec_Usar
var Act_Reintroducir
var Dec_Reintroducir
var Act_Simbiosis
var Act_DatosExtra

var columna_Act = DatosActuales.getLastColumn();

  for (var i=1; i<(columna_Act+1); i++){
  if (DatosActuales.getRange(3,i).getValue()=="INFORMACION"){Act_Info=i}
  if (DatosActuales.getRange(3,i).getValue()=="TOMAR"){Act_Tomar=i}
  if (DatosActuales.getRange(3,i).getValue()=="TRANSFORMAR"){Act_Transformar=i}
  if (DatosActuales.getRange(3,i).getValue()=="DISTRIBUIR"){Act_Distribuir=i}
  if (DatosActuales.getRange(3,i).getValue()=="USAR / CONSUMIR"){Act_Usar=i}
  if (DatosActuales.getRange(3,i).getValue()=="REINTRODUCIR"){Act_Reintroducir=i}
  if (DatosActuales.getRange(3,i).getValue()=="SIMBIOSIS INDUSTRIAL"){Act_Simbiosis=i}
  if (DatosActuales.getRange(3,i).getValue()=="ASOCIACION DE EMPRESAS"){Act_DatosExtra=i}
  if (DatosActuales.getRange(3,i).getValue()=="DECISIONTRANSFORMAR"){Dec_Transformar=i}
  if (DatosActuales.getRange(3,i).getValue()=="DECISIONDISTRIBUIR"){Dec_Distribuir=i}
  if (DatosActuales.getRange(3,i).getValue()=="DECISIONUSAR"){Dec_Usar=i}
  if (DatosActuales.getRange(3,i).getValue()=="DECISIONREINTRODUCIR"){Dec_Reintroducir=i}
  }
  
var columna_Hist = DatosHistoricos.getLastColumn();
var Hist_Info
var Hist_Tomar
var Hist_Transformar
var Hist_Distribuir
var Hist_Usar
var Hist_Reintroducir
var Hist_Simbiosis
var Hist_DatosExtra

  for (var i=1; i<(columna_Hist+1); i++){
  if (DatosHistoricos.getRange(1,i).getValue()=="INFORMACION GENERAL"){Hist_Info=i}
  if (DatosHistoricos.getRange(1,i).getValue()=="TOMAR / ABASTECIMIENTO"){Hist_Tomar=i}
  if (DatosHistoricos.getRange(1,i).getValue()=="TRANSFORMACION"){Hist_Transformar=i}
  if (DatosHistoricos.getRange(1,i).getValue()=="DISTRIBUCIÓN"){Hist_Distribuir=i}
  if (DatosHistoricos.getRange(1,i).getValue()=="VIDA ÚTIL DEL PRODUCTO"){Hist_Usar=i}
  if (DatosHistoricos.getRange(1,i).getValue()=="REINTRODUCCIÓN"){Hist_Reintroducir=i}
  if (DatosHistoricos.getRange(1,i).getValue()=="SIMBIOSIS INDUSTRIAL"){Hist_Simbiosis=i}
  if (DatosHistoricos.getRange(1,i).getValue()=="INFORMACION EXTRA"){Hist_DatosExtra=i}
  if (DatosHistoricos.getRange(1,i).getValue()=="PUNTUACION TOTAL"){var Hist_Puntuacion=i}
  if (DatosHistoricos.getRange(2,i).getValue()=="32. Teléfono (opcional)"){var finDatos=i}
  }
  
 var rows_puntuacion = Puntuacion.getLastRow();

var Punt_Tomar
var Punt_Transformar
var Punt_Distribuir
var Punt_Usar
var Punt_Reintroducir
var Punt_Simbiosis
var Punt_Total

  
  for (var i=1; i<(rows_puntuacion+1); i++){
  if (Puntuacion.getRange(i,1).getValue()=="Tomar"){Punt_Tomar=Puntuacion.getRange(i,Puntuacion.getLastColumn()).getValue()}
  if (Puntuacion.getRange(i,1).getValue()=="Transformar"){Punt_Transformar=Puntuacion.getRange(i,Puntuacion.getLastColumn()).getValue()}
  if (Puntuacion.getRange(i,1).getValue()=="Distribuir"){Punt_Distribuir=Puntuacion.getRange(i,Puntuacion.getLastColumn()).getValue()}
  if (Puntuacion.getRange(i,1).getValue()=="Usar/consumir"){Punt_Usar=Puntuacion.getRange(i,Puntuacion.getLastColumn()).getValue()}
  if (Puntuacion.getRange(i,1).getValue()=="Reintroducir/Enriquecer"){Punt_Reintroducir=Puntuacion.getRange(i,Puntuacion.getLastColumn()).getValue()}
  if (Puntuacion.getRange(i,1).getValue()=="Simbiosis industrial"){Punt_Simbiosis=Puntuacion.getRange(i,Puntuacion.getLastColumn()).getValue()}
  if (Puntuacion.getRange(i,1).getValue()=="Puntuación total"){Punt_Total=Puntuacion.getRange(i,Puntuacion.getLastColumn()).getValue()}

  }


var Row_Hist = DatosHistoricos.getLastRow();
Row_Hist= Row_Hist +1;


var RangoDatosInfo=DatosActuales.getRange(2,Act_Info,1,(Act_Tomar-Act_Info)).getValues();
DatosHistoricos.getRange(Row_Hist,Hist_Info,1,(Hist_Tomar-Hist_Info)).setValues(RangoDatosInfo);

var RangoDatosTomar=DatosActuales.getRange(2,Act_Tomar,1,(Act_Transformar-Act_Tomar)).getValues();
DatosHistoricos.getRange(Row_Hist,(Hist_Tomar),1,(Hist_Transformar-Hist_Tomar-1)).setValues(RangoDatosTomar);
DatosHistoricos.getRange(Row_Hist,(Hist_Transformar-1)).setValue(Punt_Tomar);

var RangoDatosTransformar=DatosActuales.getRange(2,Act_Transformar,1,(Act_Distribuir-Act_Transformar)).getValues();
DatosHistoricos.getRange(Row_Hist,(Hist_Transformar+1),1,(Hist_Distribuir-Hist_Transformar-2)).setValues(RangoDatosTransformar);
var RangoDecisionTransformar=DatosActuales.getRange(2,Dec_Transformar).getValue();
DatosHistoricos.getRange(Row_Hist,(Hist_Transformar)).setValue(RangoDecisionTransformar);
DatosHistoricos.getRange(Row_Hist,(Hist_Distribuir-1)).setValue(Punt_Transformar);

var RangoDatosDistribuir=DatosActuales.getRange(2,Act_Distribuir,1,(Act_Usar-Act_Distribuir)).getValues();
DatosHistoricos.getRange(Row_Hist,(Hist_Distribuir+1),1,(Hist_Usar-Hist_Distribuir-2)).setValues(RangoDatosDistribuir);
var RangoDecisionDistribuir=DatosActuales.getRange(2,Dec_Distribuir).getValue();
DatosHistoricos.getRange(Row_Hist,Hist_Distribuir).setValue(RangoDecisionDistribuir);
DatosHistoricos.getRange(Row_Hist,(Hist_Usar-1)).setValue(Punt_Distribuir);

var RangoDatosProducto=DatosActuales.getRange(2,Act_Usar,1,(Act_Reintroducir-Act_Usar)).getValues();
DatosHistoricos.getRange(Row_Hist,(Hist_Usar+1),1,(Hist_Reintroducir-Hist_Usar-2)).setValues(RangoDatosProducto);
var RangoDecisionProducto=DatosActuales.getRange(2,Dec_Usar).getValue();
DatosHistoricos.getRange(Row_Hist,Hist_Usar).setValue(RangoDecisionProducto);
DatosHistoricos.getRange(Row_Hist,(Hist_Reintroducir-1)).setValue(Punt_Usar);

var RangoDatosReintroducir=DatosActuales.getRange(2,Act_Reintroducir,1,(Act_Simbiosis-Act_Reintroducir)).getValues();
DatosHistoricos.getRange(Row_Hist,(Hist_Reintroducir+1),1,(Hist_Simbiosis-Hist_Reintroducir-2)).setValues(RangoDatosReintroducir);
var RangoDecisionReintroducir=DatosActuales.getRange(2,Dec_Reintroducir).getValue();
DatosHistoricos.getRange(Row_Hist,Hist_Reintroducir).setValue(RangoDecisionReintroducir);
DatosHistoricos.getRange(Row_Hist,(Hist_Simbiosis-1)).setValue(Punt_Reintroducir);

var RangoDatosSimbiosis=DatosActuales.getRange(2,Act_Simbiosis,1,(Act_DatosExtra-Act_Simbiosis)).getValues();
DatosHistoricos.getRange(Row_Hist,(Hist_Simbiosis),1,(Hist_DatosExtra-Hist_Simbiosis-2)).setValues(RangoDatosSimbiosis);
DatosHistoricos.getRange(Row_Hist,(Hist_Puntuacion-1)).setValue(Punt_Simbiosis);

var RangoDatosInfoExtra=DatosActuales.getRange(2,Act_DatosExtra,1,(Dec_Transformar-Act_DatosExtra)).getValues();

DatosHistoricos.getRange(Row_Hist,(Hist_DatosExtra),1,(finDatos -Hist_DatosExtra+1)).setValues(RangoDatosInfoExtra);

DatosHistoricos.getRange(Row_Hist,Hist_Puntuacion).setValue(Punt_Total);


}









function AnalizarDatosIndustria() {

var nombre="ReportItaliano"
var ss = SpreadsheetApp.getActiveSpreadsheet();
var DatosActuales = ss.getSheetByName("DatosDelReport");
var DatosHistoricos = ss.getSheetByName("DatosAcumulados_Horizontal");
var DatosAnalizar = ss.getSheetByName("AnalisisDatos");
var IndustriaIngles = ss.getSheetByName("EqIndustria")
var lastRow=DatosHistoricos.getLastRow();

var ultimafila=DatosAnalizar.getLastRow();
if(ultimafila != 1) {
DatosAnalizar.getRange("A2:J"+ultimafila).setValue("");
}

var IndustriaCastellanoValor
var IndustriaInglesValor
var IndustriaItalianoValor




  if (nombre =="Report1"){
  IndustriaCastellanoValor=DatosActuales.getRange("D2").getValue();
    for (var i=1; i<25; i++){
        if (IndustriaIngles.getRange(i,1).getValues()==IndustriaCastellanoValor){
         IndustriaInglesValor=IndustriaIngles.getRange(i,2).getValues()
        IndustriaItalianoValor=IndustriaIngles.getRange(i,3).getValues()
        break;
        }
    }
  }
  if (nombre =="ReportIngles"){
    IndustriaInglesValor=DatosActuales.getRange("D2").getValue();
    for (var i=1; i<25; i++){
          if (IndustriaIngles.getRange(i,2).getValues()==IndustriaInglesValor){
           IndustriaCastellanoValor=IndustriaIngles.getRange(i,1).getValues()
           IndustriaItalianoValor=IndustriaIngles.getRange(i,3).getValues()
           break;
          }
      }
  }
  
  
  if (nombre =="ReportItaliano"){
    IndustriaItalianoValor=DatosActuales.getRange("D2").getValue();
    for (var i=1; i<25; i++){
    
        var Industria=IndustriaIngles.getRange(i,3).getValues()
        if (Industria == IndustriaItalianoValor){
         IndustriaCastellanoValor=IndustriaIngles.getRange(i,1).getValues();
         IndustriaInglesValor=IndustriaIngles.getRange(i,2).getValues();
         
        }
      }
 }








var columna_Hist = DatosHistoricos.getLastColumn();
var Hist_Info
var Hist_Tomar
var Hist_Transformar
var Hist_Distribuir
var Hist_Usar
var Hist_Reintroducir
var Hist_Simbiosis
var Hist_DatosExtra

  for (var i=1; i<(columna_Hist+1); i++){
  if (DatosHistoricos.getRange(1,i).getValues()=="INFORMACION GENERAL"){Hist_Info=i}
  if (DatosHistoricos.getRange(1,i).getValues()=="TOMAR / ABASTECIMIENTO"){Hist_Tomar=i}
  if (DatosHistoricos.getRange(1,i).getValues()=="TRANSFORMACION"){Hist_Transformar=i}
  if (DatosHistoricos.getRange(1,i).getValues()=="DISTRIBUCIÓN"){Hist_Distribuir=i}
  if (DatosHistoricos.getRange(1,i).getValues()=="VIDA ÚTIL DEL PRODUCTO"){Hist_Usar=i}
  if (DatosHistoricos.getRange(1,i).getValues()=="REINTRODUCCIÓN"){Hist_Reintroducir=i}
  if (DatosHistoricos.getRange(1,i).getValues()=="SIMBIOSIS INDUSTRIAL"){Hist_Simbiosis=i}
  if (DatosHistoricos.getRange(1,i).getValues()=="INFORMACION EXTRA"){Hist_DatosExtra=i}
  if (DatosHistoricos.getRange(1,i).getValues()=="PUNTUACION TOTAL"){var Hist_Puntuacion=i}

  }
  
  


var cont=2;

          for ( var Row_Hist = 3; Row_Hist < (lastRow+1); Row_Hist++) {
              
              if (DatosHistoricos.getRange(Row_Hist,4).getValue() == IndustriaCastellanoValor) {
              
                DatosAnalizar.getRange(cont,1).setValue(DatosHistoricos.getRange("B"+Row_Hist).getValues()); //NombreEmpresa
                DatosAnalizar.getRange(cont,2).setValue(DatosHistoricos.getRange("D"+Row_Hist).getValues()); //Industria
                DatosAnalizar.getRange(cont,3).setValue(DatosHistoricos.getRange(Row_Hist,(Hist_Transformar-1)).getValues());
                DatosAnalizar.getRange(cont,4).setValue(DatosHistoricos.getRange(Row_Hist,(Hist_Distribuir-1)).getValues());
                DatosAnalizar.getRange(cont,5).setValue(DatosHistoricos.getRange(Row_Hist,(Hist_Usar-1)).getValues());
                DatosAnalizar.getRange(cont,6).setValue(DatosHistoricos.getRange(Row_Hist,(Hist_Reintroducir-1)).getValues());
                DatosAnalizar.getRange(cont,7).setValue(DatosHistoricos.getRange(Row_Hist,(Hist_Simbiosis-1)).getValues());
                DatosAnalizar.getRange(cont,8).setValue(DatosHistoricos.getRange(Row_Hist,(Hist_Puntuacion-1)).getValues());
                DatosAnalizar.getRange(cont,10).setValue(DatosHistoricos.getRange(Row_Hist,Hist_Puntuacion).getValues());
               
                cont = cont+1;
                }
                
                if (DatosHistoricos.getRange(Row_Hist,4).getValue() == IndustriaInglesValor) {
                 
                DatosAnalizar.getRange(cont,1).setValue(DatosHistoricos.getRange("B"+Row_Hist).getValues()); //NombreEmpresa
                DatosAnalizar.getRange(cont,2).setValue(DatosHistoricos.getRange("D"+Row_Hist).getValues()); //Industria
                DatosAnalizar.getRange(cont,3).setValue(DatosHistoricos.getRange(Row_Hist,(Hist_Transformar-1)).getValues());
                DatosAnalizar.getRange(cont,4).setValue(DatosHistoricos.getRange(Row_Hist,(Hist_Distribuir-1)).getValues());
                DatosAnalizar.getRange(cont,5).setValue(DatosHistoricos.getRange(Row_Hist,(Hist_Usar-1)).getValues());
                DatosAnalizar.getRange(cont,6).setValue(DatosHistoricos.getRange(Row_Hist,(Hist_Reintroducir-1)).getValues());
                DatosAnalizar.getRange(cont,7).setValue(DatosHistoricos.getRange(Row_Hist,(Hist_Simbiosis-1)).getValues());
                DatosAnalizar.getRange(cont,8).setValue(DatosHistoricos.getRange(Row_Hist,(Hist_Puntuacion-1)).getValues());
                DatosAnalizar.getRange(cont,10).setValue(DatosHistoricos.getRange(Row_Hist,Hist_Puntuacion).getValues());
               
                cont = cont+1;
                }
                
                if (DatosHistoricos.getRange(Row_Hist,4).getValue() == IndustriaItalianoValor) {
                 
                DatosAnalizar.getRange(cont,1).setValue(DatosHistoricos.getRange("B"+Row_Hist).getValues()); //NombreEmpresa
                DatosAnalizar.getRange(cont,2).setValue(DatosHistoricos.getRange("D"+Row_Hist).getValues()); //Industria
                DatosAnalizar.getRange(cont,3).setValue(DatosHistoricos.getRange(Row_Hist,(Hist_Transformar-1)).getValues());
                DatosAnalizar.getRange(cont,4).setValue(DatosHistoricos.getRange(Row_Hist,(Hist_Distribuir-1)).getValues());
                DatosAnalizar.getRange(cont,5).setValue(DatosHistoricos.getRange(Row_Hist,(Hist_Usar-1)).getValues());
                DatosAnalizar.getRange(cont,6).setValue(DatosHistoricos.getRange(Row_Hist,(Hist_Reintroducir-1)).getValues());
                DatosAnalizar.getRange(cont,7).setValue(DatosHistoricos.getRange(Row_Hist,(Hist_Simbiosis-1)).getValues());
                DatosAnalizar.getRange(cont,8).setValue(DatosHistoricos.getRange(Row_Hist,(Hist_Puntuacion-1)).getValues());
                DatosAnalizar.getRange(cont,10).setValue(DatosHistoricos.getRange(Row_Hist,Hist_Puntuacion).getValues());
               
                cont = cont+1;
                }
                
                
                
          }
 
}

  

// Si se cambia la hoja de ReportParte2 o ReportInglesParte2 modificar las líneas en las que se escriben los datos tras el ANALISIS DE LA INDUSTRIA

//Funcion para filtrar los datos de "DatosAlmacenados" y elegir los pertenecientes a la industria para la que se hace el Report1- halla promedio 
function HacerPromedioIndustria(HojaReport){

var ss = SpreadsheetApp.getActiveSpreadsheet();
var Report1 = ss.getSheetByName(HojaReport+"Parte2");

var DatosActuales = ss.getSheetByName("DatosDelReport");
var DatosAnalizar = ss.getSheetByName("AnalisisDatos");
var Puntuacion = ss.getSheetByName("PropuestaPuntuacion");
var lastRow=DatosAnalizar.getLastRow();

var MediaTomar=0;
var MediaDistribuir=0;
var MediaTransformar=0;
var MediaProducto=0;
var MediaReintroducir=0;
var MediaSimbiosis=0;
var MediaTotal=0;

//Añadimos esto para ver cuántas de las empresas que han contestado han respondido a estas áreas. Si no al dividir entre todos los datos
//acumulados, estamos incluyendo las que no han respondido, y la media de la industria sale menor que la que las empresas que sí han contestado
//en realidad han obtenido

var contTransf=0;
var contDistr=0;
var contUsar=0;
var contReintr =0;



for (var i=2; i<(lastRow+1); i++) {



 MediaTomar= +MediaTomar + +DatosAnalizar.getRange("C"+i+":C"+i).getValue();
 
 MediaTransformar = +MediaTransformar + +DatosAnalizar.getRange("D"+i+":D"+i).getValue();
 if(DatosAnalizar.getRange("D"+i+":D"+i).getValue()!=0){contTransf=contTransf + 1}
 MediaDistribuir = +MediaDistribuir + +DatosAnalizar.getRange("E"+i+":E"+i).getValue();
 if(DatosAnalizar.getRange("E"+i+":E"+i).getValue()!=0){contDistr=contDistr + 1}
 MediaProducto = +MediaProducto + +DatosAnalizar.getRange("F"+i+":F"+i).getValue();
 if(DatosAnalizar.getRange("F"+i+":F"+i).getValue()!=0){contUsar=contUsar + 1}
 MediaReintroducir = +MediaReintroducir + +DatosAnalizar.getRange("G"+i+":G"+i).getValue();
 if(DatosAnalizar.getRange("G"+i+":G"+i).getValue()!=0){contReintr=contReintr + 1}
 
 MediaSimbiosis = +MediaSimbiosis + +DatosAnalizar.getRange("H"+i+":H"+i).getValue();
 MediaTotal = +MediaTotal + +DatosAnalizar.getRange("J"+i+":J"+i).getValue();

}




//Solo usamos estos contadores para los campos de transformar, distribuir, producto y reintroducir porque solo estas secciones pueden no ser contestadas
MediaTomar=MediaTomar/(lastRow-1);
if(contTransf!=0){ MediaTransformar=MediaTransformar/contTransf};
if(contDistr!=0){MediaDistribuir=MediaDistribuir/contDistr;}
if(contUsar!=0){MediaProducto=MediaProducto/contUsar};
if(contReintr!=0){MediaReintroducir=MediaReintroducir/contReintr};
MediaTotal=MediaTotal/(lastRow-1);
MediaSimbiosis=MediaSimbiosis/(lastRow-1);

Report1.getRange("B5:B5").setValue(MediaTomar);
Report1.getRange("C5:C5").setValue(MediaTransformar);
Report1.getRange("D5:D5").setValue(MediaDistribuir);
Report1.getRange("E5:E5").setValue(MediaProducto);
Report1.getRange("F5:F5").setValue(MediaReintroducir);
Report1.getRange("G5:G5").setValue(MediaSimbiosis);
Report1.getRange("H5:H5").setValue(MediaTotal);

//Datos analizados
var datos2= parseInt(lastRow)-1

Report1.getRange("H25:H25").setValue(datos2);

var RangoPuntuacionTomar=Puntuacion.getRange("X3:X3").getValues();
Report1.getRange("B6:B6").setValue(RangoPuntuacionTomar);
var RangoPuntuacionTransformar=Puntuacion.getRange("X10:X10").getValues();
Report1.getRange("C6:C6").setValue(RangoPuntuacionTransformar);
var RangoPuntuacionDistribuir=Puntuacion.getRange("X16:X16").getValues();
Report1.getRange("D6:D6").setValue(RangoPuntuacionDistribuir);
var RangoPuntuacionProducto=Puntuacion.getRange("X22:X22").getValues();
Report1.getRange("E6:E6").setValue(RangoPuntuacionProducto);
var RangoPuntuacionReintroducir=Puntuacion.getRange("X30:X30").getValues();
Report1.getRange("F6:F6").setValue(RangoPuntuacionReintroducir);
var RangoPuntuacionReintroducir=Puntuacion.getRange("X38:X38").getValues();
Report1.getRange("G6:G6").setValue(RangoPuntuacionReintroducir);
var RangoPuntuacionTotal=Puntuacion.getRange("AC45:AC45").getValues();
Report1.getRange("H6:H6").setValue(RangoPuntuacionTotal);

}




 





  



function AlmacenarDatos_Horizontal() {


var ss = SpreadsheetApp.getActiveSpreadsheet();
var DatosActuales = ss.getSheetByName("DatosDelReport");
var DatosHistoricos = ss.getSheetByName("DatosAcumulados_Horizontal");
var Puntuacion = ss.getSheetByName("PropuestaPuntuacion");
var lastRow=DatosHistoricos.getLastRow();



var RangoDatosInfo=DatosActuales.getRange("A2:H2").getValues();
DatosHistoricos.getRange("A"+(lastRow+1)+":H"+(lastRow+1)).setValues(RangoDatosInfo);

var RangoDatosTomar=DatosActuales.getRange("I2:L2").getValues();
DatosHistoricos.getRange("I"+(lastRow+1)+":L"+(lastRow+1)).setValues(RangoDatosTomar);

var RangoDatosTransformar=DatosActuales.getRange("M2:O2").getValues();
DatosHistoricos.getRange("O"+(lastRow+1)+":Q"+(lastRow+1)).setValues(RangoDatosTransformar);

var RangoDatosDistribuir=DatosActuales.getRange("P2:R2").getValues();
DatosHistoricos.getRange("T"+(lastRow+1)+":V"+(lastRow+1)).setValues(RangoDatosDistribuir);

var RangoDatosProducto=DatosActuales.getRange("S2:W2").getValues();
DatosHistoricos.getRange("Y"+(lastRow+1)+":AC"+(lastRow+1)).setValues(RangoDatosProducto);

var RangoDatosReintroducir=DatosActuales.getRange("X2:AB2").getValues();
DatosHistoricos.getRange("AF"+(lastRow+1)+":AJ"+(lastRow+1)).setValues(RangoDatosReintroducir);

var RangoDatosSimbiosis=DatosActuales.getRange("AC2:AE2").getValues();
DatosHistoricos.getRange("AL"+(lastRow+1)+":AN"+(lastRow+1)).setValues(RangoDatosSimbiosis);


var RangoPuntuacionTomar=Puntuacion.getRange("X3:X3").getValues();
DatosHistoricos.getRange("M"+(lastRow+1)+":M"+(lastRow+1)).setValues(RangoPuntuacionTomar);


var RangoPuntuacionTransformar=Puntuacion.getRange("X10:X10").getValues();
DatosHistoricos.getRange("R"+(lastRow+1)+":R"+(lastRow+1)).setValues(RangoPuntuacionTransformar);
var RangoDecisionTransformar=Puntuacion.getRange("AA10:AA10").getValues();
DatosHistoricos.getRange("N"+(lastRow+1)+":N"+(lastRow+1)).setValues(RangoDecisionTransformar);


var RangoPuntuacionDistribuir=Puntuacion.getRange("X16:X16").getValues();
DatosHistoricos.getRange("W"+(lastRow+1)+":W"+(lastRow+1)).setValues(RangoPuntuacionDistribuir);
var RangoDecisionDistribuir=Puntuacion.getRange("AA16:AA16").getValues();
DatosHistoricos.getRange("S"+(lastRow+1)+":S"+(lastRow+1)).setValues(RangoDecisionDistribuir);


var RangoPuntuacionProducto=Puntuacion.getRange("X22:X22").getValues();
DatosHistoricos.getRange("AD"+(lastRow+1)+":AD"+(lastRow+1)).setValues(RangoPuntuacionProducto);
var RangoDecisionProducto=Puntuacion.getRange("AA22:AA22").getValues();
DatosHistoricos.getRange("X"+(lastRow+1)+":X"+(lastRow+1)).setValues(RangoDecisionProducto);


var RangoPuntuacionReintroducir=Puntuacion.getRange("X30:X30").getValues();
DatosHistoricos.getRange("AK"+(lastRow+1)+":AK"+(lastRow+1)).setValues(RangoPuntuacionReintroducir);
var RangoDecisionReintroducir=Puntuacion.getRange("AA30:AA30").getValues();
DatosHistoricos.getRange("AE"+(lastRow+1)+":AE"+(lastRow+1)).setValues(RangoDecisionReintroducir);

var RangoPuntuacionSimbiosis=Puntuacion.getRange("X38:X38").getValues();
DatosHistoricos.getRange("AO"+(lastRow+1)+":AO"+(lastRow+1)).setValues(RangoPuntuacionSimbiosis);

var RangoPuntuacionTotal=Puntuacion.getRange("AC45:AC45").getValues();
DatosHistoricos.getRange("AQ"+(lastRow+1)+":AQ"+(lastRow+1)).setValues(RangoPuntuacionTotal);

//Datos informacion extra
var RangoDatosExtra2=DatosActuales.getRange("AF2:AL2").getValues();
DatosHistoricos.getRange("AV"+(lastRow+1)+":BB"+(lastRow+1)).setValues(RangoDatosExtra2);
}



//hide the unnecessary rows of the parts in the final report

function hideManual() {
 //Introducir el nombre de la hoja del informe que se quiere modificar

var Hoja="Report1"
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var Report1 = ss.getSheetByName(Hoja);
  Report1.activate();
  
  
  var Range1 = Report1.getRange(5,9,5,1); //cogemos la primera columna de nuestra "tabla resumen" para contrastar los nombres de las secciones
  var Values = Range1.getValues();
  
 // var length=(Range1.getNumRows()-1);
  var columns=Report1.getMaxColumns();
  
 Report1.hideColumns(8,(columns-7 )); //oculta columnas en las que se encuentran los datos de las secciones
  
var Rango = Report1.getLastRow();

var InicioDistribucion
var InicioTransformar
var InicioProducto
var InicioReintrod
var InicioSimb 

for (var i =1; i<(Rango-1); i++){
if (Report1.getRange("A"+i+":A"+i).getValue()==Values[0][0]){
InicioTransformar = i}
if (Report1.getRange("A"+i+":A"+i).getValue()==Values[1][0]){
InicioDistribucion = i}
if (Report1.getRange("A"+i+":A"+i).getValue()==Values[2][0]){
InicioProducto = i}
if (Report1.getRange("A"+i+":A"+i).getValue()==Values[3][0]){
InicioReintrod = i}
if (Report1.getRange("A"+i+":A"+i).getValue()==Values[4][0]){
InicioSimb = i}

}

var FinTransformar = InicioDistribucion -1 ;
var FinDistribucion=  InicioProducto-1;
var FinProduct = InicioReintrod - 1;
var FinReintrod = InicioSimb - 1;

//cogemos ahora el rango en el que aparece el número de fila inicio y fin de las secciones (en amarillo)

  var Range2 = Report1.getRange(5,11,4,2);
  var Values2 = Range2.getValues();
  
  Values2[0][0] = InicioTransformar
  Values2[0][1]=FinTransformar
  Values2[1][0]=InicioDistribucion
  Values2[1][1]=FinDistribucion
  Values2[2][0]=InicioProducto
  Values2[2][1]=FinProduct
  Values2[3][0]=InicioReintrod
  Values2[3][1]=FinReintrod
  
  
Report1.getRange(5,11,4,2).setValues(Values2)

//cogemos ahora toda la tabla resumen para poder coger el número de filas que hay en cada sección (columna quinta de la tabla resumen)
//y tambien la columna 2 donde aparecen los "sí" o "no"

var Range3 = Report1.getRange(5,9,5,5);
var Values3 = Range3.getValues();


  
  var rangeTransform = Report1.getRange(Values3[0][2] , 1, Values3[0][4], columns);
  var rangeDistrib = Report1.getRange(Values3[1][2] ,1, Values3[1][4] , columns);
  var rangeConsum = Report1.getRange(Values3[2][2] ,1, Values3[2][4] , columns);
  var rangeReintrod = Report1.getRange(Values3[3][2] ,1, Values3[3][4] , columns);
  
  
  
  if( Values3[0][1] == "No"){
    Report1.hideRows( Values3[0][2] ,  Values3[0][4]);
    }
   else {Report1.unhideRow(rangeTransform)}
   
   if( Values3[1][1] == "No"){
    Report1.hideRows( Values3[1][2] , Values3[1][4] );
   }
   else {Report1.unhideRow(rangeDistrib)}
   
  
  if( Values3[2][1] == "No"){
    Report1.hideRows( Values3[2][2] , Values3[2][4]);
   }
   else {Report1.unhideRow(rangeConsum)}
   
   if( Values3[3][1] == "No"){
    Report1.hideRows( Values3[3][2] , Values3[3][4] );
   }
   else {Report1.unhideRow(rangeReintrod)} 
  
  
 } 
 

function AnalizarDatosIndustriaManual() {
 
 var nombre="Report1" //cambiar si se quiere hacer de otra hoja.

var ss = SpreadsheetApp.getActiveSpreadsheet();
var DatosActuales = ss.getSheetByName("DatosDelReport");
var DatosHistoricos = ss.getSheetByName("DatosAcumulados_Horizontal");
var DatosAnalizar = ss.getSheetByName("AnalisisDatos");
var IndustriaIngles = ss.getSheetByName("EqIndustria")
var lastRow=DatosHistoricos.getLastRow();

var ultimafila=DatosAnalizar.getLastRow();
if(ultimafila != 1) {
DatosAnalizar.getRange("A2:J"+ultimafila).setValue("");}

var IndustriaCastellanoValor
var IndustriaInglesValor
var IndustriaItalianoValor




if (nombre =="Report1"){
IndustriaCastellanoValor=DatosActuales.getRange("D2").getValue();
for (var i=1; i<25; i++){
  if (IndustriaIngles.getRange(i,1).getValues()==IndustriaCastellanoValor){
   IndustriaInglesValor=IndustriaIngles.getRange(i,2).getValues()
  IndustriaItalianoValor=IndustriaIngles.getRange(i,3).getValues()
  break;
  }
  }}
  if (nombre =="ReportIngles"){
IndustriaInglesValor=DatosActuales.getRange("D2").getValue();
for (var i=1; i<25; i++){
  if (IndustriaIngles.getRange(i,2).getValues()==IndustriaInglesValor){
   IndustriaCastellanoValor=IndustriaIngles.getRange(i,1).getValues()
   IndustriaItalianoValor=IndustriaIngles.getRange(i,3).getValues()
   break;
  }
  }}
  if (nombre =="ReportItaliano"){
IndustriaItalianoValor=DatosActuales.getRange("D2").getValue();
for (var i=1; i<25; i++){
var value=IndustriaIngles.getRange(i,3).getValues();
  if (IndustriaIngles.getRange(i,3).getValues()==IndustriaItalianoValor){
   IndustriaCastellanoValor=IndustriaIngles.getRange(i,1).getValues()
   IndustriaInglesValor=IndustriaIngles.getRange(i,2).getValues()
   break;
  }
  }}








var columna_Hist = DatosHistoricos.getLastColumn();
var Hist_Info
var Hist_Tomar
var Hist_Transformar
var Hist_Distribuir
var Hist_Usar
var Hist_Reintroducir
var Hist_Simbiosis
var Hist_DatosExtra

  for (var i=1; i<(columna_Hist+1); i++){
  if (DatosHistoricos.getRange(1,i).getValues()=="INFORMACION GENERAL"){Hist_Info=i}
  if (DatosHistoricos.getRange(1,i).getValues()=="TOMAR / ABASTECIMIENTO"){Hist_Tomar=i}
  if (DatosHistoricos.getRange(1,i).getValues()=="TRANSFORMACION"){Hist_Transformar=i}
  if (DatosHistoricos.getRange(1,i).getValues()=="DISTRIBUCIÓN"){Hist_Distribuir=i}
  if (DatosHistoricos.getRange(1,i).getValues()=="VIDA ÚTIL DEL PRODUCTO"){Hist_Usar=i}
  if (DatosHistoricos.getRange(1,i).getValues()=="REINTRODUCCIÓN"){Hist_Reintroducir=i}
  if (DatosHistoricos.getRange(1,i).getValues()=="SIMBIOSIS INDUSTRIAL"){Hist_Simbiosis=i}
  if (DatosHistoricos.getRange(1,i).getValues()=="INFORMACION EXTRA"){Hist_DatosExtra=i}
  if (DatosHistoricos.getRange(1,i).getValues()=="PUNTUACION TOTAL"){var Hist_Puntuacion=i}

  }
  
  


var cont = 2;

          for ( var Row_Hist = 3; Row_Hist < (lastRow+1); Row_Hist++) {
              
              if (DatosHistoricos.getRange(Row_Hist,4).getValue() == IndustriaCastellanoValor) {
              
                DatosAnalizar.getRange(cont,1).setValue(DatosHistoricos.getRange("B"+Row_Hist).getValues()); //NombreEmpresa
                DatosAnalizar.getRange(cont,2).setValue(DatosHistoricos.getRange("D"+Row_Hist).getValues()); //Industria
                DatosAnalizar.getRange(cont,3).setValue(DatosHistoricos.getRange(Row_Hist,(Hist_Transformar-1)).getValues());
                DatosAnalizar.getRange(cont,4).setValue(DatosHistoricos.getRange(Row_Hist,(Hist_Distribuir-1)).getValues());
                DatosAnalizar.getRange(cont,5).setValue(DatosHistoricos.getRange(Row_Hist,(Hist_Usar-1)).getValues());
                DatosAnalizar.getRange(cont,6).setValue(DatosHistoricos.getRange(Row_Hist,(Hist_Reintroducir-1)).getValues());
                DatosAnalizar.getRange(cont,7).setValue(DatosHistoricos.getRange(Row_Hist,(Hist_Simbiosis-1)).getValues());
                DatosAnalizar.getRange(cont,8).setValue(DatosHistoricos.getRange(Row_Hist,(Hist_Puntuacion-1)).getValues());
                DatosAnalizar.getRange(cont,10).setValue(DatosHistoricos.getRange(Row_Hist,Hist_Puntuacion).getValues());
               
                cont = cont+1;
                }
                
                if (DatosHistoricos.getRange(Row_Hist,4).getValue() == IndustriaInglesValor) {
                 
                DatosAnalizar.getRange(cont,1).setValue(DatosHistoricos.getRange("B"+Row_Hist).getValues()); //NombreEmpresa
                DatosAnalizar.getRange(cont,2).setValue(DatosHistoricos.getRange("D"+Row_Hist).getValues()); //Industria
                DatosAnalizar.getRange(cont,3).setValue(DatosHistoricos.getRange(Row_Hist,(Hist_Transformar-1)).getValues());
                DatosAnalizar.getRange(cont,4).setValue(DatosHistoricos.getRange(Row_Hist,(Hist_Distribuir-1)).getValues());
                DatosAnalizar.getRange(cont,5).setValue(DatosHistoricos.getRange(Row_Hist,(Hist_Usar-1)).getValues());
                DatosAnalizar.getRange(cont,6).setValue(DatosHistoricos.getRange(Row_Hist,(Hist_Reintroducir-1)).getValues());
                DatosAnalizar.getRange(cont,7).setValue(DatosHistoricos.getRange(Row_Hist,(Hist_Simbiosis-1)).getValues());
                DatosAnalizar.getRange(cont,8).setValue(DatosHistoricos.getRange(Row_Hist,(Hist_Puntuacion-1)).getValues());
                DatosAnalizar.getRange(cont,10).setValue(DatosHistoricos.getRange(Row_Hist,Hist_Puntuacion).getValues());
               
                cont = cont+1;
                }
                
                if (DatosHistoricos.getRange(Row_Hist,4).getValue() == IndustriaItalianoValor) {
                 
                DatosAnalizar.getRange(cont,1).setValue(DatosHistoricos.getRange("B"+Row_Hist).getValues()); //NombreEmpresa
                DatosAnalizar.getRange(cont,2).setValue(DatosHistoricos.getRange("D"+Row_Hist).getValues()); //Industria
                DatosAnalizar.getRange(cont,3).setValue(DatosHistoricos.getRange(Row_Hist,(Hist_Transformar-1)).getValues());
                DatosAnalizar.getRange(cont,4).setValue(DatosHistoricos.getRange(Row_Hist,(Hist_Distribuir-1)).getValues());
                DatosAnalizar.getRange(cont,5).setValue(DatosHistoricos.getRange(Row_Hist,(Hist_Usar-1)).getValues());
                DatosAnalizar.getRange(cont,6).setValue(DatosHistoricos.getRange(Row_Hist,(Hist_Reintroducir-1)).getValues());
                DatosAnalizar.getRange(cont,7).setValue(DatosHistoricos.getRange(Row_Hist,(Hist_Simbiosis-1)).getValues());
                DatosAnalizar.getRange(cont,8).setValue(DatosHistoricos.getRange(Row_Hist,(Hist_Puntuacion-1)).getValues());
                DatosAnalizar.getRange(cont,10).setValue(DatosHistoricos.getRange(Row_Hist,Hist_Puntuacion).getValues());
               
                cont = cont+1;
                }
                
                
                
          }
 
}
  


function HacerPromedioIndustriaManual(){


//cambiar el nombre de la hoja que se quiere modificar
var HojaReport="ReportItaliano"
var ss = SpreadsheetApp.getActiveSpreadsheet();
var Report1 = ss.getSheetByName(HojaReport+"Parte2");

var DatosActuales = ss.getSheetByName("DatosDelReport");
var DatosAnalizar = ss.getSheetByName("AnalisisDatos");
var Puntuacion = ss.getSheetByName("PropuestaPuntuacion");
var lastRow=DatosAnalizar.getLastRow();

var MediaTomar=0;
var MediaDistribuir=0;
var MediaTransformar=0;
var MediaProducto=0;
var MediaReintroducir=0;
var MediaSimbiosis=0;
var MediaTotal=0;

//Añadimos esto para ver cuántas de las empresas que han contestado han respondido a estas áreas. Si no al dividir entre todos los datos
//acumulados, estamos incluyendo las que no han respondido, y la media de la industria sale menor que la que las empresas que sí han contestado
//en realidad han obtenido

var contTransf=0;
var contDistr=0;
var contUsar=0;
var contReintr =0;



for (var i=2; i<(lastRow+1); i++) {



 MediaTomar= +MediaTomar + +DatosAnalizar.getRange("C"+i+":C"+i).getValue();
 
 MediaTransformar = +MediaTransformar + +DatosAnalizar.getRange("D"+i+":D"+i).getValue();
 if(DatosAnalizar.getRange("D"+i+":D"+i).getValue()!=0){contTransf=contTransf + 1}
 MediaDistribuir = +MediaDistribuir + +DatosAnalizar.getRange("E"+i+":E"+i).getValue();
 if(DatosAnalizar.getRange("E"+i+":E"+i).getValue()!=0){contDistr=contDistr + 1}
 MediaProducto = +MediaProducto + +DatosAnalizar.getRange("F"+i+":F"+i).getValue();
 if(DatosAnalizar.getRange("F"+i+":F"+i).getValue()!=0){contUsar=contUsar + 1}
 MediaReintroducir = +MediaReintroducir + +DatosAnalizar.getRange("G"+i+":G"+i).getValue();
 if(DatosAnalizar.getRange("G"+i+":G"+i).getValue()!=0){contReintr=contReintr + 1}
 
 MediaSimbiosis = +MediaSimbiosis + +DatosAnalizar.getRange("H"+i+":H"+i).getValue();
 MediaTotal = +MediaTotal + +DatosAnalizar.getRange("J"+i+":J"+i).getValue();

}




//Solo usamos estos contadores para los campos de transformar, distribuir, producto y reintroducir porque solo estas secciones pueden no ser contestadas
MediaTomar=MediaTomar/(lastRow-1);
if(contTransf!=0){ MediaTransformar=MediaTransformar/contTransf};
if(contDistr!=0){MediaDistribuir=MediaDistribuir/contDistr;}
if(contUsar!=0){MediaProducto=MediaProducto/contUsar};
if(contReintr!=0){MediaReintroducir=MediaReintroducir/contReintr};
MediaTotal=MediaTotal/(lastRow-1);
MediaSimbiosis=MediaSimbiosis/(lastRow-1);

Report1.getRange("B5:B5").setValue(MediaTomar);
Report1.getRange("C5:C5").setValue(MediaTransformar);
Report1.getRange("D5:D5").setValue(MediaDistribuir);
Report1.getRange("E5:E5").setValue(MediaProducto);
Report1.getRange("F5:F5").setValue(MediaReintroducir);
Report1.getRange("G5:G5").setValue(MediaSimbiosis);
Report1.getRange("H5:H5").setValue(MediaTotal);

//Datos analizados
var datos2= parseInt(lastRow)-1

Report1.getRange("H25:H25").setValue(datos2);

var RangoPuntuacionTomar=Puntuacion.getRange("X3:X3").getValues();
Report1.getRange("B6:B6").setValue(RangoPuntuacionTomar);
var RangoPuntuacionTransformar=Puntuacion.getRange("X10:X10").getValues();
Report1.getRange("C6:C6").setValue(RangoPuntuacionTransformar);
var RangoPuntuacionDistribuir=Puntuacion.getRange("X16:X16").getValues();
Report1.getRange("D6:D6").setValue(RangoPuntuacionDistribuir);
var RangoPuntuacionProducto=Puntuacion.getRange("X22:X22").getValues();
Report1.getRange("E6:E6").setValue(RangoPuntuacionProducto);
var RangoPuntuacionReintroducir=Puntuacion.getRange("X30:X30").getValues();
Report1.getRange("F6:F6").setValue(RangoPuntuacionReintroducir);
var RangoPuntuacionReintroducir=Puntuacion.getRange("X38:X38").getValues();
Report1.getRange("G6:G6").setValue(RangoPuntuacionReintroducir);
var RangoPuntuacionTotal=Puntuacion.getRange("AC45:AC45").getValues();
Report1.getRange("H6:H6").setValue(RangoPuntuacionTotal);

}







function exportSomeSheetsManual() {

//Cambiar el nombre de la hoja que se quiere modificar


var Hoja="Report1"

  // Set the Active Spreadsheet so we don't forget
  var originalSpreadsheet = SpreadsheetApp.getActive();
  var sheets=originalSpreadsheet.getSheets()

  var Report1 = originalSpreadsheet.getSheetByName(Hoja);
   
  Report1.activate();
 
  
  
  var empresa = Report1.getRange("A2:A2").getValues();
  // Set the message to attach to the email.
  var message = "Please see attached"; 
  
  // Get Email  from Cell C2
  
  var RangeMail = Report1.getRange("C2:C2");
  var emailTo = RangeMail.getValues();
   
  // Construct the Subject Line
  var subject = "Resumen del status en economía circular de " + empresa + "/ Review of the cicular economy status of "+empresa ; 
  
  
  for (var i = 0; i < sheets.length; i++) {
    if (sheets[i].getSheetName() == Hoja) {}
    else {
       if(sheets[i].getSheetName() == Hoja+"Parte2"){}
      else {sheets[i].hideSheet()}
    }
  }
  
  var folder = DriveApp.getFoldersByName('Salida de Documentos').next();
  var ReportPDF = folder.createFile(originalSpreadsheet.getBlob().getAs('application/pdf').setName(empresa +'CEReview / ResumenEC' +empresa));
  
  for (var i = 0; i < sheets.length; i++) {
   sheets[i].showSheet(); 
  }
  
 // var ReportPDF = export('Report1')
  
  // Send the freshly constructed email 
  MailApp.sendEmail(emailTo, subject, message, {attachments:ReportPDF.getBlob()});
  
}







//Usado solo para almacenar datos que Tecnun tenía de encuestas previas

function selectData2(){
var originalSpreadsheet = SpreadsheetApp.getActive();
var Respuestas=originalSpreadsheet.getSheetByName("RespuestasFormulario_Castellano")
//var Respuestas=originalSpreadsheet.getSheetByName("RespuestasFormulario_Ingles") //Descomentar si se quiere pasar datos del formulario 3 (en inglés)
//var Respuestas=originalSpreadsheet.getSheetByName("RespuestasFormulario_Italiano") //Descomentar si se quiere pasar datos del formulario 3 (en italiano)

var nombre
var name = Respuestas.getName();

if (name == "RespuestasFormulario_Castellano"){ //elegimos qué sheet tiene que coger como report - la de inglés o castellano -
nombre = "Report1"}
else { nombre = "ReportIngles"}

var Row=Respuestas.getLastRow();
var columnas=Respuestas.getLastColumn();

for (var i = 73; i< (Row+1); i++) { //indicar la fila a partir de la cual se quiere copiar los datos en datos almacenados

var Row=Respuestas.getLastRow();
var columnas=Respuestas.getLastColumn();

var datos = Respuestas.getRange(i,1,1,(columnas)).getValues(); 
var DatosFin = originalSpreadsheet.getSheetByName("DatosDelReport");
DatosFin.activate();
DatosFin.getRange(2,1,1,(columnas)).setValues(datos);


AlmacenarDatos_Horizontal2();
  
 
 } 

}



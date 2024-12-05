//練習問題1
let r=parseFloat(prompt("円の半径?"));
document.write("円周=",6.28318*r,"<br>面積=",3.14159*r*r,"<br>内接する正方形の面積=",2*r);
//練習問題2
let h=parseFloat(prompt("身長[m]?")),w=parseFloat(prompt("体重[kg]?")),BMI=w/(h*h),sd=22*h*h,f=(w-sd)/sd*100;
document.write("身長=",h,"m<br>体重=",w,"kg<br>BMI=",BMI,"<br>肥満度=",f,"%<br>",f<-10?"やせ":f<20?"普通":"肥満");
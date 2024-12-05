//演習問題1
document.write("＼┃1┃2┃3┃4┃5┃6┃7┃8┃9┃<br>━╋━━━━━━━━━━━━━━━━━━<br>");
for(let i=1;i<=9;i++){
  document.write(i,"┃")
  for(let j=1;j<=9;j++){
    document.write(i*j,"┃")
  }
  document.write("<br>");
}
//練習問題2
for(let i=1;i<6;i++){
  let h=parseFloat(prompt(i+"人目の身長[m]?")),w=parseFloat(prompt(i+"人目の体重[kg]?")),BMI=w/(h*h),sd=22*h*h,f=(w-sd)/sd*100;
  document.write(i,"人目の身長=",h,"m<br>",i,"人目の体重=",w,"kg<br>",i,"人目のBMI=",BMI,"<br>",i,"人目の肥満度=",f,"%<br>",i,"人目は",f<-10?"やせ":f<20?"普通":"肥満","<br>");
}

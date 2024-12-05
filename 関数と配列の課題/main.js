//課題
let s=new Array(0),t=0;
while(true){
  var p=parseInt(prompt("点数?(-1で終了)"));
  if (p===-1) break;
  s.push(t);
  t+=p;
}
document.write("合計点:",t,"点,平均点:",t/s.length,"点<br>")
//応用課題
let a=new Array(20);
for(let n=0;n<20;n++) {
  a[n]=n<2?1:a[n-1]+a[n-2];
  document.write(a[n],"<br>");
}
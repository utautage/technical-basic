//ループ応用課題
let s=parseInt(prompt("段数?")),t=[];
for(let i=0;i<s;i++){
  let t2=t.concat(1);
  for(let j=1;j<i;j++){
      t2[j]=t[j]+t[j-1];
  }
  t=t2.concat();
  document.write(t,"<br>")
}
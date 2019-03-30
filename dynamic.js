function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  }
  xhr.send();
}
loadJson("dynamic.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  profile(data.profile);
  career(data.career);
  education(data.education);
  skills(data.skills);
})

var left=document.querySelector(".left");
function profile(p){
  var image=document.createElement("img");
  image.src=p.image;
  left.append(image);


  var h2=document.createElement("h2");
  h2.textContent=p.name;
  left.append(h2);

  var h3=document.createElement("h3");
  h3.textContent=p.mobile;
  left.append(h3);

  var h4=document.createElement("h4");
  h4.textContent=p.design;
  left.append(h4);

  var h5=document.createElement("h5");
  h5.textContent=p.email;
  left.append(h5);
}

var right=document.querySelector(".right");
function career(ca){
  var h1=document.createElement("h1");
  h1.textContent="career objeactive";
  right.append(h1);
  var h2=document.createElement("h2");
  h2.textContent=ca.info;
  right.append(h2);
  right.append(document.createElement("hr"));
}




function education(edu){
  var h1=document.createElement("h1");
  h1.textContent="education";
  right.append(h1);
  var table=document.createElement("table");
//right.append(table);
 var tr1="<tr><th>degree</th><th>institute</th><th>percentage</th><th>y.o.p</th></tr>";
 var tr2=" ";
 for(var i=0;i<edu.length;i++)
 {
   tr2=tr2+"<tr><td>"+edu[i].degree+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].percentage+"</td><td>"+edu[i].yop+"</td></tr>";
 }
 table.innerHTML=tr1+tr2;
 right.append(table);
 right.append(document.createElement("hr"));
}
var right=document.querySelector(".right");
function skills(skl){
  var h1=document.createElement("h1");
  h1.textContent="skills";
  right.append(h1);
  var hl=document.createElement("hl");
  for (var i in skl) {
  var li=document.createElement("li")
  li.innerHTML=skl[i].name+":"+skl[i].info;
  h1.append(li);

}
right.append(h1);
}

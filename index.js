function label_create(tagname,attrname,attrvalue,content){
    var l_e=document.createElement(tagname);
    l_e.setAttribute(attrname,attrvalue);
    l_e.innerHTML = content;
    return l_e;
}
function break_create(){
    var break_create=document.createElement("br");
    return break_create;
}
function input_create(inputtag,attrname,attrvalue,attrname1,attrvalue1){
    var i_e = document.createElement(inputtag);
    i_e.setAttribute(attrname,attrvalue);
    i_e.setAttribute(attrname1,attrvalue1);
    return i_e;
}



function foo(){
  const name=document.getElementById("fn").value;
  const lname=document.getElementById("ln").value;
  const email=document.getElementById("em").value;
  const addr=document.getElementById("lo").value;
  const pin=document.getElementById("pi").value;
  const gen=document.getElementById("ge").value;
  const state=document.getElementById("st").value;
  const country=document.getElementById("co").value;

    const te = document.createElement("table");
    const tre = document.createElement("tr");
    const the = document.createElement("thead");
    const ne =document.createElement("th");
    const le=document.createElement("th");
    const ee =document.createElement("th");
    const ae=document.createElement("th");
    const pe=document.createElement("th");
    const gn=document.createElement("th");
    const se=document.createElement("th");
    const ce=document.createElement("th");
    ne.innerHTML="firstname";
    le.innerHTML="lastname";
    ee.innerHTML="email";
    ae.innerHTML="address";
    pe.innerHTML="pincode";
    gn.innerHTML="gender";
    se.innerHTML="state";
    ce.innerHTML="country";
    const tre1 = document.createElement("tr");
    const tbe = document.createElement("tbody");
    const ne1 =document.createElement("td");
    const le1=document.createElement("td");
    const ee1 =document.createElement("td");
    const ae1=document.createElement("td");
    const pe1=document.createElement("td");
    const gn1=document.createElement("td");
    const se1=document.createElement("td");
    const ce1=document.createElement("td");
    ne1.innerHTML=name;
    le1.innerHTML=lname;
    ee1.innerHTML=email;
    ae1.innerHTML=addr;
    pe1.innerHTML=pin;
    gn1.innerHTML=gen;
    se1.innerHTML=state;
    ce1.innerHTML=country;
    tre.append(ne,le,ee,ae,pe,gn,se,ce);
    tre1.append(ne1,le1,ee1,ae1,pe1,gn1,se1,ce1);
    the.appendChild(tre);
    tbe.appendChild(tre1);
    te.appendChild(the);
    te.appendChild(tbe);
    document.body.append(te);

  
}


var fn=label_create("label","for","fn","firstname");
var i_f=input_create("input","type","text","id","fn");
var b=break_create();
document.body.append(fn,i_f,b);
var ln=label_create("label","for","ln","lastname");
var il=input_create("input","type","text","id","ln");
var b=break_create();
document.body.append(ln,il,b);
var em=label_create("label","for","em","email");
var ei=input_create("input","type","email","id","em");
var b=break_create();
document.body.append(em,ei,b);
var lo=label_create("label","for","lo","address");
var li=input_create("input","type","text","id","lo");
var b=break_create();
document.body.append(lo,li,b);
var pl=label_create("label","for","pi","pincode");
var pi=input_create("input","type","text","id","pi");
var b=break_create();
document.body.append(pl,pi,b);
var ge=label_create("label","for","ge","gender");
var gi=input_create("input","type","text","id","ge");
var b=break_create();
document.body.append(ge,gi,b);
var fo=label_create("label","for","fo","food items");
var b1=break_create();
var fi=input_create("input","type","checkbox","id","bi");
var bi=label_create("label","for","bi","biriyani");
var b=break_create();
document.body.append(fo,b1,fi,bi,b);
var fr=input_create("input","type","checkbox","id","fr");
var fl=label_create("label","for","fr","friedrice");
var b=break_create();
document.body.append(fr,fl,b);
var no=input_create("input","type","checkbox","id","no");
var nl=label_create("label","for","no","noodles");
var b=break_create();
document.body.append(no,nl,b);
var it=input_create("input","type","checkbox","id","it");
var il=label_create("label","for","it","idly");
var b=break_create();
document.body.append(it,il,b);
var di=input_create("input","type","checkbox","id","di");
var dl=label_create("label","for","di","dosa");
var b=break_create();
document.body.append(di,dl,b);

var st=label_create("label","for","st","state");
var si=input_create("input","type","text","id","st");
var b=break_create();
document.body.append(st,si,b);
var co=label_create("label","for","co","country");
var ci=input_create("input","type","text","id","co");
var b=break_create();
document.body.append(co,ci,b);
var button=document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("onclick","foo()");
button.innerHTML="click me";
document.body.append(button)


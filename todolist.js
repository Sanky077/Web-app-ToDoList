const sign=document.getElementById("signup");
const login=document.getElementById("login");
const loginandsignuppage=document.getElementById("loginandsignup");
const loginpag=document.getElementById("loginpage");
const todolistpage=document.getElementById("todolistpag");
const signpage= document.getElementById("signpag");
sign.addEventListener("mouseover",changered);
sign.addEventListener("mouseout",changeback);
login.addEventListener("mouseover",changered1);
login.addEventListener("mouseout",changeback1);
var puser;
var pluser;
var lemal;
var ppass;
var ytytyty;

function changered(){
    sign.style.backgroundColor="rgb(236, 286, 120)";
}

function changeback(){
    sign.style.backgroundColor="rgb(236, 186, 120)";
}

function changered1(){
    login.style.backgroundColor="rgb(236, 286, 120)";
}

function changeback1(){
    login.style.backgroundColor="rgb(236, 186, 120)";
}

login.addEventListener("click",loginpage)

function loginpage(){
    loginandsignuppage.style.display="none";
    loginpag.style.display="block";
}

const s1=document.getElementById("loginsign");
s1.addEventListener("click",
function(){    
signpage.style.display="block";
loginpag.style.display="none";
})

const loginsub=document.getElementById("logsub");
loginsub.addEventListener("click",checkuser);
function checkuser(){
    const entername=document.getElementById("names").value;
    const pass=document.getElementById("pass").value;
    let i;
    let flag;
    for(i=0;i<localStorage.length;i++){
        if (localStorage.key(i)==entername){
            flag=true;
            break;
        }
    }
    if (flag){
        const user=JSON.parse(localStorage.getItem(entername));
        puser=entername;
        if (user[3]==pass){
            loginpag.style.display="none";
            todolistpage.style.display="block";
            pluser=user[1];
            ppass=user[3];
            lemal=user[2];
            document.getElementById("namedis").innerHTML=puser+" "+pluser;
            ytytyty=true;
        }
        else{
            alert("Invalid Password")
        }
    }
    else{
        alert("You must be a new user.Try signing up.")
    }
    checktodolist();
    
}


sign.addEventListener("click",function(){
    loginandsignuppage.style.display="none";
    signpage.style.display="block";
})

const signlog=document.getElementById("signlogin");
signlog.addEventListener("click",function(){
    loginpag.style.display="block";
    signpage.style.display="none";
})

const signsub=document.getElementById("signsub");
signsub.addEventListener("click",function(){
    const firstname=document.getElementById("fname").value;
    const lastname=document.getElementById("lname").value;
    const elmail=document.getElementById("email").value;
    const epass=document.getElementById("epass").value;
    const regx=/^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;


    if (firstname!=""&&lastname!=""&&elmail!=""&&epass!="")
    {
        if(regx.test(elmail))
        {
        var jeqlfie=["Wecome to My Web App"];
        var user=[firstname,lastname,elmail,epass,jeqlfie];
        puser=firstname;
        pluser=lastname;
        lemal=elmail;
        ppass=epass;
        localStorage.setItem(firstname,JSON.stringify(user));
        signpage.style.display="none";
        todolistpage.style.display="block";
        ytytyty=true;
        document.getElementById("namedis").innerHTML=puser+" "+pluser;
    }
    else{
        alert("invalid e-mail")
    }
    }  checktodolist()
});;


document.getElementById("addbtt").addEventListener("mouseover",function(){
    document.getElementById("addbtt").style.backgroundColor="rgb(236, 286, 120)";
})
document.getElementById("addbtt").addEventListener("mouseout",function(){
    document.getElementById("addbtt").style.backgroundColor="rgb(204, 161, 118)";
})
document.getElementById("addbtt").addEventListener("click",function(){
    document.getElementById("additempage").style.display="block";
    todolistpage.style.display="none";
    ytytyty=false;checktodolist();
});

const todolistull=todolistpage.querySelector("ul");
function checktodolist(){
    todolistull.innerHTML=" ";
    if(ytytyty==true){
        var itemps=new Array;
            itemps=(JSON.parse(localStorage.getItem(puser)));
            items=itemps[4];
            if (items.length!=0){
               for(let i=0;i<items.length;i++){
                const newli=document.createElement("li");
                newli.innerText=items[i];
                todolistull.appendChild(newli);
                document.createElement("hr");
            } 
            ytytyty=false;
            
        }
    }
}




document.getElementById("savebtt").addEventListener("mouseover",function(){
    document.getElementById("savebtt").style.backgroundColor="rgb(236, 286, 120)";
})
document.getElementById("savebtt").addEventListener("mouseout",function(){
    document.getElementById("savebtt").style.backgroundColor="rgb(204, 161, 118)";
})

document.getElementById("savebtt").addEventListener("click",function(){
    var item=document.getElementById("addinput").value;
    var iteps=new Array;
    iteps=(JSON.parse(localStorage.getItem(puser)));
    items=iteps[4];
    for (let i=0;i<items.length;i++){
        if(items[i]==item){
            alert("Item Already Present");
            break;
        }
    }
    items.push(item);
    det=(JSON.stringify(localStorage.getItem(puser)))
    localStorage.removeItem(puser);
    var user=[puser,pluser,lemal,ppass,items];
    localStorage.setItem(puser,JSON.stringify(user));
    document.getElementById("additempage").style.display="none";
    todolistpage.style.display="block";
    ytytyty=true;
    document.getElementById("namedis").innerHTML=puser+" "+pluser;
    checktodolist();
});

document.getElementById("namedis").addEventListener("click",function(){
    todolistpage.style.display="none";
    document.getElementById("editpage").style.display="block";
})

document.getElementById("done").addEventListener("click",function(){
    todolistpage.style.display="block";
    document.getElementById("namedis").innerHTML=puser+" "+pluser;
    document.getElementById("editpage").style.display="none";
})

document.getElementById("editfirstname").addEventListener("click",function(){
    document.getElementById("newfnamein").style.display="block";
    document.getElementById("fnamesave").style.display="block";
})

document.getElementById("editlastname").addEventListener("click",function(){
    document.getElementById("newlnamein").style.display="block";
    document.getElementById("lnamesave").style.display="block";
})

document.getElementById("editemail").addEventListener("click",function(){
    document.getElementById("newemailin").style.display="block";
    document.getElementById("emailsave").style.display="block";
})

document.getElementById("editpassword").addEventListener("click",function(){
    document.getElementById("newpassin").style.display="block";
    document.getElementById("passsave").style.display="block";
})

document.getElementById("fnamesave").addEventListener("click",function(){
    var name=document.getElementById("newfnamein").value;
    if (name==puser){
        alert("Your new Firstname is similar to your old one");
    }
    else{
        user=JSON.parse(localStorage.getItem(puser));
        localStorage.removeItem(puser);
        puser=name;
        det=[puser,pluser,lemal,ppass,user[4]];
        localStorage.setItem(puser,JSON.stringify(det));
        document.getElementById("newfnamein").style.display="none";
        document.getElementById("fnamesave").style.display="none";
        alert("Your new First name is set.")
    }
})

document.getElementById("lnamesave").addEventListener("click",function(){
    var name=document.getElementById("newlnamein").value;
    if (name==pluser){
        alert("Your new Lastname is similar to your old one");
    }
    else{
        user=JSON.parse(localStorage.getItem(puser));
        localStorage.removeItem(puser);
        pluser=name;
        det=[puser,pluser,lemal,ppass,user[4]];
        localStorage.setItem(puser,JSON.stringify(det));
        document.getElementById("newlnamein").style.display="none";
        document.getElementById("lnamesave").style.display="none";
        alert("Your new Lastname is set.")
    }
})

document.getElementById("emailsave").addEventListener("click",function(){
    var name=document.getElementById("newemailin").value;
    if (name==lemal){
        alert("Your new E-mail is similar to your old one");
    }
    else{
        const regx=/^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
        if(regx.test("name"))
        {
        user=JSON.parse(localStorage.getItem(puser));
        localStorage.removeItem(puser);
        lemal=name;
        det=[puser,pluser,lemal,ppass,user[4]];
        localStorage.setItem(puser,JSON.stringify(det));
        document.getElementById("newemailin").style.display="none";
        document.getElementById("emailsave").style.display="none";
        alert("Your new E-mail is set.");
        }
        else{
            alert("Invalid Email")
        }
    }
})

document.getElementById("passsave").addEventListener("click",function(){
    var name=document.getElementById("newpassin").value;
    if (name==ppass){
        alert("Your new Password is similar to your old one");
    }
    else{
        user=JSON.parse(localStorage.getItem(puser));
        localStorage.removeItem(puser);
        ppass=name;
        det=[puser,pluser,lemal,ppass,user[4]];
        localStorage.setItem(puser,JSON.stringify(det));
        document.getElementById("newpassin").style.display="none";
        document.getElementById("passsave").style.display="none";
        alert("Your new password is set.")
    }
})

document.getElementById("logout").addEventListener("click",function(){
    todolistpage.style.display="none";
    loginandsignuppage.style.display="block";
})
var toedititem;

todolistpage.querySelector("ul").addEventListener("click",function(e){
    l=e.target;
    toedititem=l.innerText;    
    if(document.getElementById("editbtt").style.display=="block"){
        document.getElementById("editbtt").style.display="none";
    }
    else{
    document.getElementById("editbtt").style.display="block";
    }


})
document.getElementById("editbtt").addEventListener("click",function(){
    document.getElementById("edititem").style.display="block";
})

document.getElementById("itemsavebtt").addEventListener("click",function(){
    newitem=document.getElementById("newitem").value;
    if( newitem==""){
        alert("No text entered");
    }
    else{
        user=JSON.parse(localStorage.getItem(puser));
        localStorage.removeItem(puser);
        items=user[4];
        for (let i=0; i<items.length;i++){
            if (toedititem==items[i]){
                items[i]=toedititem;
                toedititem="";
                break;
            }
        }
        user[4]=[]
        user[4]=items
        det=[puser,pluser,lemal,ppass,user[4]];
        localStorage.setItem(puser,JSON.stringify(det));
        alert("done");
        document.getElementById("edititem").style.display="none";
        ytytyty=true
        checktodolist();
    }
})

todolistpage.querySelector("ul").addEventListener("dblclick",function(e){
    l=e.target;
    delitem=l.innerText;  
    user=JSON.parse(localStorage.getItem(puser));
    localStorage.removeItem(puser);
    items=user[4]
    var newitems=[];
    for (let i=0; i<items.length;i++){
        if (toedititem!=items[i]){
            newitems.push(item[i])
        }
        else{
            continue;
        }
    }
    user[4]=[]
    user[4]=newitems
    det=[puser,pluser,lemal,ppass,user[4]];
    localStorage.setItem(puser,JSON.stringify(det));
    ytytyty=true
    checktodolist();
})

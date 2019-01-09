//flights
function nr1() {
  document.getElementById ("ascuns").style.display = "block";
      }

//show offers
document.getElementById("custom1").addEventListener("click", function(){
     var x = window.matchMedia("(max-width: 700px)");
    /*if(x.matches) document.getElementById("patratgri").style.height = "550vw";
     else document.getElementById("patratgri").style.height = "120vw";*/
     document.getElementById("patratgri").classList.remove("normal");
     document.getElementById("patratgri").classList.add("mare");


    /* if(x.matches) document.getElementById("redimensionat1").style.height="7%";
     else document.getElementById("redimensionat1").style.height="25vw";*/
     document.getElementById("redimensionat1").classList.remove("mic2");
     document.getElementById("redimensionat1").classList.add("mare2");

    /* if(x.matches)
       var abc=document.getElementById("redimensionat2").style.height="40%";
     else var abc=document.getElementById("redimensionat2").style.height="35vw";*/
     document.getElementById("redimensionat2").classList.remove("mic1");
     document.getElementById("redimensionat2").classList.add("mare1");

     document.getElementById("ascunde").style.display="block";
     document.getElementById("arata").style.display="none";


     var div1 = document.createElement("DIV");
    // div1.id="divv"+i;
     document.getElementById("patratgri").appendChild(div1);
     div1.classList.add("third");
     div1.classList.add("dim2");
     div1.id="parinte";
     //div1.style.height="40%";

     //div.style.top="10px";
     div1.classList.add("adaugat");
     var copil1=document.createElement("div");
     var copil2=document.createElement("div");
     var copil3=document.createElement("div");
     var parinte=document.getElementById("parinte");
     parinte.appendChild(copil1);
     parinte.appendChild(copil2);
     parinte.appendChild(copil3);
    /* for(var i=0;i<3;i++)
         {copil[i]=document.createElement("div");
          copil[i].classList.add("box2");}*/
     copil1.classList.add("bgimg1");
     copil2.classList.add("bgimg2");
     copil3.classList.add("bgimg3");

     copil1.classList.add("box2");
     copil2.classList.add("box2");
     copil3.classList.add("box2");


    /* for(var i=0; i<3; i++)
       parinte.appendChild(copil[i]);*/
    nr2(copil1);
    nr2(copil2);
    nr2(copil3);




      });
  //offers data
      var orase=["Bucharest","Liechnstein","Budapest"];
      var oferte=["1 nights+Flight 5*Hotel","5 nights+Flight 3*Hotel","2 nights+Flight 3*Hotel"];
      var suma=["$1,000","$1,200","$300"]
      s=0;
//populate offers
function nr2(copil1){
        var  p1=document.createElement("p");
         p1.classList.add("little2");
         p1.classList.add("lefttext");
         p1.innerText=orase[s];
         copil1.appendChild(p1);

         var p2=document.createElement("p");
         p2.classList.add("little");
         p2.classList.add("fade");
         p2.classList.add("lefttext");
         p2.classList.add("down");
         p2.innerText=oferte[s];
         copil1.appendChild(p2);

         var p3=document.createElement("p");
         p3.classList.add("sum");
         p3.innerText=suma[s];
         copil1.appendChild(p3);

         var div=document.createElement("div");
         div.classList.add("book");
         div.id="dd";
         var buton=document.createElement("BUTTON");
         buton.classList.add("button2");
         var t = document.createTextNode("BOOK NOW ");
         buton.appendChild(t);
         div.appendChild(buton);
         copil1.appendChild(div);
         if(s==2) s=0;
         else  s++;
      }
//hide offers
document.getElementById("custom2").addEventListener("click", function(){

       document.getElementById("ascunde").style.display="none";
       document.getElementById("arata").style.display="block";
       document.getElementById("parinte").remove();
       var x = window.matchMedia("(max-width: 700px)");
       /*if(x.matches)  document.getElementById("patratgri").style.height = "300vw";
       else document.getElementById("patratgri").style.height = "85vw";*/
       document.getElementById("patratgri").classList.remove("mare");
       document.getElementById("patratgri").classList.add("normal");


      /* if(x.matches) document.getElementById("redimensionat1").style.height="15%";
       else document.getElementById("redimensionat1").style.height="25vw";*/
       document.getElementById("redimensionat1").classList.remove("mare2");
       document.getElementById("redimensionat1").classList.add("mic2");

      /* var abc;
       if(x.matches)
           abc=document.getElementById("redimensionat2").style.height="65%";
       else  abc=document.getElementById("redimensionat2").style.height="30vw";*/
       document.getElementById("redimensionat2").classList.remove("mare1");
       document.getElementById("redimensionat2").classList.add("mic1");
  });

//search button-verify
document.getElementById("search").addEventListener("click",function(){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        var data1=new Date(document.getElementById("data1").value);
        var data2=new Date(document.getElementById("data2").value);
        var text=document.getElementById("textbox");
        text.innerText="";

        var dd1 = data1.getDate();
        var mm1 = data1.getMonth() + 1;
        var yyyy1 = data1.getFullYear();
        var dd2=data2.getDate();

        if(isNaN(dd1)) text.innerText="Mandatory field!";
        if(isNaN(dd2)) text.innerText="Mandatory field!";

        if(data1>=data2)   text.innerText="The dates are not good!";


        if(yyyy1<yyyy) text.innerText="You can't book before today!";
        else if(yyyy1==yyyy)
                if(mm1<mm) text.innerText="You can't book before today!";
                else if(mm1==mm)
                     if(dd1<dd) text.innerText="You can't book before today!";


        var nradulti=document.getElementById("nradulti").value;
        var nrcopii=document.getElementById("nrcopii").value;
        if(nradulti==0 && nrcopii==0)
              text.innerText="Mandatory field!";

});
//links
document.getElementById("home_button").addEventListener("click",function(){
  location.href="1.html";
});
document.getElementById("view").addEventListener("click",function(){
  location.href="3.html";
});
document.getElementById("beach").addEventListener("click",function(){
  location.href="2.html";
});

//bianca
window.onscroll = function() {scrollFunction()};
   function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
      } else {
        document.getElementById("myBtn").style.display = "none";
      }
    }
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }
//top

  var myIndex = 0;
  slider();

  function slider() {
  var i;
  var x = document.getElementsByClassName("autoSlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1;}
  x[myIndex-1].style.display = "block";
  setTimeout(slider, 2000);
  }

  var slideIndex = 1;
  showDivs(slideIndex);

  function plusDivs(n) {
    showDivs(slideIndex += n);
  }

  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("manoSlides");
    if (n > x.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = x.length;}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
  }

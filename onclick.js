let a=0;
var c=0;
var output = document.getElementById('output');

function cart(){
  var output = document.getElementById('output');
  output.style.background="black";
  output.style.borderRadius="100%";
  output.style.paddingLeft="5px";
  output.style.paddingRight="5px";
  output.style.marginLeft="5px";
  output.style.color="orange";
  c++;
  output.innerHTML = c;
}
function submit(){
    if(a>0){
    document.getElementById("star").style.display="none";
    document.getElementById("submitted").style.display="block"
    }
    else{
      alert("Please! Give Some Rating...");
    }
  }
  function star1(){
    ++a;
    document.getElementById("star1").style.color="orange";
  }
  function star2(){
    ++a;
    document.getElementById("star1").style.color="orange";
    document.getElementById("star2").style.color="orange";
  }
  function star3(){
    ++a;
    document.getElementById("star1").style.color="orange";
    document.getElementById("star2").style.color="orange";
    document.getElementById("star3").style.color="orange";
  }
  function star4(){
    ++a;
    document.getElementById("star1").style.color="orange";
    document.getElementById("star2").style.color="orange";
    document.getElementById("star3").style.color="orange";
    document.getElementById("star4").style.color="orange";
  }
  function star5(){
    ++a;
    document.getElementById("star1").style.color="orange";
    document.getElementById("star2").style.color="orange";
    document.getElementById("star3").style.color="orange";
    document.getElementById("star4").style.color="orange";
    document.getElementById("star5").style.color="orange";
  }
    function darkmode2(){
    document.getElementById("navbar").style.background="linear-gradient(to right,rgb(22, 111, 255),black,black,black,black)";
    document.getElementById("head").style.color="orange";
    document.getElementById("dark").style.display="none";
    document.getElementById("bright").style.display="block";
    document.getElementById("body2").style.background="black";
    document.getElementById("body2").style.color="white";
    document.getElementById("row1").style.boxShadow="0px 0px 30px orange";
    document.getElementById("row1").style.background="rgb(1,1,37)";
    document.getElementById("footer").style.background="rgb(1,1,37)";
    document.getElementById("fi").style.background="rgb(1,1,37)";
  }
  function brightmode2(){
    document.getElementById("head").style.color="rgb(22, 111, 255)";
    document.getElementById("navbar").style.background="linear-gradient(to right,white,#2874f0,#2874f0,#2874f0,#2874f0)";
    document.getElementById("dark").style.display="block";
    document.getElementById("bright").style.display="none";
    document.getElementById("body2").style.background="#fff";
    document.getElementById("row1").style.boxShadow="0px 0px 30px black";
    document.getElementById("body2").style.color="black";
    document.getElementById("row1").style.background="white";
    document.getElementById("footer").style.background="#052457";
    document.getElementById("fi").style.background="#052457";
  }
  function darkmode(){
    document.getElementById("menu-btn").style.color="rgb(22, 111, 255)";
    document.getElementById("side-menu").style.background="linear-gradient(to bottom,black,rgba(22, 111, 255,0.500),black)";
    document.getElementById("navbar").style.background="linear-gradient(to right,rgb(22, 111, 255),black,black,black,black)";
    document.getElementById("head").style.color="orange";
    document.getElementById("side-menu").style.color="orange";
    document.getElementById("features").style.background="linear-gradient(to right,transparent,orange,transparent)";
    document.getElementById("dark").style.display="none";
    document.getElementById("bright").style.display="block";
    document.getElementById("body").style.background="black";
    document.getElementById("body").style.color="white";
    document.getElementById("row1").style.boxShadow="0px 0px 30px orange";
    document.getElementById("row2").style.boxShadow="0px 0px 30px orange";
    document.getElementById("category").style.background="linear-gradient(to right,transparent,orange,transparent)";
    document.getElementById("slider").style.boxShadow="0px 0px 50px orange";
    document.getElementById("footer").style.background="rgb(1,1,37)";
    document.getElementById("fi").style.background="rgb(1,1,37)";
  }
  function brightmode(){
    document.getElementById("category").style.background="linear-gradient(to bottom,transparent,rgba(0, 0, 255, 0.5),blue,rgba(0, 0, 255, 0.479),transparent))";
    document.getElementById("menu-btn").style.color="black";
    document.getElementById("head").style.color="rgb(22, 111, 255)";
    document.getElementById("side-menu").style.color="black";
    document.getElementById("navbar").style.background="linear-gradient(to right,white,#2874f0,#2874f0,#2874f0,#2874f0)";
    document.getElementById("side-menu").style.background="white";
    document.getElementById("slider").style.background="transparent";
    document.getElementById("on-sale").style.background="transparent";
    document.getElementById("new-products").style.background="transparent";
    document.getElementById("features").style.background="linear-gradient(to right,transparent,blue,transparent)";
    document.getElementById("dark").style.display="block";
    document.getElementById("bright").style.display="none";
    document.getElementById("body").style.background="rgb(226, 219, 219)";
    document.getElementById("slider").style.boxShadow="0px 0px 50px black";
    document.getElementById("body").style.color="black";
    document.getElementById("row1").style.boxShadow="0px 0px 30px black";
    document.getElementById("row2").style.boxShadow="0px 0px 30px black";
  }
  function openmenu(){
    document.getElementById("slider").style.filter="blur(0px)";
    document.getElementById("category").style.filter="blur(0px)";
    document.getElementById("on-sale").style.filter="blur(0px)";
    document.getElementById("new-products").style.filter="blur(0px)";
    document.getElementById("features").style.filter="blur(0px)";
    document.getElementById("on-sale").style.marginLeft="10%";
    document.getElementById("on-sale").style.width="89%";
    document.getElementById("new-products").style.marginLeft="10%";
    document.getElementById("new-products").style.width="89%";
    document.getElementById("slider").style.width="80%";
    document.getElementById("slider").style.height="100% auto";
    document.getElementById("slider").style.marginLeft="20%";
    document.getElementById("side-menu").style.display="block";
    document.getElementById("menu-btn").style.display="none";
    document.getElementById("category").style.marginLeft="10%";
    document.getElementById("category").style.width="auto";
    document.getElementById("close-btn").style.display="block";
  }
  function closemenu(){
    document.getElementById("new-products").style.marginLeft="5%";
    document.getElementById("on-sale").style.marginLeft="5%";
    document.getElementById("slider").style.filter="blur(0px)";
    document.getElementById("category").style.filter="blur(0px)";
    document.getElementById("on-sale").style.filter="blur(0px)";
    document.getElementById("new-products").style.filter="blur(0px)";
    document.getElementById("features").style.filter="blur(0px)";
    document.getElementById("slider").style.width="100%";
    document.getElementById("slider").style.height="100% auto";
    document.getElementById("slider").style.marginLeft="0px";
    document.getElementById("side-menu").style.display="none";
    document.getElementById("menu-btn").style.display="block";
    document.getElementById("close-btn").style.display="none";
  }
var bookid = document.getElementById('bkid').value;//獲取書籍編號
console.log("目前書籍編號:"+bookid)
var el = document.getElementsByName('sheetform');//獲取答案區域

function makeHttpObject() {
  try {return new XMLHttpRequest();}
  catch (error) {}
  try {return new ActiveXObject("Msxml2.XMLHTTP");}
  catch (error) {}
  try {return new ActiveXObject("Microsoft.XMLHTTP");}
  catch (error) {}

  throw new Error("Could not create HTTP request object.");
}

var request = makeHttpObject();
request.open("GET", "https://raw.githubusercontent.com/tooty-1135/easy-happyread-database/main/"+bookid+".html", true);//獲取新的答案區域
request.send();

request.onreadystatechange = function() {
  if (request.readyState == 4 && request.status == 200){
    switch (request.status){
    case 200 :
      el[0].innerHTML=request.responseText;//替換答案區域
      window.open ("https://raw.githubusercontent.com/tooty-1135/easy-happyread-database/main/"+bookid+".txt","解答",height=10,width=10,top=0,left=0);//跳出答案視窗
    case 404 :
      window.alert("找不到書籍"+bookid+"的答案");
      break;
    default:
      window.alert("發生錯誤"+request.status);
      break;
    }         
  } 
};

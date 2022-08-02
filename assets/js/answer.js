function createAnswer() {
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

    function get_aws(bookid) {
      var new_a = makeHttpObject();
      new_a.open("GET", "https://raw.githubusercontent.com/tooty-1135/easy-happyread-database/main/"+bookid+".txt", true);//獲取答案
      new_a.send();
  
      new_a.onreadystatechange = function() {
        if (new_a.readyState == 4){
          switch (new_a.status){
          case 200 :
            var aws = new_a.responseText.split("\n");
            for (let index = 0; index < aws.length; index++) {
              const element = document.querySelectorAll("[value='"+aws[index]+"']");
              if (element.length > 10){
                element[index+1].setAttribute("checked","checked");
              } else {
                element[index].setAttribute("checked","checked");
              }
            }
            break;
          case 404 :
            window.alert("找不到書籍"+bookid+"的答案");
            break;
          default:
            window.alert("發生錯誤"+new_a.status);
            break;
          }         
        } 
      };
    }

    var new_q = makeHttpObject();
    new_q.open("GET", "https://raw.githubusercontent.com/tooty-1135/easy-happyread-database/main/"+bookid+".html", true);//獲取新的答案區域
    new_q.send();

    new_q.onreadystatechange = function() {
      if (new_q.readyState == 4){
        switch (new_q.status){
        case 200 :
          el[0].innerHTML=new_q.responseText;//替換答案區域
          get_aws(bookid)
          break;
        case 404 :
          window.alert("找不到書籍"+bookid+"的答案");
          break;
        default:
          window.alert("發生錯誤"+new_q.status);
          break;
        }         
      } 
    };
}

window.onload = function() { //等待網頁載入完成
    setTimeout("createAnswer()", 500); //延遲 0.5 秒執行
};

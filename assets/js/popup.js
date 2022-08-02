function check_update(){
    const state = document.getElementById("update_state")
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
      request.open("GET", "https://raw.githubusercontent.com/tooty-1135/easy-happyread-ext/main/ver.txt", true);
      request.send();
  
      request.onreadystatechange = function() {
        if (request.readyState == 4){
          switch (request.status){
          case 200 :
            if(request.responseText != "2.0.0"){
              const state = document.getElementById("update_state")
              state.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M2 42 24 4l22 38Zm5.2-3h33.6L24 10Zm17-2.85q.65 0 1.075-.425.425-.425.425-1.075 0-.65-.425-1.075-.425-.425-1.075-.425-.65 0-1.075.425Q22.7 34 22.7 34.65q0 .65.425 1.075.425.425 1.075.425Zm-1.5-5.55h3V19.4h-3Zm1.3-6.1Z"/></svg><p>版本過舊</p>`
            }
            break;
          case 404 :
            state.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M2 42 24 4l22 38Zm5.2-3h33.6L24 10Zm17-2.85q.65 0 1.075-.425.425-.425.425-1.075 0-.65-.425-1.075-.425-.425-1.075-.425-.65 0-1.075.425Q22.7 34 22.7 34.65q0 .65.425 1.075.425.425 1.075.425Zm-1.5-5.55h3V19.4h-3Zm1.3-6.1Z"/></svg><p>取得版本號失敗</p>`
            break;
          default:
            state.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M2 42 24 4l22 38Zm5.2-3h33.6L24 10Zm17-2.85q.65 0 1.075-.425.425-.425.425-1.075 0-.65-.425-1.075-.425-.425-1.075-.425-.65 0-1.075.425Q22.7 34 22.7 34.65q0 .65.425 1.075.425.425 1.075.425Zm-1.5-5.55h3V19.4h-3Zm1.3-6.1Z"/></svg><p>發生錯誤`+request.status+`</p>`
            break;
          }         
        } 
      };
};

window.onload = check_update();
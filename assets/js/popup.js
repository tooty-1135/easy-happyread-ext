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
            if(request.responseText != "2.1.0"){
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

function setting_vis(hide) {
  settings = document.getElementById("settings")
  if (hide == "true") {
    settings.removeAttribute("hidden")
  } else {
    settings.setAttribute("hidden","")
  }
}

function add_listener() {
  const autofill = document.getElementById("autofill")
  autofill.addEventListener('change', (event) => {
    if(autofill.checked){
      localStorage["autofill"] = true
    } else {
      localStorage["autofill"] = false
    }
    chrome.tabs.executeScript(null, {code:`localStorage["autofill"] = ${localStorage["autofill"]}`});
    console.log(localStorage["autofill"])
  })

  const enable = document.getElementById("enable")
  enable.addEventListener('change', (event) => {
    if(enable.checked){
      localStorage["enable"] = true
    } else {
      localStorage["enable"] = false
    }
    setting_vis(localStorage["enable"]);
    chrome.tabs.executeScript(null, {code:`localStorage["enable"] = ${localStorage["enable"]}`});
    console.log(localStorage["enable"])
  })
}

function setup() {
  if(localStorage["autofill"] == "true") {
    const autofill = document.getElementById("autofill");
    autofill.setAttribute("checked","")
  }

  settings = document.getElementById("settings")
  if (localStorage["enable"] == "true") {
    settings.removeAttribute("hidden")
  } else {
    settings.setAttribute("hidden","")
  }

  if(localStorage["enable"] == "true") {
    const enable = document.getElementById("enable");
    enable.setAttribute("checked","")
  }
}

window.onload = function() {
  setup();
  check_update();
  add_listener();
}
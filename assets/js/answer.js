function createAnswer() {
        var script = document.createElement('script');//建立script元素
        script.src = "https://easy-happyread.popcat4.repl.co/assets/js/newq.js";//newq.js
        document.head.appendChild(script);//從網路讀取JS，方便以後更新
        
}

window.onload = function() { //等待網頁載入完成
    setTimeout("createAnswer()", 500); //延遲 0.5 秒執行
};

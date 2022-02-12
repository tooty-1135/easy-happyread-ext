function createAnswer() {


        var script = document.createElement('script');
        script.src = "https://easy-happyread.liyoujun600.repl.co/assets/js/newq.js";
        document.head.appendChild(script);//插入JS


}

window.onload = function() { //等待網頁載入完成
    setTimeout("createAnswer()", 500); //延遲 0.5 秒執行
};

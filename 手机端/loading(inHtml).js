var body = document.getElementById("app")
screenWidth = $(window).width();
if (screenWidth > 480) {
    body.innerHTML = "去手机端试试";
    body.style.textAlign = "center";
    body.style.fontSize = "30px";
    body.style.marginTop = "50px";
}
document.getElementById("submit").onclick = function () {
    new loadAnimation().show() // 显示加载动画
    setTimeout(function() { // 模拟ajax异步操作
        new loadAnimation().hide() // 隐藏加载动画
    }, 2000);
}
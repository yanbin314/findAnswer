function ajax (obj) {
    var str = obj.str;
    var xmlhttp = new XMLHttpRequest();
    var timer;
    if(obj.method.toLowerCase === "get"){
        xmlhttp.open(obj.method, obj.url+"?text="+str);
        xmlhttp.send();
    }
    /*if(obj.method.toLowerCase === "post"){

    }*/
    if(xmlhttp.readyState === 4){
        clearInterval(timer);
        // 判断是否请求成功
        if(xmlhttp.status >= 200 && xmlhttp.status < 300 ||
            xmlhttp.status === 304){
            // 5.处理返回的结果
            // console.log("接收到服务器返回的数据");
        }else{
            // console.log("没有接收到服务器返回的数据");
            obj.error(xmlhttp);
        }
    }

    if(obj.timeout){
        timer = setInterval(function () {
            console.log("中断请求");
            xmlhttp.abort();
            clearInterval(timer);
        }, obj.timeout);
    }
}
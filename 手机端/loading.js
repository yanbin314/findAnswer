(function () {
    function loadAnimation() {
        if (!document.getElementById('loadAnimationStyle')) { //添加样式
            var style = document.createElement('style');
            style.type = 'text/css';
            style.id = 'loadAnimationStyle'
            style.innerHTML=`
                #LoadAnimation{
                    width:100%;
                    height:100%;
                    top: 0;
                    left: 0;
                    background: rgba(0, 0, 0, 0.6);
                    position: absolute;
                    z-index: 999;
                    display: none;
                    opacity: 0;
                    transition: 0.5s;
                    -ms-transition: 0.5s;
                    -moz-transition: 0.5s;
                    -webkit-transition: 0.5s;
                    -o-transition: 0.5s;
                }
                .LoadAnimationShow{
                    display: flex !important;
                    display: -ms-flex !important;
                    display: -moz-flex !important;
                    display: -webkit-flex !important;
                    display: -o-flex !important;
                    flex-direction: row;
                    -ms-flex-direction: row;
                    -moz-flex-direction: row;
                    -webkit-flex-direction: row;
                    -o-flex-direction: row;
                    justify-content: center;
                    -ms-justify-content: center;
                    -moz-justify-content: center;
                    -webkit-justify-content: center;
                    -o-justify-content: center;
                    align-items: center;
                    -ms-align-items: center;
                    -moz-align-items: center;
                    -webkit-align-items: center;
                    -o-align-items: center;
                }
                .LoadAnimationShowOpacity{
                    opacity: 1 !important;
                }
                .LoadAnimation_content {
                    width: 65px;
                    height: 60px;
                    text-align: center;
                    font-size: 10px;
                }
                .LoadAnimation_content > div {
                    width: 6px;
                    height: 100%;
                    display: inline-block;
                    background-color: #34CAFB;
                    animation: stretchdelay 1.2s infinite ease-in-out;
                    -ms-animation: stretchdelay 1.2s infinite ease-in-out;
                    -moz-animation: stretchdelay 1.2s infinite ease-in-out;
                    -o-animation: stretchdelay 1.2s infinite ease-in-out;
                    -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
                }
                .LoadAnimation_content .LoadAnimation_content_rect2 {
                    animation-delay: -1.1s;
                    -ms-animation-delay: -1.1s;
                    -moz-animation-delay: -1.1s;
                    -webkit-animation-delay: -1.1s;
                    -o-animation-delay: -1.1s;
                }
                .LoadAnimation_content .LoadAnimation_content_rect3 {
                    animation-delay: -1.0s;
                    -ms-animation-delay: -1.0s;
                    -moz-animation-delay: -1.0s;
                    -webkit-animation-delay: -1.0s;
                    -o-animation-delay: -1.0s;
                }
                .LoadAnimation_content .LoadAnimation_content_rect4 {
                    animation-delay: -0.9s;
                    -ms-animation-delay: -0.9s;
                    -moz-animation-delay: -0.9s;
                    -webkit-animation-delay: -0.9s;
                    -o-animation-delay: -0.9s;
                }
                .LoadAnimation_content .LoadAnimation_content_rect5 {
                    animation-delay: -0.8s;
                    -ms-animation-delay: -0.8s;
                    -moz-animation-delay: -0.8s;
                    -webkit-animation-delay: -0.8s;
                    -o-animation-delay: -0.8s;
                }
                @-webkit-keyframes stretchdelay {
                    0%, 40%, 100% {
                        transform: scaleY(0.4);
                        -ms-transform: scaleY(0.4);
                        -moz-transform: scaleY(0.4);
                        -webkit-transform: scaleY(0.4);
                        -o-transform: scaleY(0.4);
                    }20% {
                        transform: scaleY(1.0);
                        -ms-transform: scaleY(1.0);
                        -moz-transform: scaleY(1.0);
                        -webkit-transform: scaleY(1.0);
                        -o-transform: scaleY(1.0);
                    }
                }
                @keyframes stretchdelay {
                    0%, 40%, 100% {
                        transform: scaleY(0.4);
                        -ms-transform: scaleY(0.4);
                        -moz-transform: scaleY(0.4);
                        -webkit-transform: scaleY(0.4);
                        -o-transform: scaleY(0.4);
                    }20% {
                        transform: scaleY(1.0);
                        -ms-transform: scaleY(1.0);
                        -moz-transform: scaleY(1.0);
                        -webkit-transform: scaleY(1.0);
                        -o-transform: scaleY(1.0);
                    }
                }
            `;
            document.getElementsByTagName('head').item(0).appendChild(style);
        }
    };

    loadAnimation.prototype.show = function() { // 显示
        var _this = this;
        var LoadAnimation = document.getElementById('LoadAnimation');
        if (LoadAnimation) { // 动画显示
            var DomClass=LoadAnimation.className;//获取类名
            if (!DomClass) {
                LoadAnimation.classList.add("LoadAnimationShow");
                setTimeout(function() {
                    LoadAnimation.classList.add("LoadAnimationShowOpacity");
                }, 10);
            }
        } else { // 渲染动画HTML
            var body = document.getElementsByTagName("body")[0];
            body.insertAdjacentHTML("beforeEnd",`
                <div id="LoadAnimation">
                    <div class="LoadAnimation_content">
                        <div class="LoadAnimation_content_rect1"></div>
                        <div class="LoadAnimation_content_rect2"></div>
                        <div class="LoadAnimation_content_rect3"></div>
                        <div class="LoadAnimation_content_rect4"></div>
                        <div class="LoadAnimation_content_rect5"></div>
                    </div>
                </div>
            `);
            _this.show();
        }
    }

    loadAnimation.prototype.hide = function() { // 隐藏
        var LoadAnimation = document.getElementById('LoadAnimation');
            LoadAnimation.classList.remove("LoadAnimationShowOpacity");
        setTimeout(function() {
            LoadAnimation.classList.remove("LoadAnimationShow");
        }, 600);
    }

    window.loadAnimation = loadAnimation
})()
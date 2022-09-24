window.addEventListener('load', function() {
    // 获取扫码登陆和账号登陆属性
    var spans = document.querySelector('.content_title').children
    var changes =document.querySelector(".change").children
    // 获取输入框属性
    var texts = document.querySelector('.content_r').querySelectorAll('input')
    
    var btn = document.querySelector(".btn")
    // 扫码登陆和账号登陆点击字体变色事件
    for (let i = 0; i < spans.length; i++) {
        spans[i].onclick = function() {
            //利用排他思想
            for (let j = 0; j < spans.length; j++) {
                spans[j].className = ''
                changes[j].style.display = "none"
            }
            spans[i].className = 'current'
            changes[i].style.display = "block"
        }
    }

    //利用排他思想
    // 输入框点击 边框呈现颜色
    for (let j = 0; j < texts.length - 2; j++) {
        texts[j].onfocus = function() {
                for (let i = 0; i < texts.length; i++) {
                    texts[i].style.border = ' 1px solid #bbbaba'
                }
                this.style.border = '1px solid #3aa2e4'
            }
            // 失去焦点 颜色消失
        texts[j].onblur = function() {
            this.style.border = '1px solid #bbbaba';
        }
    }

    // 查找元素
    function getValue(id) {
        return document.getElementsByClassName(id)[0].value;
    }
    // 判断输入的账户和密码
    btn.onclick =  function(){
        if (getValue("uname") == "admin" && getValue("psd") == "123123") {
            return true
        } else {
            alert("登录名或密码错误！")
            return false;
        }
    }
})
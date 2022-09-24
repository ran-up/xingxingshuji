window.onload = function() {
    var inputs = document.querySelectorAll(".ipt")
    var iptErr = document.getElementsByClassName("error")
        inputs[0].onblur = function(){
            // 手机号的正则验证
            var regex = /^1[345789]\d{9}$/
            // 正则验证的使用方法
            if (!(regex.test(inputs[0].value))){
                iptErr[0].style.display = "inline-block"
            }else{
                iptErr[0].style.display = "none"
            }
        }
        inputs[1].onblur = function() {
            if(inputs[1].value.length < 3){
                iptErr[1].style.display = "inline-block"
            }else{
                iptErr[1].style.display = "none"
            }
        }
        // 验证密码
        inputs[2].onblur = function() {
            if(inputs[2].value.length < 6){
                iptErr[2].style.display = "inline-block"
            }else if (inputs[3].value == inputs[2].value){
                // 如果两次输的密码是一致的，则隐藏错误提示
                iptErr[3].style.display = "none"
                iptErr[2].style.display = "none"
            }else {
                iptErr[2].style.display = "none"
            }
        }
        // 验证两次输的密码是不是一致的
        inputs[3].onblur = function() {
            if(inputs[3].value != inputs[2].value){
                iptErr[3].style.display = "inline-block"
            }else if(inputs[3].value == ""){
                iptErr[3].style.display = "inline-block"
            }else{
                iptErr[3].style.display = "none"
            }
        }
    }
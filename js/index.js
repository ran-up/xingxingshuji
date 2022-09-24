// 轮播图
// 取出来是数组，需要取出第一个元素
var items = document.getElementsByClassName("items")
var lists = document.querySelector(".pointers").children
var gopreBtn = document.getElementsByClassName("gopre")[0]
var gonextBtn = document.getElementsByClassName("gonext")[0]
var sliderbanner = document.getElementsByClassName("sliderbanner")[0]
// 推荐区域
var showTitles = document.querySelector(".show_title").children
var infos = document.querySelectorAll(".infos")
// 定时器
var timer
var n = 0

// 开启定时器
function start() {
    timer = setInterval(move, 5000)
}

// 停止定时器
function stop() {
    clearInterval(timer)
}

// 进行其他操作时，先清除之前的样式
function clearAll() {

    for (let i = 0; i < items.length; i++) {
        items[i].className = "items"
        lists[i].className = ""
    }
}

// 自动轮播
function move() {
    n++
    // items.length - 1 减去1是因为取的是下标，从0开始计数，而 items.length 是从1开始计数，就会多一个
    if (n > items.length - 1) {
        n = 0
    }

    clearAll()
    items[n].className = "items active"
    lists[n].className = "activePointer"
}
// 运行定时器
start()

// 点击轮播图左边切换按钮
gopreBtn.addEventListener("click", function () {
    stop()
    n--

    if (n < 0) {
        // items.length - 1 减去1是因为取的是下标，从0开始计数，而 items.length 是从1开始计数，就会多一个
        n = items.length - 1
    }

    clearAll()
    items[n].className = "items active"
    lists[n].className = "activePointer"
})

// 点击轮播图右边切换按钮
gonextBtn.addEventListener("click", function () {
    stop()
    n++

    // items.length - 1 减去1是因为取的是下标，从0开始计数，而 items.length 是从1开始计数，就会多一个
    if (n > items.length - 1) {
        n = 0
    }

    clearAll()
    items[n].classList = "items active"
    lists[n].className = "activePointer"
})

// 点击轮播图小圆圈切换图片
for(let i = 0; i < lists.length; i++) {
    lists[i].setAttribute("list", i)

    lists[i].addEventListener("click", function () {
        stop()

        var list = this.getAttribute("list");

        if (list > items.length) {
            list = 0
        }

        clearAll()
        items[list].className = "items active"
        lists[list].className = "activePointer"
    })
}

// 鼠标离开自动播放
sliderbanner.onmouseleave = start

// 鼠标进入停止播放
sliderbanner.onmouseenter = stop


// 推荐区域
// 推荐头部区域
for (let j = 0; j < showTitles.length; j++) {
    showTitles[j].setAttribute("showTitle", j)

        showTitles[j].addEventListener("mouseover", function() {

            // 遍历清除所有样式，排它思想
            for(let i = 0; i < showTitles.length; i++) {
                showTitles[i].className = ""
                showTitles[i].style.background = "#F7F7F7"
            }

            // 遍历，排它思想
            for(let k = 0; k < infos.length; k++) {
                infos[k].style.display = "none"
            }

            var showTitle = this.getAttribute("showTitle")

            // 设置样式
            this.className = "activeTitle"
            this.style.background = "#fff"

            // 设置对应模块显示
            infos[showTitle].style.display = "block"
            
        })
}
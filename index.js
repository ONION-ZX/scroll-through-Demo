let container = document.querySelector('.container');
let floatBtn = document.getElementById('float-btn');
let floatWindow = document.querySelector('.float-window')
for(var i=1; i < 100; i++) {
    let item = document.createElement('div');
    item.innerText = `${i}: 页面主体`;
    container.appendChild(item);
}

floatBtn.addEventListener('click',() => {
    var scrollTop = 0;
    if(!floatWindow.classList.contains('show')) {
        //显示弹出层
        scrollTop = recordScrollTop();
        document.body.classList.add('dialog-open');
        document.body.style.top = -scrollTop + 'px';
        floatWindow.classList.add('show');     
    } else {
        //隐藏弹出层
        floatWindow.classList.remove('show');
        document.body.classList.remove('dialog-open');
        console.log(scrollTop);
        to(scrollTop);
    }
})

//记录当前滚动位置
function recordScrollTop() {
    return document.body.scrollTop || document.documentElement.scrollTop;
}

//滚动到某一位置
function to(scrollTop) {
    console.log(scrollTop);
    document.body.scrollTop = document.documentElement.scrollTop = scrollTop;
}
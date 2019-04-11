let container = document.querySelector('.container');
let open = document.getElementById('open');
let close = document.getElementById('close');
let floatWindow = document.querySelector('.float-window')
for(var i=1; i < 100; i++) {
    let item = document.createElement('div');
    item.innerText = `${i}: 页面主体`;
    container.appendChild(item);
}

(function() {
    let scrollTop = 0;
    open.onclick = function() {
        scrollTop = recordScrollTop();
        floatWindow.classList.add('show');
        document.body.classList.add('dialog-open');
        document.body.style.top = -scrollTop + 'px';
    }
    close.onclick = function() {
        floatWindow.classList.remove('show');
        document.body.classList.remove('dialog-open');
        console.log(scrollTop);
        to(scrollTop);
    }
    //记录当前滚动位置
    function recordScrollTop() {
        return document.body.scrollTop || document.documentElement.scrollTop;
    }

    //滚动到某一位置
    function to(scrollTop) {
        document.body.scrollTop = document.documentElement.scrollTop = scrollTop;
    }
}());   
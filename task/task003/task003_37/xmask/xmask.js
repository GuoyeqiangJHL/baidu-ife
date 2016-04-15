(function () {
    /*创建子节点*/
    function _createChild(type, calssName, parent) {
        var ele = document.createElement(type);
        parent.appendChild(ele);
        ele.className = calssName;
        return ele;
    }
    /*创建mask*/
    function _createMask() {
        var mask = document.createElement('div');
        document.body.appendChild(mask);

        mask.xwrap = _createChild('div', 'xwrap', mask);

        mask.xwrapNav = _createChild('div', 'xwrap-nav', mask.xwrap);
        mask.xwrapClose = _createChild('button', 'xwrap-close', mask.xwrapNav);
        mask.xwrapClose.addEventListener('click', function () {
            mask.className = 'xmask hide';
        });
        mask.xwrapTitle = _createChild('h3', 'xwrap-title', mask.xwrapNav);

        mask.xwrapMain = _createChild('div', 'xwrap-main', mask.xwrap);

        mask.xwrapFooter = _createChild('div', 'xwrap-footer', mask.xwrap);
        mask.xwrapBtn = _createChild('button', 'xwrap-btn', mask.xwrapFooter);
        mask.xwrapBtn.addEventListener('click', function () {
            mask.className = 'xmask hide';
        });

        return mask;
    }
    var xm = {
        width: 560,
        title: '相关信息',
        message: '这是一个浮出层',
        btntext: '确定',
        mask: null,
        init: function () {
            /*单例*/
            this.mask = this.mask || _createMask();
            this.mask.className = 'xmask show';

            this.mask.xwrap.style.width = this.width;
            this.mask.xwrapClose.innerHTML = 'x';
            this.mask.xwrapTitle.innerHTML = this.title;
            this.mask.xwrapMain.innerHTML = this.message;
            this.mask.xwrapBtn.innerHTML = this.btntext;
        }
    };
    
    window.xmask = function (options) {

        if (options) {
            xm.width =  options.width;
            xm.title =  options.title;
            xm.message = options.message;
            xm.btntext = options.btntext;
        }
        xm.init();
    }
})();

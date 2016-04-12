document.querySelector('#testbtn').addEventListener('click', function () {
    xmask({
        height: 300,
        title: '浮出层',
        message: '你好，我们又见面了',
        btntext: '确定'
    });
});


(function () {
    function _createMask() {
        var mask = document.createElement('div');
        document.body.appendChild(mask);
        mask.addEventListener('click', function () {
            mask.className = 'xmask hide';
        })
        return mask;
    }
    var xm = {
        width: 560,
        mask: false,
        init: function () {
            this.mask = this.mask || _createMask();
            this.mask.className = 'xmask show';
        }
    };
    window.xmask = function (options) {

        xm.width =  options.width || 560;
        xm.height =  options.height || 460;
        xm.title =  options.title || '相关信息';
        xm.message = options.message || '这是一个浮出层';
        xm.btntext = options.btntext || '确定';

        xm.init();
    }
})();

// 跨浏览器事件处理程序封装
var EventUtil = {

    // 添加事件句柄
    addHandler: function(element, type, handler){
        // DOM 2 级事件处理程序
        if (element.addEventListener){
            element.addEventListener(type, handler, false);
        }
        // IE事件处理程序
        else if (element.attachEvent){
            element.attachEvent("on" + type, handler);
        }
        // DOM 0 级事件处理程序
        else{
            element["on" + type] = handler;
        }
    },


    // 获取鼠标事件button属性 ，
    // 0：主鼠标按钮
    // 1：中间按钮
    // 2：次鼠标按钮
    getButton: function(event){
        // DOM Button属性
        if(document.implementation.hasFeature("MouseEvents", "2.0")){
            return event.button;
        }
        // IE 模式下的button属性
        else{
            switch(event.button){
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4: return 1;
            }
        }
    },


    // 获取键盘事件keypress事件的charCode属性
    // 该值表示按下的键所代表的ASCII码
    getCharCode: function(event){
        // IE9 FireFox Chrome Safari
        if(typeof event.getCharCode == "number"){
            return event.charCode;
        }
        // IE8 Opera
        else{
            return event.keyCode;
        }
    },


    // 获取剪切板内容
    getClipboardText: function(event){
        var clipboardData =  (event.clipboardData || window.clipboardData);
        return clipboardData.getData("text");
    },


    // 获取事件对象
    getEvent: function(event){
        return event ? event : window.event;
    },


    // 获取relatedTarget属性
    // 在mouseover事件触发时，IE的fromElement属性中保存了相关元素；
    // 在mouseout事件触发时，IE的toElement属性中保存了相关元素
    getRelatedTarget: function(event){
        // DOM属性，IE8不支持
        if (event.relatedTarget){
            return event.relatedTarget;
        }
        // IE mouseout
        else if (event.toElement){
            return event.toElement;
        }
        // IE mouseover
        else if (event.fromElement){
            return event.fromElement;
        }
        else {
            return null;
        }

    },


    // 获取target事件对象
    getTarget: function(event){
        // DOM || IE
        return event.target || event.srcElement;
    },


    // 获取鼠标滚轮滚动时的属性值
    getWheelDelta: function(event){
        // IE6.0 Chrome  Opera  Safari wheelData属性值
        // 向前滚动是120的倍数
        // 向后滚动是-120的倍数
        if (event.wheelDelta){
            return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
        }
        // Firefox detail属性值
        // 向前滚动是-3的倍数
        // 向后滚动是3的倍数
        else {
            return -event.detail * 40;
        }
    },


    // 取消事件的默认行为
    preventDefault: function(event){
        // DOM
        if (event.preventDefault){
            event.preventDefault();
        }
        // IE
        else {
            event.returnValue = false;
        }
    },


    // 移除事件句柄
    removeHandler: function(element, type, handler){
        // DOM 2
        if (element.removeEventListener){
            element.removeEventListener(type, handler, false);
        }
        // IE
        else if (element.detachEvent){
            element.detachEvent("on" + type, handler);
        }
        // DOM 0
        else {
            element["on" + type] = null;
        }
    },


    // 设置剪切板内容
    setClipboardText: function(event, value){
        // Chrome
        if (event.clipboardData){
            event.clipboardData.setData("text/plain", value);
        }
        // IE
        else if (window.clipboardData){
            window.clipboardData.setData("text", value);
        }
    },


    // 取消事件冒泡
    stopPropagation: function(event){
        // DOM
        if (event.stopPropagation){
            event.stopPropagation();
        }
        // IE
        else {
            event.cancelBubble = true;
        }
    }

};
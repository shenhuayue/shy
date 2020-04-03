var myDate = new Date();
var year2020 = myDate.getFullYear();//2020
var year2019 = myDate.getFullYear()-1;//2019
var year2018 = myDate.getFullYear()-2;//2018
var year2017 = myDate.getFullYear()-3;//2017
var yearList=[year2018+'',year2019+'',year2020+''];
//驱动型式分类销量
function ajax_market10(){
    $.ajax({
        type : "get",
            async : true,
            url : ip_path+"/changfa_system/statisticsQuery/marketShare/drive.do",
            data :{
                token: $(window.parent.document).find("input[name='token']").val(),
                line:'轮式拖拉机',
            },
            dataType : "json",
            success : function (data) {
            $('#malitable11').empty();
            if(data['head']['code'] == 200){
                var y_axis = [];
                var X_axis = [];
                var X_axis1 = [];
                var X_axis2 = [];
                //var model=[];
                data.body.result.forEach(elem => {
                    y_axis.push(elem.name);
                    X_axis.push(elem.sale1);
                    X_axis1.push(elem.sale2);
                    X_axis2.push(elem.sale3);
                    //model.push(elem.model)
                });
                //alert(time_x,rpt_y,dis_y,percent)
                //var legend = data['body']['result']['rates'];
                y_axis.pop();
                X_axis.pop();
                X_axis1.pop();
                X_axis2.pop();
                table_mali11(y_axis,X_axis,X_axis1,X_axis2);
                
                for(i=0;i<data['body']['result'].length;i++){

                    $('#malitable11').append(
                      '<tr height="33">'+
                          //'<td class="td2" >'+ (i+1) +'</td>'+
                          '<td >'+ data['body']['result'][i]['name'] +'</td>'+
                          '<td >'+ data['body']['result'][i]['sale1'] +'</td>'+
                          '<td style="color:#FF7734">'+ data['body']['result'][i]['rate1']+'%' +'</td>'+
                          '<td >'+ data['body']['result'][i]['sale2'] +'</td>'+
                          '<td style="color:#FF7734">'+ data['body']['result'][i]['rate2']+'%' +'</td>'+
                          '<td >'+ data['body']['result'][i]['sale3'] +'</td>'+
                          '<td style="color:#FF7734">'+ data['body']['result'][i]['rate3']+'%' +'</td>'+
                      '</tr>'
                    )
                }
                //console.log(data)
            }else{
                alert(data['head']['message']);
            }
            }

    })

}
function table_mali11(y_axis,X_axis,X_axis1,X_axis2){
    var dom = document.getElementById("mali11");
      var myChart = echarts.init(dom);
      var app = {};
      option = null;
      app.title = '柱状图';
      var option = {
        title: {
            //text: '100马力以下马力轮拖钱10排名'
        },
        tooltip: {
            trigger:'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            textStyle:{
                align:'left'
            },
        },
        legend: {
            data:yearList,
        },
        xAxis: {
            data: y_axis,
            gridIndex: 0,
            axisLabel: {
                interval: 0,    //强制文字产生间隔
                //rotate: 35,     //文字逆时针旋转35°
                textStyle: {    //文字样式
                    color: "black",
                    fontSize: 13,
                    fontFamily: 'Microsoft YaHei'
                }
            }
        },
        yAxis: {
            //data:'value',
        },
        series: [
            
            {
                name: yearList[0],
                type: 'bar',
                data: X_axis,
                color:'#30D39b',
                
                
            },
            {
                name: yearList[1],
                type: 'bar',
                data: X_axis1,
                color:'#7eeafb',
                
            },
            {
                name: yearList[2],
                type: 'bar',
                data: X_axis2,
                color:'#e9c453',
                
                
            },
            
        ]
    };

        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    }
    

//两驱机型品牌分布
function ajax_market11(){
    $.ajax({
        type : "get",
            async : true,
            url : ip_path+"/changfa_system/statisticsQuery/marketShare/drive/factory.do",
            data :{
                token: $(window.parent.document).find("input[name='token']").val(),
                line:'轮式拖拉机',
            },
            dataType : "json",
            success : function (data) {
            //console.log(data)
            $('#malitable12').empty();
            if(data['head']['code'] == 200){
                var y_axis = [];
                var X_axis = [];
                var X_axis1 = [];
                var X_axis2 = [];
                //var model=[];
                data.body.result.forEach(elem => {
                    y_axis.push(elem.factory);
                    X_axis.push(elem.sale1);
                    X_axis1.push(elem.sale2);
                    X_axis2.push(elem.sale3);
                    //model.push(elem.model)
                });
                //alert(time_x,rpt_y,dis_y,percent)
                //var legend = data['body']['result']['rates'];
                y_axis.pop();
                X_axis.pop();
                X_axis1.pop();
                X_axis2.pop();
                table_mali12(y_axis,X_axis,X_axis1,X_axis2);
                
                for(i=0;i<data['body']['result'].length;i++){

                    $('#malitable12').append(
                      '<tr height="33">'+
                          '<td >'+ (i+1) +'</td>'+
                          '<td >'+ data['body']['result'][i]['factory'] +'</td>'+
                          '<td >'+ data['body']['result'][i]['sale1'] +'</td>'+
                          '<td >'+ data['body']['result'][i]['sale2'] +'</td>'+
                          '<td >'+ data['body']['result'][i]['sale3'] +'</td>'+
                          '<td style="color:#FF7734">'+ data['body']['result'][i]['rate3']+'%' +'</td>'+
                      '</tr>'
                    )
                  }
                //console.log(data)
            }else{
                alert(data['head']['message']);
            }
            }

    })

}
function table_mali12(y_axis,X_axis,X_axis1,X_axis2){
    var dom = document.getElementById("mali12");
      var myChart = echarts.init(dom);
      var app = {};
      option = null;
      app.title = '柱状图';
      var option = {
        title: {
            //text: '100马力以下马力轮拖钱10排名'
        },
        tooltip: {
            trigger:'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            textStyle:{
                align:'left'
            },
        },
        legend: {
            data:yearList,
        },
        xAxis: {
            data: y_axis,
            gridIndex: 0,
            axisLabel: {
                interval: 0,    //强制文字产生间隔
                rotate: 35,     //文字逆时针旋转35°
                textStyle: {    //文字样式
                    color: "black",
                    fontSize: 13,
                    fontFamily: 'Microsoft YaHei'
                }
            }
        },
        yAxis: {
            //data:'value',
            //min: 0,
            //max: 1700,
            //interval: 350,
        },
        series: [
            
            {
                name: yearList[0],
                type: 'bar',
                data: X_axis,
                color:'#30D39B',
                
                
            },
            {
                name: yearList[1],
                type: 'bar',
                data: X_axis1,
                color:'#43F9BB',
                /*label: {
                    normal: {
                        show: true,
                        formatter: X_axis,
                        position: "",
                        interval: 0,
                        rotate: 90,     //文字逆时针旋转45°
                        textStyle: {
                            color: "#fff",
                            fontSize: 14
                        }
                        
                    },
                    
                },*/
            },
            {
                name: yearList[2],
                type: 'bar',
                data: X_axis2,
                color:'#099A52',
                /*label: {
                    normal: {
                        show: true,
                        formatter: X_axis,
                        position: "",
                        interval: 0,
                        rotate: 90,     //文字逆时针旋转45°
                        textStyle: {
                            color: "#fff",
                            fontSize: 14
                        }
                        
                    },
                    
                },*/
                
            },
            
        ]
    };

        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    }


//两驱机型地区分布
function ajax_market12(){
    $.ajax({
        type : "get",
            async : true,
            url : ip_path+"/changfa_system/statisticsQuery/marketShare/drive/province.do",
            data :{
                token: $(window.parent.document).find("input[name='token']").val(),
                line:'轮式拖拉机', 
            },
            dataType : "json",
            success : function (data) {
            $('#malitable13').empty();
            if(data['head']['code'] == 200){
                var y_axis = [];
                var X_axis = [];
                var X_axis1 = [];
                var X_axis2 = [];
                data.body.result.forEach(elem => {
                    y_axis.push(elem.factory);
                    X_axis.push(elem.sale1);
                    X_axis1.push(elem.sale2);
                    X_axis2.push(elem.sale3);
                    //model.push(elem.model)
                });
                y_axis.pop();
                X_axis.pop();
                X_axis2.pop();
                X_axis1.pop();
                table_mali13(y_axis,X_axis,X_axis1,X_axis2);
                for(i=0;i<data['body']['result'].length;i++){
                    $('#malitable13').append(
                      '<tr height="33">'+
                          //'<td class="td2" >'+ (i+1) +'</td>'+
                          '<td >'+ data['body']['result'][i]['factory'] +'</td>'+
                          '<td >'+ data['body']['result'][i]['sale1'] +'</td>'+
                          '<td >'+ data['body']['result'][i]['sale2'] +'</td>'+
                          '<td >'+ data['body']['result'][i]['sale3'] +'</td>'+
                          '<td style="color:#FF7734">'+ data['body']['result'][i]['rate3']+'%' +'</td>'+
                      '</tr>'
                    )
                  }
            }else{
                alert(data['head']['message']);
            }
            }
    })

}
function table_mali13(y_axis,X_axis,X_axis1,X_axis2){
    var dom = document.getElementById("mali13");
      var myChart = echarts.init(dom);
      var app = {};
      option = null;
      app.title = '柱状图';
      var option = {
        title: {
            //text: '100马力以下马力轮拖钱10排名'
        },
        tooltip: {
            trigger:'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            textStyle:{
                align:'left'
            },
        },
        legend: {
            data:yearList,
        },
        grid: {
            //bottom: 110,
        },
        xAxis: {
            data: y_axis,
            gridIndex: 0,
            axisLabel: {
                interval: 0,    //强制文字产生间隔
                rotate: 35,     //文字逆时针旋转35°
                textStyle: {    //文字样式
                    color: "black",
                    fontSize: 13,
                    fontFamily: 'Microsoft YaHei'
                }
            }
        },
        yAxis: {
            //data:'value',
            //min: 0,
            //max: 1500,
            //interval: 300,
        },
        series: [
            {
                name: yearList[0],
                type: 'bar',
                data: X_axis,
                color:'#e9c453',
            
            },
            {
                name: yearList[1],
                type: 'bar',
                data: X_axis1,
                color:'#ff9f38',
               
            },
            {
                name: yearList[2],
                type: 'bar',
                data: X_axis2,
                color:'#ff7734',
              
                
            },
            
        ]
    };

        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    }



//两驱机型平台分布
function ajax_market13(){
    $.ajax({
        type : "get",
            async : true,
            url : ip_path+"/changfa_system/statisticsQuery/marketShare/drive/serial.do",
            data :{
                token: $(window.parent.document).find("input[name='token']").val(),
                line:'轮式拖拉机',
            },
            dataType : "json",
            success : function (data) {
            $('#malitable14').empty();
            if(data['head']['code'] == 200){
                var y_axis = [];
                var X_axis = [];
                var X_axis1 = [];
                var X_axis2 = [];
                data.body.result.forEach(elem => {
                    y_axis.push(elem.name);
                    X_axis.push(elem.sale1);
                    X_axis1.push(elem.sale2);
                    X_axis2.push(elem.sale3);
                    //model.push(elem.model)
                });
                y_axis.pop();
                X_axis.pop();
                X_axis1.pop();
                X_axis2.pop();
                table_mali14(y_axis,X_axis,X_axis1,X_axis2);
                for(i=0;i<data['body']['result'].length;i++){

                    $('#malitable14').append(
                      '<tr height="33">'+
                          //'<td class="td2" >'+ (i+1) +'</td>'+
                          '<td >'+ data['body']['result'][i]['name'] +'</td>'+
                          '<td >'+ data['body']['result'][i]['sale1'] +'</td>'+
                          '<td >'+ data['body']['result'][i]['sale2'] +'</td>'+
                          '<td >'+ data['body']['result'][i]['sale3'] +'</td>'+
                          '<td style="color:#FF7734">'+ data['body']['result'][i]['rate3']+'%' +'</td>'+
                      '</tr>'
                    )
                  }
            }else{
                alert(data['head']['message']);
            }
            }
    })

}
function table_mali14(y_axis,X_axis,X_axis1,X_axis2){
    var dom = document.getElementById("mali14");
      var myChart = echarts.init(dom);
      var app = {};
      option = null;
      app.title = '柱状图';
      var option = {
        title: {
            //text: '100马力以下马力轮拖钱10排名'
        },
        tooltip: {
            trigger:'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            textStyle:{
                align:'left'
            },
        },
        legend: {
            data:yearList,
        },
        grid: {
            //bottom: 110,  
        },
        xAxis: {
            data: y_axis,
            gridIndex: 0,
            axisLabel: {
                interval: 0,    //强制文字产生间隔
                //rotate: 35,     //文字逆时针旋转35°
                textStyle: {    //文字样式
                    color: "black",
                    fontSize: 13,
                    fontFamily: 'Microsoft YaHei'
                }
            }
        },
        yAxis: {
            type:'value',
            //min: 0,
            //max: 15000,
            
        },
        series: [
            {
                name: yearList[0],
                type: 'bar',
                data: X_axis,
                color:'#5fd5e7',
                
                
            },
            {
                name: yearList[1],
                type: 'bar',
                data: X_axis1,
                color:'#98e378',
               
            },
            {
                name: yearList[2],
                type: 'bar',
                data: X_axis2,
                color:'#e9c453',
                
                
            },
            
        ]
    };

        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    }


//2018-2019年渠道网点
function ajax_market14(){
    $.ajax({
        type : "get",
            async : true,
            url : ip_path+"/changfa_system/statisticsQuery/marketShare/distributor.do",
            data :{
                token: $(window.parent.document).find("input[name='token']").val(),
                line:'轮式拖拉机',
            },
            dataType : "json",
            success : function (data) {
                //console.log(data)
                $('#malitable15').empty();
                if(data['head']['code'] == 200){
                    var y_axis = [];
                    var X_axis = [];
                    var X_axis1 = [];
                    data.body.result.forEach(elem => {
                        y_axis.push(elem.factory);
                        X_axis.push(elem.sale2);
                        X_axis1.push(elem.distributor2);
                    });
                    X_axis.pop();
                    X_axis1.pop();
                    y_axis.pop();
                    table_mali15(y_axis,X_axis,X_axis1);
                    for(i=0;i<data['body']['result'].length;i++){
                        $('#malitable15').append(
                        '<tr height="33">'+
                            '<td >'+ (i+1) +'</td>'+
                            '<td >'+ data['body']['result'][i]['factory'] +'</td>'+
                            '<td >'+ data['body']['result'][i]['sale1'] +'</td>'+
                            '<td >'+ data['body']['result'][i]['distributor1'] +'</td>'+
                            '<td >'+ data['body']['result'][i]['rate1'] +'</td>'+
                            '<td >'+ data['body']['result'][i]['distributor3'] +'</td>'+
                            '<td >'+ data['body']['result'][i]['sale2'] +'</td>'+
                            '<td >'+ data['body']['result'][i]['distributor2'] +'</td>'+
                            '<td >'+ data['body']['result'][i]['rate2'] +'</td>'+
                            '<td >'+ data['body']['result'][i]['distributor4'] +'</td>'+  
                        '</tr>'
                        )
                    }
                }else{
                    alert(data['head']['message']);
                }
            }

    })

}
function table_mali15(y_axis,X_axis,X_axis1){
    var dom = document.getElementById("mali15");
      var myChart = echarts.init(dom);
      var app = {};
      option = null;
      app.title = '柱状图';
      var option = {
        title: {
            //text: '100马力以下马力轮拖钱10排名'
        },
        tooltip: {
            trigger:'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            textStyle:{
                align:'left'
            },
        },
        legend: {
            data:['销量','网点数量'],
        },
        grid: {
            //left:'6%',
            //bottom: 110,
        },
        xAxis: {
            data: y_axis,
            gridIndex: 0,
            axisLabel: {
                interval: 0,    //强制文字产生间隔
                rotate: 35,     //文字逆时针旋转35°
                textStyle: {    //文字样式
                    color: "black",
                    fontSize: 13,
                    fontFamily: 'Microsoft YaHei'
                }
            }
        },
        yAxis: {
            //data:'value',
        },
        series: [
            {
                name: '销量',
                type: 'bar',
                data: X_axis,
                color:'#68bf46',
                
            },
            {
                name: '网点数量',
                type: 'bar',
                data: X_axis1,
                color:'#30d39b',
                
                
            },
            
        ]
    };

        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    }
    


    function zhanshi0(){
        $("#ajax_table0").slideToggle("fast");
    }
    function zhanshi1(){
        $("#ajax_table1").slideToggle("fast");
    }
    function zhanshi2(){
        $("#ajax_table2").slideToggle("fast");
    }
    function zhanshi3(){
        $("#ajax_table3").slideToggle("fast");
    }
    function zhanshi4(){
        $("#ajax_table4").slideToggle("fast");
    }
    function zhanshi5(){
        $("#ajax_table5").slideToggle("fast");
    }
    function zhanshi6(){
        $("#ajax_table6").slideToggle("fast");
    }
    function zhanshi7(){
        $("#ajax_table7").slideToggle("fast");
    }
    function zhanshi8(){
        $("#ajax_table8").slideToggle("fast");
    }
    function zhanshi9(){
        $("#ajax_table9").slideToggle("fast");
    }
    function zhanshi10(){
        $("#ajax_table10").slideToggle("fast");
    }
    function zhanshi11(){
        $("#ajax_table11").slideToggle("fast");
    }
    function zhanshi12(){
        $("#ajax_table12").slideToggle("fast");
    }
    function zhanshi13(){
        $("#ajax_table13").slideToggle("fast");
    }
    function zhanshi14(){
        $("#ajax_table14").slideToggle("fast");
    }

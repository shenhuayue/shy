var myDate = new Date();
var year2020 = myDate.getFullYear();//2020
var year2019 = myDate.getFullYear()-1;//2019
var year2018 = myDate.getFullYear()-2;//2018
var year2017 = myDate.getFullYear()-3;//2017
var yearList=[year2018+'',year2019+'',year2020+''];
var year2020c = myDate.getFullYear()+'';//2020
var year2019c = myDate.getFullYear()-1+'';//2019
var year2018c = myDate.getFullYear()-2+'';//2018


function getlineouts(){
    $.ajax({
      type: "get",
      async: false,
      url: ip_path + "/changfa_system//subsidyParameter/list.do",
      data: {
      token: $(window.parent.document).find("input[name='token']").val(),
      type:'serial',
      //line:$('#linenum option:selected').val(),
      line:'轮式拖拉机',
      //name:$('#serisename1').val()
      },
      dataType: "json",
      success: function (data) {
      //console.log(data);
      if(data['head']['code']==200){
          //console.log(data)
          $("#serial_list").empty();
          $("#serial_list1").empty();
          for(var i = 0; i < data['body']['result'].length; i++){
          $('#serial_list').append(
            '<li data-id="'+data['body']['result'][i]['id']+'" onclick="qhsj(this)">'+data['body']['result'][i]['name']+'</li>'
          );
          $('#serial_list1').append(
            '<li data-id="'+data['body']['result'][i]['id']+'" onclick="qhsj1(this)">'+data['body']['result'][i]['name']+'</li>'
          )
          
          }
          var shouge = $("#serial_list li").first();
          shouge.addClass('tabin1');
          var shouge1 = $("#serial_list1 li").first();
          shouge1.addClass('tabin2')
          
      }else{
          alert(data['head']['message'])
      }
  
      }
  })
  }

  function qhsj(event){
    $(event).addClass("tabin1").siblings().removeClass("tabin1");
    ajax_market8();
  }
  function qhsj1(event){
    $(event).addClass("tabin2").siblings().removeClass("tabin2");
    ajax_market9();
  }



function zhanshi(){
    $('#table1').show()
}
function zhanshi1(){
    $('#table2').show()
}
function zhanshi3(){
    $('#table3').show()
}
function zhanshi4(){
    $('#table4').show()
}
function zhanshi5(){
    $('#table5').show()
}
function zhanshi6(){
    $('#table6').show()
}

//饼状图

function ajax_market0(){
    //表格
    $.ajax({
        type : "get",
        async : true,
        url : ip_path+"/changfa_system/statisticsQuery/marketShare/factory.do",
        data :{
            token: $(window.parent.document).find("input[name='token']").val(),
            //type: 'year', 
            line:'轮式拖拉机'
        },
        dataType : "json",
        success : function (data) {
            //console.log(data)
            //饼图
                var a = [];
                var factory = [];
                var d={};
                d["2018"] = [];
                d["2019"] = [];
                d["2020"] = [];
                data.body.result.forEach(elem => {
                    //console.log(elem)
                    var b = {value:elem.sale3, name:elem.factory};
                    a.push(b);
                    factory.push(elem.factory);
                    //d{elem.keye,lem.sale3};
                    d["2018"].push(elem.sale1);
                    d["2019"].push(elem.sale2);
                    d["2020"].push(elem.sale3);
                });
                a.pop();
                d["2018"].pop();
                d["2019"].pop();
                d["2020"].pop();
                factory.pop();

                table_rptzhuzhuang(factory,d);
                var myChart = echarts.init(document.getElementById('container3'));
                option = {
                    title : {
                        text: '品牌销量占比',
                        //subtext: '按品牌统计',
                        x:'center',
                        textStyle: {    //文字样式
                            color: "green",
                            fontSize: 13,
                            fontFamily: 'Microsoft YaHei'
                        }
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)",
                        //extraCssText:'width:200px;height:50px;',
                        textStyle:{
                            align:'left'
                        },
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        top:100,
                        data: factory
                    },
                    series : [
                        {
                            name: '数量/占比',
                            type: 'pie',
                            radius : '60%',
                            center: ['60%', '55%'],
                            bottom:50,
                            hoverOffset : 10,
                            data:a,
                            //color:['#01B468','#FFD306', 'green'],
                            color:['#5fd5e7','#68bf46','#98e378','#30d39b','#43f9bb','#7eeafb','#e9c453','#ff9f38','#ff7734','#ffda68'],

                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };
                myChart.setOption(option);
               
            $('#adminTbody3').empty();
            if(data['head']['code'] == 200){
                for(i=0;i<data['body']['result'].length;i++){

                  $('#adminTbody3').append(
                    '<tr>'+
                        '<td >'+ (i+1) +'</td>'+
                        '<td>'+ data['body']['result'][i]['factory'] +'</td>'+
                        '<td >'+ data['body']['result'][i]['sale1'] +'</td>'+
                        '<td >'+ data['body']['result'][i]['rate1']+'%' +'</td>'+
                        '<td >'+ data['body']['result'][i]['sale2'] +'</td>'+
                        '<td >'+ data['body']['result'][i]['rate2']+'%' +'</td>'+
                        '<td >'+ data['body']['result'][i]['sale3'] +'</td>'+
                        '<td >'+ data['body']['result'][i]['rate3']+'%' +'</td>'+
                        '<td style="color:#FF7734">'+ data['body']['result'][i]['rate']+'%' +'</td>'+
                    '</tr>'
                  )
                }
                
            }else {
                alert(data['head']['message']);
            }
        }
      });
     

}
function dataFormatter(factory,obj) {
    var pList = factory;
    //console.log(obj)
    var temp;
    for (var year = year2018; year <= year2020.length; year++) {
        var max = 0;
        var sum = 0;
        temp = obj[year];
        
        for (var i = 0, l = temp.length; i < l; i++) {
            max = Math.max(max, temp[i]);
            sum += temp[i];
            obj[year][i] = {
                name: pList[i],
                value: temp[i]
            };
        }
        obj[year + 'max'] = Math.floor(max / 100) * 100;
        obj[year + 'sum'] = sum;
    }
    return obj;
}

function table_rptzhuzhuang(factory,d){
    
    var myChart1 = echarts.init(document.getElementById('container2'));
    var dataMap = {};
    //dataFormatter(d,c);

dataMap.dataGDP = dataFormatter(factory,d);
//console.log(dataMap.dataGDP)

option = {
    baseOption: {
        timeline: {
            
            lineStyle:{
                //color:'#FFD306'
            
            },
            checkpointStyle:{
                color:'#FFD306',
                borderColor:'#FF7734',
                borderWidth:'1'
             
            },
            controlStyle:{
                /*normal:{
                    color:'#FFD306',
                    borderColor:'#FF7734',
                },
                emphasis:{
                    color:'#FFD306'
                },
                */
               hover:{
                color:'#FFD306'
            }
            },
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 5000,
            // controlStyle: {
            //     position: 'left'
            // },
            data: yearList,
            label: {
                formatter : function(s) {
                    return (new Date(s)).getFullYear();
                }
            }
        },
        title: {
            text: '品牌销量',
                //subtext: '按品牌统计',
                x:'center',
                textStyle: {    //文字样式
                color: "#30d39b",
                fontSize: 13,
                fontFamily: 'Microsoft YaHei'
            }
        },
        tooltip: {
            textStyle:{
                align:'left'
            },
        },
        legend: {
            left: 'right',
            color:'green',

            //data: ['第一产业', '第二产业', '第三产业'],
        },
        calculable : true,
        grid: {
            top: 50,
            bottom: 100,
            height:330,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    label: {
                        show: true,
                        formatter: function (params) {
                            return params.value.replace('\n', '');
                        }
                    }
                }
            }
        },
        xAxis: [
            {
                'type':'category',
                'axisLabel':{'interval':0},
                'data':factory,
                gridIndex: 0,
                splitLine: {show: false},
                axisLabel: {
                    interval: 0,    //强制文字产生间隔
                    rotate: 35,     //文字逆时针旋转45°
                    textStyle: {    //文字样式
                        color: "black",
                        fontSize: 12,
                        fontFamily: 'Microsoft YaHei'
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                //name: 'GDP（亿元）'
            }
        ],
        series: [
           
            {
                data:factory, 
                type: 'bar',
                color:'#30d39b',
                itemStyle:{
                    normal:{
                        barBorderRadius:[10, 10, 0, 0],
                        
                    }
                }
            }
            
        ]
    },
    options: [
        {
            //title: {text: '2002全国宏观经济指标'},
            series: [
                {data: dataMap.dataGDP['2018']},
                
              
            ]
        },
        {
            //title : {text: '2003全国宏观经济指标'},
            series : [
                {data: dataMap.dataGDP['2019']},
               
            ]
        },
        {
            //title : {text: '2004全国宏观经济指标'},
            series : [
                {data: dataMap.dataGDP['2020']},
               
            ]
        },
       
       
       
    ]
};
myChart1.setOption(option);
}

//地区销量分布
function ajax_market1(){
  $.ajax({
    type : "get",
        async : true,
        url : ip_path+"/changfa_system/statisticsQuery/marketShare/province.do",
        data :{
            token: $(window.parent.document).find("input[name='token']").val(),
            line:'轮式拖拉机'
        },
        dataType : "json",
        success : function (data) {
        $('#adminTbody').empty();
        if(data['head']['code'] == 200){
            //console.log(data)
            var time_x = [];
            var rpt_y = [];
            var dis_y = [];
            var percent = [];
            data.body.result.forEach(elem => {
                time_x.push(elem.factory);
                rpt_y.push(elem.sale3);
                dis_y.push(elem.sale);
                //percent.push(elem.rate1+'%');
                percent.push(elem.rate1);
            });
            //alert(time_x,rpt_y,dis_y,percent)
            //var legend = data['body']['result']['rates'];
            time_x.pop();
            rpt_y.pop();
            dis_y.pop();
            percent.pop();

            table_rpt(time_x,rpt_y,dis_y,percent);
            
                for(i=0;i<data['body']['result'].length;i++){

                  $('#adminTbody').append(
                    '<tr height="33">'+
                        //'<td class="td2" >'+ (i+1) +'</td>'+
                        '<td >'+ data['body']['result'][i]['factory'] +'</td>'+
                        '<td >'+ data['body']['result'][i]['sale1'] +'</td>'+
                        '<td >'+ data['body']['result'][i]['sale2'] +'</td>'+
                        '<td >'+ data['body']['result'][i]['sale3'] +'</td>'+
                        '<td >'+ data['body']['result'][i]['rate1']+'%' +'</td>'+
                        '<td >'+ data['body']['result'][i]['rate2']+'%' +'</td>'+
                        '<td >'+ data['body']['result'][i]['sale'] +'</td>'+
                        '<td style="color:#FF7734">'+ data['body']['result'][i]['rate']+'%' +'</td>'+
                    '</tr>'
                  )
                }
                
        }
        else {
            alert(data['head']['message']);
        }
    }
    });
}
function table_rpt(x,rpt,dis,percent) {

  var dom = document.getElementById("container");
  var myChart = echarts.init(dom);
  var app = {};
  option = null;
  app.title = '折柱混合';

  option = {
    rich:{
        //align: 'right',
    },
    tooltip: {
        trigger: 'axis',
        //align:'left',
        textStyle:{
            align:'left'
        },
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
   
    legend: {
        data: ['全部销量', '常发销量','省份占比'],
        /*selected:{
            '省份占比':false,   //默认不显示
        }*/
    },
    grid: {
        //top: 50,
        //bottom: 100,
        //height:300,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                label: {
                    show: true,
                    formatter: function (params) {
                        return params.value.replace('\n', '');
                    }
                }
            }
        }
    },
    xAxis: [
        {
            type: 'category',
            data: x,
            axisPointer: {
                type: 'shadow'
            },
            gridIndex: 0,
            axisLabel: {
                interval: 0,    //强制文字产生间隔
                rotate: 25,     //文字逆时针旋转45°
                textStyle: {    //文字样式
                    color: "black",
                    fontSize: 13,
                    fontFamily: 'Microsoft YaHei'
                }
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '销量',
            //min: function(value) {return value.min;}, 
            //max: function(value) {return value.max;},  
            //splitNumber:5,
            
        },
        {
            type: 'value',
            name: '占比',
            //min: function(value) {return value.min;}, 
            //max: function(value) {return value.max;},  
            //splitNumber:5,
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name: '全部销量',
            type: 'bar',
            //stack: '全部',
            //barWidth : 40,//柱图宽度
            data: rpt,
            itemStyle:{
                normal:{
                    color:'#30d39b'
                }
            },
            

        },
        {
            name: '常发销量',
            type: 'bar',
            //stack: '全部',
            //barWidth : 40,//柱图宽度
            data: dis,
            itemStyle:{
                normal:{
                    color:'#099a52',
                    fontSize:13,
                }
            },
            


        },
        {
            name: '省份占比',
            type: 'line',
            yAxisIndex: 1,
            data: percent,
            itemStyle:{
                normal:{
                    color:'#FFD306'
                }
            },
            
        }
    ]
};

  if (option && typeof option === "object") {
      myChart.setOption(option, true);
  }
}


//100马力以下
function ajax_market2(){
    $.ajax({
            type : "get",
            async : true,
            url : ip_path+"/changfa_system/statisticsQuery/marketShare/power.do",
            data :{
                token: $(window.parent.document).find("input[name='token']").val(),
                line:'轮式拖拉机'
            },
            dataType : "json",
            success : function (data) {
            $('#malitable').empty();
            if(data['head']['code'] == 200){
                var y_axis = [];
                //var X_axis = [];
                var X_axis3=[];
                var X_axis1 = [];
                var X_axis2 = [];
                var percent=[]
                data.body.result.forEach(elem => {
                    y_axis.push(elem.name);
                    //X_axis.push(elem.sale1);
                    X_axis3.push(elem.sale1);
                    X_axis1.push(elem.sale2);
                    X_axis2.push(elem.sale3);
                    percent.push(elem.rate)
                    
                });
                var l1=X_axis3.length;
                var l2=X_axis1.length;
                var l3=X_axis2.length;
                var l=y_axis.length;
                //alert(l)
                y_axis.splice(l-2,2);
                X_axis3.splice(l1-2,2);
                X_axis1.splice(l2-2,2);
                X_axis2.splice(l3-2,2);
                X_axis1.pop(),
                X_axis2.pop(),
                percent.pop(),
                X_axis3.pop(),
                //alert(time_x,rpt_y,dis_y,percent)
                //var legend = data['body']['result']['rates'];
                table_mali1(y_axis,X_axis1,X_axis2,percent,X_axis3);
                for(i=0;i<data['body']['result'].length;i++){

                    $('#malitable').append(
                      '<tr height="33">'+
                          //'<td class="td2" >'+ (i+1) +'</td>'+
                          '<td >'+ data['body']['result'][i]['name'] +'</td>'+
                          '<td >'+ data['body']['result'][i]['sale1'] +'</td>'+
                          '<td >'+ data['body']['result'][i]['sale2'] +'</td>'+
                          '<td >'+ data['body']['result'][i]['sale3'] +'</td>'+
                          '<td style="color:#FF7734">'+ data['body']['result'][i]['rate']+'%' +'</td>'+
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
function table_mali1(){
  var dom = document.getElementById("mali");
  var myChart = echarts.init(dom);
  myChart.showLoading({
    text: '数据正在加载...',
    textStyle: { fontSize : 30 , color: '#444' },
    effectOption: {backgroundColor: 'rgba(0, 0, 0, 0)'}
 });
 $.ajax({
        type : "get",
        async : true,
        url : ip_path+"/changfa_system/statisticsQuery/marketShare/power.do",
        data :{
            token: $(window.parent.document).find("input[name='token']").val(),
            line:'轮式拖拉机'
        },
        dataType : "json",
        success : function (data) {
        $('#malitable').empty();
        if(data['head']['code'] == 200){
            var y_axis = [];
            //var X_axis = [];
            var X_axis3=[];
            var X_axis1 = [];
            var X_axis2 = [];
            var percent=[]
            data.body.result.forEach(elem => {
                y_axis.push(elem.name);
                //X_axis.push(elem.sale1);
                X_axis3.push(elem.sale1);
                X_axis1.push(elem.sale2);
                X_axis2.push(elem.sale3);
                percent.push(elem.rate)
                
            });
            var l1=X_axis3.length;
            var l2=X_axis1.length;
            var l3=X_axis2.length;
            var l=y_axis.length;
            //alert(l)
            y_axis.splice(l-2,2);
            X_axis3.splice(l1-1,2);
            X_axis1.splice(l2-1,2);
            X_axis2.splice(l3-1,2);
            X_axis1.pop(),
            X_axis2.pop(),
            percent.pop(),
            X_axis3.pop()
            //console.log(X_axis3)
            for(i=0;i<data['body']['result'].length;i++){

                $('#malitable').append(
                '<tr height="33">'+
                    //'<td class="td2" >'+ (i+1) +'</td>'+
                    '<td >'+ data['body']['result'][i]['name'] +'</td>'+
                    '<td >'+ data['body']['result'][i]['sale1'] +'</td>'+
                    '<td >'+ data['body']['result'][i]['sale2'] +'</td>'+
                    '<td >'+ data['body']['result'][i]['sale3'] +'</td>'+
                    '<td style="color:#FF7734">'+ data['body']['result'][i]['rate']+'%' +'</td>'+
                '</tr>'
                )
                
            }
    var app = {};
    option = null;
    app.title = '柱状图';
    option = {
        
        rich:{
            //align: 'right',
        },
        tooltip: {
            trigger: 'axis',
            //align:'left',
            textStyle:{
                align:'left'
            },
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
    
        legend: {
            //data: [year2019+'', year2020+'','增长率']
            data: [year2018+'',year2019+'', year2020+'']
        },
        grid: {
            //top: 50,
            //bottom: 100,
            //height:300,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    label: {
                        show: true,
                        formatter: function (params) {
                            return params.value.replace('\n', '');
                        }
                    }
                }
            }
        },
        xAxis: [
            {
                type: 'category',
                data: y_axis,
                axisPointer: {
                    type: 'shadow'
                },
                gridIndex: 0,
                axisLabel: {
                    interval: 0,    //强制文字产生间隔
                    rotate: 35,     //文字逆时针旋转45°
                    textStyle: {    //文字样式
                        color: "black",
                        fontSize: 13,
                        fontFamily: 'Microsoft YaHei'
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '销量',
            },
            /*{
                type: 'value',
                name: '增长率',
                min: -100,
                max: 0,
                interval: 20,
                axisLabel: {
                    formatter: '{value} %'
                }
            }*/
        ],
        series: [
            {
                name: year2018+'',
                type: 'bar',
                //stack: '全部',
                //barWidth : 40,//柱图宽度
                data: X_axis3,
                itemStyle:{
                    normal:{
                        color:'#68BF46'
                    }
                },
                

            },
            {
                name: year2019+'',
                type: 'bar',
                //stack: '全部',
                //barWidth : 40,//柱图宽度
                data: X_axis1,
                itemStyle:{
                    normal:{
                        color:'#30d39b'
                    }
                },
                

            },
            {
                name: year2020+'',
                type: 'bar',
                //stack: '全部',
                //barWidth : 40,//柱图宽度
                data: X_axis2,
                itemStyle:{
                    normal:{
                        color:'#099a52',
                        fontSize:13,
                    }
                },
            },
            /*{
                name: '增长率',
                type: 'line',
                yAxisIndex: 1,
                data: percent,
                itemStyle:{
                    normal:{
                        color:'#FFD306'
                    }
                },
                
            }*/
        ]
    };
        myChart.hideLoading();
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    }else{
        alert(data['head']['message']);
    }
    }
 })
}

//100以下轮拖销量排名
function ajax_market3(){
    $.ajax({
        type : "get",
            async : true,
            url : ip_path+"/changfa_system/statisticsQuery/marketShare/power/factory.do",
            data :{
                token: $(window.parent.document).find("input[name='token']").val(),
                line:'轮式拖拉机'
            },
            dataType : "json",
            success : function (data) {
            $('#malitable1').empty();
            if(data['head']['code'] == 200){
                var y_axis = [];
                var X_axis = [];
                data.body.result.forEach(elem => {
                    y_axis.push(elem.factory);
                    X_axis.push(elem.sale3);
                });
                y_axis.pop();
                X_axis.pop()
                //alert(time_x,rpt_y,dis_y,percent)
                //var legend = data['body']['result']['rates'];
                table_mali2(y_axis,X_axis);
                for(i=0;i<data['body']['result'].length;i++){

                    $('#malitable1').append(
                      '<tr height="33">'+
                          '<td >'+ (i+1) +'</td>'+
                          '<td >'+ data['body']['result'][i]['factory'] +'</td>'+
                          '<td >'+ data['body']['result'][i]['sale1'] +'</td>'+
                          '<td >'+ data['body']['result'][i]['sale2'] +'</td>'+
                          '<td >'+ data['body']['result'][i]['sale3'] +'</td>'+
                          '<td>'+ data['body']['result'][i]['rate1']+'%' +'</td>'+
                          '<td style="color:#FF7734">'+ data['body']['result'][i]['rate']+'%' +'</td>'+
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
function table_mali2(y_axis,X_axis){
    var dom = document.getElementById("mali1");
      var myChart = echarts.init(dom);
      var app = {};
      option = null;
      app.title = '柱状图';
      var option = {
        title: {
            //text: '100马力以下马力轮拖钱10排名'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            textStyle:{
                align:'left'
            },
        },
        legend: {
            data:y_axis
            //data:['销量','占比']
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
            gridIndex: 0,
        },
        series: [
            {
                //name: y_axis[0],
                type: 'bar',
                data: X_axis,
                
                itemStyle:{
                    normal:{
                        barBorderRadius:[10, 10, 0, 0],
                        color:function(params){
                            //颜色组
                            var colorList = ['#5fd5e7','#68bf46','#98e378','#30d39b','#43f9bb','#7eeafb','#e9c453','#ff9f38','#ff7734','#ffda68','#5fd5e7','#68bf46','#98e378','#30d39b','#43f9bb','#7eeafb',];
                            return colorList[params.dataIndex]
                        }
                    }
                }
            },
            
            
            
            
        ]
    };

        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
}

    //100马力以上
function ajax_market4(){
    $.ajax({
        type : "get",
            async : true,
            url : ip_path+"/changfa_system/statisticsQuery/marketShare/power/100.do",
            data :{
                token: $(window.parent.document).find("input[name='token']").val(),
                line:'轮式拖拉机'
            },
            dataType : "json",
            success : function (data) {
            $('#malitable5').empty();
            if(data['head']['code'] == 200){
                var y_axis = [];
                var X_axis = [];
                var X_axis1 = [];
                var X_axis2 = [];
                var X_axis3 = [];
                data.body.result.forEach(elem => {
                    y_axis.push(elem.name);
                    X_axis.push(elem.sale2);
                    X_axis1.push(elem.sale3);
                    X_axis2.push(elem.rate);
                    X_axis3.push(elem.sale1);
                });
                //y_axis.pop();
                var l=y_axis.length;
                y_axis.splice(l-2,2);

                var l9=X_axis.length;
                X_axis.splice(l9-2,2);

                var l8=X_axis1.length;
                X_axis1.splice(l8-2,2);

                var l7=X_axis2.length;
                X_axis2.splice(l7-2,2);

                var l6=X_axis3.length;
                X_axis3.splice(l6-2,2);


                X_axis.pop();
                X_axis1.pop();
                X_axis2.pop();
                X_axis3.pop();
                //alert(time_x,rpt_y,dis_y,percent)
                //var legend = data['body']['result']['rates'];
                table_mali5(y_axis,X_axis,X_axis1,X_axis2,X_axis3);
                for(i=0;i<data['body']['result'].length;i++){

                    $('#malitable5').append(
                      '<tr height="33">'+
                          //'<td class="td2" >'+ (i+1) +'</td>'+
                          '<td >'+ data['body']['result'][i]['name'] +'</td>'+
                          '<td >'+ data['body']['result'][i]['sale1'] +'</td>'+
                          '<td >'+ data['body']['result'][i]['sale2'] +'</td>'+
                          '<td >'+ data['body']['result'][i]['sale3'] +'</td>'+
                          '<td style="color:#FF7734">'+ data['body']['result'][i]['rate']+'%' +'</td>'+
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
function table_mali5(){
var dom = document.getElementById("mali5");
  var myChart = echarts.init(dom);
  var app = {};
  myChart.showLoading({
    text: '数据正在加载...',
    textStyle: { fontSize : 30 , color: '#444' },
    effectOption: {backgroundColor: 'rgba(0, 0, 0, 0)'}
 });
 $.ajax({
    type : "get",
        async : true,
        url : ip_path+"/changfa_system/statisticsQuery/marketShare/power/100.do",
        data :{
            token: $(window.parent.document).find("input[name='token']").val(),
            line:'轮式拖拉机'
        },
        dataType : "json",
        success : function (data) {
        $('#malitable5').empty();
        if(data['head']['code'] == 200){
            var y_axis = [];
            var X_axis = [];
            var X_axis1 = [];
            var X_axis2 = [];
            var X_axis3 = [];
            data.body.result.forEach(elem => {
                y_axis.push(elem.name);
                X_axis.push(elem.sale2);
                X_axis1.push(elem.sale3);
                X_axis2.push(elem.rate);
                X_axis3.push(elem.sale1);
            });
            //y_axis.pop();
            var l=y_axis.length;
            y_axis.splice(l-2,2);

            var l9=X_axis.length;
            X_axis.splice(l9-1,2);

            var l8=X_axis1.length;
            X_axis1.splice(l8-1,2);

            var l7=X_axis2.length;
            X_axis2.splice(l7-1,2);

            var l6=X_axis3.length;
            X_axis3.splice(l6-1,2);


            X_axis.pop();
            X_axis1.pop();
            X_axis2.pop();
            X_axis3.pop();
            //alert(time_x,rpt_y,dis_y,percent)
            //var legend = data['body']['result']['rates'];
            //table_mali5(y_axis,X_axis,X_axis1,X_axis2,X_axis3);
            for(i=0;i<data['body']['result'].length;i++){

                $('#malitable5').append(
                  '<tr height="33">'+
                      //'<td class="td2" >'+ (i+1) +'</td>'+
                      '<td >'+ data['body']['result'][i]['name'] +'</td>'+
                      '<td >'+ data['body']['result'][i]['sale1'] +'</td>'+
                      '<td >'+ data['body']['result'][i]['sale2'] +'</td>'+
                      '<td >'+ data['body']['result'][i]['sale3'] +'</td>'+
                      '<td style="color:#FF7734">'+ data['body']['result'][i]['rate']+'%' +'</td>'+
                  '</tr>'
                )
            }
  option = null;
  app.title = '横向柱状图';
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            textStyle:{
                align:'left'
            },
        },
        legend: {
            //data: [year2019+'',year2020+'','增长率'],
            data: [year2018+'',year2019+'',year2020+''],
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
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
        yAxis: [
            {
                type: 'value',
                name: '销量',
                gridIndex: 0,
            },
            /*{
                type: 'value',
                name: '增长率',
                gridIndex: 0,
                axisLabel: {
                    formatter: '{value} %'
                }
            }*/
        ],
        
        series: [
            {
                name: year2018+'',
                type: 'bar',
                
                data: X_axis3,
                itemStyle:{
                    normal:{
                        color:'#68BF46'
                    }
                },
                
            },
            {
                name: year2019+'',
                type: 'bar',
                
                data: X_axis,
                itemStyle:{
                    normal:{
                        color:'#30D39B'
                    }
                },
                
            },
            
            {
                name: year2020+'',
                type: 'bar',
                
                data: X_axis1,
                itemStyle:{
                    normal:{
                        color:'#0B9B53'
                    }
                },
            },
            /*{
                name: '增长率',
                type: 'line',
                
                yAxisIndex: 1,
                data: X_axis2,
                itemStyle:{
                    normal:{
                        color:'#FFDA68'
                    }
                },
            }*/
        ]
    };
    myChart.hideLoading();
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}else{
    alert(data['head']['message']);
}
}
 })
}


//100以上轮拖销量排名
function ajax_market5(){
    $.ajax({
        type : "get",
            async : true,
            url : ip_path+"/changfa_system/statisticsQuery/marketShare/power/factory/100.do",
            data :{
                token: $(window.parent.document).find("input[name='token']").val(),
                line:'轮式拖拉机'
            },
            dataType : "json",
            success : function (data) {
            $('#malitable6').empty();
            if(data['head']['code'] == 200){
                var y_axis = [];
                var X_axis = [];
                data.body.result.forEach(elem => {
                    y_axis.push(elem.factory);
                    X_axis.push(elem.sale3);
                });
                y_axis.pop();
                X_axis.pop();
                //console.log(y_axis)
                table_mali6(y_axis,X_axis);
                for(i=0;i<data['body']['result'].length;i++){

                    $('#malitable6').append(
                      '<tr height="33">'+
                          '<td >'+ (i+1) +'</td>'+
                          '<td >'+ data['body']['result'][i]['factory'] +'</td>'+
                          '<td >'+ data['body']['result'][i]['sale1'] +'</td>'+
                          '<td >'+ data['body']['result'][i]['sale2'] +'</td>'+
                          '<td >'+ data['body']['result'][i]['sale3'] +'</td>'+
                          '<td>'+ data['body']['result'][i]['rate1']+'%' +'</td>'+
                          '<td style="color:#FF7734">'+ data['body']['result'][i]['rate']+'%' +'</td>'+
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
function table_mali6(y_axis,X_axis){
    var dom = document.getElementById("mali6");
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
            axisPointer:{
                type:'shadow'
            },
            textStyle:{
                align:'left'
            },
        },
        legend: {
            data:y_axis,
        },
        xAxis: {
            data: y_axis,
            gridIndex: 0,
            axisLabel: {
                interval: 0,    //强制文字产生间隔
                rotate: 35,     //文字逆时针旋转35°
                gridIndex: 0,
                textStyle: {    //文字样式
                    color: "black",
                    fontSize: 13,
                    fontFamily: 'Microsoft YaHei'
                }
            }
        },
        yAxis: {
            gridIndex: 0,
        },
        series: [
            {
                type: 'bar',
                data: X_axis,
                barWidth:30,
                itemStyle:{
                    normal:{
                        barBorderRadius:[10, 10, 0, 0],
                        color:function(params){
                            //颜色组
                            var colorList = ['#5fd5e7','#68bf46','#98e378','#30d39b','#43f9bb','#7eeafb','#e9c453','#ff9f38','#ff7734','#ffda68','#5fd5e7','#68bf46','#98e378','#30d39b','#43f9bb','#7eeafb',];
                            return colorList[params.dataIndex]
                        }
                    }
                }
            },
            
        ]
    };

        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
}


//对应常发系列销量
function ajax_market6(){
    $.ajax({
        type : "get",
            async : true,
            url : ip_path+"/changfa_system/statisticsQuery/marketShare/serial.do",
            data :{
                token: $(window.parent.document).find("input[name='token']").val(),
                line:'轮式拖拉机',
                
            },
            dataType : "json",
            success : function (data) {
                //console.log(data)
            $('#malitable7').empty();
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
                });
                y_axis.pop();
                X_axis.pop();
                X_axis1.pop();
                X_axis2.pop();
                //alert(time_x,rpt_y,dis_y,percent)
                //var legend = data['body']['result']['rates'];
                table_mali7(y_axis,X_axis,X_axis1,X_axis2);
                for(i=0;i<data['body']['result'].length;i++){

                    $('#malitable7').append(
                      '<tr height="33">'+
                          //'<td class="td2" >'+ (i+1) +'</td>'+
                          '<td >'+ data['body']['result'][i]['name'] +'</td>'+
                          '<td >'+ data['body']['result'][i]['sale1'] +'</td>'+
                          '<td >'+ data['body']['result'][i]['sale2'] +'</td>'+
                          '<td >'+ data['body']['result'][i]['sale3'] +'</td>'+
                          
                          '<td style="color:#FF7734">'+ data['body']['result'][i]['rate']+'%' +'</td>'+
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
function table_mali7(y_axis,X_axis,X_axis1,X_axis2){
    var dom = document.getElementById("mali7");
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
                gridIndex: 0,
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
                
                color:'#30D39B',
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
                name: yearList[1],
                type: 'bar',
                data: X_axis1,
                
                color:'#E9C453',
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
                
                color:'#FF9F38',
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

    
//对应常发系列地区分布
function ajax_market7(){
    $.ajax({
        type : "get",
            async : true,
            url : ip_path+"/changfa_system/statisticsQuery/marketShare/serial/province.do",
            data :{
                token: $(window.parent.document).find("input[name='token']").val(),
                line:'轮式拖拉机',
                //serial:'大棚王'
                
            },
            dataType : "json",
            success : function (data) {
                //console.log(data)
            $('#malitable8').empty();
            if(data['head']['code'] == 200){
                var y_axis = [];
                var shuju={};
                shuju.X_axis1 = [];shuju.X_axis8 = [];
                shuju.X_axis2 = [];shuju.X_axis9 = [];
                shuju.X_axis3 = [];shuju.X_axis10 = [];
                shuju.X_axis4 = [];shuju.X_axis11 = [];
                shuju.X_axis5 = [];shuju.X_axis12 = [];
                shuju.X_axis6 = [];shuju.X_axis13 = [];
                shuju.X_axis7 = [];shuju.X_axis14 = [];
                for(var b=0;b<data['body']['result']['list'].length-1;b++){
                    y_axis.push(data['body']['result']['list'][b]['name']);
                    for(var c=1;c<22;c++){
                        //console.log(i)
                        shuju['X_axis'+(b+1)].push(data['body']['result']['list'][b]['province'+c]);
                        
                    }
                    
                }
                //console.log(shuju)
                //y_axis.pop();
                $('#tabletit').empty();
                $('#tabletit').append(
                    //'<th class="th2">'+'序号'+'</th>'+
                    '<th class="th2" style="background:#1ABC9C;color:#fff;">'+'系列'+'</th>'

                )
                for(j=0;j<data['body']['result']['provinces'].length;j++){
                    $('#tabletit').append(
                        '<th class="th2" style="background:#1ABC9C;color:#fff;">'+data['body']['result']['provinces'][j]+'</th>'
                    )

                }
                    var shenfen = [];
                    data.body.result.provinces.forEach(elem => {
                        shenfen.push(elem);
                    });
                    shenfen.pop();
                table_mali8(y_axis,shuju,shenfen);
                for(i=0;i<data['body']['result']['list'].length;i++){
                    $('#malitable8').append(
                      '<tr height="33">'+
                          //'<td class="td2" >'+ (i+1) +'</td>'+
                          '<td >'+ data['body']['result']['list'][i]['name'] +'</td>'+
                          '<td >'+ data['body']['result']['list'][i]['province1'] +'</td>'+
                          '<td >'+ data['body']['result']['list'][i]['province2'] +'</td>'+
                          '<td >'+ data['body']['result']['list'][i]['province3'] +'</td>'+
                          '<td >'+ data['body']['result']['list'][i]['province4'] +'</td>'+
                          '<td >'+ data['body']['result']['list'][i]['province5'] +'</td>'+
                          '<td >'+ data['body']['result']['list'][i]['province6'] +'</td>'+
                          '<td >'+ data['body']['result']['list'][i]['province7'] +'</td>'+
                          '<td >'+ data['body']['result']['list'][i]['province8'] +'</td>'+
                          '<td >'+ data['body']['result']['list'][i]['province9'] +'</td>'+
                          '<td >'+ data['body']['result']['list'][i]['province10'] +'</td>'+
                          '<td >'+ data['body']['result']['list'][i]['province11'] +'</td>'+
                          '<td >'+ data['body']['result']['list'][i]['province12'] +'</td>'+
                          '<td >'+ data['body']['result']['list'][i]['province13'] +'</td>'+
                          '<td >'+ data['body']['result']['list'][i]['province14'] +'</td>'+
                          '<td >'+ data['body']['result']['list'][i]['province15'] +'</td>'+
                          '<td >'+ data['body']['result']['list'][i]['province16'] +'</td>'+
                          '<td >'+ data['body']['result']['list'][i]['province17'] +'</td>'+
                          '<td >'+ data['body']['result']['list'][i]['province18'] +'</td>'+
                          '<td >'+ data['body']['result']['list'][i]['province19'] +'</td>'+
                          '<td >'+ data['body']['result']['list'][i]['province20'] +'</td>'+
                          '<td >'+ data['body']['result']['list'][i]['province21'] +'</td>'+
                          '<td >'+ data['body']['result']['list'][i]['province22'] +'</td>'+
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
function table_mali8(y_axis,shuju,shenfen){
    //console.log(y_axis,shuju,shenfen)
    //console.log(X_axis2)
      var dom = document.getElementById("mali8");
      var myChart = echarts.init(dom);
      var app = {};
      option = null;
      app.title = '柱状图';
      option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            textStyle:{
                align:'left'
            },
        },
        legend: {
            data: y_axis
        },
        /*grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },*/
        xAxis: [
            {
                type: 'category',
                data:shenfen
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: y_axis[0],
                type: 'bar',
                data: shuju.X_axis1,
                stack: '系列',
                color:'#5FD5E7'
            },
            {
                name: y_axis[1],
                type: 'bar',
                stack: '系列',
                data: shuju.X_axis2,
                color:'#68BF46'
            },
            {
                name: y_axis[2],
                type: 'bar',
                stack: '系列',
                data: shuju.X_axis3,
                color:'#98E378'
            },
            {
                name: y_axis[3],
                type: 'bar',
                stack: '系列',
                data: shuju.X_axis4,
                color:'#30D39B'
            },
            {
                name: y_axis[4],
                type: 'bar',
                stack: '系列',
                data: shuju.X_axis5,
                color:'#30D39B'
            },
            {
                name: y_axis[5],
                type: 'bar',
                stack: '系列',
                data: shuju.X_axis6,
                color:'#43F9BB'
            },
            {
                name: y_axis[6],
                type: 'bar',
                stack: '系列',
                data: shuju.X_axis7,
                color:'#099A52'
            },
            {
                name: y_axis[7],
                type: 'bar',
                stack: '系列',
                data: shuju.X_axis8,
                color:'#7BE6F6'
            },
            {
                name: y_axis[8],
                type: 'bar',
                stack: '系列',
                data: shuju.X_axis9,
                color:'#E9C453'
            },
            {
                name: y_axis[9],
                type: 'bar',
                stack: '系列',
                data: shuju.X_axis10,
                color:'#FF9F38'
            },
            {
                name: y_axis[10],
                type: 'bar',
                stack: '系列',
                data: shuju.X_axis11,
                color:'#FF7734'
            },
            {
                name: y_axis[11],
                type: 'bar',
                stack: '系列',
                data: shuju.X_axis12,
                color:'#FFDA68'
            },
            {
                name: y_axis[12],
                type: 'bar',
                stack: '系列',
                data: shuju.X_axis13
            },
            {
                name: y_axis[13],
                type: 'bar',
                stack: '系列',
                data: shuju.X_axis14
            },
            {
                name: y_axis[14],
                type: 'bar',
                stack: '系列',
                data: shuju.X_axis15
            },{
                name: y_axis[15],
                type: 'bar',
                stack: '系列',
                data: shuju.X_axis16
            },{
                name: y_axis[16],
                type: 'bar',
                stack: '系列',
                data: shuju.X_axis17
            },{
                name: y_axis[17],
                type: 'bar',
                stack: '系列',
                data: shuju.X_axis18
            },{
                name: y_axis[18],
                type: 'bar',
                stack: '系列',
                data: shuju.X_axis19
            },{
                name: y_axis[19],
                type: 'bar',
                stack: '系列',
                data: shuju.X_axis20
            },{
                name: y_axis[20],
                type: 'bar',
                stack: '系列',
                data: shuju.X_axis21
            },
            
           
        ]
    };

        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    }

    //品牌系列
function ajax_market8(){
    $.ajax({
        type : "get",
            async : true,
            url : ip_path+"/changfa_system/statisticsQuery/marketShare/serial/factory.do",
            data :{
                token: $(window.parent.document).find("input[name='token']").val(),
                line:'轮式拖拉机',
                serial:$('.tabin1').text(),
                
            },
            dataType : "json",
            success : function (data) {
                //console.log(data)
            $('#malitable9').empty();
            if(data['head']['code'] == 200){
            var time_x = [];
            var rpt_y = [];
            var dis_y = [];
            var percent = [];
            data.body.result.forEach(elem => {
                time_x.push(elem.factory);
                rpt_y.push(elem.sale3);
                dis_y.push(elem.sale);
                //percent.push(elem.rate1+'%');
                percent.push(elem.rate3);
            });
            time_x.pop();
            rpt_y.pop();
            dis_y.pop();
            percent.pop();
            //alert(time_x,rpt_y,dis_y,percent)
            //var legend = data['body']['result']['rates'];
                table_mali9(time_x,rpt_y,dis_y,percent);
                for(i=0;i<data['body']['result'].length;i++){

                    $('#malitable9').append(
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
function table_mali9(x,rpt,dis,percent){
    var dom = document.getElementById("mali9");
      var myChart = echarts.init(dom);
      var app = {};
      option = null;
      app.title = '柱状图';
      option = {
        rich:{
            //align: 'right',
        },
        tooltip: {
            trigger: 'axis',
            //align:'left',
            textStyle:{
                align:'left'
            },
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
       
        legend: {
            data: ['全部销量','占比']
        },
        grid: {
            
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    label: {
                        show: true,
                        formatter: function (params) {
                            return params.value.replace('\n', '');
                        }
                    }
                }
            }
        },
        xAxis: [
            {
                type: 'category',
                data: x,
                axisPointer: {
                    type: 'shadow'
                },
                gridIndex: 0,
                axisLabel: {
                    interval: 0,    //强制文字产生间隔
                    rotate: 35,     //文字逆时针旋转45°
                    textStyle: {    //文字样式
                        color: "black",
                        fontSize: 13,
                        fontFamily: 'Microsoft YaHei'
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '销量',
                //min: 0,
                //max: 4529,
                //interval: 600,
                
            },
            {
                type: 'value',
                name: '占比',
                
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series: [
            {
                name: '全部销量',
                type: 'bar',
                //stack: '全部',
                //barWidth : 40,//柱图宽度
                data: rpt,
                itemStyle:{
                    normal:{
                        color:'#30d39b'
                    }
                },
            },
            
            {
                name: '占比',
                type: 'line',
                yAxisIndex: 1,
                data: percent,
                itemStyle:{
                    normal:{
                        color:'#FFD306'
                    }
                },
                
            }
        ]
    };

        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    }

//机型系列
function ajax_market9(){
    $.ajax({
        type : "get",
            async : true,
            url : ip_path+"/changfa_system/statisticsQuery/marketShare/serial/model.do",
            data :{
                token: $(window.parent.document).find("input[name='token']").val(),
                line:'轮式拖拉机',
                //serial:'拖轮A系列'
                serial:$('.tabin2').text(),
                
            },
            dataType : "json",
            success : function (data) {
                //console.log(data)
            $('#malitable10').empty();
            if(data['head']['code'] == 200){
                var y_axis = [];
                var X_axis = [];
                var X_axis1 = [];
                var X_axis2 = [];
                //var model=[];
                data.body.result.forEach(elem => {
                    y_axis.push(elem.model);
                    X_axis.push(elem.sale1);
                    X_axis1.push(elem.sale2);
                    X_axis2.push(elem.sale3);
                    //model.push(elem.model)
                });
                y_axis.pop();
                X_axis.pop();
                X_axis1.pop();
                X_axis2.pop();
                //alert(time_x,rpt_y,dis_y,percent)
                //var legend = data['body']['result']['rates'];
                table_mali10(y_axis,X_axis,X_axis1,X_axis2);
                
                for(i=0;i<data['body']['result'].length;i++){

                    $('#malitable10').append(
                      '<tr height="33">'+
                          //'<td class="td2" >'+ (i+1) +'</td>'+
                          '<td >'+ data['body']['result'][i]['model'] +'</td>'+
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
function table_mali10(y_axis,X_axis,X_axis1,X_axis2){
    //alert(yearList)
    var dom = document.getElementById("mali10");
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
            data:yearList
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
                name: yearList[0],
                type: 'bar',
                data: X_axis,
                
                color:'#e9c453',
                
            },
            {
                name: yearList[1],
                type: 'bar',
                data: X_axis1,
                
                color:'#30d39b',
            },
            {
                name: yearList[2],
                type: 'bar',
                data: X_axis2,
                
                color:'#68bf46',
                
            },
            
        ]
    };

        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    }



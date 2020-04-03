function ajax_seach(){
    table_rpt();
  }
  function ajax_seach1(){
    table_rpt1();
  }
  function ajax_seach2(){
    table_rpt2();
  }
  function ajax_seach3(){
    table_rpt3();
  }
  /*window.onresize = function(){
    mychart.resize()
}*/
//故障率年统计
function ajax_yearguz(){
  $.ajax({
    type : "get",
    async : true,
    url : ip_path+"/changfa_system/statisticsQuery/rate/failure.do",
    data :{
        token: $(window.parent.document).find("input[name='token']").val(),
        type: 'year', 
        lineNum:$("#lineNum option:selected").val(),
        seriesNum:$("#seriesNum option:selected").val(),
        modelNum:$("#modelNum option:selected").val(),
        province:$("#shenfen").val(),
    },
    dataType : "json",
    success : function (data) {
        $('#adminTbody').empty();
        if(data['head']['code'] == 200){
            
            for(i=0;i<data['body']['result']['list'].length;i++){
              var td1;
              if(i%3==0){
                td1 = '<td rowspan="3" style="background:#fff !important;line-height:7rem;">'+ data['body']['result']['list'][i]['year']+'</td>'; 
              }else{
                td1=''
              }
              var td2;
              td2 = '<td height="40">'+data['body']['result']['list'][i]['name']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['1']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['2']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['3']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['4']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['5']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['6']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['7']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['8']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['9']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['10']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['11']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['12']+'</td>'
              
              var table = '<tr>'+td1+td2+'</tr>'
              $('#adminTbody').append(table)
            }
            
        }else {
            alert(data['head']['message']);
        }
    }
  });
  table_rpt();
}
function table_rpt() {
  var dom = document.getElementById("container");
  var myChart = echarts.init(dom);
  myChart.showLoading({
    text: '数据正在加载...',
    textStyle: { fontSize : 30 , color: '#444' },
    effectOption: {backgroundColor: 'rgba(0, 0, 0, 0)'},
    effect : 'whirling' ,
    //maskColor:'rgba(255,255,25,0.8)' 弹框的背景色
 });
    $.ajax({
        type : "get",
        async : true,
        url : ip_path+"/changfa_system/statisticsQuery/rate/failure.do",
        data :{
            token: $(window.parent.document).find("input[name='token']").val(),
            type: 'year', 
            lineNum:$("#lineNum option:selected").val(),
            seriesNum:$("#seriesNum option:selected").val(),
            modelNum:$("#modelNum option:selected").val(),
            province:$("#shenfen").val(),
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                $('#adminTbody').empty();
                for(i=0;i<data['body']['result']['list'].length;i++){
                    var td1;
                    if(i%3==0){
                      td1 = '<td rowspan="3" style="background:#fff !important;line-height:7rem;">'+ data['body']['result']['list'][i]['year']+'</td>'; 
                    }else{
                      td1=''
                    }
                    var td2;
                    td2 = '<td height="40">'+data['body']['result']['list'][i]['name']+'</td>'+
                    '<td >'+data['body']['result']['list'][i]['1']+'</td>'+
                    '<td >'+data['body']['result']['list'][i]['2']+'</td>'+
                    '<td >'+data['body']['result']['list'][i]['3']+'</td>'+
                    '<td >'+data['body']['result']['list'][i]['4']+'</td>'+
                    '<td >'+data['body']['result']['list'][i]['5']+'</td>'+
                    '<td >'+data['body']['result']['list'][i]['6']+'</td>'+
                    '<td >'+data['body']['result']['list'][i]['7']+'</td>'+
                    '<td >'+data['body']['result']['list'][i]['8']+'</td>'+
                    '<td >'+data['body']['result']['list'][i]['9']+'</td>'+
                    '<td >'+data['body']['result']['list'][i]['10']+'</td>'+
                    '<td >'+data['body']['result']['list'][i]['11']+'</td>'+
                    '<td >'+data['body']['result']['list'][i]['12']+'</td>'
                    
                    var table = '<tr>'+td1+td2+'</tr>'
                    $('#adminTbody').append(table)
                  }
                var x =data['body']['result']['types'];
                var rpt = data['body']['result']['rateYearList'];
                var dis = data['body']['result']['rateRateList'];
                dis[0]='';
                var legend = data['body']['result']['rates'];
                var app = {};
                option = null;
                app.title = '折柱混合';

                option = {
                    title: {
                        text: '故障率年度统计',
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer:{
                            type:'shadow'
                        }
                    },
                    legend: {
                        data:legend
                    },
                    toolbox: {
                        show: true,
                        feature: {
                        }
                    },
                    xAxis:  {
                        type: 'category',
                        gridIndex: 0,
                        data: x
                    },
                    yAxis: [
                        {
                        type: 'value',
                        name:'故障率           ',
                        nameTextStyle:{
                            color:'#58DD92',
                        },
                        min:0,
                        max:500,
                        interval: 50,
                        axisLabel: {
                            formatter: '{value}%'
                        }
                        },
                        {
                            type: 'value',
                            name: '           环比',
                            min:-300,
                            max:300,
                            interval: 60,
                            nameTextStyle:{
                                color:'#FFD306',
                            },
                            axisLabel: {
                                formatter: '{value} %'
                            }
                        }

                    ],
                    series: [
                        {
                            name:legend[0],
                            type:'bar',
                            barWidth : 30,
                            data:rpt,
                            itemStyle:{
                                normal:{
                                    color:'#1CBC9C',
                                    barBorderRadius:[10, 10, 0, 0],
                                }
                            },

                        },
                        {
                            name:legend[1],
                            type:'line',
                            yAxisIndex: 1,
                            data:dis,
                            //yAxisIndex:1,
                            itemStyle:{
                                normal:{
                                    color:'#FFD306'
                                }
                            },
                        },
                        
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

//故障率按月
function ajax_monthguz(){
  $.ajax({
    type : "get",
    async : true,
    url : ip_path+"/changfa_system/statisticsQuery/rate/failure.do",
    data :{
        token: $(window.parent.document).find("input[name='token']").val(),
        type: 'month',
        lineNum:$("#lineNum option:selected").val(),
        seriesNum:$("#seriesNum option:selected").val(),
        modelNum:$("#modelNum option:selected").val(),
        province:$("#shenfen").val(),
    },
    dataType : "json",
    success : function (data) {
        $('#adminTbody1').empty();
        if(data['head']['code'] == 200){
            //console.log(data)
            for(i=0;i<data['body']['result']['list'].length;i++){
              var td1;
              if(i%3==0){
                td1 = '<td rowspan="3" style="background:#fff !important;line-height:7rem;">'+ data['body']['result']['list'][i]['year']+'</td>'; 
              }else{
                td1=''
              }
              
              var td2;
              td2 = '<td>'+data['body']['result']['list'][i]['name']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['1']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['2']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['3']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['4']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['5']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['6']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['7']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['8']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['9']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['10']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['11']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['12']+'</td>'
              //'<td >'+data['body']['result']['list'][i]['13']+'</td>'
              var table = '<tr>'+td1+td2+'</tr>'
              $('#adminTbody1').append(table)
            }
            
            
        }else {
            alert(data['head']['message']);
        }
    }
});
    
    table_rpt1();
}


function table_rpt1() {
    var dom = document.getElementById("container1");
    var myChart1 = echarts.init(dom);
    myChart1.showLoading({
        text: '数据正在加载...',
        textStyle: { fontSize : 30 , color: '#444' },
        effectOption: {backgroundColor: 'rgba(0, 0, 0, 0)'}
    });
    $.ajax({
        type : "get",
        async : true,
        url : ip_path+"/changfa_system/statisticsQuery/rate/failure.do",
        data :{
            token: $(window.parent.document).find("input[name='token']").val(),
            type: 'month',      
            lineNum:$("#lineNum option:selected").val(),
            seriesNum:$("#seriesNum option:selected").val(),
            modelNum:$("#modelNum option:selected").val(),
            province:$("#shenfen").val(),          
        },
        dataType : "json",
        success : function (data) {
            $('#adminTbody1').empty();
            if(data['head']['code'] == 200){
                for(i=0;i<data['body']['result']['list'].length;i++){
                    var td1;
                    if(i%3==0){
                      td1 = '<td rowspan="3" style="background:#fff !important;line-height:7rem;">'+ data['body']['result']['list'][i]['year']+'</td>'; 
                    }else{
                      td1=''
                    }
                    
                    var td2;
                    td2 = '<td>'+data['body']['result']['list'][i]['name']+'</td>'+
                    '<td >'+data['body']['result']['list'][i]['1']+'</td>'+
                    '<td >'+data['body']['result']['list'][i]['2']+'</td>'+
                    '<td >'+data['body']['result']['list'][i]['3']+'</td>'+
                    '<td >'+data['body']['result']['list'][i]['4']+'</td>'+
                    '<td >'+data['body']['result']['list'][i]['5']+'</td>'+
                    '<td >'+data['body']['result']['list'][i]['6']+'</td>'+
                    '<td >'+data['body']['result']['list'][i]['7']+'</td>'+
                    '<td >'+data['body']['result']['list'][i]['8']+'</td>'+
                    '<td >'+data['body']['result']['list'][i]['9']+'</td>'+
                    '<td >'+data['body']['result']['list'][i]['10']+'</td>'+
                    '<td >'+data['body']['result']['list'][i]['11']+'</td>'+
                    '<td >'+data['body']['result']['list'][i]['12']+'</td>'
                    //'<td >'+data['body']['result']['list'][i]['13']+'</td>'
                    var table = '<tr>'+td1+td2+'</tr>'
                    $('#adminTbody1').append(table)
                  }
                var time_x =data['body']['result']['types'];
                var rateLastYearList = data['body']['result']['rateLastYearList'];
                var rpt = data['body']['result']['rateYearList'];
                var dis = data['body']['result']['rateRateList'];
                var legend = data['body']['result']['rates'];
                var app = {};
                option = null;
                app.title = '折柱混合';

                option = {
                    title: {
                        text: '故障率月度统计',
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:legend
                    },
                    toolbox: {
                        show: true,
                        feature: {
                        }
                    },
                    xAxis:  {
                        type: 'category',
                        gridIndex: 0,
                        data: time_x,
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    yAxis: [
                        {
                            type: 'value',
                            name:'故障率           ',
                            nameTextStyle:{
                                color:'#58DD92',
                            },
                            
                            min:0,
                            max:20,
                            interval: 2,
                            
                            axisLabel: {
                                formatter: '{value}%'
                            }
                        },
                        {
                            type: 'value',
                            name: '           环比',
                            
                            nameTextStyle:{
                                color:'#FFD306',
                            },
                            
                            min:-300,
                            max:300,
                            interval: 60,
                            axisLabel: {
                                formatter: '{value} %'
                            }
                        }
                        
                    ],
                    series: [
                        {
                            name:legend[0],
                            type:'bar',
                            barWidth : 30,
                            data:rateLastYearList,
                            itemStyle:{
                                normal:{
                                    color:'#0B9B53'
                                }
                            },

                        },
                        {
                            name:legend[1],
                            type:'bar',
                            barWidth : 30,
                            data:rpt,
                            itemStyle:{
                                normal:{
                                    color:'#58DD92'
                                }
                            },
                        },
                        {
                            name:legend[2],
                            type:'line',
                            yAxisIndex: 1,
                            data:dis,
                            itemStyle:{
                                normal:{
                                    color:'#FFD306'
                                }
                            },
                        },
                        
                    ]
                };
                myChart1.hideLoading();
                if (option && typeof option === "object") {
                    myChart1.setOption(option, true);
                }
            }else{
                alert(data['head']['message']);
            }
        }
    });
    
  
  
  
}
//返修率月统计
function ajax_monthfanx(){
  $.ajax({
    type : "get",
    async : true,
    url : ip_path+"/changfa_system/statisticsQuery/rate/repair.do",
    data :{
        token: $(window.parent.document).find("input[name='token']").val(),
        type: 'month',      
        lineNum:$("#lineNum option:selected").val(),
        seriesNum:$("#seriesNum option:selected").val(),
        modelNum:$("#modelNum option:selected").val(),
        province:$("#shenfen").val(),          
    },
    dataType : "json",
    success : function (data) {
        $('#adminTbody2').empty();
        if(data['head']['code'] == 200){
            for(i=0;i<data['body']['result']['list'].length;i++){
              var td1;
              if(i%3==0){
                td1 = '<td rowspan="3" style="background:#fff !important;line-height:7rem;">'+ data['body']['result']['list'][i]['year']+'</td>'; 
              }else{
                td1=''
              }
              var td2;
              td2 = '<td height="40">'+data['body']['result']['list'][i]['name']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['1']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['2']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['3']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['4']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['5']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['6']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['7']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['8']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['9']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['10']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['11']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['12']+'</td>'
              
              var table = '<tr>'+td1+td2+'</tr>'
              $('#adminTbody2').append(table)
            }

            
        }else {
            alert(data['head']['message']);
        }
    }
});
    table_rpt2()
}
function table_rpt2() {
  var dom = document.getElementById("container2");
  var myChart = echarts.init(dom);
  myChart.showLoading({
    text: '数据正在加载...',
    textStyle: { fontSize : 30 , color: '#444' },
    effectOption: {backgroundColor: 'rgba(0, 0, 0, 0)'}
 });
 $.ajax({
    type : "get",
    async : true,
    url : ip_path+"/changfa_system/statisticsQuery/rate/repair.do",
    data :{
        token: $(window.parent.document).find("input[name='token']").val(),
        type: 'month',      
        lineNum:$("#lineNum option:selected").val(),
        seriesNum:$("#seriesNum option:selected").val(),
        modelNum:$("#modelNum option:selected").val(),
        province:$("#shenfen").val(),          
    },
    dataType : "json",
    success : function (data) {
        $('#adminTbody2').empty();
        if(data['head']['code'] == 200){
            for(i=0;i<data['body']['result']['list'].length;i++){
                var td1;
                if(i%3==0){
                  td1 = '<td rowspan="3" style="background:#fff !important;line-height:7rem;">'+ data['body']['result']['list'][i]['year']+'</td>'; 
                }else{
                  td1=''
                }
                var td2;
                td2 = '<td height="40">'+data['body']['result']['list'][i]['name']+'</td>'+
                '<td >'+data['body']['result']['list'][i]['1']+'</td>'+
                '<td >'+data['body']['result']['list'][i]['2']+'</td>'+
                '<td >'+data['body']['result']['list'][i]['3']+'</td>'+
                '<td >'+data['body']['result']['list'][i]['4']+'</td>'+
                '<td >'+data['body']['result']['list'][i]['5']+'</td>'+
                '<td >'+data['body']['result']['list'][i]['6']+'</td>'+
                '<td >'+data['body']['result']['list'][i]['7']+'</td>'+
                '<td >'+data['body']['result']['list'][i]['8']+'</td>'+
                '<td >'+data['body']['result']['list'][i]['9']+'</td>'+
                '<td >'+data['body']['result']['list'][i]['10']+'</td>'+
                '<td >'+data['body']['result']['list'][i]['11']+'</td>'+
                '<td >'+data['body']['result']['list'][i]['12']+'</td>'
                
                var table = '<tr>'+td1+td2+'</tr>'
                $('#adminTbody2').append(table)
              }
            //console.log(data)
            var x =data['body']['result']['types'];
            var rateLastYearList = data['body']['result']['rateLastYearList'];
            var rpt = data['body']['result']['rateYearList'];
            var dis = data['body']['result']['rateRateList'];
            var legend = data['body']['result']['rates'];
            var app = {};
            option = null;
            app.title = '折柱混合';

            option = {
                title: {
                    text: '返修率月度统计',
                },
                grid:{
                    tooltip:{
                        axisPointer:{
                            type:'shadow'
                        }
                    }
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data:legend
                },
                toolbox: {
                    show: true,
                    feature: {
                        // dataZoom: {
                        //     yAxisIndex: 'none'
                        // },
                        // dataView: {readOnly: false},
                        //magicType: {type: ['line', 'bar']},
                        // restore: {},
                        //saveAsImage: {}
                    }
                },
                xAxis:  {
                    type: 'category',
                    //boundaryGap: false,
                    gridIndex: 0,
                    data: x
                },
                yAxis: [{
                    type: 'value',
                    name:'返修率           ',
                    nameTextStyle:{
                        color:"#58DD92", 
                        
                    },
                    min:0,
                    max:20,
                    interval: 2,
                    axisLabel: {
                        formatter: '{value}%'
                    }
                },
                {
                    type: 'value',
                    name: '           环比',
                    nameTextStyle:{
                        color:"#FFD306", 
                        
                    },
                    min:-300,
                    max:300,
                    interval: 60,
                    axisLabel: {
                        formatter: '{value} %'
                    }
                }
                ],
                series: [
                    {
                        name:legend[0],
                        type:'bar',
                        barWidth : 30,
                        data:rateLastYearList,
                        itemStyle:{
                            normal:{
                                color:'#0B9B53'
                            }
                        },

                    },
                    {
                        name:legend[1],
                        type:'bar',
                        barWidth : 30,
                        data:rpt,
                        itemStyle:{
                            normal:{
                                color:'#58DD92'
                            }
                        },
                    },
                    {
                        name:legend[2],
                        type:'line',
                        yAxisIndex: 1,
                        data:dis,
                        itemStyle:{
                            normal:{
                                color:'#FFD306'
                            }
                        },
                    },
                    
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

//返修率年统计
function ajax_yearfanx(){
  $.ajax({
    type : "get",
    async : true,
    url : ip_path+"/changfa_system/statisticsQuery/rate/repair.do",
    data :{
        token: $(window.parent.document).find("input[name='token']").val(),
        type: 'year',        
        lineNum:$("#lineNum option:selected").val(),
        seriesNum:$("#seriesNum option:selected").val(),
        modelNum:$("#modelNum option:selected").val(),
        province:$("#shenfen").val(),        
    },
    dataType : "json",
    success : function (data) {
        $('#adminTbody3').empty();
        if(data['head']['code'] == 200){
            for(i=0;i<data['body']['result']['list'].length;i++){
              var td1;
              if(i%3==0){
                td1 = '<td rowspan="3" style="background:#fff !important;line-height:7rem;">'+ data['body']['result']['list'][i]['year']+'</td>'; 
              }else{
                td1=''
              }
              var td2;
              td2 = '<td height="40">'+data['body']['result']['list'][i]['name']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['1']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['2']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['3']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['4']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['5']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['6']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['7']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['8']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['9']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['10']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['11']+'</td>'+
              '<td >'+data['body']['result']['list'][i]['12']+'</td>'
              
              var table = '<tr>'+td1+td2+'</tr>'
              $('#adminTbody3').append(table)
            }
            
        }else {
            alert(data['head']['message']);
        }
    }
});
    table_rpt3();
}

function table_rpt3() {
  var dom = document.getElementById("container3");
  var myChart = echarts.init(dom);
  myChart.showLoading({
    text: '数据正在加载...',
    textStyle: { fontSize : 30 , color: '#444' },
    effectOption: {backgroundColor: 'rgba(0, 0, 0, 0)'}
 });
 $.ajax({
    type : "get",
    async : true,
    url : ip_path+"/changfa_system/statisticsQuery/rate/repair.do",
    data :{
        token: $(window.parent.document).find("input[name='token']").val(),
        type: 'year',        
        lineNum:$("#lineNum option:selected").val(),
        seriesNum:$("#seriesNum option:selected").val(),
        modelNum:$("#modelNum option:selected").val(),
        province:$("#shenfen").val(),        
    },
    dataType : "json",
    success : function (data) {
        $('#adminTbody3').empty();
        if(data['head']['code'] == 200){
            for(i=0;i<data['body']['result']['list'].length;i++){
                var td1;
                if(i%3==0){
                  td1 = '<td rowspan="3" style="background:#fff !important;line-height:7rem;">'+ data['body']['result']['list'][i]['year']+'</td>'; 
                }else{
                  td1=''
                }
                var td2;
                td2 = '<td height="40">'+data['body']['result']['list'][i]['name']+'</td>'+
                '<td >'+data['body']['result']['list'][i]['1']+'</td>'+
                '<td >'+data['body']['result']['list'][i]['2']+'</td>'+
                '<td >'+data['body']['result']['list'][i]['3']+'</td>'+
                '<td >'+data['body']['result']['list'][i]['4']+'</td>'+
                '<td >'+data['body']['result']['list'][i]['5']+'</td>'+
                '<td >'+data['body']['result']['list'][i]['6']+'</td>'+
                '<td >'+data['body']['result']['list'][i]['7']+'</td>'+
                '<td >'+data['body']['result']['list'][i]['8']+'</td>'+
                '<td >'+data['body']['result']['list'][i]['9']+'</td>'+
                '<td >'+data['body']['result']['list'][i]['10']+'</td>'+
                '<td >'+data['body']['result']['list'][i]['11']+'</td>'+
                '<td >'+data['body']['result']['list'][i]['12']+'</td>'
                
                var table = '<tr>'+td1+td2+'</tr>'
                $('#adminTbody3').append(table)
              }
            //console.log(data)
            var x =data['body']['result']['types'];
            var rpt = data['body']['result']['rateYearList'];
            var dis = data['body']['result']['rateRateList'];
            var legend = data['body']['result']['rates'];
            dis[0]='';
            var app = {};
            option = null;
            app.title = '折柱状混合图表';
            option = {
                title: {
                    text: '返修率年度统计',
                },
                tooltip:{
                    trigger: 'axis',
                    axisPointer:{
                        type:'shadow'
                    }
                },
                legend: {
                    data:legend,
                },
                toolbox: {
                    show: true,
                    feature: {
                    }
                },
                xAxis:  {
                    type: 'category',
                    gridIndex: 0,
                    data: x
                },
                yAxis: [
                    {
                    type: 'value',
                    name:'返修率           ',
                    nameTextStyle:{
                        color:"#58DD92", 
                        
                    },
                    //nameLocation: 'end',
                    //min: function(value) {return value.min;},  最小值
                    //max: function(value) {return value.max;},  最大值
                    //splitNumber:10, 点数
                    min:0,
                    max:500,
                    interval: 50,
                    axisLabel: {
                        formatter: '{value}%'
                    }
                    },
                    {
                        type: 'value',
                        name: '           环比',
                        nameTextStyle:{
                            color:"#FFD306", 
                            
                        },
                        min:-300,
                        max:300,
                        interval: 60,
                        axisLabel: {
                            formatter: '{value} %'
                        }
                    }

                ],
                series: [
                    {
                        name:legend[0],
                        type:'bar',
                        barWidth : 30,
                        data:rpt,
                        itemStyle:{
                            normal:{
                                color:'#1CBC9C',
                                barBorderRadius:[10, 10, 0, 0],
                            }
                        },

                    },
                    {
                        name:legend[1],
                        type:'line',
                        yAxisIndex: 1,
                        data:dis,
                        itemStyle:{
                            normal:{
                                color:'#FFD306'
                            }
                        },
                    },
                    
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


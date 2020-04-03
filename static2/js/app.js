//地图容器
var chart = echarts.init(document.getElementById('main'));
//存储地区信息
var farmInfo=[];
//存储当前的地区名
var onceArea;
//存储当前选择了哪些车辆
var carCheck='';
//区域动态加载图标数据
var provinceData=[];
//存储每个农机的标识标志
var carColor=[];
//34个省、市、自治区的名字拼音映射数组
var provinces = {
    //23个省
    // "台湾": "taiwan",
    // "河北": "hebei",
    // "山西": "shanxi",
    // "辽宁": "liaoning",
    // "吉林": "jilin",
    // "黑龙江": "heilongjiang",
    // "江苏": "jiangsu",
    // "浙江": "zhejiang",
    // "安徽": "anhui",
    // "福建": "fujian",
    // "江西": "jiangxi",
    // "山东": "shandong",
    // "河南": "henan",
    // "湖北": "hubei",
    // "湖南": "hunan",
    // "广东": "guangdong",
    // "海南": "hainan",
    // "四川": "sichuan",
    // "贵州": "guizhou",
    // "云南": "yunnan",
    // "陕西": "shanxi1",
    // "甘肃": "gansu",
    // "青海": "qinghai",
    // //5个自治区
    // "新疆": "xinjiang",
    // "广西": "guangxi",
    // "内蒙古": "neimenggu",
    // "宁夏": "ningxia",
    // "西藏": "xizang",
    // //4个直辖市
    // "北京": "beijing",
    // "天津": "tianjin",
    // "上海": "shanghai",
    // "重庆": "chongqing",
    // //2个特别行政区
    // "香港": "xianggang",
    // "澳门": "aomen"
};

 //区分当前状态 0 是 echarts地图页面 1是 高德api页面
// var status = 0;
//路径坐标
var  lines=[];

//所以车辆信息
var markers=[];

//绘制柱状图
//var myChart = echarts.init(document.getElementById('main2'));

// var histogram = {
//         legend: {},
//         title : {
//             text: '农机数量统计',
//             x:'left'
//         },
//         tooltip: {
//             extraCssText:'width:160px;height:40px;'
//         },
//         // dataset: {
//         //     source: a
//         // },
//         xAxis: [
//             {
//                 type: 'category', 
//                 gridIndex: 0,
//                 axisLabel: {
//                     interval: 0,    //强制文字产生间隔
//                     rotate: 35,     //文字逆时针旋转45°
//                     textStyle: {    //文字样式
//                                 color: "black",
//                                 fontSize: 13,
//                                 fontFamily: 'Microsoft YaHei'
//                                 }
//                             }
//             }
//         ],
//         yAxis: [
//             {gridIndex: 0},
//         ],
//         grid: [
//             {bottom: '10%'},
//             {top: '10%'},
//         ],
//         series: [
//             // These series are in the first grid.
//             {type: 'bar', seriesLayoutBy: 'row'},
//         ]
//     };
    

//清空
function closeProinfo(){
    $('.pro_info').empty();
}

//动态获取地区车辆信息
function getchina(){
        $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/screen/queryDevilerMap.do",
        dataType : "json",
        data:{
            adcode:'',
            lineNum:$('#line').val(),
            type:1,
            dateType:$('#dateType').val()
        },
        success : function (data) {
            farmInfo = [];
            lines = [];
            var c=[];
            option.geo.map = 'china';
            onceArea = '';
            data.body.result.provinceData.forEach(elem => {
                if(elem.name == '江苏'){
                    c=elem.location.split(",");
                }
            })

            data.body.result.provinceData.forEach(elem => {
                if(elem.value != 0){
                    var b = {
                        name:elem.name,
                        value:elem.value,
                        coord:elem.location.split(",")
                    }
                    farmInfo.push(b);

                    var a = [
                        {
                            coord:c
                        },{
                            coord: elem.location.split(","),
                            value: elem.value
                        }]
                    lines.push(a);
                    
                }

                provinces[elem.name] = elem.adcode;
            });

            //console.log(lines);

                //绘制全国地图
                $.getJSON('static2/map/china.json', function(data){
                    
                    d = [];

                    data.features.forEach(item =>{
                        farmInfo.forEach(elem =>{
                            if(item.properties.name == elem.name){
                                d.push({
                                    name:elem.name,
                                    value:elem.value,
                                    coords:elem.location
                                })
                            }
                        })
                    })

                    //console.log(d);
                    mapdata = d;
                    provinceData = farmInfo;
                    //注册地图
                    echarts.registerMap('china', data);
                    //绘制地图
                    renderMap('china',provinceData);
                });
            
            }
        });
}



function returnMap(){
    provinceData = [];
    renderMap('china',mapdata);
    onceArea = '';
    
    $('.farm_check').hide();
    var s = $("input[name='information']");
    s.each(function(i) {
        $(this).prop('checked',false);
    })
    //把已选的选择框清空
    carCheck = '';
    getchina()
}

$(function(){
    var s = $("input[name='information']");
    s.each(function(i) {
            $(this).click(function(){
                if(this.checked==true){
                    if(carCheck){
                        carCheck += (',' + this.value);
                    }else{
                        carCheck += this.value;
                    }
                        getCheckCar();
                        if(markers.length != 0){
                            getwarehouse();
                        }
                }else{
                    var carCheck1 = carCheck.split(',');
                    carCheck1.splice(carCheck1.indexOf(this.value),1);
                    carCheck = carCheck1.toString();
                        getCheckCar();
                        if(markers.length != 0){
                            getwarehouse();
                        }
                }
             });
        }); 
})

getchina();


//直辖市和特别行政区-只有二级地图，没有三级地图
var special = ["北京","天津","上海","重庆","香港","澳门"];
var mapdata = [];


//地图点击事件
chart.on('click', function (params) {
    if( params.name in provinces ){
        //$('#button1').show();
        onceArea = params.name;
		//如果点击的是34个省、市、自治区，绘制选中地区的二级地图
		$.getJSON('static2/map/province/'+ provinces[params.name] +'.json', function(data){
            echarts.registerMap(params.name, data);
            option.geo.map = params.name;
			// var d = [];
			// for( var i=0;i<data.features.length;i++ ){
			// 	d.push({
			// 		name:data.features[i].properties.name
			// 	})
            // }
            $.ajax({
                type : "post",
                url : ip_path + "/changfa_system/screen/queryDevilerMap.do",
                dataType : "json",
                data:{
                    adcode:provinces[params.name],
                    lineNum:$('#line').val(),
                    type:2,
                    dateType:$('#dateType').val()
                },
                success : function (param) {
                    farmInfo=[];
                    lines = [];
                    param.body.result.dealerData.forEach(elem => {
                        
                        var b = {
                            coord:[elem.coord[0].toString(),elem.coord[1].toString()],
                            name:elem.name,
                            value: elem.value,
                        }
                        farmInfo.push(b);
                    });

                    
                    provinceData = farmInfo;
                    renderMap(params.name,provinceData);
                }
            });
            
        });
        //如果点到了图标就跳转到地图页面
    }else{
        //renderMap('china',mapdata);
        getchina()
    }
    // else if( params.seriesName in provinces ){
        
	// 	$.ajax({
    //         type : "get",
    //         url : ip_path + "/changfa_system/machineFlow/getStatisticsMachineAllCity.do",
    //         dataType : "json",
    //         data:{
    //             city:params.name.indexOf('市') != -1? params.name.split('市')[0]:params.name
    //         },
    //         success : function (data) {
    //             if(data.head.code == 200){
    //                 map = '';
    //                 //循环获取到的数据便利到地图上
    //                 data.body.result.forEach(function(item){
    //                     //重新定位仓库分布
    //                     //markers=[];
    //                     if(item.location!= null && item.location!=''){
    //                         $('#map').show();
    //                         $('#button').show();
    //                         $('#button1').hide();
    //                         $('#main2').hide();
    //                         //已第一个出现的 仓库为 显示地址
    //                         if(!map){
    //                             map = new AMap.Map("map", {
    //                                 center: item.location.split(","),
    //                                 zoom: 12
    //                             });
    //                         }
    //                         var circle = new AMap.Circle({
    //                             map: map,
    //                             center: item.location.split(","),
    //                             radius: item.radius, //半径
    //                             borderWeight: 3,
    //                             strokeColor: "#FF33FF", 
    //                             strokeOpacity: 1,
    //                             strokeWeight: 6,
    //                             strokeOpacity: 0.2,
    //                             fillOpacity: 0.4,
    //                             strokeStyle: 'dashed',
    //                             strokeDasharray: [10, 10], 
    //                             // 线样式还支持 'dashed'
    //                             fillColor: '#1791fc',
    //                             zIndex: 50,
    //                         })

    //                          // 点标记显示内容，HTML要素字符串
    //                             var markerContent =
    //                             '<div class="custom-content-marker">' +
    //                             '<div>'+ item.store_name+'</div>'+
    //                             '   <div class="count2">仓库'+ item.count +'台（带终端'+ item.imei_count +'台）</div>' +
    //                             '</div>';

    //                         var markers = new AMap.Marker({
    //                             position: item.location.split(","),
    //                             // 将 html 传给 content
    //                             content: markerContent,
    //                             // 以 icon 的 [center bottom] 为原点
    //                             offset: new AMap.Pixel(-13, -30)
    //                         });

    //                         // 将 markers 添加到地图
    //                         map.add(markers);

    //                         // circle.setMap(map);
    //                         //给围栏设置点击事件
    //                         circle.on('click', function(){
    //                             warehouseId = item.id;
    //                             getwarehouse();
    //                         })
    //                     }
    //                     // else{
    //                     //     alert('当前部分仓库没有地址信息');
    //                     // }
    //                 })
    //             }else{
    //                 alert(data.head.message);
    //             }
                
    //         }
    //     });
	//  }
});

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
            res.push({
                name: data[i].name,
                value: (data[i].coord).concat(data[i].value),
                value2:data[i].value
            });
    }
    return res;
};

//初始化绘制全国地图配置
var option = {
	backgroundColor: '#ffffff',
    title : {
    },
    tooltip: {
        trigger: 'item',
        formatter:function(parmas){
            if(parmas.data.name){
            return parmas.data.name +'：'+ parmas.data.value[2] +'台';
            }
        }
    },
    
    // dataRange: {  
    //     show : true,  
    //     x: 'left',  
    //     y: 'center',  
    //     splitList: [   
    //         {start: 3000},
    //         {start: 1000, end:3000},
    //         {start: 500, end: 1000},  
    //         {start: 100, end: 500},
    //         {start: 10, end: 100},  
    //         {start: 1, end: 10},
    //     ],  
    //     color: ['#CCFF66', '#CC9900']  
    // },  
    // toolbox: {
    //     show: true,
    //     orient: 'vertical',
    //     left: 'right',
    //     top: 'center',
    //     feature: {
    //         dataView: {readOnly: false},
    //         restore: {},
    //         saveAsImage: {}
    //     },
    //     iconStyle:{
    //     	normal:{
    //     		color:'#fff'
    //     	}
    //     }
    // },
    animationDuration:1000,
	animationEasing:'cubicOut',
    animationDurationUpdate:1000,
    

    geo: {
        show: true,
        map: 'china',
        //roam: true,
        //center: [113.83531246, 34.0267395887],
        //zoom: 1,
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                borderColor: 'rgba(155,155,155, 1)',
                borderWidth: 1,
                areaColor: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.8,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(155,155,155, 0)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(155,155,155, .2)' // 100% 处的颜色
                    }],
                    globalCoord: true // 缺省为 false
                },
                shadowColor: 'rgba(128, 217, 248, 1)',
                // shadowColor: 'rgba(255, 255, 255, 1)',
                shadowOffsetX: -2,
                shadowOffsetY: 2,
                shadowBlur: 10
            },
            emphasis: {
                areaColor: '#389BB7',
                borderWidth: 0
            }
        }
    },
     
};
function renderMap(map,data){
    //option.title.subtext = map;
    //console.log(provinceData);
    option.series = [ 
        {
            //文字和标志
            name: 'light',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function(val) {
                return 10;
            },
            label: {
                // normal: {
                //     formatter: '{b}',
                //     position: 'right',
                //     show: true
                // },
                // emphasis: {
                //     show: true
                // }
            },
            itemStyle: {
                normal: {
                    color: '#eee'
                }
            }
        },
                    //地图？
                    // {
                    //     name: map,
                    //     type: 'map',
                    //     //mapType: map,
                    //     geoIndex: 0,
                    //     aspectScale: 0.75, //长宽比
                    //     //showLegendSymbol: false, // 存在legend时显示
                    //     // label: {
                    //     //     normal: {
                    //     //         show: false
                    //     //     },
                    //     //     emphasis: {
                    //     //         show: false,
                    //     //         textStyle: {
                    //     //             color: '#fff'
                    //     //         }
                    //     //     }
                    //     // },
                    //     roam: true,
                    //     // itemStyle: {
                    //     //     normal: {
                    //     //         areaColor: '#031525',
                    //     //         borderColor: '#FFFFFF',
                    //     //     },
                    //     //     emphasis: {
                    //     //         areaColor: '#2B91B7'
                    //     //     }
                    //     // },
                    //     animation: false,
                    //     //data: data
                    // },
                    //地图点的动画效果
                    {
                        //  name: 'Top 5',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: convertData(data),
                        symbolSize: function(val) {
                            return 15;
                        },
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        hoverAnimation: true,
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'left',
                                show: true,
                                textStyle: {
                                    fontSize: '10',
                                    fontWeight: 'bold'
                                }
                            },


                        },
                        itemStyle: {
                            normal: {
                                color: "#DD6B66",
                                shadowBlur: 10,
                                shadowColor: "#759AA0"
                            }
                            
                        },
                        zlevel: 1
                    },

                    //地图线的动画效果
                    {
                        type: 'lines',
                        zlevel: 2,

                        effect: {
                            show: true,
                            period: 4, //箭头指向速度，值越小速度越快
                            trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                            symbol: 'arrow', //箭头图标
                            symbolSize: 6, //图标大小
                        },
                        //hoverAnimation: false,
                        lineStyle: {
                            normal: {
                                color: "#E062AE",
                                width: 0.5, //尾迹线条宽度
                                opacity: 0.5, //尾迹线条透明度
                                curveness: .3 //尾迹线条曲直度
                            }
                        },
                        data: lines
                    },
    ],

    //在渲染之前重置chart，取消状态即可
     chart.setOption(option);
}


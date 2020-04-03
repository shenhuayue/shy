//地图容器
var chart = echarts.init(document.getElementById('main'));
//存储地区信息
var farmInfo=[];
//存储当前的省份名
var onceArea;
//存储当前的市区名
var onceArea2;
//存储当前选择了哪些车辆
var carCheck='';
//区域动态加载图标数据
var provinceData=[];
//存储每个农机的标识标志
var carColor=[];
//34个省、市、自治区的名字拼音映射数组
var provinces = {
    //23个省
    "台湾": "taiwan",
    "河北": "hebei",
    "山西": "shanxi",
    "辽宁": "liaoning",
    "吉林": "jilin",
    "黑龙江": "heilongjiang",
    "江苏": "jiangsu",
    "浙江": "zhejiang",
    "安徽": "anhui",
    "福建": "fujian",
    "江西": "jiangxi",
    "山东": "shandong",
    "河南": "henan",
    "湖北": "hubei",
    "湖南": "hunan",
    "广东": "guangdong",
    "海南": "hainan",
    "四川": "sichuan",
    "贵州": "guizhou",
    "云南": "yunnan",
    "陕西": "shanxi1",
    "甘肃": "gansu",
    "青海": "qinghai",
    //5个自治区
    "新疆": "xinjiang",
    "广西": "guangxi",
    "内蒙古": "neimenggu",
    "宁夏": "ningxia",
    "西藏": "xizang",
    //4个直辖市
    "北京": "beijing",
    "天津": "tianjin",
    "上海": "shanghai",
    "重庆": "chongqing",
    //2个特别行政区
    "香港": "xianggang",
    "澳门": "aomen"
};

 //区分当前状态 0 是 echarts地图页面 1是 高德api页面
// var status = 0;
//地图构建
var map;
//仓库id
var warehouseId;

//所以车辆信息
var markers=[];

//绘制柱状图
var myChart = echarts.init(document.getElementById('main2'));

var histogram = {
        legend: {},
        title : {
            text: '农机数量统计',
            x:'left'
        },
        tooltip: {
            extraCssText:'width:160px;height:40px;'
        },
        // dataset: {
        //     source: a
        // },
        xAxis: [
            {
                type: 'category', 
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
            {gridIndex: 0},
        ],
        grid: [
            {bottom: '10%'},
            {top: '10%'},
        ],
        series: [
            // These series are in the first grid.
            {type: 'bar', seriesLayoutBy: 'row'},
        ]
    };
    

//清空
function closeProinfo(){
    $('.pro_info').empty();
}

//动态获取地区车辆信息
function getchina(){
        $.ajax({
        type : "get",
        url : ip_path + "/changfa_system/machinery/province/list.do",
        dataType : "json",
        data:{
            lineNums:''
        },
        success : function (data) {
            var a = [
                ['product'],
                ['农机数量'],
            ]
            data.body.result.forEach(elem => {
                farmInfo.push(
                    {
                    name:elem.name,
                    count:elem.count,
                    code:elem.adcode
                    }
                )
                a[0].push(elem.name);
                a[1].push(elem.count);
            });
            histogram. dataset = {
                source: a
            }
            myChart.setOption(histogram);
                //绘制全国地图
                $.getJSON('static/map/china.json', function(data){
                    d = [];
                    for( var i=0;i<data.features.length;i++ ){
                        farmInfo.forEach(item =>{
                            if(item.name.indexOf(data.features[i].properties.name) != -1){
                                d.push({
                                    name:data.features[i].properties.name,
                                    value:item.count
                                })
                            }
                        })

                        }

                    mapdata = d;

                    //注册地图
                    echarts.registerMap('china', data);
                    //绘制地图
                    renderMap('china',d);
                });
            
            }
        });
}
//动态删选地区车辆
function getCheckCar(){
    $.ajax({
        type : "get",
        sync: false,
        url : ip_path + "/changfa_system/machinery/city/list.do",
        dataType : "json",
        data:{
            code:onceArea,
            lineNums:carCheck
        },
        success : function (data) {
            var a = [
                ['product'],
                ['农机数量'],
            ]
            data.body.result.forEach(elem => {
                farmInfo.push(
                    {
                    name:elem.name,
                    count:elem.count,
                    code:elem.adcode
                    }
                )
                a[0].push(elem.name);
                a[1].push(elem.count);
                //console.log(provinceData);
                    provinceData.forEach(function(item){
                        if(item.name.indexOf(elem.name)!=-1){
                            item.value = elem.count;
                        }
                    })
            });
            histogram. dataset = {
                source: a
            }
            myChart.setOption(histogram);
            option.series[0].markPoint.data = provinceData;
            chart.setOption(option,true);
        }
    });
}

function getwarehouse(){
    removeMarkers();
    markers = [];
        $.ajax({
            type : "get",
            url : ip_path + "/changfa_system/machinery/city/detail.do",
            dataType : "json",
            data:{
                code:onceArea2,
                lineNums:carCheck
            },
            success : function (param) {
                if(param.head.code ==200){
                    carColor = [];
                    param.body.result.machineList.forEach(function(elem){
                        //标记车辆位置
                        var marker = new AMap.Marker({
                            map: map,
                            position: new AMap.LngLat(elem.lon,elem.lat),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                            title: elem.line_name,
                            icon: new AMap.Icon({            
                                image: elem.status != 6?'http://test.app.changfanz.net:3588/changfa_file/green.png':'http://test.app.changfanz.net:3588/changfa_file/orgin.png',
                                size: new AMap.Size(52, 52),  //图标大小
                                imageSize: new AMap.Size(30,30)
                            })
                        });

                        if(elem.status != 6){
                            carColor.push('http://test.app.changfanz.net:3588/changfa_file/green.png');
                        }else{
                            carColor.push('http://test.app.changfanz.net:3588/changfa_file/orgin.png');
                        }

                        markers.push(marker);
                        marker.on('click', function(event){
                            markers.forEach(function(param,index){
                                preIconfirst = new AMap.Icon({
                                    image:carColor[index],
                                    size: new AMap.Size(52, 52),  //图标大小
                                    imageSize: new AMap.Size(30,30)
                                });
                                param.setIcon(preIconfirst);
                            })
                            
                        preIcon = new AMap.Icon({
                                image:elem.status != 6?'http://test.app.changfanz.net:3588/changfa_file/greenCheck.png':'http://test.app.changfanz.net:3588/changfa_file/orginCheck.png',
                                size: new AMap.Size(52, 52),  //图标大小
                                imageSize: new AMap.Size(30,40)
                            });
                            marker.setIcon(preIcon);
                            $.ajax({
                                type : "get",
                                url : 'https://restapi.amap.com/v3/geocode/regeo',
                                dataType : "json",
                                data:{
                                    key:'3e74281cf91fedbc4cecfa6d75ab9fbb',
                                    location: elem.lon + ','+ elem.lat,
                                },
                                success : function (data) {
                                    $('.pro_info').empty();
                                    $('.pro_info').append(
                                        '<div class="productInfo"  style="padding:20px 20px;">'+
                                        '<img src="img/close_add.png" class=" mg-r20 flt_r" onclick="closeProinfo()"></img>'+
                                        '<div style="margin-top:10px;">'+
                                        '<span>产品系列：</span>'+
                                        '<span>'+ elem.series_name +'</span>'+
                                        '</div>'+
                                        '<div style="margin-top:10px;">'+
                                        '<span>产品型号：</span>'+
                                        '<span>'+ elem.model_name +'</span>'+
                                        '</div>'+
                                        '<div style="margin-top:10px;">'+
                                        '<span>出厂编号：</span>'+
                                        '<span>'+ elem.factory_num+'</span>'+
                                        '</div>'+
                                        '<div style="margin-top:10px;">'+
                                        '<span>条码号：</span>'+
                                        '<span>'+ elem.bar_code+'</span>'+
                                        '</div>'+
                                        '<div style="margin-top:10px;">'+
                                        '<span>所属仓库：</span>'+
                                        '<span>'+ elem.dealer_name+'</span>'+
                                        '</div>'+
                                        '<div style="margin-top:10px;">'+
                                        '<span>定位地址：</span>'+
                                        '<span>'+ data.regeocode.formatted_address +'</span>'+
                                        '</div>'+
                                        '</div>'
                                    )


                                }
                            })
                            
                        })
                    })

                }else{
                    alert(param.head.message);
                }
            }
        });
}
//移除所有的仓库车辆标记
function removeMarkers(){
    if(map){
        map.remove(markers);
    }
}
//返回省上级
function returnMenu(){
    // $.getJSON('static/map/province/'+ provinces[onceArea] +'.json', function(data){
    //     echarts.registerMap( onceArea, data);
    //     // var d = [];
    //     // for( var i=0;i<data.features.length;i++ ){
    //     //     d.push({
    //     //         name:data.features[i].properties.name
    //     //     })
    //     // }
    //     $.ajax({
    //         type : "get",
    //         url : "http://172.31.5.36:3591/changfa_system/machineFlow/getStatisticsMachineAllProvince.do",
    //         dataType : "json",
    //         data:{
    //             province:onceArea,
    //             line_nums:carCheck
    //         },
    //         success : function (param) {
    //             param.body.result.forEach(elem => {
    //                 farmInfo[elem.name] = elem.count;
    //             });
    //             data.features.forEach(function (item, index) {
    //                 for(var key in farmInfo){
    //                     if (item.properties.name.indexOf(key)!= -1 &&  farmInfo[key]!=0) {
    //                         provinceData.push({
    //                             name: key,
    //                             seriesId: item.id,
    //                             coord: item.properties.cp,
    //                             value: farmInfo[key],
    //                         });
    //                     }
    //                 };
    //             });
    //             $('.farm_check').show();
    //             renderMap(onceArea,provinceData);
    //         }
    //     });
        
    // });
    $('#map').hide();
    $('#button').hide();
    $('#button1').show();
    $('#main2').show();
    $('.pro_info').empty();
    removeMarkers();
    map.destroy( );
}

function returnMap(){
    provinceData = [];
    //renderMap('china',mapdata);
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
                        //if(markers.length != 0){
                            getwarehouse();
                        //}
                }else{
                    var carCheck1 = carCheck.split(',');
                    carCheck1.splice(carCheck1.indexOf(this.value),1);
                    carCheck = carCheck1.toString();
                        getCheckCar();
                        //if(markers.length != 0){
                            getwarehouse();
                        //}
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
        $('#button1').show();
        farmInfo.forEach(item=>{
            if(item.name.indexOf(params.name) != -1){
                onceArea = item.code;
            }
        })
		//如果点击的是34个省、市、自治区，绘制选中地区的二级地图
		$.getJSON('static/map/province/'+ provinces[params.name] +'.json', function(data){
            echarts.registerMap( params.name, data);
			// var d = [];
			// for( var i=0;i<data.features.length;i++ ){
			// 	d.push({
			// 		name:data.features[i].properties.name
			// 	})
            // }
            $.ajax({
                type : "get",
                url : ip_path + "/changfa_system/machinery/city/list.do",
                dataType : "json",
                data:{
                    code:onceArea,
                    lineNums:carCheck
                },
                success : function (param) {
                    farmInfo = [];
                    var a = [
                        ['product'],
                        ['农机数量'],
                    ]
                    param.body.result.forEach(elem => {
                        farmInfo.push(
                            {
                            name:elem.name,
                            count:elem.count,
                            code:elem.adcode
                            }
                        )
                        a[0].push(elem.name);
                        a[1].push(elem.count);
                    });
                    histogram. dataset = {
                        source: a
                    }
                    myChart.setOption(histogram);
                    
                    data.features.forEach(function (item, index) {
                        farmInfo.forEach(elem=> {
                            if (item.properties.name.indexOf(elem.name)!= -1 &&  elem.count!=0) {
                                provinceData.push({
                                    name: item.properties.name,
                                    value: elem.count,
                                    code: elem.code,
                                    coord: item.properties.cp,
                                });
                            }
                        });
                    });
                    console.log(provinceData);
                    $('.farm_check').show();
                    renderMap(params.name,provinceData);
                }
            });
            
        });
        //如果点到了图标就跳转到地图页面
	}else if( params.seriesName in provinces ){
        //console.log(params.seriesName);
        farmInfo.forEach(item=>{
            if(params.name.indexOf(item.name) != -1){
                
                onceArea2 = item.code;
            }
        })
		$.ajax({
            type : "get",
            url : ip_path + "/changfa_system/machinery/city/detail.do",
            dataType : "json",
            data:{
                code:onceArea2,
                lineNums:carCheck
            },
            success : function (data) {
                if(data.head.code == 200){
                    map = '';
                    //循环获取到的数据便利到地图上
                    data.body.result.storeList.forEach(function(item){
                        //重新定位仓库分布
                        //markers=[];
                        if(item.location!= null && item.location!=''){
                            $('#map').show();
                            $('#button').show();
                            $('#button1').hide();
                            $('#main2').hide();
                            //已第一个出现的 仓库为 显示地址
                            if(!map){
                                map = new AMap.Map("map", {
                                    center: item.location.split(","),
                                    zoom: 12
                                });
                            }
                            var circle = new AMap.Circle({
                                map: map,
                                center: item.location.split(","),
                                radius: item.radius, //半径
                                borderWeight: 3,
                                strokeColor: "#FF33FF", 
                                strokeOpacity: 1,
                                strokeWeight: 6,
                                strokeOpacity: 0.2,
                                fillOpacity: 0.4,
                                strokeStyle: 'dashed',
                                strokeDasharray: [10, 10], 
                                // 线样式还支持 'dashed'
                                fillColor: '#1791fc',
                                zIndex: 50,
                            })

                             // 点标记显示内容，HTML要素字符串
                                var markerContent =
                                '<div class="custom-content-marker">' +
                                '<div>'+ item.store_name+'</div>'+
                                '</div>';

                            var markers = new AMap.Marker({
                                position: item.location.split(","),
                                // 将 html 传给 content
                                content: markerContent,
                                // 以 icon 的 [center bottom] 为原点
                                offset: new AMap.Pixel(-13, -30)
                            });

                            // 将 markers 添加到地图
                            map.add(markers);

                            // circle.setMap(map);
                            //给围栏设置点击事件
                            // circle.on('click', function(){
                            //     warehouseId = item.id;
                            //     getwarehouse();
                            // })
                        }
                        // else{
                        //     alert('当前部分仓库没有地址信息');
                        // }
                    })

                    data.body.result.machineList.forEach(function(elem){
                        //标记车辆位置
                        var marker = new AMap.Marker({
                            map: map,
                            position: new AMap.LngLat(elem.lon,elem.lat),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                            title: elem.line_name,
                            icon: new AMap.Icon({            
                                image: elem.status != 6?'http://test.app.changfanz.net:3588/changfa_file/green.png':'http://test.app.changfanz.net:3588/changfa_file/orgin.png',
                                size: new AMap.Size(52, 52),  //图标大小
                                imageSize: new AMap.Size(30,30)
                            })
                        });

                        if(elem.status != 6){
                            carColor.push('http://test.app.changfanz.net:3588/changfa_file/green.png');
                        }else{
                            carColor.push('http://test.app.changfanz.net:3588/changfa_file/orgin.png');
                        }

                        markers.push(marker);
                        marker.on('click', function(event){
                            markers.forEach(function(param,index){
                                preIconfirst = new AMap.Icon({
                                    image:carColor[index],
                                    size: new AMap.Size(52, 52),  //图标大小
                                    imageSize: new AMap.Size(30,30)
                                });
                                param.setIcon(preIconfirst);
                            })
                            
                        preIcon = new AMap.Icon({
                                image:elem.status != 6?'http://test.app.changfanz.net:3588/changfa_file/greenCheck.png':'http://test.app.changfanz.net:3588/changfa_file/orginCheck.png',
                                size: new AMap.Size(52, 52),  //图标大小
                                imageSize: new AMap.Size(30,40)
                            });
                            marker.setIcon(preIcon);
                            $.ajax({
                                type : "get",
                                url : 'https://restapi.amap.com/v3/geocode/regeo',
                                dataType : "json",
                                data:{
                                    key:'3e74281cf91fedbc4cecfa6d75ab9fbb',
                                    location: elem.lon + ','+ elem.lat,
                                },
                                success : function (data) {
                                    $('.pro_info').empty();
                                    $('.pro_info').append(
                                        '<div class="productInfo"  style="padding:20px 20px;">'+
                                        '<img src="img/close_add.png" class=" mg-r20 flt_r" onclick="closeProinfo()"></img>'+
                                        '<div style="margin-top:10px;">'+
                                        '<span>产品系列：</span>'+
                                        '<span>'+ elem.series_name +'</span>'+
                                        '</div>'+
                                        '<div style="margin-top:10px;">'+
                                        '<span>产品型号：</span>'+
                                        '<span>'+ elem.model_name +'</span>'+
                                        '</div>'+
                                        '<div style="margin-top:10px;">'+
                                        '<span>出厂编号：</span>'+
                                        '<span>'+ elem.factory_num+'</span>'+
                                        '</div>'+
                                        '<div style="margin-top:10px;">'+
                                        '<span>条码号：</span>'+
                                        '<span>'+ elem.bar_code+'</span>'+
                                        '</div>'+
                                        '<div style="margin-top:10px;">'+
                                        '<span>所属仓库：</span>'+
                                        '<span>'+ elem.form_address+'</span>'+
                                        '</div>'+
                                        '<div style="margin-top:10px;">'+
                                        '<span>定位地址：</span>'+
                                        '<span>'+ data.regeocode.formatted_address +'</span>'+
                                        '</div>'+
                                        '</div>'
                                    )


                                }
                            })
                            
                        })
                    })

                }else{
                    alert(data.head.message);
                }
                
            }
        });
	 }
});

//初始化绘制全国地图配置
var option = {
	backgroundColor: '#fff',
    title : {
        text: '常发农机分布地图',
        left: 'center',
        textStyle:{
            color: '#000',
            fontSize:30,
            fontWeight:'normal',
            fontFamily:"Microsoft YaHei"
        },
    },
    tooltip: {
        trigger: 'item',
        formatter:function(parmas){
            //console.log(farmInfo);
            for (i = 0; i < farmInfo.length; i++) { 
                if(farmInfo[i].name.indexOf(parmas.name) != -1){
                    return parmas.name + '：'+ farmInfo[i].count + '台';
                }
             }
            // farmInfo.forEach(item => {
                
            //     if(item.name.indexOf(parmas.name) != -1){
            //         console.log(parmas.name + '：'+ item.count + '台');
            //         return parmas.name + '：'+ item.count + '台';
            //     }
            // })
        }
    },
    dataRange: {  
        show : true,  
        x: 'left',  
        y: 'center',  
        splitList: [   
            {start: 3000},
            {start: 1000, end:3000},
            {start: 500, end: 1000},  
            {start: 100, end: 500},
            {start: 10, end: 100},  
            {start: 1, end: 10},
        ],  
        color: ['#CCFF66', '#CC9900']  
    },  
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
	animationDurationUpdate:1000
     
};
function renderMap(map,data){
	//option.title.subtext = map;
    option.series = [ 
		{
            name: map,
            type: 'map',
            mapType: map,
            roam: false,
            nameMap:{
			    'china':'中国'
			},
            label: {
	            normal:{
					show:true,
					textStyle:{
						color:'#888',
						fontSize:13
                    },
	            },
	            emphasis: {
	                show: true,
	                textStyle:{
						color:'#fff',
						fontSize:13
					}
	            }
            },
            
            
	        itemStyle: {
	            normal: {
                    borderColor: 'dodgerblue',
	            },
	            emphasis: {
	                areaColor: 'darkred'
	            }
	        },
            data:data,

            markPoint:{
                symbol:'pin',
                symbolSize:50,
                animationDelay: function (idx) {
                    // 越往后的数据延迟越大
                    return idx * 300;
                },
                large:true,
                effect:{
                    show:true
                },
                data:provinceData
            }
        },
    ],
    //渲染地图
    chart.setOption(option);
}


var models = [
    {
        name:'deliverScreenAuthor',value:'2',modelBaseCode:'100001',
    },
    {
        name:'shippingModelRank',value:'1',modelBaseCode:'100002',
    },
]

var showModels = [
    {
        name:'deliverScreenAuthorShow',value:'2',modelBaseCode:'100002',
    },
    {
        name:'shippingModelRankShow',value:'1',modelBaseCode:'100001',
    },
]

var screenModel = [
    {
        name:'linkRatioOrBasis',value:'100000201'
    },
    {
        name:'shippingModelRank',value:'100000202'
    },
    {
        name:'waybillRolls',value:'100000203'
    },
    {
        name:'agriculturalMapSmall',value:'100000204'
    },
    {
        name:'productLinesShipped',value:'100000205'
    },
    {
        name:'deliveryListProvince',value:'100000206'
    },
    
]

//保存配置
var screenArr = [];

//储存单独的配置
var pitchOn = [];

var chartType1 = ['100000201','100000202','100000203','100000205']
var chartType2 = ['100000204']
var chartType3 =['100000206']

function createScreen(){

    var list = [];

    $('.modelSmall').each(function(index){
        var chartType = '';
        var i = $($('.modelSmall')[index]).val();
        if(i){

            if(chartType1.indexOf( i.substring(0,i.indexOf("(")) ) != -1){
                chartType = 1;
            }else if( chartType2.indexOf( i.substring(0,i.indexOf("(")) ) != -1 ){
                chartType = 2;
            };
    
            //console.log($('.modelSmall')[index].parentNode.nextSibling);
            var arr = {
                "chartId":i.substring(i.lastIndexOf("(")+1),
                "chartType":chartType,
                "chartLocation":$($('.modelSmall')[index]).parent().next().attr('id')
            }
            list.push(arr);

        }

    })

    $('.modelbig').each(function(index){
        var chartType = '';
        var i = $($('.modelbig')[index]).val();
        if(i){
        if(chartType1.indexOf( i.substring(0,i.indexOf("(")) ) != -1){
            chartType = 1;
        }else if( chartType2.indexOf( i.substring(0,i.indexOf("(")) ) != -1 ){
            chartType = 2;
        };

        //console.log($('.modelSmall')[index].parentNode.nextSibling);
        var arr = {
            "chartId":i.substring(i.lastIndexOf("(")+1),
            "chartType":chartType,
            "chartLocation":$($('.modelbig')[index]).parent().next().attr('id')
        }
        list.push(arr);
    }
    })

    $('.modelbottom').each(function(index){
        var chartType = '';
        var i = $($('.modelbottom')[index]).val();
        if(i){
            if(chartType1.indexOf( i.substring(0,i.indexOf("(")) ) != -1){
                chartType = 1;
            }else if( chartType2.indexOf( i.substring(0,i.indexOf("(")) ) != -1 ){
                chartType = 2;
            }else if( chartType3.indexOf( i.substring(0,i.indexOf("(")) ) != -1 ){
                chartType = 3;
            };
    
            //console.log($('.modelSmall')[index].parentNode.nextSibling);
            var arr = {
                "chartId":i.substring(i.lastIndexOf("(")+1),
                "chartType":chartType,
                "chartLocation":$($('.modelbottom')[index]).parent().next().attr('id')
            }
            list.push(arr);
        }

    })

    var json = {
        "modelId":$(window.parent.document).find("#line").val().slice($(window.parent.document).find("#line").val().indexOf('(')+1),
        "roleId":$(window.parent.parent.document).find("input[name='roleId_forLimit']").val(),
        "chartList": list,
      }

      $.ajax({
        type: "post",
        contentType: 'application/json',
        url: ip_path + "/changfa_system/screenAuthor/createScreenAuthor.do",
        data: JSON.stringify(json),
        success: function (data) {
          if (data['head']['code'] == 200) {
            alert(data['head']['message']);
            window.location.reload();
          } else {
            alert(data['head']['message']);
          }
        }
      });

}

function deleteScreen(){
    //console.log($(window.document).find("#line").val());
    $.ajax({
        type: "post",
        //contentType: 'application/json',
        url: ip_path + "/changfa_system/screenAuthor/deleteAuthor.do.do",
        data: {
            authorId:$(window.document).find("#line").val().slice($(window.document).find("#line").val().indexOf('(')+1,$(window.document).find("#line").val().indexOf(')')),
        },
        success: function (data) {
          if (data['head']['code'] == 200) {
            window.location.reload();
          } else {
            alert(data['head']['message']);
          }
        }
      });
}

function amendScreen(){

    var list = [];

    $('.modelSmall').each(function(index){
        var chartType = '';
        var i = $($('.modelSmall')[index]).val();
        if(i){

            if(chartType1.indexOf( i.substring(0,i.indexOf("(")) ) != -1){
                chartType = 1;
            }else if( chartType2.indexOf( i.substring(0,i.indexOf("(")) ) != -1 ){
                chartType = 2;
            };
    
            //console.log($('.modelSmall')[index].parentNode.nextSibling);
            var arr = {
                "chartId":i.substring(i.lastIndexOf("(")+1),
                "chartType":chartType,
                "chartLocation":$($('.modelSmall')[index]).parent().next().attr('id')
            }
            list.push(arr);

        }

    })

    $('.modelbig').each(function(index){
        var chartType = '';
        var i = $($('.modelbig')[index]).val();
        if(i){
        if(chartType1.indexOf( i.substring(0,i.indexOf("(")) ) != -1){
            chartType = 1;
        }else if( chartType2.indexOf( i.substring(0,i.indexOf("(")) ) != -1 ){
            chartType = 2;
        };


        //console.log($('.modelSmall')[index].parentNode.nextSibling);
        var arr = {
            "chartId":i.substring(i.lastIndexOf("(")+1),
            "chartType":chartType,
            "chartLocation":$($('.modelbig')[index]).parent().next().attr('id')
        }
        list.push(arr);
    }
    })

    $('.modelbottom').each(function(index){
        var chartType = '';
        var i = $($('.modelbottom')[index]).val();
        if(i){
            if(chartType1.indexOf( i.substring(0,i.indexOf("(")) ) != -1){
                chartType = 1;
            }else if( chartType2.indexOf( i.substring(0,i.indexOf("(")) ) != -1 ){
                chartType = 2;
            }else if( chartType3.indexOf( i.substring(0,i.indexOf("(")) ) != -1 ){
                chartType = 3;
            };
    
            //console.log($('.modelSmall')[index].parentNode.nextSibling);
            var arr = {
                "chartId":i.substring(i.lastIndexOf("(")+1),
                "chartType":chartType,
                "chartLocation":$($('.modelbottom')[index]).parent().next().attr('id')
            }
            list.push(arr);
        }

    })

    var json = {
        "modelId":$(window.parent.document).find("#line").val().slice($(window.parent.document).find("#line").val().indexOf(')')+1),
        "authorId":$(window.parent.document).find("#line").val().slice($(window.parent.document).find("#line").val().indexOf('(')+1,$(window.parent.document).find("#line").val().indexOf(')')),
        "chartList": list
      }

      $.ajax({
        type: "post",
        contentType: 'application/json',
        url: ip_path + "/changfa_system/screenAuthor/updateAuthor.do",
        data: JSON.stringify(json),
        success: function (data) {
          if (data['head']['code'] == 200) {
            window.parent.location.reload();
          } else {
            alert(data['head']['message']);
          }
        }
      });

}
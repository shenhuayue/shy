
//保养计划保存
var byid = $(window.parent.document).find("input[name='jihuasaw']").val();
//保养计划修改
function savebytable1(){
  if( $('#byname').val() !=''){
    $.ajax({
      type:"post",
      url: ip_path + "/changfa_system/maintenanceInfo/update.do",
      data:{
        token: $(window.parent.document).find("input[name='token']").val(),
        name:$('#byname').val(),
        maintenanceId:byid
      },
      dataType:"json",
      success:function (data) {
        console.log(data)
        if (data['head']['code'] == 200) {
          alert('保存成功')
          //console.log(data)
          //byid = data['body']['result']
          
        }else{
          alert(data['head']['message'])
        }
      }
    
    })
  }else{
    alert('请输入保养计划')
  }
}
//保养计划新增
function savebytable(){
  if( $('#byname').val() !=''){
    $.ajax({
      type:"post",
      url: ip_path + "/changfa_system/maintenanceInfo/insert.do",
      data:{
        token: $(window.parent.document).find("input[name='token']").val(),
        name:$('#byname').val(),
      },
      dataType:"json",
      success:function (data) {
        //console.log(data)
        if (data['head']['code'] == 200) {
          alert('保存成功')
          //console.log(data)
          byid = data['body']['result']
          
        }else{
          alert(data['head']['message'])
        }
      }
    
    })
  }else{
    alert('请输入保养计划')
  }
}
/*
function savebytable(){
  //var byname = $('#byname').val();
  if( $('#byname').val() !=''){
    if(byid) {
      $.ajax({
        type:"post",
        url: ip_path + "/changfa_system/maintenanceInfo/update.do",
        data:{
          token: $(window.parent.document).find("input[name='token']").val(),
          name:$('#byname').val(),
          maintenanceId:byid
        },
        dataType:"json",
        success:function (data) {
          console.log(data)
          if (data['head']['code'] == 200) {
            alert('保存成功')
            //console.log(data)
            //byid = data['body']['result']
            
          }
        }
      
      })
    } else {
      $.ajax({
        type:"post",
        url: ip_path + "/changfa_system/maintenanceInfo/insert.do",
        data:{
          token: $(window.parent.document).find("input[name='token']").val(),
          name:$('#byname').val(),
        },
        dataType:"json",
        success:function (data) {
          //console.log(data)
          if (data['head']['code'] == 200) {
            alert('保存成功')
            //console.log(data)
            byid = data['body']['result']
            
          }
        }
      
      })
    }
  }
  else{
    alert('请输入保养计划')
  }
}*/





//添加系列

function addseries() {
  $('.flychanp').css('display','block');
}

//增加的保存按钮
var chapxilie;
var chanppre;//框里面的已添加值
function baocuntk(){
  var chapline = $("#process_cpx option:selected").val();
  chapxilie = $("#process_cpxl option:selected").val();
  let t = 1;
  var byjh = $('#byname').val();
  var xlmc = $("#process_cpxl").find('option:selected').text();
  if(byjh ==''){
    alert('请输入保养计划')
  }else{
  //alert(123)
  $('#xlecontent span').each(function(){
    if(xlmc == $(this).html()) {
      t=2;
    }
  })
  if(t == 1) {
  $.ajax({
    type:"post",
    url: ip_path + "/changfa_system/maintenanceSeries/insert.do",
    dataType:"json",
    data:{
      token: $(window.parent.document).find("input[name='token']").val(),
      maintenanceId:byid,
      seriesNum:chapxilie
    },
    success:function(data) {
      if(data['head']['code'] == 200){
        //alert(123)
        //console.log(data)
        if(chanppre == xlmc){
          alert('该系列已存在')
        }else{
          $('#xlecontent').append(
            '<span class="xl_item" onclick="delproxl(this)">'+ xlmc +'</span>'
          )
          $('.flychanp').css('display','none');
        }  
      }else if(data['head']['code'] == 400){
        alert(data['head']['message'])
      }
          
    }
  })
} else {
  alert('该系列已存在');
  $('.flychanp').css('display','none');

}
}

}

//删除系列
function delproxl(event){
    if($(event).hasClass("xl_itemactive")){
      $(event).removeClass("xl_itemactive");
      $(event).attr('id','');
    }else{
      $(event).addClass("xl_itemactive");
      $(event).attr('id','active');
    }
    
  }
  
  //return false;
  function deleteseries(){
    let number;
    
      $("#process_cpx option").each(function(){
        if($(this).val()) {
        $.ajax({
          type:"post",
          url:ip_path + "/changfa_system/product/getProducts.do",
          dataType:"json",
          data:{
            machineModelNum:$(this).val()
          },
          success:function(data){
            for(i=0;i<data['body']['resultList'].length;i++){
              number = data['body']['resultList'][i]['number'];
              $("#xlecontent .xl_itemactive").each(function(){
                var html = $(this).html();
                if(html == data['body']['resultList'][i]['name']) {
                  $.ajax({
                    type:"post",
                    url:ip_path + "/changfa_system/maintenanceSeries/delete.do",
                    dataType:"json",
                    data:{
                      token: $(window.parent.document).find("input[name='token']").val(),
                      maintenanceId:byid,
                      seriesNum:number,
                    },
                    success:function(data){
                      if(data['head']['code'] == 200){
                        $('.xl_itemactive').remove();
                        //$("#xlecontent").children("#active").remove()
                      // alert('123')
                      }
                    }
                  })
                }
              })
            }
        }
      })
    }
  })

    /*for (i=0;i<$('#active').length;i++){
      let hqz = $('#active').html();
      $("#process_cpxl option").each(function(){
        if($(this).html() == hqz) {
          chapxilie = $(this).val();
        }
      })//获取对应id
      
  }*/
  }

  //添加间隔

  function jiangeadd(){
  $('.baoyangchanp').css('display','block');

  }
var jiange;
function bysj(){
  var chapline = $("#process_cpx option:selected").val();
  chapxilie = $("#process_cpxl option:selected").val();
  let t = 1;
  var byjh = $('#byname').val();
  jiange = $('#hour').val();
  if(byjh ==''){
    alert('请输入保养计划')
  }/*else if(chapline ==''){
    alert('选择产品线')
  }else if(chapxilie == ''){
    alert('选择产品系列')
  }else if(jiange == ''){
    alert('选择工作小时')
  }*/else{
    $('#xlecontent2 span').each(function(){
      if(jiange == $(this).html()){
        t = 2;
      }
    })
    if(t == 1){
      let jlcs = $(".jlcs").val();
      $.ajax({
        type:"post",
        url: ip_path + "/changfa_system/maintenanceManualTime/insert.do",
        dataType:"json",
        data:{
          token: $(window.parent.document).find("input[name='token']").val(),
          maintenanceId:byid,
          seriesNum:chapxilie,
          workHour:jiange,
          order:jlcs,
        },
        success:function(data) {
          if(data['head']['code'] == 200){
              //console.log(data)
              $('#xlecontent2').append(
                '<span class="xl_item" data-order='+jlcs+' data-id='+data['body']['result']+' onclick="delproxlhour(this)" style="text-indent:0px;">'+ jiange +'</span>'
              )
              $(".jlcs").val(jlcs*1+1)
              $('.baoyangchanp').css('display','none');

          }
        }
      })
    }else{
      alert('该工作小时已存在')
    } 
  }

}

  //删除间隔
  function delproxlhour(event,id){
    if($(event).hasClass("xl_itemactive")){
      $('.shijiansc').hide();
      $(event).removeClass("xl_itemactive");
      $(event).attr('id','');
      

    }else{
      $(event).addClass("xl_itemactive");
      $(event).attr('id','active');
      $('.shijiansc').show();
      $('.shijiansc').css('marginLeft','455px');

    }
    /*$(event).css({
      'color':'#1ABC9C', 
      'border':'1px solid #1ABC9C',
    }).siblings({
      'color':'rgba(102,102,102,1);',
      'border':'1px solid rgba(228,228,228,1);'
    });*/
    //$(event).css('color','#1ABC9C').siblings('color','rgba(102,102,102,1);');
    //$(event).attr('id','active');
    }

    function deletejiange(){
      let hourid = $("#xlecontent2").children("#active").html();
      let order_id = $("#xlecontent2").children("#active").attr("data-order");
      
      $.ajax({
        type:"post",
        url:ip_path + "/changfa_system/maintenanceManualTime/delete.do",

        dataType:"json",
        data:{
          token: $(window.parent.document).find("input[name='token']").val(),
          maintenanceId:byid,
          workHour:hourid,
          order:order_id
          //typeTimeId:$("#xlecontent2").children("#active").attr("data-id")
        },
        success:function(data){
          if(data['head']['code'] == 200){
            $("#xlecontent2").children("#active").remove()
          }
        }
      })
    }

    //删除弹框里的时间
    function delshijian(){
      $.ajax({
        type:"post",
        url:ip_path + "/changfa_system/maintenanceManualTime/delete.do",
        dataType:"json",
        data:{
          token: $(window.parent.document).find("input[name='token']").val(),
          workHour:$("#timeinput").children("#active").html(),//这个才是正确的
          maintenanceId:$("#timeinput").children("#active").attr("data-mid"),
          order:$("#timeinput").children("#active").attr("data-orderid")
        },
        success:function(data){
          if(data['head']['code'] == 200){
            $("#timeinput").children("#active").remove()//删除
          }
        }
      })
    }



//function addbigprocess(){
//  $('#bytit1').css('display','none');
//  $('#addbigprocess').css('display','block');
//}

function byclose(){
  $('.byskip').css('display','none');
  $('#bytit1').val('');
  $('#sminput').empty();
  $('#timeinput').empty();
  $("#checkin8").prop("checked",false);
  $("#checkin9").prop("checked",false);
  $('#process_shijian').val('');
  $("#addsmallprocess").hide();
  $("#addtime").show();
  $("#addprocesstime").hide();
  $("#process_shijian").html('');
  
}

function smproclick(){
  $('#addsmallprocess').css('display','block');
}

//弹窗大项名称保存
//var isMust;//是否必做
//var isFirst;//是否首保
//var len=$("input[name='fittype']:checked").length;

var typeId;
function bybaocun(){
  if($('#bytit1').val() != ''){
    let daxiangname = $('#bytit1').val();
    let t=1;
    let isMust = $("#checkin9").is(':checked');
    let isFirst = $("#checkin8").is(':checked');
    if(isMust) {
      isMust = 1;
    } else {
      isMust = 0;
    }
    if(isFirst) {
      isFirst = 1;
    } else {
      isFirst = 0;
    }
    if($('#byname').val() == "") {
      alert("请先输入保养计划！");
      return false;
    } else {
      
      $('#adminTbody  tr').each(function() {
        //$(this).find("td:first").text();
        if(daxiangname == $(this).find("td:first").text()){
          t=2
        }
      });
      if(t==1){
        $.ajax({
          type:"post",
          url:ip_path+"/changfa_system/maintenanceManualType/insert.do",
          dataType : "json",
          data:{
            token: $(window.parent.document).find("input[name='token']").val(),
            typeName:$('#bytit1').val(),
            maintenanceId:byid,
            order:$(".jlbgcs").val(),
            isMust:isMust,
            isFirst:isFirst,
            'typeId':$('input[name=typeId]').val()
          },
          success:function(data){
            
            /*if($('input[name=typeId]').val()){
            }else{
              $('input[name=typeId]').val(data['body']['result']);
              typeId = data['body']['result'];
            }*/
            $('input[name=typeId]').val(data['body']['result']);
              typeId = data['body']['result'];
  
            //console.log(data)
            let html='<tr >'+
            //radio
            
            '<td class="body_td" id="typeName_'+data['body']['result']+'"  height="46px">'+$('#bytit1').val()+'</td>'
            if(isFirst){
              html += '<td id="typetf_'+data['body']['result']+'" class="body_td true">是</td>';
            }else{
              html += '<td id="typetf_'+data['body']['result']+'" class="body_td false">否</td>';
            };
            if(isMust){
              html += '<td id="typetf_'+data['body']['result']+'" class="body_td true">是</td>';
            }else{
              html += '<td id="typetf_'+data['body']['result']+'" class="body_td false">否</td>';
            };
              html += '<td class="body_td showdetail"  onclick="showbydetails('+data['body']['result']+')">'+'查看详情'+'</td>'+"</tr>";
              //html += '<td class="body_td showdetail"  onclick="showbydetails('+$('input[name=typeId]').val()+')">'+'查看详情'+'</td>'+"</tr>";
            $('#adminTbody').append(html);
            $(".jlbgcs").val($(".jlbgcs").val()*1+1);
            $(".byxmid").val(data['body']['result']);
            
          }
        })

      }else{
        alert('项目名称重复')
      }
      
    }
  }else{
    
    alert('添加大项目名称')
  }
}



//修改大项
var isFirst;
var isMust;
function bybaocun11(){

  if($("#checkin8").is(":checked")==false){
    isFirst = 1
  }else{
    isFirst = 0
  }
  if($("#checkin9").is(":checked")==false){
    isMust = 1
  }else{
    isMust = 0
  }
  $.ajax({
    type:"post",
    //url:"http://localhost:8080/changfa_system/maintenanceManualType/update.do" ,
    url:ip_path+"/changfa_system/maintenanceManualType/update.do",
    data:{
      token: $(window.parent.document).find("input[name='token']").val(),
      typeName:$('#procontent').val(),
      order:$(".xiugaidaxiang").val(),
      isFirst:isFirst,
      isMust:isMust,
      typeId:typeId,
    },
    dataType:"json",
    success:function (data) {
      //console.log(data)

      $(".xiugaidaxiang").val($(".xiugaidaxiang").val()*1+1);
    }

  })
  
}

//删除大项



//添加小项
var promingcheng;
function smpro(event){
  promingcheng = $('#xmmc').val();
  let t=1;

  if($('.byxmid').val() ==''){
    alert('输入大项目名称');
    $("#addsmallprocess").hide();
  }else if($('#xmmc').val() ==''){
    alert('输入项目名称');
    $("#addsmallprocess").hide();
  }else if($('#xmnr').val() ==''){
    alert('输入项目内容');
    $("#addsmallprocess").hide();
  }else {
    $('#sminput span').each(function(){
      if(promingcheng == $(this).html()){
      t = 2;
  }
  })
  if(t==1){
    let xmmid = $(event).attr("data-id");
    let xmmorderid = $(event).attr("data-orderid");
    let yname = $(event).attr("data-name");
    if(xmmid != 0) {
      $.ajax({
        type:"post",
        
        url:ip_path+"/changfa_system/maintenanceManualItem/update.do",
        dataType : "json",
        data:{
          token: $(window.parent.document).find("input[name='token']").val(),
          order:$(".jlbgcs11").val(),
          itemName:$('#xmmc').val(),
          itemDetail:$('#xmnr').val(),
          order:xmmorderid,
          itemId:xmmid  
      },
      success:function(data){
        $('#sminput span').each(function(){
          if($(this).html() == yname) {
            $(this).remove();
          }
        })
        $('#sminput').append(
          '<span class="xl_item" ondblclick="xmscsj(this)" data-id='+xmmid+' onclick="xmsc(this)">'+ $('#xmmc').val() +'</span>'
        )
        $("#addsmallprocess").hide();
        $('#xiaoxiangdd').css('marginLeft','455px');
        $('#xmmc').val('');
        $('#xmnr').val('');
        $('#xiaoxiangdd').css('display','block');
        $(".jlbgcs11").val($(".jlbgcs11").val()*1+1);
      }
      
      })
    } else {
      if($('input[name=typeId]').val()) {
        typeId = $('input[name=typeId]').val() 
      }
      $.ajax({
        type:"post",
        //http://test.app.changfanz.net:3589/changfa_system/maintenanceManualItem/insert.do?
        url:ip_path+"/changfa_system/maintenanceManualItem/insert.do",
        dataType : "json",
        data:{
          token: $(window.parent.document).find("input[name='token']").val(),
          order:$(".jlbgcs11").val(),
          itemName:$('#xmmc').val(),
          itemDetail:$('#xmnr').val(),
          typeId:typeId  
      },
      success:function(data){
        //console.log(data)
        $('#sminput').append(
          '<span class="xl_item" ondblclick="xmscsj(this)" data-id='+data['body']['result']+' onclick="xmsc(this)">'+ $('#xmmc').val() +'</span>'
        );
        $("#addsmallprocess").hide();
        $('#xiaoxiangdd').css('marginLeft','455px');
        $('#xmmc').val('');
        $('#xmnr').val('');
        $('#xiaoxiangdd').css('display','block');
        $(".jlbgcs11").val($(".jlbgcs11").val()*1+1);
      }
      
      })
    }
      $(".tflse123").attr("data-id",0);
      $(".tflse123").attr("data-orderid",0);
      $(".tflse123").attr("data-name",0);
  }else{
    alert('项目名称重复');
    $("#addsmallprocess").hide();

  }
}
  }




//添加保养项目
function addxiangmu(){
  $('.byskip').css('display','block');
  $('.btnzengjia').css('display','none');
  $("#bybaocun").attr("onClick","bybaocun()");
  $('.shijiansc').css('display','none')
}
var typeName;
//var maintenanceId;
var isFirst;
var isMust;
function bysave1(){
 // maintenanceId = $('#bytit1').val();
  typeName = $('#procontent').val();
  isFirst = $("input[name='tableType']:checked").val();
  isMust = $("input[name='tableType']:checked").val() 
  if($('#bytit1').val() == ''){
    alert('请填写大项目名称')
  }else if($('#sminput').html()==''){
    alert('请添加小项目的名称及内容')
  }else if($('#timeinput').html()==''){
    alert('添加保养时间')
  }else{
    $.ajax({
      type:"post",
      url:ip_path +"/changfa_system/maintenanceManualType/insert.do",
      data:{
        token: $(window.parent.document).find("input[name='token']").val(),
        typeName:typeName,
        maintenanceId:byid,
        order:$(".jlbgcs12").val(),
        isFirst:isFirst,//是否首保
        isMust:isMust//是否必做
      },
      dataType:"json",
      success:function (data) {
        if(isMust!=''){
          $('#ftchoose').text('是')
        }else{$('#ftchoose').text('否')}
        //console.log(data)
        $('#adminTbody').append(
          '<tr>'+
              '<td class="body_td" height="46px" id="mingcheng">'+typeName+'</td>'+
              '<td class="body_td false" id="ftchoose">'+'</td>'+
              '<td class="body_td showdetail" onclick="showbydetails()">'+'查看详情'+'</td>'+
          '</tr>'

        )
        $(".jlbgcs").val($(".jlbgcs").val()*1+1);
      }
    })
  }
}

//删除保养项目
function shanchuxiangmu(){
  $.ajax({
    type:"post",
    url:ip_path +"/changfa_system/maintenanceManualType/delete.do",
    data:{
      token: $(window.parent.document).find("input[name='token']").val(),
      typeId:typeId,
    },
    dataType:"json",
    success:function (data) {
      
    }
  })
}

  //添加保养时间
  var timeId;
  //var typeId ;
  var workHour;
function addtime(){

  $('#addprocesstime').css('display','block');
  $('.shijiansc').show();
  $('#addtime').hide();
        //获取时间
        //var typeId = $('#bytit1');
        $.ajax({
            type:"get",
            url:ip_path+"/changfa_system/maintenanceManualTime/list.do",
            dataType : "json",
            data:{
                token: $(window.parent.document).find("input[name='token']").val(),
                maintenanceId:byid,
            },
            success:function(data){
                //console.log(data)
                $("#process_shijian").append("<option value='0'>请选择</option>");
                $("#process_shijian").append("<option value='全部'>全部</option>");
                for(var i=0;i<data['body']['result']['length'];i++){
                    //typeId = data['body']['result'][i]['typeId'];
                    workHour = data['body']['result'][i]['workHour'];
                    timeId = data['body']['result'][i]['timeId'];
                    //console.log(timeId)
                    $("#process_shijian").append("<option data-timeid="+data['body']['result'][i]['timeId']+" data-order='"+ data['body']['result'][i]['order'] +"' data-mid='"+ data['body']['result'][i]['maintenanceId'] +"' value='"+ data['body']['result'][i]['timeId'] +"'>"+data['body']['result'][i]['workHour']+"</option>");
                }
            }
        })
                //弹框添加保养时间
                var time;
                $("#process_shijian").off("change");
                $('#process_shijian').change(function(){
                  
                  if(typeof(typeId) == "undefined") {
                    var typeId = $("input[name='typeId']").val();// 大项的id
                  }
                  var sfqx = $(this).val();
                  if(sfqx == "全部") {
                    var spanname = "";
                    $('#timeinput span').each(function(){
                      if(spanname == "") {
                        spanname = $(this).html();
                      } else {
                        spanname = spanname+","+$(this).html();
                      }
                    })
                    $("#process_shijian option").each(function(){
                      if($(this).html() != "请选择" && $(this).html() != "全部"){
                    　　var sear=new RegExp($(this).html());
                    　　if(!sear.test(spanname)){
                          let ordersj_id = $(this).attr("data-order");
                          let ordersj_mid = $(this).attr("data-mid");
                          let time_id = $(this).attr("data-timeid");
                          let timeId = $(this).val();
                          let spanhtml = $(this).html();
                      　　 $.ajax({
                              type:'post',
                              url:ip_path +"/changfa_system/maintenanceManualTypeTime/insert.do",

                              dataType:"json",
                              data:{
                                  token: $(window.parent.document).find("input[name='token']").val(),
                                  typeId:typeId,
                                  timeId:timeId
                              },
                              success:function(data){
                                //console.log(data)
                                  $('#timeinput').append(
                                      '<span class="xl_item" data-timeid='+time_id+' data-orderid='+ordersj_id+' data-mid='+ordersj_mid+' style="padding-left:0;" onclick="delproxlhour(this)">'+ spanhtml +'</span>'
                                  )
                                  
                              }
                            })
                    　　}
                      }
                    })
                  } else {
                      time = $('#process_shijian').find("option:selected").text();
                      let ordersj_id = $('#process_shijian').find("option:selected").attr("data-order");
                      let ordersj_mid = $('#process_shijian').find("option:selected").attr("data-mid");
                      let time_id = $('#process_shijian').find("option:selected").attr("data-timeid");
                      let t = 1;
                      $('#timeinput span').each(function(){
                          if(time == $(this).html()){
                          t = 2;
                      }
                      })
                      if(t==1){
                        //alert('123')
                          $.ajax({
                          type:'post',
                          url:ip_path +"/changfa_system/maintenanceManualTypeTime/insert.do",

                          dataType:"json",
                          data:{
                              token: $(window.parent.document).find("input[name='token']").val(),
                              typeId:typeId,
                              timeId:$('#process_shijian').find("option:selected").val()
                          },
                          success:function(data){
                            //console.log(data)
                              $('#timeinput').append(
                                  '<span class="xl_item" data-timeid='+time_id+' data-orderid='+ordersj_id+' data-mid='+ordersj_mid+' style="padding-left:0;" onclick="delproxlhour(this)">'+ $('#process_shijian option:selected').html() +'</span>'
                              )
                              
                          }
                          })
                      }else{
                          alert('时间重复不能添加')
                      }  
                  } 
                })
}


/**
 * 保养项目-查看详情
 * */
function showbydetails(event) {
  $('.shijiansc').hide();
  $('#xiaoxiangdd').hide();
  $.ajax({
    type:"get",
    url: ip_path + "/changfa_system/maintenanceManualType/get.do?typeId="+event,
    data:{
      token:$(window.parent.document).find("input[name='token']").val()
    },
    dataType:"json",
    success:function (data) {
      //console.log(data)
      //改变添加按钮事件
      $('#bybaocun').attr('onclick','fxTest()');
      //展示弹框
      $('.byskip').css('display','block');
      //项目编号
      $('input[name=typeId]').val(data['body']['result']['typeId']);
      $('.byxmid').val(data['body']['result']['typeId']);
      //大项目名称
      $('#bytit1').val(data['body']['result']['typeName']);
      //必做
      $('#checkin8').attr('checked',data['body']['result']['isFirst']?true:false);
      //首保
      $('#checkin9').attr('checked',data['body']['result']['isMust']?true:false);
    
      
    }
  })
  
   //获取小项目 n个
  $.ajax({
    type:"get",
    url: ip_path + "/changfa_system/maintenanceManualItem/list.do",
    data:{
      token: $(window.parent.document).find("input[name='token']").val(),
      typeId:event,
    },
    dataType:"json",
    success:function (data) {
      //console.log(data)
      for(i=0;i < data['body']['result'].length;i++){
        $('#sminput').append(
          '<span class="xl_item" ondblclick="xmscsj(this)" onclick="xmsc(this)" data-id='+data['body']['result'][i]['itemId']+' style="">'+ data['body']['result'][i]['itemName']+'</span>'
          )
      }
      
    }

  })
   //获取时间
  $.ajax({
    type:"get",
    url: ip_path + "/changfa_system/maintenanceManualTypeTime/list.do",
    data:{
      token: $(window.parent.document).find("input[name='token']").val(),
      typeId:event,
    },
    dataType:"json",
    success:function (data) {
      //console.log(data)
      for(i=0;i < data['body']['result'].length;i++){ 
        $('#timeinput').append(
          '<span onclick="delproxlhour(this)" data-orderid=0 data-mid='+event+'  class="xl_item" style="text-indent:0px;">'+ data['body']['result'][i]['workHour']+'</span>'
          
        )
      }
      
    }

  })

  //return false;
}
function fxTest(){
  if(typeof(typeId) == "undefined") {
    var typeId = $("input[name='typeId']").val();//获取typeid 大项的id
  }
  
var typeName = $("#bytit1").val();
  
let isMust = $("#checkin9").is(':checked');//必做
let isFirst = $("#checkin8").is(':checked');//首保
if(isMust) {
  isMust = 1;
} else {
  isMust = 0;
}
if(isFirst) {
  isFirst = 1;
} else {
  isFirst = 0;
}
if(typeName!=''){
  $.ajax({
    type:"post",
    url: ip_path + "/changfa_system/maintenanceManualType/update.do",
    data:{
      token: $(window.parent.document).find("input[name='token']").val(),
      typeId:typeId,
      typeName:typeName,
      order:$(".paixu").val(),
      isFirst:isFirst,
      isMust:isMust

    },
    dataType:"json",
    success:function (data) {
           $('#typeName_'+typeId).html(typeName);
           //必做
           if(isMust == 1) {
            $('#typetf1_'+typeId).html('是');
            $('#typetf1_'+typeId).removeClass("false");
            $('#typetf1_'+typeId).addClass("true");
            
           } else {
            $('#typetf1_'+typeId).html('否');
            $('#typetf1_'+typeId).removeClass("true");
           }
           if(isFirst == 1) {
            $('#typetf_'+typeId).html('是');
            $('#typetf_'+typeId).removeClass("false");
            $('#typetf_'+typeId).addClass("true");
            
           } else {
            $('#typetf_'+typeId).html('否');
            $('#typetf_'+typeId).removeClass("true");
           }
           window.location.reload();
           
      //首保
      // $('#checkin9').attr('checked',data['body']['result']['isFirst']?true:false)

      }
    })

}else{
  alert('输入大项名称')
}
  
}




function bysave(){
  window.open("maintainPlanNew.html", "_self");
  $('#byname') = $('#jihuaname').text();
}

//预览表格
function ajax_cf_serverMyl() {
  $.ajax({
    type: "get",
    url: ip_path + "/changfa_system/maintenanceInfo/page.do",
    data: {
      token: $(window.parent.document).find("input[name='token']").val(),
      pageNum: currentPage,
      pageSize: 14,
      //province: $("#taskAddress option:selected").text(),
      //city: "",
      //lineNum: $("#taskLine option:selected").val(),
      //chooseItem: $("#cfServer_item option:selected").val(),
      //itemCont: $("#cfServer_info").val(),
      //status: $("#status option:selected").val()
    },
    dataType: "json",
    success: function (data) {
      //console.log(data)
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2" height="50px" colspan="4">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          $("#adminTbody").append(
            "<tr id =" + data['body']['result']['data'][i]['createUserId'] + ">" +
            '<td  class="td2" id="jihuaname" height="33">' + data['body']['result']['data'][i]['name'] + '</td>' +
            '<td class="td2">' + data['body']['result']['data'][i]['createTime'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['updateTime'] + '</td>' +
            //'<td class="td2" ><img src="' + on_off_path + '" class="mg-t5" onclick="toogle_cfServerStatus(this)"></td>' +
            '<td class="td2" style="color:#76E9D2">'+'<span style="display: inline-block;vertical-align: middle;">'+
            '<a onclick="bysaveyulan('+data['body']['result']['data'][i]['maintenanceId']+')" style="cursor:pointer">'+'预览&nbsp;&nbsp;'+'</a>'+'</span>'+'</td>'+
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}
//保养预览
function bysaveyulan(param){
  $(window.parent.document).find("input[name='yulan']").val(param);
  window.open("./bytable.html", "_self");

}
//function bysaveyulan(param){
//  $(window.parent.document).find("input[name='yulan']").val(param.parentNode.parentNode.id);
//  window.open("./bytable.html", "_self");

//}

//查看详情表格
function ajax_cf_serverMdetail() {
  $.ajax({
    type: "get",
    url: ip_path + "/changfa_system/maintenanceInfo/page.do",
    data: {
      token: $(window.parent.document).find("input[name='token']").val(),
      pageNum: currentPage,
      pageSize: 14,
    },
    dataType: "json",
    success: function (data) {
      console.log(data)
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2" height="50px" colspan="4">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        var on_off_path;
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          if (data['body']['result']['data'][i]['state'] == 0) {
            on_off_path = "http://app.changfanz.net:3588/changfa_file/off.png";
          } else {
            on_off_path = "http://app.changfanz.net:3588/changfa_file/on.png";
          }
          $("#adminTbody").append(
            "<tr id =" + data['body']['result']['data'][i]['createUserId'] + ">" +
            '<td  class="td2" height="33" >' + data['body']['result']['data'][i]['name'] + '</td>' +
            '<td  class="td2">' + data['body']['result']['data'][i]['createTime'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['updateTime'] + '</td>' +
            //'<td class="td2" ><img src="' + on_off_path + '" class="mg-t5" onclick="toogle_cfServerStatus(this)"></td>' +
            '<td class="td2" style="color:#76E9D2">'+'<span style="display: inline-block;vertical-align: middle;">'+
            '<a onclick="watchdetails('+data['body']['result']['data'][i]['maintenanceId']+')" style="cursor:pointer;">'+'查看详情&nbsp;&nbsp;'+'</a>'+'</span>'+'<img src="'+ on_off_path + '" data-id="'+data['body']['result']['data'][i]['maintenanceId']+'" data-status="'+data['body']['result']['data'][i]['state']+'"  onclick="toogle_cfServerState(this)" style="width:30px;vertical-align: middle;">'+'</td>'+
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

  //删除小项
function xmsc(event,id){
  if($(event).hasClass('xl_itemactive')){
    $(event).removeClass('xl_itemactive');
    $(event).attr('id','');
    $('#xiaoxiangdd').hide();
  }else{
    $(event).addClass('xl_itemactive');
    $(event).attr('id','active');
    $('#xiaoxiangdd').show();
    $('#xiaoxiangdd').css('marginLeft','456px');
  }
  //$(event).css('color','#1ABC9C').siblings('color','rgba(102,102,102,1);');
  //$(event).attr('id','active');
  //$('#xiaoxiangdd').show();
  //$('#xiaoxiangdd').css('marginLeft','208px');

}

//小项添加完成以后编辑
function xmscsj (event) {
  let id = $(event).attr('data-id');
  $.ajax({
    type:"get",
    url:ip_path + "/changfa_system/maintenanceManualItem/get.do",
    dataType: "json",
    data:{
      token: $(window.parent.document).find("input[name='token']").val(),
      itemId:id
    },
    success: function (data) {
      //console.log(data);
      $("#addsmallprocess").show();
      $("#xmmc").val(data['body']['result']['itemName']);
      $("#xmnr").val(data['body']['result']['itemDetail']);
      $(".tflse123").attr("data-id",data['body']['result']['itemId']);
      $(".tflse123").attr("data-orderid",data['body']['result']['order']);
      $(".tflse123").attr("data-name",data['body']['result']['itemName']);
    }

  })
}
  function delxiaoxiang(){
    let hourid = $('#sminput').children("#active").attr("data-id");
    $.ajax({
      type:"post",
      url:ip_path + "/changfa_system/maintenanceManualItem/delete.do",
      dataType: "json",
      data:{
        token: $(window.parent.document).find("input[name='token']").val(),
        itemId:hourid
      },
      success: function (data) {
        if(data['head']['code'] == 200){
          $('#sminput').children("#active").remove()
        }
      }

    })

  }

//计划详情-查看详情
function watchdetails(param){
  $(window.parent.document).find("input[name='jihuasaw']").val(param);
  window.open("./maintainPlanNewdetails.html", "_self");
}

function toogle_cfServerState(event) {
  let stat=$(event).attr("data-status");
  if(stat==1) {
    stat = 0;
  } else {
    stat=1;
  }
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/maintenanceInfo/update.do",
    data: {
      token: $(window.parent.document).find("input[name='token']").val(),
      state:stat,
      maintenanceId:$(event).attr("data-id")
    },
    success: function (data) {
      console.log(stat);
      if(data['head']['code'] == 200){
        $(event).attr("data-status",stat);
        if(stat == 0) {
          $(event).attr("src","http://app.changfanz.net:3588/changfa_file/off.png");
        }else {
          $(event).attr("src","http://app.changfanz.net:3588/changfa_file/on.png");
        }
      }
    }
  })
 
}


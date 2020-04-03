function pageSplit() {
  var tempStr = "当前第<span style='color: red'>" + currentPage + "</span>页&nbsp;/&nbsp;共<span style='color: red'>" + totalPage + "</span>页&nbsp;/&nbsp;共<span style='color: red'>" + totalData + "</span>条";
  document.getElementById("barcon1").innerHTML = tempStr;
}

function hideOrShow() {
  if (currentPage == 1) {
    $("#firstPage").attr("disabled", true);
    $("#prePage").attr("disabled", true);
  } else {
    $("#firstPage").removeAttr("disbled");
    $("#prePage").removeAttr("disabled");
  }
  if (currentPage == totalPage) {
    $("#lastPage").attr("disabled", true);
    $("#nextPage").attr("disabled", true);
  } else {
    $("#lastPage").removeAttr("disbled");
    $("#nextPage").removeAttr("disabled");
  }
}



function ajax_threePacks(){
  $(window.parent.document).find("input[name='getxqid']").val('');//页面打开的时候清空
  $.ajax({
    type:"get",
    url: ip_path + "/changfa_system/threeGuarantees/page.do",
    data:{
      token: $(window.parent.document).find("input[name='token']").val(),
      begin_time:$('#date_start_rnm').val(),
      end_time:$('#date_end_rnm').val(),
      lineNum:$('#rep_info_rnm').val(),
      type:$("#leixing option:selected").val(),
      status:$("#status option:selected").val(),
      factoryNum:$('#czNum').val(),
      pageNum:currentPage,
      pageSize:14

    },
    dataType:"json",
    success:function (data) {
      //console.log(data)
      if (data['body']['result']['data'] != '') {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        var on_off_path;
        var status;
        var type;
        $("#adminTbody").empty()
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          if (data['body']['result']['data'][i]['status'] == 0) {
            on_off_path = "http://app.changfanz.net:3588/changfa_file/off.png";
          } else {
            on_off_path = "http://app.changfanz.net:3588/changfa_file/on.png";
          }
          if(data['body']['result']['data'][i]['type']==1){
            type='常规'
          }else{
            type='特殊'
          }
          if(data['body']['result']['data'][i]['status']==1){
            status='启用'
          }else{
            status='禁用'
          }
          //$('#getxqid').val(data['body']['result']['data'][i]['id'])
          $("#adminTbody").append(
            '<tr data-id="'+data['body']['result']['data'][i]['id']+'">'+
                '<td class="td2" height="33">'+data['body']['result']['data'][i]['number']+'</td>'+
                '<td class="td2" height="33">'+data['body']['result']['data'][i]['name']+'</td>'+
                '<td class="td2" >'+data['body']['result']['data'][i]['createTime']+'</td>'+
                '<td class="td2" >'+data['body']['result']['data'][i]['createUserName']+'</td>'+
                '<td class="td2" >'+type+'</td>'+
                '<td class="td2" >'+status+'</td>'+
                '<td class="td2" >'+'<img src="'+on_off_path+'" class="mg-t5" onclick="toogle_autoRuleStatus(this)">'+'</td>'+
                '<td class="td2" style="color:#1ABC9C;cursor:pointer;" onclick="getdetails1(this)">'+'查看'+'</td>'+
                '<td class="td2" style="color:#1ABC9C;cursor:pointer;" onclick="xiugai(this)">'+'编辑'+'</td>'+
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }else{
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2" height="50px" colspan="9">未查到相关信息</td>'
        );
        currentPage = 1;
        totalPage = 1;
        totalData = 1;
        document.getElementById("barcon1").innerHTML = "";
      }
    }
  })

}
//查看详情
function getdetails1(event){
  $(window.parent.document).find("input[name='getxqid']").val($(event).parent().attr('data-id'));
  if($(event).prev().prev().text()=='启用'){
    $(window.parent.document).find("input[name='tootltkg']").val(1);
  }else {
    $(window.parent.document).find("input[name='tootltkg']").val(0);
  }
  var type;
  if($(event).prev().prev().prev().text()=='常规'){
    type = 1;
    window.open("changguiDetails.html","_self");
    
    ajax_getbianji1();
    //window.location.reload();
  }else if($(event).prev().prev().prev().text()=='特殊'){
    type = 2;
    window.open("teshuEdit1.html","_self");   
    //window.location.reload();
  }

  
  
}




function editCreate(){
  $('.byskip').css('display','block');
}
function byclose(){
  $('.byskip').hide()
}
function tijiao() {
  var type;
  if($('#changgui').hasClass('choseactive')){
    type = 1;
    window.open("changgui.html","_self");
  }else if($('#teshu').hasClass('choseactive')){
    type = 2;
    window.open("teshu.html","_self");
    
  }
  
}



//常规政策提交
  function tijiaosave(){
    //alert($(window.parent.document).find("input[name='getxqid']").val())
    //return false;
    if($(window.parent.document).find("input[name='getxqid']").val()!=''){
      //修改
      $.ajax({
        type:"post",
        url: ip_path + "/changfa_system/threeGuarantees/update.do",
        data:{
          token: $(window.parent.document).find("input[name='token']").val(),
          name:$('#name').val(),
          lineNum:$('#lineNum1 option:selected').val(),
          seriesNum:$('#seriesNum1 option:selected').val(),
          days:$('#timeline').val(),
          type:1,
          status:$(window.parent.document).find("input[name='tootltkg']").val(),
          id:$(window.parent.document).find("input[name='getxqid']").val(),
        },
        dataType:"json",
        success:function (data) {
          alert('修改成功')
          //ajax_threePacks();
          window.open("threePackspolicy.html","_self");
          $(window.parent.document).find("input[name='getxqid']").val('');
        }
      })

    }else{
      //增加
      if($('#name').val()==''){
        alert('政策名称不能为空')
      }else if($('#cpline').val()==''){
        alert('产品线不能为空')
      }else if($('#xlline').val()==''){
        alert('产品系列不能为空')
      }else if($('#timeline').val()==''){
        alert('请输入三包期限')
      }else{
        $.ajax({
          type:"post",
          url: ip_path + "/changfa_system/threeGuarantees/insert.do",
          data:{
            token: $(window.parent.document).find("input[name='token']").val(),
            name:$('#name').val(),
            lineNum:$('#lineNum option:selected').val(),
            seriesNum:$('#seriesNum option:selected').val(),
            days:$('#timeline').val(),
            type:1
          },
          dataType:"json",
          success:function (data) {
            if(data['head']['code']==200){
              alert('添加成功')
              //ajax_threePacks();
              window.open("threePackspolicy.html","_self");
              $(window.parent.document).find("input[name='getxqid']").val('');
            }else{
              alert(data['head']['message'])
            }
            
          }
        })
    
      }
      
    }
    
    
  }

//获取临时id
function ajax_getid(){
  $.ajax({
    type:'get',
    url:ip_path+ "/changfa_system/threeGuarantees/key/get.do",
    dataType:"json",
    data:{
      token: $(window.parent.document).find("input[name='token']").val(),
      id:$(window.parent.document).find("input[name='getxqid']").val(),
    },
    success:function(data){
      //console.log(data)
      $('#getid').val(data['body']['result']);//特殊政策列表中临时id  
      ajax_seachqd();   
    }
  })
}

//列表查询
var barCode;
var factoryNum;
var dealerName;
var dealerNum;
var buyStartTime;
var buyEndTime ;
var transferStartTime;
var transferEndTime;
function ajax_seach2(){
  currentPage = 1;
  ajax_autoDisM1();
}

function confirmpages() {
  $(window.parent.document).find("input[name='pages']").val($('#yeshu').val());
  //alert($(window.parent.document).find("input[name='pages']").val());
  ajax_autoDisM1();
}


function ajax_autoDisM1() {
  //车辆查询
  if($('#saleM_info1').val()!=''){
    if ($('#saleM_item1').val() == 'company') {
      factoryNum = $('#saleM_info1').val();
      barCode=''
    } else if ($('#saleM_item1').val() == 'workNum') {
      barCode = $('#saleM_info1').val();
      factoryNum=''
    }
  }else{
    factoryNum=''
    barCode=''
  }
  //经销商
  if($('#saleM_infojxs').val()!=''){
    if ($('#jxshang').val() == 'name') {
      dealerName = $('#saleM_infojxs').val();
      dealerNum=''
    } else if ($('#jxshang').val() == 'Number') {
      dealerNum = $('#saleM_infojxs').val();
      dealerName=''
    }

  }else{
    dealerNum=''
    dealerName=''
  }
  //日期
  if($('#date_start_uam').val()!='' && $('#date_end_uam').val()!=''){
    if ($('#timerq').val() == 'fytime') {
      transferStartTime = $('#date_start_uam').val();
      transferEndTime = $('#date_end_uam').val();
      buyStartTime=''
      buyEndTime=''
    } else if ($('#timerq').val() == 'xstime') {
      buyStartTime = $('#date_start_uam').val();
      buyEndTime = $('#date_end_uam').val();
      transferStartTime=''
      transferEndTime=''
    }else if($('#timerq').val() == 'sctime'){
      buyStartTime = '';
      buyEndTime = '';
      transferStartTime=''
      transferEndTime=''
    }

  }else{
      buyStartTime = '';
      buyEndTime = '';
      transferStartTime=''
      transferEndTime=''
  }
  /*
  if($("#seriesNum option:selected").val()=='601A'){
    seriesNum = ''
  }else{
    seriesNum = $("#seriesNum option:selected").val()
  }
  if($("#modelNum option:selected").val()=='60102004'){
    modelNum = ''
  }else{
    modelNum = $("#modelNum option:selected").val()
  }
  if($("#lineNum option:selected").val()=='601'){
    lineNum = ''
  }else{
    lineNum = $("#lineNum option:selected").val()
  }
  */

  $.ajax({
    type: "get",
    async: false,
    url: ip_path + "/changfa_system/threeGuaranteesDetail/machine/page.do",
    data: {
      token: $(window.parent.document).find("input[name='token']").val(),
      barCode:barCode,
      factoryNum:factoryNum,
      seriesNum:$("#seriesNum option:selected").val(),
      modelNum:$("#modelNum option:selected").val(),
      lineNum:$("#lineNum option:selected").val(),
      dealerName:dealerName,
      dealerNum:dealerNum,
      province:$('#shenfen').val(),
      buyStartTime:buyStartTime,
      buyEndTime:buyEndTime,
      transferStartTime:transferStartTime,
      transferEndTime:transferEndTime,
      pageNum: currentPage,
      pageSize: $(window.parent.document).find("input[name='pages']").val(),
    },
    dataType: "json",
    success: function (data) {
      //console.log(data)
      if (data['body']['result']['data'] == '') {
        $("#tablelb").empty();
        $("#tablelb").append(
          "<tr align='center'>" +
          "<td class='td2' colspan='7' height='50px'>未查到相关信息</td>" +
          "</tr>"
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];

        $("#tablelb").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {

          $("#tablelb").append(
            
            "<tr align='center' data-id =" + data['body']['result']['data'][i]['machineId'] + ">" + 
            "<td class='td2' height='33'>" + data['body']['result']['data'][i]['factoryNum'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['lineName'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['seriesName'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['modelName'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['dealerName'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['province'] + "</td>" +
            '<td class="td2" height="33" style="text-align:center;">'+
            '<input class="radio_type" type="radio" name="'+'radio'+[i]+'" id="'+'radio'+[i]+'" onclick="toogleradio(this)"/> '
            +'</td>'+
            "</tr>"
            
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}



//特殊政策提交

function tijiaoteshu(){
  //alert($(window.parent.document).find("input[name='getxqid']").val())
  /*
  let Ids = [];
  $('#qingdanbody tr td .radio_type').each(function(){
    if($(this).attr("checked")=="checked"){
      Ids.push($(this).parent().parent().attr('id'))
    }
  }) */

  if($(window.parent.document).find("input[name='getxqid']").val()!=''){
    
    //id存在，修改
    $.ajax({
      type:"post",
      url: ip_path + "/changfa_system/threeGuarantees/update.do",
      data:{
        token: $(window.parent.document).find("input[name='token']").val(),
        name:$('#mingcheng').val(),
        type:2,
        days:$('#riqi').val(),
        status:$(window.parent.document).find("input[name='tootltkg']").val(),
        id:$(window.parent.document).find("input[name='getxqid']").val(),
        tempraryId:$('#getid').val(),
      },
      dataType:"json",
      success:function (data) {
        alert('修改成功');
        window.open("threePackspolicy.html","_self");
        //清空
        $(window.parent.document).find("input[name='getxqid']").val('');
        //$(window.parent.document).find("input[name='pages']").val('');

      }
    })

  }else{
    //id不存在，增加
      if($('#mingcheng').val()==''){
        alert('政策名称不能为空')
      }else if($('#riqi').val()==''){
        alert('延保天数不能为空')
      }else{
        $.ajax({
          type:"post",
          url: ip_path + "/changfa_system/threeGuarantees/insert.do",
          data:{
            token: $(window.parent.document).find("input[name='token']").val(),
            name:$('#mingcheng').val(),
            days:$('#riqi').val(),
            type:2,
            tempraryId:$('#getid').val(),
          },
          dataType:"json",
          success:function (data) {
            alert('添加成功');
            window.open("threePackspolicy.html","_self");
            $(window.parent.document).find("input[name='getxqid']").val('');
            //$(window.parent.document).find("input[name='pages']").val('');
            //ajax_threePacks();
            //window.open("threePackspolicy.html","_self");
          }
        })
    
      }
  
    
  }
  
  
  
}



function toogle_autoRuleStatus(event) {
  var id=$(event).parent().parent().attr('data-id')
  var status;
  if(event.src == "http://app.changfanz.net:3588/changfa_file/on.png"){
      status = 0;
  }else {
      status = 1;
  }
  $.ajax({
      type : "post",
      url : ip_path + "/changfa_system/threeGuarantees/update.do",
      data:{
        token: $(window.parent.document).find("input[name='token']").val(),
        //status:$("#status option:selected").val(),
        status:status,
        id:id,
  
      },
      dataType : "json",
      success : function (data) {
          if(data['head']['code'] == 200){
              event.src == "http://app.changfanz.net:3588/changfa_file/off.png" ? event.src = "http://app.changfanz.net:3588/changfa_file/on.png" : event.src = "http://app.changfanz.net:3588/changfa_file/off.png";
          }else{
              alert(data['head']['message']);
          }
      }
  });
}

function queryRepairNeed(){
  currentPage = 1;
  ajax_threePacks();
}





function choose(event){
  //alert(event.src)
  $(event).addClass("choseactive").siblings().removeClass("choseactive");
}

function selectallqd(){
  $("#qingdanbody tr td .radio_type").each(function(){
    $(this).attr("checked",true);
    $(this).addClass("radio_types");
    $('#selectallqd').text('取消');
    $('#selectallqd').attr('onclick','quxiao1()');
  })
}
function quxiao1(){
  $("#qingdanbody tr td .radio_type").each(function(){
    $(this).attr("checked",false);
    $(this).removeClass("radio_types");
    $('#selectallqd').text('全选');
    $('#selectallqd').attr('onclick','selectallqd()');
  })

}
//全选
function selectallliebiao(){
  $("#tablelb tr td .radio_type").each(function(){
    $(this).attr("checked",true);
    $(this).addClass("radio_types");
    $('#selectall').text('取消');
    $('#selectall').attr('onclick','quxiao()');
  })
}
function quxiao(){
  $("#tablelb tr td .radio_type").each(function(){
    $(this).attr("checked",false);
    $(this).removeClass("radio_types");
    $('#selectall').text('全选');
    $('#selectall').attr('onclick','selectallliebiao()');
  })

}
//选中未选切换
function toogleradio(event){
  if($(event).attr("checked")=="checked"){
    $(event).attr("checked",false);
    $(event).removeClass("radio_types");
  }else{
    $(event).attr("checked",true);
    $(event).addClass('radio_types');
  };
  
}


//添加清单列表
function addCreate(){
  let recordIds = [];//选择的数据
  $('#tablelb tr td .radio_type').each(function(){
    if($(this).attr("checked")=="checked"){
      recordIds.push($(this).parent().parent().attr('data-id'))
    }
  })

  let recordIdsidqd = [];//列表中已存在的数据
  $('#qingdanbody tr td .radio_type').each(function(){ 
      recordIdsidqd.push($(this).parent().parent().attr('data-id'))
  })
  //alert(recordIds);
  //alert(recordIdsidqd);
  //return false;

  if($('#mingcheng').val()!=''){
    if(recordIds !=''){
      if(recordIds!=recordIdsidqd){
        $.ajax({
          type : "post",
          url : ip_path + "/changfa_system/threeGuaranteesDetail/temprary/insert.do",
         // data: JSON.stringify(json),
          dataType : "json",
          data:{
            'token':$(window.parent.document).find("input[name='token']").val(),
            'machineIds':recordIds.join(','),
            'tempraryId':$('#getid').val(),
            'pageNum':currentPage,
            'pageSize':14
          },
          success : function (data) {
            //查询接口
            //console.log(data)
            ajax_getqingd();
            
            $('#tablelb tr td .radio_type').each(function(){
              if($(this).attr("checked")=="checked"){
                $(this).attr("checked",false);
                $(this).removeClass("radio_types");
              }
            })
            $('#selectall').text('全选');
            $('#selectall').attr('onclick','selectallliebiao()');
          }
        })

      }else{
        alert('数据重复')
      }
  
    }else{
      alert('当前没有选择任何内容')
    }

  }else{
    alert('请输入政策名称')
  }
  

}

//删除清单列表
function delCreate(){
  let recordIds = [];
  $('#qingdanbody tr td .radio_type').each(function(){
    if($(this).attr("checked")=="checked"){
      recordIds.push($(this).parent().parent().attr('data-id'))
    }
  })
  $.ajax({
    type : "post",
    url : ip_path + "/changfa_system/threeGuaranteesDetail/temprary/delete.do",
    dataType : "json",
    data:{
      'token':$(window.parent.document).find("input[name='token']").val(),
      'machineIds':recordIds.join(','),
      'tempraryId':$('#getid').val(),
      'pageNum':currentPage_qd,
      'pageSize':14
    },
    success : function (data) {
      //console.log(data)
      ajax_getqingd();
    }
  })
}



var currentPage_qd;
var totalPage_qd;
var totalData_qd;
//查询清单
function ajax_seachqd(){
  let recordIds = [];
  $('#tablelb tr td .radio_type').each(function(){
    if($(this).attr("checked")=="checked"){
      recordIds.push($(this).parent().parent().attr('data-id'))
    }
  })
  if ($('#saleM_itemqd').val() == 'company') {
    factoryNum = $('#saleM_infoqd').val()
    barCode=''
  } else if ($('#saleM_itemqd').val() == 'workNum') {
    barCode = $('#saleM_infoqd').val()
    factoryNum=''
  }else{
    factoryNum=''
    barCode=''
  }
  $.ajax({
    type : "get",
    url : ip_path + "/changfa_system/threeGuaranteesDetail/temprary/page.do",
    dataType : "json",
    data:{
      'token':$(window.parent.document).find("input[name='token']").val(),
      'machineIds':recordIds.join(','),
      'tempraryId':$('#getid').val(),
      'barCode':barCode,
      'factoryNum':factoryNum,
      'pageNum':currentPage_qd,
      'pageSize':14,
    },
    success : function (data) {
      ajax_getqingd();

    }
  })
}
function hideOrShow_qd() {
  if (currentPage_qd == 1) {
    $("#firstPage_qd").attr("disabled", true);
    $("#prePage_qd").attr("disabled", true);
  } else {
    $("#firstPage_qd").removeAttr("disbled");
    $("#prePage_qd").removeAttr("disabled");
  }
  if (currentPage_qd == totalPage_qd) {
    $("#lastPage_qd").attr("disabled", true);
    $("#nextPage_qd").attr("disabled", true);
  } else {
    $("#lastPage_qd").removeAttr("disbled");
    $("#nextPage_qd").removeAttr("disabled");
  }
}

function pageSplit_qd() {
  var tempStr_qd = "当前第<span style='color: red'>" + currentPage_qd + "</span>页&nbsp;/&nbsp;共<span style='color: red'>" + totalPage_qd + "</span>页&nbsp;/&nbsp;共<span style='color: red'>" + totalData_qd + "</span>条";
  
  document.getElementById("barcon1_qd").innerHTML = tempStr_qd;
}

//特殊政策点编辑获取清单列表
function ajax_getqingd(){
  if ($('#saleM_itemqd').val() == 'company') {
    factoryNum = $('#saleM_infoqd').val()
    barCode=''
  } else if ($('#saleM_itemqd').val() == 'workNum') {
    barCode = $('#saleM_infoqd').val()
    factoryNum=''
  }else{
    factoryNum=''
    barCode=''
  }
  $.ajax({
    type:"get",
    url : ip_path + "/changfa_system/threeGuaranteesDetail/temprary/page.do",
    dataType : "json",
    data:{
      
      'token':$(window.parent.document).find("input[name='token']").val(),
      'threeGuaranteesId':$(window.parent.document).find("input[name='getxqid']").val(),
      'tempraryId':$('#getid').val(),
      'barCode':barCode,
      'factoryNum':factoryNum,
      'pageNum':currentPage_qd,
      'pageSize':14,
    },
    success:function (data) {
      $("#qingdanbody").empty();
      //console.log(data)
      if(data['head']['code']==200){
        currentPage_qd = data['body']['result']['pageNum'];
        totalPage_qd = data['body']['result']['pages'];
        totalData_qd = data['body']['result']['total'];
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          $("#qingdanbody").append(
            "<tr align='center' data-id =" + data['body']['result']['data'][i]['machineId'] + ">" + 
              "<td class='td2' >" + data['body']['result']['data'][i]['factoryNum'] + "</td>" +
              "<td class='td2' >" + data['body']['result']['data'][i]['lineName'] + "</td>" +
              "<td class='td2' >" + data['body']['result']['data'][i]['seriesName'] + "</td>" +
              "<td class='td2' >" + data['body']['result']['data'][i]['modelName'] + "</td>" +
              "<td class='td2' >" + data['body']['result']['data'][i]['dealerName'] + "</td>" +
              "<td class='td2' >" + data['body']['result']['data'][i]['province'] + "</td>" +
              '<td class="td2" height="33" style="text-align:center;">'+
              '<input class="radio_type" type="radio" name="'+'radio'+[i]+'" id="'+'radio'+[i]+'" onclick="toogleradio(this)"/> '
              +'</td>'+
            '</tr>'
          );

        }
        pageSplit_qd();
        hideOrShow_qd();
      }else{
        $('#qingdanbody').empty();
        $("#qingdanbody").append(
          '<td class="td2" height="50px" colspan="7">未查到相关信息</td>'
        );
        document.getElementById("barcon1_qd").innerHTML = "";

      }

    }
    
  })

}



//政策编辑
function xiugai(event){
  $(window.parent.document).find("input[name='getxqid']").val($(event).parent().attr('data-id'));
  if($(event).prev().prev().text()=='启用'){
    $(window.parent.document).find("input[name='tootltkg']").val(1);
  }else {
    $(window.parent.document).find("input[name='tootltkg']").val(0);
  }
  var type;
  if($(event).prev().prev().prev().prev().text()=='常规'){
    type = 1;
    window.open("changguiEdit.html","_self");
    ajax_getbianji1();
    //window.location.reload();
  }else if($(event).prev().prev().prev().prev().text()=='特殊'){
    type = 2;
    window.open("teshuEdit.html","_self");   
    //window.location.reload();
  }

}

//操作流水
var currentPage_ls;
var totalPage_ls;
var totalData_ls;
function ajax_liushui(){
  if($(window.parent.document).find("input[name='getxqid']").val()!=''){
    $.ajax({
      type : "get",
      url : ip_path + "/changfa_system/threeGuarantees/history/page.do",
      dataType : "json",
      data:{
        'token':$(window.parent.document).find("input[name='token']").val(),
        'id':$(window.parent.document).find("input[name='getxqid']").val(),
        'pageNum':currentPage_ls,
        'pageSize':14
      },
      success : function (data) {
        //console.log(data)
        currentPage_ls = data['body']['result']['pageNum'];
        totalPage_ls = data['body']['result']['pages'];
        totalData_ls = data['body']['result']['total'];
        $("#adminTbodyls").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          $("#adminTbodyls").append(
            '<tr data-id='+data['body']['result']['data'][i]['id']+'>'+
                '<td class="td2" height="33">'+data['body']['result']['data'][i]['operateTime']+'</td>'+
                '<td class="td2" >'+data['body']['result']['data'][i]['operateUserName']+'</td>'+
                '<td class="td2" style="color:#1ABC9C;cursor:pointer;" onclick="getdetails(this)">'+'查看详情'+'</td>'+  
            '</tr>'
          );

        }
        pageSplit_ls();
        hideOrShow_ls();
      }
    })
  }else{
    $('#adminTbodyls').empty();
    $('#adminTbodyls').append(
      '<td class="td2" height="50px" colspan="3">未查到相关信息</td>'
    )
    document.getElementById("barcon1_ls").innerHTML = "";

  }
  

}


function hideOrShow_ls() {
  if (currentPage_ls == 1) {
    $("#firstPage_ls").attr("disabled", true);
    $("#prePage_ls").attr("disabled", true);
  } else {
    $("#firstPage_ls").removeAttr("disbled");
    $("#prePage_ls").removeAttr("disabled");
  }
  if (currentPage_ls == totalPage_ls) {
    $("#lastPage_ls").attr("disabled", true);
    $("#nextPage_ls").attr("disabled", true);
  } else {
    $("#lastPage_ls").removeAttr("disbled");
    $("#nextPage_ls").removeAttr("disabled");
  }
}

function pageSplit_ls() {
  var tempStr_ls = "当前第<span style='color: red'>" + currentPage_ls + "</span>页&nbsp;/&nbsp;共<span style='color: red'>" + totalPage_ls + "</span>页&nbsp;/&nbsp;共<span style='color: red'>" + totalData_ls + "</span>条";
  
  document.getElementById("barcon1_ls").innerHTML = tempStr_ls;
}


//编辑是获取基本信息（特殊）
function ajax_getbianji(){
  $.ajax({
    type : "get",
    url : ip_path + "/changfa_system/threeGuarantees/get.do",
    dataType : "json",
    data:{
      'token':$(window.parent.document).find("input[name='token']").val(),
      //'id':$('#getxqid').val(),
      'id':$(window.parent.document).find("input[name='getxqid']").val(),
    },
    success : function (data) {
      //console.log(data)
      $('#mingcheng').val(data['body']['result']['name']);
      $('#riqi').val(data['body']['result']['days']);
      
    }
  })

}

//编辑是获取基本信息（常规）
function ajax_getbianji1(){
  $.ajax({
    type : "get",
    url : ip_path + "/changfa_system/threeGuarantees/get.do",
    dataType : "json",
    data:{
      'token':$(window.parent.document).find("input[name='token']").val(),
      //'id':$('#getxqid').val(),
      'id':$(window.parent.document).find("input[name='getxqid']").val(),
    },
    success : function (data) {
      //console.log(data)
      //alert('123');
      //alert($("#seriesNum option:selected").val())
      $('#name').val(data['body']['result']['name']);
      $("#lineNum1").find("option[value = '"+data['body']['result']['lineNum']+"']").attr("selected","selected");
      ajax_getSeriesNum1();
      $("#seriesNum1").find("option[value = '"+data['body']['result']['seriesNum']+"']").attr("selected","selected");
      $('#timeline').val(data['body']['result']['days']);
      
       
      
    }
  })

}


//查看详情
function getdetails(event){
  window.open("teshuDetails.html","_self");
  $(window.parent.document).find("input[name='hisid']").val($(event).parent().attr('data-id'));
  ajax_getdetails();
  
}

//点详情获取基本信息
function ajax_getdetails(){
  $.ajax({
    type:"get",
    url : ip_path + "/changfa_system/threeGuarantees/history/get.do",
    dataType : "json",
    data:{
      'token':$(window.parent.document).find("input[name='token']").val(),
      'id':$(window.parent.document).find("input[name='hisid']").val(),
    },
    success : function (data) {
      $('#mingcheng').val(data['body']['result']['name']);
      $('#riqi').val(data['body']['result']['days']);
      //console.log(data)
      //console.log(data)
    }
  })

}

//操作流水点击详情获取清单

function ajax_getqingddetails(){
  //alert($(window.parent.document).find("input[name='hisid']").val())
  if ($('#saleM_itemqd').val() == 'company') {
    factoryNum = $('#saleM_infoqd').val()
    barCode=''
  } else if ($('#saleM_itemqd').val() == 'workNum') {
    barCode = $('#saleM_infoqd').val()
    factoryNum=''
  }else{
    factoryNum=''
    barCode=''
  }
  $.ajax({
    type:"get",
    url : ip_path + "/changfa_system/threeGuaranteesDetail/page.do",
    dataType : "json",
    data:{
      'token':$(window.parent.document).find("input[name='token']").val(),
      'threeGuaranteesHistoryId':$(window.parent.document).find("input[name='hisid']").val(),
      'barCode':barCode,
      'factoryNum':factoryNum,
      'pageNum':currentPage_qd,
      'pageSize':14,
    },
    success:function (data) {
      $("#qingdanbody").empty();
      //console.log(data)
      if(data['head']['code']==200){
        currentPage_qd = data['body']['result']['pageNum'];
        totalPage_qd = data['body']['result']['pages'];
        totalData_qd = data['body']['result']['total'];
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          $("#qingdanbody").append(
            "<tr align='center' data-id =" + data['body']['result']['data'][i]['machineId'] + ">" + 
              "<td class='td2' >" + data['body']['result']['data'][i]['factoryNum'] + "</td>" +
              "<td class='td2' >" + data['body']['result']['data'][i]['lineName'] + "</td>" +
              "<td class='td2' >" + data['body']['result']['data'][i]['seriesName'] + "</td>" +
              "<td class='td2' >" + data['body']['result']['data'][i]['modelName'] + "</td>" +
              "<td class='td2' >" + data['body']['result']['data'][i]['dealerName'] + "</td>" +
              "<td class='td2' >" + data['body']['result']['data'][i]['province'] + "</td>" +
              '<td class="td2" height="33" style="text-align:center;">'+
              '<input class="radio_type" type="radio" name="'+'radio'+[i]+'" id="'+'radio'+[i]+'" onclick="toogleradio(this)"/> '
              +'</td>'+
            '</tr>'
          );

        }
        pageSplit_qd();
        hideOrShow_qd();
      }else{
        $('#qingdanbody').empty();
        $("#qingdanbody").append(
          '<td class="td2" height="50px" colspan="7">未查到相关信息</td>'
        );
        document.getElementById("barcon1_qd").innerHTML = "";

      }

    }
    
  })

}



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



function ajax_searchcp(){
  ajax_subproduct();
}

//获取产品维护列表
function ajax_subproduct(){
  $(window.parent.document).find("input[name='subproID']").val('');
  $.ajax({
    type:"get",
    url: ip_path + "/changfa_system/subsidyProduct/page.do",
    data:{
      token: $(window.parent.document).find("input[name='token']").val(),
      factory:$('#cjjx').val(),
      model:$('#modeljx').val(),
      pageNum:currentPage,
      pageSize:14,

    },
    dataType:"json",
    success:function (data) {
      //console.log(data)
      if (data['head']['code'] == 200) {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        var on_off_path;
        var status;
        var type;
        $("#adminTbody").empty()
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          if (data['body']['result']['data'][i]['state'] == 0) {
            on_off_path = "http://app.changfanz.net:3588/changfa_file/off.png";
          } else {
            on_off_path = "http://app.changfanz.net:3588/changfa_file/on.png";
          }
          //$('#getxqid').val(data['body']['result']['data'][i]['id'])
          $("#adminTbody").append(
            '<tr data-id="'+data['body']['result']['data'][i]['id']+'">'+
                '<td class="td2" height="33">'+data['body']['result']['data'][i]['factory']+'</td>'+
                '<td class="td2" height="33">'+data['body']['result']['data'][i]['model']+'</td>'+
                '<td class="td2" >'+data['body']['result']['data'][i]['line']+'</td>'+
                '<td class="td2" >'+data['body']['result']['data'][i]['serial']+'</td>'+
                //'<td class="td2" >'+data['body']['result']['data'][i]['line']+'</td>'+
                '<td class="td2" >'+data['body']['result']['data'][i]['drive']+'</td>'+
                '<td class="td2" >'+data['body']['result']['data'][i]['power']+'</td>'+
                '<td class="td2" >'+data['body']['result']['data'][i]['level']+'</td>'+
                '<td class="td2" >'+'<img src="'+on_off_path+'" class="mg-t5" onclick="toogle_autoRuleStatus(this)">'+'</td>'+
                '<td class="td2" height="33" style="text-align:center;">'+
                  '<input class="radio_type" type="radio" name="'+'radio'+[i]+'" id="'+'radio'+[i]+'" onclick="toogleradio(this)"/> '
                +'</td>'+
                '<td class="td2" style="color:#1ABC9C;cursor:pointer;" onclick="bianjiList(this)">'+'编辑'+'</td>'+
                
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }else{
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2" height="50px" colspan="10">未查到相关信息</td>'
        );
        currentPage = 1;
        totalPage = 1;
        totalData = 1;
        document.getElementById("barcon1").innerHTML = "";
      }
    }
  })

}


function bianjiList(event){
  $(window.parent.document).find("input[name='subproID']").val($(event).parent().attr('data-id'));//列表的id
  //alert($(window.parent.document).find("input[name='subproID']").val());
  //return false;
  window.open("subsidyProductManage2.html","_self");

}
function toogle_autoRuleStatus(event) {
  var id = $(event).parent().parent().attr('data-id');
  var status;
  if(event.src == "http://app.changfanz.net:3588/changfa_file/on.png"){
      status = 0;
  }else {
      status = 1;
  }
  $.ajax({
      type : "post",
      url : ip_path + "/changfa_system/subsidyProduct/update.do",
      data:{
        token: $(window.parent.document).find("input[name='token']").val(),
        begin_time:$('#date_start_rnm').val(),
        end_time:$('#date_end_rnm').val(),
        lineNum:$('#rep_info_rnm').val(),
        type:$("#leixing option:selected").val(),
        //status:$("#status option:selected").val(),
        state:status,
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

function getline(){
  $.ajax({
    type : "post",
    url : ip_path+"/changfa_system/machineModel/getMachineModels.do",
    dataType : "json",
    success : function (data) {
        //$("#linenum").append("<option value=''>全部</option>");
        //for(var i=0;i<data['body']['resultList']['length'];i++){
          for(var i=0;i<1;i++){
            $("#linenum").append("<option value='"+ data['body']['resultList'][i]['name'] +"'>"+data['body']['resultList'][i]['name']+"</option>");
        }
        ajax_getjixing();
        getlineouts();
        // $("#product").unbind();
    }
 });
}
function getlineouts(){
  $.ajax({
    type: "get",
    async: false,
    url: ip_path + "/changfa_system//subsidyParameter/list.do",
    data: {
    token: $(window.parent.document).find("input[name='token']").val(),
    type:'serial',
    line:$('#linenum option:selected').val(),
    //name:$('#serisename1').val()
    },
    dataType: "json",
    success: function (data) {
    //console.log(data);
    if(data['head']['code']==200){
        $("#forserial").empty();
        $("#list").empty();
        for(var i = 0; i < data['body']['result'].length; i++){
        $('#forserial').append(
            "<option value='" + data['body']['result'][i]['name'] + "'>" + data['body']['result'][i]['name'] + "</option>"  
        )
        $('#list').append(
            "<i data-id =" + data['body']['result'][i]['name'] + " >"+data['body']['result'][i]['name']+
            //'<input class="radio_type" type="radio" name="radio" id="radio" onclick="toogleradio(this)" style="margin-right:20px;float:right;"/>'+
            '<input class="radio_type" type="radio" name="'+'radio'+[i]+'" id="'+'radio'+[i]+'" onclick="toogleradio(this)" style="margin-right:20px;float:right;"/> '+
            '</i>'
            
        )
        }
        ajax_getjixing()
        
    }else{
        alert(data['head']['message'])
    }

    }
})
}
function getluntuo(){
  $.ajax({
    type : "post",
    url : ip_path+"/changfa_system/machineModel/getMachineModels.do",
    dataType : "json",
    success : function (data) {
      
        for(var i=0;i<1;i++){
            $("#linenum").append("<option value='"+ data['body']['resultList'][i]['name'] +"'>"+data['body']['resultList'][i]['name']+"</option>");
        }
        get_listoutside();
        
    }
});
}
function get_listoutside(){
  $.ajax({
    type: "get",
    async: false,
    url: ip_path + "/changfa_system/subsidyParameter/list.do",
    data: {
    token: $(window.parent.document).find("input[name='token']").val(),
    type:'serial',
    line:$('#linenum option:selected').val()
    },
    dataType: "json",
    success: function (data) {
    if(data['head']['code']==200){
        $("#forserial").empty();
        $("#list").empty();
        for(var i = 0; i < data['body']['result'].length; i++){
        $('#forserial').append(
            "<option value='" + data['body']['result'][i]['name'] + "'>" + data['body']['result'][i]['name'] + "</option>"  
        )
        $('#list').append(
            "<i data-id =" + data['body']['result'][i]['name'] + " >"+data['body']['result'][i]['name']+
            '<input class="radio_type" type="radio" name="'+'radio'+[i]+'" id="'+'radio'+[i]+'" onclick="toogleradio(this)" style="margin-right:20px;float:right;"/> '+
            '</i>'
            
        )
        }
        
    }else{
        alert(data['head']['message'])
    }

    }
})
}
//产品维护点编辑获取基本信息
function ajax_getjixing(){
  
  $.ajax({
    type: "get",
    async: false,
    url: ip_path + "/changfa_system/subsidyProduct/get.do",
    data: {
      token: $(window.parent.document).find("input[name='token']").val(),
      id:$(window.parent.document).find("input[name='subproID']").val(),
    },
    dataType: "json",
    success: function (data) {
      if(data['head']['code']!=200){
        alert(data['head']['message'])
      }else{
          //console.log(data) 
          $('#tablecompany1').empty();
          $('#tablecompany1').append(
            "<tr align='center' >" + 
                "<td class='td2' height='33' id='changjia1' >" + data['body']['result']['factory'] + "</td>" +
                "<td class='td2' height='33' id='jixing1'>" + data['body']['result']['model'] + "</td>" +
            "</tr>"
          );
          //$('#sericeSub').text(data['body']['result']['serial']);
          //$('#sericeSub1').text(data['body']['result']['power']);
          //$('#sericeSub2').text(data['body']['result']['level']);
          let drive;
          if(data['body']['result']['drive']=='两驱'){
            drive = 0
          }else if(data['body']['result']['drive']=='四驱'){
            drive = 1
          }
          $("#drive").find("option[value ='"+drive+"']").attr("selected","selected");
          $("#linenum").find("option[value='"+data['body']['result']['line']+"']").attr("selected",'selected');
          $("#forserial").find("option[value='"+data['body']['result']['serial']+"']").attr("selected",'selected');
          $("#forserial1").find("option[value='"+data['body']['result']['power']+"']").attr("selected",'selected');
          $("#forserial2").find("option[value='"+data['body']['result']['level']+"']").attr("selected",'selected');
      }
      
    }
  });

}


//列表删除
function deletelist(){
  let recordIds = [];
  $('#adminTbody tr td .radio_type').each(function(){
    if($(this).attr("checked")=="checked"){
      recordIds.push($(this).parent().parent().attr('data-id'))
    }
  })
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/subsidyProduct/delete.do",
    data: {
      token: $(window.parent.document).find("input[name='token']").val(),
      ids:recordIds.join(','),
      pageNum: currentPage,
      pageSize: 14,
    },
    dataType: "json",
    success: function (data) {
      if(recordIds==''){
        alert('请选择想要删除的数据')
      }else{
        ajax_subproduct();
      }
    }
  });
  

}
//查询
function addCreatepro(){
  ajax_getcompany();
}
//创建获取厂家列表
function ajax_getcompany(){
  $.ajax({
    type: "get",
    async: false,
    url: ip_path + "/changfa_system/subsidyProduct/factory/page.do",
    data: {
      token: $(window.parent.document).find("input[name='token']").val(),
      model:$('#model').val(),
      pageNum: currentPage,
      //pageSize: $(window.parent.document).find("input[name='pages']").val(),
      pageSize:8
    },
    dataType: "json",
    success: function (data) {
      if(data['head']['code']==200){
        //console.log(data)
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];

        $("#tablecompany").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {

          $("#tablecompany").append(
            
            "<tr align='center' data-id =" + data['body']['result']['data'][i]['id'] + ">" + 
            "<td class='td2' height='33'>" + data['body']['result']['data'][i]['factory'] + "</td>" +
            "<td class='td2' height='33'>" + data['body']['result']['data'][i]['model'] + "</td>" +
            '<td class="td2" height="33" style="text-align:center;">'+
            '<input class="radio_type" type="radio" name="'+'radio'+[i]+'" id="'+'radio'+[i]+'" onclick="toogleradio(this)"/> '
            +'</td>'+
            "</tr>"
            
          );
        }
        pageSplit();
        hideOrShow();
      }else{
        $("#tablecompany").empty();
        $("#tablecompany").append(
          "<tr align='center'>" +
          "<td class='td2' colspan='3' height='50px'>未查到相关信息</td>" +
          "</tr>"
        );
        document.getElementById("barcon1").innerHTML = "";
      }
    }
  })
}




function editproduct(){
  window.open("subsidyProductManage1.html","_self");
}


//和获取生产厂家列表
/*
function ajax_changjia(){
  $.ajax({
    type: "get",
    async: false,
    url: ip_path + "/changfa_system/subsidyFactory/factory/page.do",
    data: {
      token: $(window.parent.document).find("input[name='token']").val(),
      factory:$('#mingcheng').val(),
      pageNum: currentPage,
      pageSize: $(window.parent.document).find("input[name='pages']").val(),
    },
    dataType: "json",
    success: function (data) {
      //console.log(data)
      if (data['head']['code'] != 200) {
        $("#tablelb").empty();
        $("#tablelb").append(
          "<tr align='center'>" +
          "<td class='td2' colspan='2' height='50px'>未查到相关信息</td>" +
          "</tr>"
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];

        $("#tablelb").empty();
        pageSplit();
        hideOrShow();
      }
    }
  });

}*/

function choosesub(e){
  //e.stopPropagation();
  //$('.subselect').show();
  
  $(e).children("span").children(".tankuang").children(".subselect").show();
  $(e).children("span").children(".tankuang").children(".closetk").show();
  $(e).children("span").children(".tankuang").css('box-shadow','0px 1px 15px #eee');  
  $(e).siblings().children("span").children(".tankuang").children(".subselect").hide();
  $(e).siblings().children("span").children(".tankuang").children(".closetk").hide();
  $(e).siblings().children("span").children(".tankuang").css('box-shadow','0px 1px 15px #fff');
}

function guanbi(event){
  $('.subselect').css();
}
function ajax_company(){
  selectlinename();
}

function selectlinename(){
  $.ajax({
    type: "get",
    async: false,
    url: ip_path + "/changfa_system/subsidyParameter/list.do",
    data: {
      token: $(window.parent.document).find("input[name='token']").val(),
      type:'serial',
      name:$('#serisename').val(),
      line:$('#linenum option:selected').val()
    },
    dataType: "json",
    success: function (data) {
      //console.log(data);
      
      if(data['head']['code']==200){
        $("#list").empty();
        for(var i = 0; i < data['body']['result'].length; i++){
          $('#list').append(
            "<i data-id =" + data['body']['result'][i]['name'] + " >"+data['body']['result'][i]['name']+
            //'<input class="radio_type" type="radio" name="radio" id="radio" onclick="toogleradio(this)" style="margin-right:20px;float:right;"/>'+
            '<input class="radio_type" type="radio" name="'+'radio'+[i]+'" id="'+'radio'+[i]+'" onclick="toogleradio(this)" style="margin-right:20px;float:right;"/> '+
            '</i>'
            
          )
        }
        
      }else{
        alert(data['head']['message'])
      }

    }
  })
  
}


function selectline(){

  let recordIds = [];
  $('#list i .radio_type').each(function(){
    if($(this).attr("checked")=="checked"){
      recordIds.push($(this).parent().attr('data-id'))
    }
  })
  if(recordIds==''){
    alert('请选择系列');
    $('#skiptk').hide();
    $('#selectline').attr('onclick','selectlinename()');
          $('#selectline').attr('id','selectlinename');
          $('#addline').attr('onclick','addlinename()');
          $('#addline').attr('id','addlinename');
          $('#addlinename').val('新增');
  }else if(recordIds.length>1){
    alert('只能选择一个系列');
    $('#skiptk').hide();
    $('#selectline').attr('onclick','selectlinename()');
          $('#selectline').attr('id','selectlinename');
          $('#addline').attr('onclick','addlinename()');
          $('#addline').attr('id','addlinename');
          $('#addlinename').val('新增');
  }else{
    $('#sericeSub').text(recordIds);
          $('#skiptk').hide();
          $('#selectline').attr('onclick','selectlinename()');
          $('#selectline').attr('id','selectlinename');
          $('#addline').attr('onclick','addlinename()');
          $('#addline').attr('id','addlinename');
          $('#addlinename').val('新增');
          $('#serisename').val('');//初始状态清空

  }

 

  
}
function shanchusc(){
  $('#skiptkadd').hide();
  $('#skiptk').show();
  $('#remsc').show();
}
function shanchusc1(){
  $('#skiptkadd1').hide();
  $('#skiptk1').show();
  $('#remsc1').show();
}
function shanchusc2(){
  $('#skiptkadd2').hide();
  $('#skiptk2').show();
  $('#remsc2').show();
}
function addline(){
  let recordIds = [];
  $('#list i .radio_type').each(function(){
    if($(this).attr("checked")=="checked"){
      recordIds.push($(this).parent().attr('data-id'))
    }
  })
  if(recordIds!=''){
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/subsidyParameter/delete.do",
      data: {
        token: $(window.parent.document).find("input[name='token']").val(),
        type:'serial',
        names:recordIds.join(','),
        line:$('#linenum option:selected').val()
      },
      dataType: "json",
      success: function (data) {
        if(data['head']['code']==200){
          alert(data['head']['message']);
          selectlinename();
          $('#skiptk').hide();
          window.location.reload();
        }else{
          alert(data['head']['message'])
        }
  
      }
    })

  }else{
    alert('请选择要删除的系列');
    $('#skiptk').hide();
  }

}

function xinzeng(){
  $('#skiptkadd').show();
  $('#skiptk').hide();
}
function xinzeng1(){
  $('#skiptkadd1').show();
  $('#skiptk1').hide();
}
function xinzeng2(){
  $('#skiptkadd2').show();
  $('#skiptk2').hide();
}



function addlinename(){
  $('#skiptkadd').show();
  $('#selectlinename').attr('onclick','selectaddline()');
  $('#selectlinename').attr('id','selectaddline');
  $('#selectaddline').val('添加');
  $('#addlinename').attr('onclick','subclose()');
  $('#addlinename').val('关闭');

}
function subclose(){
  $('#skiptkadd').hide();
  $('#addlinename').attr('onclick','addlinename()');
  $('#addlinename').val('新增');
  $('#selectaddline').attr('onclick','selectlinename()');
  $('#selectaddline').attr('id','selectlinename');
  $('#selectlinename').val('选择');
}
function selectaddline(){
  if($('#addseris').val()!=''){
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system//subsidyParameter/insert.do",
      data: {
        token: $(window.parent.document).find("input[name='token']").val(),
        type:'serial',
        names:$('#addseris').val(),
        line:$('#linenum option:selected').val()
      },
      dataType: "json",
      success: function (data) {
        //console.log(data);
        if(data['head']['code']==200){
          alert(data['head']['message']) ;
          $('#skiptkadd').hide();
          window.location.reload();

        }else{
          alert(data['head']['message'])
        }
  
      }
    })
  }else{
    alert('输入系列名称');
    $('#skiptkadd').hide();
  }
}

function selectlinename1(){
  $('#skiptk1').show();
  $('#selectlinename1').attr('onclick','selectline1()');
  $('#selectlinename1').attr('id','selectline1');
  $('#addlinename1').attr('onclick','addline1()');
  $('#addlinename1').attr('id','addline1');
  $('#addline1').val('删除');
  $.ajax({
    type: "get",
    async: false,
    url: ip_path + "/changfa_system/subsidyParameter/list.do",
    data: {
      token: $(window.parent.document).find("input[name='token']").val(),
      type:'power',
      name:$('#serisename1').val()
    },
    dataType: "json",
    success: function (data) {
      //console.log(data);
      if(data['head']['code']==200){
        $("#list1").empty();
        for(var i = 0; i < data['body']['result'].length; i++){
          $('#list1').append(
            "<i data-id =" + data['body']['result'][i]['name'] + " >"+data['body']['result'][i]['name']+
            //'<input class="radio_type" type="radio" name="radio" id="radio" onclick="toogleradio(this)" style="margin-right:20px;float:right;"/>'+
            '<input class="radio_type" type="radio" name="'+'radio'+[i]+'" id="'+'radio'+[i]+'" onclick="toogleradio(this)" style="margin-right:20px;float:right;"/> '+
            '</i>'
            
          )
        }
        
      }else{
        alert(data['head']['message'])
      }

    }
  })
}
function selectline1(){
  let recordIds = [];
  $('#list1 i .radio_type').each(function(){
    if($(this).attr("checked")=="checked"){
      recordIds.push($(this).parent().attr('data-id'))
    }
  })
  if(recordIds==''){
    alert('请选择数据')
    $('#skiptk1').hide();
    $('#selectline1').attr('onclick','selectlinename1()');
    $('#selectline1').attr('id','selectlinename1');
    $('#addline1').attr('onclick','addlinename1()');
    $('#addline1').attr('id','addlinename1');
    $('#addlinename1').val('新增');
  }else if(recordIds.length>1){
    alert('只能选择一个')
  }else{
    $('#sericeSub1').text(recordIds);
    $('#skiptk1').hide();
    $('#selectline1').attr('onclick','selectlinename1()');
    $('#selectline1').attr('id','selectlinename1');
    $('#addline1').attr('onclick','addlinename1()');
    $('#addline1').attr('id','addlinename1');
    $('#addlinename1').val('新增');
    $('#serisename1').val('');//初始状态清空

}
}
function addline1(){
  let recordIds = [];
  $('#list1 i .radio_type').each(function(){
    if($(this).attr("checked")=="checked"){
      recordIds.push($(this).parent().attr('data-id'))
    }
  })
  if(recordIds!=''){
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/subsidyParameter/delete.do",
      data: {
        token: $(window.parent.document).find("input[name='token']").val(),
        type:'power',
        names:recordIds.join(',')
      },
      dataType: "json",
      success: function (data) {
        if(data['head']['code']==200){
          alert(data['head']['message']);
          selectlinename1();
          $('#skiptk1').hide();
          //window.location.reload();
        }else{
          alert(data['head']['message'])
        }
  
      }
    })

  }else{
    alert('请选择要删除的数据');
    $('#skiptk1').hide();
  }
}
function addlinename1(){
  $('#skiptkadd1').show();
  $('#addseris1').val('');
  $('#selectlinename1').attr('onclick','selectaddline1()');
  $('#selectlinename1').attr('id','selectaddline1');
  $('#selectaddline1').val('添加');
  $('#addlinename1').attr('onclick','subclose1()');
  $('#addlinename1').val('关闭');

}
function subclose1(){
  $('#skiptkadd1').hide();
  $('#addlinename1').attr('onclick','addlinename1()');
  $('#addlinename1').val('新增');
  $('#selectaddline1').attr('onclick','selectlinename1()');
  $('#selectaddline1').attr('id','selectlinename1');
  $('#selectlinename1').val('选择');
}

function selectaddline1(){
  if(isNaN($("#addseris1").val())){
    alert('只能为数字');
    $('#skiptkadd1').hide();
  }else if($('#addseris1').val()==''){
    alert('不能为空');
    $('#skiptkadd1').hide();
  }else{
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system//subsidyParameter/insert.do",
      data: {
        token: $(window.parent.document).find("input[name='token']").val(),
        type:'power',
        names:$('#addseris1').val()
      },
      dataType: "json",
      success: function (data) {
        //console.log(data);
        if(data['head']['code']==200){
          alert(data['head']['message']);
          $('#skiptkadd1').hide();
          window.location.reload();
        }else{
          alert(data['head']['message']);
          $('#skiptkadd1').hide();
        }
  
      }
    })
  }
}

function selectlinename2(){
  $('#skiptk2').show();
  $('#selectlinename2').attr('onclick','selectline2()');
  $('#selectlinename2').attr('id','selectline2');
  $('#addlinename2').attr('onclick','addline2()');
  $('#addlinename2').attr('id','addline2');
  $('#addline2').val('删除');
  $.ajax({
    type: "get",
    async: false,
    url: ip_path + "/changfa_system/subsidyParameter/list.do",
    data: {
      token: $(window.parent.document).find("input[name='token']").val(),
      type:'level',
      name:$('#serisename2').val()
    },
    dataType: "json",
    success: function (data) {
      //console.log(data);
      if(data['head']['code']==200){
        $("#list2").empty();
        for(var i = 0; i < data['body']['result'].length; i++){
          $('#list2').append(
            "<i data-id =" + data['body']['result'][i]['name'] + " >"+data['body']['result'][i]['name']+
            //'<input class="radio_type" type="radio" name="radio" id="radio" onclick="toogleradio(this)" style="margin-right:20px;float:right;"/>'+
            '<input class="radio_type" type="radio" name="'+'radio'+[i]+'" id="'+'radio'+[i]+'" onclick="toogleradio(this)" style="margin-right:20px;float:right;"/> '+
            '</i>'
            
          )
        }
        
      }else{
        alert(data['head']['message'])
      }

    }
  })
}
function selectline2(){
    let recordIds = [];
    $('#list2 i .radio_type').each(function(){
      if($(this).attr("checked")=="checked"){
        recordIds.push($(this).parent().attr('data-id'))
      }
    })
    if(recordIds==''){
      alert('请选择级别')
      $('#skiptk2').hide();
            $('#selectline2').attr('onclick','selectlinename2()');
            $('#selectline2').attr('id','selectlinename2');
            $('#addline2').attr('onclick','addlinename2()');
            $('#addline2').attr('id','addlinename2');
            $('#addlinename2').val('新增');
    }else if(recordIds.length>1){
      alert('只能选择一个')
    }else{
      $('#sericeSub2').text(recordIds);
            $('#skiptk2').hide();
            $('#selectline2').attr('onclick','selectlinename2()');
            $('#selectline2').attr('id','selectlinename2');
            $('#addline2').attr('onclick','addlinename2()');
            $('#addline2').attr('id','addlinename2');
            $('#addlinename2').val('新增');
            $('#serisename2').val('');//初始状态清空

  
    }
  
   
  
    
 
}
function addline2(){
  let recordIds = [];
  $('#list2 i .radio_type').each(function(){
    if($(this).attr("checked")=="checked"){
      recordIds.push($(this).parent().attr('data-id'))
    }
  })
  if(recordIds!=''){
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/subsidyParameter/delete.do",
      data: {
        token: $(window.parent.document).find("input[name='token']").val(),
        type:'level',
        names:recordIds.join(',')
      },
      dataType: "json",
      success: function (data) {
        if(data['head']['code']==200){
          alert(data['head']['message']);
          selectlinename2();
          $('#skiptk2').hide();
  
        }else{
          alert(data['head']['message'])
        }
  
      }
    })

  }else{
    alert('请选择要删除的级别');
    $('#skiptk2').hide();
  }

}
function addlinename2(){
  $('#skiptkadd2').show();
  $('#addseris2').val('');
  $('#selectlinename2').attr('onclick','selectaddline2()');
  $('#selectlinename2').attr('id','selectaddline2');
  $('#selectaddline2').val('添加');
  $('#addlinename2').attr('onclick','subclose2()');
  $('#addlinename2').val('关闭');

}
function subclose2(){
  $('#skiptkadd2').hide();
  $('#addlinename2').attr('onclick','addlinename2()');
  $('#addlinename2').val('新增');
  $('#selectaddline2').attr('onclick','selectlinename2()');
  $('#selectaddline2').attr('id','selectlinename2');
  $('#selectlinename2').val('选择');
}

function selectaddline2(){
  $('#skiptkadd2').hide();
  $('#selectlinename2').show();
  $('#addlinename2').show();
  if($('#addseris2').val()!=''){
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system//subsidyParameter/insert.do",
      data: {
        token: $(window.parent.document).find("input[name='token']").val(),
        type:'level',
        names:$('#addseris2').val()
      },
      dataType: "json",
      success: function (data) {
        //console.log(data);
        if(data['head']['code']==200){
          //alert(data['head']['message']) ;
          $('#sericeSub2').text($('#addseris2').val());
          $('#addlinename2').attr('onclick','addlinename2()');
          $('#addlinename2').val('新增');
          $('#selectaddline2').attr('onclick','selectlinename2()');
          $('#selectaddline2').attr('id','selectlinename2');
          $('#selectlinename2').val('选择');

        }else{
          alert(data['head']['message'])
        }
  
      }
    })
  }else{
    alert('输入级别')
  }
}


//查看详情
function getdetails1(event){
  $(window.parent.document).find("input[name='getxqid1']").val($(event).parent().attr('data-id'));
    window.open("subsidyCompanyManage2.html","_self");
    //ajax_getbianji();  
    //window.location.reload();
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
//提交按钮
function addSubpro(){
      //增加
      let recordIds = [];
      $('#tablecompany tr td .radio_type').each(function(){
        if($(this).attr("checked")=="checked"){
          recordIds.push($(this).parent().prev().text())
        }
      })
      let recordIds2 = [];
      $('#tablecompany tr td .radio_type').each(function(){
        if($(this).attr("checked")=="checked"){
          recordIds2.push($(this).parent().parent().attr('data-id'))
        }
      })
      //生产厂家
      let recordIds1=[];
      $('#tablecompany tr td .radio_type').each(function(){
        if($(this).attr("checked")=="checked"){
          recordIds1.push($(this).parent().prev().prev().text())
        }
        
    })
      if(recordIds2==''){
        alert('请选择机型')
      }else if(recordIds2.length>1){
        
        alert('只能选择一个机型')
      }else{
        $.ajax({
          type:'post',
          url:ip_path + "/changfa_system/subsidyProduct/insert.do",
          data:{
            token: $(window.parent.document).find("input[name='token']").val(),
            factory:recordIds1.join(','),
            model:recordIds.join(','),
            line:$('#linenum option:selected').text(),
            serial:$('#forserial option:selected').text(),
            drive:$('#drive option:selected').text(),
            power:$('#forserial1 option:selected').text(),
            level:$('#forserial2 option:selected').text(),
          },
          dataType:"json",
          success:function (data) {
            if(data['head']['code']==200){
              alert(data['head']['message']);
              window.open("subsidyProductManage.html","_self");
              $(window.parent.document).find("input[name='subproID']").val('');

            }else{
              alert(data['head']['message']);
            }

          }
        })

      }
  }
//修改
  function addSubpro1(){
    //增加
    let recordIds = [];
    $('#tablecompany tr td .radio_type').each(function(){
      if($(this).attr("checked")=="checked"){
        recordIds.push($(this).parent().prev().text())
      }
    })
    let recordIds2 = [];
    $('#tablecompany tr td .radio_type').each(function(){
      if($(this).attr("checked")=="checked"){
        recordIds2.push($(this).parent().parent().attr('data-id'))
      }
    })
    //生产厂家
    let recordIds1=[];
    $('#tablecompany tr td .radio_type').each(function(){
      if($(this).attr("checked")=="checked"){
        recordIds1.push($(this).parent().prev().prev().text())
      }
      
  })
  let factory1;
  let model1;
  if(recordIds2==''){
    factory1=$('#changjia1').text();
    model1=$('#jixing1').text();
  }else{
    factory1=recordIds1.join(',');
    model1=recordIds.join(',');

  }
    if(recordIds2.length>1){
      
      alert('只能选择一个机型')
    }else{
      $.ajax({
        type:'post',
        url:ip_path + "/changfa_system/subsidyProduct/update.do",
        data:{
          token: $(window.parent.document).find("input[name='token']").val(),
          id:$(window.parent.document).find("input[name='subproID']").val(),
          factory:factory1,
          model:model1,
          serial:$('#forserial option:selected').text(),
          drive:$('#drive option:selected').text(),
          power:$('#forserial1 option:selected').text(),
          level:$('#forserial2 option:selected').text(),
        },
        dataType:"json",
        success:function (data) {
          if(data['head']['code']==200){
            
            alert(data['head']['message']);
            
            window.open("subsidyProductManage.html","_self");
            $(window.parent.document).find("input[name='subproID']").val('');

          }else{
            alert(data['head']['message']);
          }

        }
      })

    }
}






//获取临时id
function ajax_getid(){
  $.ajax({
    type:'get',
    url:ip_path+ "/changfa_system/subsidyFactory/key/get.do",
    dataType:"json",
    data:{
      token: $(window.parent.document).find("input[name='token']").val(),
      id:$(window.parent.document).find("input[name='getxqid1']").val(),
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

function ajax_seachcompany(){
  ajax_bangding();
}
function searchgsName(){
  ajax_bangding();
}
//绑定公司列表
function ajax_bangding() {
  $.ajax({
    type: "get",
    async: false,
    url: ip_path + "/changfa_system/subsidyFactory/factory/page.do",
    data: {
      token: $(window.parent.document).find("input[name='token']").val(),
      factory:$('#companyName').val(),
      pageNum: currentPage,
      pageSize: 14,
    },
    dataType: "json",
    success: function (data) {
      //console.log(data)
      if (data['head']['code'] != 200) {
        $("#tablelb").empty();
        $("#tablelb").append(
          "<tr align='center'>" +
          "<td class='td2' colspan='4' height='50px'>未查到相关信息</td>" +
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
            
            "<tr align='center' data-id =" + data['body']['result']['data'][i]['tempraryId'] + ">" + 
            "<td class='td2' height='33'>" + data['body']['result']['data'][i]['factory'] + "</td>" +
            //"<td class='td2' >" + data['body']['result']['data'][i]['factoryShort'] + "</td>" +
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

  if($(window.parent.document).find("input[name='getxqid1']").val()!=''){
    
    //修改
    $.ajax({
      type:"post",
      url: ip_path + "/changfa_system/subsidyFactory/update.do",
      data:{
        token: $(window.parent.document).find("input[name='token']").val(),
        id:$(window.parent.document).find("input[name='getxqid1']").val(),
        tempraryId:$('#getid').val(),
        factory:$('#mingcheng').val(),
        factoryShort:$('#jiancheng').val(),
      },
      dataType:"json",
      success:function (data) {
        if(data['head']['code']==200){
          alert('修改成功');
          window.open("subsidyCompanyManage.html","_self");
          //清空
          $(window.parent.document).find("input[name='getxqid1']").val('');
        }else{
          alert(data['head']['message']);
          
        }
        
        

      }
    })

  }else{
    let recordIds = [];
    $('#qingdanbody tr td .radio_type').each(function(){
        recordIds.push($(this).parent().prev().text())
    })
    let recordIds1 = [];
    $('#qingdanbody tr td .radio_type').each(function(){
        recordIds1.push($(this).parent().prev().text())
    })

    //增加
    if($('#mingcheng').val()==''){
      alert('请输入公司名称')
    }else if($('#jiancheng').val()=='') {
      alert('请输入简称')
    }else{
      if(recordIds==''){
        alert('公司未绑定')
      }else{
        $.ajax({
          type:"post",
          url: ip_path + "/changfa_system/subsidyFactory/insert.do",
          data:{
            token: $(window.parent.document).find("input[name='token']").val(),
            tempraryId:$('#getid').val(),
            factory:$('#mingcheng').val(),
            factoryShort:$('#jiancheng').val(),

          },
          dataType:"json",
          success:function (data) {
            if(data['head']['code']==200){
              alert('添加成功');
              ajax_subsidy();
              //return false;
              window.open("subsidyCompanyManage.html","_self");
              $(window.parent.document).find("input[name='getxqid1']").val('');
              
              //ajax_threePacks();
              //window.open("threePackspolicy.html","_self");
            }else{
              alert(data['head']['message']);
              
            }
           
          }
        })
    
      }
    }

    
      
  
    
  }
  
  
  
}
function searchName(){
  ajax_subsidy();
}
//列表
function ajax_subsidy(){
  $(window.parent.document).find("input[name='getxqid1']").val('');//页面打开的时候清空
  $.ajax({
    type:"get",
    url: ip_path + "/changfa_system/subsidyFactory/page.do",
    dataType:"json",
    data:{
      token: $(window.parent.document).find("input[name='token']").val(),
      factory:$('#companyName1').val(),
      factoryShort:$('#shortName').val(),
      pageNum: currentPage,
      pageSize: 14,

    },
    success:function (data) {
      //console.log(data)
      if (data['head']['code'] == 200) {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        
        $("#adminTbody").empty()
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          //$('#getxqid').val(data['body']['result']['data'][i]['id'])
          $("#adminTbody").append(
            '<tr data-id="'+data['body']['result']['data'][i]['id']+'">'+
                '<td class="td2" height="33">'+data['body']['result']['data'][i]['factory']+'</td>'+
                '<td class="td2" height="33">'+data['body']['result']['data'][i]['factoryShort']+'</td>'+
                '<td class="td2" >'+data['body']['result']['data'][i]['createTime']+'</td>'+
                '<td class="td2" style="color:#1ABC9C;cursor:pointer;" onclick="getdetails1(this)">'+'查看'+'</td>'+
                '<td class="td2" style="color:#1ABC9C;cursor:pointer;" onclick="xiugai(this)">'+'编辑'+'</td>'+
                '<td class="td2" height="33" style="text-align:center;">'+
                  '<input class="radio_type" type="radio" name="'+'radio'+[i]+'" id="'+'radio'+[i]+'" onclick="toogleradio(this)"/> '
                +'</td>'+
                

            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }else{
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2" height="50px" colspan="6">未查到相关信息</td>'
        );
        currentPage = 1;
        totalPage = 1;
        totalData = 1;
        document.getElementById("barcon1").innerHTML = "";
      }
    }
  })

}





function queryRepairNeed(){
  currentPage = 1;
  ajax_threePacks();
}





function choose(event){
  //alert(event.src)
  $(event).addClass("choseactive").siblings().removeClass("choseactive");
}

function selectallqd1(){
  $("#adminTbody tr td .radio_type").each(function(){
    $(this).attr("checked",true);
    $(this).addClass("radio_types");
    $('#selectallqd1').text('取消');
    $('#selectallqd1').attr('onclick','quxiao2()');
  })
}
function quxiao2(){
  $("#adminTbody tr td .radio_type").each(function(){
    $(this).attr("checked",false);
    $(this).removeClass("radio_types");
    $('#selectallqd1').text('全选');
    $('#selectallqd1').attr('onclick','selectallqd1()');
  })

}

//公司维护列表全选
function selectallgs(){
  $("#adminTbody tr td .radio_type").each(function(){
    $(this).attr("checked",true);
    $(this).addClass("radio_types");
    $('#selectallgs').text('取消');
    $('#selectallgs').attr('onclick','quxiaogs()');
  })
}
function quxiaogs(){
  $("#adminTbody tr td .radio_type").each(function(){
    $(this).attr("checked",false);
    $(this).removeClass("radio_types");
    $('#selectallgs').text('全选');
    $('#selectallgs').attr('onclick','selectallgs()');
  })

}
//公司维护删除
function deletelistgs(){
  let recordIds = [];
  $('#adminTbody tr td .radio_type').each(function(){
    if($(this).attr("checked")=="checked"){
      recordIds.push($(this).parent().parent().attr('data-id'))
    }
  })
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/subsidyFactory/delete.do",
    data: {
      token: $(window.parent.document).find("input[name='token']").val(),
      ids:recordIds.join(','),
      pageNum: currentPage,
      pageSize: 14,
    },
    dataType: "json",
    success: function (data) {
      if(recordIds==''){
        alert('请选择想要删除的数据')
      }else{
        ajax_subsidy();
      }
    }
  });
  

}


function selectallqd(){
  $("#qingdanbody tr td .radio_type").each(function(){
    $(this).attr("checked",true);
    $(this).addClass("radio_types");
    $('#selectallqd').text('取消');
    $('#selectallqd').attr('onclick','quxiaoqd()');
  })
}
function quxiaoqd(){
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
//全选
function selectallliebiao1(){
  $("#tablecompany tr td .radio_type").each(function(){
    $(this).attr("checked",true);
    $(this).addClass("radio_types");
    $('#selectall').text('取消');
    $('#selectall').attr('onclick','quxiao1()');
  })
}
function quxiao1(){
  $("#tablecompany tr td .radio_type").each(function(){
    $(this).attr("checked",false);
    $(this).removeClass("radio_types");
    $('#selectall').text('全选');
    $('#selectall').attr('onclick','selectallliebiao1()');
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
  //console.log(event)
  
}


//添加清单列表
function addsubsidy(){
  let recordIds = [];//选择的数据
  $('#tablelb tr td .radio_type').each(function(){
    if($(this).attr("checked")=="checked"){
      recordIds.push($(this).parent().prev().text())
    }
  })
  //alert(recordIds);
  //alert(recordIds);
  //alert(recordIdsidqd);
  //return false;

    if(recordIds !=''){
        $.ajax({
          type : "post",
          url : ip_path + "/changfa_system/subsidyFactory/temprary/insert.do",
         // data: JSON.stringify(json),
          dataType : "json",
          data:{
            'token':$(window.parent.document).find("input[name='token']").val(),
            'factorys':recordIds.join(','),
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
      alert('请选择分公司')
    }

}

//删除清单列表
function delCreate(){
  let recordIds = [];
  $('#qingdanbody tr td .radio_type').each(function(){
    if($(this).attr("checked")=="checked"){
      recordIds.push($(this).parent().prev().text())
    }
  })
  $.ajax({
    type : "post",
    url : ip_path + "/changfa_system/subsidyFactory/temprary/delete.do",
    dataType : "json",
    data:{
      'token':$(window.parent.document).find("input[name='token']").val(),
      'factorys':recordIds.join(','),
      'tempraryId':$('#getid').val(),
      'pageNum':currentPage_qd,
      'pageSize':14
    },
    success : function (data) {
      //console.log(data)
      if(data['head']['code']==200){
        $('#selectallqd').text('全选');
        $('#selectallqd').attr('onclick','selectallqd()');
        ajax_getqingd();
      }else{
        alert(data['head']['message']);
      }
      
    }
  })
}



var currentPage_qd;
var totalPage_qd;
var totalData_qd;
//查询清单
function ajax_seachqd(){
  ajax_getqingd();
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
  let recordIds = [];//选择的数据
  $('#tablelb tr td .radio_type').each(function(){
    if($(this).attr("checked")=="checked"){
      recordIds.push($(this).parent().prev().prev().text())
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
    type:"get",
    url : ip_path + "/changfa_system/subsidyFactory/temprary/page.do",
    dataType : "json",
    data:{
      'token':$(window.parent.document).find("input[name='token']").val(),
      'factorySubsidy':$('#saleM_infoqd').val(),
      'tempraryId':$('#getid').val(),
      //'barCode':barCode,
      //'factoryNum':factoryNum,
      'pageNum':currentPage_qd,
      'pageSize':14,
    },
    success:function (data) {
      $("#qingdanbody").empty();
      //console.log(data)
      //return false;
      if(data['head']['code']==200){
        currentPage_qd = data['body']['result']['pageNum'];
        totalPage_qd = data['body']['result']['pages'];
        totalData_qd = data['body']['result']['total'];
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          $("#qingdanbody").append(
            "<tr align='center' data-id =" + data['body']['result']['data'][i]['tempraryId'] + ">" + 
            "<td class='td2' height='33'>" + data['body']['result']['data'][i]['factorySubsidy'] + "</td>" +
            //"<td class='td2' >" + data['body']['result']['data'][i]['factoryShort'] + "</td>" +
            '<td class="td2" height="33" style="text-align:center;">'+
            '<input class="radio_type" type="radio" name="'+'radio'+[i]+'" id="'+'radio'+[i]+'" onclick="toogleradio(this)"/> '
            +'</td>'+
            "</tr>"
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
  $(window.parent.document).find("input[name='getxqid1']").val($(event).parent().attr('data-id'));//列表的id
  //alert($(window.parent.document).find("input[name='getcompany']").val());
  window.open("subsidyCompanyManage1.html","_self");
}

//创建
function editCreate1(){
  window.open("subsidyCompanyManage3.html","_self");
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
    url : ip_path + "/changfa_system/subsidyFactory/get.do",
    dataType : "json",
    data:{
      'token':$(window.parent.document).find("input[name='token']").val(),
      //'id':$('#getxqid').val(),
      'id':$(window.parent.document).find("input[name='getxqid1']").val(),
    },
    success : function (data) {
      //console.log(data)
      $('#mingcheng').val(data['body']['result']['factory']);
      $('#jiancheng').val(data['body']['result']['factoryShort']);
      $('#date_start').val(data['body']['result']['createTime'])
      
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



function addRepairNeed() {

  $(window.parent.document).find("input[name='creatorId']").val("");
  window.open("addRepaireNeed.html", "_self");
}

//查询报修单信息
function queryRepairNeed() {
  currentPage = 1;
  sessionStorage.setItem($('#rep_guy_rnm').attr('id'), $('#rep_guy_rnm').val());
  sessionStorage.setItem($('#rep_info_rnm').attr('id'), $('#rep_info_rnm').val());
  sessionStorage.setItem($('#rpt_item_rnm').attr('id'), $('#rpt_item_rnm').val());
  sessionStorage.setItem($('#rpt_info_rnm').attr('id'), $('#rpt_info_rnm').val());
  ajax_rptM();
}

function queryFastRepairNeed() {
  currentPage = 1;
  ajax_fastRpt();
}

function editRepairNeed() {
  window.open("editRepaireNeed.html", "_self");
}

//查看报修详情（报修单号）

function showRepairNeedDetailsuad(event) {
  var report_id = event.parentNode.parentNode.id;
  $(window.parent.document).find("input[name='reportId']").val(report_id);
  window.open("repaireNeedDetail.html", "_self");
}

function showRepairNeedDetails(event) {
  var report_id = event.parentNode.parentNode.id;
  $(window.parent.document).find("input[name='reportId']").val(report_id);
  window.open("repaireNeedDetail.html", "_self");
}
//单缸机
function showRepairNeedDetails1(event) {
  var report_id = event.parentNode.parentNode.id;
  $(window.parent.document).find("input[name='reportId']").val(report_id);
  window.open("drepaireNeedDetail.html", "_self");
}

function add_back() {
  window.open("repairNeedManage.html", "_self");
}

//报修详情页->派工
function dis_next_detail() {
  $(window.parent.document).find("input[name='machineAddress']").val($("#machineAddress").html());
  window.open("dispatching_check.html", "_self");
  $(window.parent.document).find("span[id='text1']").removeClass("fontGreen");
  $(window.parent.document).find("span[id='text2']").addClass("fontGreen");
  $(window.parent.document).find("div[id='status1']").removeClass("status_on_special");
  $(window.parent.document).find("div[id='status1']").addClass("status_on");
  $(window.parent.document).find("div[id='status2']").removeClass("status_off");
  $(window.parent.document).find("div[id='status2']").addClass("status_ing");
  $(window.parent.document).find("div[id='line1']").addClass("line_on");
}

function dis_next() {
  window.open("waiting_detail.html", "_self");
}

function dis_next_look() {
  window.open("look_detail.html", "_self");
}

//维修详情页->维修单审核
function rep_next() {
  var reg = /^(0|\d{1,})$/;
  if ($("#dis_cost").text() == "" || $("#hour_cost").text() == "") {
    alert("请输入审核里程和审核工时后生成费用！");
  } else if ($("#check_otherCost").val() == "") {
    alert("请输入其他费用的审核！");
  } else if (!reg.test($("#check_otherCost").val())) {
    alert("其他费用的审核只能输入正整数！");
  } else {
    // $(window.parent.parent.document).find("input[name='factoryNum']").val($("#factoryNum").val());
    // $(window.parent.parent.document).find("input[name='lineNum']").val($("#lineNum option:selected").val());
    // $(window.parent.parent.document).find("input[name='seriesNum']").val($("#seriesNum option:selected").val());
    // $(window.parent.parent.document).find("input[name='modelNum']").val($("#modelNum option:selected").val());
    $(window.parent.parent.document).find("input[name='check_dis']").val($("#checkDistance").val());
    $(window.parent.parent.document).find("input[name='check_hour']").val($("#checkHour").val());
    $(window.parent.parent.document).find("input[name='dis_cost']").val($("#dis_cost").text());
    $(window.parent.parent.document).find("input[name='hour_cost']").val($("#hour_cost").text());
    $(window.parent.parent.document).find("input[name='quality_level']").val($("#qualityLevel option:selected").val());
    $(window.parent.parent.document).find("input[name='other_cost']").val($("#check_otherCost").val());
    window.open("repaired_check.html", "_self");
  }
}

//审核通过不通过页面切换
function toogle_dis() {
  document.getElementById("checkDis_choosed").style.display = "none";
  document.getElementById("dis_choosed").style.display = "block";
}

function toogle_dis_check() {
  document.getElementById("dis_choosed").style.display = "none";
  document.getElementById("checkDis_choosed").style.display = "block";
}

function toogle_rep() {
  document.getElementById("checkRep_choosed").style.display = "none";
  document.getElementById("rep_choosed").style.display = "block";
}

function toogle_rep_check() {
  document.getElementById("rep_choosed").style.display = "none";
  document.getElementById("checkRep_choosed").style.display = "block";
}

function to_rpt_400() {
  window.open("repaireNeedDetail.html?reportID=" + base64encode($(window.document).find("input[name='reportId_400']").val()), "_self");
}

//查看报修单详情（报修单号）
function to_rpt(event) {
  if (document.getElementById("status2").className == "status_ing") {
    // window.history.go(-1);
    // $("#text").html(
    //     '<span id="text1" class="status_text fontGreen">报修</span>'+
    //     '<span id="text2" class="status_text">派工</span>'+
    //     '<span id="text3" class="status_text">接单</span>'+
    //     '<span id="text4" class="status_text">出发</span>'+
    //     '<span id="text5" class="status_text">到达</span>'+
    //     '<span id="text6" class="status_text">审核</span>'+
    //     '<span id="text7">完成</span>'+
    //     '</div>'
    // )
    // $("#statu").html(
    //     '<div class="status_part">'+
    //     '<div id="status1" class="status_on_special"></div>'+
    //     '<div id="line1" class="line flt_l"></div>'+
    //     '<div id="status2" class="status_off"></div>'+
    //     '<div class="line flt_l"></div>'+
    //     '<div id="status3" class="status_off"></div>'+
    //     '<div class="line flt_l"></div>'+
    //     '<div id="status4" class="status_off"></div>'+
    //     '<div class="line flt_l"></div>'+
    //     '<div id="status5" class="status_off"></div>'+
    //     '<div class="line flt_l"></div>'+
    //     '<div id="status6" class="status_off"></div>'+
    //     '<div class="line flt_l"></div>'+
    //     '<div id="status7" class="status_off"></div>'+
    //     '</div>'
    // );
    var cont = '<iframe src="report_detail.html" frameborder="0" scrolling="no" width="100%" height="1700"></iframe>';
    $("#detail_frame").html(cont);
    $(window.document).find("span[id='text2']").removeClass("fontGreen");
    $(window.document).find("span[id='text1']").addClass("fontGreen");
    $(window.document).find("div[id='status1']").removeClass("status_on");
    $(window.document).find("div[id='status1']").addClass("status_on_special");
    $(window.document).find("div[id='status2']").removeClass("status_ing");
    $(window.document).find("div[id='status2']").addClass("status_off");
    $(window.document).find("div[id='line1']").removeClass("line_on");
    $(window.document).find("div[id='line1']").addClass("line");
  } else {
    var num = event.id.substr(6);
    var arr_text = [1, 2, 3, 4, 5, 6, 7, 8];
    for (var i = 0; i < array_status.length; i++) {
      var newId = "status" + (i + 1);
      if (num == array_status[i]) {
        $("#" + newId).addClass("status_on_special");
      } else {
        $("#" + newId).removeClass("status_on_special");
        $("#" + newId).removeClass("status_closed");
        $("#" + newId).addClass("status_on");
      }
    }
    for (var i = 0; i < arr_text.length; i++) {
      var text = "text" + (i + 1);
      if (num == arr_text[i]) {
        $("#" + text).addClass("fontGreen");
      } else {
        $("#" + text).removeClass("fontGreen");
      }
    }
    // window.open("repaireNeedDetail.html?token="+$(window.parent.document).find("input[name='token']").val()+"&reportID=" + $(window.parent.document).find("input[name='reportId']").val(),"_self");
    var cont = '<iframe src="report_detail.html" frameborder="0" scrolling="no" width="100%" height="1700px"></iframe>';
    $("#detail_frame").html(cont);
  }
}

//查看报修驳回详情（派工单号）
function to_rpt_unpass(event) {
  var num = event.id.substr(6);
  var arr_text = [1, 2, 3, 4, 5, 6, 7, 8];
  for (var i = 0; i < array_status.length; i++) {
    var newId = "status" + (i + 1);
    if (num == array_status[i]) {
      $("#" + newId).addClass("status_on_special");
    } else {
      $("#" + newId).removeClass("status_on_special");
      $("#" + newId).removeClass("status_closed");
      $("#" + newId).addClass("status_on");
    }
  }
  for (var i = 0; i < arr_text.length; i++) {
    var text = "text" + (i + 1);
    if (num == arr_text[i]) {
      $("#" + text).addClass("fontGreen");
    } else {
      $("#" + text).removeClass("fontGreen");
    }
  }
  // window.open("repaireNeedDetail.html?token="+$(window.parent.document).find("input[name='token']").val()+"&reportID=" + $(window.parent.document).find("input[name='reportId']").val(),"_self");
  var cont = '<iframe src="report_unpass.html" frameborder="0" scrolling="no" width="100%" height="1700px"></iframe>';
  $("#detail_frame").html(cont);
}

//查看派工单详情（派工单号）
function to_dis(event) {
  var num = event.id.substr(6);
  var arr_text = [1, 2, 3, 4, 5, 6, 7, 8];
  for (var i = 0; i < array_status.length; i++) {
    var newId = "status" + (i + 1);
    if (num == array_status[i]) {
      $("#" + newId).addClass("status_on_special");
    } else {
      $("#" + newId).removeClass("status_on_special");
      $("#" + newId).addClass("status_on");
    }
  }
  for (var i = 0; i < arr_text.length; i++) {
    var text = "text" + (i + 1);
    if (num == arr_text[i]) {
      $("#" + text).addClass("fontGreen");
    } else {
      $("#" + text).removeClass("fontGreen");
    }
  }
  var cont = '<iframe src="dispatching_detail.html" frameborder="0" scrolling="no" width="100%" height="2100px"></iframe>';
  $("#detail_frame").html(cont);
}

//查看维修单详情（维修单号）
function to_rep(event) {
  var num = event.id.substr(6);
  var arr_text = [1, 2, 3, 4, 5, 6, 7, 8];
  for (var i = 0; i < array_status.length; i++) {
    var newId = "status" + (i + 1);
    if (num == array_status[i]) {
      $("#" + newId).addClass("status_on_special");
    } else {
      $("#" + newId).removeClass("status_on_special");
      $("#" + newId).addClass("status_on");
    }
  }
  for (var i = 0; i < arr_text.length; i++) {
    var text = "text" + (i + 1);
    if (num == arr_text[i]) {
      $("#" + text).addClass("fontGreen");
    } else {
      $("#" + text).removeClass("fontGreen");
    }
  }
  // var param = $(window.parent.document).find("input[name='token']").val()+","+$(window.parent.document).find("input[name='reportId']").val()+","+$(window.parent.document).find("input[name='repairId']").val();
  var cont = "<iframe id='ifm' src='repaired_detail.html' frameborder='0' scrolling='no' width='100%' height='1800px'></iframe>"
  $("#detail_frame").html(cont);

  // var childFrameObj = document.getElementById("ifm");
  // childFrameObj.contentWindow.paramFromParent = param;
}

//查看维修单驳回详情（维修单号）
function to_rep_unpass(event) {
  var num = event.id.substr(6);
  var arr_text = [1, 2, 3, 4, 5, 6, 7, 8];
  for (var i = 0; i < array_status.length; i++) {
    var newId = "status" + (i + 1);
    if (num == array_status[i]) {
      $("#" + newId).addClass("status_on_special");
    } else {
      $("#" + newId).removeClass("status_on_special");
      $("#" + newId).addClass("status_on");
    }
  }
  for (var i = 0; i < arr_text.length; i++) {
    var text = "text" + (i + 1);
    if (num == arr_text[i]) {
      $("#" + text).addClass("fontGreen");
    } else {
      $("#" + text).removeClass("fontGreen");
    }
  }
  // var param = $(window.parent.document).find("input[name='token']").val()+","+$(window.parent.document).find("input[name='reportId']").val()+","+$(window.parent.document).find("input[name='repairId']").val();
  var cont = "<iframe id='ifm' src='repair_unpass.html' frameborder='0' scrolling='no' width='100%' height='1800px'></iframe>"
  $("#detail_frame").html(cont);

  // var childFrameObj = document.getElementById("ifm");
  // childFrameObj.contentWindow.paramFromParent = param;
}

//回访
// function to_visit(event) {
//     var num = event.id.substr(6);
//     var arr_text = [1,2,3,4,5,6,7];
//     for(var i=0;i<array_status.length;i++){
//         var newId = "status" + (i+1);
//         if(num == array_status[i]){
//             $("#" +newId).addClass("status_on_special");
//         }else{
//             $("#" +newId).removeClass("status_on_special");
//             $("#" +newId).addClass("status_on");
//         }
//     }
//     for(var i=0;i<arr_text.length;i++){
//         var text = "text" + (i+1);
//         if(num == arr_text[i]){
//             $("#" +text).addClass("fontGreen");
//         }else{
//             $("#" +text).removeClass("fontGreen");
//         }
//     }
//     // var param = $(window.parent.document).find("input[name='token']").val()+","+$(window.parent.document).find("input[name='reportId']").val()+","+$(window.parent.document).find("input[name='repairId']").val();
//     var cont = "<iframe id='ifm' src='userVisit.html' frameborder='0' scrolling='no' width='1724px' height='1800px'></iframe>"
//     $("#detail_frame").html(cont);
//
//     // var childFrameObj = document.getElementById("ifm");
//     // childFrameObj.contentWindow.paramFromParent = param;
// }

function openUserVisit() {
  var cont = "<iframe id='ifm' src='userVisit.html' frameborder='0' scrolling='no' width='100%' height='120%'></iframe>"
  $(window.parent.document).find("div[id='detail_frame']").html(cont);
}

//回访完成
function to_complete(event) {
  var num = event.id.substr(6);
  var arr_text = [1, 2, 3, 4, 5, 6, 7, 8];
  for (var i = 0; i < array_status.length; i++) {
    var newId = "status" + (i + 1);
    if (num == array_status[i]) {
      $("#" + newId).addClass("status_on_special");
    } else {
      $("#" + newId).removeClass("status_on_special");
      $("#" + newId).addClass("status_on");
    }
  }
  for (var i = 0; i < arr_text.length; i++) {
    var text = "text" + (i + 1);
    if (num == arr_text[i]) {
      $("#" + text).addClass("fontGreen");
    } else {
      $("#" + text).removeClass("fontGreen");
    }
  }
  // var param = $(window.parent.document).find("input[name='token']").val()+","+$(window.parent.document).find("input[name='reportId']").val()+","+$(window.parent.document).find("input[name='repairId']").val();
  var cont = "<iframe id='ifm' src='complete.html' frameborder='0' scrolling='no' width='100%' height='1800px'></iframe>"
  $("#detail_frame").html(cont);

  // var childFrameObj = document.getElementById("ifm");
  // childFrameObj.contentWindow.paramFromParent = param;
}

function to_close(event) {
  var num = event.id.substr(6);
  var arr_text = [1, 2, 3, 4, 5, 6, 7, 8];
  for (var i = 0; i < array_status.length; i++) {
    var newId = "status" + (i + 1);
    if (num == array_status[i]) {
      $("#" + newId).addClass("status_on_special");
    } else {
      $("#" + newId).removeClass("status_on_special");
      $("#" + newId).addClass("status_on");
    }
  }
  for (var i = 0; i < arr_text.length; i++) {
    var text = "text" + (i + 1);
    if (num == arr_text[i]) {
      $("#" + text).addClass("fontGreen");
    } else {
      $("#" + text).removeClass("fontGreen");
    }
  }
  var cont = "<iframe id='ifm' src='closeDetail.html' frameborder='0' scrolling='no' width='100%' height='1300px'></iframe>"
  $("#detail_frame").html(cont);
}


function choosed(event) {
  // user_id=event.id;
  // console.log(event.children('td').eq(4).children("input"));
  // event.children('td').eq(4).children("input").checked = true;
}

//报修单审核不通过
function dis_check_unpass() {
  $("#dis_unpass").removeAttr("src");
  $("#dis_unpass").attr("src", "img/yes_clicked.png");
  var reason_id = $("#reason_select option:selected").val();
  var reason_describe = $("#describe").val();
  if (reason_id == "") {
    alert("请选择审核不通过原因！")
  } else {
    if (reason_describe.length <= 150) {
      $(window.parent.parent.document).find("input[name='closeReason']").val(reason_describe);
      if (reason_id == "0") {
        var json = {
          "reportId": $(window.parent.document).find("input[name='reportId']").val(),
          "token": $(window.parent.parent.document).find("input[name='token']").val(),
          "status": 0,
          "reasonVos": [{
            "reasonId": reason_id,
            "remarks": reason_describe
          }]
        };
        $.ajax({
          type: "post",
          async: false,
          url: ip_path + "/changfa_system/reportRepair/approveReportClose.do",
          contentType: 'application/json',
          data: JSON.stringify(json),
          success: function (data) {
            if (data['head']['code'] == 200) {
              var token = $(window.parent.parent.document).find("input[id='hidden1']").val();
              var report_id = $(window.parent.parent.document).find("input[id='hidden2']").val();
              window.open("repaireNeedDetail.html?token=" + base64encode(token) + "&reportID=" + base64encode(report_id), "_parent");
            } else {
              alert(data['head']['message']);
            }
          }
        });
      } else {
        var json = {
          "reportId": $(window.parent.document).find("input[name='reportId']").val(),
          "token": $(window.parent.parent.document).find("input[name='token']").val(),
          "status": -1,
          "reasonVos": [{
            "reasonId": reason_id,
            "remarks": reason_describe
          }]
        };
        console.log(json);
        $.ajax({
          type: "post",
          async: false,
          url: ip_path + "/changfa_system/reportRepair/approveReport.do",
          contentType: 'application/json',
          data: JSON.stringify(json),
          success: function (data) {
            if (data['head']['code'] == 200) {
              var token = $(window.parent.parent.document).find("input[id='hidden1']").val();
              var report_id = $(window.parent.parent.document).find("input[id='hidden2']").val();
              window.open("repaireNeedDetail.html?token=" + base64encode(token) + "&reportID=" + base64encode(report_id), "_parent");
            } else {
              alert(data['head']['message']);
            }
          }
        });
      }
    } else {
      alert("字数超出限制！");
    }
  }
}

//派工
function dispatching_to() {
  var id = $("input[type='radio']:checked").val();
  if (id == undefined) {
    alert("请选择派工对象！");
    $("#dis_pass").attr("src", "img/yes.png");
  }
  var token;
  var rpt_id;
  token = $(window.parent.parent.document).find("input[name='token']").val();
  rpt_id = $(window.parent.document).find("input[name='reportId']").val();
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/dispatch/createDispatch.do",
    data: {
      token: token,
      reportId: rpt_id,
      repairUserId: id,
      repairType: $("#repairType option:selected").val(),
      isReDispatch: 0
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] == 200) {
        // var token = $(window.parent.parent.document).find("input[id='hidden1']").val();
        // var report_id = $(window.parent.parent.document).find("input[id='hidden2']").val();
        $(window.parent.parent.document).find("input[id='hidden2']").val(rpt_id);
        window.open("repaireNeedDetail.html?token=" + base64encode(token) + "&reportID=" + base64encode(rpt_id), "_parent");
        // var dispatchId = data['body']['result']['dispatchId'];
        // $(window.parent.parent.document).find("input[name='dispatchId']").val(dispatchId);
        // var cont = '<iframe src="dispatching_detail.html" frameborder="0" scrolling="no" width="1100px" height="1700px"></iframe>';
        // $(window.parent.parent.document).find("div[id='detail_frame']").html(cont);
      } else {
        alert(data['head']['message']);
      }
    },
  });
}

//重新派工
function redispatching_to() {
  var id = $("input[type='radio']:checked").val();
  if (id == undefined) {
    alert("请选择派工对象！");
    $("#dis_pass").attr("src", "img/yes.png");
  }
  var token;
  var rpt_id;
  token = $(window.parent.parent.document).find("input[name='token']").val();
  rpt_id = $(window.parent.document).find("input[name='reportId']").val();
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/dispatch/createDispatch.do",
    data: {
      token: token,
      reportId: rpt_id,
      repairUserId: id,
      repairType: $("#repairType option:selected").val(),
      isReDispatch: 1
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] == 200) {
        // var token = $(window.parent.parent.document).find("input[id='hidden1']").val();
        // var report_id = $(window.parent.parent.document).find("input[id='hidden2']").val();
        window.open("repaireNeedDetail.html?token=" + base64encode(token) + "&reportID=" + base64encode(rpt_id), "_parent");
        // var dispatchId = data['body']['result']['dispatchId'];
        // $(window.parent.parent.document).find("input[name='dispatchId']").val(dispatchId);
        // var cont = '<iframe src="dispatching_detail.html" frameborder="0" scrolling="no" width="1100px" height="1700px"></iframe>';
        // $(window.parent.parent.document).find("div[id='detail_frame']").html(cont);
      } else {
        alert(data['head']['message']);
      }
    },
  });
}

//查看历史报修信息
function F5() {
  $("#adminTbody").empty();
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/reportRepair/queryReportFive.do",
    data: {
      mobile: mobile,
      reportId: $(window.parent.parent.document).find("input[name='reportId']").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] == 200) {
        for (var i = 0; i < data['body']['resultList'].length; i++) {
          var stat = data['body']['resultList'][i]['status'];
          var status_charset;
          // var rep_operation;
          //
          // rep_operation = '<a id="'+data['body']['resultList'][i]['reportId']+'" href="###" onclick="forHistoryDetail(this)">查看</a>';
          switch (stat) {
            case 0:
              status_charset = "已关闭";
              break;
            case -1:
              status_charset = "待派工";
              break;
            case 1:
              status_charset = "待派工";
              break;
            case 2:
              status_charset = "已派工";
              break;
            case 3:
              status_charset = "维修中";
              break;
            case 4:
              status_charset = "维修中";
              // if(data['body']['result']['data'][i]['disStatus'] == 14){
              //     status_charset = "待审核";
              // }else {
              //     status_charset = "维修中";
              // }
              break;
            case 8:
              status_charset = "维修中";
              break;
            case 9:
              status_charset = "维修中";
              break;
            case 10:
              status_charset = "维修中";
              break;
            case 5:
              status_charset = "待回访";
              break;
            case 31:
              status_charset = "待初审";
              break;
            case 32:
              status_charset = "初审驳回";
              break;
            case 14:
              status_charset = "待终审";
              break;
            case 16:
              status_charset = "终审驳回";
              break;
            case 15:
              status_charset = "待评价";
              break;
            case 6:
              status_charset = "已完成";
              break;
          }

          $("#adminTbody").append(
            '<tr id="' + data['body']['resultList'][i]['reportId'] + '">' +
            '<td class="body_td txt_center" height="60px">' + data['body']['resultList'][i]['name'] + '</td>' +
            '<td class="body_td txt_center">' + data['body']['resultList'][i]['mobile'] + '</td>' +
            '<td class="body_td txt_center">' + data['body']['resultList'][i]['reportTime'] + '</td>' +
            '<td class="body_td txt_center">' + data['body']['resultList'][i]['machineName'] + '</td>' +
            '<td class="body_td txt_center">' + data['body']['resultList'][i]['description'] + '</td>' +
            '<td class="body_td txt_center">' + status_charset + '</td>' +
            '<td class="body_td txt_center"><a href="###" onclick="forHistoryDetail(this)">查看</a></td>' +
            '</tr>'
          );
        }
      } else {
        $("#adminTbody").append(
          '<tr>' +
          '<td class="body_td" height="60px" colspan="7">暂无报修历史</td>' +
          '</tr>'
        );
      }
    }
  });
}

function rpt_history() {
  $("#adminTbody").empty();
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/reportRepair/queryReportFive.do",
    data: {
      mobile: $("#createMobile").val(),
      reportId: ""
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").append(
          '<tr>' +
          '<td class="body_td" height="60px" colspan="6">暂无报修历史</td>' +
          '</tr>'
        );
      } else {
        for (var i = 0; i < data['body']['resultList'].length; i++) {
          var stat = data['body']['resultList'][i]['status'];
          var status_charset;
          switch (stat) {
            case 0:
              status_charset = "已关闭";
              break;
            case -1:
              status_charset = "待派工";
              break;
            case 1:
              status_charset = "待派工";
              break;
            case 2:
              status_charset = "已派工";
              break;
            case 3:
              status_charset = "维修中";
              break;
            case 4:
              if (data['body']['result']['data'][i]['disStatus'] == 14) {
                status_charset = "待审核";
              } else {
                status_charset = "维修中";
              }
              break;
            case 8:
              status_charset = "维修中";
              break;
            case 9:
              status_charset = "维修中";
              break;
            case 10:
              status_charset = "维修中";
              break;
            case 5:
              status_charset = "待回访";
              break;
            case 31:
              status_charset = "待初审";
              break;
            case 32:
              status_charset = "初审驳回";
              break;
            case 14:
              status_charset = "待终审";
              break;
            case 16:
              status_charset = "终审驳回";
              break;
            case 15:
              status_charset = "待评价";
              break;
            case 6:
              status_charset = "已完成";
              break;
          };

          $("#adminTbody").append(
            '<tr id="' + data['body']['resultList'][i]['reportId'] + '">' +
            '<td class="body_td txt_center" height="60px">' + data['body']['resultList'][i]['name'] + '</td>' +
            '<td class="body_td txt_center">' + data['body']['resultList'][i]['mobile'] + '</td>' +
            '<td class="body_td txt_center">' + data['body']['resultList'][i]['reportTime'] + '</td>' +
            '<td class="body_td txt_center">' + data['body']['resultList'][i]['machineName'] + '</td>' +
            '<td class="body_td txt_center">' + data['body']['resultList'][i]['description'] + '</td>' +
            '<td class="body_td txt_center">' + status_charset + '</td>' +
            '</tr>'
          );
        }
      }
    }
  });
}

//报修历史信息中查看维修单详情（维修单号）
function forHistoryDetail(event) {
  var report_id = event.parentNode.parentNode.id;
  $(window.parent.parent.document).find("input[name='old_rptId']").val($(window.parent.parent.document).find("input[name='reportId']").val());
  $(window.parent.parent.document).find("input[name='history_mark']").val(1);
  $(window.parent.parent.document).find("input[name='reportId']").val(report_id);
  // var param = theRequest['token']+","+theRequest['reportID']+","+event.id;
  // var cont = "<iframe id='ifm' src='repaired_detail.html' frameborder='0' scrolling='no' width='1724px' height='1800px'></iframe>"
  // $("#detail_frame").html(cont);
  //window.open("repaireNeedDetail.html?token=" + base64encode($(window.parent.parent.document).find("input[name='token']").val()) + "&reportID=" + base64encode(report_id), "_parent")
  window.open("repaireNeedDetail.html", "_parent");
  // var childFrameObj = document.getElementById("ifm");
  // childFrameObj.contentWindow.paramFromParent = param;
}

//400
function forHistoryDetail_400(event) {
  var report_id = event.parentNode.parentNode.id;
  // var param = theRequest['token']+","+theRequest['reportID']+","+event.id;
  // var cont = "<iframe id='ifm' src='repaired_detail.html' frameborder='0' scrolling='no' width='1724px' height='1800px'></iframe>"
  // $("#detail_frame").html(cont);
  window.open("repaireNeedDetail.html?token=" + base64encode(token_400) + "&reportID=" + base64encode(report_id), "_self")

  // var childFrameObj = document.getElementById("ifm");
  // childFrameObj.contentWindow.paramFromParent = param;
}

//维修单审核不通过
function rep_check_unpass() {
  // $("#rep_unpass").attr("src","img/yes_clicked.png");
  var reason_id = $("#rep_check_unpass option:selected").val();
  var reason_describe = $("#describe").val();
  if (reason_id == "") {
    alert("请选择审核不通过原因！");
  } else if (reason_id != 27) {
    if (reason_describe.length <= 150) {
      var json = {
        "token": token,
        "repairReasonVos": [{
          "describtion": reason_describe,
          "reasonId": reason_id
        }],
        "repairId": repairId,
        "examineDistance": $(window.parent.parent.document).find("input[name='check_dis']").val(),
        "examineTime": $(window.parent.parent.document).find("input[name='check_hour']").val(),
        "examineDistanceCost": $(window.parent.parent.document).find("input[name='dis_cost']").val(),
        "examineTimeCost": $(window.parent.parent.document).find("input[name='hour_cost']").val(),
        "qualityLevel": $(window.parent.parent.document).find("input[name='quality_level']").val(),
        "examineOtherFee": $(window.parent.parent.document).find("input[name='other_cost']").val(),
        // "factoryNum":$(window.parent.parent.document).find("input[name='factoryNum']").val(),
        // "lineNum":$(window.parent.parent.document).find("input[name='lineNum']").val(),
        // "seriesNum":$(window.parent.parent.document).find("input[name='seriesNum']").val(),
        // "modelNum":$(window.parent.parent.document).find("input[name='modelNum']").val(),
      };
      $.ajax({
        type: "post",
        url: ip_path + "/changfa_system/repair/approveRepairNopass.do",
        contentType: 'application/json',
        data: JSON.stringify(json),
        success: function (data) {
          if (data['head']['code'] == 200) {
            var token = $(window.parent.parent.document).find("input[id='hidden1']").val();
            var report_id = $(window.parent.parent.document).find("input[id='hidden2']").val();
            window.open("repaireNeedDetail.html?token=" + base64encode(token) + "&reportID=" + base64encode(report_id), "_parent");
          } else {
            alert(data['head']['message']);
          }
        }
      });
    } else {
      alert("字数超出限制！");
    }
  } else {
    if (reason_describe.length <= 150) {
      var json = {
        "token": token,
        "repairReasonVos": [{
          "describtion": reason_describe,
          "reasonId": reason_id
        }],
        "repairId": repairId,
        "examineDistance": $(window.parent.parent.document).find("input[name='check_dis']").val(),
        "examineTime": $(window.parent.parent.document).find("input[name='check_hour']").val(),
        "examineDistanceCost": $(window.parent.parent.document).find("input[name='dis_cost']").val(),
        "examineTimeCost": $(window.parent.parent.document).find("input[name='hour_cost']").val(),
        "qualityLevel": $(window.parent.parent.document).find("input[name='quality_level']").val(),
        "examineOtherFee": $(window.parent.parent.document).find("input[name='other_cost']").val(),
        // "factoryNum":$(window.parent.parent.document).find("input[name='factoryNum']").val(),
        // "lineNum":$(window.parent.parent.document).find("input[name='lineNum']").val(),
        // "seriesNum":$(window.parent.parent.document).find("input[name='seriesNum']").val(),
        // "modelNum":$(window.parent.parent.document).find("input[name='modelNum']").val(),
      };
      $.ajax({
        type: "post",
        url: ip_path + "/changfa_system/repair/approveRepairClose.do",
        contentType: 'application/json',
        data: JSON.stringify(json),
        success: function (data) {
          if (data['head']['code'] == 200) {
            var token = $(window.parent.parent.document).find("input[id='hidden1']").val();
            var report_id = $(window.parent.parent.document).find("input[id='hidden2']").val();
            window.open("repaireNeedDetail.html?token=" + base64encode(token) + "&reportID=" + base64encode(report_id), "_parent");
          } else {
            alert(data['head']['message']);
          }
        }
      });
    } else {
      alert("字数超出限制！");
    }
  }
}

//维修单审核通过
function rep_check_pass() {
  // $("#rep_pass").attr("src","img/yes_clicked.png");
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/repair/approveRepairPass.do",
    data: {
      repairId: repairId,
      repairType: $(window.parent.parent.document).find("input[name='repairType']").val(),
      token: token,
      examineDistance: $(window.parent.parent.document).find("input[name='check_dis']").val(),
      examineTime: $(window.parent.parent.document).find("input[name='check_hour']").val(),
      examineDistanceCost: $(window.parent.parent.document).find("input[name='dis_cost']").val(),
      examineTimeCost: $(window.parent.parent.document).find("input[name='hour_cost']").val(),
      qualityLevel: $(window.parent.parent.document).find("input[name='quality_level']").val(),
      examineOtherFee: $(window.parent.parent.document).find("input[name='other_cost']").val(),
      // factoryNum :$(window.parent.parent.document).find("input[name='factoryNum']").val(),
      // lineNum :$(window.parent.parent.document).find("input[name='lineNum']").val(),
      // seriesNum :$(window.parent.parent.document).find("input[name='seriesNum']").val(),
      // modelNum :$(window.parent.parent.document).find("input[name='modelNum']").val(),
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] == 200) {
        var token = $(window.parent.parent.document).find("input[id='hidden1']").val();
        var report_id = $(window.parent.parent.document).find("input[id='hidden2']").val();
        window.open("repaireNeedDetail.html?token=" + base64encode(token) + "&reportID=" + base64encode(report_id), "_parent");
      } else {
        alert(data['head']['message']);
      }
    }
  });

}

//回退
function to_rptDetail() {
  if ($(window.document).find("input[name='reportId_400']").val() == undefined) {
    window.open("repaireNeedDetail.html?reportID=" + base64encode($(window.parent.parent.document).find("input[name='reportId']").val()), "_parent");
  } else {
    window.open("repaireNeedDetail.html?reportID=" + base64encode($("#rpt_400").val()), "_self");
  }
}

//派工查询按钮
function querybyAll() {
  // //选择省
  // $("#province").empty();
  // $.ajax({
  //     type : "post",
  //     async : false,
  //     url : ip_path+"/changfa_system/place/getProvince.do",
  //     dataType : "json",
  //     success : function (data) {
  //         $("#province").append("<option value='"+ 0 +"'>全部</option>");
  //         for(var i=0;i<data['body']['resultList']['length'];i++){
  //             $("#province").append("<option value='"+ data['body']['resultList'][i]['id'] +"'>"+data['body']['resultList'][i]['name']+"</option>");
  //         }
  //         $("#province").unbind();
  //     }
  // });
  // //选择市
  // if($("#province").val() != ""){
  //     $("#city").empty();
  //     if($("#province option:selected").val() == 0){
  //         $("#city").append("<option value='"+ 0 +"'>全部</option>");
  //     }else {
  //         $.ajax({
  //             type : "post",
  //             async : false,
  //             url : ip_path+"/changfa_system/place/getCity.do",
  //             data : {
  //                 parentId : $("#province option:selected").val(),
  //             },
  //             dataType : "json",
  //             success : function (data) {
  //                 $("#city").append("<option value=''>全部</option>");
  //                 for(var i=0;i<data['body']['resultList']['length'];i++){
  //                     $("#city").append("<option value='"+ data['body']['resultList'][i]['id'] +"'>"+data['body']['resultList'][i]['name']+"</option>");
  //                 }
  //                 $("#city").unbind();
  //             }
  //         });
  //     }
  // }
  // $("#province").change(function () {
  //     $("#cont").val("");
  //     ajax_area();
  //     $("#city").empty();
  //     if($("#province option:selected").val() == 0){
  //         $("#city").append("<option value='"+ 0 +"'>全部</option>");
  //     }else {
  //         $.ajax({
  //             type : "post",
  //             async : false,
  //             url : ip_path+"/changfa_system/place/getCity.do",
  //             data : {
  //                 parentId : $("#province option:selected").val(),
  //             },
  //             dataType : "json",
  //             success : function (data) {
  //                 $("#city").append("<option value=''>全部</option>");
  //                 for(var i=0;i<data['body']['resultList']['length'];i++){
  //                     $("#city").append("<option value='"+ data['body']['resultList'][i]['id'] +"'>"+data['body']['resultList'][i]['name']+"</option>");
  //                 }
  //                 $("#city").unbind();
  //             }
  //         });
  //     }
  //
  //     //显示三包员
  //     if($("#city").val() != ""){
  //         ajax_area();
  //     }
  //     $("#city").change(function () {
  //         $("#cont").val("");
  //         ajax_area();
  //     });
  //
  // });
  currentPage = 1;
  ajax_area();
  // var user_id;
  // if($(window.parent.parent.document).find("input[name='creatorId']").val() == "" || $(window.parent.parent.document).find("input[name='creatorId']").val() == null || $(window.parent.parent.document).find("input[name='creatorId']").val() == undefined){
  //     user_id = creatorId_400;
  // }else {
  //     user_id = $(window.parent.parent.document).find("input[name='creatorId']").val();
  // }
  // $("#adminTbody").empty();
  // $.ajax({
  //     type : "post",
  //     async : false,
  //     url : ip_path+"/changfa_system/user/getUsersByPlace.do",
  //     data : {
  //         userId : user_id,
  //         reportId : $(window.parent.parent.document).find("input[name='reportId']").val(),
  //         chooseItem : $("#query option:selected").val(),
  //         itemCont : $("#cont").val(),
  //         pageNum : currentPage,
  //         pageSize : 4
  //     },
  //     dataType : "json",
  //     success : function (data) {
  //         if(!data['head']['isSuccess']){
  //             alert(data['head']['message']);
  //         }else {
  //             currentPage = data['body']['result']['pageNum'];
  //             totalPage = data['body']['result']['pages'];
  //             totalData = data['body']['result']['total'];
  //             $("#adminTbody").empty();
  //             for(var i=0;i<data['body']['result']['data'].length;i++){
  //                 var company;
  //                 if(data['body']['result']['data'][i]['company'] == null){
  //                     company = "常发农装";
  //                 }else {
  //                     company = data['body']['result']['data'][i]['company'];
  //                 }
  //                 $("#adminTbody").append(
  //                     '<tr id="" onclick="choosed(this)">' +
  //                     '<td class="choose_td_bac txt_center DivHeight60"> '+data['body']['result']['data'][i]['roleName']+'</td>' +
  //                     '<td class="choose_td txt_center"><a href="###"> '+company+'</a></td>' +
  //                     '<td class="choose_td txt_center"> '+data['body']['result']['data'][i]['name']+'</td>' +
  //                     '<td class="choose_td txt_center"> '+data['body']['result']['data'][i]['mobile']+'</td>' +
  //                     '<td class="choose_td txt_center"><input type="radio" class="choose_select" value="'+data['body']['result']['data'][i]['userId']+'" name="choosed"></td>' +
  //                     '</tr>'
  //                 );
  //             }
  //             pageSplit();
  //             hideOrShow();
  //
  //             if(data['body']['result']['recommend'] == 0){
  //                 if(currentPage == 1){
  //                     document.getElementById("advise").style.display = "block";
  //                 }else{
  //                     document.getElementById("advise").style.display = "none";
  //                 }
  //             }else{
  //                 document.getElementById("advise").style.display = "none";
  //             }
  //         }
  //     }
  // });
}

//获取派工单状态
function getStatus() {
  var stat;
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/dispatch/selectDispatchByReportId.do",
    data: {
      reportId: $(window.parent.parent.document).find("input[name='reportId']").val()
    },
    dataType: "json",
    success: function (data) {
      dispt_id = data['body']['result']['dispatchId'];
      $.ajax({
        type: "post",
        async: false,
        url: ip_path + "/changfa_system/dispatch/selectById.do",
        data: {
          dispatchId: dispt_id,
          token: $(window.parent.parent.document).find("input[name='token']").val()
        },
        dataType: "json",
        success: function (data) {
          if (data['head']['code'] == 200) {
            stat = data['body']['result']['status'];
          } else {
            alert(data['head']['message']);
          }
        }
      });
    }
  });
  var titCont;
  switch (stat) {
    case -1:
      titCont = "待处理";
      break;
    case 1:
      titCont = "待派工";
      break;
    case 2:
      titCont = "已派工";
      break;
    case 3:
      titCont = "已接单";
      break;
    case 5:
      titCont = "待回访";
      break;
    case 8:
      titCont = "已接单";
      break;
    case 7:
      titCont = "待接单";
      break;
    case 9:
      titCont = "维修中";
      break;
    case 10:
      titCont = "维修中";
      break;
    case 11:
      titCont = "维修中";
      break;
    case 12:
      titCont = "维修中";
      break;
    case 13:
      titCont = "维修中";
      break;
    case 14:
      titCont = "待审核";
      break;
    case 15:
      titCont = "已完成";
      break;
    case 6:
      titCont = "已完成";
      break;
    case 16:
      titCont = "待处理";
      break;
  }
  return titCont;
}

function close_detail() {
  var cont = '<iframe src="closeDetail.html" frameborder="0" scrolling="no" width="100%" height="800px"></iframe>';
  $("#detail_frame").html(cont);
}

// function addMachine() {
//     $("#add").removeAttr("onclick");
//     if($("#name").val() == ""){
//         alert("用户名为空！");
//     }else if($("#name").val().length > 15){
//         alert("请输入正确的用户名！");
//     }else if($("#createMobile").val() == ""){
//         alert("用户电话为空！");
//     }else {
//         var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
//         var reg_0519 = /0\d{2,3}-\d{7,8}/;
//         if (!myreg.test($("#createMobile").val()) && !reg_0519.test($("#createMobile").val())) {
//             alert("电话格式错误！");
//         }else {
//             document.getElementById("machine_add").style.display = "block";
//             $("#date_yy-mm-dd").val("");
//             $("#barCode").val("");
//             $("#outNum").val("");
//
//             $("#lineNum").empty();
//             $("#seriesNum").empty();
//             $("#modelNum").empty();
//             $("#lineNum").removeAttr("disabled");
//             $("#seriesNum").removeAttr("disabled");
//             $("#modelNum").removeAttr("disabled");
//
//             $("#province").empty();
//             $("#city").empty();
//             ajax_getLineNum();
//             ajax_getSeriesNum();
//             ajax_getModelNum();
//             $("#lineNum").change(function () {
//                 $("#seriesNum").empty();
//                 ajax_getSeriesNum();
//                 if($("#seriesNum").change()){
//                     $("#modelNum").empty();
//                     ajax_getModelNum();
//                 }
//
//                 $("#seriesNum").change(function () {
//                     $("#modelNum").empty();
//                     ajax_getModelNum();
//                 });
//             });
//             $("#seriesNum").change(function () {
//                 $("#modelNum").empty();
//                 ajax_getModelNum();
//             });
//
//             // $("#seriesNum").change(function () {
//             //     alert($("#seriesNum").val());
//             //     ajax_getModelNum();
//             // });
//             $.ajax({
//                 type: "post",
//                 async: false,
//                 url: ip_path + "/changfa_system/place/getProvince.do",
//                 dataType: "json",
//                 success: function (data) {
//                     for (var i = 0; i < data['body']['resultList']['length']; i++) {
//                         $("#province").append("<option value='" + data['body']['resultList'][i]['id'] + "'>" + data['body']['resultList'][i]['name'] + "</option>");
//                     }
//                     $("#province").unbind();
//                 }
//             });
//             if($("#province").val() != ""){
//                 $("#city").empty();
//                 ajax_getCity();
//             }
//             $("#province").change(function () {
//                 $("#city").empty();
//                 ajax_getCity();
//             });
//         }
//     }
// }
//
// function openMachineList() {
//     $("#machine_list").show();
//     $("#factoryNum").val("");
//     $("#machineList").empty();
// }
//
// function closeMachineList() {
//     $("#machine_list").hide();
// }

function queryMachineList() {
  $("#machineAddress").show();
  $("#province").val("");
  $("#city").val("");
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/userMachine/getMachineInfoByBarCode.do",
    data: {
      factoryNum: $("#factoryNum").val(),
      barCode: $("#barCode").val(),
      pageNum: 1,
      pageSize: 999,
      repairType: $("input[name='repairType']:checked").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] == 200) {
        //显示待选择农机列表
        $("#exitFactoryNum").show();

        $("#machineInfo").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var path = "";
          if (data['body']['result']['data'][i]['lineNum'] == 611 || data['body']['result']['data'][i]['lineNum'] == 61101 || data['body']['result']['data'][i]['lineNum'] == 61102) {
            path = "img/chayangji.png";
          } else if (data['body']['result']['data'][i]['lineNum'] == 601) {
            path = "img/tuolaji.png";
          } else if (data['body']['result']['data'][i]['lineNum'] == 612 || data['body']['result']['data'][i]['lineNum'] == 615 || data['body']['result']['data'][i]['lineNum'] == 622 || data['body']['result']['data'][i]['lineNum'] == 628) {
            path = "img/shougeji.png";
          } else {
            path = "";
          }

          var status;
          switch (data['body']['result']['data'][i]['status']) {
            case 1:
              status = "发货中";
              break;
            case 2:
              status = "在库中";
              break;
            case 3:
              status = "调拨中";
              break;
            case 4:
              status = "退货中";
              break;
            case 5:
              status = "返厂中";
              break;
            case 6:
              status = "已销售";
              break;
          }

          $("#machineInfo").append(
            "<tr>" +
            '<td class="td2 txt_center" height="46px"><img src="' + path + '"></td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['lineName'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['seriesName'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['machineName'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['buyTime'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['factoryNum'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['address'] + '</td>' +
            '<td class="td2 txt_center" >' + status + '</td>' +
            '<td class="td2 txt_center" ><input type="radio" class="choose_select" name="choosed" onclick="selectExits()"></td>' +
            '<td class="td2 txt_center" style="display: none;">' + data['body']['result']['data'][i]['machineNum'] + '</td>' +
            '<td class="td2 txt_center" style="display: none;">' + data['body']['result']['data'][i]['lng'] + '</td>' +
            '<td class="td2 txt_center" style="display: none;">' + data['body']['result']['data'][i]['lat'] + '</td>' +
            '<td class="td2 txt_center" style="display: none;">' + data['body']['result']['data'][i]['userMobile'] + '</td>' +
            '<td class="td2 txt_center" style="display: none;">' + data['body']['result']['data'][i]['userName'] + '</td>' +
            '<td class="td2 txt_center" style="display: none;">' + data['body']['result']['data'][i]['machineId'] + '</td>' +
            '<td class="td2 txt_center" style="display: none;">' + data['body']['result']['data'][i]['engineBrand'] + '</td>' +
            '<td class="td2 txt_center" style="display: none;">' + data['body']['result']['data'][i]['engineNum'] + '</td>' +
            '</tr>'
          );
        }
      } else {
        $("#exitFactoryNum").hide();
        window.confirm(data['head']['message']);
      }
    }
  });
}

function selectExits() {
  $("#createMobile").val($("input[name='choosed']:checked").parent().parent().find("td").eq(12).html());
  $("#name").val($("input[name='choosed']:checked").parent().parent().find("td").eq(13).html());
  if ($("input[name='choosed']:checked").parent().parent().find("td").eq(6).html() != "") {
    $("#machineAddress").hide();
  } else {
    $("#machineAddress").show();
  }

  $("#brand").text($("input[name='choosed']:checked").parent().parent().find("td").eq(15).html());
  $("#number").text($("input[name='choosed']:checked").parent().parent().find("td").eq(16).html());
}

// function chooseOneMachine() {
//     var radio = $("input[type='radio']:checked");
//     var outNum = radio.parent().parent().find("td").eq(0).html();
//     var lineNum = radio.parent().parent().find("td").eq(1).html();
//     var seriesNum = radio.parent().parent().find("td").eq(3).html();
//     var modelNum = radio.parent().parent().find("td").eq(5).html();
//
//     $("#outNum").val(outNum);
//
//     $("#lineNum").val(lineNum);
//     ajax_getSeriesNum();
//     $("#seriesNum").val(seriesNum);
//     ajax_getModelNum();
//     $("#modelNum").val(modelNum);
//     $("#lineNum").attr("disabled",true);
//     $("#seriesNum").attr("disabled",true);
//     $("#modelNum").attr("disabled",true);
//
//     $("#machine_list").hide();
// }
//
// function close_add() {
//     document.getElementById("machine_add").style.display = "none";
//     $("#add").attr("onclick","addMachine()");
// }

function return_rep() {
  window.open("repaired_detail.html", "_self");
}

// function addMachineToUser() {
//     var reg_outNum = /^[0-9a-zA-Z]+$/;
//     var reg_barCode = /^[0-9]{18}$/;
//     if(!reg_outNum.test($("#outNum").val()) && $("#outNum").val() != ""){
//         alert("出厂编号只能由字母和数字组成！");
//     }else {
//         $.ajax({
//             type : "post",
//             async : false,
//             url : ip_path+"/changfa_system/userMachine/addUserAndMachine.do",
//             data : {
//                 lineNum : $("#lineNum").val(),
//                 seriesNum : $("#seriesNum").val(),
//                 modelNum : $("#modelNum").val(),
//                 buyTime : $("#date_yy-mm-dd").val(),
//                 factoryNum : $("#outNum").val(),
//                 phoneNum : $("#createMobile").val(),
//                 name : $("#name").val(),
//                 address : $("#province option:selected").text()+"-"+$("#city option:selected").text()
//             },
//             dataType : "json",
//             success : function (data) {
//                 if(data['head']['isSuccess']){
//                     $("#add").attr("onclick","addMachine()");
//                     document.getElementById("machine_add").style.display = "none";
//                     currentPage = 1;
//                     ajax_machine();
//                 }else {
//                     alert(data['head']['message']);
//                 }
//             }
//         });
//     }
// }

var report_Id = "";

function dispatch_4001() {
  //模糊保修
  if ($("#name").val() == "") {
    alert("用户名为空！");
  } else if ($("#name").val().length > 25) {
    alert("请输入正确的用户名！");
  } else if ($("#error_d").val().length > 150) {
    alert("故障描述字数超出限制！");
  } else if ($("#createMobile").val() == "") {
    alert("用户电话为空！");
  } else if ($("#date_yy-mm-dd").val() == "" && $("#storeRepair").is(":checked") =="false") {
    alert("购买日期为空！");
    return false;
  }else {
    //var myreg = /^(13[0-9]|14[1|4|5|6|7|8]|15[0|1|2|3|5|6|7|8|9]|166|17[0|1|3|5|6|7|8]|18[0-9]|19[8|9])\d{8}$/;
    var myreg = /^1(3|4|5|6|7|8|9)\d{9}$/;
    var reg_0519 = /0\d{2,3}-\d{7,8}/;
    if (!myreg.test($("#createMobile").val()) && !reg_0519.test($("#createMobile").val())) {
      alert("请输入正确的手机号格式！");
    } else {
      //维修类型为到店维修时，农机位置非必填
      if ($("input[name='repairType']:checked").val() == 2) {
        var machineName = $("#lineNum1 option:selected").text();
        var machine_model = $("#modelNum1 option:selected").val();
        var machine_address;
        if ($("#province option:selected").text() == "全部" || $("#city option:selected").text() == "全部" || $("#country option:selected").text() == "全部") {
          machine_address = "";
        } else {
          machine_address = $("#province option:selected").text() + "-" + $("#city option:selected").text() + "-" + $("#country option:selected").text() + "-" + $("#zhen").val();
        }
        // var machine_time = $("input[type='radio']:checked").parent().parent().find("td").eq(5).html();
        var token = $(window.parent.document).find("input[name='token']").val();

        let setid = $("#lineNum1 option:selected").val();
        //console.log(setid,123)
        let type = 1;
        if(setid == 605) {
          type = 2;
        }
        $.ajax({
          type: "post",
          async: false,
          //url: ip_path + "/changfa_system/reportRepair/saveReport.do",
          url: ip_path + "/changfa_system/powerReport/savePowerReport.do",
          data: {
            type:type,
            token: token,
            name: $("#name").val(),
            mobile: $("#createMobile").val(),
            masterUserName: $("#callName").val(),
            masterUserMobile: $("#callMobile").val(),
            address: machine_address,
            machineName: machineName,
            machineModel: machine_model,
            factoryNum: "",
            machineId: "",
            description: $("#error_d").val(),
            buyTime: $("#date_yy-mm-dd").val(),
            expectedMileage: $("#createDistance").val(),
            repairType: $("input[name='repairType']:checked").val(),
            customerType: $("#customerType option:selected").val(),
            lng: $("input[name='choosed']:checked").parent().parent().find("td").eq(10).html(),
            lat: $("input[name='choosed']:checked").parent().parent().find("td").eq(11).html(),
            useTypeId:$("#yongtu").val(),
            matchMachineId:$("#leixing").val(),
            matchBrandId: $("#pinpai").val(),
            factoryNum:$("#translation").val(),
          },
          dataType: "json",
          success: function (data) {
            if (data['head']['code'] == 200) {
              $("#rpt_400").val(data['body']['result']['reportId']);
              // $("#proId").val(data['body']['result']['provinceId']);
              // $("#cityId").val(data['body']['result']['cityId']);
              $("#repair_type").val(data['body']['result']['repairType']);
              $("#machine_address").val(machine_address);
              var cont = "<iframe id='dis_check' src='ddispatching_check.html' frameborder='0' scrolling='no' width='100%' height='2000px;'></iframe>";
              $("#detail_frame").html(cont);
              var childFrameObj = document.getElementById("dis_check");
              childFrameObj.contentWindow.paramFromParent = $("#rpt_400").val();

              $("#text1").removeClass("fontGreen");
              $("#text2").addClass("fontGreen");
              $("#status1").removeClass("status_on_special");
              $("#status1").addClass("status_on");
              $("#status2").removeClass("status_off");
              $("#status2").addClass("status_ing");
              document.getElementById("line1").style.border = "3px solid #1ABC9C";
            } else {
              alert(data['head']['message']);
            }
          }
        });
      } else {
        //非到店维修
        if ($("#province option:selected").text() == "全部" || $("#city option:selected").text() == "全部" || $("#country option:selected").text() == "全部" || $("#zhen").val() == "") {
          alert("请选填报修农机位置！");
        } else {
          var machineName = $("#lineNum1 option:selected").text();
          var machine_model = $("#modelNum1 option:selected").val();
          var machine_address = $("#province option:selected").text() + "-" + $("#city option:selected").text() + "-" + $("#country option:selected").text() + "-" + $("#zhen").val();
          // var machine_time = $("input[type='radio']:checked").parent().parent().find("td").eq(5).html();
          var token = $(window.parent.document).find("input[name='token']").val();
          let setid = $("#lineNum1 option:selected").val();
          //console.log(setid,123)
          let type = 1;
          if(setid == 605) {
            type = 2;
          }
          $.ajax({
            type: "post",
            async: false,
            //url: ip_path + "/changfa_system/reportRepair/saveReport.do",
            url: ip_path + "/changfa_system/powerReport/savePowerReport.do",
            data: {
              type:type,
              token: token,
              name: $("#name").val(),
              mobile: $("#createMobile").val(),
              masterUserName: $("#callName").val(),
              masterUserMobile: $("#callMobile").val(),
              address: machine_address,
              machineName: machineName,
              machineModel: machine_model,
              factoryNum: "",
              machineId: "",
              description: $("#error_d").val(),
              buyTime: $("#date_yy-mm-dd").val(),
              expectedMileage: $("#createDistance").val(),
              repairType: $("input[name='repairType']:checked").val(),
              customerType: $("#customerType option:selected").val(),
              lng: $("input[name='choosed']:checked").parent().parent().find("td").eq(10).html(),
              lat: $("input[name='choosed']:checked").parent().parent().find("td").eq(11).html(),
              useTypeId:$("#yongtu").val(),
              matchMachineId:$("#leixing").val(),
              matchBrandId: $("#pinpai").val(),
              factoryNum:$("#translation").val(),
              
            },
            dataType: "json",
            success: function (data) {
              if (data['head']['code'] == 200) {
                $("#rpt_400").val(data['body']['result']['reportId']);
                // $("#proId").val(data['body']['result']['provinceId']);
                // $("#cityId").val(data['body']['result']['cityId']);
                $("#repair_type").val(data['body']['result']['repairType']);
                $("#machine_address").val(machine_address);
                var cont = "<iframe id='dis_check' src='ddispatching_check.html' frameborder='0' scrolling='no' width='100%' height='2000px;'></iframe>";
                $("#detail_frame").html(cont);
                var childFrameObj = document.getElementById("dis_check");
                childFrameObj.contentWindow.paramFromParent = $("#rpt_400").val();

                $("#text1").removeClass("fontGreen");
                $("#text2").addClass("fontGreen");
                $("#status1").removeClass("status_on_special");
                $("#status1").addClass("status_on");
                $("#status2").removeClass("status_off");
                $("#status2").addClass("status_ing");
                document.getElementById("line1").style.border = "3px solid #1ABC9C";
              } else {
                alert(data['head']['message']);
              }
            }
          });
        }
      }
    }
  }

}

function dispatch_400() {
  //精确报修
  if (document.getElementById("noFactoryNum").style.display == "none") {
    if ($("#name").val() == "") {
      alert("用户名为空！");
    } else if ($("#name").val().length > 25) {
      alert("请输入正确的用户名！");
    } else if ($("#error_d").val().length > 150) {
      alert("故障描述字数超出限制！");
    } else if ($("#createMobile").val() == "") {
      alert("用户电话为空！");
    } else {
      //var myreg=/^(13[0-9]|14[1|4|5|6|7|8]|15[0|1|2|3|5|6|7|8|9]|166|17[0|1|3|5|6|7|8]|18[0-9]|19[1|8|9])\d{8}$/;
      var myreg = /^1(3|4|5|6|7|8|9)\d{9}$/;
      var reg_0519 = /0\d{2,3}-\d{7,8}/;
      if (!myreg.test($("#createMobile").val()) && !reg_0519.test($("#createMobile").val())) {

        alert("请输入正确的手机号格式！");
      } else if ($("input[name='choosed']:checked").parent().parent().find("td").eq(8).html() == undefined) {
        alert("请选择报修农机！");
      } else if ($("input[name='choosed']:checked").parent().parent().find("td").eq(6).html() == "") {
        //精确保修农机无定位时
        //维修类型为到店维修时，农机位置非必填
        if ($("input[name='repairType']:checked").val() == 2) {
          var machineName = $("input[name='choosed']:checked").parent().parent().find("td").eq(1).html();
          var machine_model = $("input[name='choosed']:checked").parent().parent().find("td").eq(9).html();
          var machine_address;
          if ($("input[name='choosed']:checked").parent().parent().find("td").eq(6).html() == "") {
            if ($("#province option:selected").text() == "全部" || $("#city option:selected").text() == "全部" || $("#country option:selected").text() == "全部") {
              machine_address = "";
            } else {
              machine_address = $("#province option:selected").text() + "-" + $("#city option:selected").text() + "-" + $("#country option:selected").text() + "-" + $("#zhen").val();
            }
          } else {
            machine_address = $("input[name='choosed']:checked").parent().parent().find("td").eq(6).html();
          }
          var buyTime = $("input[name='choosed']:checked").parent().parent().find("td").eq(4).html();
          var machine_factoryNum = $("input[name='choosed']:checked").parent().parent().find("td").eq(5).html();
          var token = $(window.parent.document).find("input[name='token']").val();
          var machineId = $("input[name='choosed']:checked").parent().parent().find("td").eq(14).html();

          $.ajax({
            type: "post",
            async: false,
            url: ip_path + "/changfa_system/reportRepair/saveReport.do",
            data: {
              token: token,
              name: $("#name").val(),
              mobile: $("#createMobile").val(),
              masterUserName: $("#callName").val(),
              masterUserMobile: $("#callMobile").val(),
              address: machine_address,
              machineName: machineName,
              machineModel: machine_model,
              description: $("#error_d").val(),
              buyTime: buyTime,
              factoryNum: machine_factoryNum,
              machineId: machineId,
              expectedMileage: $("#createDistance").val(),
              repairType: $("input[name='repairType']:checked").val(),
              customerType: $("#customerType option:selected").val(),
              lng: $("input[name='choosed']:checked").parent().parent().find("td").eq(10).html(),
              lat: $("input[name='choosed']:checked").parent().parent().find("td").eq(11).html()
            },
            dataType: "json",
            success: function (data) {
              if (data['head']['code'] == 200) {
                $("#rpt_400").val(data['body']['result']['reportId']);
                $("#proId").val(data['body']['result']['provinceId']);
                $("#cityId").val(data['body']['result']['cityId']);
                $("#repair_type").val(data['body']['result']['repairType']);
                $("#machine_address").val(machine_address);
                var cont = "<iframe id='dis_check' src='dispatching_check.html' frameborder='0' scrolling='no' width='100%' height='2000px;'></iframe>";
                $("#detail_frame").html(cont);
                var childFrameObj = document.getElementById("dis_check");
                childFrameObj.contentWindow.paramFromParent = $("#rpt_400").val();

                $("#text1").removeClass("fontGreen");
                $("#text2").addClass("fontGreen");
                $("#status1").removeClass("status_on_special");
                $("#status1").addClass("status_on");
                $("#status2").removeClass("status_off");
                $("#status2").addClass("status_ing");
                document.getElementById("line1").style.border = "3px solid #1ABC9C";
              } else {
                alert(data['head']['message']);
              }
            }
          });
        } else {
          //维修类型不是到店维修时，农机位置必填
          if ($("#province option:selected").text() == "全部" || $("#city option:selected").text() == "全部" || $("#country option:selected").text() == "全部" || $("#zhen").val() == "") {
            alert("请选填报修农机位置！");
          } else {
            var machineName = $("input[name='choosed']:checked").parent().parent().find("td").eq(1).html();
            var machine_model = $("input[name='choosed']:checked").parent().parent().find("td").eq(9).html();
            var machine_address;
            if ($("input[name='choosed']:checked").parent().parent().find("td").eq(6).html() == "") {
              machine_address = $("#province option:selected").text() + "-" + $("#city option:selected").text() + "-" + $("#country option:selected").text() + "-" + $("#zhen").val();
            } else {
              machine_address = $("input[name='choosed']:checked").parent().parent().find("td").eq(6).html();
            }
            var buyTime = $("input[name='choosed']:checked").parent().parent().find("td").eq(4).html();
            var machine_factoryNum = $("input[name='choosed']:checked").parent().parent().find("td").eq(5).html();
            var token = $(window.parent.document).find("input[name='token']").val();
            var machineId = $("input[name='choosed']:checked").parent().parent().find("td").eq(14).html();

            $.ajax({
              type: "post",
              async: false,
              url: ip_path + "/changfa_system/reportRepair/saveReport.do",
              data: {
                token: token,
                name: $("#name").val(),
                mobile: $("#createMobile").val(),
                masterUserName: $("#callName").val(),
                masterUserMobile: $("#callMobile").val(),
                address: machine_address,
                machineName: machineName,
                machineModel: machine_model,
                description: $("#error_d").val(),
                buyTime: buyTime,
                factoryNum: machine_factoryNum,
                machineId: machineId,
                expectedMileage: $("#createDistance").val(),
                repairType: $("input[name='repairType']:checked").val(),
                customerType: $("#customerType option:selected").val(),
                lng: $("input[name='choosed']:checked").parent().parent().find("td").eq(10).html(),
                lat: $("input[name='choosed']:checked").parent().parent().find("td").eq(11).html()
              },
              dataType: "json",
              success: function (data) {
                if (data['head']['code'] == 200) {
                  $("#rpt_400").val(data['body']['result']['reportId']);
                  $("#proId").val(data['body']['result']['provinceId']);
                  $("#cityId").val(data['body']['result']['cityId']);
                  $("#repair_type").val(data['body']['result']['repairType']);
                  $("#machine_address").val(machine_address);
                  var cont = "<iframe id='dis_check' src='dispatching_check.html' frameborder='0' scrolling='no' width='100%' height='2000px;'></iframe>";
                  $("#detail_frame").html(cont);
                  var childFrameObj = document.getElementById("dis_check");
                  childFrameObj.contentWindow.paramFromParent = $("#rpt_400").val();

                  $("#text1").removeClass("fontGreen");
                  $("#text2").addClass("fontGreen");
                  $("#status1").removeClass("status_on_special");
                  $("#status1").addClass("status_on");
                  $("#status2").removeClass("status_off");
                  $("#status2").addClass("status_ing");
                  document.getElementById("line1").style.border = "3px solid #1ABC9C";
                } else {
                  alert(data['head']['message']);
                }
              }
            });
          }
        }
      } else {
        var machineName = $("input[name='choosed']:checked").parent().parent().find("td").eq(1).html();
        var machine_model = $("input[name='choosed']:checked").parent().parent().find("td").eq(9).html();
        var machine_address;
        if ($("input[name='choosed']:checked").parent().parent().find("td").eq(6).html() == "") {
          machine_address = $("#province option:selected").text() + "-" + $("#city option:selected").text() + "-" + $("#country option:selected").text() + "-" + $("#zhen").val();
        } else {
          machine_address = $("input[name='choosed']:checked").parent().parent().find("td").eq(6).html();
        }
        var buyTime = $("input[name='choosed']:checked").parent().parent().find("td").eq(4).html();
        var machine_factoryNum = $("input[name='choosed']:checked").parent().parent().find("td").eq(5).html();
        var token = token = $(window.parent.document).find("input[name='token']").val();
        var machineId = $("input[name='choosed']:checked").parent().parent().find("td").eq(14).html();

        $.ajax({
          type: "post",
          async: false,
          url: ip_path + "/changfa_system/reportRepair/saveReport.do",
          data: {
            token: token,
            name: $("#name").val(),
            mobile: $("#createMobile").val(),
            masterUserName: $("#callName").val(),
            masterUserMobile: $("#callMobile").val(),
            address: machine_address,
            machineName: machineName,
            machineModel: machine_model,
            description: $("#error_d").val(),
            buyTime: buyTime,
            factoryNum: machine_factoryNum,
            machineId: machineId,
            expectedMileage: $("#createDistance").val(),
            repairType: $("input[name='repairType']:checked").val(),
            customerType: $("#customerType option:selected").val(),
            lng: $("input[name='choosed']:checked").parent().parent().find("td").eq(10).html(),
            lat: $("input[name='choosed']:checked").parent().parent().find("td").eq(11).html()
          },
          dataType: "json",
          success: function (data) {
            if (data['head']['code'] == 200) {
              $("#rpt_400").val(data['body']['result']['reportId']);
              $("#proId").val(data['body']['result']['provinceId']);
              $("#cityId").val(data['body']['result']['cityId']);
              $("#repair_type").val(data['body']['result']['repairType']);
              $("#machine_address").val(machine_address);
              var cont = "<iframe id='dis_check' src='dispatching_check.html' frameborder='0' scrolling='no' width='100%' height='2000px;'></iframe>";
              $("#detail_frame").html(cont);
              var childFrameObj = document.getElementById("dis_check");
              childFrameObj.contentWindow.paramFromParent = $("#rpt_400").val();

              $("#text1").removeClass("fontGreen");
              $("#text2").addClass("fontGreen");
              $("#status1").removeClass("status_on_special");
              $("#status1").addClass("status_on");
              $("#status2").removeClass("status_off");
              $("#status2").addClass("status_ing");
              document.getElementById("line1").style.border = "3px solid #1ABC9C";
            } else {
              alert(data['head']['message']);
            }
          }
        });
      }
    }
  } else {
    //模糊保修
    if ($("#name").val() == "") {
      alert("用户名为空！");
    } else if ($("#name").val().length > 25) {
      alert("请输入正确的用户名！");
    } else if ($("#error_d").val().length > 150) {
      alert("故障描述字数超出限制！");
    } else if ($("#createMobile").val() == "") {
      alert("用户电话为空！");
    } else {
      //var myreg = /^(13[0-9]|14[1|4|5|6|7|8]|15[0|1|2|3|5|6|7|8|9]|166|17[0|1|3|5|6|7|8]|18[0-9]|19[8|9])\d{8}$/;
      var myreg = /^1(3|4|5|6|7|8|9)\d{9}$/;
      var reg_0519 = /0\d{2,3}-\d{7,8}/;
      if (!myreg.test($("#createMobile").val()) && !reg_0519.test($("#createMobile").val())) {
        alert("请输入正确的手机号格式！");
      } else {
        //维修类型为到店维修时，农机位置非必填
        if ($("input[name='repairType']:checked").val() == 2) {
          var machineName = $("#lineNum option:selected").text();
          var machine_model = $("#modelNum option:selected").val();
          var machine_address;
          if ($("#province option:selected").text() == "全部" || $("#city option:selected").text() == "全部" || $("#country option:selected").text() == "全部") {
            machine_address = "";
          } else {
            machine_address = $("#province option:selected").text() + "-" + $("#city option:selected").text() + "-" + $("#country option:selected").text() + "-" + $("#zhen").val();
          }
          // var machine_time = $("input[type='radio']:checked").parent().parent().find("td").eq(5).html();
          var token = $(window.parent.document).find("input[name='token']").val();

          $.ajax({
            type: "post",
            async: false,
            url: ip_path + "/changfa_system/reportRepair/saveReport.do",
            data: {
              token: token,
              name: $("#name").val(),
              mobile: $("#createMobile").val(),
              masterUserName: $("#callName").val(),
              masterUserMobile: $("#callMobile").val(),
              address: machine_address,
              machineName: machineName,
              machineModel: machine_model,
              factoryNum: "",
              machineId: "",
              description: $("#error_d").val(),
              buyTime: $("#date_yy-mm-dd").val(),
              expectedMileage: $("#createDistance").val(),
              repairType: $("input[name='repairType']:checked").val(),
              customerType: $("#customerType option:selected").val(),
              lng: $("input[name='choosed']:checked").parent().parent().find("td").eq(10).html(),
              lat: $("input[name='choosed']:checked").parent().parent().find("td").eq(11).html()
            },
            dataType: "json",
            success: function (data) {
              if (data['head']['code'] == 200) {
                $("#rpt_400").val(data['body']['result']['reportId']);
                // $("#proId").val(data['body']['result']['provinceId']);
                // $("#cityId").val(data['body']['result']['cityId']);
                $("#repair_type").val(data['body']['result']['repairType']);
                $("#machine_address").val(machine_address);
                var cont = "<iframe id='dis_check' src='dispatching_check.html' frameborder='0' scrolling='no' width='100%' height='2000px;'></iframe>";
                $("#detail_frame").html(cont);
                var childFrameObj = document.getElementById("dis_check");
                childFrameObj.contentWindow.paramFromParent = $("#rpt_400").val();

                $("#text1").removeClass("fontGreen");
                $("#text2").addClass("fontGreen");
                $("#status1").removeClass("status_on_special");
                $("#status1").addClass("status_on");
                $("#status2").removeClass("status_off");
                $("#status2").addClass("status_ing");
                document.getElementById("line1").style.border = "3px solid #1ABC9C";
              } else {
                alert(data['head']['message']);
              }
            }
          });
        } else {
          //非到店维修
          if ($("#province option:selected").text() == "全部" || $("#city option:selected").text() == "全部" || $("#country option:selected").text() == "全部" || $("#zhen").val() == "") {
            alert("请选填报修农机位置！");
          } else {
            var machineName = $("#lineNum option:selected").text();
            var machine_model = $("#modelNum option:selected").val();
            var machine_address = $("#province option:selected").text() + "-" + $("#city option:selected").text() + "-" + $("#country option:selected").text() + "-" + $("#zhen").val();
            // var machine_time = $("input[type='radio']:checked").parent().parent().find("td").eq(5).html();
            var token = $(window.parent.document).find("input[name='token']").val();

            $.ajax({
              type: "post",
              async: false,
              url: ip_path + "/changfa_system/reportRepair/saveReport.do",
              data: {
                token: token,
                name: $("#name").val(),
                mobile: $("#createMobile").val(),
                masterUserName: $("#callName").val(),
                masterUserMobile: $("#callMobile").val(),
                address: machine_address,
                machineName: machineName,
                machineModel: machine_model,
                factoryNum: "",
                machineId: "",
                description: $("#error_d").val(),
                buyTime: $("#date_yy-mm-dd").val(),
                expectedMileage: $("#createDistance").val(),
                repairType: $("input[name='repairType']:checked").val(),
                customerType: $("#customerType option:selected").val(),
                lng: $("input[name='choosed']:checked").parent().parent().find("td").eq(10).html(),
                lat: $("input[name='choosed']:checked").parent().parent().find("td").eq(11).html()
              },
              dataType: "json",
              success: function (data) {
                if (data['head']['code'] == 200) {
                  $("#rpt_400").val(data['body']['result']['reportId']);
                  // $("#proId").val(data['body']['result']['provinceId']);
                  // $("#cityId").val(data['body']['result']['cityId']);
                  $("#repair_type").val(data['body']['result']['repairType']);
                  $("#machine_address").val(machine_address);
                  var cont = "<iframe id='dis_check' src='dispatching_check.html' frameborder='0' scrolling='no' width='100%' height='2000px;'></iframe>";
                  $("#detail_frame").html(cont);
                  var childFrameObj = document.getElementById("dis_check");
                  childFrameObj.contentWindow.paramFromParent = $("#rpt_400").val();

                  $("#text1").removeClass("fontGreen");
                  $("#text2").addClass("fontGreen");
                  $("#status1").removeClass("status_on_special");
                  $("#status1").addClass("status_on");
                  $("#status2").removeClass("status_off");
                  $("#status2").addClass("status_ing");
                  document.getElementById("line1").style.border = "3px solid #1ABC9C";
                } else {
                  alert(data['head']['message']);
                }
              }
            });
          }
        }
      }
    }
  }
}

function makeLarger(event) {
  parent.parent.pic_makeLarge(event);
}

function makeLarger_instore(event) {
  parent.pic_makeLarge(event);
}

function to_lastReport() {
  $(window.parent.parent.document).find("input[name='history_mark']").val("");
  //window.open("repaireNeedDetail.html?reportID=" + base64encode($(window.parent.parent.document).find("input[name='old_rptId']").val()), "_parent");
  $(window.parent.parent.document).find("input[name='reportId']").val($(window.parent.parent.document).find("input[name='old_rptId']").val());
  
  window.open("repaireNeedDetail.html","_parent");
}

function to_lastReport_400() {
  $(window.parent.parent.document).find("input[name='history_400_mark']").val("");
  window.open("repaireNeedDetail.html?reportID=" + base64encode($(window.parent.parent.document).find("input[name='old_rptId_400']").val()), "_parent");
}

function restartDispatch() {
  var msg = "确定重新派工？";
  if (window.confirm(msg)) {
    $(window.parent.document).find("div[id='text']").html(
      '<span id="text1" class="status_text">报修</span>' +
      '<span id="text2" class="status_text fontGreen">派工</span>' +
      '<span id="text3" class="status_text">接单</span>' +
      '<span id="text4" class="status_text">出发</span>' +
      '<span id="text5" class="status_text">到达</span>' +
      '<span id="text6" class="status_text">审核</span>' +
      '<span id="text7">完成</span>' +
      '</div>'
    );
    $("#statu").html(
      '<div id="status1" class="status_on" onclick="to_rpt(this)"></div>' +
      '<div id="line1" class="line_on flt_l"></div>' +
      '<div id="status2" class="status_ing"></div>' +
      '<div class="line flt_l"></div>' +
      '<div id="status3" class="status_off"></div>' +
      '<div class="line flt_l"></div>' +
      '<div id="status4" class="status_off"></div>' +
      '<div class="line flt_l"></div>' +
      '<div id="status5" class="status_off"></div>' +
      '<div class="line flt_l"></div>' +
      '<div id="status6" class="status_off"></div>' +
      '<div class="line flt_l"></div>' +
      '<div id="status7" class="status_off"></div>' +
      '</div>'
    );
    $("time2").html("");
    $("time3").html("");
    $("time4").html("");
    $("time5").html("");
    $("time6").html("");
    $("time7").html("");

    // reDispatch = 1;
    window.open("dispatching_checkRedis.html", "_self");
  }
}

function reviewArgument(event) {
  var oldId;
  for (var j = 1; j <= 5; j++) {
    oldId = "review" + j;
    $("#" + oldId).attr("src", "http://app.changfanz.net:3588/changfa_file/star_empty.png");
  }
  var num = event.id.substr(event.id.length - 1, 1);
  var newId;
  for (var i = 1; i <= num; i++) {
    newId = "review" + i;
    $("#" + newId).attr("src", "http://app.changfanz.net:3588/changfa_file/star_full.png");
  }
  $("#visitLevel").text(num);
}

function serviceArgument(event) {
  var oldId;
  for (var j = 1; j <= 5; j++) {
    oldId = "service" + j;
    $("#" + oldId).attr("src", "http://app.changfanz.net:3588/changfa_file/star_empty.png");
  }
  var num = event.id.substr(event.id.length - 1, 1);
  var newId;
  for (var i = 1; i <= num; i++) {
    newId = "service" + i;
    $("#" + newId).attr("src", "http://app.changfanz.net:3588/changfa_file/star_full.png");
  }
  $("#serverLevel").text(num);
}

function productArgument(event) {
  var oldId;
  for (var j = 1; j <= 5; j++) {
    oldId = "product" + j;
    $("#" + oldId).attr("src", "http://app.changfanz.net:3588/changfa_file/star_empty.png");
  }
  var num = event.id.substr(event.id.length - 1, 1);
  var newId;
  for (var i = 1; i <= num; i++) {
    newId = "product" + i;
    $("#" + newId).attr("src", "http://app.changfanz.net:3588/changfa_file/star_full.png");
  }
  $("#goodsLevel").text(num);
}

function qualityLevel(event) {
  var oldId;
  for (var j = 1; j <= 5; j++) {
    oldId = "quality" + j;
    $("#" + oldId).attr("src", "http://app.changfanz.net:3588/changfa_file/star_empty.png");
  }
  var num = event.id.substr(event.id.length - 1, 1);
  var newId;
  for (var i = 1; i <= num; i++) {
    newId = "quality" + i;
    $("#" + newId).attr("src", "http://app.changfanz.net:3588/changfa_file/star_full.png");
  }

  var level;
  if (num == 1) {
    level = "C";
  } else if (num == 2) {
    level = "B";
  } else if (num == 3) {
    level = "A";
  }
  $("#qualityLevel").text(level);
}

function toogleRadio() {
  if ($("#yes").is(':checked')) {
    $("#money").removeAttr("disabled");
    $("#moneyReason").removeAttr("disabled");
  } else {
    $("#money").attr("disabled", "disabled");
    $("#moneyReason").attr("disabled", "disabled");
    $("#money").val("");
    $("#moneyReason").val("");
  }
}

function visitOver() {
  if ($("#visitStatus option:selected").val() == 1) {
    var money_reg = /^[1-9][0-9]{0,4}.[0-9]{0,1}$/;
    var money_reg2 = /^[1-9][0-9]{0,4}}$/;
    var distance_reg = /^(0|\d{1,})$/;
    var fee;
    if ($("#yes").is(':checked')) {
      fee = 0;
    } else {
      fee = 1;
    }
    if ($("#visitLevel").text() == "") {
      alert("请选择回访满意度！");
    } else if ($("#serverLevel").text() == "") {
      alert("请选择服务满意度！");
    } else if ($("#goodsLevel").text() == "") {
      alert("请选择产品质量满意度！");
    } else if ($("#distance").val() == "") {
      alert("请填写里程数！");
    } else if ($("#visitView").val() == "") {
      alert("请填写回访意见！");
    } else if ($("#visitView").val().length > 150) {
      alert("回访意见字数超出限制！");
    } else if (!distance_reg.test($("#distance").val())) {
      alert("里程数只能输入数字！");
    } else {
      if (fee == 0) {
        if ($("#money").val() == "") {
          alert("请填写收费金额！");
        } else if (!money_reg.test($("#money").val()) && !money_reg2.test($("#money").val())) {
          alert("收费金额只能有一位小数且小于10万！");
        } else if ($("#moneyReason").val() == "") {
          alert("请填写收费原因！");
        } else if ($("#moneyReason").val().length > 150) {
          alert("收费原因字数超出限制！");
        } else {
          $.ajax({
            type: "post",
            async: false,
            url: ip_path + "/changfa_system/reportComment/returnVisit.do",
            data: {
              reportId: $(window.parent.parent.document).find("input[name='reportId']").val(),
              token: $(window.parent.parent.document).find("input[name='token']").val(),
              examineType: $("#visitStatus option:selected").val(),
              visitLevel: $("#visitLevel").text(),
              serverLevel: $("#serverLevel").text(),
              goodsLevel: $("#goodsLevel").text(),
              visitView: $("#visitView").val(),
              fee: fee,
              money: $("#money").val(),
              moneyReason: $("#moneyReason").val(),
              distance: $("#distance").val(),
              repairType: $("#repairType option:selected").val()
            },
            dataType: "json",
            success: function (data) {
              if (data['head']['code'] == 200) {
                window.open("repaireNeedDetail.html", "_parent");
              } else {
                alert(data['head']['message']);
              }
            }
          });
        }
      } else {
        $.ajax({
          type: "post",
          async: false,
          url: ip_path + "/changfa_system/reportComment/returnVisit.do",
          data: {
            reportId: $(window.parent.parent.document).find("input[name='reportId']").val(),
            token: $(window.parent.parent.document).find("input[name='token']").val(),
            examineType: $("#visitStatus option:selected").val(),
            visitLevel: $("#visitLevel").text(),
            serverLevel: $("#serverLevel").text(),
            goodsLevel: $("#goodsLevel").text(),
            visitContent: $("#visitContent").val(),
            visitView: $("#visitView").val(),
            fee: fee,
            money: $("#money").val(),
            moneyReason: $("#moneyReason").val(),
            distance: $("#distance").val(),
            repairType: $("#repairType option:selected").val()
          },
          dataType: "json",
          success: function (data) {
            if (data['head']['code'] == 200) {
              window.open("repaireNeedDetail.html", "_parent");
            } else {
              alert(data['head']['message']);
            }
          }
        });
      }
    }
  } else if ($("#visitStatus option:selected").val() == 2 || $("#visitStatus option:selected").val() == 3 || $("#visitStatus option:selected").val() == 4) {
    var money_reg = /^[1-9][0-9]{0,4}.[0-9]{0,1}$/;
    var money_reg2 = /^[1-9][0-9]{0,4}}$/;
    var distance_reg = /^(0|\d{1,})$/;
    var fee;
    if ($("#yes").is(':checked')) {
      fee = 0;
    } else {
      fee = 1;
    }
    if ($("#visitView").val().length > 150) {
      alert("回访意见字数超出限制！");
    } else if (!distance_reg.test($("#distance").val()) && $("#distance").val() != "") {
      alert("里程数只能输入数字！");
    } else {
      if (fee == 0) {
        if ($("#money").val() != "" && !money_reg.test($("#money").val()) && !money_reg2.test($("#money").val())) {
          alert("收费金额只能有一位小数且小于10万！");
        } else if ($("#moneyReason").val().length > 150) {
          alert("收费原因字数超出限制！");
        } else {
          $.ajax({
            type: "post",
            async: false,
            url: ip_path + "/changfa_system/reportComment/returnVisit.do",
            data: {
              reportId: $(window.parent.parent.document).find("input[name='reportId']").val(),
              token: $(window.parent.parent.document).find("input[name='token']").val(),
              examineType: $("#visitStatus option:selected").val(),
              visitLevel: $("#visitLevel").text(),
              serverLevel: $("#serverLevel").text(),
              goodsLevel: $("#goodsLevel").text(),
              visitView: $("#visitView").val(),
              fee: fee,
              money: $("#money").val(),
              moneyReason: $("#moneyReason").val(),
              distance: $("#distance").val(),
              repairType: $("#repairType option:selected").val()
            },
            dataType: "json",
            success: function (data) {
              if (data['head']['code'] == 200) {
                window.open("repaireNeedDetail.html", "_parent");
              } else {
                alert(data['head']['message']);
              }
            }
          });
        }
      } else {
        $.ajax({
          type: "post",
          async: false,
          url: ip_path + "/changfa_system/reportComment/returnVisit.do",
          data: {
            reportId: $(window.parent.parent.document).find("input[name='reportId']").val(),
            token: $(window.parent.parent.document).find("input[name='token']").val(),
            examineType: $("#visitStatus option:selected").val(),
            visitLevel: $("#visitLevel").text(),
            serverLevel: $("#serverLevel").text(),
            goodsLevel: $("#goodsLevel").text(),
            visitContent: $("#visitContent").val(),
            visitView: $("#visitView").val(),
            fee: fee,
            money: $("#money").val(),
            moneyReason: $("#moneyReason").val(),
            distance: $("#distance").val(),
            repairType: $("#repairType option:selected").val()
          },
          dataType: "json",
          success: function (data) {
            if (data['head']['code'] == 200) {
              window.open("repaireNeedDetail.html", "_parent");
            } else {
              alert(data['head']['message']);
            }
          }
        });
      }
    }
  }
}

function queryuserArchives() {
  currentPage = 1;
  var rep_info_type_key = $("#rep_guy_uam").attr("id");
  var rep_info_type = $("#rep_guy_uam option:selected").val();
  var rep_info_input_key = $("#rep_info_uam").attr("id");
  var rep_info_input = $("#rep_info_uam").val();
  sessionStorage.setItem(rep_info_type_key, rep_info_type);
  sessionStorage.setItem(rep_info_input_key, rep_info_input);
  if (rep_info_type == "") {
    rep_info_type = null;
  }
  var rep_info = $("#rep_info_uam").val();
  if (rep_info == "") {
    rep_info = null;
  }
  var rep_info_name;
  var rep_info_mobile;
  if (rep_info_name == "") {
    rep_info_name = null;
  }
  if (rep_info_mobile == "") {
    rep_info_mobile = null;
  }
  if (rep_info_type == "姓名") {
    rep_info_name = rep_info;
  }
  if (rep_info_type == "电话") {
    rep_info_mobile = rep_info;
  }
  sessionStorage.removeItem($("#product_uam").attr('id'));
  sessionStorage.removeItem($("#date_start_uam").attr('id'));
  sessionStorage.removeItem($("#date_end_uam").attr('id'));
  $("#product_uam").html(
    '<option value="">全部</option>' +
    '<option value="601">轮式拖拉机</option>' +
    '<option value="61101">手扶插秧机</option>' +
    '<option value="61102">高速插秧机</option>' +
    '<option value="612">履带收割机</option>' +
    '<option value="615">轮式收割机</option>' +
    '<option value="622">轮式玉米收</option>' +
    '<option value="628">花生收获机</option>'
  );
  $("#type").html(
    '<option value="">全部</option>' +
    '<option value="">销售新增</option>' +
    '<option value="">报修新增</option>' +
    '<option value="">绑定新增</option>'
  );
  $("#date_start_uam").val("");
  $("#date_end_uam").val("");

  ajax_userArchives();
}

function showUserArchivesDetails(event) {
  var user_id = event.parentNode.parentNode.id;
  var machine_id = event.parentNode.id;

  $(window.parent.document).find("input[name='userArchivesId']").val(user_id);
  $(window.parent.document).find("input[name='machineId']").val(machine_id);
  window.open("userArchivesDetails.html", "_self");
}

// function chooseIt(event) {
//     var arr = new Array("tag0","tag1","tag2");
//     for(var i=0;i<arr.length;i++){
//         if(arr[i] != event.id){
//             $("#" + arr[i]).removeClass("machine_mark_choosed");
//         }else{
//             $("#" + arr[i]).addClass("machine_mark_choosed");
//         }
//     }
//     $.ajax({
//         type : "post",
//         async : false,
//         url : ip_path+"/changfa_system/userMachine/queryMachineById.do",
//         data : {
//             userId : $(window.parent.document).find("input[name='userArchivesId']").val(),
//             machineId : $("#" + event.id).find("input").val()
//         },
//         dataType : "json",
//         success : function (data) {
//             if(data['head']['code'] == 200){
//                 var path = "";
//                 if(data['body']['result']['lineNum'] == 611 || data['body']['result']['lineNum'] == 61101 || data['body']['result']['lineNum'] == 61102){
//                     path="img/chayangji.png";
//                 }else if(data['body']['result']['lineNum'] == 601){
//                     path="img/tuolaji.png";
//                 }else if(data['body']['result']['lineNum'] == 612 || data['body']['result']['lineNum'] == 615 || data['body']['result']['lineNum'] == 622 || data['body']['result']['lineNum'] == 628){
//                     path="img/shougeji.png";
//                 }else {
//                     path = "";
//                 }
//                 $("#machine_head").attr("src",path);
//                 $("#line").text(data['body']['result']['lineName']);
//                 $("#series").text(data['body']['result']['seriesName']);
//                 $("#model").text(data['body']['result']['modelName']);
//                 $("#outNum").text(data['body']['result']['factoryNum']);
//                 $("#bar_code").text(data['body']['result']['barCode']);
//                 $("#buyTime").text(data['body']['result']['buyTime']);
//                 $("#dealer").text(data['body']['result']['company']);
//                 $("#serviceDate").text(data['body']['result']['serviceDate']);
//                 $("#location").text(data['body']['result']['address']);
//             }else{
//                 alert(data['head']['message']);
//             }
//         }
//     });
// }
//
// function user_waitDispatch() {
//     $("#waitDispatch").addClass("type_choosed");
//     $("#waitAccept").removeClass("type_choosed");
//     $("#finished").removeClass("type_choosed");
//     type = 1;
//     currentPage = 1;
//     ajax_user_serverM();
// }
//
// function user_waitAccept() {
//     $("#waitDispatch").removeClass("type_choosed");
//     $("#waitAccept").addClass("type_choosed");
//     $("#finished").removeClass("type_choosed");
//     type = 2;
//     currentPage = 1;
//     ajax_user_serverM();
// }
//
// function user_finished() {
//     $("#waitDispatch").removeClass("type_choosed");
//     $("#waitAccept").removeClass("type_choosed");
//     $("#finished").addClass("type_choosed");
//     type = 3;
//     currentPage = 1;
//     ajax_user_serverM();
// }
//
// function pre3() {
//     listReset();
//     currentPage -= 1;
//     ajax_machineList();
//     $("#tag0").click();
// }
//
// function next3() {
//     listReset();
//     currentPage += 1;
//     ajax_machineList();
//     $("#tag0").click();
// }
//
// function listReset() {
//     $("#machineList").html(
//         '<div id="tag0" class="machine_mark flt_l" onclick="chooseIt(this)">' +
//         '<div class="flt_l mg-t30 mg_l30">' +
//         '<img id="machine_pic0" class="pic_machine" src="">' +
//         '</div>' +
//         '<div class="flt_l" style="font-size: 0.875em;margin-left: 7%">' +
//         '<p id="modelName0" class="txt_left" style="width: 150px;word-break: break-all"></p>' +
//         '<p id="factoryNum0" class="txt_left" style="width: 150px;word-break: break-all"></p>' +
//         '<p id="barCode0" class="txt_left" style="width: 150px;word-break: break-all"></p>' +
//         '<input type="hidden" id="machineId0" value="">' +
//         '</div>' +
//         '</div>' +
//         '<div id="tag1" class="machine_mark flt_l mg_l15" onclick="chooseIt(this)">' +
//         '<div class="flt_l mg-t30 mg_l30">' +
//         '<img id="machine_pic1" class="pic_machine" src="">' +
//         '</div>' +
//         '<div class="flt_l" style="font-size: 0.875em;margin-left: 7%">' +
//         '<p id="modelName1" class="txt_left" style="width: 150px;word-break: break-all"></p>' +
//         '<p id="factoryNum1" class="txt_left" style="width: 150px;word-break: break-all"></p>' +
//         '<p id="barCode1" class="txt_left" style="width: 150px;word-break: break-all"></p>' +
//         '<input type="hidden" id="machineId1" value="">' +
//         '</div>' +
//         '</div>' +
//         '<div id="tag2" class="machine_mark flt_l mg_l15" onclick="chooseIt(this)">' +
//         '<div class="flt_l mg-t30 mg_l30">' +
//         '<img id="machine_pic2" class="pic_machine" src="">' +
//         '</div>' +
//         '<div class="flt_l" style="font-size: 0.875em;margin-left: 7%">' +
//         '<p id="modelName2" class="txt_left" style="width: 150px;word-break: break-all"></p>' +
//         '<p id="factoryNum2" class="txt_left" style="width: 150px;word-break: break-all"></p>' +
//         '<p id="barCode2" class="txt_left" style="width: 150px;word-break: break-all"></p>' +
//         '<input type="hidden" id="machineId2" value="">' +
//         '</div>' +
//         '</div>'
//     );
// }

//用户农机档案--》单据详情
function showReportDetails(event) {
  var report_id = event.parentNode.parentNode.id;
  $(window.parent.document).find("input[name='reportId']").val(report_id);
  window.open("repaireNeedDetail.html", "_self");
}

//农机详情页->审核
function machine_next() {

  window.open("machine_check.html", "_self");
}

// function to_machineDetail_0() {
//     var cont = '<iframe src="machine_detail.html" frameborder="0" scrolling="no" width="100%" height="1800px"></iframe>';
//     $("#detail_frame").html(cont);
//     $("#status1").addClass("status_on_special");
//     $("#status2").removeClass("status_ing");
//     $("#status2").addClass("status_off");
//     $("#line1").addClass("line_special_off");
//     $("#text1").addClass("fontGreen");
//     $("#text2").removeClass("fontGreen");
// }

// function to_machineDetail_1() {
//     var cont = '<iframe src="machine_detail.html" frameborder="0" scrolling="no" width="100%" height="1800px"></iframe>';
//     $("#detail_frame").html(cont);
//     $("#status1").addClass("status_on_special");
//     $("#status2").removeClass("status_on_special");
//     $("#status2").addClass("status_on");
//     $("#text1").addClass("fontGreen");
//     $("#text2").removeClass("fontGreen");
// }

// function to_machineDetail_2() {
//     var cont = '<iframe src="machine_detail.html" frameborder="0" scrolling="no" width="100%" height="1800px"></iframe>';
//     $("#detail_frame").html(cont);
//     $("#status1").addClass("status_on_special");
//     $("#status2").removeClass("status_closed");
//     $("#status2").addClass("status_close");
//     $("#text1").addClass("fontGreen");
//     $("#text2").removeClass("fontGreen");
// }

function to_finishDetail() {
  var cont = '<iframe src="machine_finishDetail.html" frameborder="0" scrolling="no" width="100%" height="700px"></iframe>';
  $("#detail_frame").html(cont);
  $("#status2").addClass("status_on_special");
  $("#status1").removeClass("status_on_special");
  $("#status1").addClass("status_on");
  $("#text2").addClass("fontGreen");
  $("#text1").removeClass("fontGreen");
}

function to_closeDetail() {
  var cont = '<iframe src="machine_closeDetail.html" frameborder="0" scrolling="no" width="100%" height="700px"></iframe>';
  $("#detail_frame").html(cont);
  $("#status1").removeClass("status_on_special");
  $("#status1").addClass("status_on");
  $("#status2").removeClass("status_close");
  $("#status2").addClass("status_closed");
  $("#text2").addClass("fontGreen");
  $("#text1").removeClass("fontGreen");
}

function machineCheckUnpass() {
  var url;
  var json;
  if ($(window.parent.parent.document).find("input[name='roleId']").val() == 22) {
    url = ip_path + "/changfa_system/machineFlow/secondApproval.do";
    json = {
      flow_id: $(window.parent.parent.document).find("input[name='machineFlowId']").val(),
      reason: $('#unpass_reason').val(),
      remove_alert: $('#radio').css('background-color') == 'rgb(255, 0, 0)' ? 0 : 1,
      status: 0,
      token: $(window.parent.parent.document).find("input[name='token']").val()
    }
  } else if ($(window.parent.parent.document).find("input[name='roleId']").val() == 23 || $(window.parent.parent.document).find("input[name='roleId']").val() == 17) {
    url = ip_path + "/changfa_system/machineFlow/examineMachineFlow.do";
    json = {
      machineFlowId: $(window.parent.parent.document).find("input[name='machineFlowId']").val(),
      examineReason: $('#unpass_reason').val(),
      examine: -1,
      token: $(window.parent.parent.document).find("input[name='token']").val()
    }
  }

  $.ajax({
    type: "post",
    async: false,
    url: url,
    data: json,
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        alert(data['head']['message']);
      } else {
        //锁死状态 防止 改变状态出现 下一步审核按钮
        if ($(window.parent.parent.document).find("input[name='roleId']").val() == 22) {
          $(window.parent.parent.document).find("input[name='approvalStage']").val(3);
        } else if ($(window.parent.parent.document).find("input[name='roleId']").val() == 23) {
          $(window.parent.parent.document).find("input[name='approvalStage']").val(4);
        }
        window.open("machineCheckDetail.html", "_parent");
      }
    }
  });
}

//锁车审核通过
function look_check_pass() {

  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/machineFlow/examineMachineFlow.do",
    data: {
      machineFlowId: $(window.parent.parent.document).find("input[name='machineFlowId']").val(),
      examineReason: $('#pass_reason').val(),
      examine: 1,
      token: $(window.parent.parent.document).find("input[name='token']").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        alert(data['head']['message']);
      } else {
        //锁死状态 防止 改变状态出现 下一步审核按钮
        $(window.parent.parent.document).find("input[name='approvalStage']").val(3);
        window.open("lookCheck_timer.html", "_parent");
      }
    }
  });
}

//锁车审核不通过
function look_check_unpass() {

  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/machineFlow/examineMachineFlow.do",
    data: {
      machineFlowId: $(window.parent.parent.document).find("input[name='machineFlowId']").val(),
      examineReason: $('#unpass_reason').val(),
      examine: -1,
      token: $(window.parent.parent.document).find("input[name='token']").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        alert(data['head']['message']);
      } else {
        $(window.parent.parent.document).find("input[name='approvalStage']").val(3);
        window.open("lookCheck_timer.html", "_parent");
      }
    }
  });
}

//退返调通过
function waiting_check_pass() {

  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/machineFlow/examineMachineFlow.do",
    data: {
      machineFlowId: $(window.parent.parent.document).find("input[name='machineFlowId']").val(),
      examineReason: $('#pass_reason').val(),
      examine: 1,
      token: $(window.parent.parent.document).find("input[name='token']").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        alert(data['head']['message']);
      } else {
        //锁死状态 防止 改变状态出现 下一步审核按钮
        $(window.parent.parent.document).find("input[name='approvalStage']").val(3);
        window.open("waitingCheck_timer.html", "_parent");
      }
    }
  });
}
//退返调不通过
function waiting_check_unpass() {

  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/machineFlow/examineMachineFlow.do",
    data: {
      machineFlowId: $(window.parent.parent.document).find("input[name='machineFlowId']").val(),
      examineReason: $('#unpass_reason').val(),
      examine: -1,
      token: $(window.parent.parent.document).find("input[name='token']").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        alert(data['head']['message']);
      } else {
        $(window.parent.parent.document).find("input[name='approvalStage']").val(3);
        window.open("waitingCheck_timer.html", "_parent");
      }
    }
  });
}

function machineCheckPass() {
  // var storeId;
  // if($(window.parent.parent.document).find("input[name='type']").val() == 3){
  //     storeId = $("#store option:selected").val();
  // }else{
  //     storeId = "";
  // }
  var json;
  var url;
  if ($(window.parent.parent.document).find("input[name='roleId']").val() == 22) {
    url = ip_path + "/changfa_system/machineFlow/secondApproval.do";
    json = {
      flow_id: $(window.parent.parent.document).find("input[name='machineFlowId']").val(),
      reason: $('#pass_reason').val(),
      remove_alert: $('#radio').css('background-color') == 'rgb(255, 0, 0)' ? 0 : 1,
      status: 1,
      token: $(window.parent.parent.document).find("input[name='token']").val()
    }
  } else if ($(window.parent.parent.document).find("input[name='roleId']").val() == 23 || $(window.parent.parent.document).find("input[name='roleId']").val() == 17) {
    url = ip_path + "/changfa_system/machineFlow/examineMachineFlow.do";
    json = {
      machineFlowId: $(window.parent.parent.document).find("input[name='machineFlowId']").val(),
      examineReason: $('#pass_reason').val(),
      examine: 1,
      token: $(window.parent.parent.document).find("input[name='token']").val()
    }
  }

  $.ajax({
    type: "post",
    async: false,
    url: url,
    data: json,
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        alert(data['head']['message']);
      } else {
        if ($(window.parent.parent.document).find("input[name='roleId']").val() == 22) {
          $(window.parent.parent.document).find("input[name='approvalStage']").val(3);
        } else if ($(window.parent.parent.document).find("input[name='roleId']").val() == 23) {
          $(window.parent.parent.document).find("input[name='approvalStage']").val(4);
        }
        window.open("machineCheckDetail.html", "_parent");
      }
    }
  });
}

function return_check() {
  window.open("machine_detail.html", "_self");
}

function returnWaiting_check() {
  window.open("waitingCheck_detail.html", "_self");
}

function returnLook_check() {
  window.open("lookCheck_detail.html", "_self");
}
//回访
function addVisit() {
  $("#visit_add").show();
  $("#visitName").val("");
  $("#seatNum").val("");
  $("#visitDescribe").val("");
}

function closeAdd() {
  $("#visit_add").hide();
}

function addVisitHistory() {
  if ($("#visitName").val() == "") {
    alert("回访人姓名不能为空！");
  } else if ($("#seatNum").val() == "") {
    alert("座位号不能为空！");
  } else if ($("#visitDescribe").val() == "") {
    alert("回访描述不能为空！");
  }else{

  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/examineFlow/examineInsert.do",
    data: {
      reportId: $(window.parent.parent.document).find("input[name='reportId']").val(),
      teleNo: $("#seatNum").val(),
      teleName: $("#visitName").val(),
      description: $("#visitDescribe").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] == 200) {
        $("#visit_add").hide();
        //回访记录列表局部刷新
        $.ajax({
          type: "post",
          async: false,
          url: ip_path + "/changfa_system/examineFlow/examineSelectByDisId.do",
          data: {
            reportId: $(window.parent.parent.document).find("input[name='reportId']").val()
          },
          dataType: "json",
          success: function (data) {
            if (data['head']['code'] == 200) {
              $("#visitHistory").empty();
              if (data['body']['result']['examineFlowList'].length == 0) {
                $("#visitHistory").append(
                  '<tr>' +
                  '<td class="td2 txt_center" height="33" colspan="4">未查到回访记录</td>' +
                  '</tr>'
                );
              } else {
                for (var i = 0; i < data['body']['result']['examineFlowList'].length; i++) {
                  $("#visitHistory").append(
                    '<tr>' +
                    '<td class="td2 txt_center" height="33">' + data['body']['result']['examineFlowList'][i]['teleName'] + '</td>' +
                    '<td class="td2 txt_center" >' + data['body']['result']['examineFlowList'][i]['teleNo'] + '</td>' +
                    '<td class="td2 txt_center" >' + data['body']['result']['examineFlowList'][i]['createTime'] + '</td>' +
                    '<td class="td2 txt_center" >' + data['body']['result']['examineFlowList'][i]['description'] + '</td>' +
                    '</tr>'
                  );
                }
              }
            }
          }
        });
      } else {
        alert(data['head']['message']);
      }
    }
  });
      
}
}

//更名查询
function querySaleWork(){

  // if ($('#saleM_item').val() == 'userName') {
  //   dealer_name = $('#saleM_info').val();
  // } else if ($('#saleM_item').val() == 'workNum') {
  //   dealer_num = $('#saleM_info').val();
  // }

  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/user/getUserByWorknum.do",
    data: {
      userName: $('#saleM_item').val() == 'userName'?$('#saleM_info').val():'',
      workNum: $('#saleM_item').val() == 'workNum'?$('#saleM_info').val():'',
      roleId:6
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody2").empty();
        $("#adminTbody2").append(
          '<td class="td2 txt_center" height="50px" colspan="8">未查到相关信息</td>'
        );
      } else {
        $("#adminTbody2").empty();
        $('#shuliang').html('共'+"<span style ='color:red'>"+data['body']['resultList'].length+"</span>"+'条');
        for (var i = 0; i < data['body']['resultList'].length; i++) {
          $("#adminTbody2").append(
            "<tr id='" + data['body']['resultList'][i]['userId'] + "'>" +
            '<td class="td2 txt_center"" height="33"><input type="checkbox" name="elem"></td>' +
            
            '<td class="td2">' + data['body']['resultList'][i]['workNum'] + '</td>' +
            '<td class="td2" >' + data['body']['resultList'][i]['name'] + '</td>' +
            '</tr>'
          );
        }

        $(":checkbox").click(function(){
      //设置当前选中checkbox的状态为checked
          $(this).attr("checked",true);
          $(this).parent().parent().siblings().children("td").find('input').attr("checked",false); //设置当前选中的checkbox同级(兄弟级)其他checkbox状态为未选中
          //console.log();
      });

      }
    }
  });
}

//维修单生成费用
function makeCost() {
  if ($('#repaircar').val() == '4' || $('#repaircar').val() == '5') {
    alert("此维修单为跨区作业！");
  }
  var reg = /^[0-9]+(.[05]{1})?$/;
  if ($("#checkHour").val() == "" || $("#checkDistance").val() == "") {
    alert("请输入审核里程和审核工时！");
  } else if (!reg.test($("#checkHour").val()) || $("#checkHour").val() > 999) {
    alert("审核工时是最多包含一位小数的数字且不能超过999！");
  } else if (!reg.test($("#checkDistance").val()) || $("#checkDistance").val() > 9999) {
    alert("审核里程最多包含一位小数的数字且不能超过9999！");
  } else {
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/repair/countCost.do",
      data: {
        repairType: $('#repaircar').val(),
        repairId: $(window.parent.parent.document).find("input[name='repairId']").val(),
        examineDistance: $("#checkDistance").val(),
        examineTime: $("#checkHour").val()
      },
      dataType: "json",
      success: function (data) {
        $(window.parent.parent.document).find("input[name='repairType']").val($('#repaircar').val());
        if (data['head']['code'] == 200) {
          $("#hour_cost").text(data['body']['result']['examineTimeCost']);
          $("#dis_cost").text(data['body']['result']['examineDistanceCost']);
        } else {
          alert(data['head']['message']);
        }
      }
    });
  }
}

//发货管理查询
function querySendMachine() {
  currentPage = 1;
  ajax_sendM();
}

//发货管理详情
function showSendDetails(event) {
  var user_id = event.parentNode.parentNode.id || '';
  var machine_id = event.parentNode.id;
  $(window.parent.document).find("input[name='userArchivesId']").val(user_id);
  $(window.parent.document).find("input[name='machineId']").val(machine_id);
  window.open("sendDetails.html", "_self");
}

//库存管理查询
function queryStoreMachine() {
  currentPage = 1;
  ajax_storeM();
}

//库存管理详情
function showStoreDetails(event) {
  var user_id = event.parentNode.parentNode.id;
  var machine_id = event.parentNode.id;
  $(window.parent.document).find("input[name='userArchivesId']").val(user_id);
  $(window.parent.document).find("input[name='machineId']").val(machine_id);
  window.open("sendDetails.html", "_self");
}

//销售管理查询
function querySaleMachine() {
  if ($('#saleM_item').val() == 'company') {
    dealer_name = $('#saleM_info').val();
  } else if ($('#saleM_item').val() == 'workNum') {
    dealer_num = $('#saleM_info').val();
  } else if ($('#saleM_item').val() == 'factoryNum') {
    factory_num = $('#saleM_info').val();
  } else if ($('#saleM_item').val() == 'barCode') {
    bar_code = $('#saleM_info').val();
  }
  sessionStorage.setItem('saleM_item_smm', $('#saleM_item').val());
  sessionStorage.setItem('saleM_info_smm', $('#saleM_info').val());
  currentPage = 1;
  ajax_saleM();
}
//退、返、调查询
function queryForCheck() {
  if ($('#meb_item').val() == 'company') {
    dealer_name = '';
    dealer_num = '';
    factory_num = '';
    bar_code = '';
    dealer_name = $('#meb_info').val();

  } else if ($('#meb_item').val() == 'workNum') {
    dealer_name = '';
    dealer_num = '';
    factory_num = '';
    bar_code = '';
    dealer_num = $('#meb_info').val();
  } else if ($('#meb_item').val() == 'factoryNum') {
    dealer_name = '';
    dealer_num = '';
    factory_num = '';
    bar_code = '';
    factory_num = $('#meb_info').val();
  } else if ($('#meb_item').val() == 'barCode') {
    dealer_name = '';
    dealer_num = '';
    factory_num = '';
    bar_code = '';
    bar_code = $('#meb_info').val();
  }
  currentPage = 1;
  ajax_forCheck();
}

function queryCarCheck() {
  if ($('#saleM_item').val() == 'company') {
    dealer_name = '';
    dealer_num = '';
    factory_num = '';
    bar_code = '';
    dealer_name = $('#saleM_info').val();
  } else if ($('#saleM_item').val() == 'workNum') {
    dealer_name = '';
    dealer_num = '';
    factory_num = '';
    bar_code = '';
    dealer_num = $('#saleM_info').val();
  } else if ($('#saleM_item').val() == 'factoryNum') {
    dealer_name = '';
    dealer_num = '';
    factory_num = '';
    bar_code = '';
    factory_num = $('#saleM_info').val();
  } else if ($('#saleM_item').val() == 'barCode') {
    dealer_name = '';
    dealer_num = '';
    factory_num = '';
    bar_code = '';
    bar_code = $('#saleM_info').val();
  }
  currentPage = 1;
  ajax_CarCheck();
}

function queryRskCheck() {
    if ($('#meb_item').val() == 'company') {
      dealer_name = $('#meb_info').val();
      dealer_num = "";
      factory_num = "";
    } else if ($('#meb_item').val() == 'workNum') {
      dealer_name = "";
      factory_num = "";
      dealer_num = $('#meb_info').val();
    } else if ($('#meb_item').val() == 'factoryNum') {
      factory_num = $('#meb_info').val();
      dealer_num = "";
      dealer_name = "";
  
    } else if ($('#meb_item').val() == 'barCode') {
      bar_code = $('#meb_info').val();
    }
    currentPage = 1;
    ajax_RskCheck();
  }

function queryRskCheck1() {
  if ($('#meb_item').val() == 'company') {
    dealer_name = $('#meb_info').val();
    dealer_num = "";
    factory_num = "";
  } else if ($('#meb_item').val() == 'workNum') {
    dealer_name = "";
    factory_num = "";
    dealer_num = $('#meb_info').val();
  } else if ($('#meb_item').val() == 'factoryNum') {
    factory_num = $('#meb_info').val();
    dealer_num = "";
    dealer_name = "";

  } else if ($('#meb_item').val() == 'barCode') {
    bar_code = $('#meb_info').val();
  }
  currentPage = 1;
  ajax_RskCheck1();
}

//销售管理详情
function showSaleDetails(event) {
  var machineFlowId = $(event).parent().parent().attr('id');
  if ($(event).parent().prev().length > 0) {
    var approval_stage = $(event).parent().prev().html();
    $(window.parent.document).find("input[name='approvalStage']").val(approval_stage);
  }
  $(window.parent.document).find("input[name='machineFlowId']").val(machineFlowId);
  window.open("machineCheckDetail.html", "_self");
}

//400报修修改
function chooseJqRpt() {
  $("#noFactoryNum").hide();
  $("#insertFactoryNum").show();
  $("#machineTime").hide();
  $("#date_yy-mm-dd").hide();
  $("#factoryNum").val("");
  $("#barCode").val("");

  $("#engineBrand").show();
  $("#engineNum").show();
  $("#brand").show();
  $("#number").show();
}

function chooseMhRpt() {
  if ($("input[name='repairType']:checked").val() == 3) {
    $("#machineTime").hide();
    $("#date_yy-mm-dd").hide();
  } else {
    $("#machineTime").show();
    $("#date_yy-mm-dd").show();
  }
  $("#insertFactoryNum").hide();
  $("#exitFactoryNum").hide();
  $("#noFactoryNum").show();
  $("#machineAddress").show();
  $("#createMobile").val("");
  $("#name").val("");

  $("#engineBrand").hide();
  $("#engineNum").hide();
  $("#brand").hide();
  $("#number").hide();
  $("#brand").empty();
  $("#number").empty();
}

// function openMap() {
//     var lng;
//     var lat;
//
//     var address = $("#province option:selected").text()+$("#city option:selected").text()+$("#country option:selected").text()+$("#zhen").val();
//     var url = 'http://api.map.baidu.com/geocoder/v2/?ak=eIxDStjzbtH0WtU50gqdXYCz&output=json&address=' + encodeURIComponent(address);
//     //根据地点名称获取经纬度信息
//     $.ajax({
//         type: "POST",
//         url: url,
//         dataType: "JSONP",
//         success: function (data) {
//             if (parseInt(data.status) == 0) {
//                 lng = data.result.location.lng;
//                 lat = data.result.location.lat;
//
//                 $("#machine_map").show();
//                 map = new AMap.Map("map",{
//                     resizeEnable: true
//                 });
//                 map.setCity($("#city option:selected").text());
//
//                 var marker_machine = new AMap.Marker({
//                     position: new AMap.LngLat(lng,lat),
//                     // offset: new AMap.Pixel(0, 0),
//                     icon: 'img/machine.png', // 添加 Icon 图标 URL
//                 });
//                 map.add(marker_machine);
//             }
//         }
//     });
//
//     var marker_machine = new AMap.Marker({
//         position: new AMap.LngLat(lng,lat),
//         offset: new AMap.Pixel(-15, -45),
//         icon: '../img/machine.png', // 添加 Icon 图标 URL
//     });
//     map.add(marker_machine);
// }

//清空审核的文本框
function emptytext() {
  $(".adviseDiv_cont input").val('');
  $("#hour_cost").text('');
  $("#dis_cost").text('');
}

function closeMachineMap() {
  $("#machine_map").hide();
}

function repairType_choose() {
  if ($("input[name='repairType']:checked").val() == 1) {
    $("#expectDis").show();
    $("#createDistance").show();
    $("#backPlus").show();
    if ($("input[name='rpt']:checked").val() == 2) {
      $("#machineTime").show();
      $("#date_yy-mm-dd").show();
    } else {
      $("#machineTime").hide();
      $("#date_yy-mm-dd").hide();
    }
  } else if ($("input[name='repairType']:checked").val() == 2) {
    $("#expectDis").hide();
    $("#createDistance").hide();
    $("#backPlus").hide();
    if ($("input[name='rpt']:checked").val() == 2) {
      $("#machineTime").show();
      $("#date_yy-mm-dd").show();
    } else {
      $("#machineTime").hide();
      $("#date_yy-mm-dd").hide();
    }
  } else if ($("input[name='repairType']:checked").val() == 4) {
    $("#expectDis").show();
    $("#createDistance").show();
    $("#backPlus").show();
    if ($("input[name='rpt']:checked").val() == 2) {
      $("#machineTime").show();
      $("#date_yy-mm-dd").show();
    } else {
      $("#machineTime").hide();
      $("#date_yy-mm-dd").hide();
    }
  } else if ($("input[name='repairType']:checked").val() == 5) {
    $("#expectDis").hide();
    $("#createDistance").hide();
    $("#backPlus").hide();
    if ($("input[name='rpt']:checked").val() == 2) {
      $("#machineTime").show();
      $("#date_yy-mm-dd").show();
    } else {
      $("#machineTime").hide();
      $("#date_yy-mm-dd").hide();
    }
  } else if ($("input[name='repairType']:checked").val() == 3) {
    $("#expectDis").show();
    $("#createDistance").show();
    $("#backPlus").show();
    $("#machineTime").hide();
    $("#date_yy-mm-dd").hide();
  }
}

function addServicePrice() {
  $(window.parent.document).find("input[name='newLineNum']").val("");
  $(window.parent.document).find("input[name='newLineName']").val("");
  $(window.parent.document).find("input[name='newLevel']").val("");
  window.open("addServicePrice.html", "_self");
}

function addNewServicePrice(event) {
  $(window.parent.document).find("input[name='newLineNum']").val(event.parentNode.parentNode.childNodes[0].innerHTML);
  $(window.parent.document).find("input[name='newLineName']").val(event.parentNode.parentNode.childNodes[1].innerHTML);
  var level;
  if (event.parentNode.parentNode.childNodes[2].innerHTML == "一星级") {
    level = 1;
  } else if (event.parentNode.parentNode.childNodes[2].innerHTML == "二星级") {
    level = 2;
  } else if (event.parentNode.parentNode.childNodes[2].innerHTML == "三星级") {
    level = 3;
  }
  $(window.parent.document).find("input[name='newLevel']").val(level);
  window.open("addServicePrice.html", "_self");
}

function editServicePrice(event) {
  var cost_id = event.parentNode.parentNode.id;
  $(window.parent.document).find("input[name='costId']").val(cost_id);
  $("#editServicePrice").show();
  $("#createLineNum").val(event.parentNode.parentNode.childNodes[0].innerHTML);
  $("#createLineName").val(event.parentNode.parentNode.childNodes[1].innerHTML);
  var level_num;
  if (event.parentNode.parentNode.childNodes[2].innerHTML == "一星级") {
    level_num = 1;
  } else if (event.parentNode.parentNode.childNodes[2].innerHTML == "二星级") {
    level_num = 2;
  } else if (event.parentNode.parentNode.childNodes[2].innerHTML == "三星级") {
    level_num = 3;
  }
  $("#createLevel").val(level_num);
  $("#createHourPrice").val(event.parentNode.parentNode.childNodes[4].innerHTML);
  $("#createDistancePrice").val(event.parentNode.parentNode.childNodes[3].innerHTML);
}

function createServicePrice() {
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/serviceInfo/addCost.do",
    data: {
      lineNum: $("#createLineNum option:selected").val(),
      lineName: $("#createLineNum option:selected").text(),
      level: $("#createLevel option:selected").val(),
      distancePrice: $("#createDistancePrice").val(),
      workPrice: $("#createHourPrice").val(),
      userId: $(window.parent.document).find("input[name='userId']").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] == 200) {
        window.open("servicePriceManage.html", "_self");
      } else {
        alert(data['head']['message']);
      }
    }
  });
}

function closeServicePriceEdit() {
  $("#editServicePrice").hide();
}

function updateServicePrice() {
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/serviceInfo/updateCost.do",
    data: {
      lineNum: $("#createLineNum").val(),
      lineName: $("#createLineName").val(),
      level: $("#createLevel option:selected").val(),
      distancePrice: $("#createDistancePrice").val(),
      workPrice: $("#createHourPrice").val(),
      userId: $(window.parent.document).find("input[name='userId']").val(),
      costId: $(window.parent.document).find("input[name='costId']").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] == 200) {
        window.open("servicePriceManage.html", "_self");
      } else {
        alert(data['head']['message']);
      }
    }
  });
}

//产品目录管理


function createLine() {
  var regNum = /^[0-9a-zA_Z]+$/;
  if (!regNum.test($("#createLineNum").val())) {
    alert("产品线编号格式错误！");
  } else if ($("#createLineName").val().length > 10) {
    alert("产品线名称不超过10个字符！");
  } else {
    $.ajax({
      type: "post",
      url: ip_path + "/changfa_system/model/addModel.do",
      data: {
        saleType: $('input[name="saleType0"]:checked').val(),
        type: 1,
        parentNum: "",
        number: $("#createLineNum").val(),
        name: $("#createLineName").val()
      },
      dataType: "json",
      success: function (data) {
        if (data['head']['code'] == 200) {
          window.location.reload();
        } else {
          alert(data['head']['message']);
        }
      }
    });
  }
}

function addMaintain() {
    $("#maintain").show();
}

function closeMaintain() {
  $("#maintain").hide();
}

function addLine(imei) {
  if (imei) {
    $("#addLine").show();
  } else {
    alert('当前农机无具体信息');
  }
}

function closeAddLine() {
  $("#addLine").hide();
}

function editLine(event) {
  $("#editLine").show();
  $("#editLineNum").val(event.alt);
  $("#editLineName").val(event.parentNode.parentNode.nextSibling.value.split("（")[0]);
}

function updateLine() {
  if ($("#editLineName").val().length > 10) {
    alert("产品线名称不超过10个字符！");
  } else {
    $.ajax({
      type: "post",
      url: ip_path + "/changfa_system/model/updateModel.do",
      data: {
        saleType: $('input[name="saleType2"]:checked').val(),
        type: 1,
        number: $("#editLineNum").val(),
        name: $("#editLineName").val()
      },
      dataType: "json",
      success: function (data) {
        if (data['head']['code'] == 200) {
          window.location.reload();
        } else {
          alert(data['head']['message']);
        }
      }
    });
  }
}

function closeEditLine() {
  $("#editLine").hide();
}

// function deleteLine() {
//
// }

function addSeries(event) {
  $(window.parent.document).find("input[name='productParentId']").val(event.alt);
  $("#addSeries").show();
  $("#createSeriesNum").val("");
  $("#createSeriesName").val("");
}

function createSeries() {
  var regNum = /^[0-9a-zA_Z]+$/;
  if (!regNum.test($("#createSeriesNum").val())) {
    alert("产品系列编号格式错误！");
  } else if ($("#createSeriesName").val().length > 10) {
    alert("产品系列名称不超过10个字符！");
  } else {
    $.ajax({
      type: "post",
      url: ip_path + "/changfa_system/model/addModel.do",
      data: {
        saleType: $('input[name="saleType"]:checked').val(),
        type: 2,
        parentNum: $(window.parent.document).find("input[name='productParentId']").val(),
        number: $("#createSeriesNum").val(),
        name: $("#createSeriesName").val()
      },
      dataType: "json",
      success: function (data) {
        if (data['head']['code'] == 200) {
          window.location.reload();
        } else {
          alert(data['head']['message']);
        }
      }
    });
  }

}

function editConfig() {
  var event;
  if ($("input:checkbox:checked").length == 1) {
    $("input:checkbox:checked").each(function (index, elem) {
      event = elem;
    });
  } else if ($("input:checkbox:checked").length == 0) {
    alert('当前没有选择任何产品');
    return;
  } else {
    alert('你已多选');
    return;
  }

  $("#editConfig").show();
  if (seriesNum && seriesNum.substring(0, 3) == 601) {
    $('.editfour-config').show();
    $('#editname').parent().parent().show();
    $('#editConfigName').parent().parent().hide();
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/config/queryBySeriesNumAndModelNum.do  ",
      data: {
        seriesNum: seriesNum,
        modelNum: modelNum
      },
      dataType: "json",
      success: function (data) {
        if (data.head.code == 200) {
          data.body.resultList.forEach(function (item) {
            for (var key in item) {

              $('#edit' + key).empty()
              $('#edit' + key).append('<option value=""></option>')
              item[key].forEach(function (ite) {
                $('#edit' + key).append(
                  '<option value="' + ite.modelValue + '-' + ite.configValue + '">' + ite.name + '</option>'
                )
              })
            }
          })
          $.ajax({
            type: "post",
            async: true,
            url: ip_path + "/changfa_system/config/queryMachineConfig.do",
            data: {
              modelNum: modelNum,
              number: event.alt,
              pageNum: 1,
              pageSize: 1
            },
            dataType: "json",
            success: function (data) {
              if (data['head']['code'] == 200) {
                data.body.result.data.forEach(function (item) {
                  for (var key in item) {
                    $('#edit' + key).val(item[key]);
                    if (key == 'type') {
                      $("input[name='saleType6'][value=" + item[key] + "]").attr("checked", true);
                    }

                  }
                })
              } else {
                alert(data['head']['message']);
              }
            }
          });
        } else(
          alert(data.head.message)
        )
      }
    });
  } else {
    $('.editfour-config').hide();
    $("#editnumber").val(event.alt);
    $("#editConfigName").val(event.parentNode.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML);
    $("#editprice").val(event.parentNode.nextSibling.nextSibling.innerHTML);
    $("#edittotalPrice").val(event.parentNode.nextSibling.nextSibling.nextSibling.innerHTML);
    $("input[name='saleType6'][value=" + $(event).parent().next().next().next().next().attr('alt') + "]").attr("checked", true);
  }
}

function closeEditConfig() {
  $("#editConfig").hide();
  $('#editname').parent().parent().hide();
  $('#editConfigName').parent().parent().show();
}

function updateConfig() {
  var regNum = /^[0-9a-zA_Z]+$/;
  var list = [];
  //如果十四项为显示则获取值
  if ($('.editfour-config').css('display') == 'block') {
    var arr = {
      'engine': $('#editengine').val() == null ? '' : $('#editengine').val(),
      'battery': $('#editbattery').val() == null ? '' : $('#editbattery').val(),
      'lifter': $('#editlifter').val() == null ? '' : $('#editlifter').val(),
      'trailer': $('#edittrailer').val() == null ? '' : $('#edittrailer').val(),
      'oilPump': $('#editoilPump').val() == null ? '' : $('#editoilPump').val(),
      'frontAxle': $('#editfrontAxle').val() == null ? '' : $('#editfrontAxle').val(),
      'frontWheel': $('#editfrontWheel').val() == null ? '' : $('#editfrontWheel').val(),
      'rearWheel': $('#editrearWheel').val() == null ? '' : $('#editrearWheel').val(),
      'gearBox': $('#editgearBox').val() == null ? '' : $('#editgearBox').val(),
      'rearAxle': $('#editrearAxle').val() == null ? '' : $('#editrearAxle').val(),
      'powerOutput': $('#editpowerOutput').val() == null ? '' : $('#editpowerOutput').val(),
      'frontWeight': $('#editfrontWeight').val() == null ? '' : $('#editfrontWeight').val(),
      'rearWeight': $('#editrearWeight').val() == null ? '' : $('#editrearWeight').val(),
      'sunShade': $('#editsunShade').val() == null ? '' : $('#editsunShade').val()
    }
    list.push(arr);
  };
  var des = '';
  //如果list有值了则拼接字符串
  if (list) {
    list.forEach(item => {
      for (const key in item) {
        if (item[key]) {
          des += ($("option[value='" + item[key] + "']").html() + '、')
        }
      }
    })

  }
  var json = {
    //'saleType':$('input[name="saleType6"]:checked').val(),
    'number': $("#editnumber").val(),
    'price': $("#editprice").val(),
    //'totalPrice':$("#edittotalPrice").val(),
    'name': $("#editname").val(),
    'des': des || $("#editConfigName").val(),
    'list': list
  }
  if (!regNum.test($("#editnumber").val())) {
    alert("产品编号格式错误！");
    // }else if($("#editnumber").val().length!=11){
    //     alert("产品编号必须是11位！");
  } else if (isNaN($("#editprice").val())) {
    alert("价格及标准价必须是数字！");
  } else {
    $.ajax({
      type: "post",
      contentType: 'application/json',
      url: ip_path + "/changfa_system/config/updateMachineConfig.do",
      data: JSON.stringify(json),
      success: function (data) {
        if (data['head']['code'] == 200) {
          ajax_modelConfigList();
          closeEditConfig();
        } else {
          alert(data['head']['message']);
        }
      }
    });
  }
}


function closeAddSeries() {
  $("#addSeries").hide();
}

function editSeries() {
  if ($('#lineList').find('.category-cont-bgdc').length != 0) {
    var a = $('#lineList').find('.category-cont-bgdc').children().html();
    var b = $('#lineList').find('.category-cont-bgdc').prev().prev().attr('title');

    var type;
    console.log($("#" + b + "a").css('text-decoration'));
    //判断是否被禁用
    if ($("#" + b + "a").css('text-decoration') == 'line-through solid rgb(0, 0, 0)') {
      type = 0;
    } else {
      type = 1;
    }

    $("#editSeries").show();
    if ($('.category-cont-bgdc').parent().attr('class') == 'category-cont-line') {
      $("#editSeriesName").prop('disabled', true);
    } else {
      $("#editSeriesName").prop('disabled', false);
    }
    $("#editSeriesNum").val($('#lineList').find('.category-cont-bgdc').prev().prev().attr('title'));

    a.split("（" + b)
    $("#editSeriesName").val(a.split("（" + b)[0]);
    $("input[name='saleType2'][value=" + type + "]").attr("checked", true);
  } else {
    alert('当前没有选择产品')
  }
}
//售后产品用
function updateSeries() {
  var outerelem = $('.category-cont-bgdc').parent();
  if (outerelem && outerelem.attr('class') == 'category-cont-pro') {
    if ($("#editSeriesName").val().length > 10) {
      alert("产品线名称不超过10个字符！");
    } else {
      $.ajax({
        type: "post",
        url: ip_path + "/changfa_system/model/updateModel.do",
        data: {
          saleType: $('input[name="saleType2"]:checked').val(),
          type: 1,
          number: $("#editSeriesNum").val(),
          name: $("#editSeriesName").val()
        },
        dataType: "json",
        success: function (data) {
          if (data['head']['code'] == 200) {
            window.location.reload();
          } else {
            alert(data['head']['message']);
          }
        }
      });
    }
  } else if (outerelem && outerelem.attr('class') == 'category-cont-line') {
    if ($("#editSeriesName").val().length > 10) {
      alert("产品线名称不超过10个字符！");
    } else {
      $.ajax({
        type: "post",
        url: ip_path + "/changfa_system/model/updateModel.do",
        data: {
          saleType: $('input[name="saleType2"]:checked').val(),
          type: 2,
          number: $("#editSeriesNum").val(),
          name: $("#editSeriesName").val()
        },
        dataType: "json",
        success: function (data) {
          if (data['head']['code'] == 200) {
            window.location.reload();
          } else {
            alert(data['head']['message']);
          }
        }
      });
    }
  } else if (outerelem && outerelem.attr('class') == 'category-cont-model') {
    if ($("#editSeriesName").val().length > 50) {
      alert("产品线名称不超过50个字符！");
    } else {
      $.ajax({
        type: "post",
        url: ip_path + "/changfa_system/model/updateModel.do",
        data: {
          type: 3,
          saleType: $('input[name="saleType2"]:checked').val(),
          number: $("#editSeriesNum").val(),
          name: $("#editSeriesName").val()
        },
        dataType: "json",
        success: function (data) {
          if (data['head']['code'] == 200) {
            window.location.reload();
          } else {
            alert(data['head']['message']);
          }
        }
      });
    }
  }
}

//销售产品用
function updateSeriesocg() {
  var outerelem = $('.category-cont-bgdc').parent();
  if (outerelem && outerelem.attr('class') == 'category-cont-pro') {
    if ($("#editSeriesName").val().length > 10) {
      alert("产品线名称不超过10个字符！");
    } else {
      $.ajax({
        type: "post",
        url: ip_path + "/changfa_system/productCatalog/updateProductCatalog.do",
        data: {
          saleType: $('input[name="saleType2"]:checked').val(),
          number: $("#editSeriesNum").val(),
          name: $("#editSeriesName").val()
        },
        dataType: "json",
        success: function (data) {
          if (data['head']['code'] == 200) {
            window.location.reload();
          } else {
            alert(data['head']['message']);
          }
        }
      });
    }
  } else if (outerelem && outerelem.attr('class') == 'category-cont-line') {
    if ($("#editSeriesName").val().length > 10) {
      alert("产品线名称不超过10个字符！");
    } else {
      $.ajax({
        type: "post",
        url: ip_path + "/changfa_system/productCatalog/updateProductCatalog.do",
        data: {
          saleType: $('input[name="saleType2"]:checked').val(),
          number: $("#editSeriesNum").val(),
          name: $("#editSeriesName").val()
        },
        dataType: "json",
        success: function (data) {
          if (data['head']['code'] == 200) {
            window.location.reload();
          } else {
            alert(data['head']['message']);
          }
        }
      });
    }
  } else if (outerelem && outerelem.attr('class') == 'category-cont-model') {
    if ($("#editSeriesName").val().length > 50) {
      alert("产品线名称不超过50个字符！");
    } else {
      $.ajax({
        type: "post",
        url: ip_path + "/changfa_system/productCatalog/updateProductCatalog.do",
        data: {
          saleType: $('input[name="saleType2"]:checked').val(),
          number: $("#editSeriesNum").val(),
          name: $("#editSeriesName").val()
        },
        dataType: "json",
        success: function (data) {
          if (data['head']['code'] == 200) {
            window.location.reload();
          } else {
            alert(data['head']['message']);
          }
        }
      });
    }
  }
}

function closeEditSeries() {
  $("#editSeries").hide();
}

// function deleteSeries() {
//
// }

//售后用
function addModel() {
  if ($('#lineList').find('.category-cont-bgdc').length != 0 && $('.category-cont-bgdc').parent().attr('class') != 'category-cont-model') {

    //$(window.parent.document).find("input[name='productParentId']").val(event.alt);
    $("#addModel").show();
    $("#number").val("");
    $("#createModelName").val("");
    $("#price").val("");
    $("#totalPrice").val("");
  } else {
    alert('当前没有选择产品/不可添加第四层');
    return;
  };
  if ($('.category-cont-bgdc').parent().attr('class') == 'category-cont-model') {
    $('#price').parent().parent().show();
    $('#totalPrice').parent().parent().show();
    $('#createModelName').parent().prev().html('产品配置');
  } else {
    $('#createModelName').parent().prev().html('产品名称');
  }
  //找到是否是轮托里面第三层产品被点击
  if ($('.category-cont-bgdc').parent().parent().parent().prev().children().eq(0).attr('title') == 601) {
    $('.four-config').show();
    $('#createModelName').parent().parent().hide();
    $('#name').parent().parent().show();
    changeconfiguration();
  } else {
    $('.four-config').hide();
  }
}


//销售用
function addModelocg() {
  if ($('#lineList').find('.category-cont-bgdc').length != 0) {
    $('#levelChoose').empty();
    //根据存储在元素里面的参数来判断是否是断层
    var level = $('.category-cont-bgdc').next().attr('title');
    var nextlevel = $('.category-cont-bgdc').next().html();
    var paramNum = ($('.category-cont-bgdc').children().html());
    if ((nextlevel - level) > 1) {
      $.ajax({
        type: "post",
        async: false,
        url: ip_path + "/changfa_system/productCatalog/selectByParentNumAndLevel.do",
        data: {
          level: nextlevel,
          parentNum: paramNum.slice(paramNum.indexOf('（') + 1, paramNum.indexOf('）')),
          type: 1
        },
        dataType: "json",
        success: function (data) {
          if (data.head.code == 200) {
            data.body.resultList.forEach(function (item) {

              $('#levelChoose').append(
                '<div style="float: left;margin-left: 5%">' +
                '<input type="checkbox" name="levelChoose" value="' + item.number + '"><span>' + item.name + '（' + item.number + '）</span>' +
                '</div>'
              )
            })

          } else {
            alert(data.head.message);
          }
        }
      })
    }
    //$(window.parent.document).find("input[name='productParentId']").val(event.alt);
    $("#addModel").show();
    $("#number").val("");
    $("#createModelName").val("");
    $("#price").val("");
    $("#totalPrice").val("");
  } else {
    alert('当前没有选择产品');
    return;
  };
  if ($('.category-cont-bgdc').parent().attr('class') == 'category-cont-model' || $('.category-cont-bgdc').parent().parent().attr('id') == 611) {
    $('#price').parent().parent().show();
    $('#totalPrice').parent().parent().show();
    $('#createModelName').parent().prev().html('产品配置');
  } else {
    $('#createModelName').parent().prev().html('产品名称');
  }
  //找到是否是轮托里面第三层产品被点击
  if ($('.category-cont-bgdc').parent().parent().parent().prev().children().eq(0).attr('title') == 601) {
    $('.four-config').show();
    $('#createModelName').parent().parent().hide();
    $('#name').parent().parent().show();
    changeconfiguration();
  } else {
    $('.four-config').hide();
  }
}

function changeconfiguration() {
  $.ajax({
    type: "post",
    async: true,
    url: ip_path + "/changfa_system/config/queryBySeriesNumAndModelNum.do  ",
    data: {
      seriesNum: $('.category-cont-bgdc').parent().parent().prev().children().eq(0).attr('title'),
      modelNum: $('.category-cont-bgdc').prev().prev().attr('title')
    },
    dataType: "json",
    success: function (data) {
      if (data.head.code == 200) {
        data.body.resultList.forEach(function (item) {
          for (var key in item) {
            $('#' + key).empty();
            $('#' + key).append('<option value=""></option>')
            item[key].forEach(function (ite) {
              $('#' + key).append(
                '<option value="' + ite.modelValue + '-' + ite.configValue + '">' + ite.name + '</option>'
              )
            })
          }
        })
      } else(
        alert(data.head.message)
      )
    }
  });
}
//售后用
function createModel() {
  var outerelem = $('.category-cont-bgdc').parent();
  //第一层
  if (outerelem && outerelem.attr('class') == 'category-cont-pro') {



    // var regNum = /^[0-9a-zA_Z]+$/;
    // if (!regNum.test($("#number").val())) {
    //   alert("产品编号格式错误！");
    // } else 
    if ($("#createModelName").val().length > 30) {
      alert("产品名称不超过30个字符！");
    } else {
      $.ajax({
        type: "post",
        url: ip_path + "/changfa_system/model/addModel.do",
        data: {
          saleType: $('input[name="saleType"]:checked').val(),
          type: 2,
          parentNum: $('.category-cont-bgdc').prev().prev().attr('title'),
          number: $("#number").val(),
          name: $("#createModelName").val()
        },
        dataType: "json",
        success: function (data) {
          if (data['head']['code'] == 200) {
            window.location.reload();
          } else {
            alert(data['head']['message']);
          }
        }
      });
    }
    //第二层
  } else if (outerelem && outerelem.attr('class') == 'category-cont-line') {
    // var regNum = /^[0-9a-zA_Z]+$/;
    // if (!regNum.test($("#number").val())) {
    //   alert("产品编号格式错误！");
    // } else 
    if ($("#createModelName").val().length > 50) {
      alert("产品名称不超过50个字符！");
    } else {
      $.ajax({
        type: "post",
        url: ip_path + "/changfa_system/model/addModel.do",
        data: {
          type: 3,
          saleType: $('input[name="saleType"]:checked').val(),
          parentNum: $('.category-cont-bgdc').prev().prev().attr('title'),
          number: $("#number").val(),
          name: $("#createModelName").val()
        },
        dataType: "json",
        success: function (data) {
          if (data['head']['code'] == 200) {
            window.location.reload();
          } else {
            alert(data['head']['message']);
          }
        }
      });
    }
    //第三层
  } else if (outerelem && outerelem.attr('class') == 'category-cont-model') {
    var regNum = /^[0-9a-zA_Z]+$/;
    var list = [];
    //如果十四项为显示则获取值
    if ($('.four-config').css('display') == 'block') {
      var arr = {
        'engine': $('#engine').val() == null ? '' : $('#engine').val(),
        'battery': $('#battery').val() == null ? '' : $('#battery').val(),
        'lifter': $('#lifter').val() == null ? '' : $('#lifter').val(),
        'trailer': $('#trailer').val() == null ? '' : $('#trailer').val(),
        'oilPump': $('#oilPump').val() == null ? '' : $('#oilPump').val(),
        'frontAxle': $('#frontAxle').val() == null ? '' : $('#frontAxle').val(),
        'frontWheel': $('#frontWheel').val() == null ? '' : $('#frontWheel').val(),
        'rearWheel': $('#rearWheel').val() == null ? '' : $('#rearWheel').val(),
        'gearBox': $('#gearBox').val() == null ? '' : $('#gearBox').val(),
        'rearAxle': $('#rearAxle').val() == null ? '' : $('#rearAxle').val(),
        'powerOutput': $('#powerOutput').val() == null ? '' : $('#powerOutput').val(),
        'frontWeight': $('#frontWeight').val() == null ? '' : $('#frontWeight').val(),
        'rearWeight': $('#rearWeight').val() == null ? '' : $('#rearWeight').val(),
        'sunShade': $('#sunShade').val() == null ? '' : $('#sunShade').val()
      }
      list.push(arr);
    };
    var des = '';
    //如果list有值了则拼接字符串
    if (list) {
      list.forEach(item => {
        for (const key in item) {
          if (item[key]) {
            des += ($("option[value='" + item[key] + "']").html() + '、')
          }
        }
      })

    }
    var deslist = des || $("#createModelName").val();
    var json = {
      'saleType': $('input[name="saleType"]:checked').val(),
      'seriesNum': outerelem.parent().prev().children().eq(0).attr('title'),
      'modelNum': $('.category-cont-bgdc').prev().prev().attr('title'),
      'number': $("#number").val(),
      'price': $("#price").val(),
      'totalPrice': $("#totalPrice").val(),
      'name': $("#name").val(),
      'des': deslist,
      'list': list
    }
    if (!regNum.test($("#number").val())) {
      alert("产品编号格式错误！");
    } else if ($("#createModelName").val().length > 50) {
      alert("产品名称不超过50个字符！");
    } else if ($("#number").val().length != 11) {
      alert("产品编号必须是11位！");
    } else if (isNaN($("#price").val() || isNaN($("#totalPrice").val()))) {
      alert("价格及标准价必须是数字！");
    } else {
      $.ajax({
        type: "post",
        contentType: 'application/json',
        url: ip_path + "/changfa_system/config/addMachineConfig.do",
        data: JSON.stringify(json),
        success: function (data) {
          if (data['head']['code'] == 200) {
            window.location.reload();
          } else {
            alert(data['head']['message']);
          }
        }
      });
    }
  }
}


//销售用
function createModelocg() {
  var outerelem = $('.category-cont-bgdc').parent();
  //第一层
  if (outerelem && outerelem.attr('class') == 'category-cont-pro') {

    var level = $('.category-cont-bgdc').next().attr('title');
    var nextlevel = $('.category-cont-bgdc').next().html();
    var childNum = [];
    var date = document.getElementsByName("levelChoose");

    date.forEach(function (item) {
      if (item.checked == true) {
        childNum.push(item.value);
      }
    })
    // var regNum = /^[0-9a-zA_Z]+$/;
    // if (!regNum.test($("#number").val())) {
    //   alert("产品编号格式错误！");
    // } else 
    if ($("#createModelName").val().length > 30) {
      alert("产品名称不超过30个字符！");
    } else {
      $.ajax({
        type: "post",
        url: ip_path + "/changfa_system/productCatalog/addProductCatalog.do",
        traditional: true,
        data: {
          level: (level - 0) + 1,
          parentNum: $('.category-cont-bgdc').prev().prev().attr('title'),
          number: $("#number").val(),
          childNumList: childNum,
          name: $("#createModelName").val(),
          isLast: nextlevel - level > 1 ? 1 : 0,
        },
        dataType: "json",
        success: function (data) {
          if (data['head']['code'] == 200) {
            window.location.reload();
          } else {
            alert(data['head']['message']);
          }
        }
      });
    }
    //第二层
  } else if (outerelem && outerelem.attr('class') == 'category-cont-line' && outerelem.parent().attr('id') != 611) {

    var level = $('.category-cont-bgdc').next().attr('title');
    var nextlevel = $('.category-cont-bgdc').next().html();
    var childNum = [];
    var date = document.getElementsByName("levelChoose");

    date.forEach(function (item) {
      if (item.checked == true) {
        childNum.push(item.value);
      }
    })

    // var regNum = /^[0-9a-zA_Z]+$/;
    // if (!regNum.test($("#number").val())) {
    //   alert("产品编号格式错误！");
    // } else 
    if ($("#createModelName").val().length > 50) {
      alert("产品名称不超过50个字符！");
    } else {
      $.ajax({
        type: "post",
        url: ip_path + "/changfa_system/productCatalog/addProductCatalog.do",
        traditional: true,
        data: {
          level: (level - 0) + 1,
          parentNum: $('.category-cont-bgdc').prev().prev().attr('title'),
          number: $("#number").val(),
          childNumList: childNum,
          name: $("#createModelName").val(),
          isLast: nextlevel - level > 1 ? 1 : 0,
        },
        dataType: "json",
        success: function (data) {
          if (data['head']['code'] == 200) {
            window.location.reload();
            if(outerelem.parent().attr('id') == 601){
              //如果是601就存储当前的 num值，
              $(window.parent.document).find("input[name='modelNum']").val($("#number").val());
        
            }
            
          } else {
            alert(data['head']['message']);
          }
        }
      });
    }
    //第三层
  } else if (outerelem && outerelem.attr('class') == 'category-cont-model' || outerelem.parent().attr('id') == 611) {
    var regNum = /^[0-9a-zA_Z]+$/;
    var list = [];
    //如果十四项为显示则获取值
    if ($('.four-config').css('display') == 'block') {
      var arr = {
        'engine': $('#engine').val() == null ? '' : $('#engine').val(),
        'battery': $('#battery').val() == null ? '' : $('#battery').val(),
        'lifter': $('#lifter').val() == null ? '' : $('#lifter').val(),
        'trailer': $('#trailer').val() == null ? '' : $('#trailer').val(),
        'oilPump': $('#oilPump').val() == null ? '' : $('#oilPump').val(),
        'frontAxle': $('#frontAxle').val() == null ? '' : $('#frontAxle').val(),
        'frontWheel': $('#frontWheel').val() == null ? '' : $('#frontWheel').val(),
        'rearWheel': $('#rearWheel').val() == null ? '' : $('#rearWheel').val(),
        'gearBox': $('#gearBox').val() == null ? '' : $('#gearBox').val(),
        'rearAxle': $('#rearAxle').val() == null ? '' : $('#rearAxle').val(),
        'powerOutput': $('#powerOutput').val() == null ? '' : $('#powerOutput').val(),
        'frontWeight': $('#frontWeight').val() == null ? '' : $('#frontWeight').val(),
        'rearWeight': $('#rearWeight').val() == null ? '' : $('#rearWeight').val(),
        'sunShade': $('#sunShade').val() == null ? '' : $('#sunShade').val()
      }
      list.push(arr);
    };
    var des = '';
    //如果list有值了则拼接字符串
    if (list) {
      list.forEach(item => {
        for (const key in item) {
          if (item[key]) {
            des += ($("option[value='" + item[key] + "']").html() + '、')
          }
        }
      })

    }
    var deslist = des || $("#createModelName").val();
    var json = {
      'saleType': $('input[name="saleType"]:checked').val(),
      'modelNum': $('.category-cont-bgdc').prev().prev().attr('title'),
      'number': $("#number").val(),
      'price': $("#price").val(),
      'name': $("#name").val(),
      'des': deslist,
      'list': list
    }
    if (!regNum.test($("#number").val())) {
      alert("产品编号格式错误！");
    } else if ($("#createModelName").val().length > 50) {
      alert("产品名称不超过50个字符！");
    } 
    // else if ($("#number").val().length != 11) {
    //   alert("产品编号必须是11位！");
    // } 
    else if (isNaN($("#price").val())) {
      alert("价格及标准价必须是数字！");
    } else {
      $.ajax({
        type: "post",
        contentType: 'application/json',
        url: ip_path + "/changfa_system/config/addMachineConfig.do",
        data: JSON.stringify(json),
        success: function (data) {
          if (data['head']['code'] == 200) {
            window.location.reload();
          } else {
            alert(data['head']['message']);
          }
        }
      });
    }
  }
}

function closeAddModel() {

  $("#addModel").hide();
  $('#price').parent().parent().hide();
  $('#totalPrice').parent().parent().hide();
  $('#name').parent().parent().hide();
  $('#createModelName').parent().parent().show();
}

function changesaleType() {
  $('#outsaleType').prop('checked', false);
  $('#shopsaleType').prop('checked', false);
  $("#editModel").show();
}

function checkboxall() {
  if ($("#checkboxall").prop("checked") == true) {
    $("input:checkbox").prop('checked', true)
  } else {
    $("input:checkbox").prop('checked', false)
  }
}

function updateModel() {
  var bianma = new Array();
  if ($("input:checkbox:checked").length > 0) {
    $("input:checkbox:checked").each(function (index, elem) {
      bianma.push(elem.value);
    });
  } else {
    alert('当前没有选择任何产品');
    return;
  }
  for (var i = 0; i < bianma.length; i++) {
    if (bianma[i] == "" || isNaN(bianma[i])) {
      bianma.splice(i, 1);
      i = i - 1;

    }

  }

  if (!$('input[name="saleType3"]:checked').val()) {
    alert("没有选择销售类型");
  } else {
    $.ajax({
      type: "post",
      url: ip_path + "/changfa_system/model/batchUpdateConfig.do",
      data: {
        numbers: bianma.toString(),
        saleType: $('input[name="saleType3"]:checked').val(),
      },
      dataType: "json",
      success: function (data) {
        if (data.head.code == 200) {
          closeEditModel();
          $('#checkboxall').removeAttr('checked');
          ajax_modelConfigList();
        } else {
          alert(data.head.message);
        }
      }
    });
  }
}

function closeEditModel() {
  $("#editModel").hide();
}

function deleteModel(event) {
  if (window.confirm("确认要删除该条？")) {
    $.ajax({
      type: "post",
      url: ip_path + "/changfa_system/model/deleteModel.do",
      data: {
        type: 3,
        number: event.alt,
      },
      dataType: "json",
      success: function (data) {
        if (data['head']['code'] == 200) {
          window.location.reload();
        } else {
          alert(data['head']['message']);
        }
      }
    });
  }
}
//关闭故障弹窗
function closePropErrorCode(){
  $('#addModel').hide();
  $('#delectModel').hide();
  $('#propErrorCode').hide();
  $('#addErrorCodeInsert').show();
  $('#openAddModel').show();
  $('#openDelectModel').show();
  $('#propErrorCode input').attr("disabled",false)
  $('#propErrorCode select').attr("disabled",false);
  $('#propErrorCode textarea').attr("disabled",false);
}

function lookpropErrorCode(event){

  $('#openAddModel').hide();
  $('#openDelectModel').hide();
  $('#addErrorCodeInsert').hide();
  $('#propErrorCode input').attr("disabled",true);
  $('#propErrorCode select').attr("disabled",true);
  $('#propErrorCode textarea').attr("disabled",true);
  $.ajax({
    type : "get",
    url : ip_path+"/changfa_system/errorCode/get.do",
    dataType : "json",
    data:{
        id:$(event).parent().parent().attr('id')
    },
    success : function (data) {
        if(data.head.code == 200){
          addOrEdit = $(event).parent().parent().attr('id');
        $('#errorCode').val(data.body.result.code),
        $('#errorName').val(data.body.result.name),
        $('#errorRemark').val(data.body.result.description),
        $('#line2').val(data.body.result.line),
        $('#type2').val(data.body.result.engine),
        $('#propErrorCode').show();
        }else{
            alert(data.head.message);
        }

        // $("#product").unbind();
    }
});

}

function editMachineInfo() {
  $("#editMachineInfo").show();

  $("#updateFactoryNum").val($("#factoryNum").html());
  $("#updateImei").val($("#imei").html());

  ajax_getLineNum_update();
  $("#updateLine").val($("#lineNum").val());
  ajax_getSeriesNum_update();
  $("#updateSeries").val($("#seriesNum").val());
  ajax_getModelNum_update();
  $("#updateModel").val($("#modelNum").val());

  $("#updateLine").change(function () {
    $("#updateSeries").empty();
    ajax_getSeriesNum_update();
    if ($("#updateSeries").change()) {
      $("#updateModel").empty();
      ajax_getModelNum_update();
    }

    $("#updateSeries").change(function () {
      $("#updateModel").empty();
      ajax_getModelNum_update();
    });
  });
  $("#updateSeries").change(function () {
    $("#updateModel").empty();
    ajax_getModelNum_update();
  });


}

function closeEditMachineInfo() {
  $("#editMachineInfo").hide();
}

function updateMachineInfo() {
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/machineFlow/updateMachineInfo.do",
    data: {
      machineId: $(window.parent.document).find("input[name='machineId']").val(),
      lineNum: $("#updateLine option:selected").val(),
      seriesNum: $("#updateSeries option:selected").val(),
      modelNum: $("#updateModel option:selected").val(),
      factoryNum: $("#updateFactoryNum").val(),
      imei: $("#updateImei").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] == 200) {
        window.location.reload();
      } else {
        alert(data['head']['message']);
      }
    }
  });

}

function inStore() {
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/machineFlow/machinePutIn.do",
    data: {
      barCode: $("#barCode").text(),
      dealerNum: $("#dealerNum").text(),
      storeId: $("#store option:selected").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] == 200) {
        window.location.reload();
      } else {
        alert(data['head']['message']);
      }
    }
  });
}

function queryReportSum() {
  currentPage = 1;
  ajax_reportSum();
}

function queryDispatchSum() {
  currentPage = 1;
  ajax_dispatchSum();
}

function queryRepairSum() {
  currentPage = 1;
  ajax_repairSum();
}

function queryNotice() {
  currentPage = 1;
  ajax_noticeM();
}

function addNotice() {
  window.open("addNotice.html", "_self");
}

function queryAccepter() {
  var workNum;
  var userName;
  if ($("#choose option:selected").val() == 1) {
    userName = $("#roleQuery").val();
    workNum = "";
  } else {
    workNum = $("#roleQuery").val();
    userName = "";
  }
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/user/getUserByWorknum.do",
    data: {
      roleId: $("#acceptRole option:selected").val(),
      workNum: workNum,
      userName: userName
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] == 200) {
        $("#querySingleMan").show();
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['resultList'].length; i++) {
          $("#adminTbody").append(
            "<tr>" +
            '<td class="td2 txt_center" height="46px">' + data['body']['resultList'][i]['name'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['resultList'][i]['workNum'] + '</td>' +
            '<td class="td2 txt_center" ><input type="button" class="submit_btn" value="添加" onclick="add_singleMan(this)"></td>' +
            '</tr>'
          );
        }
      } else {
        window.confirm("没有查询到相关信息！");
      }
    }
  });
}

function add_singleMan(event) {
  var oldVal = $("#tags_2").val();
  var tags = event.parentNode.parentNode.childNodes[1].innerHTML + "_" + event.parentNode.parentNode.childNodes[0].innerHTML;
  if (oldVal.indexOf(tags) == -1) {
    $("#tags_2").addTag(tags, {
      focus: false,
      callback: false
    });
    $("#querySingleMan").hide();
  } else {
    alert("该角色已存在！");
    $("#querySingleMan").hide();
    $("#roleQuery").val("");
  }
}

function toogleAccepter() {
  if ($("#type1").is(':checked')) {
    $("#qunfa").show()
    $("#danfa").hide();
  } else {
    $("#qunfa").hide()
    $("#danfa").show();
  }
}

function addFileUpload() {
  $("#fileList").append(
    '<tr content="delete">' +
    '<td><input type="file" name="file"></td>' +
    '<td><a href="###" onclick="deleteFile(this)">删除</a></td>' +
    '</tr>'
  );
}

function submitFileList() {
  window.parent.showLoading();
  $("#form").append(
    '<input type="hidden" name="size" value="10">'
  );

  $('#fileList tr').each(function (i) {
    if ($(this).children('td').eq(0).find('input').val() == "") {
      $(this).remove();
    }
  });


  var option = {
    url: ip_path + "/changfa_system/file/manyFileUploadUnThumbnail.do",
    type: "post",
    success: function (data) {
      window.parent.hideLoading();
      alert(data['head']['message']);
      if (data['head']['code'] == 200) {
        $('#fileList tr').each(function (i) {
          if ($(this).children('td').eq(0).find('input').length > 0) {
            $(this).remove();
          }
        });
        for (var j = 0; j < data['body']['result']['filePath'].length; j++) {
          $("#fileList").append(
            '<tr>' +
            '<td><span>' + data['body']['result']['fileName'][j] + '</span></td>' +
            '<td><a href="###" onclick="deleteFile(this)">删除</a></td>' +
            '<td style="display: none;">' + data['body']['result']['fileIds'].split(",")[j] + '</td>' +
            '</tr>'
          );
        }
        fileIds = fileIds.concat(data['body']['result']['fileIds'].split(","));
      }
    }
  };
  $("#form").ajaxSubmit(option);

}

function createNotice() {
  var roles = new Array(12, 13, 14, 3, 4, 5, 6, 9, 7);
  var roleList = new Array();
  var appointList = new Array();
  if ($("#type2").is(':checked')) {
    roleList = "";
    appointList = $("#tags_2").val();
  } else {
    appointList = "";
    for (var item in roles) {
      if ($("#" + roles[item]).is(':checked')) {
        roleList.push(roles[item]);
      }
    }
  }

  var status;
  if ($("#send1").is(':checked')) {
    status = 1;
  } else {
    status = 2;
  }

  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/user/createInform.do",
    data: {
      type: $("#type option:selected").val(),
      title: $("#title").val(),
      content: $("#content").val(),
      fileIds: fileIds.toString(),
      token: $(window.parent.document).find("input[name='token']").val(),
      role: roleList.toString(),
      appoint: appointList,
      model: 1,
      status: status
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        alert(data['head']['message']);
      } else {
        fileIds = [];
        window.open("noticeManage.html", "_self");
      }
    }
  });
}

function deleteFile(event) {
  event.parentNode.parentNode.remove();

  var index;
  for (var item in fileIds) {
    if (fileIds[item] == event.parentNode.parentNode.childNodes[2].innerHTML) {
      index = item;
      fileIds.splice(index, 1);
    }
  }
}

function to_noticeM() {
  window.history.go(-1);
}


function showNoticeDraft(event) {
  $(window.parent.document).find("input[name='noticeId']").val(event.parentNode.parentNode.id);
  window.open("noticeDraft.html", "_self");
}

function showNoticeDetails(event) {
  $(window.parent.document).find("input[name='noticeId']").val(event.parentNode.parentNode.id);
  window.open("noticeDetails.html", "_self");
}

function createNotice_draft() {
  var roles = new Array(5, 6, 9, 7);
  var roleList = new Array();
  var appointList = new Array();
  if ($("#type2").is(':checked')) {
    roleList = "";
    appointList = $("#tags_2").val();
  } else {
    appointList = "";
    for (var item in roles) {
      if ($("#" + roles[item]).is(':checked')) {
        roleList.push(roles[item]);
      }
    }
  }

  var status;
  if ($("#send1").is(':checked')) {
    status = 1;
  } else {
    status = 2;
  }

  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/user/createInform.do",
    data: {
      type: $("#type option:selected").val(),
      title: $("#title").val(),
      content: $("#content").val(),
      fileIds: fileIds.toString(),
      token: $(window.parent.document).find("input[name='token']").val(),
      role: roleList.toString(),
      appoint: appointList,
      model: 0,
      status: status,
      informId: $(window.parent.document).find("input[name='noticeId']").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        alert(data['head']['message']);
      } else {
        fileIds = [];
        window.open("noticeManage.html", "_self");
      }
    }
  });
}

function downloadFile(event) {
  $("#form").html(
    '<input type="hidden" name="fileId" value="' + event.parentNode.parentNode.childNodes[2].innerHTML + '">'
  );
  $("#form").attr("action", ip_path + "/changfa_system/file/downloadFile.do");
  $("#form").submit();
}

function noticeBack() {
  if (window.confirm("确定要撤回吗？")) {
    $.ajax({
      type: "post",
      url: ip_path + "/changfa_system/user/revokeInform.do",
      data: {
        informId: $(window.parent.document).find("input[name='noticeId']").val(),
        userId: $(window.parent.document).find("input[name='userId']").val()
      },
      dataType: "json",
      success: function (data) {
        if (data['head']['code'] != 200) {
          alert(data['head']['message']);
        } else {
          window.open("noticeManage.html", "_self");
        }
      }
    });
  }
}



//



function queryDealerCostSum() {
  currentPage = 1;
  ajax_costDealer();
}

function queryDealerCostSum10() {
  currentPage = 1;
  ajax_costDealer10();
}


function queryCostSum() {
  currentPage = 1;
  ajax_costSumM();
}

function editRepairInfo(event) {
  $("#editRepair").show();
  $("#examineDistance").val(event.parentNode.childNodes[2].innerHTML);
  $("#examineTime").val(event.parentNode.childNodes[5].innerHTML);
  $("#examineOtherFee").val(event.parentNode.childNodes[8].innerHTML);
  $("#check").val(event.parentNode.childNodes[9].innerHTML);
  $("#checkReason").val(event.parentNode.childNodes[10].innerHTML);
  $("#repairId").val(event.parentNode.id);
}

function closeEditRepair() {
  $("#editRepair").hide();
}

function updateRepair() {
  var reg_num = /^([0-9]*)+(.[0-9]{2})?$/;
  if (!reg_num.test($("#examineDistance").val())) {
    alert("核准里程只能是两位小数的数字！");
  } else if (!reg_num.test($("#examineTime").val())) {
    alert("核准工时只能是两位小数的数字！");
  } else if (!reg_num.test($("#examineOtherFee").val())) {
    alert("核准其他费用只能是两位小数的数字！");
  } else if (!reg_num.test($("#check").val())) {
    alert("考核金额只能是两位小数的数字！");
  } else {
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/repair/countRepairCost.do",
      data: {
        repairId: $("#repairId").val(),
        examineDistance: $("#examineDistance").val(),
        examineTime: $("#examineTime").val(),
        examineOtherFee: $("#examineOtherFee").val(),
        checkMoney: $("#check").val(),
        checkReason: $("#checkReason").val(),
      },
      dataType: "json",
      success: function (data) {
        if (data['head']['code'] == 200) {
          $("#editRepair").hide();
          ajax_createCostSum_detail();
        }
      }
    });
  }
}

function updateRepair_check() {
  var reg_num = /^([0-9]*)+(.[0-9]{1})?$/;
  if (!reg_num.test($("#examineDistance").val())) {
    alert("核准里程只能是一位小数的数字！");
  } else if (!reg_num.test($("#examineTime").val())) {
    alert("核准工时只能是一位小数的数字！");
  } else if (!reg_num.test($("#examineOtherFee").val())) {
    alert("核准其他费用只能是一位小数的数字！");
  } else if (!reg_num.test($("#check").val())) {
    alert("考核金额只能是一位小数的数字！");
  } else {
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/repair/countRepairCost.do",
      data: {
        repairId: $("#repairId").val(),
        examineDistance: $("#examineDistance").val(),
        examineTime: $("#examineTime").val(),
        examineOtherFee: $("#examineOtherFee").val(),
        checkMoney: $("#check").val(),
        checkReason: $("#checkReason").val(),
      },
      dataType: "json",
      success: function (data) {
        if (data['head']['code'] == 200) {
          $("#editRepair").hide();
          ajax_costSumRepair_detail();
          $("#submitAgain").show();
        }
      }
    });
  }
}


function submitAgain() {
  if (window.confirm("确认提交？")) {
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/repair/resubmitStatements.do",
      data: {
        statementsId: $(window.parent.document).find("input[name='costSumId']").val(),
        examineUserId: $(window.parent.document).find("input[name='userId']").val()
      },
      dataType: "json",
      success: function (data) {
        if (data['head']['code'] == 200) {
          window.history.go(-1);
        }
      }
    });
  }
}

function createAddCostPay() {
  window.open("createCostPay.html", "_self");
}

// function addTicket() {
//     $("#addTicket").show();
// }
//
// function closeAddTicket() {
//     $("#addTicket").hide();
// }
//
// function insertTicket() {
//     if($("#ticketNum").val() == ""){
//         alert("请填写发票号！");
//     }else if($("#ticketTime").val() == ""){
//         alert("请选择时间！");
//     }
//     var option = {
//         url :ip_path+"/changfa_system/file/oneFileUpload.do",
//         type : "post",
//         success : function (data) {
//             window.parent.hideLoading();
//             if(data['head']['code'] == 200){
//                 filePath = data['body']['result']['filePath'];
//             }
//         }
//     };
//     $("#form").ajaxSubmit(option);
// }



function chooseAllOrNullMachine() {
  if ($("#checkAll").is(":checked")) {
    machineIds = [];
    $('#adminTbody tr').each(function (i) {
      if ($(this).find("td").eq(5)[0]['innerHTML'] == "未接车") {
        $(this).find("td").eq(7).find("input[type='checkbox']").attr("checked", true);
        machineIds.push($(this)[0]['id']);
      }
    });
  } else {
    machineIds = [];
    $('#adminTbody tr').each(function (i) {
      $(this).find("td").eq(7).find("input[type='checkbox']").attr("checked", false);
    });
  }
}

function chooseMachine(event) {
  var index = 0;
  var count = 0;
  $('#adminTbody tr').each(function (i) {
    if ($(this).find("td").eq(7).find("input[type='checkbox']").is(":checked")) {
      index++;
    }
  });
  $('#adminTbody tr').each(function (i) {
    if ($(this).find("td").eq(5)[0]['innerHTML'] == "未接车") {
      count++;
    }
  });

  if (index == count) {
    $("#checkAll").attr("checked", true);
  } else {
    $("#checkAll").attr("checked", false);
  }

  if (event.checked) {
    machineIds.push(event.parentNode.parentNode.id);
  } else {
    var index;
    for (var item in machineIds) {
      if (machineIds[item] == event.parentNode.parentNode.id) {
        index = item;
        machineIds.splice(index, 1);
      }
    }
  }
}

function multipleInStore() {
  var json_arr = new Array();
  $('#adminTbody tr').each(function (i) {
    if ($(this).find("td").eq(7).find("input[type='checkbox']").is(":checked")) {
      var json = {
        "machineId": $($(this)[0]).find('td')[6].id,
        "dealerName": $("#dealerName").text(),
        "dealerNum": $("#dealerNo").text(),
        "barCode": $(this).find("td").eq(4)[0]['innerHTML']
      };
      json_arr.push(json)
    }
  });

  var jsonp = {
    "storeId": $("#store option:selected").val(),
    "fileIds": "",
    "remarks": "",
    "invoiceNo": $("#invoiceNo").val(),
    "selectMachineVo": json_arr
  };
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/deliver/batchMachinesInput.do",
    contentType: 'application/json',
    data: JSON.stringify(jsonp),
    success: function (data) {
      if (data['head']['code'] == 200) {
        window.location.reload();
      } else {
        alert(data['head']['message']);
      }
    }
  });
}

function queryCostPay() {
  currentPage = 1;
  sessionStorage.setItem('dealer_item_cpm', $('#dealer_item').val());
  sessionStorage.setItem('dealer_info_cpm', $('#dealer_info').val());
  ajax_costPay();
}

function queryBalancePay() {
  currentPage = 1;
  sessionStorage.setItem('dealer_item_fpv', $('#dealer_item').val());
  sessionStorage.setItem('dealer_info_fpv', $('#dealer_info').val());
  ajax_balancePay();
}


function queryCostSumForPay() {
  currentPage = 1;
  ajax_costSumForPay();
}

function querySendOrder() {
  currentPage = 1;
  sessionStorage.setItem($('#sendM_item').attr('id'), $('#sendM_item').val());
  sessionStorage.setItem($('#sendM_info').attr('id'), $('#sendM_info').val());
  sessionStorage.removeItem($("#line").attr('id'));
  sessionStorage.removeItem($("#status").attr('id'));
  sessionStorage.removeItem($("#brokenStatus").attr('id'));
  sessionStorage.removeItem($("#date_start_ve").attr('id'));
  sessionStorage.removeItem($("#date_end_ve").attr('id'));
  $("#line").val('');
  $("#status").val('');
  $("#brokenStatus").val('');
  $("#date_start_ve").val('');
  $("#date_end_ve").val('');
  ajax_sendOrderM();
}

function showVehicleDetails(event) {
  $(window.parent.document).find("input[name='invoiceId']").val(event.parentNode.parentNode.id);
  window.open("vehicleDetails.html", "_self");
}

function showrskCheckDetails(event) {
  var machineFlowId = event.parentNode.parentNode.id;
  $(window.parent.document).find("input[name='machineFlowId']").val(machineFlowId);
  var out_range = $(event).parent().prev().prev().prev().prev().prev().prev().html();
  $(window.parent.document).find("input[name='outRange']").val(out_range);
  var first_status = $(event).parent().prev().prev().prev().prev().prev().html();
  $(window.parent.document).find("input[name='firstStatus']").val(first_status);
  var final_status = $(event).parent().prev().prev().prev().prev().html();
  $(window.parent.document).find("input[name='finalStatus']").val(final_status);
  var first_time = $(event).parent().prev().prev().prev().prev().prev().attr('alt');
  $(window.parent.document).find("input[name='firstTime']").val(first_time);
  var final_time = $(event).parent().prev().prev().prev().prev().attr('alt');
  $(window.parent.document).find("input[name='finalTime']").val(final_time);
  var alert_id = $(event).parent().next().html();
  $(window.parent.document).find("input[name='alertId']").val(alert_id);
  var alarm = $(event).parent().prev().prev().html();
  $(window.parent.document).find("input[name='alarm']").val(alarm);
  window.open("riskcheck_detail.html", "_self");
}

function showlookCheckDetails(event) {
  var machineFlowId = event.parentNode.parentNode.id;
  $(window.parent.document).find("input[name='machineFlowId']").val(machineFlowId);
  if ($(event).parent().prev().length > 0) {
    var approval_stage = $(event).parent().prev().html();
    $(window.parent.document).find("input[name='approvalStage']").val(approval_stage);
  }
  window.open("lookCheck_timer.html", "_self");
}

function showForCheckDetails(event) {
  var machineFlowId = event.parentNode.parentNode.id;
  $(window.parent.document).find("input[name='machineFlowId']").val(machineFlowId);
  if ($(event).parent().prev().length > 0) {
    var approval_stage = $(event).parent().prev().html();
    $(window.parent.document).find("input[name='approvalStage']").val(approval_stage);
  }
  window.open("waitingCheck_timer.html", "_self");
}

function instore() {
  $("#instore").show();
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/locationRecord/selectStore.do",
    data: {
      pageNum: 1,
      pageSize: 1000000,
      workNum: $("#dealerNum").text(),
    },
    dataType: "json",
    success: function (data) {
      $("#store").empty();
      for (var i = 0; i < data['body']['result']['data']['length']; i++) {
        $("#store").append("<option value='" + data['body']['result']['data'][i]['depotId'] + "'>" + data['body']['result']['data'][i]['storeRoomName'] + "</option>");
      }
    }
  });
}

function closeInstore() {
  $("#instore").hide();
}

function removealarm() {
  if (window.confirm("确认解除报警？")) {
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/api/removeAlert.do",
      data: {
        bar_code: $(window.parent.document).find("input[name='barCode']").val(),
        token: $(window.parent.document).find("input[name='token']").val(),
      },
      dataType: "json",
      success: function (data) {
        if (data['head']['code'] != 200) {
          alert(data['head']['message']);
        } else {
          alert(data['head']['message']);
          window.location.reload();
        }
      }
    });
  }
}

function payMoney() {
  if (window.confirm("确认标记回款？")) {
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/machineFlow/reimbursement.do",
      data: {
        barCode: $("#barCode").text()
      },
      dataType: "json",
      success: function (data) {
        if (data['head']['code'] != 200) {
          alert(data['head']['message']);
        } else {
          alert(data['head']['message']);
          window.location.reload();
        }
      }
    });
  }
}

function chooseFaultLine() {
  ajax_faultSys();
  ajax_faultModel();
}

function addFaultSystem() {
  $("#addFaultSystem").show();
}

function closeAddFaultSystem() {
  $("#faultSysName").val("");
  $("#addFaultSystem").hide();
}

function createFaultSystem() {
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/machineSystem/addMachineSys.do",
    data: {
      machineNo: $(window.document).find("input[type='radio']:checked")[0]['id'],
      sysName: $("#faultSysName").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] == 200) {
        $("#faultSysName").val("");
        $("#addFaultSystem").hide();
        ajax_faultSys();
      } else {
        alert(data['head']['message']);
      }
    }
  });
}

function editFaultSystem(event) {
  $("#editFaultSystem").show();
  $("#edit_faultSysId").val(event.alt);
  $("#edit_faultSysName").val(event.parentNode.parentNode.nextSibling.value);
}

function closeEditFaultSystem() {
  $("#editFaultSystem").hide();
}

function updateFaultSystem() {
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/machineSystem/updateMachineSys.do",
    data: {
      machineNo: $(window.document).find("input[type='radio']:checked")[0]['id'],
      id: $("#edit_faultSysId").val(),
      sysName: $("#edit_faultSysName").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] == 200) {
        $("#editFaultSystem").hide();
        ajax_faultSys();
      } else {
        alert(data['head']['message']);
      }
    }
  });
}

function deleteFaultSystem(event) {
  if (window.confirm("确认删除？")) {
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/machineSystem/deleteMachineSys.do",
      data: {
        id: event.alt
      },
      dataType: "json",
      success: function (data) {
        if (data['head']['code'] == 200) {
          ajax_faultSys();
        } else {
          alert(data['head']['message']);
        }
      }
    });
  }
}

function addFaultModel() {
  $("#addFaultModel").show();
}

function closeAddFaultModel() {
  $("#faultModelName").val("");
  $("#addFaultModel").hide();
}

function createFaultModel() {
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/fault/addFaults.do",
    data: {
      machineNo: $(window.document).find("input[type='radio']:checked")[0]['id'],
      faultName: $("#faultModelName").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] == 200) {
        $("#faultModelName").val("");
        $("#addFaultModel").hide();
        ajax_faultModel();
      } else {
        alert(data['head']['message']);
      }
    }
  });
}

function editFaultModel(event) {
  $("#editFaultModel").show();
  $("#edit_faultModelId").val(event.alt);
  $("#edit_faultModelName").val(event.parentNode.parentNode.nextSibling.value);
}

function closeEditFaultModel() {
  $("#editFaultModel").hide();
}

function updateFaultModel() {
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/fault/updateFaults.do",
    data: {
      machineNo: $(window.document).find("input[type='radio']:checked")[0]['id'],
      id: $("#edit_faultModelId").val(),
      faultName: $("#edit_faultModelName").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] == 200) {
        $("#editFaultModel").hide();
        ajax_faultModel();
      } else {
        alert(data['head']['message']);
      }
    }
  });
}

function deleteFaultModel(event) {
  if (window.confirm("确认删除？")) {
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/fault/deleteFault.do",
      data: {
        id: event.alt
      },
      dataType: "json",
      success: function (data) {
        if (data['head']['code'] == 200) {
          ajax_faultModel();
        } else {
          alert(data['head']['message']);
        }
      }
    });
  }
}

function toFastRepairNeed(event) {
  $(window.parent.document).find("input[name='fastRptProcess']").val(event.id);
  var content = "<iframe id='ifm' src='fastRepairNeed.html' frameborder='0' scrolling='no' width='100%' height='3500px'></iframe>"
  $(window.parent.document).find("div[id='inner']").html(content);
}

function cancleDispatch() {
  if (window.confirm("确定要撤销该次派工吗？")) {
    if (window.confirm("撤销派工后请重新派工！")) {
      $.ajax({
        type: "post",
        async: false,
        url: ip_path + "/changfa_system/reportRepair/reportNew.do",
        data: {
          userId: $(window.parent.parent.document).find("input[name='userId']").val(),
          reportId: $(window.parent.parent.document).find("input[name='reportId']").val()
        },
        dataType: "json",
        success: function (data) {
          if (data['head']['code'] == 200) {
            $(window.parent.parent.document).find("input[name='reportId']").val(data['body']['result']['newReportId'])
            window.open("repaireNeedDetail.html", "_parent");
          } else {
            alert(data['head']['message']);
          }
        }
      });
    }
  }
}

function closeDispatch() {
  if (window.confirm("确认强制关闭该派工单吗？")) {
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/reportRepair/focusCloseReport.do",
      data: {
        token: $(window.parent.parent.document).find("input[name='token']").val(),
        reportId: $(window.parent.parent.document).find("input[name='reportId']").val()
      },
      dataType: "json",
      success: function (data) {
        if (data['head']['code'] == 200) {
          window.open("repaireNeedDetail.html", "_parent");
        } else {
          alert(data['head']['message']);
        }
      }
    });
  }
}

function toFastSaleApply(status) {
  // var myDate = new Date();
  // var thisDate = (myDate.getFullYear() + '-' + (myDate.getMonth() + 1) + '-' + myDate.getDate());
  // $(window.parent.document).find("input[name='nowDate']").val(thisDate);
  if($(window.parent.document).find("input[name='roleId']").val() == 23 || $(window.parent.document).find("input[name='roleId']").val() == 17){
    if(status == 3){
      $(window.parent.document).find("input[name='status']").val(5);
    }else if(status == 5){
      $(window.parent.document).find("input[name='status']").val(3);     
    }
  }else{
    $(window.parent.document).find("input[name='status']").val(status);
  }
  window.open("saleMachineManage.html", "_self");
}

function toFastBackApply(status) {
  // window.open("fastBackApply.html", "_self");
  // var myDate = new Date();
  // var thisDate = (myDate.getFullYear() + '-' + (myDate.getMonth() + 1) + '-' + myDate.getDate());
  // $(window.parent.document).find("input[name='nowDate']").val(thisDate);
  $(window.parent.document).find("input[name='status']").val(status);
  window.open("waitingForCheck.html", "_self");
}

//售后用订单配置选择产品编号第三层
function chooseMachineModelsale(id) {
  modelId = id;
  $(window.parent.document).find("input[name='modelNumForConfig']").val(id);
  $("#aliasSet").show();
  $("#productNum").val("");
  $(".layout-cont-edit").show();
  for (var item in modelList) {
    if (modelList[item] == id) {
      $("#lineList").find('.category-cont-proname').removeClass("category-cont-bgdc");
      $("div[title='" + modelList[item] + "'][id='3']").siblings(".category-cont-proname").addClass("category-cont-bgdc");
    } else {
      $("div[title='" + modelList[item] + "'][id='3']").siblings(".category-cont-proname").removeClass("category-cont-bgdc");
    }
  }
  currentPage = 1;
  ajax_modelConfigList();
}

//售后用订单配置选择产品编号第二层
function chooseMachineLinesale(id) {
  modelId = id;
  $(window.parent.document).find("input[name='modelNumForConfig']").val(id);
  $("#productNum").val("");
  $(".layout-cont-add").show();
  $(".layout-cont-edit").show();
  $("#aliasSet").hide();
  for (var item in lineList) {
    if (lineList[item] == id) {
      $("#lineList").find('.category-cont-proname').removeClass("category-cont-bgdc");
      $("div[title='" + lineList[item] + "'][id='2']").siblings(".category-cont-proname").addClass("category-cont-bgdc");
    } else {
      $("div[title='" + lineList[item] + "'][id='2']").siblings(".category-cont-proname").removeClass("category-cont-bgdc");
    }
  }
}

//售后用订单配置选择产品编号第一层
function chooseMachineProsale(id) {
  modelId = id;
  $(window.parent.document).find("input[name='modelNumForConfig']").val(id);
  $("#productNum").val("");
  $(".layout-cont-add").show();
  $(".layout-cont-edit").hide();
  $("#aliasSet").hide();
  for (var item in proList) {
    if (proList[item] == id) {
      $("#lineList").find('.category-cont-proname').removeClass("category-cont-bgdc");
      $("div[title='" + proList[item] + "'][id='1']").siblings(".category-cont-proname").addClass("category-cont-bgdc");
    } else {
      $("div[title='" + proList[item] + "'][id='1']").siblings(".category-cont-proname").removeClass("category-cont-bgdc");
    }
  }
}

//销售用订单配置选择产品编号第三层
function chooseMachineModel(id) {
  modelId = id;
  $(window.parent.document).find("input[name='modelNumForConfig']").val(id);
  $("#aliasSet").show();
  $("#productNum").val("");
  $(".layout-cont-edit").show();
  for (var item in modelList) {
    if (modelList[item] == id) {
      $("#lineList").find('.category-cont-proname').removeClass("category-cont-bgdc");
      $("div[title='" + modelList[item] + "']").siblings(".category-cont-proname").addClass("category-cont-bgdc");
    } else {
      $("div[title='" + modelList[item] + "']").siblings(".category-cont-proname").removeClass("category-cont-bgdc");
    }
  }
  currentPage = 1;
  ajax_modelConfigList();
}

//销售用订单配置选择产品编号第二层
function chooseMachineLine(id) {
  modelId = id;
  $(window.parent.document).find("input[name='modelNumForConfig']").val(id);
  $("#productNum").val("");
  $(".layout-cont-add").show();
  $(".layout-cont-edit").show();
  $("#aliasSet").hide();
  for (var item in lineList) {
    if (lineList[item] == id) {
      $("#lineList").find('.category-cont-proname').removeClass("category-cont-bgdc");
      $("div[title='" + lineList[item] + "']").siblings(".category-cont-proname").addClass("category-cont-bgdc");
    } else {
      $("div[title='" + lineList[item] + "']").siblings(".category-cont-proname").removeClass("category-cont-bgdc");
    }
  }
}

//销售用订单配置选择产品编号第一层
function chooseMachinePro(id) {
  modelId = id;
  $(window.parent.document).find("input[name='modelNumForConfig']").val(id);
  $("#productNum").val("");
  $(".layout-cont-add").show();
  $(".layout-cont-edit").hide();
  $("#aliasSet").hide();
  for (var item in proList) {
    if (proList[item] == id) {
      $("#lineList").find('.category-cont-proname').removeClass("category-cont-bgdc");
      $("div[title='" + proList[item] + "']").siblings(".category-cont-proname").addClass("category-cont-bgdc");
    } else {
      $("div[title='" + proList[item] + "']").siblings(".category-cont-proname").removeClass("category-cont-bgdc");
    }
  }
}

function viewConfiguration() {
  // layer.open({
  //     type: 1,
  //     skin:'layui-layer-rim',
  //     shade: false,
  //     title: false, //不显示标题
  //     offset:['730px', '22%'],
  //     area: '500px',
  //     content: $('#configDes').val(), //捕获的元素，注意：最好该指定的元素要存放在body最外层，否则可能被其它的相对元素所影响
  // });
  layer.tips($('#configDes').val(), '#shortDes', {
    tips: 2,
    tipsMore: false,
    time: 10000
  });
}

//农机单个轨迹查询
function showMachineMove(param) {
  var lineArr2 = [
    [116.478935, 39.997761],
    [116.478939, 39.997825],
    [116.478912, 39.998549],
    [116.478912, 39.998549],
    [116.478998, 39.998555],
    [116.478998, 39.998555],
    [116.479282, 39.99856],
    [116.479658, 39.998528],
    [116.480151, 39.998453],
    [116.480784, 39.998302],
    [116.480784, 39.998302],
    [116.481149, 39.998184],
    [116.481573, 39.997997],
    [116.481863, 39.997846],
    [116.482072, 39.997718],
    [116.482362, 39.997718],
    [116.483633, 39.998935],
    [116.48367, 39.998968],
    [116.484648, 39.999861]
  ];
  if (param) {
    currentPage2 = 1;
    $(window.parent.document).find("input[name='carTrack']").val($(param).parent().prev().prev().prev().html());
  }

  // var lineArr = new Array();
  // var startPointLng,startPointLat;
  $.ajax({
    type: "get",
    async: false,
    url: ip_path + "/changfa_system/api/getCarTripDetail.do",
    data: {
      //bar_code : '701660321903903622',
      bar_code: $(window.parent.document).find("input[name='barCode']").val(),
      date: $(window.parent.document).find("input[name='carTrack']").val(),
      pageNum: currentPage2,
      pageSize: 5
    },
    dataType: "json",
    success: function (data) {
      if (data['head'] != null) {
        if (data['head']['code'] == 200) {

          if (data['body']['result']['data'].length != 0) {
            $('#barcon2_d').show();
            currentPage2 = data['body']['result']['pageNum'];
            if (data['body']['result']['totalCount'] % data['body']['result']['pageSize'] == 0) {
              totalPage2 = data['body']['result']['total'] / data['body']['result']['pageSize'];
              
            } else {
              totalPage2 = Math.ceil(data['body']['result']['total'] / data['body']['result']['pageSize']);
            }
            totalData2 = data['body']['result']['total'];

            var map = '';

            data['body']['result']['data'].forEach(function (item) {
              //已第一个出现的 仓库为 显示地址
              if (map == '') {
                map = new AMap.Map("machine_map", {
                  resizeEnable: true,
                  center: item[0].split(","),
                  zoom: 12
                });
              }

              var a = [];
              item.forEach(function (ite) {
                a.push(ite.split(","));
              })

              var marker;

              marker = new AMap.Marker({
                map: map,
                position: a[0],
                icon: "https://webapi.amap.com/images/car.png",
                offset: new AMap.Pixel(-26, -13),
                autoRotation: true,
                angle: -90,
              });

              //绘制轨迹
              var polyline = new AMap.Polyline({
                map: map,
                path: a,
                showDir: true,
                strokeColor: "#28F", //线颜色
                // strokeOpacity: 1,     //线透明度
                strokeWeight: 6, //线宽
                // strokeStyle: "solid"  //线样式
              });
            })

            map.setFitView();

            pageSplit_d();
            hideOrShow_d();

          } else {
            alert("该条记录没有轨迹！");
          }
        } else {
          alert(data['head']['message']);
        }
      } else {
        alert("该条记录没有轨迹！");
      }
    }
  });
}

//订单配置
function queryModelConfigList() {
  currentPage = 1;
  ajax_modelConfigList();
}

function openConfigurationClass() {
  window.open("../configurationsAliasSet.html", "_self");
}



function viewConfigDetail(param) {

}

function showSalePlanDetails(param) {
  $(window.parent.document).find("input[name='salePlanId']").val(param.parentNode.parentNode.id);
  window.open("./salePlanDetails.html", "_self");
}

function querySalePlans() {
  currentPage = 1;
  ajax_salePlanM();
}

function salePlanCheckPass() {
  var emptyCount = 0;
  $("#carList").find("input").each(function () {
    if ($(this).val() == "") {
      emptyCount++;
    }
  });

  if (emptyCount == 0) {
    var list = new Array();

    for (var i = 0; i < $("#carList").find("tr").length; i++) {
      if ($("#carList").find("tr").eq(i).find("td").eq(5).find("input").eq(0).val() > 999) {
        alert("序号" + $("#carList").find("tr").eq(i).find("td").eq(0).html() + '数量不能超过999')
        return
      }
      if (i % 3 == 0) {
        var arr = {
          "configNum": $("#carList").find("tr").eq(i).find("td").eq(10).html(),
          "count": $("#carList").find("tr").eq(i).find("td").eq(6).find("input").eq(0).val(),
          "type": $("#carList").find("tr").eq(i).find("td").eq(9).html(),
          "planCarId": $("#carList").find("tr").eq(i).find("td").eq(8).html(),
          "des": $("#carList").find("tr").eq(i + 1).find("td").eq(0).html(),
          "price": $("#carList").find("tr").eq(i).find("td").eq(7).html(),
          "seriesName": $("#carList").find("tr").eq(i).find("td").eq(2).html(),
          "modelName": $("#carList").find("tr").eq(i).find("td").eq(3).html(),
        }
        list.push(arr);
      }
    }
    var json = {
      "uid": $(window.parent.document).find("input[name='userId']").val(),
      "salePlanId": $(window.parent.document).find("input[name='salePlanId']").val(),
      "status": 2,
      "remark": $("#lastRemark").val(),
      "supplyTime": $("#date99").val(),
      "list": list
    };

    if (window.confirm("确认通过？")) {
      $.ajax({
        type: "post",
        async: false,
        url: ip_path + "/changfa_system/config/updateSalePlan.do",
        contentType: 'application/json',
        data: JSON.stringify(json),
        success: function (data) {
          if (data['head']['code'] == 200) {
            window.location.reload();
          } else {
            alert(data['head']['message']);
          }
        }
      });
    }
  } else {
    alert("确认数量不能为空!");
  }
}

function salePlanCheckUnPass() {
  // var list = new Array();
  // for(var i=0;i<$("#carList").find("tr").length;i++){
  //     if(i%2 == 0){
  //         var arr = {
  //             "configNum" : $("#carList").find("tr").eq(i).find("td").eq(7).html(),
  //             "count" : $("#carList").find("tr").eq(i).find("td").eq(5).find("input").eq(0).val(),
  //             "planCarId" : $("#carList").find("tr").eq(i).find("td").eq(8).html(),
  //             "des" : $("#carList").find("tr").eq(i+1).find("td").eq(0).html()
  //         }
  //         list.push(arr);
  //     }                                  
  // }

  var json = {
    "uid": $(window.parent.document).find("input[name='userId']").val(),
    "salePlanId": $(window.parent.document).find("input[name='salePlanId']").val(),
    "status": -2,
    "remark": $("#lastRemark").val(),
    //"list":list
  };
  if (window.confirm("确认驳回？")) {
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/config/updateSalePlan.do",
      contentType: 'application/json',
      data: JSON.stringify(json),
      success: function (data) {
        if (data['head']['code'] == 200) {
          window.location.reload();
        } else {
          alert(data['head']['message']);
        }
      }
    });
  }
}

function showSaleOrderDetails(param) {
  $(window.parent.document).find("input[name='saleOrderId']").val(param.parentNode.parentNode.id);
  window.open("./saleOrderDetails.html", "_self");
}

function querySaleOrders() {
  currentPage = 1;
  ajax_saleOrderM();
}

function saleOrderCheckPass() {
  var emptyCount = 0;
  $("#carList").find("input").each(function () {
    if ($(this).val() == "") {
      emptyCount++;
    }
  });

  if (emptyCount == 0) {
    var list = new Array();
    for (var i = 0; i < $("#carList").find("tr").length; i++) {
      if ($("#carList").find("tr").eq(i).find("td").eq(9).html() == 0 && $("#carList").find("tr").eq(i).find("td").eq(10).html() == 0) {
        if ($("#carList").find("tr").eq(i).find("td").eq(6).find("input").eq(0).val() > $("#carList").find("tr").eq(i).find("td").eq(11).html()) {
          alert("序号" + $("#carList").find("tr").eq(i).find("td").eq(0).html() + '数量不能超过' + $("#carList").find("tr").eq(i).find("td").eq(11).html());
          return
        }
      } else {
        if ($("#carList").find("tr").eq(i).find("td").eq(6).find("input").eq(0).val() > 999) {
          alert("序号" + $("#carList").find("tr").eq(i).find("td").eq(0).html() + '数量不能超过999');
          return
        }
      }
      if (i % 2 == 0) {
        var arr = {
          "configNum": $("#carList").find("tr").eq(i).find("td").eq(8).html(),
          "count": $("#carList").find("tr").eq(i).find("td").eq(6).find("input").eq(0).val(),
          "orderCarId": $("#carList").find("tr").eq(i).find("td").eq(9).html(),
          "type": $("#carList").find("tr").eq(i).find("td").eq(10).html(),
          "des": $("#carList").find("tr").eq(i + 1).find("td").eq(0).html(),
        }
        list.push(arr);
      }
    }

    var json = {
      "uid": $(window.parent.document).find("input[name='userId']").val(),
      "saleOrderId": $(window.parent.document).find("input[name='saleOrderId']").val(),
      "status": 2,
      "remark": $("#lastRemark").val(),
      "supplyTime": $("#date99").val(),
      "list": list
    };
    if (window.confirm("确认通过？")) {
      $.ajax({
        type: "post",
        async: false,
        url: ip_path + "/changfa_system/config/updateSaleOrder.do",
        contentType: 'application/json',
        data: JSON.stringify(json),
        success: function (data) {
          if (data['head']['code'] == 200) {
            window.location.reload();
          } else {
            alert(data['head']['message']);
          }
        }
      });
    }
  } else {
    alert("确认数量不能为空!");
  }

}

function saleOrderCheckUnPass() {

  // var list = new Array();
  // for(var i=0;i<$("#carList").find("tr").length;i++){

  //     if(i%2 == 0){
  //         var arr = {
  //             "configNum" : $("#carList").find("tr").eq(i).find("td").eq(7).html(),
  //             "count" : $("#carList").find("tr").eq(i).find("td").eq(5).find("input").eq(0).val(),
  //             "orderCarId" : $("#carList").find("tr").eq(i).find("td").eq(8).html(),
  //             "des" : $("#carList").find("tr").eq(i+1).find("td").eq(0).html()
  //         }
  //         list.push(arr);
  //     }                                  
  // }

  var json = {
    "uid": $(window.parent.document).find("input[name='userId']").val(),
    "saleOrderId": $(window.parent.document).find("input[name='saleOrderId']").val(),
    "status": -2,
    "remark": $("#lastRemark").val(),
    //"list":list
  };
  if (window.confirm("确认驳回？")) {
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/config/updateSaleOrder.do",
      contentType: 'application/json',
      data: JSON.stringify(json),
      success: function (data) {
        if (data['head']['code'] == 200) {
          window.location.reload();
        } else {
          alert(data['head']['message']);
        }
      }
    });
  }
}

function changeDealerName(event){
  var user_id = event.parentNode.parentNode.id;
  $(window.parent.document).find("input[name='dealerId']").val(user_id);
  $('#newDealerNo').val(event.parentNode.parentNode.children[0].innerHTML);
  $('#newCompany').val(event.parentNode.parentNode.children[1].innerHTML);
  $('#changeName').show();
}

function closeChangeName(){
  $('#changeName').hide();
}

function updateChangeName(){
  if($('input[name="elem"]:checked').length == 0){
    alert('请选择经销商')
  }else{
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/user/updateDealerInfo.do",
      data: {
        newDealerNo: $('input[name="elem"]:checked').parent().next().html(),
        newCompany: $('input[name="elem"]:checked').parent().next().next().html(),
        uid: $(window.parent.document).find("input[name='dealerId']").val(),
      },
      dataType: "json",
      success: function (data) {
        if (data['head']['code'] == 200) {
          window.location.reload();
        } else {
          alert(data['head']['message']);
        }
      }
    });
  }
}
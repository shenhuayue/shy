function isPcOrPad() {
  var userAgentInfo = navigator.userAgent;
  if (userAgentInfo.indexOf("Window") != -1) {
    //PC
  } else if (userAgentInfo.indexOf("iPad") != -1) {
    //iPad
  }
}

//页面置顶
function toTop() {
  $("body").prepend('<input type="text" id="focus" size="1">');
  $("#focus").focus();
  $("#focus").hide();
}

// 本地用
//var ip_path = "http://10.1.84.117:8080";
//var ip_path = "http://192.168.1.102:8080";
//var ip_path = "http://192.168.1.112:8080";
//var ip_path = "http://10.1.84.128:8080";
//阿里服务器用
//var ip_path = "http://app.changfanz.net:3589";
//测试服务器用
var ip_path = "http://test.app.changfanz.net:3589";
//var ip_path = "http://test.app.changfanz.net:3588";
//var ip_path = "http://test.app.changfanz.net:3591";

 //var ip_path = "http://61.132.92.53:3591";
 //var ip_path = "http://172.31.16.23:3591";

//var ip_path = ip_path+"";s

//inputTags计数
var countTags = 1;

//费用结算
var fileIds = new Array();
var repairIdList = new Array();
var ticketIds = new Array();
var costSumIds = new Array();
var qidList = new Array();
var totalMoney = 0;

//存储数据
var allDate = new Array();
var changeDate = new Array();
var allMoney = 0;

var machineIds = new Array();

var filePath_t = "";
var filePath_c = "";

//农机型号数组
var modelList = new Array();
//第二层
var lineList = new Array();
//第一层
var proList = new Array();

//app角色ID
var appRoleList = ['3','4','5','6','7','9','12','13','14'];

//角色删选常发三包员
var threeGuar = ['3','4','5','7','13','14'];

//不同浏览器的兼容
function getObjectURL(file) {
  var url = null;
  if (window.createObjectURL != undefined) { // basic
    url = window.createObjectURL(file);
  } else if (window.URL != undefined) { // mozilla(firefox)
    url = window.URL.createObjectURL(file);
  } else if (window.webkitURL != undefined) { // webkit or chrome
    url = window.webkitURL.createObjectURL(file);
  }
  return url;
}

//获取当前浏览器版本
function getBrowserVersion() {
  var BrowserMatch = {
    init: function () {
      this.browser = this.getBrowser().browser || "An Unknown Browser";
      this.version = this.getBrowser().version || "An Unknown Version";
      this.OS = this.getOS() || "An Unknown OS";
    },
    getOS: function () {
      if (navigator.platform.indexOf("Win") != -1) return "Windows";
      if (navigator.platform.indexOf("Mac") != -1) return "Mac";
      if (navigator.platform.indexOf("Linux") != -1) return "Linux";
      if (navigator.userAgent.indexOf("iPhone") != -1) return "iPhone/iPod";
    },
    getBrowser: function () {
      var rMsie = /(msie\s|trident\/7)([\w\.]+)/;
      var rTrident = /(trident)\/([\w.]+)/;
      var rFirefox = /(firefox)\/([\w.]+)/;
      var rOpera = /(opera).+version\/([\w.]+)/;
      var rNewOpera = /(opr)\/(.+)/;
      var rChrome = /(chrome)\/([\w.]+)/;
      var rSafari = /version\/([\w.]+).*(safari)/;
      var ua = navigator.userAgent.toLowerCase();
      var matchBS, matchBS2;
      matchBS = rMsie.exec(ua);
      if (matchBS != null) {
        matchBS2 = rTrident.exec(ua);
        if (matchBS2 != null) {
          switch (matchBS2[2]) {
            case "4.0":
              return {
                browser:
                  "IE",
                  version: "8"
              };
              break;
            case "5.0":
              return {
                browser:
                  "IE",
                  version: "9"
              };
              break;
            case "6.0":
              return {
                browser:
                  "IE",
                  version: "10"
              };
              break;
            case "7.0":
              return {
                browser:
                  "IE",
                  version: "11"
              };
              break;
            default:
              return {
                browser:
                  "IE",
                  version: "Undefined"
              };
          }
        } else {
          return {
            browser: "IE",
            version: matchBS[2] || "0"
          };
        }
      }
      matchBS = rFirefox.exec(ua);
      if ((matchBS != null) && (!(window.attachEvent)) && (!(window.chrome)) && (!(window.opera))) {
        return {
          browser: matchBS[1] || "",
          version: matchBS[2] || "0"
        };
      }
      matchBS = rOpera.exec(ua);
      if ((matchBS != null) && (!(window.attachEvent))) {
        return {
          browser: matchBS[1] || "",
          version: matchBS[2] || "0"
        };
      }
      matchBS = rChrome.exec(ua);
      if ((matchBS != null) && (!!(window.chrome)) && (!(window.attachEvent))) {
        matchBS2 = rNewOpera.exec(ua);
        if (matchBS2 == null) {
          return {
            browser: matchBS[1] || "",
            version: matchBS[2] || "0"
          };
        } else {
          return {
            browser: "Opera",
            version: matchBS2[2] || "0"
          };
        }
      }
      matchBS = rSafari.exec(ua);
      if ((matchBS != null) && (!(window.attachEvent)) && (!(window.chrome)) && (!(window.opera))) {
        return {
          browser: matchBS[2] || "",
          version: matchBS[1] || "0"
        };
      }
    }
  };
  BrowserMatch.init();
  var version;
  version = BrowserMatch.browser + BrowserMatch.version;

  return version;
}

// function toogleStatus() {
//     var div2 = document.getElementById("div2");
//     var div1 = document.getElementById("div1");
//
//     div1.className = (div1.className=="close1")?"open1":"close1";
//     div2.className = (div2.className=="close2")?"open2":"close2";
// }

var token_400 = "9C388EE3C3CA9C12CA00BA9484201513";
var creatorId_400 = "2d98dea9-e3e6-467e-a95f-53303fd7dce5";

function datePicker() {
  $.datepicker.regional['zh-CN'] = {
    changeMonth: true,
    changeYear: true,
    clearText: '清除',
    clearStatus: '清除已选日期',
    closeText: '关闭',
    closeStatus: '不改变当前选择',
    prevText: '<上月',
    prevStatus: '显示上月',
    prevBigText: '<<',
    prevBigStatus: '显示上一年',
    nextText: '下月>',
    nextStatus: '显示下月',
    nextBigText: '>>',
    nextBigStatus: '显示下一年',
    currentText: '今天',
    currentStatus: '显示本月',
    monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    monthStatus: '选择月份',
    yearStatus: '选择年份',
    weekHeader: '周',
    weekStatus: '年内周次',
    dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
    dayStatus: '设置 DD 为一周起始',
    dateStatus: '选择 m月 d日, DD',
    dateFormat: 'yy-mm-dd',
    firstDay: 1,
    initStatus: '请选择日期',
    isRTL: false
  };
  $.datepicker.setDefaults($.datepicker.regional['zh-CN']);
  $("#defult").datetimepicker();
  $('#date').prop("readonly", true).datetimepicker({
    timeText: '时间',
    hourText: '小时',
    minuteText: '分钟',
    secondText: '秒',
    currentText: '现在',
    closeText: '完成',
    showSecond: true, //显示秒
    timeFormat: 'HH:mm:ss' //格式化时间
  });
  $("#date_yy-mm-dd").prop("readonly", true).datepicker({
    changeMonth: true,
    dateFormat: "yy-mm-dd",
    onClose: function (selectedDate) {}
  });
  $("#date_start").prop("readonly", true).datepicker({
    changeMonth: true,
    dateFormat: "yy-mm-dd",
    onClose: function (selectedDate) {
      $("#date_end").datepicker("option", "minDate", selectedDate);
    }
  });
  $("#date_end").prop("readonly", true).datepicker({
    changeMonth: true,
    dateFormat: "yy-mm-dd",
    onClose: function (selectedDate) {
      $("#date_start").datepicker("option", "maxDate", selectedDate);
      $("#date_end").val($(this).val());
    }
  });
  $('#date_hhmmss').prop("readonly", true).timepicker({
    timeText: '时间',
    hourText: '小时',
    minuteText: '分钟',
    secondText: '秒',
    currentText: '现在',
    closeText: '完成',
    showSecond: true, //显示秒
    timeFormat: 'HH:mm:ss' //格式化时间
  });
  $.timepicker.dateRange(
    $("#date_start_1"),
    $("#date_end_1"), {
      minInterval: (1000 * 60 * 60 * 24 * 1), // 区间时间间隔时间
      maxInterval: (1000 * 60 * 60 * 24 * 1), // 1 days 区间时间间隔时间
      start: {}, // start picker options
      end: {} // end picker options});
    }
  );
}

var currentPage;
var currentPage2;
var totalPage;
var totalPage2;
var totalData;
var totalData2;
//出场编号
var factory_num = '';
//经销商编号
var dealer_num = '';
//经销商名称
var dealer_name = '';
//条码号
var bar_code = '';

function pageSplit() {
  var tempStr = "当前第<span style='color: red'>" + currentPage + "</span>页&nbsp;/&nbsp;共<span style='color: red'>" + totalPage + "</span>页&nbsp;/&nbsp;共<span style='color: red'>" + totalData + "</span>条";
  document.getElementById("barcon1").innerHTML = tempStr;
}

function hideOrShow() {
  if (currentPage == 1 || currentPage == 0) {
    $("#firstPage").attr("disabled", true);
    $("#prePage").attr("disabled", true);
  } else {
    $("#firstPage").removeAttr("disabled");
    $("#prePage").removeAttr("disabled");
  }
  if (currentPage == totalPage) {
    $("#lastPage").attr("disabled", true);
    $("#nextPage").attr("disabled", true);
  } else {
    $("#lastPage").removeAttr("disabled");
    $("#nextPage").removeAttr("disabled");
  }
}

// function pageSplit_d() {
//   var tempStr = "当前第<span style='color: red'>" + page_dev + "</span>页&nbsp;/&nbsp;共<span style='color: red'>" + totalPage_dev + "</span>页&nbsp;/&nbsp;共<span style='color: red'>" + totalData_dev + "</span>条";
//   document.getElementById("barcon1_d").innerHTML = tempStr;
// }

// function hideOrShow_d() {
//   if (page_dev == 1) {
//     $("#firstPage_d").attr("disabled", true);
//     $("#prePage_d").attr("disabled", true);
//   } else {
//     $("#firstPage_d").removeAttr("disbled");
//     $("#prePage_d").removeAttr("disabled");
//   }
//   if (page_dev == totalPage_dev) {
//     $("#lastPage_d").attr("disabled", true);
//     $("#nextPage_d").attr("disabled", true);
//   } else {
//     $("#lastPage_d").removeAttr("disbled");
//     $("#nextPage_d").removeAttr("disabled");
//   }
// }

function pageSplit_s() {
  var tempStr = "当前第<span style='color: red'>" + page_work + "</span>页&nbsp;/&nbsp;共<span style='color: red'>" + totalPage_work + "</span>页&nbsp;/&nbsp;共<span style='color: red'>" + totalData_work + "</span>条";
  document.getElementById("barcon1_s").innerHTML = tempStr;
}

function hideOrShow_s() {
  if (page_work == 1 || page_work == 0) {
    $("#firstPage_s").attr("disabled", true);
    $("#prePage_s").attr("disabled", true);
  } else {
    $("#firstPage_s").removeAttr("disabled");
    $("#prePage_s").removeAttr("disabled");
  }
  if (page_work == totalPage_work) {
    $("#lastPage_s").attr("disabled", true);
    $("#nextPage_s").attr("disabled", true);
  } else {
    $("#lastPage_s").removeAttr("disabled");
    $("#nextPage_s").removeAttr("disabled");
  }
}

function pageSplit_d() {
  var tempStr = "当前第<span style='color: red'>" + currentPage2 + "</span>页&nbsp;/&nbsp;共<span style='color: red'>" + totalPage2 + "</span>页&nbsp;/&nbsp;共<span style='color: red'>" + totalData2 + "</span>条";
  document.getElementById("barcon1_d").innerHTML = tempStr;
}

function hideOrShow_d() {
  if (currentPage2 == 1 || currentPage2 == 0) {
    $("#firstPage_d").attr("disabled", true);
    $("#prePage_d").attr("disabled", true);
  } else {
    $("#firstPage_d").removeAttr("disabled");
    $("#prePage_d").removeAttr("disabled");
  }
  if (currentPage2 == totalPage2) {
    $("#lastPage_d").attr("disabled", true);
    $("#nextPage_d").attr("disabled", true);
  } else {
    $("#lastPage_d").removeAttr("disabled");
    $("#nextPage_d").removeAttr("disabled");
  }
}

function ajax_rptM() {
  var option_product = $("#product_rnm option:selected").val();
  if (option_product == "") {
    option_product = null;
  }
  var option_process = $("#process_rnm option:selected").val();
  if (option_process == "") {
    option_process = null;
  }
  var begin_time = $("#date_start_rnm").val();
  if (begin_time == "") {
    begin_time = null;
  }
  var end_time = $("#date_end_rnm").val();
  if (end_time == "") {
    end_time = null;
  }
  var rep_info_type = $("#rep_guy_rnm option:selected").val();
  if (rep_info_type == "") {
    rep_info_type = null;
  }
  var rep_info = $("#rep_info_rnm").val();
  if (rep_info == "") {
    rep_info = null;
  }
  var rep_info_name;
  var rep_info_mobile;
  var rep_info_outNum;
  var rep_info_disNum;

  if (rep_info_name == "") {
    rep_info_name = null;
  }
  if (rep_info_mobile == "") {
    rep_info_mobile = null;
  }
  if (rep_info_outNum == "") {
    rep_info_outNum = null;
  }
  if (rep_info_disNum == "") {
    rep_info_disNum = null;
  }
  if (rep_info_type == "姓名") {
    rep_info_name = rep_info;
  }
  if (rep_info_type == "电话") {
    rep_info_mobile = rep_info;
  }
  if (rep_info_type == "出厂编号") {
    rep_info_outNum = rep_info;
  }
  if (rep_info_type == "派工单号") {
    rep_info_disNum = rep_info;
  }
  //判断经销商
  var url;
  if(appRoleList.indexOf($(window.parent.document).find("input[name='roleId']").val()) != -1){
    url = "/changfa_system/reportRepair/queryReportInfoForDealer.do";
  }else{
    url = "/changfa_system/reportRepair/queryReportInfo.do";
  }

  $.ajax({
    type: "post",
    async: false,
    url: ip_path + url,
    data: {
      startTime: begin_time,
      endTime: end_time,
      repairStartTime: $("#repair_start_rnm").val(),
      repairEndTime: $("#repair_end_rnm").val(),
      type: option_process,
      name: rep_info_name,
      mobile: rep_info_mobile,
      factoryNum: rep_info_outNum,
      disNum: rep_info_disNum,
      lineNum: option_product,
      examineType: $("#visitStatus_rnm option:selected").val(),
      chooseItem: $("#rpt_item_rnm option:selected").val(),
      itemCont: $("#rpt_info_rnm").val(),
      pageNum: currentPage,
      pageSize: 14,
      //判断经销商
      userId:$(window.parent.document).find("input[name='userId']").val(),
      dealerType:$("#dealerType").val(),
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2" height="50px" colspan="13">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];

        if (data['body']['result']['ruleSwitch'] == 1) {
          $("#autoDispatchingStatus").attr("src", "../img/startAutoDispatching.png");
          $("#autoDisTime").text(data['body']['result']['dispatchRuleTime']);
        } else {
          $("#autoDispatchingStatus").attr("src", "../img/closeAutoDispatching.png");
        }

        var status_charset;
        var visitStatus;
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var reportNumWarning;
          if (data['body']['result']['data'][i]['reportNumber'] == 1) {
            reportNumWarning = ""
          } else {
            reportNumWarning = "../img/moreThanOne.png"
          }

          var stat = data['body']['result']['data'][i]['status'];
          var examineType = data['body']['result']['data'][i]['examineType'];
          var closeStatus = data['body']['result']['data'][i]['closeStatus'];
          if (closeStatus != null) {
            status_charset = "派工关闭";
          } else {
            switch (stat) {
              case 0:
                status_charset = "已关闭";
                break;
              case -1:
                status_charset = "报修驳回";
                break;
              case 1:
                status_charset = "待派工";
                break;
              case 2:
                status_charset = "待接单";
                break;
              case 3:
                status_charset = "维修中";
                break;
              case 4:
                if (data['body']['result']['data'][i]['disStatus'] == 14) {
                  status_charset = "待终审";
                } else if (data['body']['result']['data'][i]['disStatus'] == 16) {
                  status_charset = "终审驳回";
                } else if (data['body']['result']['data'][i]['disStatus'] == 31) {
                  status_charset = "待初审";
                } else if (data['body']['result']['data'][i]['disStatus'] == 32) {
                  status_charset = "初审驳回";
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
                status_charset = "已完成";
                break;
              case 14:
                status_charset = "待审核";
                break;
              case 16:
                status_charset = "维修驳回";
                break;
              case 15:
                status_charset = "已完成";
                break;
              case 6:
                status_charset = "已完成";
                break;
            }
          }

          switch (examineType) {
            case 0:
              visitStatus = "未回访";
              break;
            case 1:
              visitStatus = "已完成";
              break;
            case 2:
              visitStatus = "未完成";
              break;
            case 3:
              visitStatus = "违规";
              break;
            case 4:
              visitStatus = "默认完工";
              break;
          }
          $("#adminTbody").append(
            "<tr align='center'id =" + data['body']['result']['data'][i]['reportId'] + ">" +
            "<td class='td2' height='33'>" + data['body']['result']['data'][i]['name'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['mobile'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['lineName'] + "</td>" +
            "<td class='td2 txt_left pd_l5'>" + data['body']['result']['data'][i]['modelName'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['factoryNum'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['reportTime'] + "</td>" +
            "<td class='td2 txt_left pd_l5' style=\"width: auto;word-warp:break-word;word-break:break-all;\">" + data['body']['result']['data'][i]['description'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['disName'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['repairName'] + "</td>" +
            "<td class='td2' >" + status_charset + "</td>" +
            "<td class='td2' >" + visitStatus + "</td>" +
            "<td class='td2' ><img src='" + reportNumWarning + "'></td>" +
            "<td class='td2' ><a href='###' class='color_cf' onclick='showRepairNeedDetails(this)'>查看</a></td>" +
            "</tr>"
          );
        }
        //显示当前页数总共页数 多少条
        pageSplit();
        //根据当前数据页数控制 页数按钮的是否能用
        hideOrShow();
      }
    }
  });
}

function ajax_salerM() {
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/user/selectSalesmanList.do",
    data: {
      pageNum: currentPage,
      pageSize: 14,
      province: "",
      chooseItem: $("#saler_type option:selected").val(),
      itemCont: $("#saler_info").val(),
      status: $("#status option:selected").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2" height="50px" colspan="7">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        var on_off_path;
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          if (data['body']['result']['data'][i]['status'] == 0) {
            on_off_path = "http://app.changfanz.net:3588/changfa_file/off.png";
          } else {
            on_off_path = "http://app.changfanz.net:3588/changfa_file/on.png";
          }
          $("#adminTbody").append(
            "<tr id =" + data['body']['result']['data'][i]['userId'] + ">" +
            '<td class="td2" height="33">' + data['body']['result']['data'][i]['userName'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['workNum'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['mobile'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['roleName'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['taskPlace'] + '</td>' +
            '<td class="td2" ><img src="' + on_off_path + '" class="mg-t5" onclick="toogle_salerStatus(this)"></td>' +
            '<td class="td2" ><a href="###" class="color_cf" onclick="showSalerDetails(this)">查看</a></td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_dealerM() {
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/user/selectServiceUserInfo.do",
    data: {
      roleId: 6,
      pageNum: currentPage,
      pageSize: 14,
      chooseItem: $("#dealer_item option:selected").val(),
      itemCont: $("#dealer_info").val(),
      status: $("#status option:selected").val(),
      status: $("#status option:selected").val(),
      province :$('#rep_info_shenfen').val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2" height="50px" colspan="7">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        var on_off_path;
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          if (data['body']['result']['data'][i]['status'] == 0) {
            on_off_path = "http://app.changfanz.net:3588/changfa_file/off.png";
          } else {
            on_off_path = "http://app.changfanz.net:3588/changfa_file/on.png";
          }
          $("#adminTbody").append(
            "<tr id =" + data['body']['result']['data'][i]['userId'] + ">" +
            '<td class="td2" >' + data['body']['result']['data'][i]['workNum'] + '</td>' +
            '<td class="td2" height="33">' + data['body']['result']['data'][i]['company'] + '</td>' +
            //'<td class="td2" >' + data['body']['result']['data'][i]['province'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['mobile'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['userName'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['taskPlace'] + '</td>' +
            '<td class="td2" ><img src="' + on_off_path + '" class="mg-t5" onclick="toogle_dealerStatus(this)"></td>' +
            //'<td class="td2" ><a href="###" class="color_cf" onclick="showDealerDetails(this)">查看     </a><a href="###" class="color_cf" onclick="changeDealerName(this)">     更名</a></td>' +
            '<td class="td2" ><a href="###" class="color_cf" onclick="showDealerDetails(this)">查看</a></td>' +

            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_cf_serverM() {
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/user/selectUserInfoList.do",
    data: {
      pageNum: currentPage,
      pageSize: 14,
      province: $("#taskAddress option:selected").text(),
      city: "",
      lineNum: $("#taskLine option:selected").val(),
      chooseItem: $("#cfServer_item option:selected").val(),
      itemCont: $("#cfServer_info").val(),
      status: $("#status option:selected").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2" height="50px" colspan="7">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        var on_off_path;
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          if (data['body']['result']['data'][i]['status'] == 0) {
            on_off_path = "http://app.changfanz.net:3588/changfa_file/off.png";
          } else {
            on_off_path = "http://app.changfanz.net:3588/changfa_file/on.png";
          }
          $("#adminTbody").append(
            "<tr id =" + data['body']['result']['data'][i]['userId'] + ">" +
            '<td class="td2" height="33">' + data['body']['result']['data'][i]['userName'] + '</td>' +
            '<td class="td2">' + data['body']['result']['data'][i]['workNum'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['mobile'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['taskPlace'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['lineNames'] + '</td>' +
            '<td class="td2" ><img src="' + on_off_path + '" class="mg-t5" onclick="toogle_cfServerStatus(this)"></td>' +
            '<td class="td2" ><a href="###" class="color_cf" onclick="showThreeServerDetails(this)">查看</a></td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_social_serverM() {
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/user/selectServiceUserInfo.do",
    data: {
      pageNum: currentPage,
      pageSize: 14,
      roleId: 9,
      chooseItem: $("#socialServer_item option:selected").val(),
      itemCont: $("#socialServer_info").val(),
      status: $("#status option:selected").val(),
      //province :$('#rep_info_shenfen').val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2" height="50px" colspan="7">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        var on_off_path;
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          if (data['body']['result']['data'][i]['status'] == 0) {
            on_off_path = "http://app.changfanz.net:3588/changfa_file/off.png";
          } else {
            on_off_path = "http://app.changfanz.net:3588/changfa_file/on.png";
          }
          $("#adminTbody").append(
            "<tr id =" + data['body']['result']['data'][i]['userId'] + ">" +
            '<td class="td2" >' + data['body']['result']['data'][i]['workNum'] + '</td>' +
            '<td class="td2" height="33">' + data['body']['result']['data'][i]['company'] + '</td>' +
            //'<td class="td2" >' + data['body']['result']['data'][i]['province'] + '</td>' +
            //'<td class="td2" >' + data['body']['result']['data'][i]['workNum'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['mobile'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['userName'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['taskPlace'] + '</td>' +
            '<td class="td2" ><img src="' + on_off_path + '" class="mg-t5" onclick="toogle_socialServerStatus(this)"></td>' +
            '<td class="td2" ><a href="###" class="color_cf" onclick="showSocialServerDetails(this)">查看</a></td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_userM() {
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/account/getSubscriberList.do",
    data: {
      roleId: 8,
      pageNum: currentPage,
      pageSize: 14,
      chooseItem: $("#user_item option:selected").val(),
      itemCont: $("#user_info").val(),
      type: $("#type option:selected").val(),
      owner: $("#owner option:selected").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2" height="50px" colspan="6">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var type;
          var owner;
          if (data['body']['result']['data'][i]['owner'] == 0) {
            owner = "非机主";
          } else {
            owner = "机主";
          }

          if (data['body']['result']['data'][i]['type'] == 2) {
            type = "未开通";
          } else if (data['body']['result']['data'][i]['type'] == 1) {
            type = "已开通";
          }
          $("#adminTbody").append(
            "<tr id =" + data['body']['result']['data'][i]['userId'] + ">" +
            '<td class="td2" height="33">' + data['body']['result']['data'][i]['userName'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['mobile'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['address'] + '</td>' +
            '<td class="td2" >' + owner + '</td>' +
            '<td class="td2" >' + type + '</td>' +
            '<td class="td2" ><a href="###" class="color_cf" onclick="showUserDetails(this)">查看</a></td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_area() {
  var pro;
  var city;
  if ($("#province option:selected").text() == "全部") {
    pro = "";
  } else {
    pro = $("#province option:selected").text();
  }
  if ($("#city option:selected").text() == "全部") {
    city = "";
  } else {
    city = $("#city option:selected").text();
  }
  var user_id;
  if ($(window.parent.parent.document).find("input[name='creatorId']").val() == "" || $(window.parent.parent.document).find("input[name='creatorId']").val() == null || $(window.parent.parent.document).find("input[name='creatorId']").val() == undefined) {
    user_id = creatorId_400;
  } else {
    user_id = $(window.parent.parent.document).find("input[name='creatorId']").val();
  }

  var rpt_id;
  if (window.paramFromParent == "" || window.paramFromParent == null || window.paramFromParent == undefined) {
    rpt_id = $(window.parent.parent.document).find("input[name='reportId']").val();
  } else {
    rpt_id = window.paramFromParent;
  }

  $("#adminTbody").empty();
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/user/getUsersByPlace.do",
    data: {
      province: pro,
      city: city,
      userId: user_id,
      reportId: rpt_id,
      chooseItem: $("#query option:selected").val(),
      itemCont: $("#cont").val(),
      roleId: $("#role option:selected").val(),
      pageNum: currentPage,
      pageSize: 8
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        alert(data['head']['message']);
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var company;
          if (data['body']['result']['data'][i]['company'] == null) {
            company = "常州常发农业机械营销有限公司";
          } else {
            company = data['body']['result']['data'][i]['company'];
          }
          $("#adminTbody").append(
            '<tr id="" onclick="choosed(this)">' +
            '<td class="choose_td_bac txt_center DivHeight60"> ' + data['body']['result']['data'][i]['roleName'] + '</td>' +
            '<td class="choose_td txt_center">' + company + '</td>' +
            '<td class="choose_td txt_center"> ' + data['body']['result']['data'][i]['name'] + '</td>' +
            '<td class="choose_td txt_center"> ' + data['body']['result']['data'][i]['mobile'] + '</td>' +
            '<td class="choose_td txt_center" style="width: auto;word-warp:break-word;word-break:break-all"> ' + data['body']['result']['data'][i]['remark'] + '</td>' +
            '<td class="choose_td txt_center"><input type="radio" class="choose_select" value="' + data['body']['result']['data'][i]['userId'] + '" name="choosed"></td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
        if (data['body']['result']['recommend'] == 0) {
          if (currentPage == 1) {
            document.getElementById("advise").style.display = "block";
          } else {
            document.getElementById("advise").style.display = "none";
          }
        } else {
          document.getElementById("advise").style.display = "none";
        }
      }
    }
  });
}

function ajax_loginLog() {
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/account/selectLoginRecode.do",
    data: {
      roleId: $(window.parent.document).find("input[name='roleId']").val(),
      account: $(window.parent.document).find("input[id='username']").val(),
      pageNum: currentPage,
      pageSize: 14
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        alert(data['head']['message']);
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        var status;
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          if (data['body']['result']['data'][i]['type'] == 0) {
            status = "注销";
          } else {
            status = "登录";
          }
          $("#adminTbody").append(
            '<tr id="">' +
            '<td class="body_td txt_center" height="33px"> ' + data['body']['result']['data'][i]['recordTime'] + '</td>' +
            // '<td class="body_td txt_center"><a href="###"> '+data['body']['result']['data'][i]['ipAddress']+'</a></td>' +
            '<td class="body_td txt_center"> ' + data['body']['result']['data'][i]['account'] + '</td>' +
            '<td class="body_td txt_center"> ' + status + '</td>' +
            // '<td class="body_td txt_center"> '+data['body']['result']['data'][i]['address']+'</td>' +
            '<td class="body_td txt_center"> ' + data['body']['result']['data'][i]['browserVersion'] + '</td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_getCity() {
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/place/getCity.do",
    data: {
      parentId: $("#province option:selected").val(),
    },
    dataType: "json",
    success: function (data) {
      for (var i = 0; i < data['body']['resultList']['length']; i++) {
        $("#city").append("<option value='" + data['body']['resultList'][i]['id'] + "'>" + data['body']['resultList'][i]['name'] + "</option>");
      }
      $("#city").unbind();
    }
  });
}




var selectedbx ;
  function ajax_getLineNum1() {
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/machineModel/getMachineModels.do",
      data:{machineType:4},
      dataType: "json",
      success: function (data) {
        for (var i = 0; i < data['body']['resultList']['length']; i++) {
          selectedbx = data['body']['resultList'][i]['number'];
          //console.log(selectedbx)
          $("#lineNum1").append("<option value='" + data['body']['resultList'][i]['number'] + "'>" + data['body']['resultList'][i]['name'] + "</option>");
        }
        ajax_getleixing();
        ajax_getpinpai();
        $("#lineNum1").unbind();
      }
    });
  }
  function ajax_getSeriesNum1() {
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/product/getProducts.do",
      data: {
        machineModelNum: $("#lineNum1 option:selected").val(),
      },
      dataType: "json",
      success: function (data) {
        for (var i = 0; i < data['body']['resultList']['length']; i++) {
          $("#seriesNum1").append("<option value='" + data['body']['resultList'][i]['number'] + "'>" + data['body']['resultList'][i]['name'] + "</option>");
        }
        $("#seriesNum1").unbind();
      }
    });
  } 
  function ajax_getModelNum1() {
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/model/getModels.do",
      data: {
        productNum: $("#seriesNum1 option:selected").val()
      },
      dataType: "json",
      success: function (data) {
        for (var i = 0; i < data['body']['resultList']['length']; i++) {
          $("#modelNum1").append("<option value='" + data['body']['resultList'][i]['number'] + "'>" + data['body']['resultList'][i]['name'] + "</option>");
        }
        $("#modelNum1").unbind();
      }
    });
  }

function ajax_getLineNum() {
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/machineModel/getMachineModels.do",
    dataType: "json",
    success: function (data) {
      for (var i = 0; i < data['body']['resultList']['length']; i++) {
        $("#lineNum").append("<option value='" + data['body']['resultList'][i]['number'] + "'>" + data['body']['resultList'][i]['name'] + "</option>");
      }
      $("#lineNum").unbind();
    }
  });
}

function ajax_getSeriesNum() {
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/product/getProducts.do",
    data: {
      machineModelNum: $("#lineNum option:selected").val(),
    },
    dataType: "json",
    success: function (data) {
      for (var i = 0; i < data['body']['resultList']['length']; i++) {
        $("#seriesNum").append("<option value='" + data['body']['resultList'][i]['number'] + "'>" + data['body']['resultList'][i]['name'] + "</option>");
      }
      $("#seriesNum").unbind();
    }
  });
}

function ajax_getModelNum() {
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/model/getModels.do",
    data: {
      productNum: $("#seriesNum option:selected").val()
    },
    dataType: "json",
    success: function (data) {
      for (var i = 0; i < data['body']['resultList']['length']; i++) {
        $("#modelNum").append("<option value='" + data['body']['resultList'][i]['number'] + "'>" + data['body']['resultList'][i]['name'] + "</option>");
      }
      $("#modelNum").unbind();
    }
  });
}

function ajax_getLineNum_update() {
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/machineModel/getMachineModels.do",
    dataType: "json",
    success: function (data) {
      $("#updateLine").empty();
      for (var i = 0; i < data['body']['resultList']['length']; i++) {
        $("#updateLine").append("<option value='" + data['body']['resultList'][i]['number'] + "'>" + data['body']['resultList'][i]['name'] + "</option>");
      }
      $("#updateLine").unbind();
    }
  });
}

function ajax_getSeriesNum_update() {
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/product/getProducts.do",
    data: {
      machineModelNum: $("#updateLine option:selected").val(),
    },
    dataType: "json",
    success: function (data) {
      $("#updateSeries").empty();
      for (var i = 0; i < data['body']['resultList']['length']; i++) {
        $("#updateSeries").append("<option value='" + data['body']['resultList'][i]['number'] + "'>" + data['body']['resultList'][i]['name'] + "</option>");
      }
      $("#updateSeries").unbind();
    }
  });
}

function ajax_getModelNum_update() {
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/model/getModels.do",
    data: {
      productNum: $("#updateSeries option:selected").val()
    },
    dataType: "json",
    success: function (data) {
      $("#updateModel").empty();
      for (var i = 0; i < data['body']['resultList']['length']; i++) {
        $("#updateModel").append("<option value='" + data['body']['resultList'][i]['number'] + "'>" + data['body']['resultList'][i]['name'] + "</option>");
      }
      $("#updateModel").unbind();
    }
  });
}
  //单缸机新增
  function ajax_getyongtu() {
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/matchMachine/getUseType.do",
      dataType: "json",
      data:{
      },
      success: function (data) {
        //console.log(data)
        for (var i = 0; i < data['body']['resultList']['length']; i++) {
          $("#yongtu").append("<option value='" + data['body']['resultList'][i]['id'] + "'>" + data['body']['resultList'][i]['name'] + "</option>");
        }
      }
    });
  }
  var haveNext1;
  

  function ajax_getleixing() {
    let setid = $("#lineNum1 option:selected").val();
    let type = 1;
    if(setid == 605) {
      type = 2;
    }
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/matchMachine/getMatchMachine.do",
      data: {
        type:type,
        useTypeId: $("#yongtu option:selected").val(),

      },
      dataType: "json",
      success: function (data) {
        //console.log(data)
        for (var i = 0; i < data['body']['resultList']['length']; i++) {
          //for (var j=0;j<data['body']['resultList'][i]['length'];j++){
          //  haveNext1 = data['body']['resultList'][i][j]['haveNext'];
          //}
          if(data['body']['resultList']!= ''){
            $("#leixing").append("<option value='" + data['body']['resultList'][i]['id'] + "'>" + data['body']['resultList'][i]['name'] + "</option>");
          }else{
            $("#leixing").append("<option value='-1'>" + data['body']['resultList'][i]['name'] + "</option>");           
          }
          //if(data['body']['resultList'][i]['haveNext'] != 0){
          //  $("#leixing").append("<option value='" + data['body']['resultList'][i]['id'] + "'>" + data['body']['resultList'][i]['name'] + "</option>");
          //}else{
          //  $("#leixing").append("<option value='-1'>" + data['body']['resultList'][i]['name'] + "</option>");           
          //}
        }
      }
    });
  }
  function ajax_getconsumption() {
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/matchMachine/getSaleModel.do",
      data: {
        matchMachineId: $("#leixing option:selected").val(),
      },
      dataType: "json",
      success: function (data) {
        //console.log(data)
        for (var i = 0; i < data['body']['resultList']['length']; i++) {
          $("#consumptionType").append("<option value='" + data['body']['resultList'][i]['id'] + "' title='" + data['body']['resultList'][i]['haveNext'] + "'>" + data['body']['resultList'][i]['name'] + "</option>");
        }
      }
    });
  }
  function ajax_getpinpai() {
    let setid = $("#lineNum1 option:selected").val();
    let type = 1;
    if(setid == 605) {
      type = 2;
    }
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/matchMachine/getMatchBrand.do",
      data: {
        type:type,
        matchMachineId:$("#leixing option:selected").val(),
        saleId:$("#consumption option:selected").val(),
      },
      dataType: "json",
      success: function (data) {
        //console.log(data)

          for (var i = 0; i < data['body']['resultList']['length']; i++) {
            $("#pinpai").append("<option value='" + data['body']['resultList'][i]['id'] + "'>" + data['body']['resultList'][i]['name'] + "</option>");
          }
          
        
        
      }
    });
  }




function button_click() {
  document.addEventListener('DOMContentLoaded', function () {

    var duration = 750;

    // 样式string拼凑
    var forStyle = function (position) {
      var cssStr = '';
      for (var key in position) {
        if (position.hasOwnProperty(key)) cssStr += key + ':' + position[key] + ';';
      };
      return cssStr;
    }

    // 获取鼠标点击位置
    var forRect = function (target) {
      var position = {
          top: 0,
          left: 0
        },
        ele = document.documentElement;
      'undefined' != typeof target.getBoundingClientRect && (position = target.getBoundingClientRect());
      return {
        top: position.top + window.pageYOffset - ele.clientTop,
        left: position.left + window.pageXOffset - ele.clientLeft
      }
    }

    var show = function (event) {
      var pDiv = event.target,
        cDiv = document.createElement('div');
      pDiv.appendChild(cDiv);
      var rectObj = forRect(pDiv),
        _height = event.pageY - rectObj.top,
        _left = event.pageX - rectObj.left,
        _scale = 'scale(' + pDiv.clientWidth / 100 * 10 + ')';
      var position = {
        top: _height + 'px',
        left: _left + 'px'
      };
      cDiv.className = cDiv.className + " waves-animation",
        cDiv.setAttribute("style", forStyle(position)),
        position["-webkit-transform"] = _scale,
        position["-moz-transform"] = _scale,
        position["-ms-transform"] = _scale,
        position["-o-transform"] = _scale,
        position.transform = _scale,
        position.opacity = "1",
        position["-webkit-transition-duration"] = duration + "ms",
        position["-moz-transition-duration"] = duration + "ms",
        position["-o-transition-duration"] = duration + "ms",
        position["transition-duration"] = duration + "ms",
        position["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
        position["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
        position["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
        position["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
        cDiv.setAttribute("style", forStyle(position));
      var finishStyle = {
        opacity: 0,
        "-webkit-transition-duration": duration + "ms",
        "-moz-transition-duration": duration + "ms",
        "-o-transition-duration": duration + "ms",
        "transition-duration": duration + "ms",
        "-webkit-transform": _scale,
        "-moz-transform": _scale,
        "-ms-transform": _scale,
        "-o-transform": _scale,
        top: _height + "px",
        left: _left + "px",
      };
      setTimeout(function () {
        cDiv.setAttribute("style", forStyle(finishStyle));
        setTimeout(function () {
          pDiv.removeChild(cDiv);
        }, duration);
      }, 100)
    }
    document.querySelector('.waves').addEventListener('mousedown', function (e) {
      show(e);
    }, !1);
  }, !1);
}

function create_ProvinceAndCity_choose() {
  //选择省
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/place/getProvince.do",
    dataType: "json",
    success: function (data) {
      for (var i = 0; i < data['body']['resultList']['length']; i++) {
        $("#province").append("<option value='" + data['body']['resultList'][i]['id'] + "'>" + data['body']['resultList'][i]['name'] + "</option>");
      }
      $("#province").unbind();
    }
  });
  //选择市
  if ($("#province").val() != "") {
    $("#city").empty();

    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/place/getCity.do",
      data: {
        parentId: $("#province option:selected").val(),
      },
      dataType: "json",
      success: function (data) {

        for (var i = 0; i < data['body']['resultList']['length']; i++) {
          $("#city").append("<option value='" + data['body']['resultList'][i]['id'] + "'>" + data['body']['resultList'][i]['name'] + "</option>");
        }
        $("#city").unbind();
      }
    });

  }
  $("#province").change(function () {
    $("#city").empty();

    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/place/getCity.do",
      data: {
        parentId: $("#province option:selected").val(),
      },
      dataType: "json",
      success: function (data) {

        for (var i = 0; i < data['body']['resultList']['length']; i++) {
          $("#city").append("<option value='" + data['body']['resultList'][i]['id'] + "'>" + data['body']['resultList'][i]['name'] + "</option>");
        }
        $("#city").unbind();
      }
    });

  });
}

//根据手机号查询用户所有农机信息
function ajax_machine() {
  var mobile = $("#createMobile").val();
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/userMachine/queryUserAndMachineInfo.do",
    data: {
      phoneNum: mobile,
      pageNum: currentPage,
      pageSize: 4
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] == 200) {
        $("#name").val(data['body']['result']['userName']);
        $("#machineInfo").empty();
        if (data['body']['result']['machineInfo'] != undefined) {
          for (var i = 0; i < data['body']['result']['machineInfo'].length; i++) {
            var path = "";
            if (data['body']['result']['machineInfo'][i]['lineNum'] == 611 || data['body']['result']['machineInfo'][i]['lineNum'] == 61101 || data['body']['result']['machineInfo'][i]['lineNum'] == 61102) {
              path = "img/chayangji.png";
            } else if (data['body']['result']['machineInfo'][i]['lineNum'] == 601) {
              path = "img/tuolaji.png";
            } else if (data['body']['result']['machineInfo'][i]['lineNum'] == 612 || data['body']['result']['machineInfo'][i]['lineNum'] == 615 || data['body']['result']['machineInfo'][i]['lineNum'] == 622 || data['body']['result']['machineInfo'][i]['lineNum'] == 628) {
              path = "img/shougeji.png";
            } else {
              path = "";
            }
            var address;
            if (data['body']['result']['machineInfo'][i]['address'] == "" || data['body']['result']['machineInfo'][i]['address'] == null || data['body']['result']['machineInfo'][i]['address'] == undefined) {
              address = "暂无";
            } else {
              address = data['body']['result']['machineInfo'][i]['address'];
            }
            $("#machineInfo").append(
              '<tr>' +
              '<td class="body_td" height="46px">' + (i + 1) + '</td>' +
              '<td class="body_td"><img src="' + path + '"></td>' +
              '<td class="body_td">' + data['body']['result']['machineInfo'][i]['lineName'] + '</td>' +
              '<td class="body_td">' + data['body']['result']['machineInfo'][i]['seriesName'] + '</td>' +
              '<td class="body_td">' + data['body']['result']['machineInfo'][i]['modelName'] + '</td>' +
              '<td class="body_td">' + data['body']['result']['machineInfo'][i]['buyTime'] + '</td>' +
              '<td class="body_td">' + data['body']['result']['machineInfo'][i]['factoryNum'] + '</td>' +
              '<td class="body_td">' + address + '</td>' +
              '<td class="body_td txt_center"><input type="radio" class="choose_select" value="' + data['body']['result']['machineInfo'][i]['factoryNum'] + '" name="choosed"></td>' +
              '<td class="body_td" style="display: none">' + data['body']['result']['machineInfo'][i]['modelNum'] + '</td>' +
              '</tr>'
            );
          }
        } else {
          $("#machineInfo").empty();
          $("#machineInfo").append(
            '<tr>' +
            '<td class="body_td" height="46px" colspan="9">暂无农机信息</td>' +
            '</tr>'
          );
        }

        if (data['body']['result']['data']['pages'] != 0) {
          currentPage = data['body']['result']['data']['pageNum'];
          totalPage = data['body']['result']['data']['pages'];
          totalData = data['body']['result']['data']['total'];
          pageSplit();
          hideOrShow();
        }
      } else {
        $("#machineInfo").empty();
        $("#machineInfo").append(
          '<tr>' +
          '<td class="body_td" height="46px" colspan="9">请输入用户名</td>' +
          '</tr>'
        );
        $("#name").val("");
        return;
      }
    }
  });
}

//根据手机号查询用户信息
function ajax_user() {
  var mobile = $("#createMobile").val();
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/userMachine/queryUserAndMachineInfo.do",
    data: {
      phoneNum: mobile,
      pageNum: 1,
      pageSize: 1
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] == 200) {
        $("#name").val(data['body']['result']['userName']);
      }
    }
  });
}

//根据手机号查询来电信息
function ajax_user_call() {
  var mobile = $("#callMobile").val();
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/userMachine/queryUserAndMachineInfo.do",
    data: {
      phoneNum: mobile,
      pageNum: 1,
      pageSize: 1
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] == 200) {
        $("#callName").val(data['body']['result']['userName']);
      }
    }
  });
}

// function create_ProvinceAndCity_choose() {
//     //选择省
//     $.ajax({
//         type : "post",
//         async : false,
//         url : ip_path+"/changfa_system/place/getProvince.do",
//         dataType : "json",
//         success : function (data) {
//             $("#province").append("<option value='"+ 0 +"'>全部</option>");
//             for(var i=0;i<data['body']['resultList']['length'];i++){
//                 $("#province").append("<option value='"+ data['body']['resultList'][i]['id'] +"'>"+data['body']['resultList'][i]['name']+"</option>");
//             }
//             $("#province").unbind();
//         }
//     });
//     //选择市
//     if($("#province").val() != ""){
//         $("#city").empty();
//         if($("#province option:selected").val() == 0){
//             $("#city").append("<option value='"+ 0 +"'>全部</option>");
//         }else {
//             $.ajax({
//                 type : "post",
//                 async : false,
//                 url : ip_path+"/changfa_system/place/getCity.do",
//                 data : {
//                     parentId : $("#province option:selected").val(),
//                 },
//                 dataType : "json",
//                 success : function (data) {
//                     $("#city").append("<option value=''>全部</option>");
//                     for(var i=0;i<data['body']['resultList']['length'];i++){
//                         $("#city").append("<option value='"+ data['body']['resultList'][i]['id'] +"'>"+data['body']['resultList'][i]['name']+"</option>");
//                     }
//                     $("#city").unbind();
//                 }
//             });
//         }
//     }
//     $("#province").change(function () {
//         $("#city").empty();
//         if ($("#province option:selected").val() == 0) {
//             $("#city").append("<option value='" + 0 + "'>全部</option>");
//         } else {
//             $.ajax({
//                 type: "post",
//                 async: false,
//                 url: ip_path + "/changfa_system/place/getCity.do",
//                 data: {
//                     parentId: $("#province option:selected").val(),
//                 },
//                 dataType: "json",
//                 success: function (data) {
//                     $("#city").append("<option value=''>全部</option>");
//                     for (var i = 0; i < data['body']['resultList']['length']; i++) {
//                         $("#city").append("<option value='" + data['body']['resultList'][i]['id'] + "'>" + data['body']['resultList'][i]['name'] + "</option>");
//                     }
//                     $("#city").unbind();
//                 }
//             });
//         }
//     });
// }

//base64加密解密
var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
  58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
  7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
  25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
  37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1,
  -1, -1);

function base64encode(str) {
  var out, i, len;
  var c1, c2, c3;
  len = str.length;
  i = 0;
  out = "";

  while (i < len) {
    c1 = str.charCodeAt(i++) & 0xff;

    if (i == len) {
      out += base64EncodeChars.charAt(c1 >> 2);
      out += base64EncodeChars.charAt((c1 & 0x3) << 4);
      out += "==";
      break
    }

    c2 = str.charCodeAt(i++);

    if (i == len) {
      out += base64EncodeChars.charAt(c1 >> 2);
      out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
      out += base64EncodeChars.charAt((c2 & 0xF) << 2);
      out += "=";
      break
    }

    c3 = str.charCodeAt(i++);
    out += base64EncodeChars.charAt(c1 >> 2);
    out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
    out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
    out += base64EncodeChars.charAt(c3 & 0x3F)
  }

  return out
}

function base64decode(str) {
  var c1, c2, c3, c4;
  var i, len, out;
  len = str.length;
  i = 0;
  out = "";

  while (i < len) {
    do {
      c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff]
    } while (i < len && c1 == -1);

    if (c1 == -1)
      break;

    do {
      c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff]
    } while (i < len && c2 == -1);

    if (c2 == -1)
      break;

    out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

    do {
      c3 = str.charCodeAt(i++) & 0xff;

      if (c3 == 61)
        return out;

      c3 = base64DecodeChars[c3]
    } while (i < len && c3 == -1);

    if (c3 == -1)
      break;

    out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

    do {
      c4 = str.charCodeAt(i++) & 0xff;

      if (c4 == 61)
        return out;

      c4 = base64DecodeChars[c4]
    } while (i < len && c4 == -1);

    if (c4 == -1)
      break;

    out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
  }

  return out
}

//获取时间  2018-08-13
var now = new Date(); //当前日期
var nowDayOfWeek; //今天本周的第几天
if (now.getDay() == 0) {
  nowDayOfWeek = 7;
} else {
  nowDayOfWeek = now.getDay();
}
var nowDay = now.getDate(); //当前日
var nowMonth = now.getMonth(); //当前月
var nowYear = now.getYear(); //当前年
nowYear += (nowYear < 2000) ? 1900 : 0; //

var lastMonthDate = new Date(); //上月日期
lastMonthDate.setDate(1);
lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
var lastYear = lastMonthDate.getYear();
var lastMonth = lastMonthDate.getMonth();

//格式化日期：yyyy-MM-dd
function formatDate(date) {
  var myyear = date.getFullYear();
  var mymonth = date.getMonth() + 1;
  var myweekday = date.getDate();

  if (mymonth < 10) {
    mymonth = "0" + mymonth;
  }
  if (myweekday < 10) {
    myweekday = "0" + myweekday;
  }
  return (myyear + "-" + mymonth + "-" + myweekday);
}

//获得某月的天数
function getMonthDays(myMonth) {
  var monthStartDate = new Date(nowYear, myMonth, 1);
  var monthEndDate = new Date(nowYear, myMonth + 1, 1);
  var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
  return days;
}

//获得本季度的开始月份
function getQuarterStartMonth() {
  var quarterStartMonth = 0;
  if (nowMonth < 3) {
    quarterStartMonth = 0;
  }
  if (2 < nowMonth && nowMonth < 6) {
    quarterStartMonth = 3;
  }
  if (5 < nowMonth && nowMonth < 9) {
    quarterStartMonth = 6;
  }
  if (nowMonth > 8) {
    quarterStartMonth = 9;
  }
  return quarterStartMonth;
}

//获得本周的开始日期
function getWeekStartDate() {
  var weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek + 1);
  return formatDate(weekStartDate);
}

//获得本周的结束日期
function getWeekEndDate() {
  var weekEndDate = new Date(nowYear, nowMonth, nowDay + (7 - nowDayOfWeek));
  return formatDate(weekEndDate);
}

//获得本月的开始日期
function getMonthStartDate() {
  var monthStartDate = new Date(nowYear, nowMonth, 1);
  return formatDate(monthStartDate);
}

//获得本月的结束日期
function getMonthEndDate() {
  var monthEndDate = new Date(nowYear, nowMonth, getMonthDays(nowMonth));
  return formatDate(monthEndDate);
}

//获得上月开始时间
function getLastMonthStartDate() {
  var lastMonthStartDate = new Date(nowYear, lastMonth, 1);
  return formatDate(lastMonthStartDate);
}

//获得上月结束时间
function getLastMonthEndDate() {
  var lastMonthEndDate = new Date(nowYear, lastMonth, getMonthDays(lastMonth));
  return formatDate(lastMonthEndDate);
}

//获得本季度的开始日期
function getQuarterStartDate() {
  var quarterStartDate = new Date(nowYear, getQuarterStartMonth(), 1);
  return formatDate(quarterStartDate);
}

//获得本季度的结束日期
function getQuarterEndDate() {
  var quarterEndMonth = getQuarterStartMonth() + 2;
  var quarterStartDate = new Date(nowYear, quarterEndMonth, getMonthDays(quarterEndMonth));
  return formatDate(quarterStartDate);
}

//经销商管理
//仓库管理
function ajax_dealer_storageM() {
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/locationRecord/selectStore.do",
    data: {
      pageNum: currentPage,
      pageSize: 7,
      workNum: $(window.parent.document).find("span[id='factoryNum']").text()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2 txt_center" height="50px" colspan="6">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var type;
          if (data['body']['result']['data'][i]['type'] == 1) {
            type = "一级商";
          } else if (data['body']['result']['data'][i]['type'] == 2) {
            type = "服务站";
          } else if (data['body']['result']['data'][i]['type'] == 3) {
            type = "二级商";
          } else if (data['body']['result']['data'][i]['type'] == 4) {
            type = "仓库";
          } else if (data['body']['result']['data'][i]['type'] == 5) {
            type = "直营店";
          } else if (data['body']['result']['data'][i]['type'] == 0) {
            type = "";
          }

          $("#adminTbody").append(
            "<tr id =" + data['body']['result']['data'][i]['depotId'] + ">" +
            '<td class="td2 txt_center" height="60px">' + type + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['storeRoomName'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['location'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['address'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['createTime'] + '</td>' +
            '<td class="td2 txt_center" ><a href="###" class="color_cf" onclick="setFence(this)">设电子围栏</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="###" class="color_cf" onclick="editStorage(this)">编辑</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="###" style="color:red" onclick="deleteStorage(this)">删除</a></td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}
//员工管理
function ajax_dealer_personM() {
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/account/queryRepairManByAdmin.do",
    data: {
      pageNum: currentPage,
      pageSize: 7,
      userId: $(window.parent.parent.document).find("input[name='dealerId']").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200 || data.body.result.data.length==0) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2 txt_center" height="50px" colspan="8">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var path;
          if (data['body']['result']['data'][i]['headUrl'] != "") {
            path = data['body']['result']['data'][i]['headUrl'];
          } else {
            path = "http://app.changfanz.net:3588/changfa_file/head.png"
          }

          var status;
          if (data['body']['result']['data'][i]['status'] == 1) {
            status = "启用中";
          } else {
            status = "禁用中";
          }
          $("#adminTbody").append(
            "<tr id =" + data['body']['result']['data'][i]['userId'] + ">" +
            '<td class="td2 txt_center" height="60px"><img src="' + path + '" class="pic_circle"></td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['userName'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['roleName'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['mobile'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['taskAddress'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['createTime'] + '</td>' +
            '<td class="td2 txt_center" >' + status + '</td>' +
            '<td class="td2 txt_center" ><a href="###" class="color_cf" onclick="showServerDetails(this)">查看</a></td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}


var status;
//库存管理
function ajax_dealer_storeM() {
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/machineFlow/queryStockByDealerAndStatus.do",
    data: {
      pageNum: currentPage,
      pageSize: 14,
      dealerNum: $(window.parent.parent.document).find("input[name='dealerNum']").val(),
      status: status
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2 txt_center" height="50px" colspan="8">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          $("#adminTbody").append(
            "<tr id =" + data['body']['result']['data'][i]['userId'] + ">" +
            '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['lineName'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['seriesName'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['modelName'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['barCode'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['factoryNum'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['imei'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['factoryDate'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['buyTime'] + '</td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

//三包管理
var type;
//单缸机
function ajax_dealer_serverM1() {
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/reportRepair/getReportRepairMan.do?reportType=1",
    data: {
      pageNum: currentPage,
      pageSize: 7,
      userId: $(window.parent.parent.document).find("input[name='dealerId']").val(),
      type: type,
      reportType:1,
      
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2 txt_center" height="50px" colspan="7">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          $("#adminTbody").append(
            "<tr id =" + data['body']['result']['data'][i]['reportId'] + ">" +
            '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['name'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['mobile'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['machineLine'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['machineName'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['machineModel'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['reportTime'] + '</td>' +
            '<td class="td2 txt_center" ><a href="###" class="color_cf" onclick="showRepairNeedDetails1(this)">查看</a></td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_dealer_serverM() {
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/reportRepair/getReportRepairMan.do",
    data: {
      pageNum: currentPage,
      pageSize: 7,
      userId: $(window.parent.parent.document).find("input[name='dealerId']").val(),
      type: type,
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2 txt_center" height="50px" colspan="7">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          $("#adminTbody").append(
            "<tr id =" + data['body']['result']['data'][i]['reportId'] + ">" +
            '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['name'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['mobile'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['machineLine'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['machineName'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['machineModel'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['reportTime'] + '</td>' +
            '<td class="td2 txt_center" ><a href="###" class="color_cf" onclick="showRepairNeedDetails(this)">查看</a></td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

//退、返、调拨管理
function ajax_dealer_machineM() {
  var machine_status;
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/machineFlow/getStockByDealer.do",
    data: {
      pageNum: currentPage,
      pageSize: 14,
      dealerNum: $(window.parent.parent.document).find("input[name='dealerNum']").val(),
      type: status
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2 txt_center" height="50px" colspan="8">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          if (data['body']['result']['data'][i]['examine'] == "-1") {
            machine_status = "审核不通过";
          } else if (data['body']['result']['data'][i]['examine'] == "0") {
            machine_status = "待审核";
          } else if (data['body']['result']['data'][i]['examine'] == "1") {
            machine_status = "审核通过";
          }
          $("#adminTbody").append(
            "<tr id =" + data['body']['result']['data'][i]['newDealerNum'] + ">" +
            '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['lineName'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['seriesName'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['modelName'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['barCode'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['factoryNum'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['imei'] + '</td>' +
            '<td class="td2 txt_center" >' + machine_status + '</td>' +
            '<td class="td2 txt_center" ><a href="###" class="color_cf" onclick="showMachineDetail(this)">查看</a></td>' +
            '<td class="td2 txt_center" style="display: none;">' + data['body']['result']['data'][i]['machineFlowId'] + '</td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

//社会化服务站管理
//员工管理
function ajax_socialServer_personM() {
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/account/queryRepairManByAdmin.do",
    data: {
      pageNum: currentPage,
      pageSize: 7,
      userId: $(window.parent.parent.document).find("input[name='dealerId']").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200 || data.body.result.data.length==0) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2 txt_center" height="50px" colspan="5">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var path;
          if (data['body']['result']['data'][i]['headUrl'] != "") {
            path = data['body']['result']['data'][i]['headUrl'];
          } else {
            path = "http://app.changfanz.net:3588/changfa_file/head.png"
          }
          $("#adminTbody").append(
            "<tr id =" + data['body']['result']['data'][i]['userId'] + ">" +
            '<td class="td2 txt_center" height="60px"><img src="' + path + '" class="pic_circle"></td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['userName'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['mobile'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['taskAddress'] + '</td>' +
            '<td class="td2 txt_center" ><a href="###" class="color_cf" onclick="showServerDetails(this)">查看</a></td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

//派工管理
var social_type;

function ajax_socialServer_serverM() {
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/reportRepair/getReportRepairMan.do",
    data: {
      pageNum: currentPage,
      pageSize: 7,
      userId: $(window.parent.parent.document).find("input[name='dealerId']").val(),
      type: social_type
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2 txt_center" height="50px" colspan="7">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          $("#adminTbody").append(
            "<tr id =" + data['body']['result']['data'][i]['reportId'] + ">" +
            '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['name'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['mobile'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['machineLine'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['machineName'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['machineModel'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['reportTime'] + '</td>' +
            '<td class="td2 txt_center" ><a href="###" class="color_cf" onclick="showRepairNeedDetails(this)">查看</a></td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}


//三包员——三包管理

function ajax_server_serverM1() {
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/dispatch/adminQueryDispatchOfRepairMan.do",
    data: {
      pageNum: currentPage,
      pageSize: 7,
      userId: $(window.parent.parent.document).find("input[name='serverId']").val(),
      type: type,
      token: $(window.parent.parent.document).find("input[name='token']").val(),
      reportType:2,
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2 txt_center" height="50px" colspan="7">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          $("#adminTbody").append(
            "<tr id =" + data['body']['result']['data'][i]['reportId'] + ">" +
            '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['name'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['mobile'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['machineLine'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['seriesName'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['machineModel'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['reportTime'] + '</td>' +
            '<td class="td2 txt_center" ><a href="###" class="color_cf" onclick="showRptDetails(this)">查看</a></td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}


function ajax_server_serverM() {
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/dispatch/adminQueryDispatchOfRepairMan.do",
    data: {
      pageNum: currentPage,
      pageSize: 7,
      userId: $(window.parent.parent.document).find("input[name='serverId']").val(),
      type: type,
      token: $(window.parent.parent.document).find("input[name='token']").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2 txt_center" height="50px" colspan="7">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          $("#adminTbody").append(
            "<tr id =" + data['body']['result']['data'][i]['reportId'] + ">" +
            '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['name'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['mobile'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['machineLine'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['seriesName'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['machineModel'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['reportTime'] + '</td>' +
            '<td class="td2 txt_center" ><a href="###" class="color_cf" onclick="showRptDetails(this)">查看</a></td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_server_dealerM() {
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/userServicer/getUserService.do",
    data: {
      pageNum: currentPage,
      pageSize: 7,
      userId: $(window.parent.parent.document).find("input[name='serverId']").val(),
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2 txt_center" height="50px" colspan="5">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          $("#adminTbody").append(
            "<tr id =" + data['body']['result']['data'][i]['id'] + ">" +
            '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['dealerNum'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['dealerName'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['dealerUserName'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['dealerMobile'] + '</td>' +
            '<td class="td2 txt_center" ><a href="###" style="color:red" onclick="deleteServerDealer(this)">删除</a></td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_CarCheck() {

  //判断经销商
  var url;
  if(appRoleList.indexOf($(window.parent.document).find("input[name='roleId']").val()) != -1){
    url = "/changfa_system/machineFlow/getFinalApprovalListForDealer.do";
  }else{
    url = "/changfa_system/machineFlow/getFinalApprovalList.do";
  }

  $.ajax({
    type: "post",
    async: false,
    url: ip_path + url,
    data: {
      pageNum: currentPage,
      pageSize: 14,
      factory_num: factory_num,
      dealer_num: dealer_num,
      dealer_name: dealer_name,
      bar_code: bar_code,
      status: $("#status").val(),
      line_num: $("#product").val(),
      start_time: $("#date_start").val(),
      end_time: $("#date_end").val(),
      type: $("#type").val(),
      token: $(window.parent.document).find("input[name='token']").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          "<tr align='center'>" +
          "<td class='td2' colspan='11' height='50px;'>未查到相关信息</td>" +
          "</tr>"
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];

        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var type;
          if (data['body']['result']['data'][i]['type'] == 10) {
            type = "外出参展";
          } else if (data['body']['result']['data'][i]['type'] == 11) {
            type = "锁车";
          } else if (data['body']['result']['data'][i]['type'] == 12) {
            type = "解锁";
          }

          var status;
          if (data['body']['result']['data'][i]['examine'] == 0) {
            status = "待审核";
          } else if (data['body']['result']['data'][i]['examine'] == 1) {
            status = "已完成";
          } else if (data['body']['result']['data'][i]['examine'] == -1) {
            status = "已关闭";
          } else {
            status = "";
          }

          var status_name;
          if (data['body']['result']['data'][i]['approval_status_name'] == null) {
            status_name = "";
          } else {
            status_name = data['body']['result']['data'][i]['approval_status_name'];
          }

          $("#adminTbody").append(
            "<tr align='center'id =" + data['body']['result']['data'][i]['flow_id'] + ">" +
            "<td class='td2' height='33' width='150'>" + type + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['factory_num'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['line_name'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['series_name'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['model_num'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['dealer_name'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['dealer_num'] + "</td>" +
            "<td class='td2' >" + status_name + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['create_time'] + "</td>" +
            "<td class='td2' style='display:none'>" + data['body']['result']['data'][i]['approval_stage'] + "</td>" +
            "<td class='td2' ><a href='###' class='color_cf' onclick='showlookCheckDetails(this)'>查看</a></td>" +
            "</tr>"
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}
//车辆报警信息
function ajax_RskCheck() {
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/machineFlow/getAlertList.do",
    data: {
      pageNum: currentPage,
      pageSize: 14,
      factory_num: factory_num,
      dealer_num: dealer_num,
      dealer_name: dealer_name,
      bar_code: bar_code,
      status: $("#status").val(),
      line_num: $("#product").val(),
      start_time: $("#date_start").val(),
      end_time: $("#date_end").val(),
      token: $(window.parent.document).find("input[name='token']").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          "<tr align='center'>" +
          "<td class='td2' colspan='12' height='50px;'>未查到相关信息</td>" +
          "</tr>"
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];

        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          //     var type;
          //     if(data['body']['result']['data'][i]['type'] == 10){
          //         type = "外出参展";
          //     }else if(data['body']['result']['data'][i]['type'] == 11){
          //         type = "锁车";
          //     }else if(data['body']['result']['data'][i]['type'] == 12){
          //         type = "解锁";
          //     }
          var first_status;
          if (data['body']['result']['data'][i]['first_status'] == 1) {
            first_status = "已销售";
          } else if (data['body']['result']['data'][i]['first_status'] == 2) {
            first_status = "未销售";
          } else if (data['body']['result']['data'][i]['first_status'] == 3) {
            first_status = "外出参展";
          } else {
            first_status = "";
          }

          var final_status;
          if (data['body']['result']['data'][i]['final_status'] == 1) {
            final_status = "已销售";
          } else if (data['body']['result']['data'][i]['final_status'] == 2) {
            final_status = "未销售";
          } else if (data['body']['result']['data'][i]['final_status'] == 3) {
            final_status = "外出参展";
          } else if (data['body']['result']['data'][i]['final_status'] == 4) {
            final_status = "调拨中";
          } else if (data['body']['result']['data'][i]['final_status'] == 5) {
            final_status = "仓库未维护";
          } else {
            final_status = "";
          }

          var alarm;
          if (data['body']['result']['data'][i]['alert_status'] == 0) {
            alarm = "报警中";
          } else if (data['body']['result']['data'][i]['alert_status'] == 1) {
            alarm = "解除报警";
          }

          var local;
          if (data['body']['result']['data'][i]['province'] == null) {
            local = "";
          } else {
            local = data['body']['result']['data'][i]['province'];
          }

          var first_time = data['body']['result']['data'][i]['first_time'] == null ? '' : data['body']['result']['data'][i]['first_time']
          var final_time = data['body']['result']['data'][i]['final_time'] == null ? '' : data['body']['result']['data'][i]['final_time']

          $("#adminTbody").append(
            "<tr align='center'id =" + data['body']['result']['data'][i]['bar_code'] + ">" +
            "<td class='td2' height='33'>" + data['body']['result']['data'][i]['factory_num'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['line_name'] + "</td>" +
            "<td class='td2' width='120'>" + data['body']['result']['data'][i]['model_name'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['dealer_name'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['dealer_num'] + "</td>" +
            "<td class='td2' >" + local + "</td>" +
            "<td class='td2' alt='" + first_time + "'>" + first_status + "</td>" +
            "<td class='td2' alt='" + final_time + "'>" + final_status + "</td>" +
            "<td class='td2' >出围栏</td>" +
            "<td class='td2' >" + alarm + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['date'] + "</td>" +
            "<td class='td2' ><a href='###' class='color_cf' onclick='showrskCheckDetails(this)'>查看</a></td>" +
            "<td class='td2' style='display:none'>" + data['body']['result']['data'][i]['alert_id'] + "</td>" +
            "</tr>"
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_forCheck() {

  //判断经销商
  var url;
  if(appRoleList.indexOf($(window.parent.document).find("input[name='roleId']").val()) != -1){
    url = "/changfa_system/machineFlow/getFinalApprovalListForDealer.do";
  }else{
    url = "/changfa_system/machineFlow/getFinalApprovalList.do";
  }

  $.ajax({
    type: "post",
    async: false,
    url: ip_path + url,
    data: {
      pageNum: currentPage,
      pageSize: 14,
      factory_num: factory_num,
      dealer_num: dealer_num,
      dealer_name: dealer_name,
      bar_code: bar_code,
      status: $("#status").val(),
      line_num: $("#product").val(),
      imei_type: $('#imei_type').val(),
      start_time: $("#date_start").val(),
      end_time: $("#date_end").val(),
      type: $("#type").val(),
      token: $(window.parent.document).find("input[name='token']").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          "<tr align='center'>" +
          "<td class='td2' colspan='11' height='50px;'>未查到相关信息</td>" +
          "</tr>"
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];

        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var type;
          if (data['body']['result']['data'][i]['type'] == 3) {
            type = "调拨";
          } else if (data['body']['result']['data'][i]['type'] == 4) {
            type = "退货";
          } else if (data['body']['result']['data'][i]['type'] == 5) {
            type = "返厂";
          }

          var imei_status;
          if (data['body']['result']['data'][i]['imei'] == null || data['body']['result']['data'][i]['imei'] == '') {
            imei_status = "否";
          } else {
            imei_status = '是';
          }

          var status_name;
          if (data['body']['result']['data'][i]['approval_status_name'] == null) {
            status_name = "";
          } else {
            status_name = data['body']['result']['data'][i]['approval_status_name'];
          }

          $("#adminTbody").append(
            "<tr align='center'id =" + data['body']['result']['data'][i]['flow_id'] + ">" +
            "<td class='td2' >" + type + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['factory_num'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['line_name'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['series_name'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['model_num'] + "</td>" +
            "<td class='td2' height='33' width='200'>" + data['body']['result']['data'][i]['dealer_name'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['dealer_num'] + "</td>" +
            "<td class='td2' >" + status_name + "</td>" +
            "<td class='td2' >" + imei_status + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['create_time'] + "</td>" +
            "<td class='td2' style='display:none;'>" + data['body']['result']['data'][i]['approval_stage'] + "</td>" +
            "<td class='td2' ><a href='###' class='color_cf' onclick='showForCheckDetails(this)'>查看</a></td>" +
            "</tr>"
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_fastBackM() {
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/machineFlow/getMachineFlowByExamine.do",
    data: {
      chooseItem: $("#meb_item option:selected").val(),
      itemCont: $("#meb_info").val(),
      type: $("#type option:selected").val(),
      examine: 0,
      pageNum: currentPage,
      pageSize: 14,
      status: 1
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          "<tr align='center'>" +
          "<td class='td2' colspan='11' height='50px;'>未查到相关信息</td>" +
          "</tr>"
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];

        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var type;
          if (data['body']['result']['data'][i]['type'] == 3) {
            type = "调拨";
          } else if (data['body']['result']['data'][i]['type'] == 4) {
            type = "退货";
          } else if (data['body']['result']['data'][i]['type'] == 5) {
            type = "返厂";
          } else if (data['body']['result']['data'][i]['type'] == 6) {
            type = "出售";
          }

          var status;
          if (data['body']['result']['data'][i]['examine'] == 0) {
            status = "待审核";
          } else if (data['body']['result']['data'][i]['examine'] == 1) {
            status = "已完成";
          } else if (data['body']['result']['data'][i]['examine'] == -1) {
            status = "已关闭";
          } else {
            status = "";
          }
          $("#adminTbody").append(
            "<tr align='center'id =" + data['body']['result']['data'][i]['machineFlowId'] + ">" +
            "<td class='td2' height='33' width='150'>" + data['body']['result']['data'][i]['dealerContactCompany'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['dealerContactNum'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['dealerContactName'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['dealerContactMobile'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['lineName'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['seriesName'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['modelName'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['factoryNum'] + "</td>" +
            "<td class='td2' >" + type + "</td>" +
            "<td class='td2' >" + status + "</td>" +
            "<td class='td2' ><a href='###' class='color_cf' onclick='showForCheckDetails(this)'>查看</a></td>" +
            "</tr>"
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_userArchives() {
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/userMachine/queryUserAndMachineListNew.do",
    data: {
      startTime: $("#date_start_uam").val(),
      endTime: $("#date_end_uam").val(),
      submitStartTime: $("#date_submitstart_uam").val(),
      submitEndTime: $("#date_submitend_uam").val(),
      type: 2,
      lineNum: $("#product_uam option:selected").val(),
      chooseItem: $("#rep_guy_uam option:selected").val(),
      itemCont: $("#rep_info_uam").val(),
      imei_type: $("#imei_type").val(),
      pageNum: currentPage,
      pageSize: 14
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          "<tr align='center'>" +
          "<td class='td2' colspan='13' height='50px'>未查到相关信息</td>" +
          "</tr>"
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];

        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {

          var imei_status;
          if (data['body']['result']['data'][i]['imei'] == null || data['body']['result']['data'][i]['imei'] == '') {
            imei_status = "否";
          } else {
            imei_status = '是';
          }

          $("#adminTbody").append(
            "<tr align='center'id =" + data['body']['result']['data'][i]['userId'] + ">" +
            "<td class='td2' height='33'>" + data['body']['result']['data'][i]['lineName'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['seriesName'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['modelName'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['factoryNum'] + "</td>" +
            "<td class='td2'>" + data['body']['result']['data'][i]['name'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['mobile'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['dealerNum'] + "</td>" +
            "<td class='td2'>" + data['body']['result']['data'][i]['dealerName'] + "</td>" +
            "<td class='td2' >" + '江苏' + "</td>" +
            //"<td class='td2' >" + data['body']['result']['data'][i]['dealerNum'] + "</td>" +
            "<td class='td2' >" + imei_status + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['buyTime'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['submitTime'] + "</td>" +
            "<td class='td2' id='" + data['body']['result']['data'][i]['machineId'] + "'><a href='###' class='color_cf' onclick='showUserArchivesDetails(this)'>查看</a></td>" +
            "</tr>"
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_user_serverM() {
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/reportRepair/getUserReport.do",
    data: {
      pageNum: currentPage,
      pageSize: 7,
      name: $("#name").text(),
      type: type,
      mobile: $("#mobile").text()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2 txt_center" height="50px" colspan="4">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          $("#adminTbody").append(
            "<tr id =" + data['body']['result']['data'][i]['reportId'] + ">" +
            '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['name'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['mobile'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['reportTime'] + '</td>' +
            '<td class="td2 txt_center" ><a href="###" class="color_cf" onclick="showReportDetails(this)">查看</a></td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_machineList() {
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/userMachine/queryUserAndMachineInfo.do",
    data: {
      phoneNum: $("#mobile").text(),
      roleId: 8,
      pageNum: currentPage,
      pageSize: 3
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] == 200) {
        $("#machineTotal").text(data['body']['result']['data']['total']);
        for (var i = 0; i < data['body']['result']['machineInfo'].length; i++) {
          var path = "";
          if (data['body']['result']['machineInfo'][i]['lineNum'] == 611 || data['body']['result']['machineInfo'][i]['lineNum'] == 61101 || data['body']['result']['machineInfo'][i]['lineNum'] == 61102) {
            path = "img/chayangji.png";
          } else if (data['body']['result']['machineInfo'][i]['lineNum'] == 601) {
            path = "img/tuolaji.png";
          } else if (data['body']['result']['machineInfo'][i]['lineNum'] == 612 || data['body']['result']['machineInfo'][i]['lineNum'] == 615 || data['body']['result']['machineInfo'][i]['lineNum'] == 622 || data['body']['result']['machineInfo'][i]['lineNum'] == 628) {
            path = "img/shougeji.png";
          } else {
            path = "";
          }
          $("#machine_pic" + i).attr("src", path);
          $("#modelName" + i).text(data['body']['result']['machineInfo'][i]['modelName']);
          $("#factoryNum" + i).text(data['body']['result']['machineInfo'][i]['factoryNum']);
          $("#barCode" + i).text(data['body']['result']['machineInfo'][i]['barCode']);
          $("#machineId" + i).val(data['body']['result']['machineInfo'][i]['machineId']);
        }

        for (var j = 0; j < 3; j++) {
          if ($("#modelName" + j).text() == "") {
            $("#tag" + j).hide();
          } else {
            $("#tag" + j).show();
          }
        }

        if (!data['body']['result']['data']['hasPreviousPage']) {
          document.getElementById("pre").style.display = "none";
        } else {
          document.getElementById("pre").style.display = "block";
        }
        if (!data['body']['result']['data']['hasNextPage']) {
          document.getElementById("next").style.display = "none";
        } else {
          document.getElementById("next").style.display = "block";
        }
      }
    }
  });
}

//发货管理列表
function ajax_sendM() {

  //判断经销商
  var url;
  if(appRoleList.indexOf($(window.parent.document).find("input[name='roleId']").val()) != -1){
    url = "/changfa_system/machineFlow/selectMachineInfoForDealer.do";
  }else{
    url = "/changfa_system/machineFlow/selectMachineInfo.do";
  }
  
  $.ajax({
    type: "post",
    url: ip_path + url,
    data: {
      pageNum: currentPage,
      pageSize: 14,
      operation: 1,
      lineNum: $("#product option:selected").val(),
      chooseItem: $("#sendM_item option:selected").val(),
      itemCont: $("#sendM_info").val(),
      status: $("#status option:selected").val(),
      imei_type: $("#imei_type").val(),
      startTime: $("#date_start").val(),
      endTime: $("#date_end").val(),
      token:$(window.parent.document).find("input[name='token']").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2 txt_center" height="50px" colspan="7">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var status;
          if (data['body']['result']['data'][i]['status'] == 1) {
            status = "发往中";
          } else if (data['body']['result']['data'][i]['status'] == 2) {
            status = "在库中";
          }

          var imei_status;
          if (data['body']['result']['data'][i]['imei'] == null || data['body']['result']['data'][i]['imei'] == '') {
            imei_status = "否";
          } else {
            imei_status = '是';
          }

          $("#adminTbody").append(
            "<tr id =" + data['body']['result']['data'][i]['user_id'] + ">" +
            '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['company'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['workNum'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['lineName'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['machineName'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['factoryNum'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['barCode'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['productDate'] + '</td>' +
            '<td class="td2 txt_center" >' + imei_status + '</td>' +
            '<td class="td2 txt_center" >' + status + '</td>' +
            "<td class='td2 txt_center' id ='" + data['body']['result']['data'][i]['machineId'] + "' ><a href='###' class='color_cf' onclick='showSendDetails(this)'>查看</a></td>" +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

//库存管理列表
function ajax_storeM() {
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/machineFlow/selectMachineInfo.do",
    data: {
      pageNum: currentPage,
      pageSize: 14,
      operation: 1,
      lineNum: $("#product option:selected").val(),
      chooseItem: $("#storeM_item option:selected").val(),
      itemCont: $("#storeM_info").val(),
      imei_type: $("#imei_type").val(),
      status: 2,
      // judgeMachineFault : $("#fault option:selected").val(),
      startTime: $("#date_start").val(),
      endTime: $("#date_end").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2 txt_center" height="50px" colspan="7">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          // var fault;
          // if(data['body']['result']['data'][i]['judgeMachineFault'] == 0){
          //     fault = "无损坏";
          // }else{
          //     fault = "有损坏";
          // }
          var imei_status;
          if (data['body']['result']['data'][i]['imei'] == null || data['body']['result']['data'][i]['imei'] == '') {
            imei_status = "否";
          } else {
            imei_status = '是';
          }

          $("#adminTbody").append(
            "<tr id =" + data['body']['result']['data'][i]['user_id'] + ">" +
            '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['company'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['workNum'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['lineName'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['machineName'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['factoryNum'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['barCode'] + '</td>' +
            '<td class="td2 txt_center" >' + imei_status + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['productDate'] + '</td>' +
            // '<td class="td2 txt_center" >' + fault + '</td>' +
            '<td class="td2 txt_center" id ="' + data['body']['result']['data'][i]['machineId'] + '" ><a href="###" class="color_cf" onclick="showStoreDetails(this)">查看</a></td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

//销售管理列表
function ajax_saleM() {
  var url;
  if ($(window.parent.document).find("input[name='roleId']").val() == 22 || $(window.parent.document).find("input[name='roleId']").val() == 1) {
    url = ip_path + "/changfa_system/machineFlow/getSaleSecondApprovalList.do";
  } else if ($(window.parent.document).find("input[name='roleId']").val() == 23 || $(window.parent.document).find("input[name='roleId']").val() == 17) {
    url = ip_path + "/changfa_system/machineFlow/getSaleFinalApprovalList.do";
  }else if (appRoleList.indexOf($(window.parent.document).find("input[name='roleId']").val()) != -1) {
    url = ip_path + "/changfa_system/machineFlow/getSaleSecondApprovalListForDealer.do";
  }


  $.ajax({
    type: "post",
    async: false,
    url: url,
    data: {
      pageNum: currentPage,
      pageSize: 14,
      factory_num: factory_num,
      dealer_num: dealer_num,
      dealer_name: dealer_name,
      bar_code: bar_code,
      status: $("#status").val(),
      line_num: $("#product").val(),
      imei_type: $("#imei_type").val(),
      start_time: $("#date_start").val(),
      end_time: $("#date_end").val(),
      token: $(window.parent.document).find("input[name='token']").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['body']['result']['data'] != '') {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];

        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {

          // var status;
          // if(data['body']['result']['data'][i]['approval_status_name'] == 0){
          //     status = "待审核";
          // }else if(data['body']['result']['data'][i]['approval_status_name'] == 1){
          //     status = "已完成";
          // }else if(data['body']['result']['data'][i]['approval_status_name'] == -1){
          //     status = "已关闭";
          // }else{
          //     status = "";
          // }
          var alert_state;
          if (data['body']['result']['data'][i]['alert_state'] == 0) {
            alert_state = "已解除";
          } else if (data['body']['result']['data'][i]['alert_state'] == 1) {
            alert_state = "未解除";
          } else {
            alert_state = "";
          }

          var alert;
          if (data['body']['result']['data'][i]['alert'] == 0) {
            alert = "无报警";
          } else if (data['body']['result']['data'][i]['alert'] == 1) {
            alert = "有报警";
          } else {
            alert = "";
          }

          var status_name;

          if (data['body']['result']['data'][i]['approval_status_name'] == '服务部审核失败') {
            status_name = "已关闭";
          } else if (data['body']['result']['data'][i]['approval_status_name'] == '风控部审批失败') {
            status_name = "已关闭";
          } else if (data['body']['result']['data'][i]['approval_status_name'] == '初审失败') {
            status_name = "已关闭";
          } else if (data['body']['result']['data'][i]['approval_status_name'] == null) {
            status_name = "";
          } else {
            status_name = data['body']['result']['data'][i]['approval_status_name'];
          }
          var imei_status;
          if (data['body']['result']['data'][i]['imei'] == null || data['body']['result']['data'][i]['imei'] == '') {
            imei_status = "否";
          } else {
            imei_status = '是';
          }

          if(status_name != '已关闭' && status_name != '服务部审批通过'){

            $("#adminTbody").append(
                "<tr align='center'id =" + data['body']['result']['data'][i]['flow_id'] + ">" +
                '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['dealer_name'] + '</td>' +
                '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['dealer_num'] + '</td>' +
                '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['line_name'] + '</td>' +
                '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['model_num'] + '</td>' +
                '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['factory_num'] + '</td>' +
                '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['bar_code'] + '</td>' +
                '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['create_time'] + '</td>' +
                '<td class="td2 txt_center" >' + imei_status + '</td>' +
                '<td class="td2 txt_center" >' + status_name + '</td>' +
                '<td class="td2 txt_center" >' + alert_state + '</td>' +
                '<td class="td2 txt_center" >' + alert + '</td>' +
                '<td class="td2 txt_center" style = "display:none;">' + data['body']['result']['data'][i]['approval_stage'] + '</td>' +
                '<td class="td2 txt_center" ><a href="###" class="color_cf" onclick="showSaleDetails(this)">查看</a></td>' +
                "</tr>"
              );
         }else{
          continue;
         }
        }
        pageSplit();
        hideOrShow();
        
      } else {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          "<tr align='center'>" +
          "<td class='td2' colspan='12' height='50px;'>未查到相关信息</td>" +
          "</tr>"
        );
        document.getElementById("barcon1").innerHTML = "";

        
      }
    }
  });
}

function ajax_fastSaleM() {
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/machineFlow/selectSaleMachineInfo.do",
    data: {
      pageNum: currentPage,
      pageSize: 14,
      lineNum: $("#product option:selected").val(),
      chooseItem: $("#saleM_item option:selected").val(),
      itemCont: $("#saleM_info").val(),
      startTime: $("#date_start").val(),
      endTime: $("#date_end").val(),
      examine: 0
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          "<tr align='center'>" +
          "<td class='td2' colspan='11' height='50px;'>未查到相关信息</td>" +
          "</tr>"
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];

        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {

          var status;
          if (data['body']['result']['data'][i]['examine'] == 0) {
            status = "待审核";
          } else if (data['body']['result']['data'][i]['examine'] == 1) {
            status = "已完成";
          } else if (data['body']['result']['data'][i]['examine'] == -1) {
            status = "已关闭";
          } else {
            status = "";
          }
          $("#adminTbody").append(
            "<tr align='center'id =" + data['body']['result']['data'][i]['flow_id'] + ">" +
            '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['company'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['workNum'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['lineName'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['machineName'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['factoryNum'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['barCode'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['buyTime'] + '</td>' +
            '<td class="td2 txt_center" >' + status + '</td>' +
            '<td class="td2 txt_center" style = "display:none;">' + data['body']['result']['data'][i]['approval_stage'] + '</td>' +
            '<td class="td2 txt_center" ><a href="###" class="color_cf" onclick="showSaleDetails(this)">查看</a></td>' +
            "</tr>"
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_companyLocationM() {
  var dealerNum;
  var dealerName;
  if ($("#dealer_item option:selected").val() == "company") {
    dealerName = $("#dealer_info").val();
    dealerNum = "";
  } else if ($("#dealer_item option:selected").val() == "workNum") {
    dealerNum = $("#dealer_info").val();
    dealerName = "";
  }
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/locationRecord/selectStore.do",
    data: {
      pageNum: currentPage,
      pageSize: 14,
      workNum: dealerNum,
      dealerName: dealerName
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2" height="50px" colspan="8">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var type;
          if (data['body']['result']['data'][i]['type'] == 1) {
            type = "一级商";
          } else if (data['body']['result']['data'][i]['type'] == 2) {
            type = "服务站";
          } else if (data['body']['result']['data'][i]['type'] == 3) {
            type = "二级商";
          } else if (data['body']['result']['data'][i]['type'] == 4) {
            type = "仓库";
          } else if (data['body']['result']['data'][i]['type'] == 5) {
            type = "直营店";
          } else if (data['body']['result']['data'][i]['type'] == 0) {
            type = "";
          }
          $("#adminTbody").append(
            "<tr>" +
            '<td class="td2" height="33">' + data['body']['result']['data'][i]['dealerNum'] + '</td>' +
            '<td class="td2">' + data['body']['result']['data'][i]['dealerName'] + '</td>' +
            '<td class="td2">' + type + '</td>' +
            '<td class="td2">' + data['body']['result']['data'][i]['storeRoomName'] + '</td>' +
            '<td class="td2">' + data['body']['result']['data'][i]['location'] + '</td>' +
            '<td class="td2">' + data['body']['result']['data'][i]['address'] + '</td>' +
            '<td class="td2">' + data['body']['result']['data'][i]['createTime'] + '</td>' +
            '<td class="td2">' + data['body']['result']['data'][i]['workNum'] + '</td>' +
            '<td class="td2">' + data['body']['result']['data'][i]['userName'] + '</td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_salemanLocation() {
  var dealerNum;
  var dealerName;
  if ($("#dealer_item option:selected").val() == "company") {
    dealerName = $("#dealer_info").val();
    dealerNum = "";
  } else if ($("#dealer_item option:selected").val() == "workNum") {
    dealerNum = $("#dealer_info").val();
    dealerName = "";
  }
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/locationRecord/selectStoreUnuse.do",
    data: {
      pageNum: currentPage,
      pageSize: 14,
      workNum: dealerNum,
      dealerName: dealerName
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2" height="50px" colspan="9">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var type;
          if (data['body']['result']['data'][i]['type'] == 1) {
            type = "一级商";
          } else if (data['body']['result']['data'][i]['type'] == 2) {
            type = "服务站";
          } else if (data['body']['result']['data'][i]['type'] == 3) {
            type = "二级商";
          } else if (data['body']['result']['data'][i]['type'] == 4) {
            type = "仓库";
          } else if (data['body']['result']['data'][i]['type'] == 5) {
            type = "直营店";
          } else if (data['body']['result']['data'][i]['type'] == 0) {
            type = "";
          }
          $("#adminTbody").append(
            "<tr id='" + data['body']['result']['data'][i]['depotId'] + "'>" +
            '<td class="td2" height="33">' + data['body']['result']['data'][i]['dealerNum'] + '</td>' +
            '<td class="td2">' + data['body']['result']['data'][i]['dealerName'] + '</td>' +
            '<td class="td2">' + type + '</td>' +
            '<td class="td2">' + data['body']['result']['data'][i]['storeRoomName'] + '</td>' +
            '<td class="td2">' + data['body']['result']['data'][i]['location'] + '</td>' +
            '<td class="td2">' + data['body']['result']['data'][i]['address'] + '</td>' +
            '<td class="td2">' + data['body']['result']['data'][i]['createTime'] + '</td>' +
            '<td class="td2">' + data['body']['result']['data'][i]['workNum'] + '</td>' +
            '<td class="td2">' + data['body']['result']['data'][i]['userName'] + '</td>' +
            '<td class="td2"><a href="###" style="color:red" onclick="deleteSalemanLocation(this)">删除</a></td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_servicePriceM() {
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/serviceInfo/queryCost.do",
    data: {
      pageNum: currentPage,
      pageSize: 14,
      lineNum: $("#product option:selected").val(),
      level: $("#level option:selected").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2" height="50px" colspan="8">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var level;
          if (data['body']['result']['data'][i]['level'] == 1) {
            level = "一星级";
          } else if (data['body']['result']['data'][i]['level'] == 2) {
            level = "二星级";
          } else if (data['body']['result']['data'][i]['level'] == 3) {
            level = "三星级";
          }
          $("#adminTbody").append(
            "<tr id='" + data['body']['result']['data'][i]['costId'] + "'>" +
            '<td class="td2" height="33">' + data['body']['result']['data'][i]['lineNum'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['lineName'] + '</td>' +
            '<td class="td2" >' + level + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['distancePrice'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['workPrice'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['userName'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['updateTime'] + '</td>' +
            '<td class="td2" ><a href="###" class="color_cf" onclick="editServicePrice(this)">编辑</a></td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function clearDate() {
  sessionStorage.clear();
  window.location.reload();
}

function ajax_newDealerM() {
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/machineFlow/pushDetails.do",
    data: {
      type: 1,
      pageNum: currentPage,
      pageSize: 14,
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2" height="50px" colspan="3">没有待维护的经销商</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        var on_off_path;
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          $("#adminTbody").append(
            "<tr>" +
            '<td class="td2" height="33">' + data['body']['result']['data'][i]['dealerName'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['dealerNum'] + '</td>' +
            '<td class="td2" ><a href="###" class="color_cf" onclick="addNewDealer(this)">添加</a></td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_newServicePrice() {
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/machineFlow/pushDetails.do",
    data: {
      pageNum: currentPage,
      pageSize: 14,
      type: 2
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2" height="50px" colspan="4">没有待维护的星级单价</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var level;
          if (data['body']['result']['data'][i]['level'] == 1) {
            level = "一星级";
          } else if (data['body']['result']['data'][i]['level'] == 2) {
            level = "二星级";
          } else if (data['body']['result']['data'][i]['level'] == 3) {
            level = "三星级";
          }
          $("#adminTbody").append(
            "<tr>" +
            '<td class="td2" height="33">' + data['body']['result']['data'][i]['lineNum'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['lineName'] + '</td>' +
            '<td class="td2" >' + level + '</td>' +
            '<td class="td2" ><a href="###" class="color_cf" onclick="addNewServicePrice(this)">添加</a></td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_newProductMenu() {
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/machineFlow/pushDetails.do",
    data: {
      pageNum: currentPage,
      pageSize: 7,
      type: 3
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2" height="50px" colspan="2">暂无待维护的产品型号</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          $("#adminTbody").append(
            "<tr>" +
            '<td class="td2 txt_left pd_l5" height="33">' + data['body']['result']['data'][i]['modelNum'] + '</td>' +
            '<td class="td2 txt_left pd_l5" height="33">' + data['body']['result']['data'][i]['proName'] + '</td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_newOrderManage() {
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/machineFlow/pushDetails.do",
    data: {
      pageNum: currentPage,
      pageSize: 7,
      type: 4
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2" height="50px" colspan="2">暂无待维护的产品型号</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          $("#adminTbody").append(
            "<tr>" +
            '<td class="td2 txt_left pd_l5" height="33">' + data['body']['result']['data'][i]['modelNum'] + '</td>' +
            '<td class="td2 txt_left pd_l5" height="33">' + data['body']['result']['data'][i]['proName'] + '</td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_reportSum() {

    //判断经销商
    var url;
    if(appRoleList.indexOf($(window.parent.document).find("input[name='roleId']").val()) != -1){
      url = "/changfa_system/reportRepair/reportDispatchExportForDealer.do";
    }else{
      url = "/changfa_system/reportRepair/reportDispatchExport.do";
    }
  
  $.ajax({
    type: "post",
    url: ip_path + url,
    data: {
      pageNum: currentPage,
      pageSize: 14,
      operation: 2,
      lineNum: $("#product option:selected").val(),
      chooseItem: $("#reportOut_item option:selected").val(),
      itemCont: $("#reportOut_info").val(),
      reportStatus: $("#process option:selected").val(),
      startTime: $("#date_start").val(),
      endTime: $("#date_end").val(),
      disStatus: $("#process_dis option:selected").val(),
      examineType: $("#examineType option:selected").val(),
      disStartTime: $("#date_start_dis").val(),
      disEndTime: $("#date_end_dis").val(),
      disChooseItem: $("#disChooseItem option:selected").val(),
      disItemCont: $("#disItemCont").val(),
      dealerType:$("#dealerType").val(),
      userId:$(window.parent.document).find("input[name='userId']").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2" height="50px" colspan="11">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var status;
          switch (data['body']['result']['data'][i]['disStatus']) {
            case 7:
              status = "待接单";
              break;
            case 8:
              status = "已接单";
              break;
            case 9:
              status = "出发";
              break;
            case 10:
              status = "到达";
              break;
            case 11:
              status = "上传故障图片";
              break;
            case 12:
              status = "上传人机合影";
              break;
            case 13:
              status = "填写维修单";
              break;
            case 31:
              status = "待初审";
              break;
            case 32:
              status = "初审驳回";
              break;
            case 14:
              status = "待终审";
              break;
            case 15:
              status = "终审通过";
              break;
            case 16:
              status = "终审驳回";
              break;
            case 27:
              status = "已关闭";
              break;
            case null:
              status = "";
          }

          var examineType;
          switch (data['body']['result']['data'][i]['examineType']) {
            case 0:
              examineType = "未回访";
              break;
            case 1:
              examineType = "完成";
              break;
            case 2:
              examineType = "未完成";
              break;
            case 3:
              examineType = "违规";
              break;
            case 4:
              examineType = "默认完工";
              break;
          }

          $("#adminTbody").append(
            "<tr>" +
            '<td class="td2" height="33">' + data['body']['result']['data'][i]['disNum'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['lineName'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['createTime'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['disName'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['repairName'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['repairMobile'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['company'] + '</td>' +
            '<td class="td2" >' + status + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['startTime'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['endTime'] + '</td>' +
            '<td class="td2" >' + examineType + '</td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_dispatchSum() {
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/dispatch/dispatchExport.do",
    data: {
      pageNum: currentPage,
      pageSize: 14,
      operation: 2,
      lineNum: $("#product option:selected").val(),
      chooseItem: $("#dispatchOut_item option:selected").val(),
      itemCont: $("#dispatchOut_info").val(),
      disStatus: $("#process option:selected").val(),
      examineType: $("#examineType option:selected").val(),
      startTime: $("#date_start").val(),
      endTime: $("#date_end").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2" height="50px" colspan="9">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var status;
          switch (data['body']['result']['data'][i]['disStatus']) {
            case 7:
              status = "待接单";
              break;
            case 8:
              status = "已接单";
              break;
            case 9:
              status = "出发";
              break;
            case 10:
              status = "到达";
              break;
            case 11:
              status = "上传故障图片";
              break;
            case 12:
              status = "上传人机合影";
              break;
            case 13:
              status = "填写维修单";
              break;
            case 31:
              status = "待初审";
              break;
            case 32:
              status = "初审驳回";
              break;
            case 14:
              status = "待终审";
              break;
            case 15:
              status = "终审通过";
              break;
            case 16:
              status = "终审驳回";
              break;
            case 27:
              status = "已关闭";
              break;
          }

          var examineType;
          switch (data['body']['result']['data'][i]['examineType']) {
            case 0:
              examineType = "未回访";
              break;
            case 1:
              examineType = "完成";
              break;
            case 2:
              examineType = "未完成";
              break;
            case 3:
              examineType = "违规";
              break;
          }

          $("#adminTbody").append(
            "<tr>" +
            '<td class="td2" height="33">' + data['body']['result']['data'][i]['disNum'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['lineName'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['createTime'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['repairName'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['repairMobile'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['company'] + '</td>' +
            '<td class="td2" >' + status + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['startTime'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['endTime'] + '</td>' +
            '<td class="td2" >' + examineType + '</td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_repairSum() {

    //判断经销商
    var url;
    if(appRoleList.indexOf($(window.parent.document).find("input[name='roleId']").val()) != -1){
      url = "/changfa_system/repair/repairExportForDealer.do";
    }else{
      url = "/changfa_system/repair/repairExport.do";
    }

  $.ajax({
    type: "post",
    url: ip_path + url,
    data: {
      pageNum: currentPage,
      pageSize: 14,
      operation: 2,
      chooseItem: $("#repairOut_item option:selected").val(),
      itemCont: $("#repairOut_info").val(),
      repairStatus: $("#process option:selected").val(),
      lineNum: $("#product option:selected").val(),
      startTime: $("#date_start").val(),
      endTime: $("#date_end").val(),
      userId:$(window.parent.document).find("input[name='userId']").val(),
      dealerType:$("#dealerType").val(),
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2" height="50px" colspan="11">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var status;
          switch (data['body']['result']['data'][i]['status']) {
            case 31:
              status = "待初审";
              break;
            case 32:
              status = "三包员驳回";
              break;
            case 14:
              status = "待终审";
              break;
            case 16:
              status = "终审驳回";
              break;
            case 15:
              status = "已完成";
              break;
            case 27:
              status = "已关闭";
              break;
          }

          $("#adminTbody").append(
            "<tr>" +
            '<td class="td2" height="33">' + data['body']['result']['data'][i]['repairNum'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['workNum'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['company'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['machineUserName'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['machineUserMobile'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['factoryNum'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['lineName'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['userName'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['userMobile'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['createTime'] + '</td>' +
            '<td class="td2" >' + status + '</td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}



function ajax_seach1(){
  if($('#saleM_info1').val()!=''){
    if ($('#saleM_item1').val() == 'company') {
      dealer_name = $('#saleM_info1').val();
      dealer_num=''
    } else if ($('#saleM_item1').val() == 'workNum') {
      dealer_num = $('#saleM_info1').val();
      dealer_name=''
    }
    //sessionStorage.setItem('saleM_item_smm', $('#saleM_item').val());
    //sessionStorage.setItem('saleM_info_smm', $('#saleM_info').val());
    currentPage = 1;
    ajax_dealersUnderSaler();
  }else{
    dealer_num=''
    dealer_name=''
    ajax_dealersUnderSaler();
  }
  
}


function ajax_dealersUnderSaler() {
  $.ajax({
    type: "get",
    async: false,
    url: ip_path + "/changfa_system/salesmanDealer/selectSalesmanDealer.do",
    data: {
      salesman_id: $(window.parent.document).find("input[name='salerId']").val(),
      token : $(window.parent.document).find("input[name='token']").val(),
      //province: $("#taskAddress").text().replace(/\//g,','),
      pageSize: 7,
      pageNum: currentPage,
      dealer_name:dealer_name,
      dealer_num:dealer_num,
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2 txt_center" height="50px" colspan="8">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          $("#adminTbody").append(
            "<tr id='" + data['body']['result']['data'][i]['user_id'] + "'>" +
            '<td class="td2 txt_center"" height="33"><input type="checkbox" name="item"></td>' +
            
            '<td class="td2">' + data['body']['result']['data'][i]['work_num'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['company'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['user_name'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['mobile'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['province'] + '</td>' +
            '<td class="td2 txt_center" ><a href="###" class="color_cf" onclick="showDealerDetails(this)">查看</a></td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_getDealersInfo(){
  if($('.select-picker-search-checked1').text()=='请选择产品线'){
    line_nums=''
  }else if($('.select-picker-search-checked1').text()!='请选择产品线'){
    line_nums =$('.select-picker-search-checked1').text()
  }
      //获取弹框的 企业信息
      $.ajax({
        type: "get",
        url: ip_path + "/changfa_system/salesmanDealer/selectDistributor.do",
        data : {
              token : $(window.parent.document).find("input[name='token']").val(),
              dealer_num:$('#saleM_item').val() == 'workNum'?$('#saleM_info').val():'',
              dealer_name:$('#saleM_item').val() == 'company'?$('#saleM_info').val():'',
              provinces:$('#province').val(),
              line_nums:line_nums,
              //line_nums:$('#product').val(),
              },
        dataType: "json",
        success: function (data) {
          if (data['head']['code'] != 200) {
          $("#adminTbody2").empty();
          $("#adminTbody").append(
            '<td class="td2 txt_center" height="50px" colspan="8">未查到相关信息</td>'
          );
        } else {
          $("#adminTbody2").empty();
          $('#shuliang').html('共'+"<span style ='color:red'>"+data['body']['result'].length+"</span>"+'条');
          for (var i = 0; i < data['body']['result'].length; i++) {
            $("#adminTbody2").append(
              "<tr id='" + data['body']['result'][i]['userId'] + "'>" +
              '<td class="td2 txt_center"" height="33"><input type="checkbox" name="elem"></td>' +
              
              '<td class="td2">' + data['body']['result'][i]['work_num'] + '</td>' +
              '<td class="td2" >' + data['body']['result'][i]['company'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result'][i]['province'] + '</td>' +
              '</tr>'
            );
          }
        }
        }
      });
}

function ajax_noticeM() {
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/user/getInform.do",
    data: {
      pageSize: 14,
      pageNum: currentPage,
      createStartTime: $("#date_start").val(),
      createEndTime: $("#date_end").val(),
      chooseItem: $("#notice_item option:selected").val(),
      itemCont: $("#notice_info").val(),
      judge: 2,
      type: $("#type option:selected").val(),
      status: $("#status option:selected").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2 txt_center" height="50px" colspan="8">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var type;
          if (data['body']['result']['data'][i]['type'] == 1) {
            type = "发文";
          } else if (data['body']['result']['data'][i]['type'] == 2) {
            type = "通知";
          } else if (data['body']['result']['data'][i]['type'] == 3) {
            type = "通告";
          } else if (data['body']['result']['data'][i]['type'] == 0) {
            type = "其他";
          }

          var status;
          if (data['body']['result']['data'][i]['status'] == 1) {
            status = "已保存";
          } else if (data['body']['result']['data'][i]['status'] == 2) {
            status = "已发布";
          } else if (data['body']['result']['data'][i]['status'] == 3) {
            status = "已撤回";
          }

          if (data['body']['result']['data'][i]['status'] == 1) {
            $("#adminTbody").append(
              "<tr id='" + data['body']['result']['data'][i]['id'] + "'>" +
              '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['informNum'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['title'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['creatorName'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['createTime'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['updateTime'] + '</td>' +
              '<td class="td2 txt_center" >' + type + '</td>' +
              '<td class="td2 txt_center" >' + status + '</td>' +
              '<td class="td2 txt_center" ><a href="###" class="color_cf" onclick="showNoticeDraft(this)">查看</a></td>' +
              '</tr>'
            );
          } else {
            $("#adminTbody").append(
              "<tr id='" + data['body']['result']['data'][i]['id'] + "'>" +
              '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['informNum'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['title'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['creatorName'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['createTime'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['updateTime'] + '</td>' +
              '<td class="td2 txt_center" >' + type + '</td>' +
              '<td class="td2 txt_center" >' + status + '</td>' +
              '<td class="td2 txt_center" ><a href="###" class="color_cf" onclick="showNoticeDetails(this)">查看</a></td>' +
              '</tr>'
            );
          }

        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_integralRules() {
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/score/selectAllScoreRule.do",
    data: {},
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2 txt_center" height="50px" colspan="8">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['resultList'].length; i++) {
          var on_off_path;
          if (data['body']['resultList'][i]['status'] == 0) {
            on_off_path = "http://app.changfanz.net:3588/changfa_file/off.png";
          } else {
            on_off_path = "http://app.changfanz.net:3588/changfa_file/on.png";
          }
          $("#adminTbody").append(
            "<tr id='" + data['body']['resultList'][i]['id'] + "'>" +
            '<td class="td2 txt_center" height="33">' + data['body']['resultList'][i]['name'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['resultList'][i]['score'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['resultList'][i]['creatorName'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['resultList'][i]['createTime'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['resultList'][i]['updateTime'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['resultList'][i]['remark'] + '</td>' +
            '<td class="td2" ><img src="' + on_off_path + '" class="mg-t5" onclick="toogle_ruleStatus(this)"></td>' +
            '<td class="td2 txt_center" ><a href="###" class="color_cf" onclick="editIntegralRule(this)">编辑</a></td>' +
            '</tr>'
          );
        }
      }
    }
  });
}

function ajax_experienceRules() {
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/experience/selectAllExperienceRule.do",
    data: {},
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2 txt_center" height="50px" colspan="8">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['resultList'].length; i++) {
          var on_off_path;
          if (data['body']['resultList'][i]['status'] == 0) {
            on_off_path = "http://app.changfanz.net:3588/changfa_file/off.png";
          } else {
            on_off_path = "http://app.changfanz.net:3588/changfa_file/on.png";
          }
          $("#adminTbody").append(
            "<tr id='" + data['body']['resultList'][i]['id'] + "'>" +
            '<td class="td2 txt_center" height="33">' + data['body']['resultList'][i]['name'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['resultList'][i]['experience'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['resultList'][i]['creatorName'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['resultList'][i]['createTime'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['resultList'][i]['updateTime'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['resultList'][i]['remark'] + '</td>' +
            '<td class="td2" ><img src="' + on_off_path + '" class="mg-t5" onclick="toogle_experienceRuleStatus(this)"></td>' +
            '<td class="td2 txt_center" ><a href="###" class="color_cf" onclick="editIntegralRule(this)">编辑</a></td>' +
            '</tr>'
          );
        }
      }
    }
  });
}

function ajax_topicM() {
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/topic/selectAll.do",
    data: {
      topicName: $("#topic_info").val(),
      status: $("#status option:selected").val(),
      startTime: $("#date_start").val(),
      endTime: $("#date_end").val(),
      pageNum: currentPage,
      pageSize: 14
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2 txt_center" height="50px" colspan="5">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var on_off_path;
          if (data['body']['result']['data'][i]['status'] == -1) {
            on_off_path = "http://app.changfanz.net:3588/changfa_file/off.png";
          } else {
            on_off_path = "http://app.changfanz.net:3588/changfa_file/on.png";
          }
          var isTop;
          if (data['body']['result']['data'][i]['isTop'] == -1) {
            isTop = "http://app.changfanz.net:3588/changfa_file/star_empty.png";
          } else {
            isTop = "http://app.changfanz.net:3588/changfa_file/star_full.png";
          }
          $("#adminTbody").append(
            "<tr id='" + data['body']['result']['data'][i]['id'] + "'>" +
            '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['name'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['createTime'] + '</td>' +
            '<td class="td2" ><img src="' + isTop + '" class="mg-t5" onclick="toogle_TopicTopStatus(this)"></td>' +
            '<td class="td2" ><img src="' + on_off_path + '" class="mg-t5" onclick="toogle_TopicStatus(this)"></td>' +
            '<td class="td2 txt_center" ><a href="###" class="color_cf" onclick="showTopicDetails(this)">查看</a></td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_topicSendDetails() {
  var sort;
  if ($("#like").is(':checked')) {
    sort = 1;
  } else if ($("#comment").is(':checked')) {
    sort = 2;
  } else {
    sort = "";
  }

  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/post/selectPostByTopicId.do",
    data: {
      topicId: $(window.parent.document).find("input[name='topicId']").val(),
      pageNum: currentPage,
      pageSize: 7,
      sort: sort
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] == 200) {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#commentContent").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          $("#commentContent").append(
            '<div class="dealerInfo2" style="height: auto;color: #666666;-webkit-border-radius: 15px;-moz-border-radius: 15px;border-radius: 15px;" id="' + data['body']['result']['data'][i]['postId'] + '" ondblclick="showPostDetail(this)">' +
            '<div class="mg_l50 mg-t30">' +
            '<table>' +
            '<tr>' +
            '<td><img src="' + data['body']['result']['data'][i]['headPath'] + '" style="width: 50px;height: 50px;border-radius: 50%;"></td>' +
            '<td><span class="mg_l10">' + data['body']['result']['data'][i]['nickName'] + '</span></td>' +
            '</tr>' +
            '</table>' +
            '</div>' +
            '<div class="mg_l50" style="width: 90%;">' +
            '<span style="word-break: break-all;">' + data['body']['result']['data'][i]['content'] + '</span>' +
            '</div>' +
            '<div class="mg_l50 mg-t30 mg_b30">' +
            '<span class="mg-r50">' + data['body']['result']['data'][i]['pCreateTime'] + '</span>' +
            '<img src="img/like.png"><span class="mg-r50">' + data['body']['result']['data'][i]['goodNum'] + '</span>' +
            '<img src="img/comment.png"><span>' + data['body']['result']['data'][i]['replyNum'] + '</span>' +
            '</div>' +
            '</div>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_postReplys() {
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/post/selectReplyByPost.do",
    data: {
      postId: $(window.parent.document).find("input[name='postId']").val(),
      pageNum: currentPage,
      pageSize: 5,
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] == 200) {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#userCommentList").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var viewOrNot;
          if (data['body']['result']['data'][i]['status'] == 1) {
            viewOrNot = "http://app.changfanz.net:3588/changfa_file/viewCan.png"
          } else {
            viewOrNot = "http://app.changfanz.net:3588/changfa_file/viewCannot.png"
          }

          if (data['body']['result']['data'][i]['replyNum'] != 0) {

            $("#userCommentList").append(
              '<tr>' +
              '<td class="body_td" height="auto">' +
              '<div class="mg_l60 mg-t30">' +
              '<table>' +
              '<tr>' +
              '<td><img src="' + data['body']['result']['data'][i]['headPath'] + '" style="width: 50px;height: 50px;border-radius: 50%;"></td>' +
              '<td><span class="mg_l10 mg-r50">' + data['body']['result']['data'][i]['replyUserName'] + '(' + data['body']['result']['data'][i]['replyRoleName'] + ')' + '</span></td>' +
              '<td><span>' + data['body']['result']['data'][i]['createTime'] + '</span></td>' +
              '</tr>' +
              '</table>' +

              '</div>' +
              '<div class="mg_l120" style="width: 90%;">' +
              '<span style="word-break: break-all;width:80%">' + data['body']['result']['data'][i]['content'] + '</span>' +
              '<span class="flt_r mg-r30">' + data['body']['result']['data'][i]['goodNum'] + '</span>' +
              '<img src="img/like.png" class="flt_r">' +
              '</div>' +
              '<div class="mg_l120 mg-t30 mg_b20">' +
              '<a href="###" id="' + data['body']['result']['data'][i]['id'] + '" class="mg-r50" onclick="replyToReply(this)">' + data['body']['result']['data'][i]['replyNum'] + '条回复</a>' +
              '<img src="' + viewOrNot + '" class="flt_r mg-r30" onclick="changeReplyStatus(this)">' +
              '</div>' +
              '</td>' +
              '</tr>'
            );
          } else {
            $("#userCommentList").append(
              '<tr>' +
              '<td class="body_td" height="auto">' +
              '<div class="mg_l60 mg-t30">' +
              '<table>' +
              '<tr>' +
              '<td><img src="' + data['body']['result']['data'][i]['headPath'] + '" style="width: 50px;height: 50px;border-radius: 50%;"></td>' +
              '<td><span class="mg_l10 mg-r50">' + data['body']['result']['data'][i]['replyUserName'] + '(' + data['body']['result']['data'][i]['replyRoleName'] + ')' + '</span></td>' +
              '<td><span>' + data['body']['result']['data'][i]['createTime'] + '</span></td>' +
              '</tr>' +
              '</table>' +

              '</div>' +
              '<div class="mg_l120" style="width: 90%;">' +
              '<span style="word-break: break-all;">' + data['body']['result']['data'][i]['content'] + '</span>' +
              '<span class="flt_r mg-r30">' + data['body']['result']['data'][i]['goodNum'] + '</span>' +
              '<img src="img/like.png" class="flt_r">' +
              '</div>' +
              '<div class="mg_l120 mg-t30 mg_b20">' +
              '<a href="###" id="' + data['body']['result']['data'][i]['id'] + '" class="mg-r50">' + data['body']['result']['data'][i]['replyNum'] + '条回复</a>' +
              '<img src="' + viewOrNot + '" class="flt_r mg-r30" onclick="changeReplyStatus(this)">' +
              '</div>' +
              '</td>' +
              '</tr>'
            );
          }

        }
        pageSplit();
        hideOrShow();
      } else {
        $("#userCommentList").html(
          '<tr>' +
          '<td class="body_td txt_center" height="46">暂无评论</td>' +
          '</tr>'
        );
        $("#barcon").hide();
      }
    }
  });
}

function ajax_postM() {
  var content;
  var userName;
  if ($("#post_item option:selected").val() == "content") {
    content = $("#post_info").val();
    userName = "";
  } else {
    content = "";
    userName = $("#post_info").val();
  }
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/post/selectPost.do",
    data: {
      token: $(window.parent.document).find("input[name='token']").val(),
      pageNum: currentPage,
      pageSize: 14,
      content: content,
      userName: userName,
      isEssence: $("#isEssence option:selected").val(),
      viewRank: $("#viewRank option:selected").val(),
      canReply: $("#canReply option:selected").val(),
      startTime: $("#date_start").val(),
      endTime: $("#date_end").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          "<tr align='center'>" +
          '<td class="td2 txt_center" height="50px" colspan="12">未查到相关信息</td>' +
          '</tr>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var isEssence;
          if (data['body']['result']['data'][i]['isEssence'] == 1) {
            isEssence = "已推荐";
          } else {
            isEssence = "未推荐";
          }

          var viewRank;
          if (data['body']['result']['data'][i]['viewRank'] == 1) {
            viewRank = "显示";
          } else {
            viewRank = "不显示";
          }

          var canReply;
          if (data['body']['result']['data'][i]['canReply'] == 1) {
            canReply = "可回复";
          } else {
            canReply = "不可回复";
          }
          $("#adminTbody").append(
            "<tr id='" + data['body']['result']['data'][i]['id'] + "'>" +
            '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['content'].substr(0, 10) + '...</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['createTime'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['userName'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['roleName'] + '</td>' +
            '<td class="td2 txt_center" >' + isEssence + '</td>' +
            '<td class="td2 txt_center" >' + viewRank + '</td>' +
            '<td class="td2 txt_center" >' + canReply + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['viewCount'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['goodNum'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['replyCount'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['followNum'] + '</td>' +
            '<td class="td2 txt_center" ><a href="###" class="color_cf" onclick="showPostDetails(this)">查看</a></td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}



function ajax_replyToReply() {
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/post/selectReplyById.do",
    data: {
      replyId: $(window.parent.document).find("input[name='replyId']").val(),
      pageNum: currentPage,
      pageSize: 7
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] == 200) {
        $("#replyHead").attr("src", data['body']['result']['replyHeadPath']);
        $("#replyNickName").text(data['body']['result']['replyUserName'] + "(" + data['body']['result']['replyRoleName'] + ")");
        $("#replyContent").text(data['body']['result']['content']);
        $("#createTime").text(data['body']['result']['createTime']);
        $("#likeNum").text(data['body']['result']['goodNum']);
        $("#replyNum").text(data['body']['result']['replyNum']);

        if (data['body']['result']['isEssence'] == 1) {
          $("#supportLimit").attr("src", "http://app.changfanz.net:3588/changfa_file/star_full.png");
        } else {
          $("#supportLimit").attr("src", "http://app.changfanz.net:3588/changfa_file/star_empty.png");
        }

        if (data['body']['result']['canReply'] == 0) {
          $("#replyLimit").attr("src", "http://app.changfanz.net:3588/changfa_file/off.png");
        } else {
          $("#replyLimit").attr("src", "http://app.changfanz.net:3588/changfa_file/on.png");
        }

        if (data['body']['result']['viewRank'] == 1) {
          $("#viewLimit").attr("src", "http://app.changfanz.net:3588/changfa_file/on.png");
        } else {
          $("#viewLimit").attr("src", "http://app.changfanz.net:3588/changfa_file/off.png");
        }

        currentPage = data['body']['result']['replyNext']['pageNum'];
        totalPage = data['body']['result']['replyNext']['pages'];
        totalData = data['body']['result']['replyNext']['total'];
        $("#userCommentList").empty();
        for (var i = 0; i < data['body']['result']['replyNext']['data'].length; i++) {
          $("#userCommentList").append(
            '<tr>' +
            '<td class="body_td" height="auto">' +
            '<div class="mg_l60 mg-t30">' +
            '<table>' +
            '<tr>' +
            '<td><img src="' + data['body']['result']['replyNext']['data'][i]['userHeadPath'] + '" style="width: 50px;height: 50px;border-radius: 50%"></td>' +
            '<td><span class="mg_l10 mg-r50">' + data['body']['result']['replyNext']['data'][i]['userName'] + '(' + data['body']['result']['replyNext']['data'][i]['roleName'] + ')' + '</span></td>' +
            '<td><span>' + data['body']['result']['replyNext']['data'][i]['createTime'] + '</span></td>' +
            '</tr>' +
            '</table>' +
            '</div>' +
            '<div class="mg_l120 mg_b20" style="width: 90%;">' +
            '<span style="word-break: break-all;">' + data['body']['result']['replyNext']['data'][i]['content'] + '</span>' +
            '</div>' +
            '</td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      } else {
        alert(data['head']['message']);
      }
    }
  });
}



function ajax_questionBankM() {
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/question/queryQuestions.do",
    data: {
      subject: $("#question_info").val(),
      type: $("#type option:selected").val(),
      startTime: $("#date_start").val(),
      endTime: $("#date_end").val(),
      pageNum: currentPage,
      pageSize: 14
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2 txt_center" height="50px" colspan="5">未查到相关信息</td>'
        );
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var type;
          if (data['body']['result']['data'][i]['type'] == 1) {
            type = "选择题";
          } else if (data['body']['result']['data'][i]['type'] == 0) {
            type = "问答题";
          } else if (data['body']['result']['data'][i]['type'] == 2) {
            type = "判断题";
          }
          $("#adminTbody").append(
            "<tr id='" + data['body']['result']['data'][i]['qid'] + "'>" +
            '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['subject'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['createTime'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['creatorName'] + '</td>' +
            '<td class="td2 txt_center" >' + type + '</td>' +
            '<td class="td2 txt_center" ><a href="###" class="color_cf" onclick="editQuestion(this)">编辑</a></td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_questionNaireM() {
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/test/queryTest.do",
    data: {
      title: $("#test_info").val(),
      startTime: $("#date_start").val(),
      endTime: $("#date_end").val(),
      pageNum: currentPage,
      pageSize: 14
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2 txt_center" height="50px" colspan="5">未查到相关信息</td>'
        );
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          $("#adminTbody").append(
            "<tr id='" + data['body']['result']['data'][i]['tid'] + "'>" +
            '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['testNo'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['title'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['createTime'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['creatorName'] + '</td>' +
            '<td class="td2 txt_center" ><a href="###" class="color_cf" onclick="naireAnswerCount(this)">问卷统计</a></td>' +
            '</tr>'
          );
          // <a href="###" onclick="editQuestionNaire(this)">编辑</a>
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_questionBank_forNaire() {
  var type;
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/question/queryQuestions.do",
    data: {
      subject: $("#question_info").val(),
      type: $("#type option:selected").val(),
      qids: qidList.toString(),
      pageNum: currentPage,
      pageSize: 7
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#barcon1").hide();
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#questionList").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          if (data['body']['result']['data'][i]['type'] == 1) {
            if (data['body']['result']['data'][i]['chooseType'] == 0) {
              type = "（单选题）";
            } else {
              type = "（多选题）";
            }
            $("#questionList").append(
              '<div>' +
              '<div class="mg_l30 mg_b20">' +
              '    <div id="' + data['body']['result']['data'][i]['qid'] + '">' +
              '         <img class="addQuestion" src="img/addQuestion.png" style="vertical-align: middle;" onclick="addToNaire(this)">' +
              '         <img class="removeQuestion" src="img/removeQuestion.png" style="vertical-align: middle;display: none;" onclick="removeFromNaire(this)">' +
              '         <span>' + data['body']['result']['data'][i]['subject'] + type + '</span>' +
              '    </div>' +
              '    <div class="mg_l50">' +
              '         <div class="flt_l" style="width: 40%;word-break: break-all">A.' + data['body']['result']['data'][i]['answerA'] + '</div>' +
              '         <div class="flt_l" style="width: 40%;word-break: break-all">B.' + data['body']['result']['data'][i]['answerB'] + '</div>' +
              '    </div><br>' +
              '    <div class="mg_l50">' +
              '         <div class="flt_l" style="width: 40%;word-break: break-all">C.' + data['body']['result']['data'][i]['answerC'] + '</div>' +
              '         <div class="flt_l" style="width: 40%;word-break: break-all">D.' + data['body']['result']['data'][i]['answerD'] + '</div>' +
              '    </div>' +
              '</div><br>' +
              '</div>'
            );
          } else if (data['body']['result']['data'][i]['type'] == 0) {
            type = "（问答题）";
            $("#questionList").append(
              '<div>' +
              '<div class="mg_l30 mg_b20">' +
              '   <div id="' + data['body']['result']['data'][i]['qid'] + '">' +

              '        <img class="addQuestion" src="img/addQuestion.png" style="vertical-align: middle;" onclick="addToNaire(this)">' +
              '        <img class="removeQuestion" src="img/removeQuestion.png" style="vertical-align: middle;display: none;" onclick="removeFromNaire(this)">' +
              '        <span>' + data['body']['result']['data'][i]['subject'] + type + '</span>' +
              '   </div>' +
              '</div><br>' +
              '</div>'
            );
          }
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_evtM() {
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/activity/selectAll.do",
    data: {
      title: $("#evt_title").val(),
      startTime: $("#date_start").val(),
      endTime: $("#date_end").val(),
      pageNum: currentPage,
      pageSize: 14
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] == 200) {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          $("#adminTbody").append(
            "<tr id =" + data['body']['result']['data'][i]['activityId'] + ">" +
            '<td class="td2" height="33">' + data['body']['result']['data'][i]['title'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['createTime'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['signStartTime'] + '~' + data['body']['result']['data'][i]['signEndTime'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['startTime'] + '~' + data['body']['result']['data'][i]['endTime'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['address'] + '</td>' +
            '<td class="td2" ><a href="###" class="color_cf" onclick="editActivity(this)">编辑</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="###" class="color_cf" onclick="showActivityDetails(this)">查看</a></td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      } else {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          "<tr>" +
          '<td class="td2" height="33" colspan="6">未查到相关信息</td>' +
          '</tr>'
        );
      }
    }
  });
}

function ajax_informationM() {
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/consults/selectAll.do",
    data: {
      title: $("#info_title").val(),
      startTime: $("#date_start").val(),
      endTime: $("#date_end").val(),
      status: $("#status option:selected").val(),
      pageNum: currentPage,
      pageSize: 14
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] == 200) {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var on_off_path;
          if (data['body']['result']['data'][i]['status'] == 0) {
            on_off_path = "http://app.changfanz.net:3588/changfa_file/off.png";
          } else {
            on_off_path = "http://app.changfanz.net:3588/changfa_file/on.png";
          }
          $("#adminTbody").append(
            "<tr id =" + data['body']['result']['data'][i]['id'] + ">" +
            '<td class="td2" height="33">' + data['body']['result']['data'][i]['title'] + '</td>' +
            '<td class="td2" ><img src="' + data['body']['result']['data'][i]['tImage'] + '" style="width: 40px;height: 30px;margin-top: 5px;" onclick="makeLarger(this)"></td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['createTime'] + '</td>' +
            '<td class="td2" ><img src="' + on_off_path + '" class="mg-t5" onclick="toogle_informationStatus(this)"></td>' +
            '<td class="td2" ><a href="###" class="color_cf" onclick="editInformation(this)">编辑</a></td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      } else {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          "<tr>" +
          '<td class="td2" height="33" colspan="5">未查询到相关信息</td>' +
          '</tr>'
        );
      }
    }
  });
}

function ajax_goodsM() {
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/goods/selectGoods.do",
    data: {
      chooseItem: $("#goods_type option:selected").val(),
      itemCont: $("#goods_info").val(),
      status: $("#status option:selected").val(),
      isTop: $("#isTop option:selected").val(),
      pageNum: currentPage,
      pageSize: 14,
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2" height="40px" colspan="8">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var on_off_path_status;
          if (data['body']['result']['data'][i]['status'] == -1) {
            on_off_path_status = "http://app.changfanz.net:3588/changfa_file/off.png";
          } else {
            on_off_path_status = "http://app.changfanz.net:3588/changfa_file/on.png";
          }

          var on_off_path_isTop;
          if (data['body']['result']['data'][i]['isTop'] == -1) {
            on_off_path_isTop = "http://app.changfanz.net:3588/changfa_file/off.png";
          } else {
            on_off_path_isTop = "http://app.changfanz.net:3588/changfa_file/on.png";
          }
          $("#adminTbody").append(
            "<tr id =" + data['body']['result']['data'][i]['id'] + ">" +
            '<td class="td2" height="33">' + data['body']['result']['data'][i]['productNum'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['name'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['goodsClassName'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['price'] + '</td>' +
            '<td class="td2" >上架：<img src="' + on_off_path_status + '" class="vert_mid mg-r20" onclick="changeGoodsTags2(this)">置顶：<img src="' + on_off_path_isTop + '" class="vert_mid mg-r20" onclick="changeGoodsTags1(this)"></td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['saleNum'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['stock'] + '</td>' +
            '<td class="td2" ><a href="###" class="color_cf" onclick="editGoodsInfo(this)">编辑</a></td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_ordersM() {
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/order/queryOrders.do",
    data: {
      orderNum: $("#orderNum").val(),
      status: $("#status option:selected").val(),
      payStatus: $("#payStatus option:selected").val(),
      invoiceStatus: $("#invoiceStatus option:selected").val(),
      startTime: $("#date_start").val(),
      endTime: $("#date_end").val(),
      pageNum: currentPage,
      pageSize: 14,
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2" height="40px" colspan="8">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var status;
          var payStat;
          var invoiceStat;
          if (data['body']['result']['data'][i]['status'] == 1) {
            status = "有效";
          } else {
            status = "失效";
          }
          switch (data['body']['result']['data'][i]['payStatus']) {
            case -1:
              payStat = "未付款";
              break;
            case 1:
              payStat = "待审核";
              break;
            case 2:
              payStat = "审核通过";
              break;
            case 3:
              payStat = "驳回";
              break;
          }
          // if(data['body']['result']['data'][i]['payStatus'] == 1){
          //     payStat = "已付款";
          // }else{
          //     payStat = "未付款";
          // }
          if (data['body']['result']['data'][i]['invoiceStatus'] == 1) {
            invoiceStat = "已发货";
          } else {
            invoiceStat = "未发货";
          }

          $("#adminTbody").append(
            "<tr id =" + data['body']['result']['data'][i]['orderId'] + ">" +
            '<td class="td2" height="33">' + data['body']['result']['data'][i]['orderNum'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['createTime'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['account'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['totalMoney'] + '</td>' +
            '<td class="td2" >' + status + '</td>' +
            '<td class="td2" >' + payStat + '</td>' +
            '<td class="td2" >' + invoiceStat + '</td>' +
            '<td class="td2" ><a href="###" class="color_cf" onclick="showOrdersDetails(this)">查看</a></td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_sendOrderM() {
  
  //判断经销商
  var url;
  if(appRoleList.indexOf($(window.parent.document).find("input[name='roleId']").val()) != -1){
    url = "/changfa_system/deliver/queryInvoicesForDealer.do";
  }else{
    url = "/changfa_system/deliver/queryInvoices.do";
  }

  $.ajax({
    type: "post",
    url: ip_path + url,
    data: {
      pageNum: currentPage,
      pageSize: 14,
      chooseItem: $("#sendM_item option:selected").val(),
      itemCont: $("#sendM_info").val(),
      status: $("#status option:selected").val(),
      damage: $("#brokenStatus option:selected").val(),
      lineNum: $("#line option:selected").val(),
      startTime: $("#date_start_ve").val(),
      endTime: $("#date_end_ve").val(),
      userId:$(window.parent.document).find("input[name='userId']").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2 txt_center" height="50px" colspan="9">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var status;
          var brokenStat;
          if (data['body']['result']['data'][i]['status'] == 0) {
            status = "未接车";
          } else if (data['body']['result']['data'][i]['status'] == 1) {
            status = "部分接车";
          } else {
            status = "全接车";
          }

          if (data['body']['result']['data'][i]['damage'] == 0) {
            brokenStat = "无损坏";
          } else {
            brokenStat = "有损坏";
          }
          $("#adminTbody").append(
            "<tr id =" + data['body']['result']['data'][i]['invoiceId'] + ">" +
            '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['invoiceNo'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['dealerNo'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['dealerName'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['lineName'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['count'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['createTime'] + '</td>' +
            '<td class="td2 txt_center" >' + status + '</td>' +
            '<td class="td2 txt_center" >' + brokenStat + '</td>' +
            '<td class="td2 txt_center" ><a href="###" class="color_cf" onclick="showVehicleDetails(this)">查看</a></td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_invoiceMachineM() {
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/deliver/checkInvoice.do",
    data: {
      invoiceId: $(window.parent.document).find("input[name='invoiceId']").val(),
      pageNum: 1,
      pageSize: 9999
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2 txt_center" height="50px" colspan="8">未查到相关信息</td>'
        );
      } else {
        $("#dealerName").text(data['body']['result']['dealerName']);
        $("#dealerNo").text(data['body']['result']['dealerNo']);
        $("#invoiceTime").text(data['body']['result']['createTime']);
        $("#invoiceDes").text(data['body']['result']['des']);
        $("#invoiceNo").val(data['body']['result']['invoiceNo']);

        totalData = data['body']['result']['machineList']['total'];

        if (totalData > 13) {
          $("#scrollDiv").addClass("scrollDiv");
        }

        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['machineList']['data'].length; i++) {
          var status;
          if (data['body']['result']['machineList']['data'][i]['meetingStatus'] == 1) {
            status = "未接车";
            $("#adminTbody").append(
              "<tr >" +
              '<td class="td2 txt_center" height="33">' + data['body']['result']['machineList']['data'][i]['lineName'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['machineList']['data'][i]['seriesName'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['machineList']['data'][i]['modelName'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['machineList']['data'][i]['factoryNum'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['machineList']['data'][i]['barCode'] + '</td>' +
              '<td class="td2 txt_center" >' + status + '</td>' +
              '<td class="td2 txt_center" id =' + data["body"]["result"]["machineList"]["data"][i]["machineId"] + '><a href="###" class="color_cf" onclick="showSendDetails(this)">查看</a></td>' +
              '<td class="td2 txt_center" ><input type="checkbox" class="choose_select" onclick="chooseMachine(this)"></td>' +
              '</tr>'
            );
          } else if (data['body']['result']['machineList']['data'][i]['meetingStatus'] == 2) {
            status = "已接车";
            $("#adminTbody").append(
              "<tr >" +
              '<td class="td2 txt_center" height="33">' + data['body']['result']['machineList']['data'][i]['lineName'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['machineList']['data'][i]['seriesName'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['machineList']['data'][i]['modelName'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['machineList']['data'][i]['factoryNum'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['machineList']['data'][i]['barCode'] + '</td>' +
              '<td class="td2 txt_center" >' + status + '</td>' +
              '<td class="td2 txt_center" id =' + data["body"]["result"]["machineList"]["data"][i]["machineId"] + '><a href="###" class="color_cf" onclick="showSendDetails(this)">查看</a></td>' +
              '<td class="td2 txt_center" ><input type="checkbox" class="choose_select" disabled="disabled"></td>' +
              '</tr>'
            );
          }
        }
        var count = 0;
        $('#adminTbody tr').each(function (i) {
          if ($(this).find("td").eq(5)[0]['innerHTML'] == "未接车") {
            count++;
          }
        });
        if (count != 0 && $(window.parent.document).find("input[name='roleId']").val() != 6) {
          $("#instore").show();
        }

        if (data['body']['result']['machineList']) {

        }
        //备注
        if (data['body']['result']['invoiceFlowList'].length != 0) {
          $("#acceptList").empty();
          for (var i = 0; i < data['body']['result']['invoiceFlowList'].length; i++) {
            $("#acceptList").append(
              "<tr>" +
              '<td class="td2 txt_center" height="33">' + parseInt(i + 1) + '</td>' +
              '<td id="td' + i + '" class="td2 txt_center" ></td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['invoiceFlowList'][i]['remarks'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['invoiceFlowList'][i]['createTime'] + '</td>' +
              '</tr>'
            );
            if (data['body']['result']['invoiceFlowList'][i]['filesPath'].length != 0) {
              for (var j = 0; j < data['body']['result']['invoiceFlowList'][i]['filesPath'].length; j++) {
                $("#td" + i).append(
                  '<img src="' + data['body']['result']['invoiceFlowList'][i]['filesPath'][j] + '" class="err_pic mg-t5" onclick="makeLarger_instore(this)">'
                );
              }
            }
          }
        } else {
          $("#accept").hide();
        }
      }
    }
  });
}

function ajax_partM() {
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/org/selectAll.do",
    data: {
      status: $("#status option:selected").val(),
      level: $("#level option:selected").val(),
      pageNum: currentPage,
      pageSize: 14
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2 txt_center" height="50px" colspan="6">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var on_off_path;
          if (data['body']['result']['data'][i]['status'] == 0) {
            on_off_path = "http://app.changfanz.net:3588/changfa_file/off.png";
          } else {
            on_off_path = "http://app.changfanz.net:3588/changfa_file/on.png";
          }
          $("#adminTbody").append(
            "<tr id='" + data['body']['result']['data'][i]['orgId'] + "'>" +
            '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['orgName'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['level'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['memberCount'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['createTime'] + '</td>' +
            '<td class="td2" ><img src="' + on_off_path + '" class="mg-t5" onclick="toogle_partStatus(this)"></td>' +
            '<td class="td2 txt_center" ><a href="###" class="color_cf" onclick="modifyPart(this)">编辑</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="###" style="color:red" onclick="delPart(this)">删除</a></td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_roleM() {
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/role/queryRole.do",
    data: {
      orgId: $("#partment option:selected").val(),
      isManager: $("#isManager option:selected").val(),
      status: $("#status option:selected").val(),
      pageNum: currentPage,
      pageSize: 14
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2 txt_center" height="50px" colspan="6">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var isManager;
          if (data['body']['result']['data'][i]['isManager'] == 1) {
            isManager = "已标记";
          } else {
            isManager = "未标记";
          }
          var on_off_path;
          if (data['body']['result']['data'][i]['status'] == 0) {
            on_off_path = "http://app.changfanz.net:3588/changfa_file/off.png";
          } else {
            on_off_path = "http://app.changfanz.net:3588/changfa_file/on.png";
          }
          $("#adminTbody").append(
            "<tr id='" + data['body']['result']['data'][i]['roleId'] + "'>" +
            '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['roleName'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['orgName'] + '</td>' +
            '<td class="td2 txt_center" >' + isManager + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['createTime'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['count'] + '</td>' +
            '<td class="td2" ><img src="' + on_off_path + '" class="mg-t5" onclick="toogle_roleStatus(this)"></td>' +
            '<td class="td2 txt_center" ><a href="###" class="color_cf" onclick="menuLimitSetApp(this)">app</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="###" class="color_cf" onclick="menuLimitSet(this)">web</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="###" class="color_cf" onclick="menuLimitSetPart(this)">配件</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="###" class="color_cf" onclick="modifyRole(this)">编辑</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="###" style="color:red" onclick="delRole(this)">删除</a></td>' +
            '<td class="td2 txt_center" ><a href="###" class="color_cf" onclick="setDeliverScreenAuthor(this)">新增</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="###" class="color_cf" onclick="changeDeliverScreenAuthor(this)">修改</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp</td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_mebM() {
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/account/selectAllPeople.do",
    data: {
      chooseItem: $("#meb_item option:selected").val(),
      itemCont: $("#meb_info").val(),
      orgId: $("#partment option:selected").val(),
      status: $("#status option:selected").val(),
      pageNum: currentPage,
      pageSize: 14
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2 txt_center" height="50px" colspan="8">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var on_off_path;
          if (data['body']['result']['data'][i]['status'] == 0) {
            on_off_path = "http://app.changfanz.net:3588/changfa_file/off.png";
          } else {
            on_off_path = "http://app.changfanz.net:3588/changfa_file/on.png";
          }
          $("#adminTbody").append(
            "<tr id='" + data['body']['result']['data'][i]['userId'] + "'>" +
            '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['workNum'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['userName'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['mobile'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['orgName'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['roleName'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['createTime'] + '</td>' +
            '<td class="td2" ><img src="' + on_off_path + '" class="mg-t5" onclick="toogle_mebStatus(this)"></td>' +
            '<td class="td2 txt_center" ><a href="###" class="color_cf" onclick="modifyMeb(this)">编辑</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="###" class="color_cf" onclick="resetMebPassword(this)">重置密码</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="###" style="color:red" onclick="delMeb(this)">删除</a></td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_feedBack() {
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/feedback/getFeedback.do",
    data: {
      content: $("#content").val(),
      pageNum: currentPage,
      pageSize: 14,
      feedbackClassId: $("#type option:selected").val(),
      startTime: $("#date_start").val(),
      endTime: $("#date_end").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2" height="50px" colspan="6">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          if (data['body']['result']['data'][i]['filePath'].length != 0) {
            $("#adminTbody").append(
              "<tr id =" + data['body']['result']['data'][i]['id'] + ">" +
              '<td class="td2" height="33">' + data['body']['result']['data'][i]['userName'] + '</td>' +
              '<td class="td2" >' + data['body']['result']['data'][i]['userMobile'] + '</td>' +
              '<td class="td2" >' + data['body']['result']['data'][i]['feedbackClassName'] + '</td>' +
              '<td class="td2" style="width: 500px;word-break: break-all">' + data['body']['result']['data'][i]['content'] + '</td>' +
              '<td class="td2" ><img src="' + data['body']['result']['data'][i]['filePath'][0] + '" style="width: 40px;height: 30px;margin-top: 5px;" onclick="makeLarger(this)"></td>' +
              '<td class="td2" >' + data['body']['result']['data'][i]['createTime'] + '</td>' +
              '</tr>'
            );
          } else {
            $("#adminTbody").append(
              "<tr id =" + data['body']['result']['data'][i]['id'] + ">" +
              '<td class="td2" height="33">' + data['body']['result']['data'][i]['userName'] + '</td>' +
              '<td class="td2" >' + data['body']['result']['data'][i]['userMobile'] + '</td>' +
              '<td class="td2" >' + data['body']['result']['data'][i]['feedbackClassName'] + '</td>' +
              '<td class="td2" style="width: 500px;word-break: break-all">' + data['body']['result']['data'][i]['content'] + '</td>' +
              '<td class="td2" ></td>' +
              '<td class="td2" >' + data['body']['result']['data'][i]['createTime'] + '</td>' +
              '</tr>'
            );
          }
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_dealerMachine() {
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/user/queryDealerMachine.do",
    data: {
      pageNum: currentPage,
      pageSize: 14,
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2" height="50px" colspan="9">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var status;
          switch (data['body']['result']['data'][i]['status']) {
            case 1:
              status = "发往中";
              break;
            case 2:
              status = "在库中";
              break;
            case 6:
              status = "已销售";
              break;
          }

          $("#adminTbody").append(
            "<tr>" +
            '<td class="td2" height="33">' + data['body']['result']['data'][i]['province'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['dealerName'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['lineName'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['modelName'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['factoryNum'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['productTime'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['buyTime'] + '</td>' +
            '<td class="td2" >' + status + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['isAllot'] + '</td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_dealerUser() {
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/user/queryDealerUser.do",
    data: {
      pageNum: currentPage,
      pageSize: 14,
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2" height="50px" colspan="9">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          $("#adminTbody").append(
            "<tr>" +
            '<td class="td2" height="33">' + data['body']['result']['data'][i]['province'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['dealerName'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['lineName'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['modelName'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['factoryNum'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['buyTime'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['userName'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['userMobile'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['address'] + '</td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_overWarning() {
  var imei;
  var barCode;
  var factoryNum;
  if ($("#warnM_item option:selected").val() == "factoryNum") {
    factoryNum = $("#warnM_info").val();
    barCode = "";
    imei = "";
  } else if ($("#warnM_item option:selected").val() == "barCode") {
    barCode = $("#warnM_info").val();
    factoryNum = "";
    imei = "";
  } else {
    imei = $("#warnM_info").val();
    factoryNum = "";
    barCode = "";
  }

  jQuery.support.cors = true;
  $.ajax({
    type: "get",
    url: "http://iot.changfanz.net:8085/api/v1/machinery/getCarAlarmList",
    data: {
      imei: imei,
      carBar: barCode,
      factoryNumber: factoryNum,
      page: currentPage,
      pageSize: 14,
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          "<tr align='center'>" +
          '<td class="td2" height="50px" colspan="9">未查到相关信息</td>' +
          '</tr>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['pageIndex'];
        if (data['body']['totalCount'] % 14 == 0) {
          totalPage = data['body']['totalCount'] / 14;
        } else {
          totalPage = parseInt(data['body']['totalCount'] / 14 + 1);
        }
        totalData = data['body']['totalCount'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['resultList'].length; i++) {
          $("#adminTbody").append(
            "<tr>" +
            '<td class="td2" height="33">' + data['body']['resultList'][i]['CarName'] + '</td>' +
            '<td class="td2">' + data['body']['resultList'][i]['IMEI'] + '</td>' +
            '<td class="td2">' + data['body']['resultList'][i]['FactoryNumber'] + '</td>' +
            '<td class="td2">' + data['body']['resultList'][i]['BarCode'] + '</td>' +
            '<td class="td2">' + data['body']['resultList'][i]['OutFenceNum'] + '</td>' +
            '<td class="td2">' + data['body']['resultList'][i]['OutFenceDate'] + '</td>' +
            '<td class="td2">' + data['body']['resultList'][i]['OutFenceTime'] + '</td>' +
            '<td class="td2">' + data['body']['resultList'][i]['CarState'] + '</td>' +
            '<td class="td2 txt_center" ><a href="###" class="color_cf" onclick="warningHistory(this)">报警记录</a></td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    },
  });
}

function ajax_dealer() {
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/user/queryDealerDetail.do",
    data: {
      pageNum: currentPage,
      pageSize: 14,
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2" height="50px" colspan="9">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var type;
          if (data['body']['result']['data'][i]['location'] == null) {
            data['body']['result']['data'][i]['location'] = ' ';
          };
          switch (data['body']['result']['data'][i]['type']) {
            case 0:
              type = "";
              break;
            case 1:
              type = "总公司";
              break;
            case 2:
              type = "服务站";
              break;
            case 3:
              type = "二级商";
              break;
            case 4:
              type = "仓库";
              break;
          }
          $("#adminTbody").append(
            "<tr>" +
            '<td class="td2" height="33">' + type + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['dealerNum'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['dealerName'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['province'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['city'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['county'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['dealerAddress'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['radius'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['location'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['userName'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['userMobile'] + '</td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_faultSys() {
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/repair/getMachineSys.do",
    data: {
      machineNo: $(window.document).find("input[type='radio']:checked")[0]['id']
    },
    dataType: "json",
    success: function (data) {
      $("#sysList").empty();
      for (var i = 0; i < data['body']['resultList']['length']; i++) {
        $("#sysList").append(
          '<div class="big-box category-box">' +
          '<div class="big-category category">' +
          '<div class="btns">' +
          '<a><img src="img/icon_edit.png"  alt="' + data['body']['resultList'][i]['id'] + '" onclick="editFaultSystem(this)"/></a>' +
          '<a><img src="img/icon_close.png"  alt="' + data['body']['resultList'][i]['id'] + '" onclick="deleteFaultSystem(this)"/></a>' +
          '</div>' +
          '<input type="text" readonly="readonly" value="' + data['body']['resultList'][i]['faultName'] + '"  style="outline: none;"/>' +
          '</div>' +
          '</div>'
        );
      }
    }
  });
}

function ajax_faultModel() {
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/repair/getFaults.do",
    data: {
      machineNo: $(window.document).find("input[type='radio']:checked")[0]['id'],
      reportType: 1
    },
    dataType: "json",
    success: function (data) {
      $("#modelList").empty();
      for (var i = 0; i < data['body']['resultList']['length']; i++) {
        $("#modelList").append(
          '<div class="big-box category-box">' +
          '<div class="big-category category">' +
          '<div class="btns">' +
          '<a><img src="img/icon_edit.png"  alt="' + data['body']['resultList'][i]['id'] + '" onclick="editFaultModel(this)"/></a>' +
          '<a><img src="img/icon_close.png"  alt="' + data['body']['resultList'][i]['id'] + '" onclick="deleteFaultModel(this)"/></a>' +
          '</div>' +
          '<input type="text" readonly="readonly" value="' + data['body']['resultList'][i]['faultName'] + '"  style="outline: none;"/>' +
          '</div>' +
          '</div>'
        );
      }
    }
  });
}

function ajax_cfUserM() {
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/account/getUserInfos.do",
    data: {
      pageNum: currentPage,
      pageSize: 14,
      chooseItem: $("#dealer_item option:selected").val(),
      item: $("#dealer_info").val(),
      roleId: $("#role option:selected").val(),
      isCertifiedOwner: $("#signed option:selected").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2" height="50px" colspan="7">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        var on_off_path;
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          if (data['body']['result']['data'][i]['isCertifiedOwner'] == 0) {
            on_off_path = "http://app.changfanz.net:3588/changfa_file/off.png";
          } else {
            on_off_path = "http://app.changfanz.net:3588/changfa_file/on.png";
          }
          $("#adminTbody").append(
            "<tr id =" + data['body']['result']['data'][i]['userId'] + ">" +
            '<td class="td2" height="33">' + data['body']['result']['data'][i]['userName'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['workNum'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['mobile'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['roleName'] + '</td>' +
            '<td class="td2" ><img src="' + on_off_path + '" class="mg-t5" onclick="signVip(this)"></td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_fastRpt() {
  var option_product = $("#product option:selected").val();
  if (option_product == "") {
    option_product = null;
  }
  var begin_time = $("#date_start").val();
  if (begin_time == "") {
    begin_time = null;
  }
  var end_time = $("#date_end").val();
  if (end_time == "") {
    end_time = null;
  }
  var rep_info_type = $("#rep_guy option:selected").val();
  if (rep_info_type == "") {
    rep_info_type = null;
  }
  var rep_info = $("#rep_info").val();
  if (rep_info == "") {
    rep_info = null;
  }
  var rep_info_name;
  var rep_info_mobile;
  var rep_info_outNum;
  var rep_info_disNum;

  if (rep_info_name == "") {
    rep_info_name = null;
  }
  if (rep_info_mobile == "") {
    rep_info_mobile = null;
  }
  if (rep_info_outNum == "") {
    rep_info_outNum = null;
  }
  if (rep_info_disNum == "") {
    rep_info_disNum = null;
  }
  if (rep_info_type == "姓名") {
    rep_info_name = rep_info;
  }
  if (rep_info_type == "电话") {
    rep_info_mobile = rep_info;
  }
  if (rep_info_type == "出厂编号") {
    rep_info_outNum = rep_info;
  }
  if (rep_info_type == "派工单号") {
    rep_info_disNum = rep_info;
  }
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/reportRepair/queryReportInfo.do",
    data: {
      startTime: begin_time,
      endTime: end_time,
      repairStartTime: $("#repair_start").val(),
      repairEndTime: $("#repair_end").val(),
      type: $(window.parent.document).find("input[name='fastRptProcess']").val(),
      name: rep_info_name,
      mobile: rep_info_mobile,
      factoryNum: rep_info_outNum,
      disNum: rep_info_disNum,
      lineNum: option_product,
      examineType: $("#visitStatus option:selected").val(),
      chooseItem: $("#rpt_item option:selected").val(),
      itemCont: $("#rpt_info").val(),
      pageNum: currentPage,
      pageSize: 14
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2" height="50px" colspan="10">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];

        if (data['body']['result']['ruleSwitch'] == 1) {
          $("#autoDispatchingStatus").attr("src", "../img/startAutoDispatching.png");
          $("#autoDisTime").text(data['body']['result']['dispatchRuleTime']);
        } else {
          $("#autoDispatchingStatus").attr("src", "../img/closeAutoDispatching.png");
        }

        var status_charset;
        var visitStatus;
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var reportNumWarning;
          if (data['body']['result']['data'][i]['reportNumber'] == 1) {
            reportNumWarning = ""
          } else {
            reportNumWarning = "../img/moreThanOne.png"
          }
          var stat = data['body']['result']['data'][i]['status'];
          var examineType = data['body']['result']['data'][i]['examineType'];
          var closeStatus = data['body']['result']['data'][i]['closeStatus'];
          if (closeStatus != null) {
            status_charset = "派工关闭";
          } else {
            switch (stat) {
              case 0:
                status_charset = "已关闭";
                break;
              case -1:
                status_charset = "报修驳回";
                break;
              case 1:
                status_charset = "待派工";
                break;
              case 2:
                status_charset = "待接单";
                break;
              case 3:
                status_charset = "维修中";
                break;
              case 4:
                if (data['body']['result']['data'][i]['disStatus'] == 14) {
                  status_charset = "待终审";
                } else if (data['body']['result']['data'][i]['disStatus'] == 16) {
                  status_charset = "终审驳回";
                } else if (data['body']['result']['data'][i]['disStatus'] == 31) {
                  status_charset = "待初审";
                } else if (data['body']['result']['data'][i]['disStatus'] == 32) {
                  status_charset = "初审驳回";
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
                status_charset = "已完成";
                break;
              case 14:
                status_charset = "待审核";
                break;
              case 16:
                status_charset = "维修驳回";
                break;
              case 15:
                status_charset = "已完成";
                break;
              case 6:
                status_charset = "已完成";
                break;
            }
          }

          switch (examineType) {
            case 0:
              visitStatus = "未回访";
              break;
            case 1:
              visitStatus = "已完成";
              break;
            case 2:
              visitStatus = "未完成";
              break;
            case 3:
              visitStatus = "违规";
              break;
            case 4:
              visitStatus = "默认完工";
              break;
          }
          $("#adminTbody").append(
            "<tr align='center'id =" + data['body']['result']['data'][i]['reportId'] + ">" +
            "<td class='td2' height='33'>" + data['body']['result']['data'][i]['name'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['mobile'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['lineName'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['modelName'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['factoryNum'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['reportTime'] + "</td>" +
            "<td class='td2'  style=\"width: auto;word-warp:break-word;word-break:break-all\">" + data['body']['result']['data'][i]['description'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['disName'] + "</td>" +
            "<td class='td2' >" + data['body']['result']['data'][i]['repairName'] + "</td>" +
            "<td class='td2' >" + status_charset + "</td>" +
            "<td class='td2' >" + visitStatus + "</td>" +
            "<td class='td2' ><img src='" + reportNumWarning + "'></td>" +
            "<td class='td2' ><a href='###' class='color_cf' onclick='showRepairNeedDetails(this)'>查看</a></td>" +
            "</tr>"
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_integralLimitM() {
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/score/queryTurnScore.do",
    data: {
      pageNum: currentPage,
      pageSize: 14,
      turnOutRoleId: $("#turnOutRoleId option:selected").val(),
      turnInRoleId: $("#turnInRoleId option:selected").val(),
      status: $("#status option:selected").val(),
      turnStatus: $("#turnStatus option:selected").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2" height="50px" colspan="7">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        var on_off_path;
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var turnStatus;
          if (data['body']['result']['data'][i]['turnStatus'] == 1) {
            turnStatus = "有权限";
          } else {
            turnStatus = "无权限";
          }
          if (data['body']['result']['data'][i]['status'] == 0) {
            on_off_path = "http://app.changfanz.net:3588/changfa_file/off.png";
          } else {
            on_off_path = "http://app.changfanz.net:3588/changfa_file/on.png";
          }
          $("#adminTbody").append(
            "<tr id =" + data['body']['result']['data'][i]['id'] + ">" +
            '<td class="td2" height="33">' + data['body']['result']['data'][i]['turnOutName'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['turnInName'] + '</td>' +
            '<td class="td2" >' + turnStatus + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['todayOneLimit'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['todayRoleLimit'] + '</td>' +
            '<td class="td2" ><img src="' + on_off_path + '" class="mg-t5" onclick="toogle_limitStatus(this)"></td>' +
            "<td class='td2' ><a href='###' class='color_cf' onclick='editTopLimit(this)'>编辑</a></td>" +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

var pag_dev;
var page_work;
var totalPage_work;
var totalData_work;
var totalPage_dev;
var totalData_dev;
//农机行驶轨迹
function ajax_machineWorkM() {
  if ($("#imei").text()) {
    $.ajax({
      type: "get",
      async: false,
      url: ip_path + "/changfa_system/api/getCarTripAllList.do",
      //url:'http://172.28.1.19:8085/api/v1/foreign/getTripListWeb',
      data: {
        start_time: $("#date_start").val(),
        end_time: $("#date_end").val(),
        //bar_code : '701660321903903622',
        bar_code: $(window.parent.document).find("input[name='barCode']").val(),
        pageNum: page_work,
        pageSize: 5
      },
      dataType: "json",
      success: function (data) {
        if (data['head']['code'] != 200) {
          $("#workList").empty();
          $("#workList").append(
            '<td class="td2 txt_center" height="50px" colspan="4">未查到相关信息</td>'
          );
          document.getElementById("barcon1_s").innerHTML = "";
          // currentPage2 = 0;
          // totalPage2 = 0;
          // totalData2 = 0;
          // $("#adminTbody2").empty();
          // pageSplit_s();
          // hideOrShow_s();
        } else {
          if(data['body']['result']['total'] == 0){
            page_work = 0;
            totalPage_work = 0;
          }else{
            page_work = data['body']['result']['pageNum'];
            if (data['body']['result']['total'] % data['body']['result']['pageSize'] == 0) {
              totalPage_work = data['body']['result']['total'] / data['body']['result']['pageSize'];
            } else {
              totalPage_work = Math.ceil(data['body']['result']['total'] / data['body']['result']['pageSize']);
            }
          }


          totalData_work = data['body']['result']['total'];
          $("#workList").empty();
          for (var i = 0; i < data['body']['result']['data'].length; i++) {
            $("#workList").append(
              "<tr >" +
              '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['date'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['distance'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['time'] + '</td>' +
              "<td class='td2 txt_center' ><a href='###' class='color_cf' onclick='showMachineMove(this)'>查看</a></td>" +
              '</tr>'
            );
          }
          pageSplit_s();
          hideOrShow_s();
        }
      }
    });
  } else {
    return;
  }
}


  //工时异常处理（档案）
  function abnormalnr() {
    let workhour = $('#worktime').val();
    let worktime = $('#date_start_ve').val();
    if(workhour == ''){
        alert('请输入工作时长')
    }else if(worktime == ''){
        alert('选择时间')
    }else{
        $.ajax({
            type : "post",
            async : false,
            url : ip_path + "/changfa_system/maintenanceWorkHour/insert.do",
            data : {
                token:$(window.parent.parent.document).find("input[name='token']").val(),
                barCode:$(window.parent.document).find("input[name='barCode']").val(),
                workHour:workhour,
                date:worktime,
            },
            dataType : "json",
            success : function (data) {
              $('#worktime').val('');
              $('#date_start_ve').val('');
              alert('添加成功');
              showMachinehis();
              getgongshichuli();
                //console.log(data)
            }
        })
    }
  }
  //工时（车辆明细）
  function abnormalnr1() {
    let workhour = $('#worktime').val();
    let worktime = $('#date_start_ve').val();
    if(workhour == ''){
        alert('请输入工作时长')
    }else if(worktime == ''){
        alert('选择时间')
    }else{
        $.ajax({
            type : "post",
            async : false,
            url : ip_path + "/changfa_system/maintenanceWorkHour/insert.do",
            data : {
                token:$(window.parent.parent.document).find("input[name='token']").val(),
                barCode:$(window.parent.document).find("input[name='barCode']").val(),
                workHour:workhour,
                date:worktime,
            },
            dataType : "json",
            success : function (data) {
              $('#worktime').val('');
              $('#date_start_ve').val('');
              alert('添加成功');
              showMachinehis();
              getgongshichuli1();
                //console.log(data)
            }
        })
    }
  }
  
  //车辆明细
  function getgongshichuli1(){
    $.ajax({
      type : "post",
              async : false,
              url : ip_path+"/changfa_system/userMachine/queryMachineById.do",
              data : {
                  userId : $(window.parent.document).find("input[name='userId']").val(),
                  machineId : $(window.parent.document).find("input[name='machineId']").val()
              },
              dataType : "json",
              success : function (data) {
                if(data['head']['code'] == 200){
                  if(data['body']['result']['workHour']){
                    $('#workshijian').text(data['body']['result']['workHour']);
                  }
                }
              }
    })
  }
  //农机档案
  function getgongshichuli(){
    $.ajax({
      type : "post",
              async : false,
              url : ip_path+"/changfa_system/userMachine/queryMachineById.do",
              data : {
                  userId : $(window.parent.document).find("input[name='userArchivesId']").val(),
                  machineId : $(window.parent.document).find("input[name='machineId']").val()
              },
              dataType : "json",
              success : function (data) {
                if(data['head']['code'] == 200){
                  if(data['body']['result']['workHour']){
                    $('#workshijian').text(data['body']['result']['workHour']);
                  }
                }
              }
    })
  }
  //历史
  var page_his;
  var totalPage_his;
  var totalData;
  function showMachinehis(){
    $.ajax({
        type:"get",
        async: false,
        url: ip_path + "/changfa_system/maintenanceWorkHourHistory/page.do",
        data:{
            token:$(window.parent.document).find("input[name='token']").val(),
            barCode:$(window.parent.document).find("input[name='barCode']").val(),
            pageNum:page_his,
            pageSize:6,
        },
        dataType:"json",
        success:function(data) {
            //console.log(data)
            if (data['body']['result']['data']=='') {
                $("#repListhistory").empty();
                $("#repListhistory").append(
                    '<td class="td2 txt_center" height="50px" colspan="3">未查到相关信息</td>'
                );
                page_his = 0;
                totalPage_his = 0;
                totalData = 0;
                pageSplitls();
                hideOrShowls();
                document.getElementById("barcon1ls").innerHTML = "";
            }else{
                page_his = data['body']['result']['pageNum'];
                totalPage_his = data['body']['result']['pages'];
                totalData = data['body']['result']['total'];
                $("#repListhistory").empty();
                for(var i=0;i< data['body']['result']['data'].length; i++ ){
                    $("#repListhistory").append(
                    '<tr text-align="center">'+
                        '<td height="33" class="td2" style="text-align:center;">'+data['body']['result']['data'][i]['currentWorkHour']+'</td>'+
                        '<td class="td2" height="33" style="text-align:center;">'+data['body']['result']['data'][i]['workHour']+'</td>'+
                        '<td class="td2" height="33" style="text-align:center;">'+data['body']['result']['data'][i]['date']+'</td>'+
                    '</tr>'
                );
                }
                pageSplitls();
                hideOrShowls();
            }   
        }
    })
  }
  
  function pageSplitls() {
    var tempStr = "当前第<span style='color: red'>" + page_his + "</span>页&nbsp;/&nbsp;共<span style='color: red'>" + totalPage_his + "</span>页&nbsp;/&nbsp;共<span style='color: red'>" + totalData + "</span>条";
    document.getElementById("barcon1ls").innerHTML = tempStr;
  }
  function hideOrShowls() {
    if (page_his == 1) {
        $("#firstPagels").attr("disabled", true);
        $("#prePagels").attr("disabled", true);
    } else {
        $("#firstPagels").removeAttr("disabled");
        $("#prePagels").removeAttr("disabled");
    }
    if (page_his == totalPage_his) {
        $("#lastPagels").attr("disabled", true);
        $("#nextPagels").attr("disabled", true);
    } else {
        $("#lastPagels").removeAttr("disabled");
        $("#nextPagels").removeAttr("disabled");
    }
  }
  
  //异常记录
  var page_jilu;
  var totalPage_jilu;
  var totalData;
  function showMachinejilu(){
    $.ajax({
        type:"get",
        async: false,
        url: ip_path + "/changfa_system/maintenanceRecord/page.do",
        data:{
            token:$(window.parent.document).find("input[name='token']").val(),
            barCode:$(window.parent.document).find("input[name='barCode']").val(),
            processStatus:2,
            pageNum:page_jilu,
            pageSize:6,
        },
        dataType:"json",
        success:function(data) {
            console.log(data)
            if (data['body']['result']['data']=='') {
                $("#repListrecorld").empty();
                $("#repListrecorld").append(
                    '<td class="td2 txt_center" height="50px" colspan="5">未查到相关信息</td>'
                );
                page_jilu = 0;
                totalPage_jilu = 0;
                totalData = 0;
                pageSplitjilu();
                hideOrShowjilu();
                document.getElementById("barcon1yc").innerHTML = "";
            }else{
              page_jilu = data['body']['result']['pageNum'];
              totalPage_jilu = data['body']['result']['pages'];
              totalData = data['body']['result']['total'];
                $("#repListrecorld").empty();
  
                for(var i=0;i< data['body']['result']['data'].length; i++ ){
                  let laiyuan = data['body']['result']['data'][i]['state'];
                  let ly;
                  if(laiyuan == 1){
                    ly = '手工保养记录'
                  }else{
                    ly = '维修单'
                  }
                    $("#repListrecorld").append(
                      //$("#recordId").val(data['body']['result']['data'][i]['recordId']),
                    '<tr text-align="center" class="jilu" data-id="'+data['body']['result']['data'][i]['recordId']+'">'+
                        '<td height="33" class="td2" style="text-align:center;">'+data['body']['result']['data'][i]['currentWorkHour']+'</td>'+
                        '<td class="td2" height="33" style="text-align:center;">'+data['body']['result']['data'][i]['workHour']+'</td>'+
                        '<td class="td2" height="33" style="text-align:center;">'+data['body']['result']['data'][i]['time']+'</td>'+
                        '<td class="td2" height="33" id="liyuan" style="text-align:center;">'+ly+'</td>'+
                        '<td class="td2" height="33" style="text-align:center;">'+
                        '<input class="radio_type" type="radio" name="'+'radio'+[i]+'" id="'+'radio'+[i]+'" onclick="toogleradio(this)"/> '
                        +'</td>'+
                        
                    '</tr>'
                );
                }
                pageSplitjilu();
                hideOrShowjilu();
            }   
        }
    })
  }
  //解除报警
  function jiechu(){
    let recordIds = [];
    $('#repListrecorld tr td .radio_type').each(function(){
      if($(this).attr("checked")=="checked"){
        recordIds.push($(this).parent().parent().attr('data-id'))
      }
    })
    //$(".jilu").each(function(){
    //  recordIds.push($(this).attr('data-id'));
    //})
    //console.log(recordIds)
    let json = {
      'token':$(window.parent.document).find("input[name='token']").val(),
      'recordIds':recordIds,
    }
    if(recordIds !=''){
      $.ajax({
        type:"post",
        //async:false,
        url:ip_path + "/changfa_system/maintenanceRecord/updateProcessStatus.do",
        //data:{
        //  "token":$(window.parent.document).find("input[name='token']").val(),
        //  "recordIds":[1,2,3,4]
        //},
        data: JSON.stringify(json),
        dataType:"json",
        contentType: 'application/json',
        success:function(data) {
          showMachinejilu()
          //console.log(data)
        }
    
      })
    }else{
      alert('请选择记录')
    }
    
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
  
  //全选
  function selectall(){
      $("#repListrecorld tr td .radio_type").each(function(){
        /*if($(this).attr("checked")=="checked"){
          $(this).attr("checked",false);
          $(this).removeClass("radio_types");
        }else{
          $(this).attr("checked",true);
          $(this).addClass('radio_types');
        };*/
        $(this).attr("checked",true);
        $(this).addClass("radio_types");
      })
  }
  
  
  
  function pageSplitjilu() {
    var tempStr = "当前第<span style='color: red'>" + page_jilu + "</span>页&nbsp;/&nbsp;共<span style='color: red'>" + totalPage_jilu + "</span>页&nbsp;/&nbsp;共<span style='color: red'>" + totalData + "</span>条";
    document.getElementById("barcon1yc").innerHTML = tempStr;
  }
  function hideOrShowjilu() {
    if (page_jilu == 1) {
        $("#firstPageyc").attr("disabled", true);
        $("#prePageyc").attr("disabled", true);
    } else {
        $("#firstPageyc").removeAttr("disabled");
        $("#prePageyc").removeAttr("disabled");
    }
    if (page_jilu == totalPage_jilu) {
        $("#lastPageyc").attr("disabled", true);
        $("#nextPageyc").attr("disabled", true);
    } else {
        $("#lastPageyc").removeAttr("disabled");
        $("#nextPageyc").removeAttr("disabled");
    }
  }
  


//农机维修历史
function ajax_machineRepHistory() {
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/repair/getRepairInfoByBarCode.do",
    data: {
      status: 15,
      barCode: $("#barCode").text(),
      pageNum: currentPage,
      pageSize: 5
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#repList").empty();
        $("#repList").append(
          '<td class="td2 txt_center" height="50px" colspan="6">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#repList").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          $("#repList").append(
            "<tr id =" + data['body']['result']['data'][i]['reportId'] + ">" +
            '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['userMobile'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['userName'] + '</td>' +
            '<td class="td2 txt_center" style="width: auto;word-warp:break-word;word-break:break-all">' + data['body']['result']['data'][i]['description'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['distance'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['workTime'] + '</td>' +
            "<td class='td2 txt_center' ><a href='###' class='color_cf' onclick='showRepairNeedDetailsuad(this)'>查看</a></td>" +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

//销售订单
//当前选中产品型号id
var modelId;
//当前第二层第三层编号
var seriesNum;
var modelNum;

function ajax_modelConfigList() {
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/config/queryMachineConfig.do",
    data: {
      modelNum: modelId,
      number: $("#productNum").val(),
      pageNum: currentPage2 ||1,
      pageSize: 20
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] == 200) {
        currentPage2 = data['body']['result']['pageNum'];
        totalPage2 = data['body']['result']['pages'];
        totalData2 = data['body']['result']['total'];
        $("#adminTbody2").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var type;
          if (data['body']['result']['data'][i]['type'] && data['body']['result']['data'][i]['type'] == 1) {
            type = '<input type="radio" checked disabled />';
          } else {
            type = '<input type="radio" disabled/>';
          }
          $("#adminTbody2").append(
            "<tr id =" + data['body']['result']['data'][i]['id'] + ">" +
            '<td class="td2" height="33"><input type="checkbox" alt="' + data['body']['result']['data'][i]['number'] + '" name="saleType" value="' + data['body']['result']['data'][i]['number'] + '"/></td>' +
            '<td class="td2" height="33">' + data['body']['result']['data'][i]['number'] + '</td>' +
            '<td class="td2" height="33" style="display:none">' + data['body']['result']['data'][i]['price'] + '</td>' +
            '<td class="td2" height="33">' + data['body']['result']['data'][i]['price'] + '</td>' +
            // "<td class='td2' ><a href='###' style='color:#1ABC9C' onclick='viewConfigDetail(this)'>查看</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='###' style='color:red' onclick='delConfig(this)'>删除</a></td>" +
            '<td class="td2" alt="' + data['body']['result']['data'][i]['type'] + '">' + type + '</td>' +
            '<td class="td2 txt_left">' + data['body']['result']['data'][i]['des'] + '</td>' +
            // '<td class="td2" ><img src="'+on_off_path+'" class="mg-t5" onclick="toogle_limitStatus(this)"></td>'+
            '</tr>'
          );
          seriesNum = data['body']['result']['data'][i]['seriesNum']
          modelNum = data['body']['result']['data'][i]['modelNum']

        }
        pageSplit_d();
        hideOrShow_d();
      } else {
        currentPage2 = 0;
        totalPage2 = 0;
        totalData2 = 0;
        $("#adminTbody2").empty();
        pageSplit_d();
        hideOrShow_d();
      }
    }
  });
}

//计划订单列表
function ajax_salePlanM() {

    //判断经销商
    var url;
    if(appRoleList.indexOf($(window.parent.document).find("input[name='roleId']").val()) != -1){
      url = "/changfa_system/config/selectSalePlanForDealer.do";
    }else{
      url = "/changfa_system/config/selectSalePlan.do";
    }

  $.ajax({
    type: "post",
    async: false,
    url: ip_path + url,
    data: {
      lineNum: $("#line option:selected").val(),
      chooseItem: $("#order_item option:selected").val(),
      itemCont: $("#order_info").val(),
      status: $("#status option:selected").val(),
      startTime: $("#date_start").val(),
      endTime: $("#date_end").val(),
      startTime1: $("#create_date_start").val(),
      endTime1: $("#create_date_end").val(),
      pageNum: currentPage,
      pageSize: 14,
      userId:$(window.parent.document).find("input[name='userId']").val(),
      type:1
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] == 200) {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var status;
          console.log(data['body']['result']['data'][i]);
          switch (data['body']['result']['data'][i]['status']) {
            case 0:
              status = "待初审";
              break;
            case -1:
              status = "初审驳回";
              break;
            case 1:
              status = "待终审";
              break;
            case -2:
              status = "终审驳回";
              break;
            case 2:
              status = "终审通过";
              break;
          }

          $("#adminTbody").append(
            "<tr id =" + data['body']['result']['data'][i]['id'] + ">" +
            '<td class="td2" height="33">' + data['body']['result']['data'][i]['planNo'] + '</td>' +
            '<td class="td2">' + data['body']['result']['data'][i]['lineName'] + '</td>' +
            '<td class="td2">' + data['body']['result']['data'][i]['dealerNum'] + '</td>' +
            '<td class="td2">' + data['body']['result']['data'][i]['dealerName'] + '</td>' +
            '<td class="td2">' + data['body']['result']['data'][i]['planDate'] + '</td>' +
            '<td class="td2">' + data['body']['result']['data'][i]['createTime'] + '</td>' +
            '<td class="td2">' + status + '</td>' +
            "<td class='td2' ><a href='###'  class='color_cf' onclick='showSalePlanDetails(this)'>查看</a></td>" +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      } else {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2 txt_center" height="50px" colspan="8">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      }
    }
  });
}

//销售订单列表
function ajax_saleOrderM() {

    //判断经销商
    var url;
    if(appRoleList.indexOf($(window.parent.document).find("input[name='roleId']").val()) != -1){
      url = "/changfa_system/config/selectSaleOrderForDealer.do";
    }else{
      url = "/changfa_system/config/selectSaleOrder.do";
    }

  $.ajax({
    type: "post",
    async: false,
    url: ip_path + url,
    data: {
      lineNum: $("#line option:selected").val(),
      chooseItem: $("#order_item option:selected").val(),
      itemCont: $("#order_info").val(),
      status: $("#status option:selected").val(),
      startTime: $("#date_start").val(),
      endTime: $("#date_end").val(),
      startTime1: $("#create_date_start").val(),
      endTime1: $("#create_date_end").val(),
      pageNum: currentPage,
      pageSize: 14,
      type: $("#lifetype").val(),
      userId:$(window.parent.document).find("input[name='userId']").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] == 200) {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var status;

          switch (data['body']['result']['data'][i]['status']) {
            case 0:
              status = "待初审";
              break;
            case -1:
              status = "初审驳回";
              break;
            case 1:
              status = "待终审";
              break;
            case -2:
              status = "终审驳回";
              break;
            case 2:
              status = "终审通过";
              break;
          }
          var type;
          if (data['body']['result']['data'][i]['type'] == 1) {
            type = '紧急订单';
          } else {
            type = '普通订单';
          }

          $("#adminTbody").append(
            "<tr id =" + data['body']['result']['data'][i]['id'] + ">" +
            '<td class="td2" height="33">' + data['body']['result']['data'][i]['orderNo'] + '</td>' +
            '<td class="td2" height="33">' + type + '</td>' +
            '<td class="td2">' + data['body']['result']['data'][i]['lineName'] + '</td>' +
            '<td class="td2">' + data['body']['result']['data'][i]['dealerNum'] + '</td>' +
            '<td class="td2">' + data['body']['result']['data'][i]['dealerName'] + '</td>' +
            '<td class="td2">' + data['body']['result']['data'][i]['takeTime'] + '</td>' +
            '<td class="td2">' + data['body']['result']['data'][i]['createTime'] + '</td>' +
            '<td class="td2">' + status + '</td>' +
            "<td class='td2' ><a href='###'  class='color_cf' onclick='showSaleOrderDetails(this)'>查看</a></td>" +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      } else {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2 txt_center" height="50px" colspan="9">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      }
    }
  });
}

function ajax_logisticsBiddingList() {
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/logistics/queryLogistics.do",
    data: {
      deliveryStartTime: $("#deliveryStartTime").val(),
      deliveryEndTime: $("#deliveryEndTime").val(),
      status: $("#status option:selected").val(),
      startAddress: $("#startAddress").val(),
      endAddress: $("#endAddress").val(),
      logisticsNum: $("#logisticsNum").val(),
      company: $("#company").val(),
      pageNum: currentPage,
      pageSize: 14,
      isCompetition: $('#competition').val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] == 200) {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var status;

          switch (data['body']['result']['data'][i]['status']) {
            case 1:
              status = "竞价中";
              break;
            case 2:
              status = "已结束";
              break;
            case 0:
              status = "已关闭";
              break;
          }

          $("#adminTbody").append(
            "<tr id =" + data['body']['result']['data'][i]['logisticsId'] + ">" +
            '<td class="td2" height="33">' + data['body']['result']['data'][i]['logisticsNum'] + '</td>' +
            '<td class="td2">' + data['body']['result']['data'][i]['startAddress'] + '</td>' +
            '<td class="td2">' + data['body']['result']['data'][i]['endAddress'] + '</td>' +
            '<td class="td2">' + data['body']['result']['data'][i]['deliveryTime'] + '</td>' +
            // '<td class="td2">' + data['body']['result']['data'][i]['modelName'] + '</td>' +
            '<td class="td2">' + data['body']['result']['data'][i]['dealerCompany'] + '</td>' +
            '<td class="td2">' + data['body']['result']['data'][i]['price'] + '</td>' +
            '<td class="td2">' + data['body']['result']['data'][i]['minPrice'] + '</td>' +
            '<td class="td2">' + status + '</td>' +
            "<td class='td2' ><a href='###'  class='color_cf' onclick='showLogisticsBiddingDetails(this)'>查看</a></td>" +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      } else {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2 txt_center" height="50px" colspan="9">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      }
    }
  });
}

function ajax_logisticsCompanyM() {
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/user/selectServiceUserInfo.do",
    data: {
      chooseItem: $("#logisticsCompany_item option:selected").val(),
      itemCont: $("#logisticsCompany_info").val(),
      roleId: 27,
      status: $("#status option:selected").val(),
      pageNum: currentPage,
      pageSize: 14
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2" height="50px" colspan="6">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        var on_off_path;
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          if (data['body']['result']['data'][i]['status'] == 0) {
            on_off_path = "http://app.changfanz.net:3588/changfa_file/off.png";
          } else {
            on_off_path = "http://app.changfanz.net:3588/changfa_file/on.png";
          }
          $("#adminTbody").append(
            "<tr id =" + data['body']['result']['data'][i]['userId'] + ">" +
            '<td class="td2" height="33">' + data['body']['result']['data'][i]['company'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['workNum'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['userName'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['mobile'] + '</td>' +
            '<td class="td2" ><img src="' + on_off_path + '" class="mg-t5" onclick="toogle_logisticsCompanyStatus(this)"></td>' +
            '<td class="td2" ><a href="###"  class="color_cf" onclick="showLogisticsCompanyDetails(this)">查看</a></td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

function ajax_company_personM() {
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/account/queryRepairManByAdmin.do",
    data: {
      pageNum: currentPage,
      pageSize: 7,
      userId: $(window.parent.parent.document).find("input[name='logisticsCompanyId']").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200 || data.body.result.data.length==0) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2 txt_center" height="50px" colspan="6">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          var path;
          if (data['body']['result']['data'][i]['headUrl'] != "") {
            path = data['body']['result']['data'][i]['headUrl'];
          } else {
            path = "http://app.changfanz.net:3588/changfa_file/head.png"
          }

          var on_off_path;
          if (data['body']['result']['data'][i]['status'] == 0) {
            on_off_path = "http://app.changfanz.net:3588/changfa_file/off.png";
          } else {
            on_off_path = "http://app.changfanz.net:3588/changfa_file/on.png";
          }
          $("#adminTbody").append(
            "<tr id =" + data['body']['result']['data'][i]['userId'] + ">" +
            '<td class="td2 txt_center" height="60px"><img src="' + path + '" class="pic_circle"></td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['userName'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['mobile'] + '</td>' +
            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['createTime'] + '</td>' +
            '<td class="td2 txt_center" ><img src="' + on_off_path + '" class="mg-t5" onclick="toogle_logisticsPersonStatus(this)"></td>' +
            '<td class="td2 txt_center" ><a href="###"  class="color_cf" onclick="editLogisticsPerson(this)">编辑</a></td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

//自动派工
function ajax_autoDisM() {
  $.ajax({
    type: "post",
    url: ip_path + "/changfa_system/autoDispatch/queryAutoDispatchRule.do",
    data: {
      pageNum: currentPage,
      pageSize: 14,
      status: $("#status option:selected").val()
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2" height="50px" colspan="7">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];
        var on_off_path;
        var autoStatus;
        if (data['body']['result']['ruleSwitch'] == 1) {
          autoStatus = "http://app.changfanz.net:3588/changfa_file/on.png";
        } else {
          autoStatus = "http://app.changfanz.net:3588/changfa_file/off.png";
        }
        $("#autoDis").attr("src", autoStatus);

        $("#adminTbody").empty();
        for (var i = 0; i < data['body']['result']['data'].length; i++) {
          if (data['body']['result']['data'][i]['status'] == 0) {
            on_off_path = "http://app.changfanz.net:3588/changfa_file/off.png";
          } else {
            on_off_path = "http://app.changfanz.net:3588/changfa_file/on.png";
          }
          $("#adminTbody").append(
            "<tr id =" + data['body']['result']['data'][i]['id'] + ">" +
            '<td class="td2" height="33">' + data['body']['result']['data'][i]['id'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['ruleName'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['ruleContent'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['creatorName'] + '</td>' +
            '<td class="td2" >' + data['body']['result']['data'][i]['createTime'] + '</td>' +
            '<td class="td2" ><img src="' + on_off_path + '" class="mg-t5" onclick="toogle_autoRuleStatus(this)"></td>' +
            '<td class="td2" ><a href="###" onclick="editAutoDisRule(this)" class="color_cf">编辑</a></td>' +
            '</tr>'
          );
        }
        pageSplit();
        hideOrShow();
      }
    }
  });
}

//故障代码维护

function ajax_errorCodeManage() {
  $.ajax({
    type: "get",
    url: ip_path + "/changfa_system/errorCode/page.do",
    data: {
      pageNum: currentPage,
      pageSize: 14,
      token: $(window.parent.document).find("input[name='token']").val(),
      line:$("#line").val(),
      engine:$("#type").val(),
    },
    dataType: "json",
    success: function (data) {
      if (data['head']['code'] != 200) {
        $("#adminTbody").empty();
        $("#adminTbody").append(
          '<td class="td2" height="50px" colspan="6">未查到相关信息</td>'
        );
        document.getElementById("barcon1").innerHTML = "";
      } else {
        currentPage = data['body']['result']['pageNum'];
        totalPage = data['body']['result']['pages'];
        totalData = data['body']['result']['total'];

        $("#adminTbody").empty();
        data['body']['result'].data.forEach(elem => {
          $("#adminTbody").append(
            "<tr id =" + elem.id + ">" +
            '<td class="td2" height="33">' + elem.code + '</td>' +
            '<td class="td2" >' + elem.name + '</td>' +
            '<td class="td2" >' + elem.line + '</td>' +
            '<td class="td2" >' + elem.engine + '</td>' +
            '<td class="td2" ><a href="###" onclick="lookpropErrorCode(this)" class="color_cf">查看详情</a></td>' +
            '<td class="td2" >    <img src="img/service_unselect.png" alt="" class="change" onclick="chooseSelect(this)"></td>' +
            '</tr>'
          );
        });
        
        pageSplit();
        hideOrShow();
      }
    }
  });
}
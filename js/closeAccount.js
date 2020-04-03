function ajax_costDealer10() {
    var province;
    if ($("#province option:selected").val() == 0) {
      province = "";
    } else {
      province = $("#province option:selected").text();
    }
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/account/queryDealersOrServicers.do",
      data: {
        chooseItem: $("#dealer_item option:selected").val(),
        itemCont: $("#dealer_info").val(),
        status: $("#status option:selected").val(),
        pageNum: currentPage,
        province: province,
        isJudge: $("#isJudge option:selected").val(),
        isJudgeRepair: $("#isJudgeRepair option:selected").val(),
        isJudgeRebut:$("#isJudgeRebut option:selected").val(),
        startTime:$("#date_start").val(),
        endTime:$("#date_end").val(),
        type:10,
        pageSize: 14
      },
      dataType: "json",
      success: function (data) {
        if (data['head']['code'] != 200) {
          $("#adminTbody").empty();
          $("#adminTbody").append(
            '<td class="td2 txt_center" height="50px" colspan="12">未查到相关信息</td>'
          );
          document.getElementById("barcon1").innerHTML = "";
        } else {
          currentPage = data['body']['result']['pageNum'];
          totalPage = data['body']['result']['pages'];
          totalData = data['body']['result']['total'];
          $("#adminTbody").empty();
          for (var i = 0; i < data['body']['result']['data'].length; i++) {
            var judge;
            if (data['body']['result']['data'][i]['judge'] == 0) {
              judge = "否";
            } else {
              judge = "是";
            }
  
            // var type;
            // if (data['body']['result']['data'][i]['type'] == 9) {
            //   type = "经销商";
            // } else {
            //   type = "服务站";
            // }
            $("#adminTbody").append(
              '<tr id="'+ data['body']['result']['data'][i]['roleId'] +'">' +
              '<td class="td2" height="33">' + data['body']['result']['data'][i]['dealerName'] + '</td>' +
              '<td class="td2">' + data['body']['result']['data'][i]['dealerNum'] + '</td>' +
              '<td class="td2">' + data['body']['result']['data'][i]['roleName'] + '</td>' +
              '<td class="td2">' + data['body']['result']['data'][i]['dealerProvince'] + '</td>' +
              '<td class="td2">' + data['body']['result']['data'][i]['repairMoney'] + '</td>' +
              '<td class="td2">' + data['body']['result']['data'][i]['waitSettled'] + '</td>' +
              '<td class="td2">' + data['body']['result']['data'][i]['alreadySettled'] + '</td>' +
              '<td class="td2">' + data['body']['result']['data'][i]['billMoney'] + '</td>' +
              '<td class="td2">' + judge + '</td>' +
              '<td class="td2"><a href="###" class="color_cf" onclick="createCostSum(this)">生成结算单</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="###" class="color_cf" onclick="showDealerCostSum(this)">结算记录</a></td>' +
              '<td class="td2"><a href="###" class="color_cf" onclick="createDealerCostPay(this)">生成付款单</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="###" class="color_cf" onclick="showDealerCostPay(this)">付款记录</a></td>' +
              '<td class="td2"><a href="###" class="color_cf" onclick="createBalanceCostPay(this)">生成尾款单</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="###" class="color_cf" onclick="showBalanceCostPay(this)">尾款记录</a></td>' +
              '<td class="td2" style="display:none">' + data['body']['result']['data'][i]['dealerId'] + '</td>' +
              '</tr>'
            );
          }
          pageSplit();
          hideOrShow();
        }
      }
    });
  }
  
  function ajax_costDealer9() {
    var province;
    if ($("#province option:selected").val() == 0) {
      province = "";
    } else {
      province = $("#province option:selected").text();
    }
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/account/queryDealersOrServicers.do",
      data: {
        chooseItem: $("#dealer_item option:selected").val(),
        itemCont: $("#dealer_info").val(),
        status: $("#status option:selected").val(),
        pageNum: currentPage,
        province: province,
        isJudge: $("#isJudge option:selected").val(),
        isJudgeRepair: $("#isJudgeRepair option:selected").val(),
        isJudgeRebut:$("#isJudgeRebut option:selected").val(),
        type:'',
        pageSize: 14
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
            var judge;
            if (data['body']['result']['data'][i]['judge'] == 0) {
              judge = "否";
            } else {
              judge = "是";
            }
  
            // var type;
            // if (data['body']['result']['data'][i]['type'] == 9) {
            //   type = "经销商";
            // } else {
            //   type = "服务站";
            // }
            $("#adminTbody").append(
              '<tr id="'+ data['body']['result']['data'][i]['roleId'] +'">' +
              '<td class="td2" height="33">' + data['body']['result']['data'][i]['dealerName'] + '</td>' +
              '<td class="td2">' + data['body']['result']['data'][i]['dealerNum'] + '</td>' +
              '<td class="td2">' + data['body']['result']['data'][i]['roleName'] + '</td>' +
              '<td class="td2">' + data['body']['result']['data'][i]['dealerProvince'] + '</td>' +
              '<td class="td2">' + data['body']['result']['data'][i]['waitSettled'] + '</td>' +
              '<td class="td2">' + data['body']['result']['data'][i]['alreadySettled'] + '</td>' +
              '<td class="td2">' + judge + '</td>' +
              '<td class="td2"><a href="###" class="color_cf" onclick="createCostSum(this)">生成结算单</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="###" class="color_cf" onclick="showDealerCostSum2(this)">结算记录</a></td>' +
              '<td class="td2"><a href="###" class="color_cf" onclick="createDealerCostPay(this)">生成付款单</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="###" class="color_cf" onclick="showDealerCostPay(this)">付款记录</a></td>' +
  
              '<td class="td2" style="display:none">' + data['body']['result']['data'][i]['dealerId'] + '</td>' +
              
              '</tr>'
            );
          }
          pageSplit();
          hideOrShow();
        }
      }
    });
  }

  function createCostSum(event) {
    $(window.parent.document).find("input[name='dealerId']").val(event.parentNode.parentNode.childNodes[1].innerHTML);
    window.open("createCostSum.html", "_self");
  }

  function ajax_createCostSum_detail() {
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/repair/getServiceRepairs.do",
      data: {
        workNum: $(window.parent.document).find("input[name='dealerId']").val(),
        // year: $("#year option:selected").text(),
        // month: $("#month option:selected").text(),
        startTime:$("#date_start").val(),
        endTime:$("#date_end").val(),
        lineNum: $("#product option:selected").val(),
        pageNum: currentPage,
        pageSize: 14
      },
      dataType: "json",
      success: function (data) {
        if (data['head']['code'] != 200) {
          $("#distancePrice").text(data['body']['result']['distancePrice']);
          $("#timePrice").text(data['body']['result']['workPrice']);
          $("#adminTbody").empty();
          $("#adminTbody").append(
            '<td class="td2 txt_center" height="50px" colspan="12">未查到相关信息</td>'
          );
          document.getElementById("barcon1").innerHTML = "";
          $("#createCostSum").attr("disabled", true);
        } else {
          $("#distancePrice").text(data['body']['result']['distancePrice']);
          $("#timePrice").text(data['body']['result']['workPrice']);
          if (data['body']['result']['data'].length == 0) {
            $("#costTotal").text(data['body']['result']['allMoney']);
            if(data['body']['result']['headPath']){
              $('#headPath').attr('src',data['body']['result']['headPath'])
            }
            $("#adminTbody").empty();
            $("#adminTbody").append(
              '<td class="td2 txt_center" height="50px" colspan="12">未查到相关信息</td>'
            );
            document.getElementById("barcon1").innerHTML = "";
            $("#createCostSum").attr("disabled", true);
          } else {
            currentPage = data['body']['result']['pageNum'];
            totalPage = data['body']['result']['pages'];
            totalData = data['body']['result']['total'];
  
            if(data['body']['result']['headPath']){
              $('#headPath').attr('src',data['body']['result']['headPath'])
            }
  
            $("#costTotal").text(data['body']['result']['allMoney']);
            $("#adminTbody").empty();
            for (var i = 0; i < data['body']['result']['data'].length; i++) {
              $("#adminTbody").append(
                "<tr id='" + data['body']['result']['data'][i]['repairId'] + "'>" +
                '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['modelName'] + '</td>' +
                '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['distance'] + '</td>' +
                '<td class="td2_bg_special txt_center" onclick="editRepairInfo(this)">' + data['body']['result']['data'][i]['examineDistance'] + '</td>' +
                '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['examineDistanceCost'] + '</td>' +
                '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['workTime'] + '</td>' +
                '<td class="td2_bg_special txt_center" onclick="editRepairInfo(this)">' + data['body']['result']['data'][i]['examineTime'] + '</td>' +
                '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['examineTimeCost'] + '</td>' +
                '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['otherFee'] + '</td>' +
                '<td class="td2_bg_special txt_center" onclick="editRepairInfo(this)">' + data['body']['result']['data'][i]['examineOtherFee'] + '</td>' +
                '<td class="td2_bg_special txt_center" onclick="editRepairInfo(this)">' + data['body']['result']['data'][i]['checkMoney'] + '</td>' +
                '<td class="td2_bg_special txt_center" onclick="editRepairInfo(this)">' + data['body']['result']['data'][i]['checkReason'] + '</td>' +
                '<td class="td2 txt_center">' + data['body']['result']['data'][i]['total'] + '</td>' +
                '</tr>'
              );
            }
            $("#createCostSum").attr("disabled", false);
            pageSplit();
            hideOrShow();
          }
        }
      }
    });
  }

  function createAddCostSum() {
    if (window.confirm("确认生成结算单？")) {
      $.ajax({
        type: "post",
        async: false,
        url: ip_path + "/changfa_system/repair/creatStatements.do",
        data: {
          workNum: $(window.parent.document).find("input[name='dealerId']").val(),
          // year: $("#year option:selected").text(),
          // month: $("#month option:selected").text(),
          startTime:$("#date_start").val(),
          endTime:$("#date_end").val(),
          lineNum: $("#product option:selected").val(),
          examineUserId: $(window.parent.document).find("input[name='userId']").val()
        },
        dataType: "json",
        success: function (data) {
          if (data['head']['code'] == 200) {
            window.open("costSum_dealer.html", "_self");
          }
        }
      });
    }
  }

  function showDealerCostSum(event) {
    $(window.parent.document).find("input[name='dealerId']").val(event.parentNode.parentNode.childNodes[1].innerHTML);
    $(window.parent.document).find("input[name='roleId']").val(9);
    window.open("costSum_dealer.html", "_self");
  }
  //经销商
  function showDealerCostSum2(event) {
    $(window.parent.document).find("input[name='dealerId']").val(event.parentNode.parentNode.childNodes[1].innerHTML);
    $(window.parent.document).find("input[name='roleId']").val(6);
    window.open("costSum_dealer.html", "_self");
  }

  function ajax_costSumM() {
    var year;
    var month;
    if ($("#year option:selected").text() == "全部") {
      year = "";
    } else {
      year = $("#year option:selected").text();
    }
  
    if ($("#month option:selected").text() == "全部") {
      month = "";
    } else {
      month = $("#month option:selected").text();
    }
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/repair/queryNewStatements.do",
      data: {
        chooseItem: $("#dealer_item option:selected").val(),
        itemCont: $("#dealer_info").val(),
        lineNum: $("#product option:selected").val(),
        startTime: $("#date_start").val(),
        endTime: $("#date_end").val(),
        status: $("#status option:selected").val(),
        roleId:$("#roleId option:selected").val(),
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
            var status;
            switch (data['body']['result']['data'][i]['status']) {
              case 0:
                status = "待复核";
                break;
              case 1:
                status = "已复核";
                break;
              case 2:
                status = "已驳回";
                break;
              case 3:
                status = "未付款";
                break;
              case 4:
                status = "部分付款";
                break;
              case 5:
                status = "全部付款";
                break;
            }
            if (data['body']['result']['data'][i]['status'] == 0) {
              $("#adminTbody").append(
                "<tr id='" + data['body']['result']['data'][i]['statementsId'] + "'>" +
                '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['dealerName'] + '</td>' +
                '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['dealerNum'] + '</td>' +
                '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['lineName'] + '</td>' +
                '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['createTime'] + '</td>' +
                '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['money'] + '</td>' +
                '<td class="td2 txt_center" >' + status + '</td>' +
                '<td class="td2 txt_center" ><a href="###" class="color_cf" onclick="showCostCheckDetails(this)">查看</a></td>' +
                '</tr>'
              );
            } else {
              $("#adminTbody").append(
                "<tr id='" + data['body']['result']['data'][i]['statementsId'] + "'>" +
                '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['dealerName'] + '</td>' +
                '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['dealerNum'] + '</td>' +
                '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['lineName'] + '</td>' +
                '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['createTime'] + '</td>' +
                '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['money'] + '</td>' +
                '<td class="td2 txt_center" >' + status + '</td>' +
                '<td class="td2 txt_center" ><a href="###" class="color_cf" onclick="showCostSumDetails_forCheck(this)">查看</a></td>' +
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

  function ajax_costSum_detail() {
    // var year;
    // var month;
    // if ($("#year option:selected").text() == "全部") {
    //   year = "";
    // } else {
    //   year = $("#year option:selected").text();
    // }
  
    // if ($("#month option:selected").text() == "全部") {
    //   month = "";
    // } else {
    //   month = $("#month option:selected").text();
    // }
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/repair/queryNewStatements.do",
      data: {
        chooseItem: "workNum",
        itemCont: $("#dealerNum").text(),
        lineNum: $("#product option:selected").val(),
        startTime: $("#date_start").val(),
        endTime: $("#date_end").val(),
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
            var status;
            switch (data['body']['result']['data'][i]['status']) {
              case 0:
                status = "待复核";
                break;
              case 1:
                status = "已复核";
                break;
              case 2:
                status = "已驳回";
                break;
              case 3:
                status = "未付款";
                break;
              case 4:
                status = "部分付款";
                break;
                case 5:
                  status = "待付尾款";
                  break;
              case 6:
                status = "全部付款";
                break;
            }
            $("#adminTbody").append(
              "<tr id='" + data['body']['result']['data'][i]['statementsId'] + "'>" +
              '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['lineName'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['createTime'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['money'] + '</td>' +
              '<td class="td2 txt_center" >' + status + '</td>' +
              '<td class="td2 txt_center" ><a href="###" class="color_cf" onclick="showCostSumDetails(this)">查看</a></td>' +
              '</tr>'
            );
          }
          pageSplit();
          hideOrShow();
        }
      }
    });
  }

  function ajax_costSumForPay() {
    var lineNums;
    if ($("#product").val() == null) {
      lineNums = "";
    } else {
      lineNums = $("#product").val().toString();
    }
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/repair/queryNewStatements.do",
      data: {
        chooseItem: "workNum",
        itemCont: $("#dealerNum").text(),
        lineNum: lineNums,
        startTime: $("#date_start").val(),
        endTime: $("#date_end").val(),
        status: 1,
        pageNum: currentPage,
        pageSize: 100000
      },
      dataType: "json",
      success: function (data) {
        if (data['head']['code'] != 200) {
          $("#adminTbody").empty();
          $("#adminTbody").append(
            '<td class="td2 txt_center" height="50px" colspan="7">未查到相关信息</td>'
          );
        } else {
          if (data['body']['result']['total'] > 6) {
            $("#scrollDiv").addClass("scrollDiv");
          }
          $("#adminTbody").empty();
          for (var i = 0; i < data['body']['result']['data'].length; i++) {
            var status;
            switch (data['body']['result']['data'][i]['status']) {
              case 0:
                status = "待复核";
                break;
              case 1:
                status = "已复核";
                break;
              case 2:
                status = "已驳回";
                break;
              case 3:
                status = "未付款";
                break;
              case 4:
                status = "已付款";
                break;
            }
            $("#adminTbody").append(
              "<tr id='" + data['body']['result']['data'][i]['statementsId'] + "'>" +
              '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['dealerName'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['dealerNum'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['lineName'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['createTime'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['money'] + '</td>' +
              '<td class="td2 txt_center" >' + status + '</td>' +
              '<td class="td2 txt_center" ><input type="checkbox" class="choose_select" onclick="chooseCostSum(this)"></td>' +
              '<td style="display : none">' + data['body']['result']['data'][i]['statementsId'] + '</td>' +
              '</tr>'
            );
          }
        }
      }
    });
  }

  function showCostCheckDetails(event) {
    $(window.parent.document).find("input[name='costSumId']").val(event.parentNode.parentNode.id);
    window.open("costCheckDetails.html", "_self");
  }

  function showCostSumDetails(event) {
    $(window.parent.document).find("input[name='costSumId']").val(event.parentNode.parentNode.id);
    window.open("costSumDetails.html", "_self");
  }

  function showCostSumDetails_forCheck(event) {
    $(window.parent.document).find("input[name='costSumId']").val(event.parentNode.parentNode.id);
    window.open("costSumDetails_forCheck.html", "_self");
  }

  function ajax_costSumRepair_detail() {
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/repair/queryRepairsByStatements.do",
      data: {
        statementsId: $(window.parent.document).find("input[name='costSumId']").val()
      },
      dataType: "json",
      success: function (data) {
        if (data['head']['code'] != 200) {
          $("#adminTbody").empty();
          $("#adminTbody").append(
            '<td class="td2 txt_center" height="50px" colspan="12">未查到相关信息</td>'
          );
        } else {
          $("#dealerNum").text(data['body']['result']['dealerNum']);
          $("#dealerName").text(data['body']['result']['dealerName']);
          $("#product").text(data['body']['result']['lineName']);
          $("#time").text(data['body']['result']['createTime']);
          $("#level").text(data['body']['result']['levelName']);
          $("#distabcePrice").text(data['body']['result']['distanceCost']);
          $("#timePrice").text(data['body']['result']['timeCost']);
          $("#costTotal").text(data['body']['result']['allMoney']);
  
          if(data['body']['result']['headPath']){
            $('#headPath').attr('src',data['body']['result']['headPath'])
          }
  
          if (data['body']['result']['total'] > 6) {
            $("#scrollDiv").addClass("scrollDiv");
          }
          $("#adminTbody").empty();
          if(data['body']['result']['status'] == 2){
            $("#submitAgain").show();
          }
          for (var i = 0; i < data['body']['result']['repairList'].length; i++) {
            if (data['body']['result']['repairList'][i]['balance'] == 2) {
              $("#adminTbody").append(
                "<tr id='" + data['body']['result']['repairList'][i]['repairId'] + "' class='bg_red' style='background: #FF8E8E;'>" +
                '<td class="td2_bgNone txt_center" height="33">' + data['body']['result']['repairList'][i]['modelName'] + '</td>' +
                '<td class="td2_bgNone txt_center" >' + data['body']['result']['repairList'][i]['distance'] + '</td>' +
                '<td class="td2_bgNone txt_center" onclick="editRepairInfo(this)">' + data['body']['result']['repairList'][i]['examineDistance'] + '</td>' +
                '<td class="td2_bgNone txt_center" >' + data['body']['result']['repairList'][i]['examineDistanceCost'] + '</td>' +
                '<td class="td2_bgNone txt_center" >' + data['body']['result']['repairList'][i]['workTime'] + '</td>' +
                '<td class="td2_bgNone txt_center" onclick="editRepairInfo(this)">' + data['body']['result']['repairList'][i]['examineTime'] + '</td>' +
                '<td class="td2_bgNone txt_center" >' + data['body']['result']['repairList'][i]['examineTimeCost'] + '</td>' +
                '<td class="td2_bgNone txt_center" >' + data['body']['result']['repairList'][i]['otherFee'] + '</td>' +
                '<td class="td2_bgNone txt_center" onclick="editRepairInfo(this)">' + data['body']['result']['repairList'][i]['examineOtherFee'] + '</td>' +
                '<td class="td2_bgNone txt_center" onclick="editRepairInfo(this)">' + data['body']['result']['repairList'][i]['checkMoney'] + '</td>' +
                '<td class="td2_bgNone txt_center" onclick="editRepairInfo(this)">' + data['body']['result']['repairList'][i]['checkReason'] + '</td>' +
                '<td class="td2_bgNone txt_center">' + data['body']['result']['repairList'][i]['total'] + '</td>' +
                '</tr>'
              );
              //$("#submitAgain").show();
            } else {
              $("#adminTbody").append(
                "<tr id='" + data['body']['result']['repairList'][i]['repairId'] + "'>" +
                '<td class="td2 txt_center" height="33">' + data['body']['result']['repairList'][i]['modelName'] + '</td>' +
                '<td class="td2 txt_center" >' + data['body']['result']['repairList'][i]['distance'] + '</td>' +
                '<td class="td2 txt_center">' + data['body']['result']['repairList'][i]['examineDistance'] + '</td>' +
                '<td class="td2 txt_center" >' + data['body']['result']['repairList'][i]['examineDistanceCost'] + '</td>' +
                '<td class="td2 txt_center" >' + data['body']['result']['repairList'][i]['workTime'] + '</td>' +
                '<td class="td2 txt_center">' + data['body']['result']['repairList'][i]['examineTime'] + '</td>' +
                '<td class="td2 txt_center" >' + data['body']['result']['repairList'][i]['examineTimeCost'] + '</td>' +
                '<td class="td2 txt_center" >' + data['body']['result']['repairList'][i]['otherFee'] + '</td>' +
                '<td class="td2 txt_center">' + data['body']['result']['repairList'][i]['examineOtherFee'] + '</td>' +
                '<td class="td2 txt_center">' + data['body']['result']['repairList'][i]['checkMoney'] + '</td>' +
                '<td class="td2 txt_center">' + data['body']['result']['repairList'][i]['checkReason'] + '</td>' +
                '<td class="td2 txt_center" >' + data['body']['result']['repairList'][i]['total'] + '</td>' +
                '</tr>'
              );
              //$("#submitAgain").hide();
            }
          }
          if (data['body']['result']['operationFlow'].length != 0) {
            $("#opetationLog").empty();
            for (var i = 0; i < data['body']['result']['operationFlow'].length; i++) {
              $("#opetationLog").append(
                "<tr>" +
                '<td class="td2 txt_center" height="33">' + data['body']['result']['operationFlow'][i]['userName'] + '</td>' +
                '<td class="td2 txt_center" >' + data['body']['result']['operationFlow'][i]['description'] + '</td>' +
                '<td class="td2 txt_center">' + data['body']['result']['operationFlow'][i]['reason'] + '</td>' +
                '<td class="td2 txt_center" >' + data['body']['result']['operationFlow'][i]['createTime'] + '</td>' +
                '</tr>'
              );
            }
          } else {
            $("#opetationLog").empty();
            $("#opetationLog").append(
              "<tr>" +
              '<td class="td2 txt_center" height="33" colspan="4">暂无相关信息</td>' +
              '</tr>'
            );
          }
        }
      }
    });
  }
  
  function ajax_costSumRepair_detail_forCheck() {
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/repair/queryRepairsByStatements.do",
      data: {
        statementsId: $(window.parent.document).find("input[name='costSumId']").val()
      },
      dataType: "json",
      success: function (data) {
        if (data['head']['code'] != 200) {
          $("#adminTbody").empty();
          $("#adminTbody").append(
            '<td class="td2 txt_center" height="50px" colspan="12">未查到相关信息</td>'
          );
        } else {
          $("#dealerNum").text(data['body']['result']['dealerNum']);
          $("#dealerName").text(data['body']['result']['dealerName']);
          $("#product").text(data['body']['result']['lineName']);
          $("#time").text(data['body']['result']['createTime']);
          $("#level").text(data['body']['result']['levelName']);
          $("#distabcePrice").text(data['body']['result']['distanceCost']);
          $("#timePrice").text(data['body']['result']['timeCost']);
          $("#costTotal").text(data['body']['result']['allMoney']);
  
          if(data['body']['result']['headPath']){
            $('#headPath').attr('src',data['body']['result']['headPath'])
          }        
  
          if (data['body']['result']['total'] > 6) {
            $("#scrollDiv").addClass("scrollDiv");
          }
          $("#adminTbody").empty();
          for (var i = 0; i < data['body']['result']['repairList'].length; i++) {
            if (data['body']['result']['repairList'][i]['balance'] == 2) {
              $("#adminTbody").append(
                "<tr id='" + data['body']['result']['repairList'][i]['repairId'] + "' class='bg_red' style='background: #FF8E8E;'>" +
                '<td class="td2_bgNone txt_center" height="33">' + data['body']['result']['repairList'][i]['modelName'] + '</td>' +
                '<td class="td2_bgNone txt_center" >' + data['body']['result']['repairList'][i]['distance'] + '</td>' +
                '<td class="td2_bgNone txt_center">' + data['body']['result']['repairList'][i]['examineDistance'] + '</td>' +
                '<td class="td2_bgNone txt_center" >' + data['body']['result']['repairList'][i]['examineDistanceCost'] + '</td>' +
                '<td class="td2_bgNone txt_center" >' + data['body']['result']['repairList'][i]['workTime'] + '</td>' +
                '<td class="td2_bgNone txt_center">' + data['body']['result']['repairList'][i]['examineTime'] + '</td>' +
                '<td class="td2_bgNone txt_center" >' + data['body']['result']['repairList'][i]['examineTimeCost'] + '</td>' +
                '<td class="td2_bgNone txt_center" >' + data['body']['result']['repairList'][i]['otherFee'] + '</td>' +
                '<td class="td2_bgNone txt_center">' + data['body']['result']['repairList'][i]['examineOtherFee'] + '</td>' +
                '<td class="td2_bgNone txt_center">' + data['body']['result']['repairList'][i]['checkMoney'] + '</td>' +
                '<td class="td2_bgNone txt_center">' + data['body']['result']['repairList'][i]['checkReason'] + '</td>' +
                '<td class="td2_bgNone txt_center">' + data['body']['result']['repairList'][i]['total'] + '</td>' +
                '</tr>'
              );
            } else {
              $("#adminTbody").append(
                "<tr id='" + data['body']['result']['repairList'][i]['repairId'] + "'>" +
                '<td class="td2 txt_center" height="33">' + data['body']['result']['repairList'][i]['modelName'] + '</td>' +
                '<td class="td2 txt_center" >' + data['body']['result']['repairList'][i]['distance'] + '</td>' +
                '<td class="td2 txt_center">' + data['body']['result']['repairList'][i]['examineDistance'] + '</td>' +
                '<td class="td2 txt_center" >' + data['body']['result']['repairList'][i]['examineDistanceCost'] + '</td>' +
                '<td class="td2 txt_center" >' + data['body']['result']['repairList'][i]['workTime'] + '</td>' +
                '<td class="td2 txt_center">' + data['body']['result']['repairList'][i]['examineTime'] + '</td>' +
                '<td class="td2 txt_center" >' + data['body']['result']['repairList'][i]['examineTimeCost'] + '</td>' +
                '<td class="td2 txt_center" >' + data['body']['result']['repairList'][i]['otherFee'] + '</td>' +
                '<td class="td2 txt_center">' + data['body']['result']['repairList'][i]['examineOtherFee'] + '</td>' +
                '<td class="td2 txt_center">' + data['body']['result']['repairList'][i]['checkMoney'] + '</td>' +
                '<td class="td2 txt_center">' + data['body']['result']['repairList'][i]['checkReason'] + '</td>' +
                '<td class="td2 txt_center" >' + data['body']['result']['repairList'][i]['total'] + '</td>' +
                '</tr>'
              );
            }
          }
          if (data['body']['result']['operationFlow'].length != 0) {
            $("#opetationLog").empty();
            for (var i = 0; i < data['body']['result']['operationFlow'].length; i++) {
              $("#opetationLog").append(
                "<tr>" +
                '<td class="td2 txt_center" height="33">' + data['body']['result']['operationFlow'][i]['userName'] + '</td>' +
                '<td class="td2 txt_center" >' + data['body']['result']['operationFlow'][i]['description'] + '</td>' +
                '<td class="td2 txt_center">' + data['body']['result']['operationFlow'][i]['reason'] + '</td>' +
                '<td class="td2 txt_center" >' + data['body']['result']['operationFlow'][i]['createTime'] + '</td>' +
                '</tr>'
              );
            }
          } else {
            $("#opetationLog").empty();
            $("#opetationLog").append(
              "<tr>" +
              '<td class="td2 txt_center" height="33" colspan="4">暂无相关信息</td>' +
              '</tr>'
            );
          }
        }
      }
    });
  }
  
  function ajax_costCheckRepair_detail() {
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/repair/queryRepairsByStatements.do",
      data: {
        statementsId: $(window.parent.document).find("input[name='costSumId']").val()
      },
      dataType: "json",
      success: function (data) {
        if (data['head']['code'] != 200) {
          $("#adminTbody").empty();
          $("#adminTbody").append(
            '<td class="td2 txt_center" height="50px" colspan="8">未查到相关信息</td>'
          );
        } else {
          $("#dealerNum").text(data['body']['result']['dealerNum']);
          $("#dealerName").text(data['body']['result']['dealerName']);
          $("#product").text(data['body']['result']['lineName']);
          $("#time").text(data['body']['result']['createTime']);
          $("#level").text(data['body']['result']['levelName']);
          $("#distabcePrice").text(data['body']['result']['distanceCost']);
          $("#timePrice").text(data['body']['result']['timeCost']);
          $("#costTotal").text(data['body']['result']['allMoney']);
  
          if(data['body']['result']['headPath']){
            $('#headPath').attr('src',data['body']['result']['headPath'])
          }
  
          if (data['body']['result']['total'] > 6) {
            $("#scrollDiv").addClass("scrollDiv");
          }
          $("#adminTbody").empty();
          for (var i = 0; i < data['body']['result']['repairList'].length; i++) {
            $("#adminTbody").append(
              "<tr id='" + data['body']['result']['repairList'][i]['repairId'] + "'>" +
              '<td class="td2 txt_center" height="33">' + data['body']['result']['repairList'][i]['modelName'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['repairList'][i]['distance'] + '</td>' +
              '<td class="td2 txt_center">' + data['body']['result']['repairList'][i]['examineDistance'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['repairList'][i]['examineDistanceCost'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['repairList'][i]['workTime'] + '</td>' +
              '<td class="td2 txt_center">' + data['body']['result']['repairList'][i]['examineTime'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['repairList'][i]['examineTimeCost'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['repairList'][i]['otherFee'] + '</td>' +
              '<td class="td2 txt_center">' + data['body']['result']['repairList'][i]['examineOtherFee'] + '</td>' +
              '<td class="td2 txt_center">' + data['body']['result']['repairList'][i]['checkMoney'] + '</td>' +
              '<td class="td2 txt_center">' + data['body']['result']['repairList'][i]['checkReason'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['repairList'][i]['total'] + '</td>' +
              '<td class="td2 txt_center" ><input type="checkbox" class="choose_select" onclick="chooseRepairs()"></td>' +
              '</tr>'
            );
          }
        }
      }
    });
  }

  function chooseAllOrNullRepairs() {
    if ($("#checkAllRepairs").is(":checked")) {
      $('#adminTbody tr').each(function (i) {
        $(this).find("td").eq(12).find("input[type='checkbox']").attr("checked", true);
      });
    } else {
      $('#adminTbody tr').each(function (i) {
        $(this).find("td").eq(12).find("input[type='checkbox']").attr("checked", false);
      });
    }
  }

  function chooseRepairs() {
    var index;
    $('#adminTbody tr').each(function (i) {
      if (!$(this).find("td").eq(12).find("input[type='checkbox']").is(":checked")) {
        index++;
      }
    });
    if (index == $("#adminTbody").childNodes) {
      $("#checkAllRepairs").attr("checked", true);
    } else {
      $("#checkAllRepairs").attr("checked", false);
    }
  }

  function toogle_rep() {
    document.getElementById("checkRep_choosed").style.display = "none";
    document.getElementById("rep_choosed").style.display = "block";
  }
  
  function toogle_rep_check() {
    document.getElementById("rep_choosed").style.display = "none";
    document.getElementById("checkRep_choosed").style.display = "block";
  }

  function toogle_rep() {
    document.getElementById("checkRep_choosed").style.display = "none";
    document.getElementById("rep_choosed").style.display = "block";
  }
  
  function toogle_rep_check() {
    document.getElementById("rep_choosed").style.display = "none";
    document.getElementById("checkRep_choosed").style.display = "block";
  }

  function checkCostSum_pass() {
    if (window.confirm("确认复核通过？")) {
      $.ajax({
        type: "post",
        async: false,
        url: ip_path + "/changfa_system/repair/examineStatements.do",
        data: {
          statementsId: $(window.parent.document).find("input[name='costSumId']").val(),
          type: 1,
          examineUserId: $(window.parent.document).find("input[name='userId']").val()
        },
        dataType: "json",
        success: function (data) {
          if (data['head']['code'] == 200) {
            window.open("costSumDetails_forCheck.html", "_self");
          }
        }
      });
    }
  }

  function checkCostSum_unpass() {
    $('#adminTbody tr').each(function () {
      if ($(this).children('td').eq(12).find("input[type='checkbox']").is(':checked')) {
        repairIdList.push($(this)[0]['id']);
      }
    });
    if (repairIdList.toString() == "") {
      alert("请选择驳回的单据！");
    } else {
      if (window.confirm("确认驳回？")) {
        $.ajax({
          type: "post",
          async: false,
          url: ip_path + "/changfa_system/repair/examineStatements.do",
          data: {
            statementsId: $(window.parent.document).find("input[name='costSumId']").val(),
            type: 2,
            repairIdList: repairIdList.toString(),
            remarks: $("#describe").val(),
            examineUserId: $(window.parent.document).find("input[name='userId']").val()
          },
          dataType: "json",
          success: function (data) {
            if (data['head']['code'] == 200) {
              window.open("costSumDetails_forCheck.html", "_self");
            }
          }
        });
      }
    }
  }

  function createDealerCostPay(event) {
  $(window.parent.document).find("input[name='dealerId']").val(event.parentNode.parentNode.childNodes[1].innerHTML);
  window.open("createCostPay.html", "_self");
}

function chooseAllOrNullCostSumb() {
    if ($("#checkAllb").is(":checked")) {
      costSumIds = [];
      totalMoney = 0;
      $('#adminTbody tr').each(function (i) {
        $(this).find("td").eq(6).find("input[type='checkbox']").attr("checked", true);
        costSumIds.push($(this).find("td").eq(7).text());
      });
    } else {
      costSumIds = [];
      totalMoney = 0;
      $('#adminTbody tr').each(function (i) {
        $(this).find("td").eq(6).find("input[type='checkbox']").attr("checked", false);
      });
    }
  }
  
  
  function chooseAllOrNullCostSumc() {
    if ($("#checkAllc").is(":checked")) {
      costSumIds = [];
      totalMoney = 0;
      allMoney = 0;
      $('#adminTbody2 tr').each(function (i) {
        $(this).find("td").eq(6).find("input[type='checkbox']").attr("checked", true);
        costSumIds.push($(this).find("td").eq(7).text());
        totalMoney = addNumber(Number(totalMoney) + Number($(this).find("td").eq(4).text()));
        allMoney = addNumber(Number(allMoney) + Number($(this).find("td").eq(2).text()));
      });
    } else {
      costSumIds = [];
      totalMoney = 0;
      allMoney = 0;
      $('#adminTbody2 tr').each(function (i) {
        $(this).find("td").eq(6).find("input[type='checkbox']").attr("checked", false);
      });
    }
    $("#payTotal").text(totalMoney);
    $("#allTotal").text(allMoney);
  }
  
  function chooseAllOrNullCostSum() {
    if ($("#checkAll").is(":checked")) {
      costSumIds = [];
      totalMoney = 0;
      $('#adminTbody tr').each(function (i) {
        $(this).find("td").eq(6).find("input[type='checkbox']").attr("checked", true);
        costSumIds.push($(this).find("td").eq(7).text());
        totalMoney = parseInt(totalMoney) + parseInt($(this).find("td").eq(4).text());
      });
    } else {
      costSumIds = [];
      totalMoney = 0;
      $('#adminTbody tr').each(function (i) {
        $(this).find("td").eq(6).find("input[type='checkbox']").attr("checked", false);
      });
    }
    $("#payTotal").text(totalMoney);
  }

  function createCostPay() {
    if (costSumIds.length == 0) {
      alert("请勾选待付款的结算单！");
    } else {
      if (window.confirm("确认生成付款单？")) {
        $.ajax({
          type: "post",
          async: false,
          url: ip_path + "/changfa_system/repair/createPayment.do",
          data: {
            type: $("#payType option:selected").val(),
            statementsIdList: costSumIds.toString(),
            dealerNum: $("#dealerNum").text(),
            fileIds: ticketIds.toString(),
            remarks: $("#remarks").val(),
            examineUserId: $(window.parent.document).find("input[name='userId']").val()
          },
          dataType: "json",
          success: function (data) {
            if (data['head']['code'] == 200) {
              window.open("costPay_dealer.html", "_self");
            } else {
              alert(data['head']['message']);
            }
          }
        });
      }
    }
  }

  function ajax_costPay_forDealer() {
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/repair/queryPayments.do",
      data: {
        chooseItem: "workNum",
        itemCont: $("#dealerNum").text(),
        paymentNum: $("#payNum").val(),
        status: $("#status option:selected").val(),
        type: $("#payType option:selected").val(),
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
            '<td class="td2 txt_center" height="50px" colspan="10">未查到相关信息</td>'
          );
          document.getElementById("barcon1").innerHTML = "";
        } else {
          currentPage = data['body']['result']['pageNum'];
          totalPage = data['body']['result']['pages'];
          totalData = data['body']['result']['total'];
          $("#adminTbody").empty();
          for (var i = 0; i < data['body']['result']['data'].length; i++) {
            var type;
            var status;
            if (data['body']['result']['data'][i]['type'] == 1) {
              type = "发票结算";
            } else {
              type = "返利结算";
            }
  
            switch (data['body']['result']['data'][i]['status']) {
              case 1:
                status = "待付款";
                break;
              case 2:
                status = "部分付款";
                break;
              case 3:
                status = "待付尾款";
                break;
              case 4:
                status = "全部付款";
                break;
            }
            $("#adminTbody").append(
              "<tr id='" + data['body']['result']['data'][i]['paymentId'] + "'>" +
              '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['paymentNum'] + '</td>' +
              '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['dealerName'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['dealerNum'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['createTime'] + '</td>' +
              '<td class="td2 txt_center" >' + type + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['money'] + '</td>' +
              '<td class="td2 txt_center" >' + status + '</td>' +
              '<td class="td2 txt_center" ><a href="###" class="color_cf" onclick="showCostPayDetails_forDealer(this)">查看</a></td>' +
              '<td class="td2" style="display:none">' + data['body']['result']['data'][i]['roleId'] + '</td>' +
              '</tr>'
            );
          }
          pageSplit();
          hideOrShow();
        }
      }
    });
  }

  function showCostPayDetails(event) {
    $(window.parent.document).find("input[name='costPayId']").val(event.parentNode.parentNode.id);
    window.open("costPayDetails.html", "_self");
  }

  function showBalancePayDetails(event) {
    $(window.parent.document).find("input[name='costPayId']").val(event.parentNode.parentNode.id);
    $(window.parent.document).find("input[name='dealerId']").val(event.parentNode.parentNode.childNodes[2].innerHTML);
    if(event.parentNode.previousSibling.innerHTML == '待付款'){
      window.open("balancePaymentPay.html", "_self");
    }else{
      window.open("costBalDetails_forDealer.html", "_self");
    }

  }

  function showCostPayDetails_forDealer(event) {
    $(window.parent.document).find("input[name='costPayId']").val(event.parentNode.parentNode.id);
    if(event.parentNode.nextSibling.innerHTML == 6){
      window.open("costPayDetails_forDealer2.html", "_self");
    }else{
      window.open("costPayDetails_forDealer.html", "_self");
    }
  
  }

  function showCostPayDetails2(event) {
    $(window.parent.document).find("input[name='costPayId']").val(event.parentNode.parentNode.id);
    window.open("costPayDetails2.html", "_self");
  }

  function ajax_costPayDetail() {
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/repair/queryPaymentById.do",
      data: {
        paymentId: $(window.parent.document).find("input[name='costPayId']").val()
      },
      dataType: "json",
      success: function (data) {
        if (data['head']['code'] != 200) {
          $("#adminTbody").empty();
          $("#adminTbody").append(
            '<td class="td2 txt_center" height="50px" colspan="7">未查到相关信息</td>'
          );
        } else {
          if (data['body']['result']['total'] > 6) {
            $("#scrollDiv").addClass("scrollDiv");
          }
          $("#adminTbody").empty();
          for (var i = 0; i < data['body']['result']['statementsList'].length; i++) {
            var status;
            switch (data['body']['result']['statementsList'][i]['status']) {
              case 0:
                status = "待复核";
                break;
              case 1:
                status = "已复核";
                break;
              case 2:
                status = "已驳回";
                break;
              case 3:
                status = "未付款";
                break;
              case 4:
                status = "已付款";
                break;
            }
            $("#adminTbody").append(
              "<tr id='" + data['body']['result']['statementsList'][i]['statementsId'] + "'>" +
              '<td class="td2 txt_center" height="33">' + data['body']['result']['statementsList'][i]['dealerName'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['statementsList'][i]['dealerNum'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['statementsList'][i]['lineName'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['statementsList'][i]['createTime'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['statementsList'][i]['money'] + '</td>' +
              '<td class="td2 txt_center" >' + status + '</td>' +
              '<td style="display : none">' + data['body']['result']['statementsList'][i]['statementsId'] + '</td>' +
              '</tr>'
            );
          }
          if (data['body']['result']['operationFlow'].length != 0) {
            $("#opetationLog").empty();
            for (var i = 0; i < data['body']['result']['operationFlow'].length; i++) {
              $("#opetationLog").append(
                "<tr>" +
                '<td class="td2 txt_center" height="33">' + data['body']['result']['operationFlow'][i]['userName'] + '</td>' +
                '<td class="td2 txt_center" >' + data['body']['result']['operationFlow'][i]['description'] + '</td>' +
                '<td class="td2 txt_center" >' + data['body']['result']['operationFlow'][i]['createTime'] + '</td>' +
                '</tr>'
              );
            }
          } else {
            $("#opetationLog").empty();
            $("#opetationLog").append(
              "<tr>" +
              '<td class="td2 txt_center" height="33" colspan="3">暂无相关信息</td>' +
              '</tr>'
            );
          }
          $("#payTotal").text(data['body']['result']['money']);
  
          var payType;
          if (data['body']['result']['type'] == 1) {
            payType = "发票结算";
            $("#ticketArea").show();
            for (var i = 0; i < data['body']['result']['filesPaths'].length; i++) {
              var img_html = "<td><div class='isImg'><img src='" + data['body']['result']['filesPaths'][i]['filePath'] + "' onclick='javascript:ticketLarge(this)' style='height: 100%; width: 100%;' /></div></td>";
              $("#ticketList").append(img_html);
            }
          } else {
            payType = "返利结算";
            $("#ticketArea").hide();
          }
          $("#payType").text(payType);
  
          $("#remarks").text(data['body']['result']['remarks']);
  
          if (data['body']['result']['status'] == 2) {
            $("#payBtn").hide();
          }
        }
      }
    });
  }

  function ajax_costPay() {
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/repair/queryPayments.do",
      data: {
        chooseItem: $("#dealer_item option:selected").val(),
        itemCont: $("#dealer_info").val(),
        paymentNum: $("#payNum").val(),
        status: $("#status option:selected").val(),
        type: $("#payType option:selected").val(),
        startTime: $("#date_start").val(),
        endTime: $("#date_end").val(),
        roleId:9,
        pageNum: currentPage,
        pageSize: 14
      },
      dataType: "json",
      success: function (data) {
        if (data['head']['code'] != 200) {
          $("#adminTbody").empty();
          $("#adminTbody").append(
            '<td class="td2 txt_center" height="50px" colspan="10">未查到相关信息</td>'
          );
          document.getElementById("barcon1").innerHTML = "";
        } else {
          currentPage = data['body']['result']['pageNum'];
          totalPage = data['body']['result']['pages'];
          totalData = data['body']['result']['total'];
          $("#adminTbody").empty();
          for (var i = 0; i < data['body']['result']['data'].length; i++) {
            var type;
            var status;
            if (data['body']['result']['data'][i]['type'] == 1) {
              type = "发票结算";
            } else {
              type = "返利结算";
            }
  
            switch (data['body']['result']['data'][i]['status']) {
              case 1:
                status = "待付款";
                break;
              case 2:
                status = "部分付款";
                break;
              case 3:
                status = "待付尾款";
                break;
              case 4:
                status = "全部付款";
                break;
            }
            $("#adminTbody").append(
              "<tr id='" + data['body']['result']['data'][i]['paymentId'] + "'>" +
              '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['paymentNum'] + '</td>' +
              '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['dealerName'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['dealerNum'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['createTime'] + '</td>' +
              '<td class="td2 txt_center" >' + type + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['money90'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['money10'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['money'] + '</td>' +
              '<td class="td2 txt_center" >' + status + '</td>' +
              '<td class="td2 txt_center" ><a href="###" class="color_cf" onclick="showCostPayDetails(this)">查看</a></td>' +
              
              '<td class="td2" style="display:none">' + data['body']['result']['data'][i]['roleId'] + '</td>' +
              '</tr>'
            );
          }
          pageSplit();
          hideOrShow();
        }
      }
    });
  }

  function ajax_balancePay() {

    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/repair/queryAllPayments.do",
      data: {
        dealerId:'',
        chooseItem: $("#dealer_item option:selected").val(),
        itemCont: $("#dealer_info").val(),
        paymentNum: $("#payNum").val(),
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
            '<td class="td2 txt_center" height="50px" colspan="10">未查到相关信息</td>'
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
                status = "待付款";
                break;
              case 2:
                status = "已付款";
                break;
            }

            $("#adminTbody").append(
              "<tr id='" + data['body']['result']['data'][i]['id'] + "'>" +
              '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['paymentAllNum'] + '</td>' +
              '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['dealername'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['dealerNum'] + '</td>' +
              '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['createTime'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['allMoney'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['money10'] + '</td>' +
              '<td class="td2 txt_center" >' + status + '</td>' +
              '<td class="td2 txt_center" ><a href="###" class="color_cf" onclick="showBalancePayDetails(this)">查看</a></td>' +
              '</tr>'
            );
          }
          pageSplit();
          hideOrShow();
        }
      }
    });
  }

  function ajax_costPay_detail() {
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/repair/queryNewPaymentById.do",
      data: {
        paymentId: $(window.parent.document).find("input[name='costPayId']").val()
      },
      dataType: "json",
      success: function (data) {
        if (data['head']['code'] != 200) {
          $("#adminTbody").empty();
          $("#adminTbody").append(
            '<td class="td2 txt_center" height="50px" colspan="8">未查到相关信息</td>'
          );
        } else {
          if(data.body.result.status == 1){
            $('#payBtn').show();
            $('#getMoney').hide();
            $('#payPerson').hide();
            $('#alipayCodeNum').hide();
            $('#businessCodeNum').hide();
          }
          $('#priseNum').text(data.body.result.dealerNum);
          $('#priseName').text(data.body.result.company);
          $('#phone').text(data.body.result.mobile);
          $('#address').text(data.body.result.address);
          $('#createTime').text(data.body.result.createTime);
          $('#businessCodeNum').text(data.body.result.businessCodeNum);
          $('#costTotal').text(data.body.result.money);
          $('#thisTotal').text(data.body.result.money90);
          $('#afterTotal').text(data.body.result.money10);
          $('#creatorPerson').text(data.body.result.creatorPerson);
          $('#payPerson').text(data.body.result.payPerson);
  
          $("#adminTbody").empty();
          for (var i = 0; i < data['body']['result']['repairList'].length; i++) {
            $("#adminTbody").append(
              "<tr>" +
              '<td class="td2 txt_center" height="33">' + data['body']['result']['repairList'][i]['disNum'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['repairList'][i]['modelName'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['repairList'][i]['createTime'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['repairList'][i]['lineName'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['repairList'][i]['timeCost'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['repairList'][i]['distanceCost'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['repairList'][i]['checkMoney'] + '</td>' +
              
              '<td class="td2 txt_center" >' + data['body']['result']['repairList'][i]['otherFee'] + '</td>' +
              '<td class="td2 txt_center">' + data['body']['result']['repairList'][i]['totalCost'] + '</td>' +
              '</tr>'
            );
          }
  
        }
      }
    });
  }



  function chooseCostSumb(event) {
    var index;
    $('#adminTbody tr').each(function (i) {
      if (!$(this).find("td").eq(6).find("input[type='checkbox']").is(":checked")) {
        index++;
      }
    });
    if (index == $("#adminTbody").childNodes) {
      $("#checkAllb").attr("checked", true);
    } else {
      $("#checkAllb").attr("checked", false);
    }
  
    if (event.checked) {
      costSumIds.push(event.parentNode.nextSibling.innerHTML);
      //totalMoney = parseInt(totalMoney) + parseInt(event.parentNode.previousSibling.previousSibling.innerHTML);
      totalMoney = addNumber(Number(totalMoney) + Number(event.parentNode.previousSibling.previousSibling.innerHTML));
      allMoney = addNumber(Number(allMoney) + Number(event.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML));
    } else {
      var index;
      for (var item in costSumIds) {
        if (costSumIds[item] == event.parentNode.nextSibling.innerHTML) {
          index = item;
          costSumIds.splice(index, 1);
        }
      }

      totalMoney = addNumber(Number(totalMoney) - Number(event.parentNode.previousSibling.previousSibling.innerHTML));
      allMoney = addNumber(Number(allMoney) - Number(event.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML));
      //totalMoney = parseInt(totalMoney) - parseInt(event.parentNode.previousSibling.previousSibling.innerHTML);
    }
    // var totalMoney = "";
    // for(var i=0;i<event.parentNode.parentNode.parentNode.childNodes.length;i++){
    //     if(!$("#adminTbody").find("tr").eq(i).find("input[type='checkbox']").checked){
    //         alert(i);
    //         totalMoney += event.parentNode.parentNode.parentNode.childNodes[i].childNodes[5].innerHTML;
    //         console.log(totalMoney);
    //     }
    // }
    //$("#payTotal").text(totalMoney);

    $("#payTotal").text(totalMoney);
    $("#allTotal").text(allMoney);
  }
  
  function addNumber(x) {
    var val = Number(x)
    if(!isNaN(parseFloat(val))) {
    val = val.toFixed(2);
    }
    return val;
    }

  function chooseCostSumc(event) {
    var index;
    $('#adminTbody2 tr').each(function (i) {
      if (!$(this).find("td").eq(6).find("input[type='checkbox']").is(":checked")) {
        index++;
      }
    });
    if (index == $("#adminTbody2").childNodes) {
      $("#checkAllc").attr("checked", true);
    } else {
      $("#checkAllc").attr("checked", false);
    }
  
    if (event.checked) {
      costBalIds.push(event.parentNode.nextSibling.innerHTML);
      totalMoney = addNumber(Number(totalMoney) + Number(event.parentNode.previousSibling.previousSibling.innerHTML));
      allMoney = addNumber(Number(allMoney) + Number(event.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML));
    } else {
      var index;
      for (var item in costBalIds) {
        if (costBalIds[item] == event.parentNode.nextSibling.innerHTML) {
          index = item;
          costBalIds.splice(index, 1);
        }
      }
      totalMoney = addNumber(Number(totalMoney) - Number(event.parentNode.previousSibling.previousSibling.innerHTML));
      allMoney = addNumber(Number(allMoney) - Number(event.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML));
    }
    // var totalMoney = "";
    // for(var i=0;i<event.parentNode.parentNode.parentNode.childNodes.length;i++){
    //     if(!$("#adminTbody").find("tr").eq(i).find("input[type='checkbox']").checked){
    //         alert(i);
    //         totalMoney += event.parentNode.parentNode.parentNode.childNodes[i].childNodes[5].innerHTML;
    //         console.log(totalMoney);
    //     }
    // }
    $("#payTotal").text(totalMoney);
    $("#allTotal").text(allMoney);
  }
  
  
  function chooseCostSum(event) {
    var index;
    $('#adminTbody tr').each(function (i) {
      if (!$(this).find("td").eq(7).find("input[type='checkbox']").is(":checked")) {
        index++;
      }
    });
    if (index == $("#adminTbody").childNodes) {
      $("#checkAll").attr("checked", true);
    } else {
      $("#checkAll").attr("checked", false);
    }
  
    if (event.checked) {
      costSumIds.push(event.parentNode.nextSibling.innerHTML);
      totalMoney = parseInt(totalMoney) + parseInt(event.parentNode.previousSibling.previousSibling.innerHTML);
    } else {
      var index;
      for (var item in costSumIds) {
        if (costSumIds[item] == event.parentNode.nextSibling.innerHTML) {
          index = item;
          costSumIds.splice(index, 1);
        }
      }
      totalMoney = parseInt(totalMoney) - parseInt(event.parentNode.previousSibling.previousSibling.innerHTML);
    }
    // var totalMoney = "";
    // for(var i=0;i<event.parentNode.parentNode.parentNode.childNodes.length;i++){
    //     if(!$("#adminTbody").find("tr").eq(i).find("input[type='checkbox']").checked){
    //         alert(i);
    //         totalMoney += event.parentNode.parentNode.parentNode.childNodes[i].childNodes[5].innerHTML;
    //         console.log(totalMoney);
    //     }
    // }
    $("#payTotal").text(totalMoney);
  }

  function showDealerCostPay(event) {
    $(window.parent.document).find("input[name='dealerId']").val(event.parentNode.parentNode.childNodes[1].innerHTML);
    window.open("costPay_dealer.html", "_self");
  }

  function createBalanceCostPay(event) {
    $(window.parent.document).find("input[name='dealerId']").val(event.parentNode.parentNode.childNodes[1].innerHTML);
    $(window.parent.document).find("input[name='dealerIdzhen']").val(event.parentNode.nextSibling.innerHTML);
    window.open("createBalance.html", "_self");
  }

  function closeMachineRemark(){
    $('#machineRemark').hide();
  }

  function popMachineRemark(){
    $('#machineRemark').show();
  }

  function createBalPay(){
    // if (costSumIds.length == 0) {
    //   alert("请勾选待总付款的单！");
    // } else {
      if (window.confirm("确认生成总付款单？")) {
        $.ajax({
          type: "post",
          async: false,
          url: ip_path + "/changfa_system/repair/createPaymentAll.do",
          data: {
            paymentIds: costSumIds.toString(),
            dealerId: $(window.parent.document).find("input[name='dealerIdzhen']").val(),
            fileIds: ticketIds.toString(),
            remarks: $("#remarks").val(),
            token: $(window.parent.document).find("input[name='token']").val(),
            code:$('#rep_info_rnm').val(),
            payRemark:$('#payremark').val(),
            billMoney:$('#billMoney').val()
          },
          dataType: "json",
          success: function (data) {
            if (data['head']['code'] == 200) {
              //window.open("costSumManage.html", "_self");
              window.open("Balance_dealer.html","_self");
            } else {
              alert(data['head']['message']);
            }
          }
        });
      }
    //}
  }

  function balancePaymentPay(){
    // if (costSumIds.length == 0) {
    //   alert("请勾选待总付款的单！");
    // } else {
      if (window.confirm("确认支付尾款单？")) {
        $.ajax({
          type: "post",
          async: false,
          url: ip_path + "/changfa_system/repair/confirmPaymentAll.do",
          data: {
            //paymentIds: costSumIds.toString(),
            //dealerId: $(window.parent.document).find("input[name='dealerIdzhen']").val(),
            paymentAllId:$(window.parent.document).find("input[name='costPayId']").val(),
            fileIds: ticketIds.toString(),
            remarks: $("#remarks").val(),
            token: $(window.parent.document).find("input[name='token']").val(),
            code:$('#rep_info_rnm').val(),
            payRemark:$('#payremark').val(),
            billMoney:$('#billMoney').val()
          },
          dataType: "json",
          success: function (data) {
            if (data['head']['code'] == 200) {
              //window.open("costSumManage.html", "_self");
              window.open("zhifubaochange.html","_self");
            } else {
              alert(data['head']['message']);
            }
          }
        });
      }
    //}
  }

  function ajax_costSumForPayBa() {
    var lineNums;
    if ($("#product").val() == null) {
      lineNums = "";
    } else {
      lineNums = $("#product").val().toString();
    }
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/repair/queryPayments.do",
      data: {
        chooseItem: "workNum",
        itemCont: $("#dealerNum").text(),
        lineNum: lineNums,
        startTime: $("#date_start").val(),
        endTime: $("#date_end").val(),
        status: 2,
        pageNum: currentPage,
        pageSize: 100000
      },
      dataType: "json",
      success: function (data) {
        if (data['head']['code'] != 200) {
          $("#adminTbody2").empty();
          totalMoney = '';
          allMoney = '';
          $("#payTotal").text(totalMoney);
          $("#allTotal").text(allMoney);
          $("#adminTbody2").append(
            '<td class="td2 txt_center" height="50px" colspan="8">未查到相关信息</td>'
          );
        } else {
          if (data['body']['result']['total'] > 6) {
            $("#scrollDiv").addClass("scrollDiv");
          }
          $("#adminTbody2").empty();
          allDate = data['body']['result']['data'];
          totalMoney = '';
          allMoney = '';
          $("#payTotal").text(totalMoney);
          $("#allTotal").text(allMoney);
          for (var i = 0; i < data['body']['result']['data'].length; i++) {
            var status;
            switch (data['body']['result']['data'][i]['status']) {
              case 1:
                status = "待付款";
                break;
              case 2:
                status = "部分付款";
                break;
              case 3:
                status = "全部支付";
                break;
              case 4:
                status = "已付款";
                break;
            }
            $("#adminTbody2").append(
              "<tr id='" + data['body']['result']['data'][i]['paymentId'] + "'>" +
              '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['paymentNum'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['createTime'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['money'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['money90'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['money10'] + '</td>' +
              '<td class="td2 txt_center" >' + status + '</td>' +
              '<td class="td2 txt_center" ><input type="checkbox" class="choose_select" onclick="chooseCostSumb(this)"></td>' +
              '<td style="display : none">' + data['body']['result']['data'][i]['paymentId'] + '</td>' +
              '</tr>'
            );
          }
        }
      }
    });
  }

  function showBalanceCostPay(event) {
    $(window.parent.document).find("input[name='dealerId']").val(event.parentNode.parentNode.childNodes[1].innerHTML);
    $(window.parent.document).find("input[name='dealerIdzhen']").val(event.parentNode.nextSibling.innerHTML);
    window.open("Balance_dealer.html", "_self");
  }

  function ajax_balance_forDealer() {
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/repair/queryAllPayments.do",
      data: {
        dealerId:  $(window.parent.document).find("input[name='dealerIdzhen']").val(),
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
            '<td class="td2 txt_center" height="50px" colspan="10">未查到相关信息</td>'
          );
          document.getElementById("barcon1").innerHTML = "";
        } else {
          currentPage = data['body']['result']['pageNum'];
          totalPage = data['body']['result']['pages'];
          totalData = data['body']['result']['total'];
          $("#adminTbody").empty();
          for (var i = 0; i < data['body']['result']['data'].length; i++) {
  
            $("#adminTbody").append(
              "<tr id='" + data['body']['result']['data'][i]['id'] + "'>" +
              '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['paymentAllNum'] + '</td>' +
              '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['createTime'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['allMoney'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['money10'] + '</td>' +
              '<td class="td2 txt_center" ><a href="###" class="color_cf" onclick="showBalanceDetails_forDealer(this)">查看</a></td>' +
              '</tr>'
            );
          }
          pageSplit();
          hideOrShow();
        }
      }
    });
  }

  function showBalanceDetails_forDealer(event) {
    $(window.parent.document).find("input[name='costPayId']").val(event.parentNode.parentNode.id);
    window.open("costBalDetails_forDealer.html", "_self");
  }
  
  function payForPayment() {
    if (window.confirm("确认付款？")) {
      $.ajax({
        type: "post",
        async: false,
        url: ip_path + "/changfa_system/repair/payforPayment.do",
        data: {
          paymentId: $(window.parent.document).find("input[name='costPayId']").val(),
          examineUserId: $(window.parent.document).find("input[name='userId']").val(),
          code:$('#rep_info_rnm').val()
        },
        dataType: "json",
        success: function (data) {
          if (data['head']['code'] == 200) {
            
            window.open("zhifubaochange.html", "_self");
            //window.open("costPayManage.html", "_self");
          } else {
            alert(data['head']['message']);
          }
        }
      });
    }
  }
  
  function payForPayment2(){
    if (window.confirm("确认付款？")) {
      $.ajax({
        type: "post",
        async: false,
        url: ip_path + "/changfa_system/repair/payforPaymentDealer.do",
        data: {
          paymentId: $(window.parent.document).find("input[name='costPayId']").val(),
          examineUserId: $(window.parent.document).find("input[name='userId']").val()
        },
        dataType: "json",
        success: function (data) {
          if (data['head']['code'] == 200) {
            window.open("dealerCostPayManage.html", "_self");
          }
        }
      });
    }
  }

  function ajax_dealerCostPay() {
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/repair/queryPayments.do",
      data: {
        chooseItem: $("#dealer_item option:selected").val(),
        itemCont: $("#dealer_info").val(),
        paymentNum: $("#payNum").val(),
        status: $("#status option:selected").val(),
        type: $("#payType option:selected").val(),
        startTime: $("#date_start").val(),
        endTime: $("#date_end").val(),
        roleId:6,
        pageNum: currentPage,
        pageSize: 14
      },
      dataType: "json",
      success: function (data) {
        if (data['head']['code'] != 200) {
          $("#adminTbody").empty();
          $("#adminTbody").append(
            '<td class="td2 txt_center" height="50px" colspan="10">未查到相关信息</td>'
          );
          document.getElementById("barcon1").innerHTML = "";
        } else {
          currentPage = data['body']['result']['pageNum'];
          totalPage = data['body']['result']['pages'];
          totalData = data['body']['result']['total'];
          $("#adminTbody").empty();
          for (var i = 0; i < data['body']['result']['data'].length; i++) {
            var type;
            var status;
            if (data['body']['result']['data'][i]['type'] == 1) {
              type = "发票结算";
            } else {
              type = "返利结算";
            }
  
            if (data['body']['result']['data'][i]['status'] == 1) {
              status = "未付款";
            } else {
              status = "已付款";
            }
            $("#adminTbody").append(
              "<tr id='" + data['body']['result']['data'][i]['paymentId'] + "'>" +
              '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['paymentNum'] + '</td>' +
              '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['dealerName'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['dealerNum'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['createTime'] + '</td>' +
              '<td class="td2 txt_center" >' + type + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['money'] + '</td>' +
              '<td class="td2 txt_center" >' + status + '</td>' +
              '<td class="td2 txt_center" ><a href="###" class="color_cf" onclick="showCostPayDetails2(this)">查看</a></td>' +
              
              '<td class="td2" style="display:none">' + data['body']['result']['data'][i]['roleId'] + '</td>' +
              '</tr>'
            );
          }
          pageSplit();
          hideOrShow();
        }
      }
    });
  }

  function ajax_findBalDetails() {
    var lineNums;
    if ($("#product").val() == null) {
      lineNums = "";
    } else {
      lineNums = $("#product").val().toString();
    }
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/repair/checkAllPayments.do",
      data: {
        id:$(window.parent.document).find("input[name='costPayId']").val(),
      },
      dataType: "json",
      success: function (data) {
        if (data['head']['code'] != 200) {
          $("#adminTbody").empty();
          $("#adminTbody").append(
            '<td class="td2 txt_center" height="50px" colspan="8">未查到相关信息</td>'
          );
        } else {
          if (data['body']['result']['total'] > 6) {
            $("#scrollDiv").addClass("scrollDiv");
          }
          $('#payTotal').text(data['body']['result']['currentMoney'])
          $('#allTotal').text(data['body']['result']['totalMoney'])
          $('#businessCodeNum').text(data['body']['result']['businessCodeNum'])
          $('#billMoney').text(data['body']['result']['billMoney'])
          
          $('#remarks').text(data['body']['result']['remarks'])
          $('#payPerson').text(data['body']['result']['payPerson'])
          
          $("#adminTbody").empty();
          allDate = data['body']['result']['paymentList'];
          for (var i = 0; i < data['body']['result']['paymentList'].length; i++) {
            var status;
            switch (data['body']['result']['paymentList'][i]['status']) {
              case 1:
                status = "待付款";
                break;
              case 2:
                status = "部分付款";
                break;
              case 3:
                status = "待付尾款";
                break;
              case 4:
                status = "全部付款";
                break;
            }
            $("#adminTbody").append(
              "<tr id='" + data['body']['result']['paymentList'][i]['paymentId'] + "'>" +
              '<td class="td2 txt_center" height="33">' + data['body']['result']['paymentList'][i]['paymentNum'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['paymentList'][i]['createTime'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['paymentList'][i]['money'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['paymentList'][i]['money90'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['paymentList'][i]['money10'] + '</td>' +
              '<td class="td2 txt_center" >' + status + '</td>' +
              '<td style="display : none">' + data['body']['result']['paymentList'][i]['paymentId'] + '</td>' +
              '</tr>'
            );
          }
          
          if(data['body']['result']['filesPaths'].length != 0){
            for (var i = 0; i < data['body']['result']['filesPaths'].length; i++) {
              var img_html = "<td><div class='isImg'>"+
                        '<a href="javascript:void(0)" data-magnify="gallery" data-group="g1" data-src="'+ data['body']['result']['filesPaths'][i]['filePath'] +'" data-caption="显示图片">'+
                        '<img src="' + data['body']['result']['filesPaths'][i]['filePath'] + '" class="err_pic" style="width:150px;height:150px;">'+
                        '</a>'+
                          "</div></td>";
              $("#ticketList").append(img_html);
            }
          }
        }
      }
    });
  }

  function queryDealerCostSum9() {
    currentPage = 1;
    ajax_costDealer9();
  }
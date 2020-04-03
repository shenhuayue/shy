  //发货管理列表
  function ajax_sfmm() {
    $.ajax({
      type: "post",
      url: ip_path + "/changfa_system/machineFlow/selectMachineInfo.do",
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
        province:$("#rep_info_shenfen").val(),
        isForeign:1,
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
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['workNum'] + '</td>' +
              '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['company'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['province'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['lineName'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['machineName'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['factoryNum'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['barCode'] + '</td>' +
              '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['productDate'] + '</td>' +
              '<td class="td2 txt_center" >' + imei_status + '</td>' +
              '<td class="td2 txt_center" >' + status + '</td>' +
              "<td class='td2 txt_center' id ='" + data['body']['result']['data'][i]['machineId'] + "' ><a href='###' class='color_cf' onclick='showSendmDetails(this)'>查看</a></td>" +
              '</tr>'
            );
          }
          pageSplit();
          hideOrShow();
        }
      }
    });
  }

//发货管理详情
function showSendmDetails(event) {
  var user_id = event.parentNode.parentNode.id;
  var machine_id = event.parentNode.id;
  $(window.parent.document).find("input[name='userArchivesId']").val(user_id);
  $(window.parent.document).find("input[name='machineId']").val(machine_id);
  window.open("sendmDetails.html", "_self");
}

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
          } else {
            page_work = data['body']['result']['pageNum'];
            if (data['body']['result']['totalCount'] % data['body']['result']['pageSize'] == 0) {
              totalPage_work = data['body']['result']['total'] / data['body']['result']['pageSize'];
            } else {
              totalPage_work = Math.ceil(data['body']['result']['total'] / data['body']['result']['pageSize']);
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
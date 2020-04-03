function ajax_salePlanMdealer(){
    $.ajax({
        type: "post",
        async: false,
        url: ip_path + "/changfa_system/config/selectSalePlanByDealer.do",
        data: {
            uid:$(window.parent.document).find("input[name='userId']").val(),
            planNo:$('#order_info').val(),
          lineNum: $("#line option:selected").val(),
          status: $("#status option:selected").val(),
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
function ajax_saleOrderMdealer() {
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/config/selectSaleOrderByDealer.do",
    data: {
      uid:$(window.parent.document).find("input[name='userId']").val(),
      planNo:$('#order_info').val(),
      lineNum: $("#line option:selected").val(),
      status: $("#status option:selected").val(),
      startTime: $("#date_start").val(),
      endTime: $("#date_end").val(),
      pageNum: currentPage,
      pageSize: 14,
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
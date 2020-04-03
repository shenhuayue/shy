
  //质量反馈
  function daochu1(){
    $.ajax({
      type: "post",
      async: false,
      //contentType:"application/json;charset=utf-8",
      dataType:"json",
      data:{
        type:$("#stateclzt option:selected").val(),
        status:$("#statezt option:selected").val(),
        startTime:$("#date_start").val(),
        endTime:$("#date_end").val()
        
      },
      url: ip_path + "/changfa_system/feedback/selectQualityFeedbacks.do",
      //url: ip_path + "/changfa_system/feedback/exportQualityFeedback.do",
      success: function (data) {
        if(data['head']['code']!=200){
          //alert('无数据')
          alert(data['head']['message'])
        }else{
          //alert('有数据，导出');
          //return false;
          $("#form").attr("action",ip_path + "/changfa_system/feedback/exportQualityFeedback.do");
          $("#form").submit();
        }
      }
    })
  }
  //意见反馈
  function daochu2(){
    $.ajax({
      type: "post",
      async: false,
      //contentType:"application/json;charset=utf-8",
      dataType:"json",
      data:{
        status:$("#statezt option:selected").val(),
        feedbackClassId:$("#type option:selected").val(),
        startTime:$("#date_start").val(),
        endTime:$("#date_end").val()

      },
      //url: ip_path + "/changfa_system/feedback/exportFeedback.do",
      url: ip_path + "/changfa_system/feedback/selectFeedbacks.do",
      success: function (data) {
        if(data['head']['code']!=200){
          //alert('无数据')
          alert(data['head']['message'])
        }else{
          //alert('有数据，导出')
          //return false;
          $("#form").attr("action",ip_path + "/changfa_system/feedback/exportFeedback.do");
          $("#form").submit();
        }
      }
    })
  }
  function ajax_feedBacknew1() {
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/feedback/getFeedbacks.do",
      data: {
        content: $("#content").val(),
        pageNum: currentPage,
        pageSize: 14,
        feedbackClassId: 5,
        startTime: $("#date_start").val(),
        endTime: $("#date_end").val(),
        status:$("#statezt option:selected").val(),
        type:$("#stateclzt option:selected").val(),
        
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
        //console.log(data)
        
          currentPage = data['body']['result']['pageNum'];
          totalPage = data['body']['result']['pages'];
          totalData = data['body']['result']['total'];
          $("#adminTbody").empty();
          for (var i = 0; i < data['body']['result']['data'].length; i++) {
            
            if(data['body']['result']['data'][i]['status']==0){
                status = '未回复'
            }else if(data['body']['result']['data'][i]['status']==1){
                status = '已回复'
            }
            if(data['body']['result']['data'][i]['type']==0){
              type = '未处理'
          }else if(data['body']['result']['data'][i]['type']==1){
            type = '已处理'
          }
            
              $("#adminTbody").append(
                "<tr id =" + data['body']['result']['data'][i]['id'] + ">" +
                '<td class="td2" height="33">' + data['body']['result']['data'][i]['feedbackNum'] + '</td>' +
                '<td class="td2" >' + data['body']['result']['data'][i]['userName'] + '</td>' +
                '<td class="td2" >' + data['body']['result']['data'][i]['userMobile'] + '</td>' +
                '<td class="td2" >' + type + '</td>' +
                '<td class="td2" >'+ status +'</td>' +
                '<td class="td2" >' + data['body']['result']['data'][i]['createTime'] + '</td>' +
                '<td class="td2" >' + '<span onclick="feeddetails1(this)" style="color:#1ABC9C;cursor:pointer">'+'查看详情'+'</span>' + '</td>' +
                '</tr>'
              );
            
          }
          pageSplit();
          hideOrShow();
        }
      }
    });
  }
function ajax_feedBacknew() {
    $.ajax({
      type: "post",
      async: false,
      url: ip_path + "/changfa_system/feedback/getFeedbacks.do",
      data: {
        content: $("#content").val(),
        pageNum: currentPage,
        pageSize: 14,
        feedbackClassId: $("#type option:selected").val(),
        startTime: $("#date_start").val(),
        endTime: $("#date_end").val(),
        status:$("#statezt option:selected").val(),
        feedbackType:1,
        
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
        //console.log(data)
        
          currentPage = data['body']['result']['pageNum'];
          totalPage = data['body']['result']['pages'];
          totalData = data['body']['result']['total'];
          $("#adminTbody").empty();
          for (var i = 0; i < data['body']['result']['data'].length; i++) {
            
            if(data['body']['result']['data'][i]['status']==0){
                status = '未回复'
            }else if(data['body']['result']['data'][i]['status']==1){
                status = '已回复'
            }
              $("#adminTbody").append(
                "<tr id =" + data['body']['result']['data'][i]['id'] + ">" +
                '<td class="td2" height="33">' + data['body']['result']['data'][i]['feedbackNum'] + '</td>' +
                '<td class="td2" >' + data['body']['result']['data'][i]['userName'] + '</td>' +
                '<td class="td2" >' + data['body']['result']['data'][i]['userMobile'] + '</td>' +
                '<td class="td2" >' + data['body']['result']['data'][i]['feedbackClassName'] + '</td>' +
                '<td class="td2" >'+ status +'</td>' +
                '<td class="td2" >' + data['body']['result']['data'][i]['createTime'] + '</td>' +
                '<td class="td2" >' + '<span onclick="feeddetails(this)" style="color:#1ABC9C;cursor:pointer">'+'查看详情'+'</span>' + '</td>' +
                '</tr>'
              );
            
          }
          pageSplit();
          hideOrShow();
        }
      }
    });
  }
  function feeddetails(event) {
    $(window.parent.document).find("input[name='feedbackid']").val(event.parentNode.parentNode.id);
    window.open("feedBackdetail.html","_self");
    //alert(user_id)
    
  }
  function feeddetails1(event) {
    $(window.parent.document).find("input[name='feedbackid']").val(event.parentNode.parentNode.id);
    window.open("feedBackdetail1.html","_self");
    //alert(user_id)
    
  }

function huifu(){
  if($("#describeyijian").val()!=''){
    
    $.ajax({
        type: "post",
        async: false,
        url: ip_path + "/changfa_system/feedback/updateFeedback.do",
        data: {
          remark: $("#describeyijian").val(),
          id:$(window.parent.document).find("input[name='feedbackid']").val(),
        },
        dataType: "json",
        success: function (data) {
          console.log(data)
          alert('回复成功')
  
        }
    })
  }else(
    alert('输入回复内容')
  )
  
}

function editDealerInfo(event){
  $('.byskip').show();
  $('#zlfkid').val($(event).parent().parent().prev().val());
  //alert($('#zlfkid').val())
  
  
  /*document.getElementById('maodian').scrollIntoView({
    block: 'start',
    inline: 'nearest',
    behavior: 'smooth'
  })*/

  //alert($('#zlfkid').val());
  //return false;
}
function byclose(){
  $('.byskip').hide();
}

function tijiao(){
  $.ajax({
    type: "post",
    async: false,
    url: ip_path + "/changfa_system/feedback//updateQualityFeedback.do",
    data: {
      id: $("#zlfkid").val(),
      feedbackClassId:$('#type option:selected').val(),
    },
    dataType: "json",
    success: function (data) {
      alert(data['head']['message']);
      $('.byskip').hide();
      window.open("feedBackzl.html","_self");

    }
})

}
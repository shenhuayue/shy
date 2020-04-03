function warningHistory(event) {
    $("#alarmHistory").show();
    jQuery.support.cors = true;
    $.ajax({
        type : "get",
        url : "http://iot.changfanz.net:8085/api/v1/machinery/getAlarmList",
        data : {
            imei : event.parentNode.parentNode.childNodes[1].innerHTML,
            page : 1,
            pageSize : 1000000
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] != 200){
                $("#alarmList").empty();
                $("#alarmList").append(
                    '<td class="td2" height="50px" colspan="3">未查到相关信息</td>'
                );
            }else{
                $("#alarmList").empty();
                for(var i=0;i<data['body']['resultList'].length;i++){
                    $("#alarmList").append(
                        "<tr>" +
                        '<td class="td2" height="33">' + data['body']['resultList'][i]['alarmName'] + '</td>' +
                        '<td class="td2">' + data['body']['resultList'][i]['alarmContent'] + '</td>' +
                        '<td class="td2">' + data['body']['resultList'][i]['alarmTime'] + '</td>' +
                        '</tr>'
                    );
                }
            }
        }
    });
}

function closeAlarmHistory() {
    $("#alarmHistory").hide();
}

function queryOverWarning() {
    currentPage = 1;
    ajax_overWarning();
}

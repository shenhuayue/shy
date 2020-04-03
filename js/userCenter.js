function addSaler() {
    window.open("addSaler.html","_self");
}

function addDealer() {
    $(window.parent.document).find("input[name='newDealerName']").val("");
    $(window.parent.document).find("input[name='newDealerNum']").val("");
    window.open("addDealer.html","_self");
}

function addNewDealer(event) {
    $(window.parent.document).find("input[name='newDealerName']").val(event.parentNode.parentNode.childNodes[0].innerHTML);
    $(window.parent.document).find("input[name='newDealerNum']").val(event.parentNode.parentNode.childNodes[1].innerHTML);
    window.open("addDealer.html","_self");
}

function addThreeServer() {
    levelNum = 1;
    window.open("addServer.html","_self");
}

function addSocialServer() {
    levelNum = 1;
    window.open("addSocialServer.html","_self");
}

function querySaler() {
    currentPage = 1;
    ajax_salerM();
    // $.ajax({
    //     type : "post",
    //     url : ip_path+"/changfa_system/user/selectSalesmanList.do",
    //     data : {
    //         pageNum : currentPage,
    //         pageSize : 14,
    //         chooseItem : $("#saler_type option:selected").val(),
    //         itemCont : $("#saler_info").val(),
    //         province : ""
    //     },
    //     dataType : "json",
    //     success : function (data) {
    //         if(data['head']['message'] == "查询为空！"){
    //             totalPage = 1;
    //             totalData = 0;
    //             $("#adminTbody").empty();
    //             $("#adminTbody").append(
    //                 '<td class="td2" height="50px" colspan="6">未查到相关信息</td>'
    //             );
    //             pageSplit();
    //             hideOrShow();
    //         }else {
    //             currentPage = data['body']['result']['pageNum'];
    //             totalPage = data['body']['result']['pages'];
    //             totalData = data['body']['result']['total'];
    //
    //             var on_off_path;
    //             $("#adminTbody").empty();
    //             for(var i=0;i<data['body']['result']['data'].length;i++){
    //                 if(data['body']['result']['data'][i]['status'] == 0){
    //                     on_off_path = "http://app.changfanz.net:3588/changfa_file/off.png";
    //                 }else {
    //                     on_off_path = "http://app.changfanz.net:3588/changfa_file/on.png";
    //                 }
    //                 $("#adminTbody").append(
    //                     "<tr align='center'id =" + data['body']['result']['data'][i]['userId'] +">" +
    //                     '<td class="td2" height="33">' + data['body']['result']['data'][i]['userName'] + '</td>' +
    //                     '<td class="td2" >' + data['body']['result']['data'][i]['workNum'] + '</td>' +
    //                     '<td class="td2" >' + data['body']['result']['data'][i]['mobile'] + '</td>' +
    //                     '<td class="td2" >' + data['body']['result']['data'][i]['taskPlace'] + '</td>' +
    //                     '<td class="td2" ><img src="'+on_off_path+'" class="mg-t5" onclick="toogle_status(this)"></td>'+
    //                     '<td class="td2" ><a href="###" onclick="showSalerDetails(this)">查看详情</a></td>' +
    //                     '</tr>'
    //                 );
    //             }
    //             pageSplit();
    //             hideOrShow();
    //             //选择省
    //             // $("#province").empty();
    //             // $.ajax({
    //             //     type : "post",
    //             //     async : false,
    //             //     url : ip_path+"/changfa_system/place/getProvince.do",
    //             //     dataType : "json",
    //             //     success : function (data) {
    //             //         $("#province").append("<option value='"+ 0 +"'>全部</option>");
    //             //         for(var i=0;i<data['body']['resultList']['length'];i++){
    //             //             $("#province").append("<option value='"+ data['body']['resultList'][i]['id'] +"'>"+data['body']['resultList'][i]['name']+"</option>");
    //             //         }
    //             //         $("#province").unbind();
    //             //     }
    //             // });
    //             // //选择市
    //             // // if($("#province").val() != ""){
    //             // //     $("#city").empty();
    //             // //     if($("#province option:selected").val() == 0){
    //             // //         $("#city").append("<option value='"+ 0 +"'>全部</option>");
    //             // //     }else {
    //             // //         $.ajax({
    //             // //             type : "post",
    //             // //             async : false,
    //             // //             url : ip_path+"/changfa_system/place/getCity.do",
    //             // //             data : {
    //             // //                 parentId : $("#province option:selected").val(),
    //             // //             },
    //             // //             dataType : "json",
    //             // //             success : function (data) {
    //             // //                 $("#city").append("<option value=''>全部</option>");
    //             // //                 for(var i=0;i<data['body']['resultList']['length'];i++){
    //             // //                     $("#city").append("<option value='"+ data['body']['resultList'][i]['id'] +"'>"+data['body']['resultList'][i]['name']+"</option>");
    //             // //                 }
    //             // //                 $("#city").unbind();
    //             // //             }
    //             // //         });
    //             // //     }
    //             // // }
    //             // $("#province").change(function () {
    //             //     $("#saler_info").val("");
    //             //     currentPage = 1;
    //             //     ajax_salerM();
    //             //     // $("#city").empty();
    //             //     // if($("#province option:selected").val() == 0){
    //             //     //     $("#city").append("<option value='"+ 0 +"'>全部</option>");
    //             //     // }else {
    //             //     //     $.ajax({
    //             //     //         type : "post",
    //             //     //         async : false,
    //             //     //         url : ip_path+"/changfa_system/place/getCity.do",
    //             //     //         data : {
    //             //     //             parentId : $("#province option:selected").val(),
    //             //     //         },
    //             //     //         dataType : "json",
    //             //     //         success : function (data) {
    //             //     //             $("#city").append("<option value=''>全部</option>");
    //             //     //             for(var i=0;i<data['body']['resultList']['length'];i++){
    //             //     //                 $("#city").append("<option value='"+ data['body']['resultList'][i]['id'] +"'>"+data['body']['resultList'][i]['name']+"</option>");
    //             //     //             }
    //             //     //             $("#city").unbind();
    //             //     //         }
    //             //     //     });
    //             //     //}
    //             //
    //             //     //显示三包员
    //             //     // if($("#city").val() != ""){
    //             //     //     currentPage = 1;
    //             //     //     ajax_salerM();
    //             //     // }
    //             //     // $("#city").change(function () {
    //             //     //     $("#saler_info").val("");
    //             //     //     currentPage = 1;
    //             //     //     ajax_salerM();
    //             //     // });
    //
    //             // });
    //         }
    //     }
    // });
}

function queryDealer() {
    currentPage = 1;
    ajax_dealerM();
    // $.ajax({
    //     type : "post",
    //     url : ip_path+"/changfa_system/user/selectUserInfo.do",
    //     data : {
    //         roleId : 6,
    //         pageNum : currentPage,
    //         pageSize : 14,
    //         company : $("#name_dealer").val(),
    //         province : "",
    //         city : ""
    //     },
    //     dataType : "json",
    //     success : function (data) {
    //         if(data['head']['message'] == "查询为空！"){
    //             totalPage = 1;
    //             totalData = 0;
    //             $("#adminTbody").empty();
    //             $("#adminTbody").append(
    //                 '<td class="td2" height="50px" colspan="7">未查到相关信息</td>'
    //             );
    //             pageSplit();
    //             hideOrShow();
    //         }else{
    //             currentPage = data['body']['result']['pageNum'];
    //             totalPage = data['body']['result']['pages'];
    //             totalData = data['body']['result']['total'];
    //             var on_off_path;
    //             $("#adminTbody").empty();
    //             for(var i=0;i<data['body']['result']['data'].length;i++){
    //                 if(data['body']['result']['data'][i]['status'] == 0){
    //                     on_off_path = "http://app.changfanz.net:3588/changfa_file/off.png";
    //                 }else {
    //                     on_off_path = "http://app.changfanz.net:3588/changfa_file/on.png";
    //                 }
    //                 $("#adminTbody").append(
    //                     "<tr align='center' id =" + data['body']['result']['data'][i]['userId'] +">" +
    //                     '<td class="td2" height="33">' + data['body']['result']['data'][i]['company'] + '</td>' +
    //                     '<td class="td2" >' + data['body']['result']['data'][i]['address'] + '</td>' +
    //                     '<td class="td2" >' + data['body']['result']['data'][i]['mobile'] + '</td>' +
    //                     '<td class="td2" >' + data['body']['result']['data'][i]['userName'] + '</td>' +
    //                     '<td class="td2" >' + data['body']['result']['data'][i]['taskPlace'] + '</td>' +
    //                     '<td class="td2" ><img src="'+on_off_path+'" class="mg-t5" onclick="toogle_status(this)"></td>'+
    //                     '<td class="td2" ><a href="###" onclick="showDealerDetails(this)">查看详情</a></td>' +
    //                     '</tr>'
    //                 );
    //             }
    //             pageSplit();
    //             hideOrShow();
    //             //选择省
    //             // $("#province").empty();
    //             // $.ajax({
    //             //     type : "post",
    //             //     async : false,
    //             //     url : ip_path+"/changfa_system/place/getProvince.do",
    //             //     dataType : "json",
    //             //     success : function (data) {
    //             //         $("#province").append("<option value='"+ 0 +"'>全部</option>");
    //             //         for(var i=0;i<data['body']['resultList']['length'];i++){
    //             //             $("#province").append("<option value='"+ data['body']['resultList'][i]['id'] +"'>"+data['body']['resultList'][i]['name']+"</option>");
    //             //         }
    //             //         $("#province").unbind();
    //             //     }
    //             // });
    //             // //选择市
    //             // if($("#province").val() != ""){
    //             //     $("#city").empty();
    //             //     if($("#province option:selected").val() == 0){
    //             //         $("#city").append("<option value='"+ 0 +"'>全部</option>");
    //             //     }else {
    //             //         $.ajax({
    //             //             type : "post",
    //             //             async : false,
    //             //             url : ip_path+"/changfa_system/place/getCity.do",
    //             //             data : {
    //             //                 parentId : $("#province option:selected").val(),
    //             //             },
    //             //             dataType : "json",
    //             //             success : function (data) {
    //             //                 $("#city").append("<option value=''>全部</option>");
    //             //                 for(var i=0;i<data['body']['resultList']['length'];i++){
    //             //                     $("#city").append("<option value='"+ data['body']['resultList'][i]['id'] +"'>"+data['body']['resultList'][i]['name']+"</option>");
    //             //                 }
    //             //                 $("#city").unbind();
    //             //             }
    //             //         });
    //             //     }
    //             // }
    //             // $("#province").change(function () {
    //             //     $("#name_dealer").val("");
    //             //     currentPage = 1;
    //             //     ajax_dealerM();
    //             //     $("#city").empty();
    //             //     if($("#province option:selected").val() == 0){
    //             //         $("#city").append("<option value='"+ 0 +"'>全部</option>");
    //             //     }else {
    //             //         $.ajax({
    //             //             type : "post",
    //             //             async : false,
    //             //             url : ip_path+"/changfa_system/place/getCity.do",
    //             //             data : {
    //             //                 parentId : $("#province option:selected").val(),
    //             //             },
    //             //             dataType : "json",
    //             //             success : function (data) {
    //             //                 $("#city").append("<option value=''>全部</option>");
    //             //                 for(var i=0;i<data['body']['resultList']['length'];i++){
    //             //                     $("#city").append("<option value='"+ data['body']['resultList'][i]['id'] +"'>"+data['body']['resultList'][i]['name']+"</option>");
    //             //                 }
    //             //                 $("#city").unbind();
    //             //             }
    //             //         });
    //             //     }
    //             //
    //             //     //显示三包员
    //             //     if($("#city").val() != ""){
    //             //         currentPage = 1;
    //             //         ajax_dealerM();
    //             //     }
    //             //     $("#city").change(function () {
    //             //         $("#name_dealer").val("");
    //             //         currentPage = 1;
    //             //         ajax_dealerM();
    //             //     });
    //             //
    //             // });
    //         }
    //
    //     }
    // });
}

function querySocialServer() {
    currentPage = 1;
    ajax_social_serverM();
}

function queryServer() {
    currentPage = 1;
    ajax_cf_serverM();
    // $.ajax({
    //     type : "post",
    //     url : ip_path+"/changfa_system/user/selectUserInfoList.do",
    //     data : {
    //         pageNum : currentPage,
    //         pageSize : 14,
    //         chooseItem : "name",
    //         itemCont : $("#name_server").val(),
    //         province : $("#province option:selected").val(),
    //         city : $("#city option:selected").val()
    //     },
    //     dataType : "json",
    //     success : function (data) {
    //         if(data['head']['message'] == "查询为空！"){
    //             totalPage = 1;
    //             totalData = 0;
    //             $("#adminTbody").empty();
    //             $("#adminTbody").append(
    //                 '<td class="td2" height="50px" colspan="7">未查到相关信息</td>'
    //             );
    //             pageSplit();
    //             hideOrShow();
    //         }else {
    //             currentPage = data['body']['result']['pageNum'];
    //             totalPage = data['body']['result']['pages'];
    //             totalData = data['body']['result']['total'];
    //             var on_off_path;
    //             $("#adminTbody").empty();
    //             for(var i=0;i<data['body']['result']['data'].length;i++){
    //                 if(data['body']['result']['data'][i]['status'] == 0){
    //                     on_off_path = "http://app.changfanz.net:3588/changfa_file/off.png";
    //                 }else {
    //                     on_off_path = "http://app.changfanz.net:3588/changfa_file/on.png";
    //                 }
    //                 $("#adminTbody").append(
    //                     "<tr align='center'id =" + data['body']['result']['data'][i]['userId'] +">" +
    //                     '<td class="td2" height="33">'+data['body']['result']['data'][i]['userName']+'</td>' +
    //                     '<td class="td2">' + data['body']['result']['data'][i]['workNum'] + '</td>' +
    //                     '<td class="td2">' + data['body']['result']['data'][i]['mobile'] + '</td>' +
    //                     '<td class="td2">' + data['body']['result']['data'][i]['taskPlace'] + '</td>' +
    //                     '<td class="td2">' + data['body']['result']['data'][i]['company'] + '</td>' +
    //                     '<td class="td2"><img src="'+on_off_path+'" class="mg-t5" onclick="toogle_status(this)"></td>'+
    //                     '<td class="td2"><a href="###" onclick="showThreeServerDetails(this)">查看详情</a></td>' +
    //                     '</tr>'
    //                 );
    //             }
    //             pageSplit();
    //             hideOrShow();
    //             //选择省
    //             // $("#province").empty();
    //             // $.ajax({
    //             //     type : "post",
    //             //     async : false,
    //             //     url : ip_path+"/changfa_system/place/getProvince.do",
    //             //     dataType : "json",
    //             //     success : function (data) {
    //             //         $("#province").append("<option value='"+ 0 +"'>全部</option>");
    //             //         for(var i=0;i<data['body']['resultList']['length'];i++){
    //             //             $("#province").append("<option value='"+ data['body']['resultList'][i]['id'] +"'>"+data['body']['resultList'][i]['name']+"</option>");
    //             //         }
    //             //         $("#province").unbind();
    //             //     }
    //             // });
    //             // //选择市
    //             // if($("#province").val() != ""){
    //             //     $("#city").empty();
    //             //     if($("#province option:selected").val() == 0){
    //             //         $("#city").append("<option value='"+ 0 +"'>全部</option>");
    //             //     }else {
    //             //         $.ajax({
    //             //             type : "post",
    //             //             async : false,
    //             //             url : ip_path+"/changfa_system/place/getCity.do",
    //             //             data : {
    //             //                 parentId : $("#province option:selected").val(),
    //             //             },
    //             //             dataType : "json",
    //             //             success : function (data) {
    //             //                 $("#city").append("<option value=''>全部</option>");
    //             //                 for(var i=0;i<data['body']['resultList']['length'];i++){
    //             //                     $("#city").append("<option value='"+ data['body']['resultList'][i]['id'] +"'>"+data['body']['resultList'][i]['name']+"</option>");
    //             //                 }
    //             //                 $("#city").unbind();
    //             //             }
    //             //         });
    //             //     }
    //             // }
    //             // $("#province").change(function () {
    //             //     $("#name_server").val("");
    //             //     currentPage = 1;
    //             //     ajax_serverM();
    //             //     $("#city").empty();
    //             //     if($("#province option:selected").val() == 0){
    //             //         $("#city").append("<option value='"+ 0 +"'>全部</option>");
    //             //     }else {
    //             //         $.ajax({
    //             //             type : "post",
    //             //             async : false,
    //             //             url : ip_path+"/changfa_system/place/getCity.do",
    //             //             data : {
    //             //                 parentId : $("#province option:selected").val(),
    //             //             },
    //             //             dataType : "json",
    //             //             success : function (data) {
    //             //                 $("#city").append("<option value=''>全部</option>");
    //             //                 for(var i=0;i<data['body']['resultList']['length'];i++){
    //             //                     $("#city").append("<option value='"+ data['body']['resultList'][i]['id'] +"'>"+data['body']['resultList'][i]['name']+"</option>");
    //             //                 }
    //             //                 $("#city").unbind();
    //             //             }
    //             //         });
    //             //     }
    //
    //                 //显示三包员
    //             //     if($("#city").val() != ""){
    //             //         currentPage = 1;
    //             //         ajax_serverM();
    //             //     }
    //             //     $("#city").change(function () {
    //             //         $("#name_server").val("");
    //             //         currentPage = 1;
    //             //         ajax_serverM();
    //             //     });
    //             //
    //             // });
    //         }
    //     }
    // });
}

function queryUser() {
    currentPage = 1;
    ajax_userM();
}

function toogle_salerStatus(event) {
    var account = event.parentNode.parentNode.childNodes[2].innerHTML;
    var status;
    var roleId;
    switch(event.parentNode.parentNode.childNodes[3].innerHTML){
        case "大区经理":
            roleId = 3;
            break;
        case "省经理":
            roleId = 4;
            break;
        case "业务员":
            roleId = 5;
            break;
        case "产品经理":
            roleId = 12;
            break;
        case "副总经理":
            roleId = 13;
            break;
        case "总经理":
            roleId = 14;
            break;
    }

    if(event.src == "http://app.changfanz.net:3588/changfa_file/on.png"){
        status = 0;
    }else {
        status = 1;
    }
    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/account/stopOrStartAccount.do",
        data : {
            roleId : roleId,
            account : account || event.parentNode.parentNode.childNodes[1].innerHTML,
            status : status
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                event.src == "http://app.changfanz.net:3588/changfa_file/off.png" ? event.src = "http://app.changfanz.net:3588/changfa_file/on.png" : event.src = "http://app.changfanz.net:3588/changfa_file/off.png";
            }
        }
    });
}

function toogle_dealerStatus(event) {
    var account ;
    event.parentNode.parentNode.childNodes[2].innerHTML == "" ? account = event.parentNode.parentNode.childNodes[0].innerHTML : account = event.parentNode.parentNode.childNodes[2].innerHTML;
    var status;

    if(event.src == "http://app.changfanz.net:3588/changfa_file/on.png"){
        status = 0;
    }else {
        status = 1;
    }
    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/account/stopOrStartAccount.do",
        data : {
            roleId : 6,
            account : account ,
            status : status
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                event.src == "http://app.changfanz.net:3588/changfa_file/off.png" ? event.src = "http://app.changfanz.net:3588/changfa_file/on.png" : event.src = "http://app.changfanz.net:3588/changfa_file/off.png";
            }
        }
    });
}

function toogle_cfServerStatus(event) {
   var account = event.parentNode.parentNode.childNodes[2].innerHTML?event.parentNode.parentNode.childNodes[2].innerHTML:event.parentNode.parentNode.childNodes[1].innerHTML;
    var status;

    if(event.src == "http://app.changfanz.net:3588/changfa_file/on.png"){
        status = 0;
    }else {
        status = 1;
    }
    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/account/stopOrStartAccount.do",
        data : {
            roleId : 7,
            account : account,
            status : status
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                event.src == "http://app.changfanz.net:3588/changfa_file/off.png" ? event.src = "http://app.changfanz.net:3588/changfa_file/on.png" : event.src = "http://app.changfanz.net:3588/changfa_file/off.png";
            }
        }
    });
}

function toogle_socialServerStatus(event) {
    var account ;
    event.parentNode.parentNode.childNodes[2].innerHTML == "" ? account = event.parentNode.parentNode.childNodes[1].innerHTML : account = event.parentNode.parentNode.childNodes[2].innerHTML;
    var status;

    if(event.src == "http://app.changfanz.net:3588/changfa_file/on.png"){
        status = 0;
    }else {
        status = 1;
    }
    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/account/stopOrStartAccount.do",
        data : {
            roleId : 9,
            account : account,
            status : status
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                event.src == "http://app.changfanz.net:3588/changfa_file/off.png" ? event.src = "http://app.changfanz.net:3588/changfa_file/on.png" : event.src = "http://app.changfanz.net:3588/changfa_file/off.png";
            }
        }
    });
}

function toogle_logisticsCompanyStatus(event) {
    var account ;
    event.parentNode.parentNode.childNodes[3].innerHTML == "" ? account = event.parentNode.parentNode.childNodes[1].innerHTML : account = event.parentNode.parentNode.childNodes[3].innerHTML;
    var status;

    if(event.src == "http://app.changfanz.net:3588/changfa_file/on.png"){
        status = 0;
    }else {
        status = 1;
    }
    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/account/stopOrStartAccount.do",
        data : {
            roleId : 27,
            account : account,
            status : status
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                event.src == "http://app.changfanz.net:3588/changfa_file/off.png" ? event.src = "http://app.changfanz.net:3588/changfa_file/on.png" : event.src = "http://app.changfanz.net:3588/changfa_file/off.png";
            }
        }
    });
}

function toogle_logisticsPersonStatus(event) {
    //var account ;
    //event.parentNode.parentNode.childNodes[3].innerHTML == "" ? account = event.parentNode.parentNode.childNodes[1].innerHTML : account = event.parentNode.parentNode.childNodes[3].innerHTML;
    var status;

    if(event.src == "http://app.changfanz.net:3588/changfa_file/on.png"){
        status = 0;
    }else {
        status = 1;
    }
    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/account/stopOrStartAccount.do",
        data : {
            roleId : 28,
            account : event.parentNode.parentNode.childNodes[2].innerHTML,
            status : status
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                event.src == "http://app.changfanz.net:3588/changfa_file/off.png" ? event.src = "http://app.changfanz.net:3588/changfa_file/on.png" : event.src = "http://app.changfanz.net:3588/changfa_file/off.png";
            }
        }
    });
}

function toogle_status_1(event) {
    var account = event.parentNode.parentNode.childNodes[1].innerHTML;
    var status;

    if(event.src == "http://app.changfanz.net:3588/changfa_file/on.png"){
        status = 0;
    }else {
        status = 1;
    }
    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/account/stopOrStartAccount.do",
        data : {
            account : account,
            status : status
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                event.src == "http://app.changfanz.net:3588/changfa_file/off.png" ? event.src = "http://app.changfanz.net:3588/changfa_file/on.png" : event.src = "http://app.changfanz.net:3588/changfa_file/off.png";
            }
        }
    });
}

function toogle_statusInDetail(event) {
    var account;
    $("#mobile").text() == "" ? account = $("#workNum").text() : account = $("#mobile").text();
    var status;

    if(event.src == "http://app.changfanz.net:3588/changfa_file/on.png"){
        status = 0;
    }else {
        status = 1;
    }

    var roleId;
    switch($("#type").text()){
        case "大区经理":
            roleId = 3;
            break;
        case "省经理":
            roleId = 4;
            break;
        case "业务员":
            roleId = 5;
            break;
        case "经销商":
            roleId = 6;
            break;
        case "社会化服务站":
            roleId = 9;
            break;
        case "常发三包员":
            roleId = 7;
            break;
        case "经销商三包员":
            roleId = 7;
            break;
        case "注册用户":
            roleId = 8;
            break;
        case "经销商销售":
            roleId = 10;
            break;
    }

    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/account/stopOrStartAccount.do",
        data : {
            roleId : roleId,
            account : account,
            status : status
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                event.src == "http://app.changfanz.net:3588/changfa_file/off.png" ? event.src = "http://app.changfanz.net:3588/changfa_file/on.png" : event.src = "http://app.changfanz.net:3588/changfa_file/off.png";
            }
        }
    });
}

function toogle_logisticsStatusInDetail(event) {
    var account;
    $("#contactMobile").text() == "" ? account = $("#companyNum").text() : account = $("#contactMobile").text();
    var status;

    if(event.src == "http://app.changfanz.net:3588/changfa_file/on.png"){
        status = 0;
    }else {
        status = 1;
    }

    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/account/stopOrStartAccount.do",
        data : {
            roleId : 27,
            account : account,
            status : status
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                event.src == "http://app.changfanz.net:3588/changfa_file/off.png" ? event.src = "http://app.changfanz.net:3588/changfa_file/on.png" : event.src = "http://app.changfanz.net:3588/changfa_file/off.png";
            }
        }
    });
}

function createSaler() {
    var reg1 = /^[0-9]{6}$/;
    var reg2 = /^[0-9]{6}[a-z]{1}$/;
    var reg3 = /^[0-9]{6}[A-Z]{1}$/;
    var reg_name = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;
     if($("#createName").val() == ""){
        alert("请输入销售员姓名！");
     }else if($("#createName").val().length > 15 || reg_name.test($("#createName").val())){
        alert("销售员姓名格式错误！");
     }else if($("#createWorkNo").val() == ""){
         alert("请输入销售员工号！");
     }else if(!reg1.test($("#createWorkNo").val()) && !reg2.test($("#createWorkNo").val())  &&  !reg3.test($("#createWorkNo").val())){
         alert("请输入正确的销售员工号！");
     }else if($("#tags_1").val() == ""){
        alert("请输入销售员业务省！");
     } else if($("#tags_2").val() == ""){
         alert("请输入销售员负责产品线！");
     }else if ($("#createMobile").val() == ""){
        alert("请输入销售员电话！")
      } else{
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test($("#createMobile").val())) {
            alert("手机号格式错误！");
        }else {
            $.ajax({
                type : "post",
                url : ip_path+"/changfa_system/account/createAccountPerson.do",
                data : {
                    account : $("#createMobile").val(),
                    name : $("#createName").val(),
                    roleId : $("#role option:selected").val(),
                    workNum : $("#createWorkNo").val(),
                    token : $(window.parent.document).find("input[name='token']").val(),
                    province : $("#tags_1").val(),
                    city : "",
                    lines : $("#tags_2").val(),
                    company : $("#createCompany").val()
                },
                dataType : "json",
                success : function (data) {
                    if(data['head']['code'] == 200){
                        window.open("salerManage.html","_self");
                    }else{
                        alert(data['head']['message']);
                    }
                }
            });
        }
    }
}

function createDealer() {
    var serviceLevel = $("#tags_2").val();

    serviceLevel = serviceLevel.replace(/\一星级/g,"1");
    serviceLevel = serviceLevel.replace(/\二星级/g,"2");
    serviceLevel = serviceLevel.replace(/\三星级/g,"3");
    serviceLevel = serviceLevel.replace(/\轮式拖拉机/g,"601");
    serviceLevel = serviceLevel.replace(/\履带收割机/g,"612");
    serviceLevel = serviceLevel.replace(/\轮式收割机/g,"615");
    serviceLevel = serviceLevel.replace(/\轮式玉米收/g,"622");
    serviceLevel = serviceLevel.replace(/\高速插秧机/g,"61102");
    serviceLevel = serviceLevel.replace(/\手扶插秧机/g,"61101");
    serviceLevel = serviceLevel.replace(/\花生收获机/g,"628");
    serviceLevel = serviceLevel.replace(/\单缸柴油机/g,"606");
    serviceLevel = serviceLevel.replace(/\风冷柴油机/g,"607");
    serviceLevel = serviceLevel.replace(/\手扶拖拉机/g,"602");
    serviceLevel = serviceLevel.replace(/\发电机组/g,"603");
    serviceLevel = serviceLevel.replace(/\多缸柴油机/g,"605");

    var reg4 = /^[0-9]{6}$/;
    var reg_name = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;
    if($("#createWorkNo").val() == ""){
        alert("请输入经销商企业编号！");
    }else if(!reg4.test($("#createWorkNo").val())){
        alert("请输入正确的企业编号格式！");
    }else if($("#createCompany").val() == ""){
        alert("请输入经销商名称！");
    }else if(reg_name.test($("#createCompany").val())){
        alert("经销商名称格式错误！");
    }else if($("#createAddress").val() == ""){
        alert("请输入经销商地址！");
    }else if($("#province option:selected").text() == ""){
        alert("请输入经销商业务省！");
    }else if($("#city option:selected").text() == ""){
        alert("请输入经销商业务市！");
    }else if($("#tags_2").val() == ""){
        alert("请选择产品星级！");
    }else if($("#createName").val() == ""){
        alert("请输入负责人姓名！");
    }else if($("#createName").val().length > 15 || reg_name.test($("#createName").val())){
        alert("负责人姓名格式错误！");
    }else if ($("#createMobile").val() == ""){
        alert("请输入负责人电话！")
    } else{
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test($("#createMobile").val())) {
            alert("手机号格式错误！");
        }else {
            $.ajax({
                type : "post",
                url : ip_path+"/changfa_system/account/createAccountService.do",
                data : {
                    account : $("#createMobile").val(),
                    name : $("#createName").val(),
                    roleId : 6,
                    workNum : $("#createWorkNo").val(),
                    token : $(window.parent.document).find("input[name='token']").val(),
                    company : $("#createCompany").val(),
                    address : $("#createAddress").val(),
                    province : $("#province option:selected").text(),
                    serviceLevel : serviceLevel,
                    city : $("#city option:selected").text(),
                    remark : $("#remark").val(),
                    //province : $("#remarkshenfen").val()
                },
                dataType : "json",
                success : function (data) {
                    if(data['head']['code'] == 200){
                        window.open("dealersManage.html","_self");
                    }else{
                        alert(data['head']['message']);
                    }
                }
            });
        }
    }
}

function createServer() {
    var reg1 = /^[0-9]{6}$/;
    var reg2 = /^[0-9]{6}[a-z]{1}$/;
    var reg3 = /^[0-9]{6}[A-Z]{1}$/;
    var reg_name = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;
     if($("#createName").val() == ""){
        alert("请输入三包员姓名！");
     }else if($("#createName").val().length > 15 || reg_name.test($("#createName").val())){
        alert("三包员姓名格式错误！");
     }else if($("#createWorkNo").val() == ""){
         alert("请输入三包员工号！");
     } else if(!reg1.test($("#createWorkNo").val()) && !reg2.test($("#createWorkNo").val()) && !reg3.test($("#createWorkNo").val())){
         alert("请输入正确的三包员工号！");
     }else if($("#tags_1").val() == ""){
        alert("请选择三包员业务省！");
     }else if($("#tags_2").val() == ""){
         alert("请选择三包员负责的产品线！");
     }else if ($("#createMobile").val() == ""){
        alert("请输入三包员电话！");
     } else{
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test($("#createMobile").val())) {
            alert("手机号格式错误！");
        }else {
            $.ajax({
                type : "post",
                url : ip_path+"/changfa_system/account/createAccountPerson.do",
                data : {
                    account : $("#createMobile").val(),
                    name : $("#createName").val(),
                    roleId : 7,
                    workNum : $("#createWorkNo").val(),
                    token : $(window.parent.document).find("input[name='token']").val(),
                    province : $("#tags_1").val(),
                    city : "",
                    lines : $("#tags_2").val(),
                    company : $("#createCompany").val()
                },
                dataType : "json",
                success : function (data) {
                    if(data['head']['code'] == 200){
                        window.open("cfServeManage.html","_self");
                    }else{
                        alert(data['head']['message']);
                    }
                }
            });
        }
    }
}

function createSocialServer() {
    var serviceLevel = $("#tags_2").val();

    serviceLevel = serviceLevel.replace(/\一星级/g,"1");
    serviceLevel = serviceLevel.replace(/\二星级/g,"2");
    serviceLevel = serviceLevel.replace(/\三星级/g,"3");
    serviceLevel = serviceLevel.replace(/\轮式拖拉机/g,"601");
    serviceLevel = serviceLevel.replace(/\履带收割机/g,"612");
    serviceLevel = serviceLevel.replace(/\轮式收割机/g,"615");
    serviceLevel = serviceLevel.replace(/\轮式玉米收/g,"622");
    serviceLevel = serviceLevel.replace(/\高速插秧机/g,"61102");
    serviceLevel = serviceLevel.replace(/\手扶插秧机/g,"61101");
    serviceLevel = serviceLevel.replace(/\花生收获机/g,"628");
    serviceLevel = serviceLevel.replace(/\单缸柴油机/g,"606");
    serviceLevel = serviceLevel.replace(/\风冷柴油机/g,"607");
    serviceLevel = serviceLevel.replace(/\手扶拖拉机/g,"602");
    serviceLevel = serviceLevel.replace(/\发电机组/g,"603");
    serviceLevel = serviceLevel.replace(/\多缸柴油机/g,"605");

    var reg1 = /^[0-9]{6}$/;
    var reg2 = /^[0-9]{6}[a-z]{1}$/;
    var reg3 = /^[0-9]{6}[A-Z]{1}$/;
    var reg_name = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;
    if($("#createSocialCompany").val() == ""){
        alert("请输入服务站名称！");
    }else if($("#createSocialName").val().length > 15 || reg_name.test($("#createSocialName").val())){
        alert("服务站名称格式错误！");
    }else if($("#createSocialWorkNo").val() == ""){
        alert("请输入企业编号！");
    } else if(!reg1.test($("#createSocialWorkNo").val()) && !reg2.test($("#createSocialWorkNo").val()) && !reg3.test($("#createWorkNo").val())){
        alert("请输入正确的企业编号！");
    }else if($("#province option:selected").text() == ""){
        alert("请输入服务站业务省！");
    }else if($("#city option:selected").text() == ""){
        alert("请输入服务站业务市！");
    }else if ($("#tags_2").val() == ""){
        alert("请选择产品线及对应星级！")
    }else if ($("#createSocialName").val() == ""){
        alert("请输入负责人姓名！")
    }else if ($("#createSocialMobile").val() == ""){
        alert("请输入负责人电话！")
    } else{
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test($("#createSocialMobile").val())) {
            alert("负责人电话格式错误！");
        }else {
            $.ajax({
                type : "post",
                url : ip_path+"/changfa_system/account/createAccountService.do",
                data : {
                    account : $("#createSocialMobile").val(),
                    name : $("#createSocialName").val(),
                    roleId : 9,
                    workNum : $("#createSocialWorkNo").val(),
                    token : $(window.parent.document).find("input[name='token']").val(),
                    province : $("#province option:selected").text(),
                    city : $("#city option:selected").text(),
                    serviceLevel : serviceLevel,
                    company : $("#createSocialCompany").val(),
                    address : $("#createSocialAddress").val(),
                    remark : $("#remark").val(),
                    province:$("#remarkshenfen").val(),
                },
                dataType : "json",
                success : function (data) {
                    if(data['head']['code'] == 200){
                        window.open("socialServerManage.html","_self");
                    }else{
                        alert(data['head']['message']);
                    }
                }
            });
        }
    }
}

// var levelNum;
// function addLevel() {
//     levelNum ++;
//     var lineId = "line" + levelNum;
//     var levelId = "level" + levelNum;
//     $("#lineAndLevel").append(
//         '<select id="'+lineId+'" class="addressInfo">' +
//         '<option value="">请选择产品线</option>'+
//         '<option value="601">轮式拖拉机</option>' +
//         '<option value="612">履带收割机</option>' +
//         '<option value="615">轮式收割机</option>' +
//         '<option value="622">轮式玉米收</option>' +
//         '<option value="611">插秧机</option>' +
//         '<option value="628">花生捡拾收获机</option>' +
//         '</select>' +
//         '<select id="'+levelId+'" class="addressInfo" style="margin-left: 4px;">' +
//         '<option value="">请选择星级</option>'+
//         '<option value="1">一星级</option>' +
//         '<option value="2">二星级</option>' +
//         '<option value="3">三星级</option>' +
//         '</select><br>'
//     );
// }

function showSalerDetails(event) {
    var user_id = event.parentNode.parentNode.id;
    $(window.parent.document).find("input[name='salerId']").val(user_id);
    window.open("salerDetails.html","_self");
}

function showDealerDetails(event) {
    var user_id = event.parentNode.parentNode.id;
    $(window.parent.document).find("input[name='dealerId']").val(user_id);
    window.open("dealerDetails.html","_self");
}

function showThreeServerDetails(event) {
    var user_id = event.parentNode.parentNode.id;
    $(window.parent.document).find("input[name='serverId']").val(user_id);
    window.open("serverDetails.html","_self");
}

function showSocialServerDetails(event) {
    var user_id = event.parentNode.parentNode.id;
    $(window.parent.document).find("input[name='dealerId']").val(user_id);
    window.open("socialServerDetails.html","_self");
}

function showUserDetails(event) {
    var user_id = event.parentNode.parentNode.id;
    $(window.parent.document).find("input[name='userArchivesId']").val(user_id);
    window.open("userDetails.html","_self");
}

//社会化服务站详情页
function type_select_social(id) {
    var arr = new Array("social_addressM","social_serverM","social_personM");
    for (var i=0;i<arr.length;i++){
        if(id == arr[i]){
            $("#"+arr[i]).addClass("choosed");
        }else{
            $("#"+arr[i]).removeClass("choosed");
        }
    }
}

function social_addressM(event) {
    type_select_social(event.id);
    var content = "<iframe id='ifm' src='dealer_storageManage.html' frameborder='0' scrolling='no' width='100%' height='2000px'></iframe>"
    $("#dealer_inner").html(content);
}

function social_serverM(event) {
    type_select_social(event.id);
    var content = "<iframe id='ifm' src='social_serverManage.html' frameborder='0' scrolling='no' width='100%' height='2000px'></iframe>"
    $("#dealer_inner").html(content);
}

function social_personM(event) {
    type_select_social(event.id);
    var content = "<iframe id='ifm' src='social_personManage.html' frameborder='0' scrolling='no' width='100%' height='2000px'></iframe>"
    $("#dealer_inner").html(content);
}

function social_waitDispatch1() {
    $("#waitDispatch").addClass("type_choosed");
    $("#waitAccept").removeClass("type_choosed");
    $("#finished").removeClass("type_choosed");
    $("#closed").removeClass("type_choosed");
    social_type = 0;
    currentPage = 1;
    ajax_socialServer_serverM1();
}

function social_waitDispatch() {
    $("#waitDispatch").addClass("type_choosed");
    $("#waitAccept").removeClass("type_choosed");
    $("#finished").removeClass("type_choosed");
    $("#closed").removeClass("type_choosed");
    social_type = 0;
    currentPage = 1;
    ajax_socialServer_serverM();
}

function social_waitAccept() {
    $("#waitDispatch").removeClass("type_choosed");
    $("#waitAccept").addClass("type_choosed");
    $("#finished").removeClass("type_choosed");
    $("#closed").removeClass("type_choosed");
    social_type = 2;
    currentPage = 1;
    ajax_socialServer_serverM();
}
function social_waitAccept1() {
    $("#waitDispatch").removeClass("type_choosed");
    $("#waitAccept").addClass("type_choosed");
    $("#finished").removeClass("type_choosed");
    $("#closed").removeClass("type_choosed");
    social_type = 2;
    currentPage = 1;
    ajax_socialServer_serverM1();
}

function social_finished() {
    $("#waitDispatch").removeClass("type_choosed");
    $("#waitAccept").removeClass("type_choosed");
    $("#finished").addClass("type_choosed");
    $("#closed").removeClass("type_choosed");
    social_type = 3;
    currentPage = 1;
    ajax_socialServer_serverM();
}
function social_finished1() {
    $("#waitDispatch").removeClass("type_choosed");
    $("#waitAccept").removeClass("type_choosed");
    $("#finished").addClass("type_choosed");
    $("#closed").removeClass("type_choosed");
    social_type = 3;
    currentPage = 1;
    ajax_socialServer_serverM1();
}

function social_closed() {
    $("#waitDispatch").removeClass("type_choosed");
    $("#waitAccept").removeClass("type_choosed");
    $("#finished").removeClass("type_choosed");
    $("#closed").addClass("type_choosed");
    social_type = 1;
    currentPage = 1;
    ajax_socialServer_serverM();
}
function social_closed1() {
    $("#waitDispatch").removeClass("type_choosed");
    $("#waitAccept").removeClass("type_choosed");
    $("#finished").removeClass("type_choosed");
    $("#closed").addClass("type_choosed");
    social_type = 1;
    currentPage = 1;
    ajax_socialServer_serverM1();
}

//经销商详情页
function type_select(id) {
    var arr = new Array("storageM","storeM","machineM","serverM","personM");
    for (var i=0;i<arr.length;i++){
        if(id == arr[i]){
            $("#"+arr[i]).addClass("choosed");
        }else{
            $("#"+arr[i]).removeClass("choosed");
        }
    }
}

function storageM(event) {
    type_select(event.id);
    var content = "<iframe id='ifm' src='dealer_storageManage.html' frameborder='0' scrolling='no' width='100%' height='2000px'></iframe>"
    $("#dealer_inner").html(content);
}

function storeM(event) {
    type_select(event.id);
    var content = "<iframe id='ifm' src='dealer_storeManage.html' frameborder='0' scrolling='no' width='100%' height='2000px'></iframe>"
    $("#dealer_inner").html(content);
}

function machineM(event) {
    type_select(event.id);
    var content = "<iframe id='ifm' src='dealer_machineManage.html' frameborder='0' scrolling='no' width='100%' height='2000px'></iframe>"
    $("#dealer_inner").html(content);
}

function serverM(event) {
    type_select(event.id);
    var content = "<iframe id='ifm' src='dealer_serverManage.html' frameborder='0' scrolling='no' width='100%' height='2000px'></iframe>"
    $("#dealer_inner").html(content);
}

function personM(event) {
    type_select(event.id);
    var content = "<iframe id='ifm' src='dealer_personManage.html' frameborder='0' scrolling='no' width='100%' height='2000px'></iframe>"
    $("#dealer_inner").html(content);
}

function waitDispatch1() {
    $("#waitDispatch").addClass("type_choosed");
    $("#waitAccept").removeClass("type_choosed");
    $("#finished").removeClass("type_choosed");
    $("#closed").removeClass("type_choosed");
    type = 0;
    currentPage = 1;
    ajax_dealer_serverM1();
}

function waitDispatch() {
    $("#waitDispatch").addClass("type_choosed");
    $("#waitAccept").removeClass("type_choosed");
    $("#finished").removeClass("type_choosed");
    $("#closed").removeClass("type_choosed");
    type = 0;
    currentPage = 1;
    ajax_dealer_serverM();
}

function waitAccept() {
    $("#waitDispatch").removeClass("type_choosed");
    $("#waitAccept").addClass("type_choosed");
    $("#finished").removeClass("type_choosed");
    $("#closed").removeClass("type_choosed");
    type = 2;
    currentPage = 1;
    ajax_dealer_serverM();
}
function waitAccept1() {
    $("#waitDispatch").removeClass("type_choosed");
    $("#waitAccept").addClass("type_choosed");
    $("#finished").removeClass("type_choosed");
    $("#closed").removeClass("type_choosed");
    type = 2;
    currentPage = 1;
    ajax_dealer_serverM1();
}

function finished() {
    $("#waitDispatch").removeClass("type_choosed");
    $("#waitAccept").removeClass("type_choosed");
    $("#finished").addClass("type_choosed");
    $("#closed").removeClass("type_choosed");
    type = 3;
    currentPage = 1;
    ajax_dealer_serverM();
}

function finished1() {
    $("#waitDispatch").removeClass("type_choosed");
    $("#waitAccept").removeClass("type_choosed");
    $("#finished").addClass("type_choosed");
    $("#closed").removeClass("type_choosed");
    type = 3;
    currentPage = 1;
    ajax_dealer_serverM1();
}

function closed() {
    $("#waitDispatch").removeClass("type_choosed");
    $("#waitAccept").removeClass("type_choosed");
    $("#finished").removeClass("type_choosed");
    $("#closed").addClass("type_choosed");
    type = 1;
    currentPage = 1;
    ajax_dealer_serverM();
}
function closed1() {
    $("#waitDispatch").removeClass("type_choosed");
    $("#waitAccept").removeClass("type_choosed");
    $("#finished").removeClass("type_choosed");
    $("#closed").addClass("type_choosed");
    type = 1;
    currentPage = 1;
    ajax_dealer_serverM1();
}

//三包员详情页
function type_select_server(id) {
    var arr = new Array("server_server","server_dealer");
    for (var i=0;i<arr.length;i++){
        if(id == arr[i]){
            $("#"+arr[i]).addClass("choosed");
        }else{
            $("#"+arr[i]).removeClass("choosed");
        }
    }
}

function server_server(event) {
    type_select_server(event.id);
    var content = "<iframe id='ifm' src='server_serverManage.html' frameborder='0' scrolling='no' width='100%' height='2000px'></iframe>"
    $("#dealer_inner").html(content);
}

function server_dealer(event) {
    type_select_server(event.id);
    var content = "<iframe id='ifm' src='server_dealerManage.html' frameborder='0' scrolling='no' width='100%' height='2000px'></iframe>"
    $("#dealer_inner").html(content);
}


//退货、调拨返厂管理
function returnChange() {
    document.getElementById("reSendDetail").style.display = "none";
    document.getElementById("reFactoryDetail").style.display = "none";
    $("#returnSend").removeClass("type_choosed");
    $("#returnFactory").removeClass("type_choosed");
    $("#returnChange").addClass("type_choosed");
    status = 4;
    currentPage = 1;
    ajax_dealer_machineM();
}

function returnSend() {
    document.getElementById("reChangeDetail").style.display = "none";
    document.getElementById("reFactoryDetail").style.display = "none";
    $("#returnChange").removeClass("type_choosed");
    $("#returnFactory").removeClass("type_choosed");
    $("#returnSend").addClass("type_choosed");
    status = 3;
    currentPage = 1;
    ajax_dealer_machineM();
}

function returnFactory() {
    document.getElementById("reSendDetail").style.display = "none";
    document.getElementById("reChangeDetail").style.display = "none";
    $("#returnSend").removeClass("type_choosed");
    $("#returnChange").removeClass("type_choosed");
    $("#returnFactory").addClass("type_choosed");
    status = 5;
    currentPage = 1;
    ajax_dealer_machineM();
}

//库存管理
function sending() {
    $("#stored").removeClass("type_choosed");
    $("#saled").removeClass("type_choosed");
    $("#sending").addClass("type_choosed");
    status = 1;
    currentPage = 1;
    ajax_dealer_storeM();
}

function stored() {
    $("#sending").removeClass("type_choosed");
    $("#saled").removeClass("type_choosed");
    $("#stored").addClass("type_choosed");
    status = 2;
    currentPage = 1;
    ajax_dealer_storeM();
}

function saled() {
    $("#sending").removeClass("type_choosed");
    $("#stored").removeClass("type_choosed");
    $("#saled").addClass("type_choosed");
    status = 6;
    currentPage = 1;
    ajax_dealer_storeM();
}

//编辑经销商信息
function editDealerInfo() {
    document.getElementById("editDealer").style.display = "block";

    $.ajax({
        type: "post",
        url: ip_path + "/changfa_system/user/getUsersByUserId.do",
        data: {
            userId: $(window.parent.document).find("input[name='dealerId']").val()
        },
        dataType: "json",
        success: function (data) {
            if (data['head']['code'] == 200) {
                for(var i =0;i<data['body']['result']['serviceLevel'].length;i++){
                    $("#tags_2").addTag(data['body']['result']['serviceLevel'][i],{focus:false,callback:false});
                }
                $('#tags_2').tagsInput({width:'auto'});

                $("#line").change(function () {
                    if($("#line option:selected").val() != "" && $("#level option:selected").val() != ""){
                        add_serviceLevel();
                    }
                });

                $("#level").change(function () {
                    if($("#line option:selected").val() != "" && $("#level option:selected").val() != ""){
                        add_serviceLevel();
                    }
                });

                $(function(){
                    $('#tags_2').tagsInput({width:'auto'});//这样做的目的是，使tags_1能够变成标签。
                });

                $("#createWorkNo").val(data['body']['result']['workNum']);
                $("#createCompany").val(data['body']['result']['company']);
                $("#createAddress").val(data['body']['result']['address']);
                $("#createName").val(data['body']['result']['userName']);
                $("#createMobile").val(data['body']['result']['mobile']);
                $("#remark").val(data['body']['result']['remark']);

                //选择省
                $.ajax({
                    type : "post",
                    async : false,
                    url : ip_path+"/changfa_system/place/getProvince.do",
                    dataType : "json",
                    success : function (data) {
                        for(var i=0;i<data['body']['resultList']['length'];i++){
                            $("#province").append("<option value='"+ data['body']['resultList'][i]['id'] +"'>"+data['body']['resultList'][i]['name']+"</option>");
                        }
                        $("#province").unbind();
                    }
                });
                $("#province").val(data['body']['result']['provinceVal']);

                //选择市
                if($("#province").val() != ""){
                    $("#city").empty();

                    $.ajax({
                        type : "post",
                        async : false,
                        url : ip_path+"/changfa_system/place/getCity.do",
                        data : {
                            parentId : $("#province option:selected").val(),
                        },
                        dataType : "json",
                        success : function (data) {

                            for(var i=0;i<data['body']['resultList']['length'];i++){
                                $("#city").append("<option value='"+ data['body']['resultList'][i]['id'] +"'>"+data['body']['resultList'][i]['name']+"</option>");
                            }
                            $("#city").unbind();
                        }
                    });

                }
                $("#city").val(data['body']['result']['cityVal']);

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
        }
    });
}

function closeDealerEdit() {
    document.getElementById("editDealer").style.display = "none";
    window.location.reload();
    $("#serviceLevel").html(
     '<td class=\'head_td\' width=\'100px\' height=\'46px\'>产品星级</td>' +
        '<td class=\'body_td txt_left\'>' +
        '<input id="tags_2" type="text" class="tagsinput" readonly="readonly"/>' +
        '<div class="flt_l">' +
        '<select id="line" class="addressInfo">' +
        '<option value="">请选择产品线</option>' +
        '<option value="轮式拖拉机">轮式拖拉机</option>' +
        '<option value="履带收割机">履带收割机</option>' +
        '<option value="轮式收割机">轮式收割机</option>' +
        '<option value="轮式玉米收">轮式玉米收</option>' +
        '<option value="高速插秧机">高速插秧机</option>' +
        '<option value="手扶插秧机">手扶插秧机</option>' +
        '<option value="花生收获机">花生收获机</option>' +
        '<option value="单缸柴油机">单缸柴油机</option>'+
        '<option value="风冷柴油机">风冷柴油机</option>'+
        '<option value="手扶拖拉机">手扶拖拉机</option>'+
        '<option value="发电机组">发电机组</option>'+
        '<option value="多缸柴油机">多缸柴油机</option>'+
        '</select>' +
        '<select id="level" class="addressInfo">' +
        '<option value="">请选择星级</option>' +
        '<option value="一星级">一星级</option>' +
        '<option value="二星级">二星级</option>' +
        '<option value="三星级">三星级</option>' +
        '</select>' +
        '</div>' +
        '</td>'
    );
}

function add_serviceLevel(){
    var oldVal = $("#tags_2").val();
    var target1 = $("#line option:selected").val() + "_一星级";
    var target2 = $("#line option:selected").val() + "_二星级";
    var target3 = $("#line option:selected").val() + "_三星级";
    var tags = $("#line option:selected").val()+"_"+$("#level option:selected").val();
    if (oldVal.indexOf(target1) == -1 && oldVal.indexOf(target2) == -1 && oldVal.indexOf(target3) == -1){
        $("#tags_2").addTag(tags,{focus:false,callback:false});
    }else{
        alert("该产品线已存在！");
    }
    $("#line").html(
        '<option value="">请选择产品线</option>' +
        '<option value="轮式拖拉机">轮式拖拉机</option>' +
        '<option value="履带收割机">履带收割机</option>' +
        '<option value="轮式收割机">轮式收割机</option>' +
        '<option value="轮式玉米收">轮式玉米收</option>' +
        '<option value="高速插秧机">高速插秧机</option>' +
        '<option value="手扶插秧机">手扶插秧机</option>' +
        '<option value="花生收获机">花生收获机</option>'+
        '<option value="单缸柴油机">单缸柴油机</option>'+
        '<option value="风冷柴油机">风冷柴油机</option>'+
        '<option value="手扶拖拉机">手扶拖拉机</option>'+
        '<option value="发电机组">发电机组</option>'+
        '<option value="多缸柴油机">多缸柴油机</option>'
    );
    $("#level").html(
        '<option value="">请选择星级</option>' +
        '<option value="一星级">一星级</option>' +
        '<option value="二星级">二星级</option>' +
        '<option value="三星级">三星级</option>'
    );
}

function updateDealer() {
    var arr_province = new Array();
    arr_province.push($("#province option:selected").text());
    var serviceLevel = $("#tags_2").val();

    serviceLevel = serviceLevel.replace(/\一星级/g,"1");
    serviceLevel = serviceLevel.replace(/\二星级/g,"2");
    serviceLevel = serviceLevel.replace(/\三星级/g,"3");
    serviceLevel = serviceLevel.replace(/\轮式拖拉机/g,"601");
    serviceLevel = serviceLevel.replace(/\履带收割机/g,"612");
    serviceLevel = serviceLevel.replace(/\轮式收割机/g,"615");
    serviceLevel = serviceLevel.replace(/\轮式玉米收/g,"622");
    serviceLevel = serviceLevel.replace(/\高速插秧机/g,"61102");
    serviceLevel = serviceLevel.replace(/\手扶插秧机/g,"61101");
    serviceLevel = serviceLevel.replace(/\花生收获机/g,"628");
    serviceLevel = serviceLevel.replace(/\烘干机/g,"623");
    serviceLevel = serviceLevel.replace(/\单缸柴油机/g,"606");
    serviceLevel = serviceLevel.replace(/\风冷柴油机/g,"607");
    serviceLevel = serviceLevel.replace(/\手扶拖拉机/g,"602");
    serviceLevel = serviceLevel.replace(/\发电机组/g,"603");
    serviceLevel = serviceLevel.replace(/\多缸柴油机/g,"605");
    serviceLevel = serviceLevel.replace(/\烘干机/g,"623");

    var reg4 = /^[0-9]{6}$/;
    var reg_name = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;
    if($("#createWorkNo").val() == ""){
        alert("请输入经销商企业编号！");
    }else if(!reg4.test($("#createWorkNo").val())){
        alert("请输入正确的企业编号格式！");
    }else if($("#createCompany").val() == ""){
        alert("请输入经销商名称！");
    }else if(reg_name.test($("#createCompany").val())){
        alert("经销商名称格式错误！");
    }else if($("#createAddress").val() == ""){
        alert("请输入经销商地址！");
    }else if($("#province option:selected").text() == ""){
        alert("请输入经销商业务省！");
    }else if($("#city option:selected").text() == ""){
        alert("请输入经销商业务市！");
    }else if($("#tags_2").val() == ""){
        alert("请选择产品星级！");
    }else if($("#createName").val() == ""){
        alert("请输入负责人姓名！");
    }else if($("#createName").val().length > 15 || reg_name.test($("#createName").val())){
        alert("负责人姓名格式错误！");
    }else{
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test($("#createMobile").val()) && $("#createMobile").val() != "") {
            alert("手机号格式错误！");
        }else {
            $.ajax({
                type : "post",
                url : ip_path+"/changfa_system/account/updateAccountPerson.do",
                data : {
                    account : $("#createMobile").val(),
                    name : $("#createName").val(),
                    roleId : 6,
                    userId : $(window.parent.document).find("input[name='dealerId']").val(),
                    workNum : $("#createWorkNo").val(),
                    token : $(window.parent.document).find("input[name='token']").val(),
                    company : $("#createCompany").val(),
                    address : $("#createAddress").val(),
                    province : arr_province.toString(),
                    serviceLevel : serviceLevel,
                    city : $("#city option:selected").text(),
                    remark : $("#remark").val()
                },
                dataType : "json",
                success : function (data) {
                    if(data['head']['code'] == 200){
                        document.getElementById("editDealer").style.display = "none";
                        window.location.reload();
                    }else{
                        alert(data['head']['message']);
                    }
                }
            });
        }
    }
}

function updateSocialServer() {
    var arr_province = new Array();
    arr_province.push($("#province option:selected").text());
    var serviceLevel = $("#tags_2").val();

    serviceLevel = serviceLevel.replace(/\一星级/g,"1");
    serviceLevel = serviceLevel.replace(/\二星级/g,"2");
    serviceLevel = serviceLevel.replace(/\三星级/g,"3");
    serviceLevel = serviceLevel.replace(/\轮式拖拉机/g,"601");
    serviceLevel = serviceLevel.replace(/\履带收割机/g,"612");
    serviceLevel = serviceLevel.replace(/\轮式收割机/g,"615");
    serviceLevel = serviceLevel.replace(/\轮式玉米收/g,"622");
    serviceLevel = serviceLevel.replace(/\高速插秧机/g,"61102");
    serviceLevel = serviceLevel.replace(/\手扶插秧机/g,"61101");
    serviceLevel = serviceLevel.replace(/\花生收获机/g,"628");
    serviceLevel = serviceLevel.replace(/\单缸柴油机/g,"606");
    serviceLevel = serviceLevel.replace(/\风冷柴油机/g,"607");
    serviceLevel = serviceLevel.replace(/\手扶拖拉机/g,"602");
    serviceLevel = serviceLevel.replace(/\发电机组/g,"603");
    serviceLevel = serviceLevel.replace(/\多缸柴油机/g,"605");
    serviceLevel = serviceLevel.replace(/\烘干机/g,"623");

    var reg4 = /^[0-9]{6}$/;
    var reg_name = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;
    if($("#createWorkNo").val() == ""){
        alert("请输入经销商企业编号！");
    }else if(!reg4.test($("#createWorkNo").val())){
        alert("请输入正确的企业编号格式！");
    }else if($("#createCompany").val() == ""){
        alert("请输入经销商名称！");
    }else if(reg_name.test($("#createCompany").val())){
        alert("经销商名称格式错误！");
    }else if($("#createAddress").val() == ""){
        alert("请输入经销商地址！");
    }else if($("#province option:selected").text() == ""){
        alert("请输入经销商业务省！");
    }else if($("#city option:selected").text() == ""){
        alert("请输入经销商业务市！");
    }else if($("#tags_2").val() == ""){
        alert("请选择产品星级！");
    }else if($("#createName").val() == ""){
        alert("请输入负责人姓名！");
    }else if($("#createName").val().length > 15 || reg_name.test($("#createName").val())){
        alert("负责人姓名格式错误！");
    }else{
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test($("#createMobile").val()) && $("#createMobile").val() != "") {
            alert("手机号格式错误！");
        }else {
            $.ajax({
                type : "post",
                url : ip_path+"/changfa_system/account/updateAccountPerson.do",
                data : {
                    account : $("#createMobile").val(),
                    name : $("#createName").val(),
                    roleId : 9,
                    userId : $(window.parent.document).find("input[name='dealerId']").val(),
                    workNum : $("#createWorkNo").val(),
                    token : $(window.parent.document).find("input[name='token']").val(),
                    company : $("#createCompany").val(),
                    address : $("#createAddress").val(),
                    province : arr_province.toString(),
                    serviceLevel : serviceLevel,
                    city : $("#city option:selected").text(),
                    remark : $("#remark").val()
                },
                dataType : "json",
                success : function (data) {
                    if(data['head']['code'] == 200){
                        document.getElementById("editDealer").style.display = "none";
                        window.location.reload();
                    }else{
                        alert(data['head']['message']);
                    }
                }
            });
        }
    }
}

function server_waitDispatch() {
    $("#waitDispatch").addClass("type_choosed");
    $("#waitAccept").removeClass("type_choosed");
    $("#finished").removeClass("type_choosed");
    type = 6;
    currentPage = 1;
    ajax_server_serverM();
}
function server_waitDispatch1() {
    $("#waitDispatch").addClass("type_choosed");
    $("#waitAccept").removeClass("type_choosed");
    $("#finished").removeClass("type_choosed");
    type = 6;
    currentPage = 1;
    ajax_server_serverM1();
}

function server_waitAccept() {
    $("#waitDispatch").removeClass("type_choosed");
    $("#waitAccept").addClass("type_choosed");
    $("#finished").removeClass("type_choosed");
    type = 1;
    currentPage = 1;
    ajax_server_serverM();
}
function server_waitAccept1() {
    $("#waitDispatch").removeClass("type_choosed");
    $("#waitAccept").addClass("type_choosed");
    $("#finished").removeClass("type_choosed");
    type = 1;
    currentPage = 1;
    ajax_server_serverM1();
}

function server_finished() {
    $("#waitDispatch").removeClass("type_choosed");
    $("#waitAccept").removeClass("type_choosed");
    $("#finished").addClass("type_choosed");
    type = 5;
    currentPage = 1;
    ajax_server_serverM();
}
function server_finished1() {
    $("#waitDispatch").removeClass("type_choosed");
    $("#waitAccept").removeClass("type_choosed");
    $("#finished").addClass("type_choosed");
    type = 5;
    currentPage = 1;
    ajax_server_serverM1();
}

//编辑业务员信息
function editSalerInfo() {
    document.getElementById("editSaler").style.display = "block";
    $.ajax({
        type: "post",
        url: ip_path + "/changfa_system/user/getUsersByUserId.do",
        data: {
            userId: $(window.parent.document).find("input[name='salerId']").val()
        },
        dataType: "json",
        success: function (data) {
            if (data['head']['code'] == 200) {
                $("#createName").val(data['body']['result']['userName']);
                $("#createWorkNo").val(data['body']['result']['workNum']);
                $("#createMobile").val(data['body']['result']['mobile']);
                $("#createCompany").val(data['body']['result']['company']);
                for(var i =0;i<data['body']['result']['provinceList'].length;i++){
                    $("#tags_1").addTag(data['body']['result']['provinceList'][i],{focus:false,callback:false});
                }
                $('#tags_1').tagsInput({width:'auto'});//这样做的目的是，使tags_1能够变成标签。

                for(var j =0;j<data['body']['result']['lineNameList'].length;j++){
                    $("#tags_2").addTag(data['body']['result']['lineNameList'][j],{focus:false,callback:false});
                }
                $('#tags_2').tagsInput({width:'auto'});//这样做的目的是，使tags_1能够变成标签。
            }
        }
    });
}

function closeSalerEdit() {
    document.getElementById("editSaler").style.display = "none";
    window.location.reload();
    $("#task_changfa").html(
        '<td class=\'head_td\' width=\'136px\' height=\'46px\'>业务范围</td>' +
        '<td class=\'body_td txt_left\'>' +
        '<input id="tags_1" type="text" class="tagsinput" readonly="readonly"/>' +
        '<div class="flt_l">' +
        ' <select id="province1" class="addressInfo">' +
        '<option value="">添加省</option>' +
        '<option value="北京">北京</option>' +
        '<option value="安徽">安徽</option>' +
        '<option value="福建">福建</option>' +
        '<option value="甘肃">甘肃</option>' +
        '<option value="广东">广东</option>' +
        '<option value="广西">广西</option>' +
        '<option value="贵州">贵州</option>' +
        '<option value="海南">海南</option>' +
        '<option value="黑龙江">黑龙江</option>' +
        '<option value="湖北">湖北</option>' +
        '<option value="湖南">湖南</option>' +
        '<option value="吉林">吉林</option>' +
        '<option value="江苏">江苏</option>' +
        '<option value="江西">江西</option>' +
        '<option value="辽宁">辽宁</option>' +
        '<option value="内蒙古">内蒙古</option>' +
        '<option value="宁夏">宁夏</option>' +
        '<option value="青海">青海</option>' +
        '<option value="山东">山东</option>' +
        '<option value="山西">山西</option>' +
        '<option value="陕西">陕西</option>' +
        '<option value="上海">上海</option>' +
        '<option value="四川">四川</option>' +
        '<option value="天津">天津</option>' +
        '<option value="西藏">西藏</option>' +
        '<option value="新疆">新疆</option>' +
        '<option value="云南">云南</option>' +
        '<option value="浙江">浙江</option>' +
        '<option value="重庆">重庆</option>' +
        '<option value="香港">香港</option>' +
        '<option value="澳门">澳门</option>' +
        '<option value="台湾">台湾</option>' +
        ' </select>' +
        '</div>' +
        '</td>'
    );
}

function updateSaler() {
    var reg1 = /^[0-9]{6}$/;
    var reg2 = /^[0-9]{6}[a-z]{1}$/;
    var reg3 = /^[0-9]{6}[A-Z]{1}$/;
    var reg_name = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;
    if($("#createName").val() == ""){
        alert("请输入业务员姓名！");
    }else if($("#createName").val().length > 15 || reg_name.test($("#createName").val())){
        alert("业务员姓名格式错误！");
    }else if($("#tags_1").val() == ""){
        alert("请选择业务员业务省！");
    }else if($("#tags_2").val() == ""){
        alert("请选择业务员负责产品线！");
    }else{
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test($("#createMobile").val()) && $("#createMobile").val() != "") {
            alert("手机号格式错误！");
        }else {
            $.ajax({
                type : "post",
                url : ip_path+"/changfa_system/account/updateAccountPerson.do",
                data : {
                    account : $("#createMobile").val(),
                    name : $("#createName").val(),
                    roleId : $("#roleId").text(),
                    userId : $(window.parent.document).find("input[name='salerId']").val(),
                    workNum : $("#workNum").text(),
                    token : $(window.parent.document).find("input[name='token']").val(),
                    province : $("#tags_1").val(),
                    city : "",
                    lines : $("#tags_2").val(),
                    company : $("#createCompany").val()
                },
                dataType : "json",
                success : function (data) {
                    if(data['head']['code'] == 200){
                        document.getElementById("editSaler").style.display = "none";
                        window.location.reload();
                    }else{
                        alert(data['head']['message']);
                    }
                }
            });
        }
    }
}

//编辑三包员信息
function editServerInfo() {
    if($("#type").text() == "常发三包员"){
        document.getElementById("editServer_changfa").style.display = "block";
        $.ajax({
            type: "post",
            url: ip_path + "/changfa_system/user/getUsersByUserId.do",
            data: {
                userId: $(window.parent.document).find("input[name='serverId']").val()
            },
            dataType: "json",
            success: function (data) {
                if (data['head']['code'] == 200) {
                    $("#createName").val(data['body']['result']['userName']);
                    $("#createWorkNo").val(data['body']['result']['workNum']);
                    $("#createMobile").val(data['body']['result']['mobile']);
                    $("#createCompany").val(data['body']['result']['company']);
                    $("#createCustomerNo").val(data['body']['result']['customerNo']);
                    
                    $("#remark").val(data['body']['result']['remark']);
                    for(var i =0;i<data['body']['result']['provinceList'].length;i++){
                        $("#tags_1").addTag(data['body']['result']['provinceList'][i],{focus:false,callback:false});
                    }
                    $('#tags_1').tagsInput({width:'auto'});//这样做的目的是，使tags_1能够变成标签。
                    for(var j =0;j<data['body']['result']['lineNameList'].length;j++){
                        $("#tags_2").addTag(data['body']['result']['lineNameList'][j],{focus:false,callback:false});
                    }
                    $('#tags_2').tagsInput({width:'auto'});//这样做的目的是，使tags_1能够变成标签。
                }
            }
        });
    }else{
        document.getElementById("editServer_social").style.display = "block";
        $.ajax({
            type: "post",
            url: ip_path + "/changfa_system/user/getUsersByUserId.do",
            data: {
                userId: $(window.parent.document).find("input[name='serverId']").val()
            },
            dataType: "json",
            success: function (data) {
                if (data['head']['code'] == 200) {
                    $("#createSocialName").val(data['body']['result']['userName']);
                    $("#createSocialWorkNo").val(data['body']['result']['workNum']);
                    $("#createSocialMobile").val(data['body']['result']['mobile']);
                    $("#createSocialCompany").val(data['body']['result']['company']);
                    $("#createSocialCustomerNo").val(data['body']['result']['customerNo']);
                }
            }
        });
    }
    // else if($("#type").text() == "社会化服务站三包员"){
    //     document.getElementById("editServer_social").style.display = "block";
    //     $.ajax({
    //         type: "post",
    //         url: ip_path + "/changfa_system/user/getUsersByUserId.do",
    //         data: {
    //             userId: $(window.parent.document).find("input[name='serverId']").val()
    //         },
    //         dataType: "json",
    //         success: function (data) {
    //             if (data['head']['code'] == 200) {
    //                 $("#createSocialName").val(data['body']['result']['userName']);
    //                 $("#createSocialWorkNo").val(data['body']['result']['workNum']);
    //                 $("#createSocialMobile").val(data['body']['result']['mobile']);
    //                 $("#createSocialCompany").val(data['body']['result']['company']);
    //             }
    //         }
    //     });
    // }else if($("#type").text() == "经销商三包员"){
    //     document.getElementById("editServer_social").style.display = "block";
    //     $.ajax({
    //         type: "post",
    //         url: ip_path + "/changfa_system/user/getUsersByUserId.do",
    //         data: {
    //             userId: $(window.parent.document).find("input[name='serverId']").val()
    //         },
    //         dataType: "json",
    //         success: function (data) {
    //             if (data['head']['code'] == 200) {
    //                 $("#createSocialName").val(data['body']['result']['userName']);
    //                 $("#createSocialWorkNo").val(data['body']['result']['workNum']);
    //                 $("#createSocialMobile").val(data['body']['result']['mobile']);
    //                 $("#createSocialCompany").val(data['body']['result']['company']);
    //             }
    //         }
    //     });
    // }else if($("#type").text() == "经销商销售"){
    //     document.getElementById("editServer_social").style.display = "block";
    //     $.ajax({
    //         type: "post",
    //         url: ip_path + "/changfa_system/user/getUsersByUserId.do",
    //         data: {
    //             userId: $(window.parent.document).find("input[name='serverId']").val()
    //         },
    //         dataType: "json",
    //         success: function (data) {
    //             if (data['head']['code'] == 200) {
    //                 $("#createSocialName").val(data['body']['result']['userName']);
    //                 $("#createSocialWorkNo").val(data['body']['result']['workNum']);
    //                 $("#createSocialMobile").val(data['body']['result']['mobile']);
    //                 $("#createSocialCompany").val(data['body']['result']['company']);
    //             }
    //         }
    //     });
    // }
}

function closeChangfaServerEdit() {
    document.getElementById("editServer_changfa").style.display = "none";
    window.location.reload();
    $("#task_changfa").html(
        '<td class=\'head_td\' width=\'136px\' height=\'46px\'>业务范围</td>' +
        '<td class=\'body_td txt_left\'>' +
        '<input id="tags_1" type="text" class="tagsinput" readonly="readonly"/>' +
        '<div class="flt_l">' +
        ' <select id="province1" class="addressInfo">' +
        '<option value="">添加省</option>' +
        '<option value="北京">北京</option>' +
        '<option value="安徽">安徽</option>' +
        '<option value="福建">福建</option>' +
        '<option value="甘肃">甘肃</option>' +
        '<option value="广东">广东</option>' +
        '<option value="广西">广西</option>' +
        '<option value="贵州">贵州</option>' +
        '<option value="海南">海南</option>' +
        '<option value="黑龙江">黑龙江</option>' +
        '<option value="湖北">湖北</option>' +
        '<option value="湖南">湖南</option>' +
        '<option value="吉林">吉林</option>' +
        '<option value="江苏">江苏</option>' +
        '<option value="江西">江西</option>' +
        '<option value="辽宁">辽宁</option>' +
        '<option value="内蒙古">内蒙古</option>' +
        '<option value="宁夏">宁夏</option>' +
        '<option value="青海">青海</option>' +
        '<option value="山东">山东</option>' +
        '<option value="山西">山西</option>' +
        '<option value="陕西">陕西</option>' +
        '<option value="上海">上海</option>' +
        '<option value="四川">四川</option>' +
        '<option value="天津">天津</option>' +
        '<option value="西藏">西藏</option>' +
        '<option value="新疆">新疆</option>' +
        '<option value="云南">云南</option>' +
        '<option value="浙江">浙江</option>' +
        '<option value="重庆">重庆</option>' +
        '<option value="香港">香港</option>' +
        '<option value="澳门">澳门</option>' +
        '<option value="台湾">台湾</option>' +
        ' </select>' +
        '</div>' +
        '</td>'
    );

}

function closeSocialServerEdit() {
    document.getElementById("editServer_social").style.display = "none";
    window.location.reload();
    // $("#serverLevel").html(
    //     '<td class=\'head_td\' width=\'136px\' height=\'46px\'>产品星级</td>' +
    //     '<td class=\'body_td txt_left\'>' +
    //     ' <input id="tags_2" type="text" class="tagsinput" readonly="readonly"/>' +
    //     '<div class="flt_l">' +
    //     '<select id="line" class="addressInfo">' +
    //     '<option value="">请选择产品线</option>' +
    //     '<option value="轮式拖拉机">轮式拖拉机</option>' +
    //     '<option value="履带收割机">履带收割机</option>' +
    //     '<option value="轮式收割机">轮式收割机</option>' +
    //     '<option value="轮式玉米收">轮式玉米收</option>' +
    //     '<option value="高速插秧机">高速插秧机</option>' +
    //     '<option value="手扶插秧机">手扶插秧机</option>' +
    //     '<option value="花生捡拾收获机">花生捡拾收获机</option>' +
    //     '</select>' +
    //     '<select id="level" class="addressInfo">' +
    //     '<option value="">请选择星级</option>' +
    //     '<option value="一星级">一星级</option>' +
    //     '<option value="二星级">二星级</option>' +
    //     '<option value="三星级">三星级</option>' +
    //     '</select>' +
    //     '</div>' +
    //     '</td>'
    // );
}

function updateChangfaServer() {
    var reg1 = /^[0-9]{6}$/;
    var reg2 = /^[0-9]{6}[a-z]{1}$/;
    var reg3 = /^[0-9]{6}[A-Z]{1}$/;
    var reg_name = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;
    if($("#createName").val() == ""){
        alert("请输入三包员姓名！");
    }else if($("#createName").val().length > 15 || reg_name.test($("#createName").val())){
        alert("三包员姓名格式错误！");
    }else if($("#tags_1").val() == ""){
        alert("请选择三包员业务省！");
    }else if($("#tags_2").val() == ""){
        alert("请选择三包员负责产品线！");
    }else{
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test($("#createMobile").val()) && $("#createMobile").val() != "") {
            alert("手机号格式错误！");
        }else {
            $.ajax({
                type : "post",
                url : ip_path+"/changfa_system/account/updateAccountPerson.do",
                data : {
                    account : $("#createMobile").val(),
                    name : $("#createName").val(),
                    roleId : 7,
                    userId : $(window.parent.document).find("input[name='serverId']").val(),
                    workNum : $("#workNum").text(),
                    token : $(window.parent.document).find("input[name='token']").val(),
                    province : $("#tags_1").val(),
                    city : "",
                    lines : $("#tags_2").val(),
                    company : $("#createCompany").val(),
                    remark : $("#remark").val(),
                    customerNo:$('#createCustomerNo').val(),
                },
                dataType : "json",
                success : function (data) {
                    if(data['head']['code'] == 200){
                        document.getElementById("editServer_changfa").style.display = "none";
                        window.location.reload();
                    }else{
                        alert(data['head']['message']);
                    }
                }
            });
        }
    }
}

function updateSocial_Server() {
    var arr_province = new Array();
    arr_province.push($("#province option:selected").text());

    var reg1 = /^[0-9]{6}$/;
    var reg2 = /^[0-9]{6}[a-z]{1}$/;
    var reg3 = /^[0-9]{6}[A-Z]{1}$/;
    var reg_name = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;
    if($("#createSocialName").val() == ""){
        alert("请输入三包员姓名！");
    }else if($("#createSocialName").val().length > 15 || reg_name.test($("#createSocialName").val())){
        alert("三包员姓名格式错误！");
    }else if ($("#createSocialCompany").val() == ""){
        alert("请输入社会化服务站名！")
    }else{
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test($("#createSocialMobile").val()) && $("#createSocialMobile").val() != "") {
            alert("手机号格式错误！");
        }else {
            $.ajax({
                type : "post",
                url : ip_path+"/changfa_system/account/updateAccountPerson.do",
                data : {
                    account : $("#createSocialMobile").val(),
                    name : $("#createSocialName").val(),
                    userId : $(window.parent.document).find("input[name='serverId']").val(),
                    workNum : $("#workNum").text(),
                    token : $(window.parent.document).find("input[name='token']").val(),
                    company : $("#createSocialCompany").val(),
                    roleId : $("#objselect").val(),
                    customerNo:$('#createSocialCustomerNo').val()
                },
                dataType : "json",
                success : function (data) {
                    if(data['head']['code'] == 200){
                        document.getElementById("editServer_social").style.display = "none";
                        window.location.reload();
                    }else{
                        alert(data['head']['message']);
                    }
                }
            });
            // if($("#type").text() == "社会化服务站三包员"){
            //     $.ajax({
            //         type : "post",
            //         url : ip_path+"/changfa_system/account/updateAccountPerson.do",
            //         data : {
            //             account : $("#createSocialMobile").val(),
            //             name : $("#createSocialName").val(),
            //             roleId : 9,
            //             userId : $(window.parent.document).find("input[name='serverId']").val(),
            //             workNum : $("#workNum").text(),
            //             token : $(window.parent.document).find("input[name='token']").val(),
            //             company : $("#createSocialCompany").val()
            //         },
            //         dataType : "json",
            //         success : function (data) {
            //             if(data['head']['code'] == 200){
            //                 document.getElementById("editServer_social").style.display = "none";
            //                 window.location.reload();
            //             }else{
            //                 alert(data['head']['message']);
            //             }
            //         }
            //     });
            // }else if($("#type").text() == "经销商三包员"){
            //     $.ajax({
            //         type : "post",
            //         url : ip_path+"/changfa_system/account/updateAccountPerson.do",
            //         data : {
            //             account : $("#createSocialMobile").val(),
            //             name : $("#createSocialName").val(),
            //             roleId : 6,
            //             userId : $(window.parent.document).find("input[name='serverId']").val(),
            //             workNum : $("#workNum").text(),
            //             token : $(window.parent.document).find("input[name='token']").val(),
            //             company : $("#createSocialCompany").val()
            //         },
            //         dataType : "json",
            //         success : function (data) {
            //             if(data['head']['code'] == 200){
            //                 document.getElementById("editServer_social").style.display = "none";
            //                 window.location.reload();
            //             }else{
            //                 alert(data['head']['message']);
            //             }
            //         }
            //     });
            // }else if($("#type").text() == "经销商销售"){
            //     $.ajax({
            //         type : "post",
            //         url : ip_path+"/changfa_system/account/updateAccountPerson.do",
            //         data : {
            //             account : $("#createSocialMobile").val(),
            //             name : $("#createSocialName").val(),
            //             roleId : 10,
            //             userId : $(window.parent.document).find("input[name='serverId']").val(),
            //             token : $(window.parent.document).find("input[name='token']").val(),
            //             workNum : $("#workNum").text(),
            //             company : $("#createSocialCompany").val()
            //         },
            //         dataType : "json",
            //         success : function (data) {
            //             if(data['head']['code'] == 200){
            //                 document.getElementById("editServer_social").style.display = "none";
            //                 window.location.reload();
            //             }else{
            //                 alert(data['head']['message']);
            //             }
            //         }
            //     });
            // }
        }
    }
}

//查看农机详情
function showMachineDetail(event) {
    //调拨
    if(status == 3){
        document.getElementById("reSendDetail").style.display = "block";
        $.ajax({
            type : "post",
            url : ip_path+"/changfa_system/machineFlow/getMachineInfoFlow.do",
            data : {
                machineFlowId : event.parentNode.parentNode.childNodes[8].innerHTML
            },
            dataType : "json",
            success : function (data) {
                if(data['head']['code'] == 200){
                    var path = "";
                    if(data['body']['result']['lineNum'] == 611 || data['body']['result']['lineNum'] == 61101 || data['body']['result']['lineNum'] == 61102){
                        path="img/chayangji.png";
                    }else if(data['body']['result']['lineNum'] == 601){
                        path="img/tuolaji.png";
                    }else if(data['body']['result']['lineNum'] == 612 || data['body']['result']['lineNum'] == 615 || data['body']['result']['lineNum'] == 622 || data['body']['result']['lineNum'] == 628){
                        path="img/shougeji.png";
                    }else {
                        path = "";
                    }

                    $("#machine_info_reSend").html(
                        '<tr>' +
                        '<td class="body_td" rowspan="3" width="150px"><img src="'+path+'" class="dealer_head_M"></td>' +
                        '<td class="head_td" width="136px" height="33px">产品线</td>' +
                        '<td class="body_td" width="256px">'+data['body']['result']['lineName']+'</td>' +
                        '<td class="head_td" width="136px">条码</td>' +
                        '<td class="body_td" width="256px">'+data['body']['result']['barCode']+'</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td class="head_td" height="33px">产品系列</td>' +
                        '<td class="body_td">'+data['body']['result']['seriesName']+'</td>' +
                        '<td class="head_td">IMEI号</td>' +
                        '<td class="body_td">'+data['body']['result']['imei']+'</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td class="head_td" height="33px">产品型号</td>' +
                        '<td class="body_td">'+data['body']['result']['modelName']+'</td>' +
                        '<td class="head_td">出厂编号</td>' +
                        '<td class="body_td">'+data['body']['result']['factoryNum']+'</td>' +
                        '</tr>'
                    );
                }else{
                    alert(data['head']['message']);
                }
            }
        });

        $.ajax({
            type : "post",
            url : ip_path+"/changfa_system/user/selectByWorkNumAndRoleId.do",
            data : {
                workNum : event.parentNode.parentNode.id,
                roleId : 6
            },
            dataType : "json",
            success : function (data) {
                if(data['head']['code'] == 200){
                    var path;
                    if(data['body']['result']['imagePath'] != ""){
                        path = data['body']['result']['imagePath'];
                    }else {
                        path = "http://app.changfanz.net:3588/changfa_file/head.png";
                    }
                    $("#dealer_info").html(
                        '<tr>' +
                        '<td class="body_td" rowspan="3" width="150px"><img src="'+path+'" class="dealer_head_M"></td>' +
                        '<td class="head_td" width="136px" height="33px">名称</td>' +
                        '<td class="body_td" width="256px">'+data['body']['result']['company']+'</td>' +
                        '<td class="head_td" width="136px">联系电话</td>' +
                        '<td class="body_td" width="256px">'+data['body']['result']['mobile']+'</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td class="head_td" height="33px">地址</td>' +
                        '<td class="body_td">'+data['body']['result']['address']+'</td>' +
                        '<td class="head_td">业务范围</td>' +
                        '<td class="body_td">'+data['body']['result']['province']+"-"+data['body']['result']['city']+'</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td class="head_td" height="33px">联系人</td>' +
                        '<td class="body_td">'+data['body']['result']['userName']+'</td>' +
                        '<td class="head_td"></td>' +
                        '<td class="body_td"></td>' +
                        '</tr>'
                    );
                }else{
                    alert(data['head']['message']);
                }
            }

        });
    }else if(status == 4){
        //退货
        document.getElementById("reChangeDetail").style.display = "block";
        $.ajax({
            type : "post",
            url : ip_path+"/changfa_system/machineFlow/getMachineInfoFlow.do",
            data : {
                machineFlowId : event.parentNode.parentNode.childNodes[8].innerHTML
            },
            dataType : "json",
            success : function (data) {
                if(data['head']['code'] == 200){
                    var path = "";
                    if(data['body']['result']['lineNum'] == 611 || data['body']['result']['lineNum'] == 61101 || data['body']['result']['lineNum'] == 61102){
                        path="img/chayangji.png";
                    }else if(data['body']['result']['lineNum'] == 601){
                        path="img/tuolaji.png";
                    }else if(data['body']['result']['lineNum'] == 612 || data['body']['result']['lineNum'] == 615 || data['body']['result']['lineNum'] == 622 || data['body']['result']['lineNum'] == 628){
                        path="img/shougeji.png";
                    }else {
                        path = "";
                    }
                    $("#machine_info_reChange").html(
                        '<tr>' +
                        '<td class="body_td" rowspan="3" width="150px"><img src="'+path+'" class="dealer_head_M"></td>' +
                        '<td class="head_td" width="136px" height="33px">产品线</td>' +
                        '<td class="body_td" width="256px">'+data['body']['result']['lineName']+'</td>' +
                        '<td class="head_td" width="136px">条码</td>' +
                        '<td class="body_td" width="256px">'+data['body']['result']['barCode']+'</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td class="head_td" height="33px">产品系列</td>' +
                        '<td class="body_td">'+data['body']['result']['seriesName']+'</td>' +
                        '<td class="head_td">IMEI号</td>' +
                        '<td class="body_td">'+data['body']['result']['imei']+'</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td class="head_td" height="33px">产品型号</td>' +
                        '<td class="body_td">'+data['body']['result']['modelName']+'</td>' +
                        '<td class="head_td">出厂编号</td>' +
                        '<td class="body_td">'+data['body']['result']['factoryNum']+'</td>' +
                        '</tr>'
                    );
                    $("#change_reason").val(data['body']['result']['description']);
                }else{
                    alert(data['head']['message']);
                }
            }
        });
    }else if(status == 5){
        //返厂
        document.getElementById("reFactoryDetail").style.display = "block";
        $.ajax({
            type : "post",
            url : ip_path+"/changfa_system/machineFlow/getMachineInfoFlow.do",
            data : {
                machineFlowId : event.parentNode.parentNode.childNodes[8].innerHTML
            },
            dataType : "json",
            success : function (data) {
                if(data['head']['code'] == 200){
                    var path = "";
                    if(data['body']['result']['lineNum'] == 611 || data['body']['result']['lineNum'] == 61101 || data['body']['result']['lineNum'] == 61102){
                        path="img/chayangji.png";
                    }else if(data['body']['result']['lineNum'] == 601){
                        path="img/tuolaji.png";
                    }else if(data['body']['result']['lineNum'] == 612 || data['body']['result']['lineNum'] == 615 || data['body']['result']['lineNum'] == 622 || data['body']['result']['lineNum'] == 628){
                        path="img/shougeji.png";
                    }else {
                        path = "";
                    }
                    $("#machine_info_reFactory").html(
                        '<tr>' +
                        '<td class="body_td" rowspan="3" width="150px"><img src="'+path+'" class="dealer_head_M"></td>' +
                        '<td class="head_td" width="136px" height="33px">产品线</td>' +
                        '<td class="body_td" width="256px">'+data['body']['result']['lineName']+'</td>' +
                        '<td class="head_td" width="136px">条码</td>' +
                        '<td class="body_td" width="256px">'+data['body']['result']['barCode']+'</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td class="head_td" height="33px">产品系列</td>' +
                        '<td class="body_td">'+data['body']['result']['seriesName']+'</td>' +
                        '<td class="head_td">IMEI号</td>' +
                        '<td class="body_td">'+data['body']['result']['imei']+'</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td class="head_td" height="33px">产品型号</td>' +
                        '<td class="body_td">'+data['body']['result']['modelName']+'</td>' +
                        '<td class="head_td">出厂编号</td>' +
                        '<td class="body_td">'+data['body']['result']['factoryNum']+'</td>' +
                        '</tr>'
                    );
                    $("#factory_reason").val(data['body']['result']['description']);
                }else{
                    alert(data['head']['message']);
                }
            }
        });
    }
}

//经销商管理--》单据详情页
function showRepairNeedDetails(event) {
    var report_id = event.parentNode.parentNode.id;
    $(window.parent.parent.document).find("input[name='reportId']").val(report_id);
    window.open("repaireNeedDetail.html","_parent");
}
function showRepairNeedDetails1(event) {
    var report_id = event.parentNode.parentNode.id;
    $(window.parent.parent.document).find("input[name='reportId']").val(report_id);
    window.open("drepaireNeedDetail.html","_parent");
}

//三包员管理--》单据详情页
function showRptDetails(event) {
    var report_id = event.parentNode.parentNode.id;
    $(window.parent.parent.document).find("input[name='reportId']").val(report_id);
    window.open("repaireNeedDetail.html","_parent");
}
function showRptDetails1(event) {
    var report_id = event.parentNode.parentNode.id;
    $(window.parent.parent.document).find("input[name='reportId']").val(report_id);
    window.open("drepaireNeedDetail.html","_parent");
}


//经销商管理--》三包员详情页
function showServerDetails(event) {
    var user_id = event.parentNode.parentNode.id;
    $(window.parent.parent.document).find("input[name='serverId']").val(user_id);
    window.open("dealerServerDetails.html","_parent");
}

//仓库定位管理
function queryCompanyLocation() {
    currentPage = 1;
    ajax_companyLocationM();
}

//导出仓库定位
// function outputCompanyLocation() {
//     var dealerNum;
//     var dealerName;
//     if($("#dealer_item option:selected").val() == "company"){
//         dealerName = $("#dealer_info").val();
//         dealerNum = "";
//     }else if($("#dealer_item option:selected").val() == "workNum"){
//         dealerNum = $("#dealer_info").val();
//         dealerName = "";
//     }
//     $.ajax({
//         type: "post",
//         url: ip_path + "/changfa_system/locationRecord/excelExport.do",
//         data: {
//             workNum : dealerNum,
//             dealerName : dealerName
//         },
//         dataType: "json",
//         success: function (data) {
//         }
//     });
// }


//用户管理--》用户详情
function editUserInfo() {
    $("#editUser").show();
    $.ajax({
        type : "post",
        async : false,
        url : ip_path+"/changfa_system/user/getUsersByUserId.do",
        data : {
            userId : $(window.parent.document).find("input[name='userArchivesId']").val()
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                if(data['body']['result']['headUrl'] != ""){
                    $("#user_head").attr("src",data['body']['result']['headUrl']);
                }else {
                    $("#user_head").attr("src","http://app.changfanz.net:3588/changfa_file/head.png");
                }
                if(data['body']['result']['status'] == 1){
                    $("#status").attr("src","http://app.changfanz.net:3588/changfa_file/on.png");
                }else{
                    $("#status").attr("src","http://app.changfanz.net:3588/changfa_file/off.png");
                }
                $("#createName").val(data['body']['result']['userName']);
                $("#createMobile").val(data['body']['result']['mobile']);
                $("#createIdCard").val(data['body']['result']['idCard']);
                $("#createAddress").val(data['body']['result']['takeAddress']);
                $("#createRange").val(data['body']['result']['address']);

            }else{
                alert(data['head']['message']);
            }
        }
    });
}

function closeUserEdit() {
    $("#editUser").hide();
}

function updateUser() {
    $.ajax({
        type : "post",
        url : ip_path+"/changfa_system/account/updateAccountPerson.do",
        data : {
            account : $("#createMobile").val(),
            name : $("#createName").val(),
            roleId : 8,
            userId : $(window.parent.document).find("input[name='userArchivesId']").val(),
            token : $(window.parent.document).find("input[name='token']").val(),
            address : $("#createRange").val(),
            idCard : $("#createIdCard").val(),
            takeAddress : $("#createAddress").val()
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                $("#editUser").hide();
                window.location.reload();
            }else{
                alert(data['head']['message']);
            }
        }
    });
}

//用户农机列表
function chooseIt(event) {
    var arr = new Array("tag0","tag1","tag2");
    for(var i=0;i<arr.length;i++){
        if(arr[i] != event.id){
            $("#" + arr[i]).removeClass("machine_mark_choosed");
        }else{
            $("#" + arr[i]).addClass("machine_mark_choosed");
        }
    }
    $.ajax({
        type : "post",
        async : false,
        url : ip_path+"/changfa_system/userMachine/queryMachineById.do",
        data : {
            userId : $(window.parent.document).find("input[name='userArchivesId']").val(),
            machineId : $("#" + event.id).find("input").val()
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                var path = "";
                if(data['body']['result']['lineNum'] == 611 || data['body']['result']['lineNum'] == 61101 || data['body']['result']['lineNum'] == 61102){
                    path="img/chayangji.png";
                }else if(data['body']['result']['lineNum'] == 601){
                    path="img/tuolaji.png";
                }else if(data['body']['result']['lineNum'] == 612 || data['body']['result']['lineNum'] == 615 || data['body']['result']['lineNum'] == 622 || data['body']['result']['lineNum'] == 628){
                    path="img/shougeji.png";
                }else {
                    path = "";
                }
                $("#machine_head").attr("src",path);
                $("#line").text(data['body']['result']['lineName']);
                $("#series").text(data['body']['result']['seriesName']);
                $("#model").text(data['body']['result']['modelName']);
                $("#outNum").text(data['body']['result']['factoryNum']);
                $("#bar_code").text(data['body']['result']['barCode']);
                
                $("#imei").text(data['body']['result']['imei']);
                $("#buyTime").text(data['body']['result']['buyTime']);
                $("#dealer").text(data['body']['result']['company']);
                $("#serviceDate").text(data['body']['result']['serviceDate']);
                $("#location").text(data['body']['result']['address']);
            }else{
                alert(data['head']['message']);
            }
        }
    });
}

function user_waitDispatch() {
    $("#waitDispatch").addClass("type_choosed");
    $("#waitAccept").removeClass("type_choosed");
    $("#finished").removeClass("type_choosed");
    type = 1;
    currentPage = 1;
    ajax_user_serverM();
}

function user_waitAccept() {
    $("#waitDispatch").removeClass("type_choosed");
    $("#waitAccept").addClass("type_choosed");
    $("#finished").removeClass("type_choosed");
    type = 2;
    currentPage = 1;
    ajax_user_serverM();
}

function user_finished() {
    $("#waitDispatch").removeClass("type_choosed");
    $("#waitAccept").removeClass("type_choosed");
    $("#finished").addClass("type_choosed");
    type = 3;
    currentPage = 1;
    ajax_user_serverM();
}

function pre3() {
    listReset();
    currentPage -= 1;
    ajax_machineList();
    $("#tag0").click();
}

function next3() {
    listReset();
    currentPage += 1;
    ajax_machineList();
    $("#tag0").click();
}

function listReset() {
    $("#machineList").html(
        '<div id="tag0" class="machine_mark flt_l" onclick="chooseIt(this)">' +
        '<div class="flt_l mg-t30 mg_l30">' +
        '<img id="machine_pic0" class="pic_machine" src="">' +
        '</div>' +
        '<div class="flt_l" style="font-size: 0.875em;margin-left: 7%">' +
        '<p id="modelName0" class="txt_left" style="width: 150px;word-break: break-all"></p>' +
        '<p id="factoryNum0" class="txt_left" style="width: 150px;word-break: break-all"></p>' +
        '<p id="barCode0" class="txt_left" style="width: 150px;word-break: break-all"></p>' +
        '<input type="hidden" id="machineId0" value="">' +
        '</div>' +
        '</div>' +
        '<div id="tag1" class="machine_mark flt_l mg_l15" onclick="chooseIt(this)">' +
        '<div class="flt_l mg-t30 mg_l30">' +
        '<img id="machine_pic1" class="pic_machine" src="">' +
        '</div>' +
        '<div class="flt_l" style="font-size: 0.875em;margin-left: 7%">' +
        '<p id="modelName1" class="txt_left" style="width: 150px;word-break: break-all"></p>' +
        '<p id="factoryNum1" class="txt_left" style="width: 150px;word-break: break-all"></p>' +
        '<p id="barCode1" class="txt_left" style="width: 150px;word-break: break-all"></p>' +
        '<input type="hidden" id="machineId1" value="">' +
        '</div>' +
        '</div>' +
        '<div id="tag2" class="machine_mark flt_l mg_l15" onclick="chooseIt(this)">' +
        '<div class="flt_l mg-t30 mg_l30">' +
        '<img id="machine_pic2" class="pic_machine" src="">' +
        '</div>' +
        '<div class="flt_l" style="font-size: 0.875em;margin-left: 7%">' +
        '<p id="modelName2" class="txt_left" style="width: 150px;word-break: break-all"></p>' +
        '<p id="factoryNum2" class="txt_left" style="width: 150px;word-break: break-all"></p>' +
        '<p id="barCode2" class="txt_left" style="width: 150px;word-break: break-all"></p>' +
        '<input type="hidden" id="machineId2" value="">' +
        '</div>' +
        '</div>'
    );
}

function addStorage() {
    $("#addStorage").show();
    $("#createStorageAddress").val("");
    $("#createStorageName").val("");
}

function closeAddStorage() {
    $("#addStorage").hide();
}

function createNewStorage() {
    
    $.ajax({
        type : "post",
        async : false,
        url : ip_path+"/changfa_system/locationRecord/insertStoreAdmin.do",
        data : {
            type : $("#createStorageType option:selected").val(),
            address : $("#createStorageAddress").val(),
            workNum : $(window.parent.document).find("span[id='factoryNum']").text(),
            storeRoomName : $("#createStorageName").val(),
            location : $("#createStorageLocation").val(),
            token : $(window.parent.parent.document).find("input[name='token']").val()
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                window.parent.location.reload();
            }else{
                alert(data['head']['message']);
            }
        }
    });
}

function editStorage(event) {
    $("#editStorage").show();
    $("#editStorageType option:selected").val($(event.parentNode.parentNode.childNodes[0]).val());
    $("#editStorageLngLat").val(event.parentNode.parentNode.childNodes[2].innerHTML);
    $("#editStorageAddress").val(event.parentNode.parentNode.childNodes[3].innerHTML);
    $("#editStorageName").val(event.parentNode.parentNode.childNodes[1].innerHTML);
    $("#id").val(event.parentNode.parentNode.id);
}

function closeUpdateStorage() {
    $("#editStorage").hide();
}

function updateStorage() {
    $.ajax({
        type : "post",
        async : false,
        url : ip_path+"/changfa_system/locationRecord/updateDepot.do",
        data : {
            type : $("#editStorageType option:selected").val(),
            id : $("#id").val(),
            address : $("#editStorageAddress").val(),
            location : $("#editStorageLngLat").val(),
            storeRoomName : $("#editStorageName").val()
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                window.parent.location.reload();
            }else{
                alert(data['head']['message']);
            }
        }
    });
}

function deleteStorage(event) {
    if(window.confirm("确认删除该仓库？")){
        $.ajax({
            type : "post",
            async : false,
            url : ip_path+"/changfa_system/locationRecord/deleteDepot.do",
            data : {
                id : event.parentNode.parentNode.id
            },
            dataType : "json",
            success : function (data) {
                if(data['head']['code'] == 200){
                    window.parent.location.reload();
                }else{
                    alert(data['head']['message']);
                }
            }
        });
    }
}

function showScoreLog() {
    $("#scoreLog").show();
    $.ajax({
        type : "post",
        async : false,
        url : ip_path+"/changfa_system/score/selectScoreDetailByUserId.do",
        data : {
            userId : $(window.parent.document).find("input[name='userArchivesId']").val(),
            pageNum: 1,
            pageSize: 100000
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                $("#scoreList").empty();
                for(var i=0;i<data['body']['result']['data'].length;i++){
                    $("#scoreList").append(
                        "<tr>" +
                        '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['changeScore'] + '</td>' +
                        '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['socreName'] + '</td>' +
                        '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['createTime'] + '</td>' +
                        '</tr>'
                    );
                }
            }else{
                alert("当前用户没有积分流水！");
                $("#scoreLog").hide();
            }
        }
    });
}

function showSalerScoreLog() {
    $("#scoreLog").show();
    $.ajax({
        type : "post",
        async : false,
        url : ip_path+"/changfa_system/score/selectScoreDetailByUserId.do",
        data : {
            userId : $(window.parent.document).find("input[name='salerId']").val(),
            pageNum: 1,
            pageSize: 100000
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                $("#scoreList").empty();
                for(var i=0;i<data['body']['result']['data'].length;i++){
                    $("#scoreList").append(
                        "<tr>" +
                        '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['changeScore'] + '</td>' +
                        '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['socreName'] + '</td>' +
                        '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['createTime'] + '</td>' +
                        '</tr>'
                    );
                }
            }else{
                alert("当前用户没有积分流水！");
                $("#scoreLog").hide();
            }
        }
    });
}

function showDealerScoreLog() {
    $("#scoreLog").show();
    $.ajax({
        type : "post",
        async : false,
        url : ip_path+"/changfa_system/score/selectScoreDetailByUserId.do",
        data : {
            userId : $(window.parent.document).find("input[name='dealerId']").val(),
            pageNum: 1,
            pageSize: 100000
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                $("#scoreList").empty();
                for(var i=0;i<data['body']['result']['data'].length;i++){
                    $("#scoreList").append(
                        "<tr>" +
                        '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['changeScore'] + '</td>' +
                        '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['socreName'] + '</td>' +
                        '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['createTime'] + '</td>' +
                        '</tr>'
                    );
                }
            }else{
                alert("当前用户没有积分流水！");
                $("#scoreLog").hide();
            }
        }
    });
}

function showServerScoreLog() {
    $("#scoreLog").show();
    $.ajax({
        type : "post",
        async : false,
        url : ip_path+"/changfa_system/score/selectScoreDetailByUserId.do",
        data : {
            userId : $(window.parent.document).find("input[name='serverId']").val(),
            pageNum: 1,
            pageSize: 100000
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                $("#scoreList").empty();
                for(var i=0;i<data['body']['result']['data'].length;i++){
                    $("#scoreList").append(
                        "<tr>" +
                        '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['changeScore'] + '</td>' +
                        '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['socreName'] + '</td>' +
                        '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['createTime'] + '</td>' +
                        '</tr>'
                    );
                }
            }else{
                alert("当前用户没有积分流水！");
                $("#scoreLog").hide();
            }
        }
    });
}

function makeLarger(event) {
    parent.parent.pic_makeLarge(event);
}

function closeScoreLog() {
    $("#scoreLog").hide();
}

//添加部门
function addPart(){
    $("#addPartment").show();
}

function closeAddPartment(){
    $("#addPartment").hide();
}

function changePartType() {
    if($("#level_part").is(":checked")){
        $("#for_createPart").show();
        $.ajax({
            type: "post",
            async: false,
            url: ip_path + "/changfa_system/org/selectAll.do",
            data: {
                level: 2,
                pageNum:1,
                pageSize:99999
            },
            dataType: "json",
            success: function (data) {
                $("#companyName").empty();
                for (var i = 0; i < data['body']['result']['data'].length; i++) {
                    $("#companyName").append("<option value='" + data['body']['result']['data'][i]['orgId'] + "'>" + data['body']['result']['data'][i]['orgName'] + "</option>");
                }
                $("#companyName").unbind();
            }
        });
    }else{
        $("#for_createPart").hide();
    }
}

function createPartment() {
    if($("#partName").val() == ""){
        alert("请输入部门名称！");
    }else{
        if($("#level_part").is(":checked")){
            $.ajax({
                type : "post",
                async : false,
                url : ip_path+"/changfa_system/org/insert.do",
                data : {
                    orgName : $("#partName").val(),
                    parentId : $("#companyName option:selected").val(),
                },
                dataType : "json",
                success : function (data) {
                    if(data['head']['code'] == 200){
                        window.location.reload();
                    }else{
                        alert(data['head']['message']);
                    }
                }
            });
        }else{
            $.ajax({
                type : "post",
                async : false,
                url : ip_path+"/changfa_system/org/insert.do",
                data : {
                    orgName : $("#partName").val(),
                    parentId : 1
                },
                dataType : "json",
                success : function (data) {
                    if(data['head']['code'] == 200){
                        window.location.reload();
                    }else{
                        alert(data['head']['message']);
                    }
                }
            });
        }
    }
}

function modifyPart(event) {
    $(window.parent.document).find("input[name='partId']").val(event.parentNode.parentNode.id);
    $("#editPartment").show();
    $.ajax({
        type: "post",
        async: false,
        url: ip_path + "/changfa_system/org/selectAll.do",
        data: {
            level: parseInt(event.parentNode.parentNode.childNodes[1].innerHTML-1),
            pageNum:1,
            pageSize:99999
        },
        dataType: "json",
        success: function (data) {
            $("#edit_companyName").empty();
            for (var i = 0; i < data['body']['result']['data'].length; i++) {
                $("#edit_companyName").append("<option value='" + data['body']['result']['data'][i]['orgId'] + "'>" + data['body']['result']['data'][i]['orgName'] + "</option>");
            }
            $("#edit_companyName").unbind();
        }
    });
    $("#edit_partName").val(event.parentNode.parentNode.childNodes[0].innerHTML);
}

function closeEditPartment() {
    $("#editPartment").hide();
}

function updatePartment() {
    if($("#edit_partName").val() == ""){
        alert("请输入部门名称！");
    }else{
        $.ajax({
            type : "post",
            async : false,
            url : ip_path+"/changfa_system/org/update.do",
            data : {
                orgName : $("#edit_partName").val(),
                parentId : $("#edit_companyName option:selected").val(),
                id : $(window.parent.document).find("input[name='partId']").val()
            },
            dataType : "json",
            success : function (data) {
                if(data['head']['code'] == 200){
                    $("#editPartment").hide();
                    currentPage = 1;
                    ajax_partM();
                }else{
                    alert(data['head']['message']);
                }
            }
        });
    }
}

function toogle_lock(event) {
    var url;
    if(event.src == "http://test.app.changfanz.net:3588/changfa_file/onon.png"){
        url=ip_path + "/changfa_system/api/unlock.do";
        alert('当前请求申请解锁');
    }else{
        url=ip_path + "/changfa_system/api/lock.do";
        alert('当前请求申请锁车');
    }
    $.ajax({
        type : "post",
        url : url,
        data : {
            bar_code:$(window.parent.document).find("input[name='barCode']").val(),
            token : $(window.parent.document).find("input[name='token']").val(),
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                event.src == "http://test.app.changfanz.net:3588/changfa_file/offoff.png" ? event.src = "http://test.app.changfanz.net:3588/changfa_file/onon.png" : event.src = "http://test.app.changfanz.net:3588/changfa_file/offoff.png";
            }else{
                alert(data['head']['message']);
            }
        }
    });
}

function toogle_partStatus(event) {
    var partId = event.parentNode.parentNode.id;
    var status;
    if(event.src == "http://app.changfanz.net:3588/changfa_file/on.png"){
        status = 0;
    }else {
        status = 1;
    }
    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/org/enable.do",
        data : {
            id : partId,
            status : status
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

function delPart(event) {
    if(window.confirm("确定删除该部门吗？")){
        $.ajax({
            type : "post",
            url : ip_path + "/changfa_system/org/delete.do",
            data : {
                orgId : event.parentNode.parentNode.id
            },
            dataType : "json",
            success : function (data) {
                if(data['head']['code'] == 200){
                    currentPage = 1;
                    ajax_partM();
                }else{
                    alert(data['head']['message']);
                }
            }
        });
    }
}

//添加角色
function addRole(){
    $("#addRole").show();
}

function closeAddRole(){
    $("#addRole").hide();
}

function createRole() {
    if($("#partName").val() == ""){
        alert("请输入部门名称！");
    }else{
        $.ajax({
            type : "post",
            async : false,
            url : ip_path+"/changfa_system/role/createRole.do",
            data : {
                roleName : $("#roleName").val(),
                orgId : $("#partName option:selected").val(),
                parentId : $("#parentId option:selected").val(),
                isManager : $("#setManager").is(":checked") ? 1 : 0
            },
            dataType : "json",
            success : function (data) {
                if(data['head']['code'] == 200){
                    window.location.reload();
                }else{
                    alert(data['head']['message']);
                }
            }
        });
    }
}

function toogle_roleStatus(event) {
    var roleId = event.parentNode.parentNode.id;
    var status;
    if(event.src == "http://app.changfanz.net:3588/changfa_file/on.png"){
        status = 0;
    }else {
        status = 1;
    }
    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/role/update.do",
        data : {
            roleId : roleId,
            status : status
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

function modifyRole(event) {
    $(window.parent.document).find("input[name='roleId_forLimit']").val(event.parentNode.parentNode.id);
    $("#editRole").show();
    $.ajax({
        type : "post",
        async : false,
        url : ip_path+"/changfa_system/role/selectById.do",
        data : {
            roleId : event.parentNode.parentNode.id
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                $("#edit_partName").val(data['body']['result']['orgId']);
                $.ajax({
                    type: "post",
                    async: false,
                    url: ip_path + "/changfa_system/role/queryRole.do",
                    data: {
                        orgId: $("#edit_partName option:selected").val(),
                        pageNum : 1,
                        pageSize : 99999
                    },
                    dataType: "json",
                    success: function (param) {
                        $("#edit_parentId").empty();
                        $("#edit_parentId").append("<option value=''></option>");
                        for (var i = 0; i < param['body']['result']['data'].length; i++) {
                            $("#edit_parentId").append("<option value='" + param['body']['result']['data'][i]['roleId'] + "'>" + param['body']['result']['data'][i]['roleName'] + "</option>");
                        }
                    }
                });
                var parentId;
                if(data['body']['result']['parentId'] == null){
                    parentId = "";
                }else{
                    parentId = data['body']['result']['parentId'];
                }
                $("#edit_parentId").val(parentId                                          );
                $("#edit_roleName").val(data['body']['result']['roleName']);
                data['body']['result']['isManager'] == 1 ? $("#edit_setManager").attr("checked",true) : $("#edit_setManager").attr("checked",false);

                if(event.parentNode.parentNode.id == 1 || event.parentNode.parentNode.id == 2){
                    $("#edit_setManager").attr("checked",true);
                    $("#edit_setManager").attr("disabled","disabled");
                }else{
                    $("#edit_setManager").removeAttr("disabled");
                }
            }else{
                alert(data['head']['message']);
            }
        }
    });
}

function closeEditRole() {
    $("#editRole").hide();
}

function updateRole() {
    if($("#edit_partName").val() == ""){
        alert("请输入部门名称！");
    }else{
        $.ajax({
            type : "post",
            async : false,
            url : ip_path+"/changfa_system/role/update.do",
            data : {
                roleId : $(window.parent.document).find("input[name='roleId_forLimit']").val(),
                roleName : $("#edit_roleName").val(),
                orgId : $("#edit_partName option:selected").val(),
                parentId : $("#edit_parentId option:selected").val(),
                isManager : $("#edit_setManager").is(":checked") ? 1 : 0
            },
            dataType : "json",
            success : function (data) {
                if(data['head']['code'] == 200){
                    $("#editRole").hide();
                    currentPage = 1;
                    ajax_roleM();
                }else{
                    alert(data['head']['message']);
                }
            }
        });
    }
}

function delRole(event) {
    if(window.confirm("确定删除该角色吗？")) {
        $.ajax({
            type: "post",
            async: false,
            url: ip_path + "/changfa_system/role/delete.do",
            data: {
                roleId: event.parentNode.parentNode.id
            },
            dataType: "json",
            success: function (data) {
                if (data['head']['code'] == 200) {
                    currentPage = 1;
                    ajax_roleM();
                } else {
                    alert(data['head']['message']);
                }
            }
        });
    }
}


function querymeb() {
    currentPage = 1;
    ajax_mebM();
}
//添加成员
function addMeb(){
    $("#addMeb").show();
}

function closeAddMeb(){
    $("#addMeb").hide();
    window.location.reload();
}

function chooseRole(event) {
    var ids = new Array("3","4","5","7","12","13","14");
    if(ids.indexOf(event.id) != -1){
        if($("#"  + event.id).is(":checked")){
            if(event.id == 7){
                $("#repairRemark").show();
            }
            $("#provincesAndLines").append(
                '<div id="tagsFor' + event.id + '">' +
                '     <div class="tit_normal">' +
                '          <img src="img/tit_pic.png" class="tit_pic">' +
                '          <span>'+ event.alt + '业务：</span>' +
                '          <div style="width: 60%;margin-left: 170px;">' +
                '               <input id="tags_' + event.id + '" type="text" class="tagsinput"/>' +
                '               <div class="flt_l">' +
                '                    <select id="province' + event.id + '" class="addressInfo">' +

                '                    </select>' +
                '               </div><br><br>' +
                '               <input id="line_tags_' + event.id + '" type="text" class="tagsinput"/>' +
                '               <div class="flt_l">' +
                '                    <select id="line' + event.id + '" class="addressInfo">' +

                '                    </select>' +
                '               </div>' +
                '          </div>' +
                '     </div><br>' +
                '</div>'
            );

            $("#tags_" + event.id).tagsInput({width:'auto'});//这样做的目的是，使tags_1能够变成标签。
            $("#line_tags_" + event.id).tagsInput({width:'auto'});//这样做的目的是，使tags_1能够变成标签。

            $.ajax({
                type : "post",
                async : false,
                url : ip_path+"/changfa_system/place/getProvince.do",
                dataType : "json",
                success : function (data) {
                    $("#province" + event.id).empty();
                    $("#edit_province" + event.id).empty();
                    $("#province" + event.id).append("<option value=''>添加省</option>");
                    $("#province" + event.id).append("<option value='0'>全部省份</option>");
                    $("#edit_province" + event.id).append("<option value=''>添加省</option>");

                    for(var i=0;i<data['body']['resultList']['length'];i++){
                        $("#province" + event.id).append("<option value='"+ data['body']['resultList'][i]['id'] +"'>"+data['body']['resultList'][i]['name']+"</option>");
                        $("#edit_line" + event.id).append("<option value='"+ data['body']['resultList'][i]['number'] +"'>"+data['body']['resultList'][i]['name']+"</option>");
                    }
                }
            });

            $("#province" + event.id).change(function () {
                if($("#province" + event.id).val() != ""){
                    if($("#province" + event.id).val() == "0"){
                        $.ajax({
                            type : "post",
                            async : false,
                            url : ip_path+"/changfa_system/place/getProvince.do",
                            dataType : "json",
                            success : function (data) {
                                for(var i=0;i<data['body']['resultList']['length'];i++){
                                    if (!$("#tags_" + event.id).tagExist(data['body']['resultList'][i]['name'])){
                                        $("#tags_" + event.id).addTag(data['body']['resultList'][i]['name'],{focus:false,callback:false});
                                    }
                                }
                                $("#province" + event.id).val("");
                            }
                        });
                    }else{
                        add(event.id);
                    }
                }
            });

            $.ajax({
                type: "post",
                async: false,
                url: ip_path + "/changfa_system/machineModel/getMachineModels.do",
                dataType: "json",
                data:{
                    machineType:2,
                },
                success: function (data) {
                    $("#line" + event.id).empty();
                    $("#edit_line" + event.id).empty();
                    $("#line" + event.id).append("<option value=''>添加产品线</option>");
                    $("#line" + event.id).append("<option value='0'>全部产品线</option>");
                    $("#edit_line" + event.id).append("<option value=''>添加产品线</option>");
                    for(var i=0;i<data['body']['resultList']['length'];i++){
                        $("#line" + event.id).append("<option value='"+ data['body']['resultList'][i]['number'] +"'>"+data['body']['resultList'][i]['name']+"</option>");
                        $("#edit_line" + event.id).append("<option value='"+ data['body']['resultList'][i]['number'] +"'>"+data['body']['resultList'][i]['name']+"</option>");
                    }
                }
            });
            $("#line" + event.id).change(function () {
                if($("#line" + event.id).val() != ""){
                    if($("#line" + event.id).val() == "0"){
                        $.ajax({
                            type : "post",
                            async : false,
                            url : ip_path+"/changfa_system/machineModel/getMachineModels.do",
                            dataType : "json",
                            data:{
                                machineType:2,
                            },
                            success : function (data) {
                                for(var i=0;i<data['body']['resultList']['length'];i++){
                                    if (!$("#line_tags_" + event.id).tagExist(data['body']['resultList'][i]['name'])){
                                        $("#line_tags_" + event.id).addTag(data['body']['resultList'][i]['name'],{focus:false,callback:false});
                                    }
                                }
                                $("#line" + event.id).val("");
                            }
                        });
                    }else{
                        line_add(event.id);
                    }
                }
            });
        }else{
            if(event.id == 7){
                $("#repairRemark").hide();
            }
            $("#tagsFor"  + event.id).remove();
            $("#tags_"  + event.id).removeTag();
        }
    }
}

function add(event){
    var tags = $("#province" + event +" option:selected").text();
    if (!$("#tags_" + event).tagExist(tags)){
        $("#tags_" + event).addTag(tags,{focus:false,callback:false});
    }else{
        alert("该选项已存在！");
    }
    $("#province" + event).val("");
}

function line_add(event){
    var tags = $("#line" + event +" option:selected").text();
    if (!$("#line_tags_" +event).tagExist(tags)){
        $("#line_tags_" + event).addTag(tags,{focus:false,callback:false});
    }else{
        alert("该选项已存在！");
    }
    $("#line" + event).val("");
}

function createMeb() {
    var json = new Array();
    //所有选中的角色id
    $("input[type='checkbox']:checked").each(function(i){
        var ids = new Array("3","4","5","7","12","13","14");
        if(ids.indexOf($(this)[0]['id']) != -1){
            var provinceId = $(this)[0]['id'];
            //包含业务省province 产品线lineName
            var arr = {
                "roleId" : $(this)[0]['id'],
                "province" : $("#tags_" + provinceId).val().toString(),
                "lineName" : $("#line_tags_" + provinceId).val().toString()
            };
            json.push(arr);
        }else{
            //不包含province
            var arr = {
                "roleId" : $(this)[0]['id'],
                "province" : "",
                "lineName" : ""
            }
            json.push(arr);
        }
    });

    var reg1 = /^[0-9]{6}$/;
    var reg2 = /^[0-9]{6}[a-z]{1}$/;
    var reg3 = /^[0-9]{6}[A-Z]{1}$/;
    var reg_name = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;
    var myreg=/^[1][3,4,5,7,8,9][0-9]{9}$/;

    if($("#mebName").val() == ""){
        alert("请输入员工姓名！");
    }else if($("#mebName").val().length > 15 || reg_name.test($("#mebName").val())){
        alert("员工姓名格式错误！");
    }else if($("#mebNum").val() == ""){
        alert("请输入员工编号！");
    } else if(!reg1.test($("#mebNum").val()) && !reg2.test($("#mebNum").val()) && !reg3.test($("#mebNum").val())){
        alert("请输入正确的员工编号！");
    }else if ($("#mebPhone").val() == ""){
        alert("请输入员工电话！");
    }else if (!myreg.test($("#mebPhone").val())) {
        alert("手机号格式错误！");
    }else{
        var remark;
        if($("input[id='7']").is(":checked")){
            remark = $("#remark").val();
        }else{
            remark = "";
        }

        var jsonp = {"address":$("#mebAddress").val(),"token":$(window.parent.document).find("input[name='token']").val(),
            "company":"常州常发农业机械营销有限公司","list":json,"name" : $("#mebName").val(),"workNum" : $("#mebNum").val().trim(),"mobile" : $("#mebPhone").val(),"remark" : remark};
            $('#createMeb').attr('disabled',true);
        $.ajax({
            type : "post",
            async : false,
            url : ip_path+"/changfa_system/account/createAccountByRoles.do",
            contentType: 'application/json',
            data:JSON.stringify(jsonp),
            success : function (data) {
                if(data['head']['code'] == 200){
                    window.location.reload();
                }else {
                    alert(data['head']['message']);
                    $('#createMeb').attr('disabled',false);
                }
            }
        });
    }
}

function toogle_mebStatus(event) {
    var userId = event.parentNode.parentNode.id;
    var status;
    if(event.src == "http://app.changfanz.net:3588/changfa_file/on.png"){
        status = 0;
    }else {
        status = 1;
    }
    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/account/update.do",
        data : {
            userId : userId,
            status : status
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

function modifyMeb(event) {
    $(window.parent.document).find("input[name='mebUserId']").val(event.parentNode.parentNode.id);
    $("#editMeb").show();

    $.ajax({
        type : "post",
        async : false,
        url : ip_path+"/changfa_system/user/getUsersByUserId.do",
        data : {
            userId : $(window.parent.document).find("input[name='mebUserId']").val()
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                $("#edit_partName").val(data['body']['result']['orgId']);
                $("#edit_mebName").val(data['body']['result']['userName']);
                $("#edit_mebNum").val(data['body']['result']['account']);
                $("#edit_mebPhone").val(data['body']['result']['mobile']);
                $("#edit_mebAddress").val(data['body']['result']['address']);

                $.ajax({
                    type: "post",
                    async: false,
                    url: ip_path + "/changfa_system/role/queryRole.do",
                    data: {
                        orgId: $("#edit_partName option:selected").val(),
                        pageNum : 1,
                        pageSize : 99999
                    },
                    dataType: "json",
                    success: function (param) {
                        if(param['head']['code'] == 200){
                            $("#edit_roles").empty();
                            for (var i = 0; i < param['body']['result']['data'].length; i++) {
                                $("#edit_roles").append(
                                    '<input type="radio" id="edit_' + param['body']['result']['data'][i]['roleId'] + '" class="choose_checkbox vert_mid" name="role" onclick="chooseRole(this)"><label for="edit_' + param['body']['result']['data'][i]['roleId'] + '" class="describ">' + param['body']['result']['data'][i]['roleName'] + '</label><br>'
                                );
                            }
                        }
                    }
                });
                $("#edit_" + data['body']['result']['roleId']).attr("checked",true);
            }else{
                alert(data['head']['message']);
            }
        }
    });
}

function closeEditMeb() {
    $("#editMeb").hide()
}

function edit_chooseRole(event) {
    var ids = new Array("3","4","5","7");
    for(var item in ids){
        if(event.id == ids[item]){
            if($("#"  + ids[item]).is(":checked")){
                $("#edit_tagsFor" + ids[item]).show();
            }else{
                $("#edit_tags_" + ids[item]).val("");
                $("#edit_tagsFor" + ids[item]).hide();
            }
        }
    }
}

function updateMeb() {
    $.ajax({
        type: "post",
        async: false,
        url: ip_path + "/changfa_system/account/update.do",
        data: {
            userId: $(window.parent.document).find("input[name='mebUserId']").val(),
            userName : $("#edit_mebName").val(),
            mobile : $("#edit_mebPhone").val(),
            orgId: $("#edit_partName option:selected").val(),
            roleId : $("input[type='radio']:checked")[0]['id'].split("_")[1],
            address : $("#edit_mebAddress").val()
        },
        dataType: "json",
        success: function (data) {
            if(data['head']['code'] == 200){
                $("#editMeb").hide()
                currentPage = 1;
                ajax_mebM();
            }else{
                alert(data['head']['message']);
            }
        }
    });
}

function resetMebPassword(event) {
    if(window.confirm("确定重置密码吗？")){
        $.ajax({
            type: "post",
            async: false,
            url: ip_path + "/changfa_system/account/resetPassword.do",
            data: {
                token: $(window.parent.document).find("input[name='token']").val(),
                account : event.parentNode.parentNode.childNodes[0].innerHTML
            },
            dataType: "json",
            success: function (data) {
                if(data['head']['code'] == 200){
                    alert("密码已重置为工号！")
                }else{
                    alert(data['head']['message']);
                }
            }
        });
    }
}

function delMeb(event) {
    if(window.confirm("确定删除吗？")){
        $.ajax({
            type: "post",
            async: false,
            url: ip_path + "/changfa_system/account/delete.do",
            data: {
                userId : event.parentNode.parentNode.id
            },
            dataType: "json",
            success: function (data) {
                if(data['head']['code'] == 200){
                    currentPage = 1;
                    ajax_mebM();
                }else{
                    alert(data['head']['message']);
                }
            }
        });
    }
}

function menuLimitSet(event) {
    // $(window.parent.document).find("input[name='isManage']").val(event.id);
    $(window.parent.document).find("input[name='roleId_forLimit']").val(event.parentNode.parentNode.id);
    window.open("menuLimitSet.html","_self");
}

function menuLimitSetPart(event) {
    // $(window.parent.document).find("input[name='isManage']").val(event.id);
    $(window.parent.document).find("input[name='roleId_forLimit']").val(event.parentNode.parentNode.id);
    window.open("menuLimitSetPart.html","_self");
}


function menuLimitSetApp(event) {
    // $(window.parent.document).find("input[name='isManage']").val(event.id);
    $(window.parent.document).find("input[name='roleId_forLimit']").val(event.parentNode.parentNode.id);
    window.open("menuLimitSetApp.html","_self");
}

//大屏新增
function setDeliverScreenAuthor(event) {
    // $(window.parent.document).find("input[name='isManage']").val(event.id);
    $(window.parent.document).find("input[name='roleId_forLimit']").val(event.parentNode.parentNode.id);
    window.open("setScreenAuthor.html","_self");
}

//大屏修改
function changeDeliverScreenAuthor(event) {
    // $(window.parent.document).find("input[name='isManage']").val(event.id);
    $(window.parent.document).find("input[name='roleId_forLimit']").val(event.parentNode.parentNode.id);
    window.open("screenAuthorPreview.html","_self");
}

function insertMenuLimitApp() {
    var menuLimitList = new Array();
    $("input[type='checkbox']").each(function(i){
        if($(this).is(":checked")){
            menuLimitList.push($(this)[0]['id']);
        }
    });

    var  b;
    if($(window.parent.document).find("input[name='roleId_forLimit']").val() !=7){
        b = {
            menuIds : menuLimitList.toString(),
            roleId: $(window.parent.document).find("input[name='roleId_forLimit']").val()
            }
    }else{
        b = {
                menuIds : menuLimitList.toString(),
                roleId: $(window.parent.document).find("input[name='roleId_forLimit']").val(),
                type:$('#partPackets').val()
            }
    }

    $.ajax({
        type : "post",
        url : ip_path+"/changfa_system/menu/createMenuAppPermission.do",
        data : b,
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                alert("权限设置成功！");
                if($(window.parent.document).find("input[name='roleId_forLimit']").val() != 7){
                    window.open("roleManage.html","_self");
                }else{
                    var firstFloorList = data['body']['result']['data']['typeOne'];
                    var secondFloorList = data['body']['result']['data']['typeTwo'];
                    var thirdFloorList = data['body']['result']['data']['typeThree'];
                    var limitList = data['body']['result']['data']['typeFour'];

                    for(var item1 in firstFloorList){
                        $("#" + firstFloorList[item1]).attr("checked",true);
                    }
                    for(var item2 in secondFloorList){
                        if(secondFloorList[item2] != 20){
                            $("#" + secondFloorList[item2]).attr("checked",true);
                        }
                    }
                    for(var item3 in thirdFloorList){
                        if(thirdFloorList[item3] != 57 && thirdFloorList[item3] != 58 && thirdFloorList[item3] != 59){
                            $("#" + thirdFloorList[item3]).attr("checked",true);
                        }
                    }
                    for(var item4 in limitList){
                        $("#" + limitList[item4]).attr("checked",true);
                    }
                    $('#partPackets').val(data['body']['result']['roleType']);
                }
                
            }else{
                alert(data['head']['message']);
            }
        }
    });
}

function chooseTypeOne(event) {
    if(event.checked){
        //二级
        $("input[name="+ event.id +"]").attr("checked",true);
    }else{
        $("input[name="+ event.id +"]").attr("checked",false);
    }
    $("input[name="+ event.id +"]").each(function(i){
        //二级选中
        if($(this).is(":checked")){
            //三级
            $("input[name="+ $(this)[0]['id'] +"]").attr("checked",true);

            $("input[name="+ $(this)[0]['id'] +"]").each(function(i){
                var grandSonId = $(this)[0]['id'];
                //三级选中
                if($(this).is(":checked")){
                    //四级
                    $("input[name="+ grandSonId +"]").attr("checked",true);
                }else{
                    $("input[name="+ grandSonId +"]").attr("checked",false);
                }
            });
        }else{
            $("input[name="+ $(this)[0]['id'] +"]").attr("checked",false);

            $("input[name="+ $(this)[0]['id'] +"]").each(function(i){
                var grandSonId = $(this)[0]['id'];
                //三级选中
                if($(this).is(":checked")){
                    //四级
                    $("input[name="+ grandSonId +"]").attr("checked",true);
                }else{
                    $("input[name="+ grandSonId +"]").attr("checked",false);
                }
            });
        }
    });
}

function chooseTypeTwo(event) {
    if(event.checked){
        $("input[name="+ event.id +"]").attr("checked",true);
    }else{
        $("input[name="+ event.id +"]").attr("checked",false);
    }
    $("input[name="+ event.id +"]").each(function(i){
        if($(this).is(":checked")){
            $("input[name="+ $(this)[0]['id'] +"]").attr("checked",true);
        }else{
            $("input[name="+ $(this)[0]['id'] +"]").attr("checked",false);
        }
    });

    var index = 0;
    $("input[name="+ event.name +"]").each(function(i){
        if($(this).is(":checked")){
            index++;
        }
    });
    if(index != 0){
        $("#" + event.name).attr("checked",true);
    }else{
        $("#" + event.name).attr("checked",false);
    }
}

function chooseTypeThree(event) {
    if(event.checked){
        $("input[name="+ event.id +"]").attr("checked",true);
    }else{
        $("input[name="+ event.id +"]").attr("checked",false);
    }

    var index = 0;
    $("input[name="+ event.name +"]").each(function(i){
        if($(this).is(":checked")){
            index++;
        }
    });
    if(index != 0){
        var parentId = event.name;
        var grandParentId = $("#"+ parentId)[0]['name'];
        $("#" + event.name).attr("checked",true);
        $("#" + grandParentId).attr("checked",true);
    }else{
        $("#" + event.name).attr("checked",false);
        $("#" + grandParentId).attr("checked",false);
    }
}

function chooseTypeFour(event) {
    var index = 0;
    $("input[name="+ event.name +"]").each(function(i){
        if($(this).is(":checked")){
            index++;
        }
    });
    if(index != 0){
        var parentId = event.name;
        var grandParentId = $("#"+ parentId)[0]['name'];
        var grandGrandParentId = $("#"+ grandParentId)[0]['name'];
        $("#" + event.name).attr("checked",true);
        $("#" + grandParentId).attr("checked",true);
        $("#" + grandGrandParentId).attr("checked",true);
    }else{
        $("#" + event.name).attr("checked",false);
        $("#" + grandParentId).attr("checked",false);
        $("#" + grandGrandParentId).attr("checked",false);
    }
}

function insertMenuLimit() {
    var menuLimitList = new Array();
    $("input[type='checkbox']").each(function(i){
        if($(this).is(":checked")){
            menuLimitList.push($(this)[0]['id']);
        }
    });

    $.ajax({
        type : "post",
        url : ip_path+"/changfa_system/menu/createMenuPermission.do",
        data : {
            menuIds : menuLimitList.toString(),
            roleId : $(window.parent.document).find("input[name='roleId_forLimit']").val(),
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                alert("权限设置成功！");
                window.open("roleManage.html","_self");
            }else{
                alert(data['head']['message']);
            }
        }
    });
}

function insertMenuLimitPart() {
    var menuLimitList = new Array();
    $("input[type='checkbox']").each(function(i){
        if($(this).is(":checked")){
            menuLimitList.push($(this)[0]['id']);
        }
    });

    $.ajax({
        type : "post",
        url : ip_path+"/changfa_system/menu/createMenuPermission.do",
        data : {
            menuIds : menuLimitList.toString(),
            roleId : $(window.parent.document).find("input[name='roleId_forLimit']").val(),
            menuType:2
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                alert("权限设置成功！");
                window.open("roleManage.html","_self");
            }else{
                alert(data['head']['message']);
            }
        }
    });
}

function setFence(event) {
    $(window.parent.parent.document).find("input[name='depotId']").val(event.parentNode.parentNode.id);
    $("#addFence").show();
}

function closeAddFence() {
    $("#addFence").hide();
}

function createFence() {
    $.ajax({
        type : "post",
        url : ip_path+"/changfa_system/locationRecord/setupRadius.do",
        data : {
            depotId : $(window.parent.parent.document).find("input[name='depotId']").val(),
            radius : $("#fence option:selected").val()
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                alert(data['head']['message']);
                $("#addFence").hide();
            }else{
                alert(data['head']['message']);
            }
        }
    });
}

// function functionLimitSet(event) {
//     $(window.parent.document).find("input[name='roleId_forLimit']").val(event.parentNode.parentNode.id);
//     window.open("functionLimitSet.html","_self");
// }

function querySalemanLocation() {
    currentPage = 1;
    ajax_salemanLocation();
}

function addServerDealer() {
    $("#addServerDealer").show();
}

function querySingleDealer() {
    if($("#dealer_info").val() == ""){
        alert("请输入查询条件！");
    }else{
        $.ajax({
            type : "post",
            url : ip_path+"/changfa_system/user/selectServiceUserInfo.do",
            data : {
                pageNum : 1,
                pageSize : 10000,
                roleId : 0,
                chooseItem : $("#dealer_item option:selected").val(),
                itemCont : $("#dealer_info").val(),
                status : 1
            },
            dataType : "json",
            success : function (data) {
                if(data['head']['code'] != 200){
                    alert(data['head']['message']);
                    $("#dealers").show();
                    $("#dealerList").empty();
                    $("#dealerList").append(
                        "<tr>" +
                        '<td class="td2 txt_center" height="33" colspan="3">未查到相关信息</td>' +
                        '</tr>'
                    );
                }else{
                    $("#dealers").show();
                    $("#dealers_btn").show();
                    $("#dealerList").empty();
                    for(var i=0;i<data['body']['result']['data'].length;i++){
                        $("#dealerList").append(
                            "<tr>" +
                            '<td class="td2 txt_center" height="33">' + data['body']['result']['data'][i]['company'] + '</td>' +
                            '<td class="td2 txt_center" >' + data['body']['result']['data'][i]['workNum'] + '</td>' +
                            '<td class="td2 txt_center" ><input type="radio" id="' + data['body']['result']['data'][i]['userId'] + '" class="choose_select" name="dealer"></td>' +
                            '</tr>'
                        );
                    }
                }
            }
        });
    }
}

function closeAddServerDealer() {
    $("#dealer_info").val("");
    $("#dealers").hide();
    $("#dealers_btn").hide();
    $("#addServerDealer").hide();
}

function addDealerToServer() {
    var dealerId;
    dealerId = $("input[name='dealer']:checked")[0]['id'];
    $.ajax({
        type : "post",
        url : ip_path+"/changfa_system/userServicer/addUserServicer.do",
        data : {
            userId : $(window.parent.parent.document).find("input[name='serverId']").val(),
            dealerId : dealerId
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                window.location.reload();
            }else{
                alert(data['head']['message']);
            }
        }
    });
}

function deleteServerDealer(event) {
    if(window.confirm("确认删除？")){
        $.ajax({
            type : "post",
            url : ip_path+"/changfa_system/userServicer/deleteUserServicer.do",
            data : {
                id : event.parentNode.parentNode.id
            },
            dataType : "json",
            success : function (data) {
                if(data['head']['code'] == 200){
                    window.location.reload();
                }else{
                    alert(data['head']['message']);
                }
            }
        });
    }
}

function queryChangfaUser() {
    currentPage = 1;
    ajax_cfUserM();
}

function signVip(event) {
    var status;
    if(event.src == "http://app.changfanz.net:3588/changfa_file/on.png"){
        status = 0;
    }else {
        status = 1;
    }
    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/account/updateUserInfos.do",
        data : {
            userId : event.parentNode.parentNode.id,
            token : $(window.parent.document).find("input[name='token']").val(),
            isCertifiedOwner : status
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

//删除业务员定位
function deleteSalemanLocation(event) {
    if(window.confirm("删除定位？")){
        $.ajax({
            type: "post",
            async: false,
            url: ip_path + "/changfa_system/locationRecord/deleteDepotUnuse.do",
            data: {
                id : event.parentNode.parentNode.id
            },
            dataType: "json",
            success: function (data) {
                if(data['head']['code'] == 200){
                    currentPage = 1;
                    ajax_salemanLocation();
                }else{
                    alert(data['head']['message']);
                }
            }
        });
    }
}
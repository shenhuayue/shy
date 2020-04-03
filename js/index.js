var theRequest;
var token;
var userId;
var roleId;
var firstFloorList;
var secondFloorList;
var thirdFloorList;
var limitList;

//报修派工报表
var rptTimeType = 1;
var disTimeType = 1;
var repTimeType = 1;
var sendTimeType = 1;
var saleTimeType = 1;

window.onload = function(){
    jQuery.support.cors = true;
    toTop();
    var url = location.search; //获取url中"?"符后的字串 ('?modFlag=business&role=1')
    theRequest = new Object();
    if ( url.indexOf( "?" ) != -1 ) {
        var str = url.substr( 1 ); //substr()方法返回从参数值开始到结束的字符串；
        var strs = str.split( "&" );
        for ( var i = 0; i < strs.length; i++ ) {
            theRequest[ strs[ i ].split( "=" )[ 0 ] ] = ( strs[ i ].split( "=" )[ 1 ] );
        }
        userId = base64decode(theRequest['userId']);
        token = base64decode(theRequest['token']);
        roleId = base64decode(theRequest['roleId']);

        $("#username").val(base64decode(theRequest['account']));
    }

    $("#hidden1").val(token);
    $("#hidden7").val(roleId);
    $("#hidden10").val(userId);
    $("#hidden02").val(base64decode(theRequest['account']));

    if(roleId == 1 || roleId == 2 || roleId == 22 || roleId == 23){
        $("#singleForSpecial1").show();
        $("#singleForSpecial2").show();
        
        //小铃铛消息提醒
        $("#msgBtn").on({
            mouseover : function(){
                $("#sysMsgBox").show();
                $.ajax({
                    type : "post",
                    url : ip_path+"/changfa_system/machineFlow/count.do",
                    dataType : "json",
                    success : function (data) {
                        if(data['head']['code'] == 200){
                            $("#sysMsgBox").html(
                                //'<div class="msgBox_child" onclick="newRpt()">报修单新增&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+data['body']['result']['reportCount']+'条</div>' +
                                '<div class="msgBox_child" onclick="newProductMenu()">服务目录维护&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+data['body']['result']['modelCount']+'条</div>' +
                                '<div class="msgBox_child" onclick="newOrderManage()">销售目录维护&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+data['body']['result']['saleModelCount']+'条</div>' +
                                '<div class="msgBox_child" onclick="newServicePrice()">星级单价维护&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+data['body']['result']['costCount']+'条</div>' +
                                // '<div class="msgBox_child" onclick="newTfd()">退、返、调申请&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+data['body']['result']['noExamineCount']+'条</div>' +
                                // '<div class="msgBox_child" onclick="newSale()">销售申请&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+data['body']['result']['saleCount']+'条</div>' +
                                '<div class="msgBox_child_none" onclick="newDealer()">经销商维护&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+data['body']['result']['dealerCount']+'条</div>'
                            );
                        }else{
                            alert(data['head']['message']);
                        }
                    }
                });
            } ,
            mouseout : function(){
                setTimeout(function () {
                    $("#sysMsgBox").hide();
                }, 5000);
            }
        });
    
        //获取小铃铛状态
        $.ajax({
            type : "post",
            url : ip_path+"/changfa_system/machineFlow/count.do",
            dataType : "json",
            success : function (data) {
                if(data['head']['code'] == 200){
                    if(data['body']['result']['remind'] == 0){
                        $("#msgBtn").attr("src","img/msg.png");
                    }else{
                        $("#msgBtn").attr("src","img/msg_waiting.png");
                    }
                }else{
                    alert(data['head']['message']);
                }
            }
        });
    }else{
        $("#singleForSpecial1").hide();
        $("#singleForSpecial2").hide();
    }

    if(roleId == 1 || roleId == 2 || roleId == 21 || roleId == 23 || roleId == 17){
        $("#rptWaiting").show();
        $.ajax({
            type : "post",
            url : ip_path+"/changfa_system/machineFlow/count.do",
            dataType : "json",
            success : function (data) {
                if(data['head']['code'] == 200){
                    $("#rptNumWaiting").val(' '+data['body']['result']['reportCount']);
                }else{
                    alert(data['head']['message']);
                }
            }
        });

        setInterval(function () {
            $.ajax({
                type : "post",
                url : ip_path+"/changfa_system/machineFlow/count.do",
                dataType : "json",
                success : function (data) {
                    if(data['head']['code'] == 200){
                        $("#rptNumWaiting").val(' '+data['body']['result']['reportCount']);
                    }else{
                        alert(data['head']['message']);
                    }
                }
            });
        },60000);
    }else{
        $("#rptWaiting").hide();
    }

    //获取菜单
    $.ajax({
        type : "post",
        async : false,
        url : ip_path+"/changfa_system/menu/queryRoleMenu.do",
        data : {
            roleId: roleId
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                firstFloorList = data['body']['result']['typeOne'];
                secondFloorList = data['body']['result']['typeTwo'];
                thirdFloorList = data['body']['result']['typeThree'];
                limitList = data['body']['result']['typeFour'];
                sessionStorage.clear();
                $("#firstFloor").empty();
                $("#secondFloorList").empty();
                for(var i=0;i<data['body']['result']['data'].length;i++) {
                    if (data['body']['result']['data'][i]['type'] == 1) {
                        $("#firstFloor").append(
                            '<input type="button" id="' + data['body']['result']['data'][i]['menuId'] + '" class="searchBar flt_l" onclick="chooseFirstFloor(this)" value="' + data['body']['result']['data'][i]['menuName'] + '">'
                        );
                        $("#secondFloorList").append(
                            '<div id="secondFloor' + data['body']['result']['data'][i]['menuId'] + '" class="menu3_tab" style="border-collapse: collapse;display: none"></div>'
                        );
                    } else if (data['body']['result']['data'][i]['type'] == 2) {
                        $("#secondFloor" + data['body']['result']['data'][i]['parentId']).append(
                            '<li class="menu3_td0" style="border-top: none;">' + data['body']['result']['data'][i]['menuName'] + '<img src="img/menu_close.png" class="menu_status flt_r"></li>' +
                            '<ul id="thirdFloor' + data['body']['result']['data'][i]['menuId'] + '" style="display: none;"></ul>'
                        );
                    } else if (data['body']['result']['data'][i]['type'] == 3) {
                        $("#thirdFloor" + data['body']['result']['data'][i]['parentId']).append(
                            '<a href="###" id="' + data['body']['result']['data'][i]['path'] + '"><li id="' + data['body']['result']['data'][i]['menuId'] + '" class="menu3_td" onclick="iframeInsert(this)">' + data['body']['result']['data'][i]['menuName'] + '</li></a>'
                        );
                    }
                }
            }else{
                alert(data['head']['message']);
            }
        }
    });

    var content = "<iframe id='ifm' src='firstPage.html' frameborder='0' scrolling='no' width='100%' height='910px'></iframe>"
    $("#inner").html(content);
    //登录默认页
    $("#firstFloor").find("input")[0].click();
    // var content = "<iframe id='ifm' src='home.html' frameborder='0' scrolling='no' width='100%' height='2000px'></iframe>"
    // $("#inner").html(content);
    // $("#21").parent().parent().slideDown(100);
    // // $("#21").parent().parent().siblings()[0].find("img").attr("src","img/menu_open.png");
    // $("#21").addClass("menu3_td_choosed");

    $(".menu3_td0").click(function(){
        if($(this).next('ul').css('display') == "none"){
            $(this).addClass('menu3_td0_act');
            $(this).next('ul').slideDown(100);
            $(this).find("img").attr("src","img/menu_open.png");
        }else{
            $(this).removeClass('menu3_td0_act');
            $(this).next('ul').slideUp(100);
            $(this).find("img").attr("src","img/menu_close.png");
        }
    });



    //获取用户头像
    $.ajax({
        type : "post",
        url : ip_path+"/changfa_system/account/getUserInfo.do",
        data : {
            token : $("#hidden1").val()
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                if(data['body']['result']['headUrl'] == ""){
                    $("#hidden11").val("http://app.changfanz.net:3588/changfa_file/head.png");
                }else {
                    $("#hidden11").val(data['body']['result']['headUrl']);
                }
                $(window.document).find("input[name='roleId']").val(data['body']['result']['roleId']);

                if(data['body']['result']['mobile']){
                    $(window.document).find("input[name='mobile']").val(data['body']['result']['mobile']);
                    //获取角色权限
                    $.ajax({
                        type : "post",
                        async : false,
                        url : ip_path+"/changfa_system/account/queryUserRoles.do",
                        data : {
                            mobile: data['body']['result']['mobile'],
                            loginType:1,
                        },
                        dataType : "json",
                        success : function (data) {
                            if(data['head']['code'] == 200){
                                data.body.resultList.forEach(elem => {
                                    $('#switchRoles').append(
                                        "<option value='"+ elem['roleId'] +"'>"+elem['roleName']+"</option>"
                                    )
                                });
                                $('#switchRoles').val(roleId);
                            }else{
                                alert(data['head']['message']);
                            }
                        }
                    });
                }else{
                    $('#switchRoles').hide();
                    $('#switchRoles').prev().hide();
                }

            }else if(data['head']['code'] == 505){
                alert(data['head']['message']);
                window.open("login.html","_self");
            }else{
                alert(data['head']['message']);
            }
        }
    });

    //如果脚色下拉框变换
    $("#switchRoles").change(function () {
        //获取角色权限
        $.ajax({
            type : "post",
            async : false,
            url : ip_path+"/changfa_system/account/changRole.do",
            data : {
                token: $(window.document).find("input[name='token']").val(),
                roleId:$(this).val()
            },
            dataType : "json",
            success : function (data) {
                if(data['head']['code'] == 200){
                    window.location.href = "index.html?token="+base64encode($(window.document).find("input[name='token']").val())+"&account="+base64encode($(window.document).find("input[name='account']").val())+"&roleId="+base64encode(data.body.result.roleId.toString())+"&userId="+base64encode(data.body.result.userId)+"";
                    
                }else{
                    alert(data['head']['message']);
                }
            }
        });
   });

    //默认拉开首页三层菜单
    $("#secondFloor1").find(".menu3_td0").click();

    // $('#largePic').bind('mousewheel', function(event, delta) {
    //     if(delta<0){
    //         this.style.width += '100px';
    //         console.log(this.style.width);
    //     }
    // });

    //定时提醒
    // setInterval(function () {
    //     $.ajax({
    //         type : "post",
    //         url : ip_path+"/changfa_system/dispatch/queryOvertimeDispatch.do",
    //         data : {
    //             type : 1
    //         },
    //         dataType : "json",
    //         success : function (data) {
    //             if(data['head']['code'] == 200){
    //                 if(data['body']['resultList'].length != 0){
    //                     $("#currentWarning").show();
    //                     $("#itemList").empty();
    //                     for(var i=0;i<data['body']['resultList'].length;i++){
    //                         $("#itemList").append(
    //                             '<div class="txt_left outShadow mg_b10 warning_item" id="' + data['body']['resultList'][i]['reportId'] + '" ondblclick="toSingleDispatch(this)">' +
    //                             '<span>派工单号：'+ data['body']['resultList'][i]['dispatchNum'] + '</span><br>' +
    //                             '<span>派单人：' + data['body']['resultList'][i]['disPatchUserName'] + '</span><span class="mg_l10">接单人：' + data['body']['resultList'][i]['repairUserName'] + '</span><span class="mg_l10">状态：超时未接单</span>' +
    //                             '</div>'
    //                         );
    //                     }
    //
    //                     if(data['body']['resultList'].length>5){
    //                         $("#itemList").addClass("scrollList");
    //                     }
    //                 }
    //             }else{
    //                 alert(data['head']['message']);
    //             }
    //         }
    //     });
    // },60000);
}

function to_home() {
    window.location.reload();
}

function chooseFirstFloor(event) {
    for(var item in firstFloorList){
        if(event.id == firstFloorList[item]){
            $("#" + firstFloorList[item]).addClass("searchBar_selected");
            $("#secondFloor" + firstFloorList[item]).show();
        }else{
            $("#" + firstFloorList[item]).removeClass("searchBar_selected");
            $("#secondFloor" + firstFloorList[item]).hide();
        }
    }
}

// //跳转配件系统
// function goParts(){
//     window.location.href="http://test.app.changfanz.net:3590/dist/index.html#/cover?token="+base64encode(token)+"&account="+base64encode($("#hidden02").val())+"&roleId="+base64encode(roleId)+"&userId="+base64encode(userId)+"";
// }

function iframeInsert(event) {
    $(window.document).find("input[name='longTextId']").val('');
    var content = "<iframe id='ifm' src='" + event.parentNode.id + ".html' frameborder='0' scrolling='no' width='100%' height='3000px'></iframe>"
    $("#inner").html(content);
    for(var item in thirdFloorList){
        if(event.id == thirdFloorList[item]){
            $("#" + thirdFloorList[item]).addClass("menu3_td_choosed");
        }else{
            $("#" + thirdFloorList[item]).removeClass("menu3_td_choosed");
        }
    }
}

function indexMsg() {
    $("#msgBtn").attr("src","img/msg.png");
    var content = "<iframe id='ifm' src='waitingForCheck.html' frameborder='0' scrolling='no' width='100%' height='2000px'></iframe>"
    $("#inner").html(content);

    var arr_id = new Array("home","actSetting","sysMsg","loginLog","noticeManage","repairNeedManage","dispatchingManage","repairedManage","faultManage","productMenuManage","servicePriceManage","userArchivesManage","costSumManage","sendMachineManage","storeMachineManage","saleMachineManage","waitingForCheck","reportSum","dispatchSum","repairSum","orderPlan","vehicleTransport","vehicleStock","vehicleSales","saleOrder","dealersStock","salePlanManage","subjectManage","vedioManage","graphicManage","topicManage","helpManage","reportManage","sysMsgManage","smsManage","appPushManage","adManage","evtPublish","evtManage","evt_mebManage","evt_costManage","goodsManage","goods_integralManage","dealersManage","socialServerManage","cfServerManage","salerManage","userManage","companyLocationManage","partManage","mebManage","operationLog","commonSet","userHttp","msgWarning","captchaSet","dbManage");
    for (var i=0;i<arr_id.length;i++){
        $("#"+arr_id[i]).removeClass("menu3_td_choosed");
    }
    $("ul").slideUp(100);
    $("li").find("img").attr("src","img/menu_close.png");
}

function quit() {
    var ip = returnCitySN["cip"];
    var address = returnCitySN["cname"];
    var msg = "确定退出登录？";
    if(window.confirm(msg)){
        $.ajax({
            type : "post",
            async : false,
            url : ip_path+"/changfa_system/account/quit.do",
            data : {
                roleId : $("#hidden7").val(),
                account : base64decode(theRequest['account']),
                token : base64decode(theRequest['token']),
                model : 0,
                ipAddress : ip,
                address : address,
                browserVersion : getBrowserVersion()
            },
            dataType : "json",
            success : function (data) {
                if(data['head']['code'] == 200){
                    window.open("login.html","_self");
                }else{
                    window.open("login.html","_self");
                }
            }
        });
    }else{
        return;
    }
}

function getRoleMenu(){

}

// var arr = new Array("tab_menu_shouye","tab_menu_sales","tab_menu_running","tab_menu_user","tab_menu_manage")
// function choose(event) {
//     var tempId = document.getElementById(event).id;
//     var targetId = "tab_menu_" + tempId;
//     for (var i=0;i<arr.length;i++){
//         if(targetId == arr[i]){
//             document.getElementById(arr[i]).style.display = "block";
//         }else{
//             document.getElementById(arr[i]).style.display = "none";
//         }
//     }
// }
//
// function shouye(event) {
//     $("#shouye").addClass("searchBar_selected");
//     $("#sales").removeClass("searchBar_selected");
//     $("#running").removeClass("searchBar_selected");
//     $("#user").removeClass("searchBar_selected");
//     $("#manage").removeClass("searchBar_selected");
//     choose(event);
// }
//
// function salesCenter(event) {
//     $("#sales").addClass("searchBar_selected");
//     $("#shouye").removeClass("searchBar_selected");
//     $("#shouye").addClass("searchBar");
//     $("#running").removeClass("searchBar_selected");
//     $("#user").removeClass("searchBar_selected");
//     $("#manage").removeClass("searchBar_selected");
//     choose(event);
// }
//
// function runningCenter(event) {
//     $("#running").addClass("searchBar_selected");
//     $("#shouye").removeClass("searchBar_selected");
//     $("#shouye").addClass("searchBar");
//     $("#sales").removeClass("searchBar_selected");
//     $("#user").removeClass("searchBar_selected");
//     $("#manage").removeClass("searchBar_selected");
//     choose(event);
// }
//
// function userCenter(event) {
//     $("#user").addClass("searchBar_selected");
//     $("#shouye").removeClass("searchBar_selected");
//     $("#shouye").addClass("searchBar");
//     $("#sales").removeClass("searchBar_selected");
//     $("#running").removeClass("searchBar_selected");
//     $("#manage").removeClass("searchBar_selected");
//     choose(event);
// }
//
// function sysManage(event) {
//     $("#manage").addClass("searchBar_selected");
//     $("#shouye").removeClass("searchBar_selected");
//     $("#shouye").addClass("searchBar");
//     $("#sales").removeClass("searchBar_selected");
//     $("#user").removeClass("searchBar_selected");
//     $("#running").removeClass("searchBar_selected");
//     choose(event);
// }
//
// function ifmParamPass() {
//     var childFrameObj = document.getElementById("ifm");
//     childFrameObj.contentWindow.paramFromParent = theRequest;
// }
//
// function home(event) {
//     var content = "<iframe id='ifm' src='home.html' frameborder='0' scrolling='no' width='100%' height='1000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function actSetting(event) {
//     var content = "<iframe id='ifm' src='actSetting.html' frameborder='0' scrolling='no' width='100%' height='1000px'></iframe>"
//     $("#inner").html(content);
//     ifmParamPass();
//     menu_select(event.id);
//
//
// }
//
// function sysMsg(event) {
//     var content = "<iframe id='ifm' src='sysMsg.html' frameborder='0' scrolling='no' width='100%' height='1000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function loginLog(event) {
//     var content = "<iframe id='ifm' src='loginLog.html' frameborder='0' scrolling='no' width='100%' height='1000px'></iframe>"
//     $("#inner").html(content);
//     ifmParamPass();
//     menu_select(event.id);
// }
//
//
// function noticeManage(event) {
//     var content = "<iframe id='ifm' src='noticeManage.html' frameborder='0' scrolling='no' width='100%' height='2000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function repairNeedManage(event) {
//     var content = "<iframe id='ifm' src='repairNeedManage.html' frameborder='0' scrolling='no' width='100%' height='2700px'></iframe>"
//     $("#inner").html(content);
//     var childFrameObj = document.getElementById("ifm");
//     childFrameObj.contentWindow.paramFromParent = theRequest['token'];
//     menu_select(event.id);
//
// }
//
// function productLineManage() {
//     var content = "<iframe id='ifm' src='productLineManage.html' frameborder='0' scrolling='no' width='100%' height='1700px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// // function dispatchingManage(event) {
// //     var content = "<iframe id='ifm' src='waiting.html' frameborder='0' scrolling='no' width='1724px' height='1000px'></iframe>"
// //     $("#inner").html(content);
// //
// //     menu_select(event.id);
// // }
// //
// // function repairedManage(event) {
// //     var content = "<iframe id='ifm' src='waiting.html' frameborder='0' scrolling='no' width='1724px' height='1000px'></iframe>"
// //     $("#inner").html(content);
// //
// //     menu_select(event.id);
// // }
//
// function productMenuManage(event) {
//     var content = "<iframe id='ifm' src='productMenuManage.html' frameborder='0' scrolling='no' width='100%' height='3000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function servicePriceManage(event) {
//     var content = "<iframe id='ifm' src='servicePriceManage.html' frameborder='0' scrolling='no' width='100%' height='1000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function faultManage(event) {
//     var content = "<iframe id='ifm' src='waiting.html' frameborder='0' scrolling='no' width='100%' height='1000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function userArchivesManage(event) {
//     var content = "<iframe id='ifm' src='userArchivesManage.html' frameborder='0' scrolling='no' width='100%' height='2000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function costSumManage(event) {
//     var content = "<iframe id='ifm' src='costSumManage.html' frameborder='0' scrolling='no' width='100%' height='1500px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function costCheckManage(event) {
//     var content = "<iframe id='ifm' src='costCheckManage.html' frameborder='0' scrolling='no' width='100%' height='1500px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function costPayManage(event) {
//     var content = "<iframe id='ifm' src='costPayManage.html' frameborder='0' scrolling='no' width='100%' height='1500px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function reportSum(event) {
//     var content = "<iframe id='ifm' src='reportSum.html' frameborder='0' scrolling='no' width='100%' height='1000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function dispatchSum(event) {
//     var content = "<iframe id='ifm' src='dispatchSum.html' frameborder='0' scrolling='no' width='100%' height='1000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function repairSum(event) {
//     var content = "<iframe id='ifm' src='repairSum.html' frameborder='0' scrolling='no' width='100%' height='1000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function orderPlan(event) {
//     var content = "<iframe id='ifm' src='waiting.html' frameborder='0' scrolling='no' width='100%' height='1000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function vehicleTransport(event) {
//     var content = "<iframe id='ifm' src='vehicleTransport.html' frameborder='0' scrolling='no' width='100%' height='1000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function vehicleStock(event) {
//     var content = "<iframe id='ifm' src='waiting.html' frameborder='0' scrolling='no' width='100%' height='1000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function vehicleSales(event) {
//     var content = "<iframe id='ifm' src='waiting.html' frameborder='0' scrolling='no' width='100%' height='1000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function saleOrder(event) {
//     var content = "<iframe id='ifm' src='waiting.html' frameborder='0' scrolling='no' width='100%' height='1000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function dealersStock(event) {
//     var content = "<iframe id='ifm' src='waiting.html' frameborder='0' scrolling='no' width='100%' height='1000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function sendMachineManage(event) {
//     var content = "<iframe id='ifm' src='sendMachineManage.html' frameborder='0' scrolling='no' width='100%' height='1000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function storeMachineManage(event) {
//     var content = "<iframe id='ifm' src='storeMachineManage.html' frameborder='0' scrolling='no' width='100%' height='1000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function saleMachineManage(event) {
//     var content = "<iframe id='ifm' src='saleMachineManage.html' frameborder='0' scrolling='no' width='100%' height='1500px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function waitingForCheck(event) {
//     var content = "<iframe id='ifm' src='waitingForCheck.html' frameborder='0' scrolling='no' width='100%' height='1500px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function salePlanManage(event) {
//     var content = "<iframe id='ifm' src='waiting.html' frameborder='0' scrolling='no' width='100%' height='1000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function topicManage(event) {
//     var content = "<iframe id='ifm' src='topicManage.html' frameborder='0' scrolling='no' width='100%' height='2000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function postManage(event) {
//     var content = "<iframe id='ifm' src='postManage.html' frameborder='0' scrolling='no' width='100%' height='2000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function reportManage(event) {
//     var content = "<iframe id='ifm' src='waiting.html' frameborder='0' scrolling='no' width='100%' height='1000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function evtManage(event) {
//     var content = "<iframe id='ifm' src='evtManage.html' frameborder='0' scrolling='no' width='100%' height='1000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function evt_costManage(event) {
//     var content = "<iframe id='ifm' src='waiting.html' frameborder='0' scrolling='no' width='100%' height='1000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function goodsManage(event) {
//     var content = "<iframe id='ifm' src='goodsManage.html' frameborder='0' scrolling='no' width='100%' height='1000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function informationManage(event) {
//     var content = "<iframe id='ifm' src='informationManage.html' frameborder='0' width='100%' height='1000px' style='overflow-y: scroll'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function ordersManage(event) {
//     var content = "<iframe id='ifm' src='ordersManage.html' frameborder='0' scrolling='no' width='100%' height='1000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function goods_integralManage(event) {
//     var content = "<iframe id='ifm' src='waiting.html' frameborder='0' scrolling='no' width='100%' height='1000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function integralRules(event) {
//     var content = "<iframe id='ifm' src='integralRules.html' frameborder='0' scrolling='no' width='100%' height='1200px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function questionBankManage(event) {
//     var content = "<iframe id='ifm' src='questionBankManage.html' frameborder='0' scrolling='no' width='100%' height='1200px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function questionNaireManage(event) {
//     var content = "<iframe id='ifm' src='questionNaireManage.html' frameborder='0' scrolling='no' width='100%' height='1200px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function chatRecord(event) {
//     var content = "<iframe id='ifm' src='chatRecord.html' frameborder='0' scrolling='no' width='100%' height='2000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function salerManage(event) {
//     var content = "<iframe id='ifm' src='salerManage.html' frameborder='0' scrolling='no' width='100%' height='2000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function dealersManage(event) {
//     var content = "<iframe id='ifm' src='dealersManage.html' frameborder='0' scrolling='no' width='100%' height='2000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function socialServerManage(event) {
//     var content = "<iframe id='ifm' src='socialServerManage.html' frameborder='0' scrolling='no' width='100%' height='2000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function cfServerManage(event) {
//     var content = "<iframe id='ifm' src='cfServerManage.html' frameborder='0' scrolling='no' width='100%' height='2000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function userManage(event) {
//     var content = "<iframe id='ifm' src='userManage.html' frameborder='0' scrolling='no' width='100%' height='2000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function companyLocationManage(event) {
//     var content = "<iframe id='ifm' src='companyLocationManage.html' frameborder='0' scrolling='no' width='100%' height='1500px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function partManage(event) {
//     var content = "<iframe id='ifm' src='partManage.html' frameborder='0' scrolling='no' width='100%' height='1000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function roleManage(event) {
//     var content = "<iframe id='ifm' src='roleManage.html' frameborder='0' scrolling='no' width='100%' height='1000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function mebManage(event) {
//     var content = "<iframe id='ifm' src='mebManage.html' frameborder='0' scrolling='no' width='100%' height='1000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function operationLog(event) {
//     var content = "<iframe id='ifm' src='waiting.html' frameborder='0' scrolling='no' width='100%' height='1000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function commonSet(event) {
//     var content = "<iframe id='ifm' src='waiting.html' frameborder='0' scrolling='no' width='100%' height='1000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function userHttp(event) {
//     var content = "<iframe id='ifm' src='waiting.html' frameborder='0' scrolling='no' width='100%' height='1000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function msgWarning(event) {
//     var content = "<iframe id='ifm' src='waiting.html' frameborder='0' scrolling='no' width='100%' height='1000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function captchaSet(event) {
//     var content = "<iframe id='ifm' src='waiting.html' frameborder='0' scrolling='no' width='100%' height='1000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }
//
// function dbManage(event) {
//     var content = "<iframe id='ifm' src='waiting.html' frameborder='0' scrolling='no' width='100%' height='1000px'></iframe>"
//     $("#inner").html(content);
//
//     menu_select(event.id);
// }

// function menu_select(id) {
//     var arr_id = new Array("home","actSetting","sysMsg","loginLog","noticeManage","repairNeedManage","dispatchingManage","repairedManage","faultManage","productMenuManage","servicePriceManage","userArchivesManage","costSumManage","costCheckManage","costPayManage","sendMachineManage","storeMachineManage","saleMachineManage","waitingForCheck","reportSum","dispatchSum","repairSum","orderPlan","vehicleTransport","vehicleStock","vehicleSales","saleOrder","dealersStock","salePlanManage","topicManage","postManage","helpManage","reportManage","evtManage","evt_costManage","informationManage","goodsManage","ordersManage","goods_integralManage","integralRules","questionBankManage","questionNaireManage","chatRecord","dealersManage","socialServerManage","cfServerManage","salerManage","userManage","companyLocationManage","partManage","roleManage","mebManage","operationLog","commonSet","userHttp","msgWarning","captchaSet","dbManage");
//     for (var i=0;i<arr_id.length;i++){
//         if(id == arr_id[i]){
//             $("#"+arr_id[i]).addClass("menu3_td_choosed");
//         }else{
//             $("#"+arr_id[i]).removeClass("menu3_td_choosed");
//         }
//     }
// }

/*账户设置*/
function upload() {
    $("#file").click();
}

//不同浏览器的兼容
function getObjectURL(file) {
    var url = null ;
    if (window.createObjectURL != undefined) { // basic
        url = window.createObjectURL(file) ;
    } else if (window.URL != undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file) ;
    } else if (window.webkitURL != undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file) ;
    }
    return url ;
}

//上传头像
// function loadFile() {
//     var option = {
//         url :ip_path+"/changfa_system/file/oneFileUpoload.do",
//         type : "post",
//         success : function (data) {
//             alert(data['head']['message']);
//             if(data['head']['code'] == 200){
//                 $(window.parent.document).find("input[name='headUrl']").val(data['body']['result']['filePath']);
//             }
//         }
//     };
//     $("#form").ajaxSubmit(option);
// }

//短信验证码
function msgRequest() {

    var mobile = $("#mobile").val();
    $.ajax({
        type : "post",
        async : false,
        url : ip_path+"/changfa_system/message/sendMs.do",
        data : {
            mobile : mobile
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                limit();
            }
        }
    });
}

var countdown = 180;
function limit() {
    if (countdown == 0) {
        $("#msgBtn").removeAttr("disabled");
        $("#msgBtn").value="免费获取验证码";
        countdown = 180;
        return;
    } else {
        $("#msgBtn").attr("disabled", true);
        $("#msgBtn").value="重新发送(" + countdown + ")";
        countdown--;
    }
    setTimeout(function() {
            limit() }
        ,1000)
}

function accountSubmit() {
    if("" == $("#oldPwd").val()){
        alert("原密码不能为空！");
    }else if("" == $("#newPwd").val()){
        alert("请输入新密码！");
    } else if($("#newPwd").val() != $("#confirmPwd").val()){
        alert("两次输入的密码不一致！");
        $("#newPwd").val("");
        $("#confirmPwd").val("");
    } else {
        // if($("#newPwd").val() == $("#oldPwd").val()){
        //     if(window.confirm("新密码与原密码一致，继续修改吗？")){
                var user = $("#account_user").val();
                var oldPwd = $("#oldPwd").val();
                var newPwd = $("#newPwd").val();
                var code = $("#msg").val();
                $.ajax({
                    type : "post",
                    url : ip_path+"/changfa_system/account/changePasswordPC.do",
                    data : {
                        roleId : $(window.parent.document).find("input[name='roleId']").val(),
                        account : user,
                        newPsd : newPwd,
                        code : code,
                        roleId : $(window.parent.document).find("input[name='roleId']").val(),
                        oldPsd : oldPwd
                    },
                    dataType : "json",
                    success : function (data) {
                        if(data['head']['code'] == 200){
                            window.open("login.html","_parent");
                        }else{
                            alert(data['head']['message']);
                        }
                    }
                });

        //     }else{
        //         $("#newPwd").val("");
        //         $("#confirmPwd").val("");
        //     }
        // }else{
        //     var user = $("#account_user").val();
        //     var newPwd = $("#newPwd").val();
        //     var code = $("#msg").val();
        //     $.ajax({
        //         type : "post",
        //         url : ip_path+"/changfa_system/account/changePassword.do",
        //         data : {
        //             account : user,
        //             newPsd : newPwd,
        //             code : code
        //         },
        //         dataType : "json",
        //         success : function (data) {
        //             if(data['head']['isSuccess']){
        //                 alert("密码修改成功！");
        //                 window.open("login.html","_parent");
        //             }else{
        //                 alert(data['head']['message']);
        //             }
        //         }
        //     });
        // }
    }
}
//替换链接地址 放大预览图
function pic_makeLarge(param) {
    $('body').css({
        'overflow-x':'hidden',
        'overflow-y':'hidden'
    })
    
    document.getElementById("pic_box").style.display = "block";
    $("#largePic").attr("src",param.src);
}

function pic_makeSmall() {
    document.getElementById("pic_box").style.display = "none";
}



function slideUp() {
    var arr_id = new Array("home","actSetting","sysMsg","loginLog","noticeManage","repairNeedManage","dispatchingManage","repairedManage","faultManage","productMenuManage","servicePriceManage","userArchivesManage","costSumManage","costCheckManage","costPayManage","sendMachineManage","storeMachineManage","saleMachineManage","waitingForCheck","reportSum","dispatchSum","repairSum","orderPlan","vehicleTransport","vehicleStock","vehicleSales","saleOrder","dealersStock","salePlanManage","topicManage","postManage","helpManage","reportManage","evtManage","evt_costManage","informationManage","goodsManage","ordersManage","goods_integralManage","integralRules","questionBankManage","questionNaireManage","chatRecord","dealersManage","socialServerManage","cfServerManage","salerManage","userManage","companyLocationManage","partManage","mebManage","operationLog","commonSet","userHttp","msgWarning","captchaSet","dbManage");
    for (var i=0;i<arr_id.length;i++){
        $("#"+arr_id[i]).removeClass("menu3_td_choosed");
    }
    $("ul").slideUp(100);
    $("li").find("img").attr("src","img/menu_close.png");
}

function newRpt(){
    $(window.document).find("input[name='fastRptProcess']").val(1);
    var content = "<iframe id='ifm' src='fastRepairNeed.html' frameborder='0' scrolling='no' width='100%' height='2500px'></iframe>"
    $("#inner").html(content);
    slideUp();
}

function newProductMenu(){
    var content = "<iframe id='ifm' src='productMenuManage.html' frameborder='0' scrolling='no' width='100%' height='2500px'></iframe>"
    $("#inner").html(content);
    slideUp();
}

function newOrderManage(){
    var content = "<iframe id='ifm' src='orderConfigurationManage.html' frameborder='0' scrolling='no' width='100%' height='2500px'></iframe>"
    $("#inner").html(content);
    slideUp();
}

function newServicePrice(){
    var content = "<iframe id='ifm' src='newServicePrice.html' frameborder='0' scrolling='no' width='100%' height='2500px'></iframe>"
    $("#inner").html(content);
    slideUp();
}

function newTfd(){
    var content = "<iframe id='ifm' src='waitingForCheck.html' frameborder='0' scrolling='no' width='100%' height='2500px'></iframe>"
    $("#inner").html(content);
    slideUp();
}

function newSale(){
    var content = "<iframe id='ifm' src='saleMachineManage.html' frameborder='0' scrolling='no' width='100%' height='2500px'></iframe>"
    $("#inner").html(content);
    slideUp();
}

function newDealer(){
    var content = "<iframe id='ifm' src='newDealersManage.html' frameborder='0' scrolling='no' width='100%' height='2500px'></iframe>"
    $("#inner").html(content);
    slideUp();
}


function showLoading() {
    $("#loading").show();
}

function hideLoading() {
    $("#loading").hide();
}

function go_right() {
    $("#currentWarning").animate({
        right: "-300px"
    },2000);
    $("#right").hide();
    $("#left").show();
}

function go_left() {
    $("#currentWarning").animate({
        right: "0px"
    },2000);
    $("#right").show();
    $("#left").hide();
}

function toSingleDispatch(event) {
    $("#hidden2").val(event.id);
    var content = "<iframe id='ifm' src='repaireNeedDetail.html' frameborder='0' scrolling='no' width='100%' height='2700px'></iframe>"
    $("#inner").html(content);
}

function updateRptTable(event) {
    $("#rpt_today").removeClass("font_choosed");
    $("#rpt_week").removeClass("font_choosed");
    $("#rpt_month").removeClass("font_choosed");
    $("#rpt_year").removeClass("font_choosed");

    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    if(month<10){
        month = "0" + month;
    }
    var day = date.getDate();
    if(day<10){
        day = "0" + day;
    }
    var today = year + "-" + month + "-" + day;

    switch(event.id){
        case "rpt_today":
            $("#rpt_today").addClass("font_choosed");
            rptTimeType = 1;
            break;
        case "rpt_week":
            $("#rpt_week").addClass("font_choosed");
            rptTimeType = 2;
            break;
        case "rpt_month":
            $("#rpt_month").addClass("font_choosed");
            rptTimeType = 3;
            break;
        case "rpt_year":
            $("#rpt_year").addClass("font_choosed");
            rptTimeType = 4;
            break;
    }
    $.ajax({
        type : "post",
        async : true,
        url : ip_path+"/changfa_system/reportRepair/countReportNum.do",
        data :{
            lineNum : $("#product option:selected").val(),
            reportType : $("#source option:selected").val(),
            times : today,
            timeType : rptTimeType
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                var time_x = new Array();
                var rpt_y = new Array();
                var dis_y = new Array();
                var rep_y = new Array();
                for(var i=0;i<data['body']['resultList'].length;i++){
                    time_x.push(data['body']['resultList'][i]['date']);
                    rpt_y.push(data['body']['resultList'][i]['reportNum']);
                    dis_y.push(data['body']['resultList'][i]['disNum']);
                    rep_y.push(data['body']['resultList'][i]['repairNum']);
                    table_rpt(time_x,rpt_y,dis_y,rep_y);
                }
            }else {
                alert(data['head']['message']);
            }
        }
    });
}

function updateDisTable(event) {
    $("#dis_today").removeClass("font_choosed");
    $("#dis_week").removeClass("font_choosed");
    $("#dis_month").removeClass("font_choosed");
    $("#dis_year").removeClass("font_choosed");

    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    if(month<10){
        month = "0" + month;
    }
    var day = date.getDate();
    if(day<10){
        day = "0" + day;
    }
    var today = year + "-" + month + "-" + day;

    switch(event.id){
        case "dis_today":
            $("#dis_today").addClass("font_choosed");
            disTimeType = 1;
            break;
        case "dis_week":
            $("#dis_week").addClass("font_choosed");
            disTimeType = 2;
            break;
        case "dis_month":
            $("#dis_month").addClass("font_choosed");
            disTimeType = 3;
            break;
        case "dis_year":
            $("#dis_year").addClass("font_choosed");
            disTimeType = 4;
            break;
    }
    $.ajax({
        type : "post",
        async : true,
        url : ip_path+"/changfa_system/dispatch/countDisNum.do",
        data :{
            time : today,
            timeType : disTimeType
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                var dis_x = new Array();
                var dis_y = new Array();
                for(var i=0;i<data['body']['resultList'].length;i++){
                    dis_x.push(data['body']['resultList'][i]['dispatchUserName']);
                    dis_y.push(data['body']['resultList'][i]['num']);
                    table_dispatchSort(dis_x,dis_y);
                }
            }else {
                table_dispatchSort(0,0);
            }
        }
    });
}

function updateRepTable(event) {
    $("#rep_today").removeClass("font_choosed");
    $("#rep_week").removeClass("font_choosed");
    $("#rep_month").removeClass("font_choosed");
    $("#rep_year").removeClass("font_choosed");

    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    if(month<10){
        month = "0" + month;
    }
    var day = date.getDate();
    if(day<10){
        day = "0" + day;
    }
    var today = year + "-" + month + "-" + day;

    switch(event.id){
        case "rep_today":
            $("#rep_today").addClass("font_choosed");
            repTimeType = 1;
            break;
        case "rep_week":
            $("#rep_week").addClass("font_choosed");
            repTimeType = 2;
            break;
        case "rep_month":
            $("#rep_month").addClass("font_choosed");
            repTimeType = 3;
            break;
        case "rep_year":
            $("#rep_year").addClass("font_choosed");
            repTimeType = 4;
            break;
    }
    $.ajax({
        type : "post",
        async : true,
        url : ip_path+"/changfa_system/repair/countRepairNum.do",
        data :{
            lineNum : $("#line option:selected").val(),
            time : today,
            timeType : repTimeType
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                var dis_x = new Array();
                var dis_y = new Array();
                for(var i=0;i<data['body']['resultList'].length;i++){
                    dis_x.push(data['body']['resultList'][i]['name']);
                    dis_y.push(data['body']['resultList'][i]['num']);
                    table_repairSort(dis_x,dis_y);
                }
            }else {
                table_repairSort(0,0);
            }
        }
    });
}

function updateSaleTable(event) {
    $("#sale_today").removeClass("font_choosed");
    $("#sale_week").removeClass("font_choosed");
    $("#sale_month").removeClass("font_choosed");
    $("#sale_year").removeClass("font_choosed");

    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    if(month<10){
        month = "0" + month;
    }
    var day = date.getDate();
    if(day<10){
        day = "0" + day;
    }
    var today = year + "-" + month + "-" + day;

    switch(event.id){
        case "sale_today":
            $("#sale_today").addClass("font_choosed");
            saleTimeType = 1;
            break;
        case "sale_week":
            $("#sale_week").addClass("font_choosed");
            saleTimeType = 2;
            break;
        case "sale_month":
            $("#sale_month").addClass("font_choosed");
            saleTimeType = 3;
            break;
        case "sale_year":
            $("#sale_year").addClass("font_choosed");
            saleTimeType = 4;
            break;
    }
    $.ajax({
        type : "post",
        async : true,
        url : ip_path+"/changfa_system/machineModel/countSaleNum.do",
        data :{
            time : today,
            timeType : saleTimeType
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                var dealer_x = new Array();
                var num_y = new Array();
                for(var i=0;i<data['body']['resultList'].length;i++){
                    dealer_x.push(data['body']['resultList'][i]['dealerName']);
                    num_y.push(data['body']['resultList'][i]['num']);
                    table_saleSort(dealer_x,num_y);
                }
            }else {
                table_saleSort(0,0);
            }
        }
    });
}

function updateSendTable(event) {
    $("#send_today").removeClass("font_choosed");
    $("#send_week").removeClass("font_choosed");
    $("#send_month").removeClass("font_choosed");
    $("#send_year").removeClass("font_choosed");

    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    if(month<10){
        month = "0" + month;
    }
    var day = date.getDate();
    if(day<10){
        day = "0" + day;
    }
    var today = year + "-" + month + "-" + day;

    switch(event.id){
        case "send_today":
            $("#send_today").addClass("font_choosed");
            sendTimeType = 1;
            break;
        case "send_week":
            $("#send_week").addClass("font_choosed");
            sendTimeType = 2;
            break;
        case "send_month":
            $("#send_month").addClass("font_choosed");
            sendTimeType = 3;
            break;
        case "send_year":
            $("#send_year").addClass("font_choosed");
            sendTimeType = 4;
            break;
    }
    $.ajax({
        type : "post",
        async : true,
        url : ip_path+"/changfa_system/machineModel/countShipAndSaleNum.do",
        data :{
            lineNum : $("#product option:selected").val(),
            time : today,
            timeType : sendTimeType
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                var time_x = new Array();
                var send_y = new Array();
                var sale_y = new Array();
                for(var i=0;i<data['body']['resultList'].length;i++){
                    time_x.push(data['body']['resultList'][i]['date']);
                    send_y.push(data['body']['resultList'][i]['shipNum']);
                    sale_y.push(data['body']['resultList'][i]['saleNum']);
                    table_send(time_x,send_y,sale_y);
                }
            }else {
                alert(data['head']['message']);
            }
        }
    });
}

//echarts X轴过长自动回行
function newline(option, number, axis){
    /* 此处注意你的json是数组还是对象 */
    option[axis][0]['axisLabel']={
        interval: 0,
        formatter: function(params){
            var newParamsName = "";
            var paramsNameNumber = params.length;
            var provideNumber = number;
            var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
            if (paramsNameNumber > provideNumber) {
                for (var p = 0; p < rowNumber; p++) {
                    var tempStr = "";
                    var start = p * provideNumber;
                    var end = start + provideNumber;
                    if (p == rowNumber - 1) {
                        tempStr = params.substring(start, paramsNameNumber);
                    } else {
                        tempStr = params.substring(start, end) + "\n";
                    }
                    newParamsName += tempStr;
                }
            } else {
                newParamsName = params;
            }
            return newParamsName
        }
    }
    return option;
}


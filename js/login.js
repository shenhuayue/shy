//按回车键登录
function keyLogin(){
    if (event.keyCode == 13)   //回车键的键值为13
        login();
}

function login() {
    if("" == $("#loginUser").val() || "" == $("#loginPwd").val()){
        $("#loginMsg").show();
        $("#loginMsgCont").text("用户名和密码不能为空");
    }else {
        var user = $("#loginUser").val();
        var pwd = $("#loginPwd").val();

        // $.ajax({
        //     type: "post",
        //     async: false,
        //     url: ip_path + "/changfa_system/account/queryAccountRole.do",
        //     data: {
        //         type : 1,
        //         account: user,
        //         password: pwd,
        //     },
        //     // cache : false,
        //     dataType: "json",
        //     success: function (data) {
        //         if (data['head']['code'] == 200) {
                    
        //             if(data['body']['resultList'].length == 1){
        //                 if (!Array.prototype.indexOf){
        //                     Array.prototype.indexOf = function(elt /*, from*/){
        //                         var len = this.length >>> 0;
        //                         var from = Number(arguments[1]) || 0;
        //                         from = (from < 0) ? Math.ceil(from) : Math.floor(from);
        //                         if (from < 0)
        //                             from += len;

        //                         for (; from < len; from++){
        //                             if (from in this && this[from] === elt)
        //                                 return from;
        //                         }
        //                         return -1;
        //                     };
        //                 }
                        // if(appRoleList.indexOf(data['body']['resultList'][0]['roleId']) == -1){
                            
                            // var ip = returnCitySN["cip"];
                            // var address = returnCitySN["cname"];
                            // $.ajax({
                            //     type : "post",
                            //     async : false,
                            //     url : ip_path+"/changfa_system/account/selectByAccOrMobile.do",
                            //     data : {
                            //         //roleId : data['body']['resultList'][0]['roleId'],
                            //         account : user,
                            //     },
                            //     dataType : "json",
                            //     success : function (data) {
                            //         if(data['head']['code'] == 200){
                            //             if(data.body.result.roleId && data.body.result.isParts == 0){

                            //                 $.ajax({
                            //                     type : "post",
                            //                     async : false,
                            //                     url : ip_path+"/changfa_system/role/selectById.do",
                            //                     data : {
                            //                         //roleId : data['body']['resultList'][0]['roleId'],
                            //                         roleId : data.body.result.roleId,
                            //                     },
                            //                     dataType : "json",
                            //                     success : function (data) {
                            //                         if(data['head']['code'] == 200){
                            //                             //if(data.body.result.loginType == 1){

                            //                                 $.ajax({
                            //                                     type : "post",
                            //                                     async : false,
                            //                                     url : ip_path+"/changfa_system/account/login.do",
                            //                                     data : {
                            //                                         //roleId : data['body']['resultList'][0]['roleId'],
                            //                                         account : user,
                            //                                         password : pwd,
                            //                                         model : 0,
                            //                                         // ipAddress : ip,
                            //                                         // address : address,
                            //                                         browserVersion : getBrowserVersion()
                            //                                     },
                            //                                     dataType : "json",
                            //                                     success : function (data) {
                            //                                         var head = data['head'];
                            //                                         var isSuccess = head['isSuccess'];
                            //                                         var msg = head['message'];
                            //                                         if(data['head']['code'] == 200){
                            //                                             document.getElementById("loginMsg").style.display = "none";
                            //                                             var token = data['body']['result']['token'];
                            //                                             var account = data['body']['result']['account'];
                            //                                             var roleId = data['body']['result']['roleId'];
                            //                                             // var mobile = data['body']['result']['userInfo']['mobile'];
                            //                                             var userId = data['body']['result']['userInfo']['userId'];
                        
                            //                                             token = base64encode(token);
                            //                                             account = base64encode(account);
                            //                                             roleId = base64encode(roleId.toString());
                            //                                             // mobile = base64encode(mobile);
                            //                                             userId = base64encode(userId);
                        
                            //                                             // console.log(data['body']['result']['roleId']);
                            //                                             // console.log(roleId);
                            //                                             // console.log(data['body']['result']['account']);
                            //                                             // console.log(account);
                            //                                             window.location.href = "index.html?token="+token+"&account="+account+"&roleId="+roleId+"&userId="+userId+"";
                                                                        
                            //                                         }else{
                            //                                             $("#loginMsg").show();
                            //                                             $("#loginMsgCont").text(msg);
                            //                                         }
                            //                                     }
                            //                                 });

                            //                             // }else{
                            //                             //     $("#loginMsg").show();
                            //                             //     $("#loginMsgCont").text("该角色没有登录web端的权限！");
                            //                             // }
                            //                         }else{
                            //                                     $("#loginMsg").show();
                            //                                     $("#loginMsgCont").text(data['head']['message']);
                            //                         }
                            //                     }
                                            
                            //                 })

                            //             }else if(data.body.result.roleId && data.body.result.isParts == 1){
                                                $("#roleSelect").fadeIn("1000");
                                                $("#roleNameList").empty();
                                                        $("#roleNameList").append(
                                                            '<input type="button" class="roleCommit_btn mg_l15 mg-r20"  value="营销管理系统" onclick="roleLoginWeb()">'+
                                                            '<input type="button" class="roleCommit_btn mg_l15 mg-r20"  value="配件系统" onclick="roleLoginPart()">'
                                                        );
                            //             }
                            //         }else{
                            //                     $("#loginMsg").show();
                            //                     $("#loginMsgCont").text(data['head']['message']);
                            //         }
                            //     }
                            
                            // })




                        //}
                        // else if(partRoleList.indexOf(data['body']['resultList'][0]['roleId']) != -1){
                        //     $.ajax({
                        //         type : "post",
                        //         async : false,
                        //         url : ip_path+"/changfa_system/account/login.do",
                        //         data : {
                        //             roleId : data['body']['resultList'][0]['roleId'],
                        //             account : user,
                        //             password : pwd,
                        //             model : 0,
                        //             // ipAddress : ip,
                        //             // address : address,
                        //             browserVersion : getBrowserVersion(),
                        //             tokenWeb:1
                        //         },
                        //         dataType : "json",
                        //         success : function (data) {
                        //             var head = data['head'];
                        //             var isSuccess = head['isSuccess'];
                        //             var msg = head['message'];
                        //             if(data['head']['code'] == 200){
                        //                 document.getElementById("loginMsg").style.display = "none";
                        //                 var token = data['body']['result']['token'];
                        //                 var account = data['body']['result']['account'];
                        //                 var roleId = data['body']['result']['roleId'];
                        //                 // var mobile = data['body']['result']['userInfo']['mobile'];
                        //                 var userId = data['body']['result']['userInfo']['userId'];

                        //                 token = base64encode(token);
                        //                 account = base64encode(account);
                        //                 roleId = base64encode(roleId.toString());
                        //                 // mobile = base64encode(mobile);
                        //                 userId = base64encode(userId);

                        //                 // console.log(data['body']['result']['roleId']);
                        //                 // console.log(roleId);
                        //                 // console.log(data['body']['result']['account']);
                        //                 // console.log(account);
                        //                 window.location.href = "http://test.app.changfanz.net:3590/dist/index.html#/cover?token="+token+"&account="+account+"&roleId="+roleId+"&userId="+userId+"";
                        //             }else{
                        //                 $("#loginMsg").show();
                        //                 $("#loginMsgCont").text(msg);
                        //             }
                        //         }
                        //     });
                        // }
                //         else{
                //             $("#loginMsg").show();
                //             $("#loginMsgCont").text("该角色没有登录web端的权限！");
                //         }
                //     }else{
                //         $("#roleSelect").fadeIn("1000");
                //         $("#roleNameList").empty();
                //         for(var i = 0;i<data['body']['resultList'].length;i++){
                //             if(appRoleList.indexOf(data['body']['resultList'][i]['roleId']) == -1){
                //                 $("#roleNameList").append(
                //                     '<input type="button" class="roleCommit_btn mg_l15 mg-r20" id="' + data['body']['resultList'][i]['roleId'] + '" value="' + data['body']['resultList'][i]['roleName'] + '" onclick="roleLogin(this)">'
                //                 );
                //             }
                //         }
                //     }
                // } else {
                //     $("#loginMsg").show();
                //     $("#loginMsgCont").text(data['head']['message']);
                // }
        //     }
        // });
    }
}

function roleLoginWeb(event) {
    // var ip = returnCitySN["cip"];
    // var address = returnCitySN["cname"];

    if("" == $("#loginUser").val() || "" == $("#loginPwd").val()){
        $("#loginMsg").show();
        $("#loginMsgCont").text("用户名和密码不能为空");
    }else{
         var user = $("#loginUser").val();
         var pwd = $("#loginPwd").val();
        // $.ajax({
        //     type : "post",
        //     async : false,
        //     url : ip_path+"/changfa_system/role/selectById.do",
        //     data : {
        //         //roleId : data['body']['resultList'][0]['roleId'],
        //         roleId : event.id,
        //     },
        //     dataType : "json",
        //     success : function (data) {
        //         if(data['head']['code'] == 200){
                    //if(data.body.result.loginType == 1){

                        $.ajax({
                            type : "post",
                            async : false,
                            url : ip_path+"/changfa_system/account/login.do",
                            data : {
                                //roleId : data['body']['resultList'][0]['roleId'],
                                account : user,
                                password : pwd,
                                model : 0,
                                // ipAddress : ip,
                                // address : address,
                                browserVersion : getBrowserVersion(),
                                type:'',
                                tokenDealer:1
                            },
                            dataType : "json",
                            success : function (data) {
                                var head = data['head'];
                                var isSuccess = head['isSuccess'];
                                var msg = head['message'];
                                if(data['head']['code'] == 200){
                                    document.getElementById("loginMsg").style.display = "none";
                                    var token = appRoleList.indexOf(data['body']['result']['roleId'].toString()) != -1?data['body']['result']['tokenDealer']:data['body']['result']['token'];
                                    var account = data['body']['result']['account'];
                                    var roleId = data['body']['result']['roleId'];
                                    // var mobile = data['body']['result']['userInfo']['mobile'];
                                    var userId = data['body']['result']['userInfo']['userId'];
                                    token = base64encode(token);
                                    account = base64encode(account);
                                    roleId = base64encode(roleId.toString());
                                    // mobile = base64encode(mobile);
                                    userId = base64encode(userId);

                                    // console.log(data['body']['result']['roleId']);
                                    // console.log(roleId);
                                    // console.log(data['body']['result']['account']);
                                    // console.log(account);
                                    window.location.href = "index.html?token="+token+"&account="+account+"&roleId="+roleId+"&userId="+userId+"";
                                    
                                }else{
                                    $("#roleSelect").hide();
                                    $("#loginMsg").show();
                                    $("#loginMsgCont").text(msg);
                                }
                            }
                        });

                    // }else{
                    //     $("#loginMsg").show();
                    //     $("#loginMsgCont").text("该角色没有登录web端的权限！");
                    // }
        //         }else{
        //                     $("#loginMsg").show();
        //                     $("#loginMsgCont").text(data['head']['message']);
        //         }
        //     }
        
        // })
    }
}

function roleLoginPart(event) {
    // var ip = returnCitySN["cip"];
    // var address = returnCitySN["cname"];

    if("" == $("#loginUser").val() || "" == $("#loginPwd").val()){
        $("#loginMsg").show();
        $("#loginMsgCont").text("用户名和密码不能为空");
    }else{
        var user = $("#loginUser").val();
         var pwd = $("#loginPwd").val();
        // $.ajax({
        //     type : "post",
        //     async : false,
        //     url : ip_path+"/changfa_system/role/selectById.do",
        //     data : {
        //         //roleId : data['body']['resultList'][0]['roleId'],
        //         roleId : event.id,
        //     },
        //     dataType : "json",
        //     success : function (data) {
        //         if(data['head']['code'] == 200){
                    //if(data.body.result.loginType == 1){

                        $.ajax({
                            type : "post",
                            async : false,
                            url : ip_path+"/changfa_system/account/login.do",
                            data : {
                                //roleId : event.id,
                                account : user,
                                password : pwd,
                                model : 0,
                                // ipAddress : ip,
                                // address : address,
                                tokenWeb:1,
                                browserVersion : getBrowserVersion(),
                                type:1
                            },
                            dataType : "json",
                            success : function (data) {
                                var head = data['head'];
                                var isSuccess = head['isSuccess'];
                                var msg = head['message'];
                                if(data['head']['code'] == 200){
                                    document.getElementById("loginMsg").style.display = "none";
                                    var token = data['body']['result']['tokenWeb'];
                                    var account = data['body']['result']['account'];
                                    var roleId = data['body']['result']['roleId'];
                                    // var mobile = data['body']['result']['userInfo']['mobile'];
                                    var userId = data['body']['result']['userInfo']['userId'];

                                    token = base64encode(token);
                                    account = base64encode(account);
                                    roleId = base64encode(roleId.toString());
                                    // mobile = base64encode(mobile);
                                    userId = base64encode(userId);

                                    // console.log(data['body']['result']['roleId']);
                                    // console.log(roleId);
                                    // console.log(data['body']['result']['account']);
                                    // console.log(account);
                                    window.location.href = "http://test.app.changfanz.net:3590/dist/index.html#/cover?token="+token+"&account="+account+"&roleId="+roleId+"&userId="+userId+"";
                                    
                                }else{
                                    $("#roleSelect").hide();
                                    $("#loginMsg").show();
                                    $("#loginMsgCont").text(msg);
                                }
                            }
                        });

                    // }else{
                    //     $("#loginMsg").show();
                    //     $("#loginMsgCont").text("该角色没有登录web端的权限！");
                    // }
        //         }else{
        //                     $("#loginMsg").show();
        //                     $("#loginMsgCont").text(data['head']['message']);
        //         }
        //     }
        
        // })
    }
}


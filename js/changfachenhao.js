function ajax_logibidding() {  

    $.ajax({
        type: "post",
        async: false,
        url: ip_path + "/changfa_system/logistics/getLogisticBiddingRateWeb.do",
        data: {
            dealerName : $("#dealerName").val(),
            startTime : $("#startTime").val(),
            endTime : $("#endTime").val(),
            pageNum : currentPage,
            pageSize : 14
        },
        dataType: "json",
        success: function (data) {
            console.log(data);
           
            if(data['head']['code'] == 200){
                currentPage = data['body']['result']['pageNum'];
                totalPage = data['body']['result']['pages'];
                totalData = data['body']['result']['total'];
                $("#adminTbody").empty();


                
                for(var i=0;i<data['body']['result']['data'].length;i++){
                 
                    $("#adminTbody").append(
                        "<tr id =" + data['body']['result']['data'][i]['logisticsId'] +">" +
                        '<td class="td2" height="33">' + data['body']['result']['data'][i]['company'] + '</td>' +
                        '<td class="td2">' + data['body']['result']['data'][i]['joinNum'] + '</td>' +
                        '<td class="td2">' + data['body']['result']['data'][i]['numberOfWinningBids'] + '</td>' +
                        '<td class="td2">' + data['body']['result']['data'][i]['biddingRate'] + '</td>' +  
                        '<td class="td2">' + data['body']['result']['data'][i]['joinProbability'] + '</td>' +    
                        '<td class="td2">' + data['body']['result']['data'][i]['money'] + '</td>' + 
                        '</tr>'
                    );
                }
                pageSplit();
                hideOrShow();
            }else{
                $("#adminTbody").empty();
                $("#adminTbody").append(
                    '<td class="td2 txt_center" height="50px" colspan="9">未查到相关信息</td>'
                );
                document.getElementById("barcon1").innerHTML = "";
            }
            
        }
    })
}


function createDealernew() {
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
                url : ip_path+"/changfa_system/account/checkOtherAccount.do",
                data : {
                    account : $("#createWorkNo").val(),
                    role : 8
                },
                dataType : "json",
                success : function (data) {
                    //console.log(data['body']['result']['ownOtherAccount'])
                   //console.log(data['body']['result']['ownOtherAccount']);
                    if(data['body']['result']['ownOtherAccount'] === 0){

                        $.ajax({
                            type : "post",
                            url : ip_path+"/changfa_system/account/createAccountService.do",
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
                                    window.open("cfServerManage.html","_self");
                                }else{
                                    alert(data['head']['message']);
                                }
                            }
                        });
                        
                    }
                    else(data['body']['result']['ownOtherAccount'] === 1)
                    {

                        if(window.confirm('是否使用已有账号密码')==true){
                           
                            $.ajax({
                                type : "post",
                                url : ip_path+"/changfa_system/account/createAccountService.do",
                                data : {
                                    account : $("#createMobile").val(),
                                    name : $("#createName").val(),
                                    roleId : 7,
                                    workNum : $("#createWorkNo").val(),
                                    token : $(window.parent.document).find("input[name='token']").val(),
                                    province : $("#tags_1").val(),
                                    city : "",
                                    lines : $("#tags_2").val(),
                                    company : $("#createCompany").val(),
                                    passwordType:0
                                },
                                dataType : "json",
                                success : function (data) {
                                
                                    if(data['head']['code'] == 200){
                                        window.open("cfServerManage.html","_self");
                                    }else{
                                        alert(data['head']['message']);
                                    }
                                }
                            });

                            
                         }else{
                            
                            $.ajax({
                                type : "post",
                                url : ip_path+"/changfa_system/account/createAccountService.do",
                                data : {
                                    account : $("#createMobile").val(),
                                    name : $("#createName").val(),
                                    roleId : 7,
                                    workNum : $("#createWorkNo").val(),
                                    token : $(window.parent.document).find("input[name='token']").val(),
                                    province : $("#tags_1").val(),
                                    city : "",
                                    lines : $("#tags_2").val(),
                                    company : $("#createCompany").val(),
                                    passwordType:1
                                },
                                dataType : "json",
                                success : function (data) {
                                
                                    if(data['head']['code'] == 200){
                                        window.open("cfServerManage.html","_self");
                                    }else{
                                        alert(data['head']['message']);
                                    }
                                }
                            });

                        
                        }
                    }

                }
            });
        }
    }
}


function createSocialServerNew() {
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
                url : ip_path+"/changfa_system/account/checkOtherAccount.do",
                data : {
                    account : $("#createWorkNo").val(),
                    role : 8
                },
                dataType : "json",
                success : function (data) {
                    
                    if(data['body']['result']['ownOtherAccount'] === 0){

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
                                remark : $("#remark").val()
                            },
                            dataType : "json",
                            success : function (data) {
                            
                                if(data['head']['code'] == 200){
                                    window.open("cfServerManage.html","_self");
                                }else{
                                    alert(data['head']['message']);
                                }
                            }
                        });
                        
                    }
                    else(data['body']['result']['ownOtherAccount'] === 1)
                    {

                        if(window.confirm('是否使用已有账号密码')==true){
                           
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
                                    passwordType:0
                                },
                                dataType : "json",
                                success : function (data) {
                                
                                    if(data['head']['code'] == 200){
                                        window.open("cfServerManage.html","_self");
                                    }else{
                                        alert(data['head']['message']);
                                    }
                                }
                            });

                            
                    
                         }else{
                            
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
                                    passwordType:1
                                },
                                dataType : "json",
                                success : function (data) {
                                
                                    if(data['head']['code'] == 200){
                                        window.open("cfServerManage.html","_self");
                                    }else{
                                        alert(data['head']['message']);
                                    }
                                }
                            });

                        
                        }
                    }

                }
            });




        }
    }
}




function addLogisticsCompanyNew() {  
    layer.open({
        id:1,
        type: 1,
        title:'添加物流公司',
        skin:'layui-layer-rim',
        offset:['300px','480px'],
        area:['450px', 'auto'],
        content: '<div class="row" style="width: 420px;  margin-left:7px; margin-top:10px;">'

                // +'<div class="mg_l20">'
                // +'<div>'
                // +'<span class="">企业编号:</span>'
                // +'<input id="dealerNum" type="text" class="layer_input mg_l10">'
                // +'</div>'
                // +'</div>'

                +'<div class="mg_l20" style="margin-top: 10px">'
                +'<div>'
                +'<span class="">企业名称:</span>'
                +'<input id="dealerName" type="text" class="layer_input mg_l10">'
                +'</div>'
                +'</div>'

                +'<div class="mg_l20" style="margin-top: 10px">'
                +'<div>'
                +'<span class="">联系人名:</span>'
                +'<input id="contactName" type="text" class="layer_input mg_l10">'
                +'</div>'
                +'</div>'

                +'<div class="mg_l20" style="margin-top: 10px">'
                +'<div>'
                +'<span class="">联系电话:</span>'
                +'<input id="contactMobile" type="text" class="layer_input mg_l10">'
                +'</div>'
                +'</div>'
                    
                +'</div>'
            ,
        btn:['添加','取消'],
        btn1: function (index,layero) {

            $.ajax({
                type : "post",
                url : ip_path+"/changfa_system/account/checkOtherAccount.do",
                data : {
                    account : $("#createWorkNo").val(),
                    role : 8
                },
                dataType : "json",
                success : function (data) {
                    //console.log(data['body']['result']['ownOtherAccount'])
                   //console.log(data['body']['result']['ownOtherAccount']);
                    if(data['body']['result']['ownOtherAccount'] === 0){

                        $.ajax({
                            type : "post",
                            url : ip_path+"/changfa_system/account/createLogisticsPerson.do",
                            data : {
                                mobile : $("#contactMobile").val(),
                                userName : $("#contactName").val(),
                                company : $("#dealerName").val(),
                                type : 1
                            },
                            dataType : "json",
                            success : function (data) {
                            
                                if(data['head']['code'] == 200){
                                    window.open("cfServerManage.html","_self");
                                }else{
                                    alert(data['head']['message']);
                                }
                            }
                        });
                        
                    }
                    else(data['body']['result']['ownOtherAccount'] === 1)
                    {

                        if(window.confirm('是否使用已有账号密码')==true){
                           
                            $.ajax({
                                type : "post",
                                url : ip_path+"/changfa_system/account/createLogisticsPerson.do",
                                data : {
                                    mobile : $("#contactMobile").val(),
                                    userName : $("#contactName").val(),
                                    company : $("#dealerName").val(),
                                    type : 1,
                                    passwordType:0
                                },
                                dataType : "json",
                                success : function (data) {
                                
                                    if(data['head']['code'] == 200){
                                        window.open("cfServerManage.html","_self");
                                    }else{
                                        alert(data['head']['message']);
                                    }
                                }
                            });

                            
                    
                         }else{
                            
                            $.ajax({
                                type : "post",
                                url : ip_path+"/changfa_system/account/createLogisticsPerson.do",
                                data : {
                                    mobile : $("#contactMobile").val(),
                                    userName : $("#contactName").val(),
                                    company : $("#dealerName").val(),
                                    type : 1,
                                    passwordType:1
                                },
                                dataType : "json",
                                success : function (data) {
                                
                                    if(data['head']['code'] == 200){
                                        window.open("cfServerManage.html","_self");
                                    }else{
                                        alert(data['head']['message']);
                                    }
                                }
                            });

                        
                        }
                    }

                }
            });



        },
        btn2:function (index,layero) {
            layer.close(index);
        }
    
    });
}


function addLogisticsPersonNew() {  
    layer.open({
        id:1,
        type: 1,
        title:'添加物流公司',
        skin:'layui-layer-rim',
        offset:['300px','480px'],
        area:['450px', 'auto'],
        content: '<div class="row" style="width: 420px;  margin-left:7px; margin-top:10px;">'

                // +'<div class="mg_l20">'
                // +'<div>'
                // +'<span class="">企业编号:</span>'
                // +'<input id="dealerNum" type="text" class="layer_input mg_l10">'
                // +'</div>'
                // +'</div>'

                // +'<div class="mg_l20" style="margin-top: 10px">'
                // +'<div>'
                // +'<span class="">企业名称:</span>'
                // +'<input id="dealerName" type="text" class="layer_input mg_l10">'
                // +'</div>'
                // +'</div>'

                +'<div class="mg_l20" style="margin-top: 10px">'
                +'<div>'
                +'<span class="">联系人名:</span>'
                +'<input id="contactName" type="text" class="layer_input mg_l10">'
                +'</div>'
                +'</div>'

                +'<div class="mg_l20" style="margin-top: 10px">'
                +'<div>'
                +'<span class="">联系电话:</span>'
                +'<input id="contactMobile" type="text" class="layer_input mg_l10">'
                +'</div>'
                +'</div>'
                    
                +'</div>'
            ,
        btn:['添加','取消'],
        btn1: function (index,layero) {

            $.ajax({
                type : "post",
                url : ip_path+"/changfa_system/account/checkOtherAccount.do",
                data : {
                    account : $("#createWorkNo").val(),
                    role : 8
                },
                dataType : "json",
                success : function (data) {
                    //console.log(data['body']['result']['ownOtherAccount'])
                   //console.log(data['body']['result']['ownOtherAccount']);
                    if(data['body']['result']['ownOtherAccount'] === 0){

                        $.ajax({
                            type : "post",
                            url : ip_path+"/changfa_system/account/createLogisticsPerson.do",
                            data : {
                                mobile : $("#contactMobile").val(),
                                userName : $("#contactName").val(),
                                dealerId : $(window.parent.parent.document).find("input[name='logisticsCompanyId']").val(),
                                type : 2
                            },
                            dataType : "json",
                            success : function (data) {
                            
                                if(data['head']['code'] == 200){
                                    window.open("cfServerManage.html","_self");
                                }else{
                                    alert(data['head']['message']);
                                }
                            }
                        });
                        
                    }
                    else(data['body']['result']['ownOtherAccount'] === 1)
                    {

                        if(window.confirm('是否使用已有账号密码')==true){
                           
                            $.ajax({
                                type : "post",
                                url : ip_path+"/changfa_system/account/createLogisticsPerson.do",
                                data : {
                                    mobile : $("#contactMobile").val(),
                                    userName : $("#contactName").val(),
                                    dealerId : $(window.parent.parent.document).find("input[name='logisticsCompanyId']").val(),
                                    type : 2,
                                    passwordType:0
                                },
                                dataType : "json",
                                success : function (data) {
                                
                                    if(data['head']['code'] == 200){
                                        window.open("cfServerManage.html","_self");
                                    }else{
                                        alert(data['head']['message']);
                                    }
                                }
                            });

                            
                    
                         }else{
                            
                            $.ajax({
                                type : "post",
                                url : ip_path+"/changfa_system/account/createLogisticsPerson.do",
                                data : {
                                    mobile : $("#contactMobile").val(),
                                    userName : $("#contactName").val(),
                                    dealerId : $(window.parent.parent.document).find("input[name='logisticsCompanyId']").val(),
                                    type : 2,
                                    passwordType:1
                                },
                                dataType : "json",
                                success : function (data) {
                                
                                    if(data['head']['code'] == 200){
                                        window.open("cfServerManage.html","_self");
                                    }else{
                                        alert(data['head']['message']);
                                    }
                                }
                            });

                        
                        }
                    }

                }
            });



        },
        btn2:function (index,layero) {
            layer.close(index);
        }
    
    });
}


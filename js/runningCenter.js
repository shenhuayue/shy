function addIntegralRule() {
    $("#addIntegralRule").show();
}

function closeAddRule() {
    $("#createRuleName").val("");
    $("#createIntegral").val("");
    $("#createRemark").val("");
    $("#addIntegralRule").hide();
}

function createIntegralRule() {
    $.ajax({
        type : "post",
        url : ip_path+"/changfa_system/score/insertScoreRule.do",
        data : {
            token : $(window.parent.document).find("input[name='token']").val(),
            name : $("#createRuleName").val(),
            score : $("#createIntegral").val(),
            remark : $("#createRemark").val()
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

function editIntegralRule(event) {
    $("#editIntegralRule").show();
    $("#ruleId").val(event.parentNode.parentNode.id);
    $("#editRuleName").val(event.parentNode.parentNode.childNodes[0].innerHTML);
    $("#editIntegral").val(event.parentNode.parentNode.childNodes[1].innerHTML);
    $("#editRemark").val(event.parentNode.parentNode.childNodes[5].innerHTML);
}

function closeEditRule(event) {
    $("#editRuleName").val("");
    $("#editIntegral").val("");
    $("#editIntegralRule").hide();
}

function updateIntegralRule() {
    var reg_score = /^[0-9a-zA-Z]+$/;
    if(!reg_score.test($("#editIntegral").val())){
        alert("积分只能是数字！");
    }else{
        $.ajax({
            type : "post",
            url : ip_path+"/changfa_system/score/updateScoreRule.do",
            data : {
                id : $("#ruleId").val(),
                name : $("#editRuleName").val(),
                score : $("#editIntegral").val(),
                remark : $("#editRemark").val()
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

function createExperienceRule() {
    $.ajax({
        type : "post",
        url : ip_path+"/changfa_system/experience/addExperienceRule.do",
        data : {
            token : $(window.parent.document).find("input[name='token']").val(),
            name : $("#createRuleName").val(),
            experience : $("#createIntegral").val(),
            remark : $("#createRemark").val()
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

function updateExperienceRule() {
    var reg_score = /^[0-9a-zA-Z]+$/;
    if(!reg_score.test($("#editIntegral").val())){
        alert("积分只能是数字！");
    }else{
        $.ajax({
            type : "post",
            url : ip_path+"/changfa_system/experience/updateExperienceRule.do",
            data : {
                id : $("#ruleId").val(),
                name : $("#editRuleName").val(),
                experience : $("#editIntegral").val(),
                remark : $("#editRemark").val()
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

function toogle_experienceRuleStatus(event) {
    var status;

    if(event.src == "http://app.changfanz.net:3588/changfa_file/on.png"){
        status = 0;
    }else {
        status = 1;
    }
    $.ajax({
        type : "post",
        url : ip_path+"/changfa_system/experience/updateExperienceRule.do",
        data : {
            id : event.parentNode.parentNode.id,
            name : event.parentNode.parentNode.childNodes[0].innerHTML,
            experience : event.parentNode.parentNode.childNodes[1].innerHTML,
            remark : event.parentNode.parentNode.childNodes[5].innerHTML,
            status : status
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                event.src == "http://app.changfanz.net:3588/changfa_file/off.png" ? event.src = "http://app.changfanz.net:3588/changfa_file/on.png" : event.src = "http://app.changfanz.net:3588/changfa_file/off.png";
            }else{
                alert(data['head']['message'])
            }
        }
    });
}

function deleteIntegralRule() {
    $.ajax({
        type : "post",
        url : ip_path+"/changfa_system/serviceInfo/addCost.do",
        data : {
            workPrice : $("#createRuleName").val(),
            userId : $("#createIntegral").val()
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

function toogle_ruleStatus(event) {
    var status;

    if(event.src == "http://app.changfanz.net:3588/changfa_file/on.png"){
        status = 0;
    }else {
        status = 1;
    }
    $.ajax({
        type : "post",
        url : ip_path+"/changfa_system/score/updateScoreRule.do",
        data : {
            id : event.parentNode.parentNode.id,
            name : event.parentNode.parentNode.childNodes[0].innerHTML,
            score : event.parentNode.parentNode.childNodes[1].innerHTML,
            remark : event.parentNode.parentNode.childNodes[5].innerHTML,
            status : status
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                event.src == "http://app.changfanz.net:3588/changfa_file/off.png" ? event.src = "http://app.changfanz.net:3588/changfa_file/on.png" : event.src = "http://app.changfanz.net:3588/changfa_file/off.png";
            }else{
                alert(data['head']['message'])
            }
        }
    });
}

function queryTopic() {
    currentPage = 1;
    ajax_topicM();
}

function queryPost() {
    currentPage = 1;
    ajax_postM();
}

function addTopic() {
    $("#addTopic").show();
    $("#name").val("");
    $("#headImg").attr("src","img/topicBackground.png");
}

function closeAddTopic() {

    $("#addTopic").hide();
}

function createTopic() {
    $.ajax({
        type : "post",
        url : ip_path+"/changfa_system/topic/insertTopic.do",
        data : {
            name : $("#name").val(),
            des : $("#des").val(),
            filePath : filePath,
            token : $(window.parent.document).find("input[name='token']").val()
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] != 200){
                alert(data['head']['message']);
            }else{
                filePath = "";
                window.open("topicManage.html","_self");
            }
        }
    });
}


function showTopicDetails(event) {
    $(window.parent.document).find("input[name='topicId']").val(event.parentNode.parentNode.id);
    window.open("topicDetails.html","_self");
}

function upload() {
    $("#file").click();
}

function upload_t() {
    $("#file_t").click();
}

function upload_c() {
    $("#file_c").click();
}

function edit_upload_t() {
    $("#edit_file_t").click();
}

function edit_upload_c() {
    $("#edit_file_c").click();
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

function sortTopic() {
    currentPage = 1;
    ajax_topicSendDetails();
}

function showPostDetail(event) {
    $(window.parent.document).find("input[name='postId']").val(event.id);
    window.open("postDetails.html","_self");
}

function toogle_TopicStatus(event) {
    var status;
    if(event.src == "http://app.changfanz.net:3588/changfa_file/on.png"){
        status = -1;
    }else {
        status = 1;
    }
    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/topic/updateTopic.do",
        data : {
            id : event.parentNode.parentNode.id,
            status : status
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                event.src == "http://app.changfanz.net:3588/changfa_file/off.png" ? event.src = "http://app.changfanz.net:3588/changfa_file/on.png" : event.src = "http://app.changfanz.net:3588/changfa_file/off.png";
            }else{
                alert(data['head']['message'])
            }
        }
    });
}

function toogle_TopicTopStatus(event) {
    var status;
    if(event.src == "http://app.changfanz.net:3588/changfa_file/star_full.png"){
        status = -1;
    }else {
        status = 1;
    }
    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/topic/updateTopicIsTop.do",
        data : {
            id : event.parentNode.parentNode.id,
            isTop : status
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                event.src == "http://app.changfanz.net:3588/changfa_file/star_empty.png" ? event.src = "http://app.changfanz.net:3588/changfa_file/star_full.png" : event.src = "http://app.changfanz.net:3588/changfa_file/star_empty.png";
            }else{
                alert(data['head']['message'])
            }
        }
    });
}

function toogleSupport(event) {
    var isEssence;
    if(event.src == "http://app.changfanz.net:3588/changfa_file/star_full.png"){
        isEssence = 0;
    }else {
        isEssence = 1;
    }
    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/post/updatePost.do",
        data : {
            id : $(window.parent.document).find("input[name='postId']").val(),
            token : $(window.parent.document).find("input[name='token']").val(),
            isEssence : isEssence
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                event.src == "http://app.changfanz.net:3588/changfa_file/star_empty.png" ? event.src = "http://app.changfanz.net:3588/changfa_file/star_full.png" : event.src = "http://app.changfanz.net:3588/changfa_file/star_empty.png";
            }else{
                alert(data['head']['message']);
            }
        }
    });
}

function toogleViewStatus(event) {
    var viewRank;
    if(event.src == "http://app.changfanz.net:3588/changfa_file/on.png"){
        viewRank = 0;
    }else {
        viewRank = 1;
    }
    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/post/updatePost.do",
        data : {
            id : $(window.parent.document).find("input[name='postId']").val(),
            token : $(window.parent.document).find("input[name='token']").val(),
            viewRank : viewRank
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

function toogleReplyStatus(event) {
    var canReply;
    if(event.src == "http://app.changfanz.net:3588/changfa_file/on.png"){
        canReply = 0;
    }else {
        canReply = 1;
    }
    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/post/updatePost.do",
        data : {
            id : $(window.parent.document).find("input[name='postId']").val(),
            token : $(window.parent.document).find("input[name='token']").val(),
            canReply : canReply
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

function changeReplyStatus(event) {
    var status;
    if(event.src == "http://app.changfanz.net:3588/changfa_file/viewCannot.png"){
        status = 1;
    }else {
        status = -1;
    }
    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/post/updateReplyStatus.do",
        data : {
            replyId : event.previousSibling.id,
            status : status
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                event.src == "http://app.changfanz.net:3588/changfa_file/viewCannot.png" ? event.src = "http://app.changfanz.net:3588/changfa_file/viewCan.png" : event.src = "http://app.changfanz.net:3588/changfa_file/viewCannot.png";
            }else{
                alert(data['head']['message']);
            }
        }
    });
}

function sortReply() {
    $.ajax({
        type : "post",
        async : false,
        url : ip_path+"/changfa_system/post/selectReplyByPost.do",
        data : {
            postId  : $(window.parent.document).find("input[name='postId']").val(),
            pageNum : currentPage,
            pageSize : 7,
            sort : 1
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                currentPage = data['body']['result']['pageNum'];
                totalPage = data['body']['result']['pages'];
                totalData = data['body']['result']['total'];
                $("#userCommentList").empty();
                for(var i=0;i<data['body']['result']['data'].length;i++){
                    $("#userCommentList").append(
                        '<tr>' +
                        '<td class="body_td" height="auto">' +
                        '<div class="mg_l60 mg-t30">' +
                        '<table>' +
                        '<tr>' +
                        '<td><img src="' + data['body']['result']['data'][i]['headPath'] + '" style="width: 50px;height: 50px;"></td>' +
                        '<td><span class="mg_l10 mg-r50">' + data['body']['result']['data'][i]['replyUserName'] + '</span></td>' +
                        '<td><span>' + data['body']['result']['data'][i]['createTime'] + '</span></td>' +
                        '</tr>' +
                        '</table>' +
                        '<span class="flt_r mg-r30">' + data['body']['result']['data'][i]['goodNum'] + '</span>' +
                        '<img src="img/like.png" class="flt_r">' +
                        '</div>' +
                        '<div class="mg_l120" style="width: 90%;">' +
                        '<span style="word-break: break-all;">' + data['body']['result']['data'][i]['content'] + '</span>' +
                        '</div>' +
                        '<div class="mg_l120 mg-t30 mg_b20">' +
                        '<a href="###" class="mg-r50" onclick="replyToReply()">' + data['body']['result']['data'][i]['replyNum'] + '条回复</a>' +
                        '</div>' +
                        '</td>' +
                        '</tr>'
                    );
                }
                pageSplit();
                hideOrShow();
            }else{
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

function replyToReply(event) {
    $(window.parent.document).find("input[name='replyId']").val(event.id);
    window.open("replyToReply.html","_self");
}


function showPostDetails(event) {
    $(window.parent.document).find("input[name='postId']").val(event.parentNode.parentNode.id);
    window.open("postDetails.html","_self");
}

function chooseType() {
    if($("#type1").is(":checked")){
        $("#forSelect").show();
    }else if($("#type2").is(":checked")){
        $("#forSelect").hide();
        $("#question").val("");
        $("#answer_A").val("");
        $("#answer_B").val("");
        $("#answer_C").val("");
        $("#answer_D").val("");
    }
    // else if($("#type3").is(":checked")){
    //     $("#forSelect").hide();
    //     $("#question").val("");
    //     $("#answer_A").val("");
    //     $("#answer_B").val("");
    //     $("#answer_C").val("");
    //     $("#answer_D").val("");
    // }
}

function queryQuestion() {
    currentPage = 1;
    ajax_questionBankM();
}

function addQuestion() {
    $("#addQuestion").show();
    $("#type1").attr("checked",true);
    $("#single").attr("checked",true);
    $("#question").val("");
    $("#answer_A").val("");
    $("#answer_B").val("");
    $("#answer_C").val("");
    $("#answer_D").val("");
}

function closeAddQuestion() {
    $("#addQuestion").hide();
}

function createQuestion() {
    // console.log($(window.document).find("input[name='questionType']:checked")[0]['value']);
    if($("#type1").is(":checked")){
        $.ajax({
            type : "post",
            url : ip_path + "/changfa_system/question/createQuestion.do",
            data : {
                token : $(window.parent.document).find("input[name='token']").val(),
                subject : $("#question").val(),
                type : $(window.document).find("input[name='questionType']:checked")[0]['value'],
                chooseType : $(window.document).find("input[name='chooseType']:checked")[0]['value'],
                answerA : $("#answer_A").val(),
                answerB : $("#answer_B").val(),
                answerC : $("#answer_C").val(),
                answerD : $("#answer_D").val()
            },
            dataType : "json",
            success : function (data) {
                if(data['head']['code'] == 200){
                    window.location.reload();
                }else{
                    alert(data['head']['message'])
                }
            }
        });
    }else{
        $.ajax({
            type : "post",
            url : ip_path + "/changfa_system/question/createQuestion.do",
            data : {
                token : $(window.parent.document).find("input[name='token']").val(),
                subject : $("#question").val(),
                type : $(window.document).find("input[name='questionType']:checked")[0]['value'],
                chooseType : 2
            },
            dataType : "json",
            success : function (data) {
                if(data['head']['code'] == 200){
                    window.location.reload();
                }else{
                    alert(data['head']['message'])
                }
            }
        });
    }

}

function editQuestion(event) {
    $(window.parent.document).find("input[name='questionId']").val(event.parentNode.parentNode.id);
    $("#editQuestion").show();
    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/question/selectById.do",
        data : {
            qid : $(window.parent.document).find("input[name='questionId']").val()
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                if(data['body']['result']['type'] == 1){
                    $("#edit_type1").attr("checked",true);
                    $("#edit_forSelect").show();
                    if(data['body']['result']['chooseType'] == 0){
                        $("#edit_single").attr("checked",true);
                    }else{
                        $("#edit_multiple").attr("checked",true);
                    }
                    $("#edit_question").val(data['body']['result']['subject']);
                    $("#edit_answer_A").val(data['body']['result']['answerA']);
                    $("#edit_answer_B").val(data['body']['result']['answerB']);
                    $("#edit_answer_C").val(data['body']['result']['answerC']);
                    $("#edit_answer_D").val(data['body']['result']['answerD']);
                }else{
                    $("#edit_type2").attr("checked",true);
                    $("#edit_forSelect").hide();
                    $("#edit_question").val(data['body']['result']['subject']);
                }
            }else{
                alert(data['head']['message'])
            }
        }
    });
}

function closeEditQuestion() {
    $("#editQuestion").hide();
}

function updateQuestion() {
    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/question/updateQuestion.do",
        data : {
            qid : $(window.parent.document).find("input[name='questionId']").val(),
            subject : $("#edit_question").val(),
            answerA : $("#edit_answer_A").val(),
            answerB : $("#edit_answer_B").val(),
            answerC : $("#edit_answer_C").val(),
            answerD : $("#edit_answer_D").val()
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                window.location.reload();
            }
        }
    });
}

function queryQuestionNaire() {
    currentPage = 1;
    ajax_questionNaireM();
}

function addQuestionNaire() {
    window.open("addQuestionNaire.html","_self");
}

function queryQuestion_forNaire() {
    currentPage = 1;
    ajax_questionBank_forNaire();
}

function addToNaire(event) {
    if(qidList.length<10){
        $("#testList").append(event.parentNode.parentNode.parentNode);
        qidList.push(event.parentNode.id);
        $("#testList").find("img[class='addQuestion']").hide();
        $("#testList").find("img[class='removeQuestion']").show();
        currentPage = 1;
        ajax_questionBank_forNaire();
        if(qidList.length >5){
            $("#testList").addClass("testDivScroll");
        }
    }else{
        alert("一张问卷调查最多可以添加10道题！");
    }
}

function removeFromNaire(event) {
    event.parentNode.parentNode.parentNode.remove();
    var index;
    for(var item in qidList){
        if(qidList[item] == event.parentNode.id){
            index = item;
            qidList.splice(index,1);
        }
    }
    currentPage = 1;
    ajax_questionBank_forNaire();
}

function createQuestionNaire() {
    console.log(qidList);
    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/test/createTest.do",
        data : {
            title : $("#title").val(),
            qids : qidList.toString(),
            token : $(window.parent.document).find("input[name='token']").val()
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                window.open("questionNaireManage.html","_self");
            }else{
                alert(data['head']['message'])
            }
        }
    });
}

function updateQuestionNaire() {
    
}

function editQuestionNaire(event) {
    $(window.parent.document).find("input[name='questionNaireId']").val(event.parentNode.parentNode.id);
    window.open("addQuestionNaire.html","_self");
}

function naireAnswerCount(event) {
    $(window.parent.document).find("input[name='questionNaireId']").val(event.parentNode.parentNode.id);
    window.open("naireAnswerCount.html","_self");
}

function showAnswerDetails(event) {
    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/answer/selectCountByTestAndQid.do",
        data : {
            testId : $(window.parent.document).find("input[name='questionNaireId']").val(),
            qId : event.id
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                $("#answerContList").empty();
                for(var i=0;i<data['body']['result']['answerInfo'].length;i++){
                    $("#subject").text(data['body']['result']['question']['subject']);
                    if(data['body']['result']['answerInfo'][i]['type'] == 1){
                        $("#answerContList").append(
                            '<div style="height: 100px;">' +
                            '    <div class="flt_l mg_l30" style="width: 30%;border: 1px solid #999999;border-radius: 10px;">' +
                            '         <div class="flt_l mg_l10">' +
                            '               <img src="' + data['body']['result']['answerInfo'][i]['headPath'] + '" style="width: 60px;height: 60px;border-radius: 50%;margin-top: 10px;">' +
                            '         </div>' +
                            '         <div class="flt_l mg_l10" style="width: 60%;word-break: break-all">' +
                            '               <span class="describ">' + data['body']['result']['answerInfo'][i]['pName'] + '</span><br>' +
                            '               <span class="describ">' + data['body']['result']['answerInfo'][i]['mobile'] + '</span><br>' +
                            '               <span class="describ">' + data['body']['result']['answerInfo'][i]['address'] + '</span>' +
                            '         </div>' +
                            '    </div>' +
                            '    <div class="flt_l mg_l10" style="width: 50%;border: 1px solid #999999;border-radius: 10px;">' +
                            '          <div class="describ" style="height: 65px;padding-top: 10px;padding-left: 10px;word-break: break-all">' + data['body']['result']['answerInfo'][i]['answer'] + '</div>' +
                            '    </div>' +
                            '</div>'
                        );
                    }else if(data['body']['result']['answerInfo'][i]['type'] == 0){
                        $("#answerContList").append(
                            '<div style="height: 100px;">' +
                            '    <div class="flt_l mg_l30" style="width: 30%;border: 1px solid #999999;border-radius: 10px;">' +
                            '         <div class="flt_l mg_l10">' +
                            '               <img src="' + data['body']['result']['answerInfo'][i]['headPath'] + '" style="width: 60px;height: 60px;border-radius: 50%;margin-top: 10px;">' +
                            '         </div>' +
                            '         <div class="flt_l mg_l10" style="width: 60%;word-break: break-all">' +
                            '               <span class="describ">' + data['body']['result']['answerInfo'][i]['pName'] + '</span><br>' +
                            '               <span class="describ">' + data['body']['result']['answerInfo'][i]['mobile'] + '</span><br>' +
                            '               <span class="describ">' + data['body']['result']['answerInfo'][i]['address'] + '</span>' +
                            '         </div>' +
                            '    </div>' +
                            '    <div class="flt_l mg_l10" style="width: 50%;border: 1px solid #999999;border-radius: 10px;">' +
                            '          <div class="describ" style="height: 65px;padding-top: 10px;padding-left: 10px;word-break: break-all">' + data['body']['result']['answerInfo'][i]['answer'] + '</div>' +
                            '    </div>' +
                            '</div>'
                        );
                    }
                }
            }else{
                alert(data['head']['message'])
            }
        }
    });
}

function addActivity() {
    $("#addActivity").show();
    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/test/selectTest.do",
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                $("#test").empty();
                $("#test").append("<option value=''>请选择问卷</option>");
                for(var i=0;i<data['body']['resultList']['length'];i++){
                    $("#test").append("<option value='"+ data['body']['resultList'][i]['tid'] +"'>"+data['body']['resultList'][i]['title']+"</option>");
                }
                $("#test").unbind();
            }else{
                $("#test").empty();
                $("#test").append("<option value=''>请选择问卷</option>");
            }
        }
    });
}

function closeAddActivity() {
    $("#addActivity").hide();
}

function createActivity() {
    if($("#title").val() == ""){
        alert("请输入活动标题！");
    }else if($("#content").val() == ""){
        alert("请输入活动正文内容！");
    }else if($("#address").val() == ""){
        alert("请输入活动地址！");
    }else if(filePath_t == ""){
        alert("请上传标题图片！");
    }else if(filePath_c == ""){
        alert("请上传正文图片！");
    }else if($("#date_signUp_start").val() == "" || $("#date_signUp_end").val() == ""){
        alert("请输入活动报名起止时间！");
    }else if($("#date_participate_start").val() == "" || $("#date_participate_end").val() == ""){
        alert("请输入活动起止时间！");
    }else{
        $.ajax({
            type : "post",
            url : ip_path + "/changfa_system/activity/createActivity.do",
            data : {
                title : $("#title").val(),
                content : $("#content").val(),
                address : $("#address").val(),
                startTime : $("#date_participate_start").val(),
                endTime : $("#date_participate_end").val(),
                signStartTime : $("#date_signUp_start").val(),
                signEndTime : $("#date_signUp_end").val(),
                tImage : filePath_t,
                cImage : filePath_c,
                testId : $("#test option:selected").val()
            },
            dataType : "json",
            success : function (data) {
                if(data['head']['code'] == 200){
                    window.open("evtManage.html","_self");
                }else{
                    alert(data['head']['message'])
                }
            }
        });
    }
}

function editActivity(event) {
    $(window.parent.document).find("input[name='activityId']").val(event.parentNode.parentNode.id);
    $("#editActivity").show();
    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/test/selectTest.do",
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                for(var i=0;i<data['body']['resultList']['length'];i++){
                    $("#edit_test").append("<option value='"+ data['body']['resultList'][i]['tid'] +"'>"+data['body']['resultList'][i]['title']+"</option>");
                }
                $("#edit_test").unbind();
            }else{
                alert(data['head']['message'])
            }
        }
    });
    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/activity/selectById.do",
        data : {
            activityId : event.parentNode.parentNode.id
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                $("#edit_title").val(data['body']['result']['title']);
                $("#edit_tImg").attr("src",data['body']['result']['tImage']);
                $("#edit_content").val(data['body']['result']['content']);
                $("#edit_cImg").attr("src",data['body']['result']['cImage'][0]);
                $("#edit_date_signUp_start").val(data['body']['result']['signStartTime']);
                $("#edit_date_signUp_end").val(data['body']['result']['signEndTime']);
                $("#edit_date_participate_start").val(data['body']['result']['startTime']);
                $("#edit_date_participate_end").val(data['body']['result']['endTime']);
                $("#edit_address").val(data['body']['result']['address']);
                $("#edit_test").val(data['body']['result']['testId']);
                filePath_t = data['body']['result']['tImage'];
                filePath_c = data['body']['result']['cImageId'];
            }else{
                alert(data['head']['message'])
            }
        }
    });
}

function closeEditActivity() {
    $("#editActivity").hide();
}

function updateActivity() {
    if($("#edit_title").val() == ""){
        alert("请输入活动标题！");
    }else if($("#edit_content").val() == ""){
        alert("请输入活动正文内容！");
    }else if($("#edit_address").val() == ""){
        alert("请输入活动地址！");
    }else if(filePath_t == ""){
        alert("请上传标题图片！");
    }else if(filePath_c == ""){
        alert("请上传正文图片！");
    }else if($("#edit_date_signUp_start").val() == "" || $("#edit_date_signUp_end").val() == ""){
        alert("请输入活动报名起止时间！");
    }else if($("#edit_date_participate_start").val() == "" || $("#edit_date_participate_end").val() == ""){
        alert("请输入活动起止时间！");
    }else{
        $.ajax({
            type : "post",
            url : ip_path + "/changfa_system/activity/update.do",
            data : {
                id : $(window.parent.document).find("input[name='activityId']").val(),
                title : $("#edit_title").val(),
                content : $("#edit_content").val(),
                address : $("#edit_address").val(),
                startTime : $("#edit_date_participate_start").val(),
                endTime : $("#edit_date_participate_end").val(),
                signStartTime : $("#edit_date_signUp_start").val(),
                signEndTime : $("#edit_date_signUp_end").val(),
                testId : $("#test option:selected").val(),
                tImage : filePath_t,
                cImage : filePath_c
            },
            dataType : "json",
            success : function (data) {
                if(data['head']['code'] == 200){
                    window.open("evtManage.html","_self");
                }else{
                    alert(data['head']['message'])
                }
            }
        });
    }
}

function showActivityDetails(event) {
    $(window.parent.document).find("input[name='activityId']").val(event.parentNode.parentNode.id);
    window.open("activityDetail.html","_self");
}

function showSignPeople() {
    $("#signPeople").show();
    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/activity/querySignPersonInfo.do",
        data : {
            aId : $(window.parent.document).find("input[name='activityId']").val(),
            pageNum : 1,
            pageSize : 100000
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                $("#signPeopleList").empty();
                for(var i=0;i<data['body']['result']['data'].length;i++){
                    $("#signPeopleList").append(
                        '<div class="flt_l mg_l30 mg-t10 mg_b10" style="width: 40%;border: 1px solid #999999;border-radius: 10px;">' +
                        '     <div class="flt_l mg_l10">' +
                        '          <img src="' + data['body']['result']['data'][i]['headPath'] + '" style="width: 60px;height: 60px;border-radius: 50%;margin-top: 5px;">' +
                        '     </div>' +
                        '     <div class="flt_l mg_l10" style="width: 60%;word-break: break-all">' +
                        '          <span class="describ mg-t10">' + data['body']['result']['data'][i]['pName'] + '</span><br>' +
                        '          <span class="describ">' + data['body']['result']['data'][i]['mobile'] + '</span><br>' +
                        '          <span class="describ">' + data['body']['result']['data'][i]['address'] + '</span>' +
                        '     </div>' +
                        '</div>'
                    );
                }
            }else{
                $("#signPeople").hide();
                alert("该活动暂无用户报名！");
            }
        }
    });
}

function closeSignPeople() {
    $("#signPeopleList").empty();
    $("#signPeople").hide();
}

function showParticipatePeople() {
    $("#signPeople").show();
    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/activity/queryJoinPersonInfo.do",
        data : {
            aId : $(window.parent.document).find("input[name='activityId']").val()
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                $("#signPeopleList").empty();
                for(var i=0;i<data['body']['resultList'].length;i++){
                    $("#signPeopleList").append(
                        '<div class="flt_l mg_l30 mg-t10 mg_b10" style="width: 40%;border: 1px solid #999999;border-radius: 10px;">' +
                        '     <div class="flt_l mg_l10">' +
                        '          <img src="' + data['body']['resultList'][i]['headPath'] + '" style="width: 60px;height: 60px;border-radius: 50%;margin-top: 5px;">' +
                        '     </div>' +
                        '     <div class="flt_l mg_l10" style="width: 60%;word-break: break-all">' +
                        '          <span class="describ mg-t10">' + data['body']['resultList'][i]['pName'] + '</span><br>' +
                        '          <span class="describ">' + data['body']['resultList'][i]['mobile'] + '</span><br>' +
                        '          <span class="describ">' + data['body']['resultList'][i]['address'] + '</span>' +
                        '     </div>' +
                        '</div>'
                    );
                }
            }else{
                $("#signPeople").hide();
                alert("该活动暂无用户参加！");
            }
        }
    });
}

function addInformation() {
    $("#addInformation").show();
}

function closeAddInformation() {
    $("#addInformation").hide();
}

function createInformation() {
    var tImage = filePath_t;
    if($("#describe").val().length >120){
        alert("资讯概述不能超过120字！");
    }else if($("#title").val() == ""){
        alert("请输入资讯标题！");
    }else if($("#url").val() == ""){
        alert("请输入资讯链接！");
    }else if(filePath_t = ""){
        alert("请上传标题图片！");
    }else{
        $.ajax({
            type : "post",
            url : ip_path + "/changfa_system/consults/createConsults.do",
            data : {
                title : $("#title").val(),
                tImage : tImage,
                des : $("#describe").val(),
                url : $("#url").val(),
            },
            dataType : "json",
            success : function (data) {
                if(data['head']['code'] == 200){
                    window.open("informationManage.html","_self");
                }else{
                    alert(data['head']['message'])
                }
            }
        });
    }
}

function toogle_informationStatus(event) {
    var status;
    if(event.src == "http://app.changfanz.net:3588/changfa_file/on.png"){
        status = 0;
    }else {
        status = 1;
    }
    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/consults/updateConsult.do",
        data : {
            id : event.parentNode.parentNode.id,
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

function editInformation(event) {
    $(window.parent.document).find("input[name='informationId']").val(event.parentNode.parentNode.id);
    $("#editInformation").show();
    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/consults/queryConsultById.do",
        data : {
            id : $(window.parent.document).find("input[name='informationId']").val()
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                $("#edit_title").val(data['body']['result']['title']);
                $("#edit_tImg").attr("src",data['body']['result']['tImage']);
                $("#edit_url").val(data['body']['result']['url']);
                $("#edit_describe").val(data['body']['result']['des']);
                filePath_t = data['body']['result']['tImage'];
            }else{
                alert(data['head']['message'])
            }
        }
    });
}

function closeEditInformation() {
    $("#editInformation").hide();
}

function updateInformation() {
    var tImage = filePath_t;
    if($("#edit_describe").val().length >120){
        alert("资讯概述不能超过120字！");
    }else if($("#edit_title").val() == ""){
        alert("请输入资讯标题！");
    }else if($("#edit_url").val() == ""){
        alert("请输入资讯链接！");
    }else if(filePath_t = ""){
        alert("请上传标题图片！");
    }else{
        $.ajax({
            type : "post",
            url : ip_path + "/changfa_system/consults/updateConsult.do",
            data : {
                id : $(window.parent.document).find("input[name='informationId']").val(),
                title : $("#edit_title").val(),
                tImage : tImage,
                des : $("#edit_describe").val(),
                url : $("#edit_url").val(),
            },
            dataType : "json",
            success : function (data) {
                if(data['head']['code'] == 200){
                    window.open("informationManage.html","_self");
                }else{
                    alert(data['head']['message'])
                }
            }
        });
    }
}

function makeLarger(event) {
    parent.parent.pic_makeLarge(event);
}

function queryGoods() {
    currentPage = 1;
    ajax_goodsM();
}

function addGoods() {
    $(window.parent.document).find("input[name='goodsId']").val("");
    window.open("addGoods.html","_self");
}

function addType() {
   $("#addGoodsType").show();
    $("#goods_type").val("");
}

function closeAddGoodsType() {
    $("#addGoodsType").hide();
}

function createGoodsType() {
    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/goodsClass/addGoodsClass.do",
        data : {
            token : $(window.parent.document).find("input[name='token']").val(),
            name : $("#goods_type").val()
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                $("#addGoodsType").hide();
                $.ajax({
                    type : "post",
                    url : ip_path+"/changfa_system/goodsClass/getAllGoodsClass.do",
                    dataType : "json",
                    success : function (data) {
                        $("#goodsType").empty();
                        for(var i=0;i<data['body']['resultList']['length'];i++){
                            $("#goodsType").append("<option value='"+ data['body']['resultList'][i]['id'] +"'>"+data['body']['resultList'][i]['name']+"</option>");
                        }
                        $("#goodsType").unbind();
                    }
                });
            }else{
                alert(data['head']['message'])
            }
        }
    });
}

function createGoods() {
    if($("#goodsName").val() == ""){
        alert("请填写商品名称！");
    }else if($("#price").val() == ""){
        alert("请填写兑换积分且只能是数字！");
    }else if($("#marketPrice").val() == ""){
        alert("请填写市场价额且只能是数字！");
    }else if($("#goodsCount").val() == ""){
        alert("请填写库存数量且只能是数字！");
    }else if($("#goodsDescribe").val() == ""){
        alert("请填写商品描述！");
    }else if(ticketIds.length == 0){
        alert("请添加商品图片！");
    }else{
        var property;
        if($("#has").is(":checked")){
            property = 0;
        }else{
            property = 1;
        }
        $.ajax({
            type : "post",
            url : ip_path + "/changfa_system/goods/addGoods.do",
            data : {
                token : $(window.parent.document).find("input[name='token']").val(),
                name : $("#goodsName").val(),
                price : $("#changeScore").val(),
                actualPrice : $("#marketPrice").val(),
                fileId : ticketIds.toString(),
                description : $("#goodsDescribe").val(),
                goodsClassId : $("#goodsType option:selected").val(),
                stock : $("#goodsCount").val(),
                property : property
            },
            dataType : "json",
            success : function (data) {
                if(data['head']['code'] == 200){
                    window.open("goodsManage.html","_self");
                }else{
                    alert(data['head']['message'])
                }
            }
        });
    }
}

function changeGoodsTags2(event) {

    var status;
    var isTop;
    if(event.parentNode.childNodes[1].src == "http://app.changfanz.net:3588/changfa_file/on.png"){
        status= -1;
    }else{
        status = 1;
    }

    if(event.parentNode.childNodes[3].src == "http://app.changfanz.net:3588/changfa_file/on.png"){
        isTop = 1;
    }else{
        isTop= -1;
    }

    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/goods/updateGoods.do",
        data : {
            id : event.parentNode.parentNode.id,
            status : status,
            isTop : isTop
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                event.src == "http://app.changfanz.net:3588/changfa_file/on.png" ? event.src = "http://app.changfanz.net:3588/changfa_file/off.png" : event.src = "http://app.changfanz.net:3588/changfa_file/on.png";
            }else{
                alert(data['head']['message'])
            }
        }
    });
    // console.log(event.parentNode.childNodes[1].src);
    // console.log(event.parentNode.childNodes[3].src);
}

function changeGoodsTags1(event) {

    var status;
    var isTop;

    if(event.parentNode.childNodes[1].src == "http://app.changfanz.net:3588/changfa_file/on.png"){
        status = 1;
    }else{
        status= -1;
    }

    if(event.parentNode.childNodes[3].src == "http://app.changfanz.net:3588/changfa_file/on.png"){
        isTop = -1;
    }else{
        isTop = 1;
    }
    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/goods/updateGoods.do",
        data : {
            id : event.parentNode.parentNode.id,
            status : status,
            isTop : isTop
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                event.src == "http://app.changfanz.net:3588/changfa_file/on.png" ? event.src = "http://app.changfanz.net:3588/changfa_file/off.png" : event.src = "http://app.changfanz.net:3588/changfa_file/on.png";
            }else{
                alert(data['head']['message'])
            }
        }
    });
    // console.log(event.parentNode.childNodes[1].src);
    // console.log(event.parentNode.childNodes[3].src);
}

function editGoodsInfo(event) {
    $(window.parent.document).find("input[name='goodsId']").val(event.parentNode.parentNode.id);
    window.open("addGoods.html","_self");
}

function toogleGoodsStatus(event) {
    event.src == "http://app.changfanz.net:3588/changfa_file/on.png" ? event.src = "http://app.changfanz.net:3588/changfa_file/off.png" : event.src = "http://app.changfanz.net:3588/changfa_file/on.png";

}

function updateGoods() {
    var status;
    var isTop;
    if($("#status")[0]['src'] == "http://app.changfanz.net:3588/changfa_file/on.png"){
        status = 1;
    }else {
        status = -1;
    }

    if($("#isTop")[0]['src'] == "http://app.changfanz.net:3588/changfa_file/on.png"){
        isTop = 1;
    }else {
        isTop = -1;
    }

    if($("#goodsName").val() == ""){
        alert("请填写商品名称！");
    }else if($("#price").val() == ""){
        alert("请填写兑换积分！");
    }else if($("#marketPrice").val() == ""){
        alert("请填写市场价额！");
    }else if($("#goodsDescribe").val() == ""){
        alert("请填写商品描述！");
    }else if(ticketIds.length == 0){
        alert("请添加商品图片！");
    }else{
        var property;
        if($("#has").is(":checked")){
            property = 0;
        }else{
            property = 1;
        }
        $.ajax({
            type : "post",
            url : ip_path + "/changfa_system/goods/updateGoods.do",
            data : {
                // token : $(window.parent.document).find("input[name='token']").val(),
                id : $(window.parent.document).find("input[name='goodsId']").val(),
                name : $("#goodsName").val(),
                price : $("#changeScore").val(),
                actualPrice : $("#marketPrice").val(),
                fileId : ticketIds.toString(),
                description : $("#goodsDescribe").val(),
                goodsClassId : $("#goodsType option:selected").val(),
                stock : $("#goodsCount").val(),
                status : status,
                isTop : isTop,
                property : property
            },
            dataType : "json",
            success : function (data) {
                if(data['head']['code'] == 200){
                    window.open("goodsManage.html","_self");
                }else{
                    alert(data['head']['message'])
                }
            }
        });
    }
}

function queryOrders() {
    currentPage = 1;
    ajax_ordersM();
}

function showOrdersDetails(event) {
    $(window.parent.document).find("input[name='ordersId']").val(event.parentNode.parentNode.id);
    window.open("ordersDetail.html","_self");
}

function confirmOrder() {
    $("#confirm").show();
    $("#remark").val("");
}

function closeConfirm() {
    $("#confirm").hide();
}

function checkOrderPass() {
    if(window.confirm("确认审核通过？")){
        $.ajax({
            type : "post",
            url : ip_path + "/changfa_system/order/confirmOrder.do",
            data : {
                orderId : $(window.parent.document).find("input[name='ordersId']").val(),
                status : 2,
                remark : $("#remark").val()
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

function checkOrderUnpass() {
    if(window.confirm("确认驳回该订单？")){
        $.ajax({
            type : "post",
            url : ip_path + "/changfa_system/order/confirmOrder.do",
            data : {
                orderId : $(window.parent.document).find("input[name='ordersId']").val(),
                status : 3,
                remark : $("#remark").val()
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

function addLogistics() {
    // layer.confirm('库存充足？', {
    //     btn: ['填写发货单号','库存不足'], //按钮
    //     offset:['300px', '600px']
    //   }, function(){
    //     layer.open({
    //         type: 1, 
    //         offset:['300px', '500px'],
    //         title:'录入发货单号',
    //         content: $("#addLogistics") //这里content是一个普通的String
    //       });
    //   }, function(){
    //     layer.msg('也可以这样', {
    //       time: 20000, //20s后自动关闭
    //       btn: ['明白了', '知道了']
    //     });
    //   });
    $("#addLogistics").show();
    $("#logisticsNum").val("");
}

function closeAddLogistics() {
    $("#addLogistics").hide();
}

function insertLogistics() {
    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/order/shipConfirm.do",
        data : {
            token : $(window.parent.document).find("input[name='token']").val(),
            orderId : $(window.parent.document).find("input[name='ordersId']").val(),
            invoiceNo : $("#logisticsNum").val(),
            invoiceCompany : $("#logisticsCompany option:selected").val()
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

function openKDYB(event) {
    $("#queryLogistics").show();
    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/order/getLogisticsInformation.do",
        data : {
            logisticsNum : event.id
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                $("#list").empty();
                for(var i=0;i<data['body']['result']['list'].length;i++){
                    $("#list").append(
                        '<li class="mg_b20">' + data['body']['result']['list'][i]['logisticsInfo'] + '<br>' + data['body']['result']['list'][i]['date'] + '</li>'
                    );
                }
            }else{
                alert(data['head']['message']);
                $("#queryLogistics").hide();
            }
        }
    });
    // window.open("http://www.kuaidi100.com/?from=openv","newwindow","height=600,width=1000,top=200,left=400,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no");

}

function closeQueryLogistics() {
    $("#queryLogistics").hide();
}

function cancelOrders() {
    if(window.confirm("确定取消该订单？")){
        $.ajax({
            type : "post",
            url : ip_path + "/changfa_system/order/cancalOrder.do",
            data : {
                orderId : $(window.parent.document).find("input[name='ordersId']").val()
            },
            dataType : "json",
            success : function (data) {
                if(data['head']['code'] == 200){
                    window.location.reload();
                }else{
                    alert(data['head']['message'])
                }
            }
        });
    }
}

function queryEvt() {
    currentPage = 1;
    ajax_evtM();
}

function queryInformation() {
    currentPage = 1;
    ajax_informationM();
}

function experienceAndLevel() {
    $("#addExperienceAndLevel").show();
    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/level/selectAllLevelRule.do",
        data : {

        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                for(var i=0;i<data['body']['resultList'].length;i++){
                    $("#level" + parseInt(i+1)).val(data['body']['resultList'][i]['experience']);
                }
            }else{
                alert(data['head']['message'])
            }
        }
    });
}

function closeExperienceAndLevel() {
    $("#addExperienceAndLevel").hide();
}

function updateExperienceLevel() {
    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/level/updateLevelRule.do",
        data : {
            experience1 : $("#level1").val(),
            experience2 : $("#level2").val(),
            experience3 : $("#level3").val(),
            experience4 : $("#level4").val(),
            experience5 : $("#level5").val(),
            experience6 : $("#level6").val(),
            experience7 : $("#level7").val(),
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                $("#addExperienceAndLevel").hide();
            }
        }
    });
}


//积分转让上限
function addIntegralTopLimit() {
    $("#addIntegralLimit").show();
}

function closeAddIntegralLimit() {
    $("#addIntegralLimit").hide();
}

function existLimit() {
    if($("#yesExist").is(":checked")){
        $("#hasLimit").show();
    }else{
        $("#hasLimit").hide();
    }
}

// function topLimit() {
//     if($("#yesLimit").is(":checked")){
//         $("#timeTop").removeAttr("disabled");
//         $("#dayTop").removeAttr("disabled");
//     }else{
//         $("#timeTop").attr("disabled",true);
//         $("#dayTop").attr("disabled",true);
//     }
// }

function createIntegralLimit() {
    if($("#yesExist").is(":checked")){
        var reg_num = /^[0-9]*$/;
        if(reg_num.test($("#timeTop").val()) || $("#timeTop").val() == ""){
            if(reg_num.test($("#dayTop").val()) || $("#dayTop").val() == ""){
                $.ajax({
                    type : "post",
                    url : ip_path + "/changfa_system/score/insertScoreLimit.do",
                    data : {
                        turnOutRoleId : $("#turnOut option:selected").val(),
                        turnInRoleId : $("#turnIn option:selected").val(),
                        turnStatus : 1,
                        todayOneLimit : $("#timeTop").val(),
                        todayRoleLimit : $("#dayTop").val(),
                    },
                    dataType : "json",
                    success : function (data) {
                        if(data['head']['code'] == 200){
                            window.location.reload();
                        }else{
                            alert(data['head']['message'])
                        }
                    }
                });
            }else{
                alert("每日上限格式错误！");
            }
        }else{
            alert("单次上限格式错误！");
        }
    }else{
        $.ajax({
            type : "post",
            url : ip_path + "/changfa_system/score/insertScoreLimit.do",
            data : {
                turnOutRoleId : $("#turnOut option:selected").val(),
                turnInRoleId : $("#turnIn option:selected").val(),
                turnStatus : 0,
            },
            dataType : "json",
            success : function (data) {
                if(data['head']['code'] == 200){
                    window.location.reload();
                }else{
                    alert(data['head']['message'])
                }
            }
        });
    }
}

function toogle_limitStatus(event) {
    var status;
    if(event.src == "http://app.changfanz.net:3588/changfa_file/on.png"){
        status = 0;
    }else {
        status = 1;
    }
    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/score/updateScoreLimit.do",
        data : {
            id : event.parentNode.parentNode.id,
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

function editTopLimit(event) {
    $("#editIntegralLimit").show();
    $.ajax({
        type : "post",
        url : ip_path + "/changfa_system/score/selectScoreLimit.do",
        data : {
            id : event.parentNode.parentNode.id,
        },
        dataType : "json",
        success : function (data) {
            if(data['head']['code'] == 200){
                $("#edit_turnOut").val(data['body']['result']['roleOut']);
                $("#edit_turnIn").val(data['body']['result']['roleIn']);
                $("#edit_turnOut").attr("disabled","disabled");
                $("#edit_turnIn").attr("disabled","disabled");
                if(data['body']['result']['turnStatus'] == 1){
                    $("#edit_yesExist").attr("checked",true);
                    $("#edit_hasLimit").show();
                }else{
                    $("#edit_noExist").attr("checked",true);
                    $("#edit_hasLimit").hide();
                }
                $("#edit_timeTop").val(data['body']['result']['todayOneLimit']);
                $("#edit_dayTop").val(data['body']['result']['todayRoleLimit']);

                $("#limitId").val(data['body']['result']['id']);
            }else{
                alert(data['head']['message']);
            }
        }
    });
}

function edit_existLimit() {
    if($("#edit_yesExist").is(":checked")){
        $("#edit_hasLimit").show();
    }else{
        $("#edit_hasLimit").hide();
    }
}

function closeEditIntegralLimit() {
    $("#editIntegralLimit").hide();
}

function updateIntegralLimit() {
    if($("#edit_yesExist").is(":checked")){
        var reg_num = /^[0-9]*$/;
        if(reg_num.test($("#edit_timeTop").val()) || $("#edit_timeTop").val() == ""){
            if(reg_num.test($("#edit_dayTop").val()) || $("#edit_dayTop").val() == ""){
                $.ajax({
                    type : "post",
                    url : ip_path + "/changfa_system/score/updateScoreLimit.do",
                    data : {
                        id : $("#limitId").val(),
                        turnOutRoleId : $("#edit_turnOut option:selected").val(),
                        turnInRoleId : $("#edit_turnIn option:selected").val(),
                        turnStatus : 1,
                        todayOneLimit : $("#edit_timeTop").val(),
                        todayRoleLimit : $("#edit_dayTop").val(),
                    },
                    dataType : "json",
                    success : function (data) {
                        if(data['head']['code'] == 200){
                            window.location.reload();
                        }else{
                            alert(data['head']['message'])
                        }
                    }
                });
            }else{
                alert("每日上限格式错误！");
            }
        }else{
            alert("单次上限格式错误！");
        }
    }else{
        $.ajax({
            type : "post",
            url : ip_path + "/changfa_system/score/updateScoreLimit.do",
            data : {
                id : $("#limitId").val(),
                turnOutRoleId : $("#edit_turnOut option:selected").val(),
                turnInRoleId : $("#edit_turnIn option:selected").val(),
                turnStatus : 0,
            },
            dataType : "json",
            success : function (data) {
                if(data['head']['code'] == 200){
                    window.location.reload();
                }else{
                    alert(data['head']['message'])
                }
            }
        });
    }
}
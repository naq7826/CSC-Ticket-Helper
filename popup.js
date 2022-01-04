
//TƯ VẤN - DEFINES
var bogo = document.getElementById('bogo');
var outzone = document.getElementById('outzone');
var stats = document.getElementById('stats');
var preserve = document.getElementById('preserve');
var changeBill = document.getElementById('changeBill');
var cancelBill = document.getElementById('cancelBill');
var ord = document.getElementById('ord');
var bill = document.getElementById('bill');
var menuPrice = document.getElementById('menuPrice');
var meals = document.getElementById('meals');
var noRes = document.getElementById('noRes');
var outOfService = document.getElementById('outOfService');
var voucher = document.getElementById('voucher');
var addPoints = document.getElementById('addPoints');
var payment = document.getElementById('payment');
var lienhe = document.getElementById('lienhe');

//KHIẾU NẠI - DEFINES
var late = document.getElementById('late');
var quality = document.getElementById('quality');
var missing = document.getElementById('missing');
var wrong = document.getElementById('wrong');
var noBill = document.getElementById('noBill');
var late2 = document.getElementById('late2');
var ctkm = document.getElementById('ctkm');
var poison = document.getElementById('poison');
var attitude = document.getElementById('attitude');
var wrongMoney = document.getElementById('wrongMoney');
var burnt = document.getElementById('burnt');

//OTHER - DEFINES
var prank = document.getElementById('prank');
var nosignal = document.getElementById('nosignal');

//OTHER DEFINES
var empname = document.getElementById('name');
var sdt = document.getElementById('sdt');
var datetime = document.getElementById("datetime");
var pasteClip = document.getElementById('pasteClip');
var resetDate = document.getElementById('resetDate');
var counter = document.getElementById('counter');
var i; //FOR LOOP
var elements=document.getElementsByClassName("displayNone");
var elements2=document.getElementsByClassName("disableItems");
var modalGiaoTre = new bootstrap.Modal(document.getElementById('lateKN'));
var flag = document.getElementById("flag");
var modalFooter = document.getElementById("saveDiv");
var tenNH = document.getElementById("tenNH");
var soPhut = document.getElementById("soPhut");
var billNum = document.getElementById("billNum");
var giaoThieu = document.getElementById("giaoThieu");
var giaoSai = document.getElementById("giaoSai");
var chuaXHDD = document.getElementById("chuaXHDD");
var ngoDoc = document.getElementById("ngoDoc");
var vanDe = document.getElementById("vanDe");
var tenCTKM = document.getElementById("tenCTKM");
var lienHeText = document.getElementById("lienHeText");
var kvghText = document.getElementById("kvghText");
var flag2=0;

//VARIABLES
var KMvMN = "Tư vấn / Tư vấn Khuyễn Mãi Và Menu"; // Tư Vấn/ Tư Vấn Khuyến Mãi Và Menu
var TVGH = "Tư vấn / Tư vấn giao hàng"; // Tư vấn/ Tư Vấn Giao Hàng
var TTDH = "Tư vấn / Tư vấn tính trạng đơn hàng"; // Tư vấn/ Tư Vấn Tình Trạng Đơn Hàng
var LH = "Liên Hệ Góp Ý, Đóng Góp Ý Kiến"; // Liên Hệ, Góp Ý, Đóng Góp Ý Kiến
var GHTre = "Giao hàng / Trễ Giờ Với Quy Định"; // Giao hàng/ Trễ Giờ Với Quy định
var KCL = "Sản phẩm / Kém Chất Lượng"; // Sản Phẩm/ Kém Chất Lượng
var NDTP = "Sản phẩm / Ngộ Độc Thực Phẩm"; // Sản Phẩm/ Kém Chất Lượng
var TSP = "Giao hàng / Thiếu Sản Phẩm"; // Sản Phẩm/ Thiếu Sản Phẩm
var TVWeb = "Web / Tư Vấn Web";
var KNWeb = "Web / Khiếu Nại Web";
var APP = "App / STORELLET";
var TLS = "Thái Độ / Thiếu lịch sự";
var TNT = "Thái Độ / Thiếu Nhiệt Tình";
var TTHDKCX = "Thanh Toán Hóa Đơn Không Chính Xác"

var BANNED_AGENTS= [""];
var BANNED_REASON= [""];
var AGENT_LIST=[];

window.onload = async function() {
    var date;
	var array = [];
    await fetch(chrome.extension.getURL('/data/agents.json'))
    .then((resp) => resp.json())
    .then(function (jsonData) {
        array.push(jsonData);
        array[0].agents.forEach(function(item) {
            AGENT_LIST.push(item.name);
            if (item.status == "notAllowed") {
                BANNED_AGENTS.push(item.name);
                BANNED_REASON.push(item.reason);
            }
        });
    });
    chrome.storage.local.get(['namee','yyyy','mm','dd','count'], function(result) {
        checkAgentName(result.namee);
        date=result.yyyy+"-"+result.mm+'-'+result.dd;
        document.getElementById("datetime").value=date;
        document.getElementById("counter").value=result.count;
	});
  	var input = document.getElementById("sdt").focus();
}

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	window.close();
});

empname.onchange = function(){
	chrome.storage.local.get('namee',function(result) {
		empname.value=empname.value.trim();
		empname.value=empname.value.toUpperCase();
		if(result.namee != empname.value) {
			chrome.storage.local.set({'namee': empname.value});
		    counter.value=0;
		    chrome.storage.local.set({'count': 0});
		    checkAgentName(empname.value);
		}
	})
    
};

sdt.onchange = function() {
    sdt.value=sdt.value.replace(/[^0-9]/g,"");
}

soPhut.onchange = function() {
    soPhut.value=soPhut.value.replace(/[^0-9]/g,"");
}

billNum.onchange = function() {
    billNum.value=billNum.value.replace(/[^0-9]/g,"");
}

datetime.onchange = function(){
    var newDate=new Date(datetime.value);
    var newDay=newDate.getDate();
    var newMonth=newDate.getMonth()+1;
    if (newDay < 10) {
        newDay = "0"+newDay;
    }
    if (newMonth < 10) {
        newMonth = "0"+newMonth;
    }
    chrome.storage.local.set({'dd': newDay});
    chrome.storage.local.set({'mm': newMonth});
    chrome.storage.local.set({'yyyy': newDate.getFullYear()});
}

counter.oninput = function(){
    chrome.storage.local.set({'count': counter.value});
}

counter.onkeydown = function(e){
    (e.keyCode===38 || e.keyCode===40) ? updateValue(e): e.preventDefault();
}

resetDate.onclick = function() {
    var newDate=new Date();
    var newDay=newDate.getDate();
    var newMonth=newDate.getMonth()+1;
    if (newDay < 10) {
        newDay = "0"+newDay;
    }
    if (newMonth < 10) {
        newMonth = "0"+newMonth;
    }
    chrome.storage.local.set({'dd': newDay});
    chrome.storage.local.set({'mm': newMonth});
    chrome.storage.local.set({'yyyy': newDate.getFullYear()});
    var input = document.getElementById("datetime").value=newDate.getFullYear()+'-'+newMonth+'-'+newDay;
}

pasteClip.onclick = function() {
    sdt.value="";
    sdt.focus();
    document.execCommand("paste");
}

modalFooter.onclick = function() {
    if (flag.value == 0) {
        saveTicket("TV", "TV", LH, "LIEN HE");
    }
    if (flag.value == 1) {
        saveTicket("KN", "KN", GHTre, "GIAO TRE");
    }
    if (flag.value == 2) {
        saveTicket("KN", "KN", GHTre, "GIAO TRE NHIEU");
    }
    if (flag.value == 3) {
        saveTicket("KN", "KN", KCL, "BANH CHAY");
    }
    if (flag.value == 4) {
        saveTicket("KN", "KN", TSP, "GIAO THIEU");
    }
    if (flag.value == 5) {
        saveTicket("KN", "KN", TTDH, "GIAO SAI");
    }
    if (flag.value == 6) {
        saveTicket("KN", "KN", LH, "XHDD");
    }
    if (flag.value == 7) {
        saveTicket("KN", "KN", LH, "NGO DOC");
    }
    if (flag.value == 8) {
        saveTicket("KN", "KN", KCL, "CHAT LUONG");
    }
    if (flag.value == 9) {
        saveTicket("KN", "KN", TTHDKCX, "SAI TIEN");
    }
    if (flag.value == 10) {
        saveTicket("KN", "KN", LH, "CTKM");
    }
    if (flag.value == 11) {
        saveTicket("KN", "KN", TLS, "THAI DO");
    }
    if (flag.value == 12) {
        saveTicket("TV", "TV", TVGH,"KVGH");
    }
}

function throwError(element) {
    element.focus();
}

function setWarning(text) {
	document.getElementsByClassName("displayTrue")[0].innerHTML=text;
}

function checkAgentName(agentName) {
    if (agentName == ''){
        for (var j=0; j<elements.length; j++) {
            elements[j].style.display="none";
        }
        for (var j=0; j<elements2.length; j++) {
            elements2[j].disabled = "true";
        }
        document.getElementsByClassName("displayTrue")[0].innerHTML="Nhập tên và nhấn Enter để kích hoạt tool.";
        document.getElementsByClassName("displayTrue")[0].removeAttribute('hidden');
		empname.focus();
    }
    else {
        empname.value=agentName;
        if (AGENT_LIST.includes(agentName)) {
            flag2=0;
            for(var i=0; i<BANNED_AGENTS.length; i++) {
                if (agentName == BANNED_AGENTS[i]) {
                    for (var j=0; j<elements.length; j++) {
                        elements[j].style.display="none";
                    }
                    for (var j=0; j<elements2.length; j++) {
                        elements2[j].disabled = "true";
                    }
                    setWarning(BANNED_REASON[i]);
                    document.getElementsByClassName("displayTrue")[0].removeAttribute('hidden');
                    empname.focus();
                    flag2=1;
                    break;
                }
            }
            if (flag2 == 0) {
                for (var j=0; j<elements.length; j++) {
                    elements[j].style.display="";
                }
                for (var j=0; j<elements2.length; j++) {
                    elements2[j].disabled = "";
                }
                document.getElementsByClassName("displayTrue")[0].setAttribute('hidden', 'hidden');
				sdt.focus();
            }
        }
        else {
            for (var j=0; j<elements.length; j++) {
                elements[j].style.display="none";
            }
            for (var j=0; j<elements2.length; j++) {
                elements2[j].disabled = "true";
            }
            document.getElementsByClassName("displayTrue")[0].innerHTML="Agent mới lên line cần sự approve của Ban Quản Lý CSC để sử dụng tool viết ticket.";
            document.getElementsByClassName("displayTrue")[0].removeAttribute('hidden');
			empname.focus();
        }
    }
}

function saveTicket(subject, subjectChoice, topic, content) {
    var dt = new Date(datetime.value);
    var dt2 = new Date();
    var dtm = dt.getMonth()+1;
    var dtd = dt.getDate();
    var dty = dt.getFullYear();
    var hh = dt2.getHours();
    var mm = dt2.getMinutes();
    if (empname.value == "") {
        throwError(empname);
    }
    else {
        if (sdt.value == "") {
            throwError(sdt);
        }
        else {
            counter.value=parseInt(counter.value)+1;
            chrome.storage.local.set({'count': counter.value});
            if (content == "LIEN HE") {
                content="LIÊN HỆ: "+lienHeText.value;
            }
            if (content == "KVGH") {
                content="KVGH "+kvghText.value;+": K CÓ NH HĐ";
            }
			if (content == "GIAO TRE"){
		        content=tenNH.value.trim()+" GIAO TRỄ "+soPhut.value.trim()+"' (BILL "+billNum.value.trim()+")";
		    }
			if (content == "GIAO TRE NHIEU"){
		        content="GIAO TRỄ KHÁCH GỌI NHIỀU LẦN: "+tenNH.value.trim()+" GIAO TRỄ "+soPhut.value.trim()+"' (BILL "+billNum.value.trim()+")";
		    }
		    if (content == "BANH CHAY"){
		        content=tenNH.value.trim()+": KHÁCH PHẢN ÁNH BÁNH BỊ CHÁY (BILL "+billNum.value.trim()+")";
		    }
		    if (content == "GIAO THIEU"){
		        content=tenNH.value.trim()+" GIAO THIẾU "+giaoThieu.value.trim()+" (BILL "+billNum.value.trim()+")";
		    }
		    if (content == "GIAO SAI"){
		        content=tenNH.value.trim()+" GIAO SAI "+giaoSai.value.trim()+" (BILL "+billNum.value.trim()+")";
		    }
		    if (content == "XHDD"){
		        content=tenNH.value.trim()+" CHƯA XHDD NGÀY "+chuaXHDD.value.trim()+" (BILL "+billNum.value.trim()+")";
		    }
		    if (content == "NGO DOC"){
		        if (billNum.value == "" || billNum.value == " ") {
		            content=tenNH.value.trim()+": KHÁCH PHẢN ÁNH BỊ NGỘ ĐỘC SAU KHI DÙNG "+ngoDoc.value.trim();
		        }
		        else content=tenNH.value.trim()+": KHÁCH PHẢN ÁNH BỊ NGỘ ĐỘC SAU KHI DÙNG "+ngoDoc.value.trim()+" (BILL "+billNum.value.trim()+")";
		    }
		    if (content == "CHAT LUONG"){
		        if (billNum.value == "" || billNum.value == " ") {
		            content=tenNH.value.trim()+": KHÁCH PHẢN ÁNH "+vanDe.value.trim();
		        }
		        else content=tenNH.value.trim()+": KHÁCH PHẢN ÁNH "+vanDe.value.trim()+" (BILL "+billNum.value.trim()+")";
		    }
		    if (content == "SAI TIEN"){
		        if (billNum.value == "" || billNum.value == " ") {
		            content="KHÁCH PHẢN ÁNH "+tenNH.value.trim()+" THỐI SAI TIỀN";
		        }
		        else content="KHÁCH PHẢN ÁNH "+tenNH.value.trim()+" THỐI SAI TIỀN (BILL "+billNum.value.trim()+")";
		    }
		    if (content == "CTKM"){
		        content="KHÁCH PHẢN ÁNH "+tenCTKM.value.trim()+" "+vanDe.value.trim();
		    }
		    if (content == "THAI DO"){
		        content=tenNH.value.trim()+": KHÁCH PHẢN ÁNH THÁI ĐỘ PHỤC VỤ CỦA NHÂN VIÊN NHÀ HÀNG";
		    }
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.executeScript(
                        tabs[0].id,
                        {code: 'function saveTicket(response) {' +
                                'var digest = response.d.GetContextWebInformation.FormDigestValue;' +
                                'fetch("https://pizzavietnam.sharepoint.com/sites/IntranetPHVN/_api/web/GetList(@a1)/AddValidateUpdateItemUsingPath()?@a1=%27%2Fsites%2FIntranetPHVN%2FLists%2FCallcenter%20ticket%27", {' +
                                '"headers": {' +
                                  '"accept": "application/json;odata=verbose",' +
                                  '"accept-language": "en-US,en;q=0.9",' +
                                  '"collectspperfmetrics": "SPSQLQueryCount",' +
                                  '"content-type": "application/json;odata=verbose",' +
                                  '"scenario": "CreateListItem",' +
                                  '"scenariotype": "AUO",' +
								  '"sec-ch-ua": "\\" Not A;Brand\\";v=\\"99\\", \\"Chromium\\";v=\\"96\\", \\"Google Chrome\\";v=\\"96\\"",' +
                                  '"sec-ch-ua-mobile": "?0",' +
                                  '"sec-ch-ua-platform": "\\"Windows\\"",' +
                                  '"sec-fetch-dest": "empty",' +
                                  '"sec-fetch-mode": "cors",' +
                                  '"sec-fetch-site": "same-origin",' +
                                  '"x-requestdigest": digest,' +
                                  '"x-sp-requestresources": "listUrl=%2Fsites%2FIntranetPHVN%2FLists%2FCallcenter%20ticket"' +
                                '},' +
                                '"referrer": "https://pizzavietnam.sharepoint.com/sites/IntranetPHVN/Lists/Callcenter%20ticket/AllItems.aspx?isAscending=false&sortField=ID&viewid=5b220d16%2D2f8e%2D4006%2Dbdf9%2Dd99152daa645",' +
                                '"referrerPolicy": "strict-origin-when-cross-origin",' +
                                '"body": "{\\"listItemCreateInfo\\":{\\"__metadata\\":{\\"type\\":\\"SP.ListItemCreationInformationUsingPath\\"},\\"FolderPath\\":{\\"__metadata\\":{\\"type\\":\\"SP.ResourcePath\\"},\\"DecodedUrl\\":\\"/sites/IntranetPHVN/Lists/Callcenter ticket\\"}},\\"formValues\\":[{\\"FieldName\\":\\"Title\\",\\"FieldValue\\":\\"'+subject+'\\",\\"HasException\\":false,\\"ErrorMessage\\":null},{\\"FieldName\\":\\"Ng_x00e0_yt_x1ea1_o\\",\\"FieldValue\\":\\"'+dtm+'/'+dtd+'/'+dty+' '+hh+':'+mm+'\\",\\"HasException\\":false,\\"ErrorMessage\\":null},{\\"FieldName\\":\\"FromAgent\\",\\"FieldValue\\":\\"'+empname.value+'\\",\\"HasException\\":false,\\"ErrorMessage\\":null},{\\"FieldName\\":\\"HelpTopic\\",\\"FieldValue\\":\\"'+topic+'\\",\\"HasException\\":false,\\"ErrorMessage\\":null},{\\"FieldName\\":\\"Subject\\",\\"FieldValue\\":\\"'+subjectChoice+'\\",\\"HasException\\":false,\\"ErrorMessage\\":null},{\\"FieldName\\":\\"Content\\",\\"FieldValue\\":\\"'+content+'\\",\\"HasException\\":false,\\"ErrorMessage\\":null},{\\"FieldName\\":\\"PhoneNumber\\",\\"FieldValue\\":\\"'+sdt.value+'\\",\\"HasException\\":false,\\"ErrorMessage\\":null},{\\"FieldName\\":\\"Text\\",\\"FieldValue\\":\\"\\",\\"HasException\\":false,\\"ErrorMessage\\":null},{\\"FieldName\\":\\"ContentType\\",\\"FieldValue\\":\\"Item\\",\\"HasException\\":false,\\"ErrorMessage\\":null}],\\"bNewDocumentUpdate\\":false,\\"checkInComment\\":null}",' +
                                '"method": "POST",' +
                                '"mode": "cors",' +
                                '"credentials": "include"' +
                              '});' +
                              '}' +
                              'fetch("https://pizzavietnam.sharepoint.com/sites/IntranetPHVN/_api/contextinfo", {' +
                                '"headers": {' +
                                  '"accept": "application/json;odata=verbose",' +
                                '},' +
                                '"method": "POST",' +
                                '"mode": "cors",' +
                                '"credentials": "include"' +
                              '})' +
                              '.then((response) => response.json())' +
                              '.then((responseJson) => {' +
                                'this.saveTicket(responseJson);' +
                              '})'+
			 	'.then((responseJson) => {setTimeout(function() {location.reload();},300)});'}); 
            });
        }
    }
}

//TƯ VẤN
bogo.onclick = function(){
    saveTicket("TV", "TV", KMvMN,"KM: BOGO + GIÁ");
}

outzone.onclick = function() {
    saveTicket("TV", "TV", TVGH,"KVGH: OUTZONE");
};

stats.onclick = function() {
    saveTicket("TV", "TV", TTDH,"TÌNH TRẠNG ĐH");
};

preserve.onclick = function() {
    saveTicket("TV", "TV", LH,"ĐẶT CHỖ");
};

changeBill.onclick = function() {
    saveTicket("TV", "TV", TTDH,"ĐỔI MÓN");
};

cancelBill.onclick = function() {
    saveTicket("TV", "TV", TTDH,"HUỶ ĐH");
};

ord.onclick = function() {
    saveTicket("TV", "TV", LH,"ĐẶT HÀNG TRƯỚC");
};

bill.onclick = function() {
    saveTicket("TV", "TV", LH,"XUẤT HDD");
};

menuPrice.onclick = function() {
    saveTicket("TV", "TV", LH,"MENU: GIÁ");
};

meals.onclick = function() {
    saveTicket("TV", "TV", LH,"MENU: MÓN ĂN");
};

noRes.onclick = function() {
    if (empname.value == "") {
        throwError(empname);
    }
    else {
        if (sdt.value == "") {
            throwError(sdt);
        }
        else {
            flag.value=12;
            disableTextBox();
            for (var q=0; q<document.getElementsByClassName("khuVuc").length;q++){
                document.getElementsByClassName("khuVuc")[q].removeAttribute("hidden");
            }
            modalGiaoTre.show();
        }
    }
};

outOfService.onclick = function() {
    saveTicket("TV", "TV", TVGH,"KVGH: HẾT GIỜ GH");
};

voucher.onclick = function() {
    saveTicket("TV", "TV", LH,"VOUCHER");
};

addPoints.onclick = function() {
    saveTicket("LOYALTY APP", "LOYALTY APP", APP,"TÍCH ĐIỂM");
};

payment.onclick = function() {
    saveTicket("TV", "TV", LH,"HÌNH THỨC TT: TM/CK");
};

lienhe.onclick = function() {
    if (empname.value == "") {
        throwError(empname);
    }
    else {
        if (sdt.value == "") {
            throwError(sdt);
        }
        else {
            flag.value=0;
            disableTextBox();
            for (var q=0; q<document.getElementsByClassName("lienHe").length;q++){
                document.getElementsByClassName("lienHe")[q].removeAttribute("hidden");
            }
            modalGiaoTre.show();
        }
    }
};

//KHIẾU NẠI

function disableTextBox() {
    for (var q=0; q<document.getElementsByClassName("a").length; q++){
        document.getElementsByClassName("a")[q].setAttribute('hidden','hidden');
    }
}

late.onclick = function() {
    if (empname.value == "") {
        throwError(empname);
    }
    else {
        if (sdt.value == "") {
            throwError(sdt);
        }
        else {
            flag.value=1;
            disableTextBox();
            for (var q=0; q<document.getElementsByClassName("giaoTre").length;q++){
                document.getElementsByClassName("giaoTre")[q].removeAttribute("hidden");
            }
            modalGiaoTre.show();
        }
    }
};

late2.onclick = function() {
    if (empname.value == "") {
        throwError(empname);
    }
    else {
        if (sdt.value == "") {
            throwError(sdt);
        }
        else {
            flag.value=2;
            disableTextBox();
            for (var q=0; q<document.getElementsByClassName("giaoTre").length;q++){
                document.getElementsByClassName("giaoTre")[q].removeAttribute("hidden");
            }
            modalGiaoTre.show();
        }
    }
};

burnt.onclick = function() {
    if (empname.value == "") {
        throwError(empname);
    }
    else {
        if (sdt.value == "") {
            throwError(sdt);
        }
        else {
            flag.value=3;
            disableTextBox();
            for (var q=0; q<document.getElementsByClassName("banhChay").length;q++){
                document.getElementsByClassName("banhChay")[q].removeAttribute("hidden");
            }
            modalGiaoTre.show();
        }
    }
};

missing.onclick = function() {
    if (empname.value == "") {
        throwError(empname);
    }
    else {
        if (sdt.value == "") {
            throwError(sdt);
        }
        else {
            flag.value=4;
            disableTextBox();
            for (var q=0; q<document.getElementsByClassName("giaoThieuMon").length;q++){
                document.getElementsByClassName("giaoThieuMon")[q].removeAttribute("hidden");
            }
            modalGiaoTre.show();
        }
    }
};

wrong.onclick = function() {
    if (empname.value == "") {
        throwError(empname);
    }
    else {
        if (sdt.value == "") {
            throwError(sdt);
        }
        else {
            flag.value=5;
            disableTextBox();
            for (var q=0; q<document.getElementsByClassName("giaoSaiMon").length;q++){
                document.getElementsByClassName("giaoSaiMon")[q].removeAttribute("hidden");
            }
            modalGiaoTre.show();
        }
    }
};

noBill.onclick = function() {
    if (empname.value == "") {
        throwError(empname);
    }
    else {
        if (sdt.value == "") {
            throwError(sdt);
        }
        else {
            flag.value=6;
            disableTextBox();
            for (var q=0; q<document.getElementsByClassName("XHDD").length;q++){
                document.getElementsByClassName("XHDD")[q].removeAttribute("hidden");
            }
            modalGiaoTre.show();
        }
    }
};

poison.onclick = function() {
    if (empname.value == "") {
        throwError(empname);
    }
    else {
        if (sdt.value == "") {
            throwError(sdt);
        }
        else {
            flag.value=7;
            disableTextBox();
            for (var q=0; q<document.getElementsByClassName("biNgoDoc").length;q++){
                document.getElementsByClassName("biNgoDoc")[q].removeAttribute("hidden");
            }
            modalGiaoTre.show();
        }
    }
};

quality.onclick = function() {
    if (empname.value == "") {
        throwError(empname);
    }
    else {
        if (sdt.value == "") {
            throwError(sdt);
        }
        else {
            flag.value=8;
            disableTextBox();
            for (var q=0; q<document.getElementsByClassName("chatLuong").length;q++){
                document.getElementsByClassName("chatLuong")[q].removeAttribute("hidden");
            }
            vanDe.placeholder = "VD: PIZZA CÓ QUÁ ÍT PHÔ MAI"
            modalGiaoTre.show();
        }
    }
};

wrongMoney.onclick = function() {
    if (empname.value == "") {
        throwError(empname);
    }
    else {
        if (sdt.value == "") {
            throwError(sdt);
        }
        else {
            flag.value=9;
            disableTextBox();
            for (var q=0; q<document.getElementsByClassName("saiTien").length;q++){
                document.getElementsByClassName("saiTien")[q].removeAttribute("hidden");
            }
            modalGiaoTre.show();
        }
    }
};

ctkm.onclick = function() {
    if (empname.value == "") {
        throwError(empname);
    }
    else {
        if (sdt.value == "") {
            throwError(sdt);
        }
        else {
            flag.value=10;
            disableTextBox();
            for (var q=0; q<document.getElementsByClassName("CTKM").length;q++){
                document.getElementsByClassName("CTKM")[q].removeAttribute("hidden");
            }
            vanDe.placeholder = "VD: ÍT BÁNH TẶNG, GIÁ CAO,..."
            modalGiaoTre.show();
        }
    }
};

attitude.onclick = function() {
    if (empname.value == "") {
        throwError(empname);
    }
    else {
        if (sdt.value == "") {
            throwError(sdt);
        }
        else {
            flag.value=11;
            disableTextBox();
            for (var q=0; q<document.getElementsByClassName("thaiDo").length;q++){
                document.getElementsByClassName("thaiDo")[q].removeAttribute("hidden");
            }
            modalGiaoTre.show();
        }
    }
};

//OTHER
prank.onclick = function() {
    saveTicket("OTHER", "Other", LH,"NM: GỌI LẠI BẬN");
};

nosignal.onclick = function() {
    saveTicket("OTHER", "Other", LH,"K TÍN HIỆU: GỌI LẠI BẬN");
};


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
var field1="Title_fa564e0f-0c70-4ab9-b863-0177e6ddd247_$TextField"; //TV
var field2="Category_6df9bd52-550e-4a30-bc31-a4366832a87d_$DropDownChoice"; //TV Drop list
var field3="From_x0020_Agent_ffa78ce0-7d39-4d92-afe1-311c180f26a9_$TextField"; //Tên NV
var field4="Help_x0020_Topic_9c5a510a-cfe9-401e-8b7e-4b5c10cc8ccb_$DropDownChoice"; //Lý do Drop list
var field5="Phone_x0020_Number_405beb8d-cc55-49e7-8847-17d605fcc077_$TextField"; //Sđt
var field6="Content_f74e7e4c-463c-431b-ae77-6f720e31a3d7_$TextField_inplacerte"; //Nội dung
var field7="DueDate_cd21b4c2-6841-4f9e-a23a-738a65f99889_$DateTimeFieldDate"; //Date
var field8="pcjx_ae7950b0-4487-4846-9c98-8aeea4fb4952_$TextField"; //Text
var saveBtn="ctl00_ctl26_g_d6611ecc_c3e5_47f8_9f1d_ab339e187141_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem";

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

var AGENTS= ["KIM LUYEN", "BANG TAM", "THUY DUNG", "ANH QUAN", "TAM AN", "PHUONG ANH", "BAO TRAN", "THANH HOA", "THUC DOAN", "DUC HUY","THAI NGHI","LICH SU", "THUY ANH", "PHAM VY", 
            "MAI ANH", "TUONG VY", "TRAN VI", "YEN NGAN", "MINH HA", "SONG HUONG", "ANH PHAM", "DUC DUY", "ANH KHOA", "THU NGAN", 
            "KHANH NGOC", "GIA HAN", "LE THU", "ANH TUAN", "NHA TRUC", "MI THUONG", "HOAI DUY", "HUYEN TRAN", "QUOC BAO", "PHAM THU", 
            "HONG ANH", "NGOC ANH", "THANH TRUC", "PHUONG LINH", "HUYEN PHUONG", "THU UYEN", "THUY VI", "MY NU", "THAO LINH", 
            "THANH NGUYEN", "VAN LEN", "ANH VI", "THANH TRUYEN", "DUC THINH", "NHAN AI", "PHUONG UYEN", "THUY LINH", "HONG CHAU", "MINH HANH", "CAM TU"];
var BANNED_AGENTS= [""];
var BANNED_REASON= [""];
var array = [];
var AGENTS2=[];

window.onload = async function() {
    var date;
    await fetch(chrome.extension.getURL('/data/agents.json'))
    .then((resp) => resp.json())
    .then(function (jsonData) {
        array.push(jsonData);
        array[0].agents.forEach(function(item) {
            AGENTS2.push(item.name);
            if (item.status == "notAllowed") {
                BANNED_AGENTS.push(item.name);
                BANNED_REASON.push(item.reason);
            }
        });
    });
    //alert(AGENTS2);
    chrome.storage.local.get(['namee','yyyy','mm','dd','count'], function(result) {
        checkAgentName(result.namee);
        date=result.yyyy+"-"+result.mm+'-'+result.dd;
        document.getElementById("datetime").value=date;
        document.getElementById("counter").value=result.count;
	});
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		var tab = tabs[0].url.toString();
		if (!tab.includes("NewForm") && tab.includes("phvsgnfilesrv")) {
			chrome.tabs.executeScript(
			tabs[0].id,
			{code: 'document.getElementById("idHomePageNewItem").click();'});
		}
	});

    
  	var input = document.getElementById("sdt").focus();
}

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (!tab.title.includes("New Item")) {
			window.close();
		}
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
    //sdt.value=sdt.value.trim();
    sdt.value=sdt.value.replace(/[^0-9]/g,"");
}

soPhut.onchange = function() {
    //sdt.value=sdt.value.trim();
    soPhut.value=soPhut.value.replace(/[^0-9]/g,"");
}

billNum.onchange = function() {
    //sdt.value=sdt.value.trim();
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
        saveComplainTicket("KN", "KN", GHTre,"", "GIAO TRE");
    }
    if (flag.value == 2) {
        saveComplainTicket("KN", "KN", GHTre,"GIAO TRỄ KHÁCH GỌI NHIỀU LẦN: ", "GIAO TRE");
    }
    if (flag.value == 3) {
        saveComplainTicket("KN", "KN", KCL,"", "BANH CHAY");
    }
    if (flag.value == 4) {
        saveComplainTicket("KN", "KN", TSP,"", "GIAO THIEU");
    }
    if (flag.value == 5) {
        saveComplainTicket("KN", "KN", TTDH,"", "GIAO SAI");
    }
    if (flag.value == 6) {
        saveComplainTicket("KN", "KN", LH,"", "XHDD");
    }
    if (flag.value == 7) {
        saveComplainTicket("KN", "KN", LH,"", "NGO DOC");
    }
    if (flag.value == 8) {
        saveComplainTicket("KN", "KN", KCL,"", "CHAT LUONG");
    }
    if (flag.value == 9) {
        saveComplainTicket("KN", "KN", TTHDKCX,"", "SAI TIEN");
    }
    if (flag.value == 10) {
        saveComplainTicket("KN", "KN", LH,"", "CTKM");
    }
    if (flag.value == 11) {
        saveComplainTicket("KN", "KN", TLS,"", "THAI DO");
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
        //alert(AGENTS2);
        if (AGENTS2.includes(agentName)) {
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
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.executeScript(
                        tabs[0].id,
                        {code: 'function saveTicket(response) {' +
                                'var digest = response.d.GetContextWebInformation.FormDigestValue;' +
                                'console.log(digest); fetch("https://pizzavietnam.sharepoint.com/sites/IntranetPHVN/_api/web/GetList(@a1)/AddValidateUpdateItemUsingPath()?@a1=%27%2Fsites%2FIntranetPHVN%2FLists%2FCallcenter%20ticket%27", {' +
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
			 	'.then((responseJson) => {location.reload();});'}); 
            });
        }
    }
}

function saveComplainTicket(subject, subjectChoice, topic, mainContent, content) {
    counter.value=parseInt(counter.value)+1;
    chrome.storage.local.set({'count': counter.value});
    if (content == "GIAO TRE"){
        msg=mainContent+tenNH.value.trim()+" GIAO TRỄ "+soPhut.value.trim()+"' (BILL "+billNum.value.trim()+")";
        //msg2=tenNH.value+" DELIVERED "+soPhut.value+" MINUTES LATE (BILL "+billNum.value+").";
    }
    if (content == "BANH CHAY"){
        msg=tenNH.value.trim()+": KHÁCH PHẢN ÁNH BÁNH BỊ CHÁY (BILL "+billNum.value.trim()+")";
        //msg2=tenNH.value+": CUSTOMER COMPLAINED THE PIZZA WAS BURNT (BILL "+billNum.value+").";
    }
    if (content == "GIAO THIEU"){
        msg=tenNH.value.trim()+" GIAO THIẾU "+giaoThieu.value.trim()+" (BILL "+billNum.value.trim()+")";
        //msg2=tenNH.value+" DID NOT DELIVER ##"+giaoThieu.value+"## (BILL "+billNum.value+").";
    }
    if (content == "GIAO SAI"){
        msg=tenNH.value.trim()+" GIAO SAI "+giaoSai.value.trim()+" (BILL "+billNum.value.trim()+")";
        //msg2=tenNH.value+" DID NOT DELIVER ##"+giaoThieu.value+"## (BILL "+billNum.value+")";
        //msg2="";
    }
    if (content == "XHDD"){
        msg=tenNH.value.trim()+" CHƯA XHDD NGÀY "+chuaXHDD.value.trim()+" (BILL "+billNum.value.trim()+")";
        //msg2=tenNH.value+" DID NOT DELIVER ##"+giaoThieu.value+"## (BILL "+billNum.value+")";
        //msg2="";
    }
    if (content == "NGO DOC"){
        if (billNum.value == "" || billNum.value == " ") {
            msg=tenNH.value.trim()+": KHÁCH PHẢN ÁNH BỊ NGỘ ĐỘC SAU KHI DÙNG "+ngoDoc.value.trim();
        }
        else msg=tenNH.value.trim()+": KHÁCH PHẢN ÁNH BỊ NGỘ ĐỘC SAU KHI DÙNG "+ngoDoc.value.trim()+" (BILL "+billNum.value.trim()+")";
        //msg2=tenNH.value+" DID NOT DELIVER ##"+giaoThieu.value+"## (BILL "+billNum.value+")";
        //msg2="";
    }
    if (content == "CHAT LUONG"){
        if (billNum.value == "" || billNum.value == " ") {
            msg=tenNH.value.trim()+": KHÁCH PHẢN ÁNH "+vanDe.value.trim();
        }
        else msg=tenNH.value.trim()+": KHÁCH PHẢN ÁNH "+vanDe.value.trim()+" (BILL "+billNum.value.trim()+")";
        //msg2="";
    }
    if (content == "SAI TIEN"){
        if (billNum.value == "" || billNum.value == " ") {
            msg="KHÁCH PHẢN ÁNH "+tenNH.value.trim()+" THỐI SAI TIỀN";
        }
        else msg="KHÁCH PHẢN ÁNH "+tenNH.value.trim()+" THỐI SAI TIỀN (BILL "+billNum.value.trim()+")";
        //msg2=tenNH.value+" DID NOT DELIVER ##"+giaoThieu.value+"## (BILL "+billNum.value+")";
        //msg2="";
    }
    if (content == "CTKM"){
        msg="KHÁCH PHẢN ÁNH "+tenCTKM.value.trim()+" "+vanDe.value.trim();
        //msg2="";
    }
    if (content == "THAI DO"){
        msg=tenNH.value.trim()+": KHÁCH PHẢN ÁNH THÁI ĐỘ PHỤC VỤ CỦA NHÂN VIÊN NHÀ HÀNG";
        //msg2=tenNH.value+": CUSTOMER COMPLAINED ABOUT THE STAFF'S BAD ATTITUDE.";
    }
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'document.getElementById("' + field1 + '").value="'+subject+'";'+
            'document.getElementById("' + field2 + '").value="'+subjectChoice+'";'+
            'document.getElementById("' + field3 + '").value="'+empname.value+'";'+
            'document.getElementById("' + field4 + '").value="'+topic+'";'+ 
            'document.getElementById("' + field5 + '").value="'+sdt.value+'";'+
            'document.getElementById("' + field6 + '").innerHTML="'+msg+'";'+
            'document.getElementById("' + saveBtn + '").click()'});
    });
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
    saveTicket("OTHER", "Orther", LH,"NM: GỌI LẠI BẬN");
};

nosignal.onclick = function() {
    saveTicket("OTHER", "Orther", LH,"K TÍN HIỆU: GỌI LẠI BẬN");
};

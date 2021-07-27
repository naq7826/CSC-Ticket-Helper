//TƯ VẤN - DEFINES
let bogo = document.getElementById('bogo');
let outzone = document.getElementById('outzone');
let stats = document.getElementById('stats');
let preserve = document.getElementById('preserve');
let changeBill = document.getElementById('changeBill');
let cancelBill = document.getElementById('cancelBill');
let ord = document.getElementById('ord');
let bill = document.getElementById('bill');
let menuPrice = document.getElementById('menuPrice');
let meals = document.getElementById('meals');
let noRes = document.getElementById('noRes');
let outOfService = document.getElementById('outOfService');
let voucher = document.getElementById('voucher');
let addPoints = document.getElementById('addPoints');
let payment = document.getElementById('payment');
let lienhe = document.getElementById('lienhe');

//KHIẾU NẠI - DEFINES
let late = document.getElementById('late');
let quality = document.getElementById('quality');
let missing = document.getElementById('missing');
let wrong = document.getElementById('wrong');
let noBill = document.getElementById('noBill');
let late2 = document.getElementById('late2');
let ctkm = document.getElementById('ctkm');
let poison = document.getElementById('poison');
let attitude = document.getElementById('attitude');
let wrongMoney = document.getElementById('wrongMoney');
let burnt = document.getElementById('burnt');

//OTHER - DEFINES
let prank = document.getElementById('prank');
let nosignal = document.getElementById('nosignal');

//OTHER DEFINES
let empname = document.getElementById('name');
let sdt = document.getElementById('sdt');
let datetime = document.getElementById("datetime");
let pasteClip = document.getElementById('pasteClip');
let resetDate = document.getElementById('resetDate');
let counter = document.getElementById('counter');
var coll = document.getElementsByClassName("collapsible");
var i; //FOR LOOP
var elements=document.getElementsByClassName("displayNone");
var elements2=document.getElementsByClassName("disableItems");
var modalGiaoTre = document.getElementById("lateKN");
var span = document.getElementsByClassName("close")[0];
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

//VARIABLES
let field1="Title_fa564e0f-0c70-4ab9-b863-0177e6ddd247_$TextField"; //TV
let field2="Category_6df9bd52-550e-4a30-bc31-a4366832a87d_$DropDownChoice"; //TV Drop list
let field3="From_x0020_Agent_ffa78ce0-7d39-4d92-afe1-311c180f26a9_$TextField"; //Tên NV
let field4="Help_x0020_Topic_9c5a510a-cfe9-401e-8b7e-4b5c10cc8ccb_$DropDownChoice"; //Lý do Drop list
let field5="Phone_x0020_Number_405beb8d-cc55-49e7-8847-17d605fcc077_$TextField"; //Sđt
let field6="Content_f74e7e4c-463c-431b-ae77-6f720e31a3d7_$TextField_inplacerte"; //Nội dung
let field7="DueDate_cd21b4c2-6841-4f9e-a23a-738a65f99889_$DateTimeFieldDate"; //Date
let field8="pcjx_ae7950b0-4487-4846-9c98-8aeea4fb4952_$TextField"; //Text
let saveBtn="ctl00_ctl26_g_d6611ecc_c3e5_47f8_9f1d_ab339e187141_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem";

let KMvMN = "Tư Vấn / Tư Vấn Khuyến Mãi Và Menu."; // Tư Vấn/ Tư Vấn Khuyến Mãi Và Menu
let TVGH = "Tư Vấn / Tư Vấn Giao Hàng."; // Tư vấn/ Tư Vấn Giao Hàng
let TTDH = "Tư Vấn / Tư Vấn Tình Trạng Đơn Hàng."; // Tư vấn/ Tư Vấn Tình Trạng Đơn Hàng
let LH = "Liên Hệ, Góp Ý, Đóng Góp Ý Kiến"; // Liên Hệ, Góp Ý, Đóng Góp Ý Kiến
let GHTre = "Giao Hàng / Trễ Giờ Với Quy Định."; // Giao hàng/ Trễ Giờ Với Quy định
let KCL = "Sản Phẩm / Kém Chất Lượng."; // Sản Phẩm/ Kém Chất Lượng
let TSP = "Giao Hàng / Thiếu Sản Phẩm."; // Sản Phẩm/ Thiếu Sản Phẩm
let APP = "APP / STORELLET";
let TLS = "Thái Độ / Thiếu Lịch Sự.";
let TNT = "Thái Độ / Thiếu Nhiệt Tình.";
let TTHDKCX = "Thanh Toán  Hóa Đơn Không Chính Xác."

let AGENTS= ["KIM LUYEN", "BANG TAM", "THUY DUNG", "ANH QUAN", "TAM AN", "PHUONG ANH", "BAO TRAN", "THANH HOA", "THUC DOAN", "DUC HUY","THAI NGHI","LICH SU", "THUY ANH", "PHAM VY", 
            "MAI ANH", "TUONG VY", "TRAN VI", "YEN NGAN", "MINH HA", "SONG HUONG", "ANH PHAM", "DUC DUY", "ANH KHOA", "THU NGAN", 
            "KHANH NGOC", "GIA HAN", "LE THU", "ANH TUAN", "NHA TRUC", "MI THUONG", "HOAI DUY", "HUYEN TRAN", "QUOC BAO", "PHAM THU", 
            "HONG ANH", "NGOC ANH", "THANH TRUC", "PHUONG LINH", "HUYEN PHUONG", "THU UYEN", "THUY VI", "MY NU", "THAO LINH", 
            "THANH NGUYEN", "VAN LEN", "ANH VI", "THANH TRUYEN", "DUC THINH", "NHAN AI", "PHUONG UYEN", "THUY LINH", "HONG CHAU", "MINH HANH", "CAM TU"];
let BANNED_AGENTS= [""];


//BEGIN


window.onload = function() {
    var date;
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
		if(result.namee != empname.value.trim()) {
			chrome.storage.local.set({'namee': empname.value.trim()});
		    counter.value=0;
		    chrome.storage.local.set({'count': 0});
		    checkAgentName(empname.value.trim());
		}
		else {
			empname.value=empname.value.trim();
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

span.onclick = function() {
    modalGiaoTre.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalGiaoTre) {
      modalGiaoTre.style.display = "none";
    }
    console.log(flag.value);
    if (event.target == modalFooter) {
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
    }
}

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        } 
    });
}

function throwError(element) {
    element.focus();
}

function checkAgentName(agentName) {
    if (agentName == ''){
        for (var j=0; j<elements.length; j++) {
            elements[j].style.display="none";
        }
        for (var j=0; j<elements2.length; j++) {
            elements2[j].disabled = "true";
        }
        document.getElementsByClassName("displayTrue")[0].innerHTML="Nhập tên và nhấn Enter để kích hoạt tool<br><br>Lưu ý: tên phải VIẾT HOA và không thừa dấu cách ở cuối tên.";
        document.getElementsByClassName("displayTrue")[0].removeAttribute('hidden');
		empname.focus();
    }
    else {
        empname.value=agentName;
        if (AGENTS.indexOf(agentName) > -1) {
            if (BANNED_AGENTS.indexOf(agentName) > -1){
                for (var j=0; j<elements.length; j++) {
                    elements[j].style.display="none";
                }
                for (var j=0; j<elements2.length; j++) {
                    elements2[j].disabled = "true";
                }
				if (agentName == "DUC HUY")	{
					document.getElementsByClassName("displayTrue")[0].innerHTML="10k/ngày";
				}
                else {
					document.getElementsByClassName("displayTrue")[0].innerHTML="Tool đã bị tắt cho Agent này theo yêu cầu của Ban Quản Lý CSC.";
				}
                document.getElementsByClassName("displayTrue")[0].removeAttribute('hidden');
				empname.focus();
            }
            else {
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
            document.getElementsByClassName("displayTrue")[0].innerHTML="Agent mới lên line cần sự approve của Ban Quản Lý CSC để sử dụng.";
            document.getElementsByClassName("displayTrue")[0].removeAttribute('hidden');
			empname.focus();
        }
    }
    coll[0].nextElementSibling.style.maxHeight=null;
    coll[1].nextElementSibling.style.maxHeight=null;
    for (i = 0; i < coll.length; i++) {
        coll[i].className = coll[i].className.replace("active","");
    }
}

function saveTicket(subject, subjectChoice, topic, content) {
    var dt = new Date(datetime.value);
    var dtm = dt.getMonth()+1;
    var dtd = dt.getDate();
    var dty = dt.getFullYear();
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
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.executeScript(
                        tabs[0].id,
                        {code: 'document.getElementById("' + field1 + '").value="'+subject+'";'+
                            'document.getElementById("' + field2 + '").value="'+subjectChoice+'";'+
                            'document.getElementById("' + field3 + '").value="'+empname.value+'";'+
                            'document.getElementById("' + field4 + '").value="'+topic+'";'+ 
                            'document.getElementById("' + field5 + '").value="'+sdt.value+'";'+
                            'document.getElementById("' + field6 + '").innerHTML="'+content+'";'+
                            'document.getElementById("' + field7 +'").value="'+dtm+'/'+dtd+'/'+dty+'";'+
                            'document.getElementById("' + saveBtn + '").click()'}); 
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
    saveTicket("TV", "TV", TVGH,"KVGH: K CÓ NH HĐ");
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
            modalGiaoTre.style.display="block";
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
            modalGiaoTre.style.display="block";
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
            modalGiaoTre.style.display="block";
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
            modalGiaoTre.style.display="block";
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
            modalGiaoTre.style.display="block";
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
            modalGiaoTre.style.display="block";
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
            modalGiaoTre.style.display="block";
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
            modalGiaoTre.style.display="block";
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
            modalGiaoTre.style.display="block";
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
            modalGiaoTre.style.display="block";
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
            modalGiaoTre.style.display="block";
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
            modalGiaoTre.style.display="block";
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
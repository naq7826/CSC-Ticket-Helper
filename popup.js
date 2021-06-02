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

//OTHER - DEFINES
let prank = document.getElementById('prank');
let nosignal = document.getElementById('nosignal');

//OTHER DEFINES
let empname = document.getElementById('name');
let sdt = document.getElementById('sdt');
let datetime = document.getElementById("datetime");
let pasteClip = document.getElementById('pasteClip');
let resetDate = document.getElementById('resetDate');
var coll = document.getElementsByClassName("collapsible");
var i; //FOR LOOP
var elements=document.getElementsByClassName("displayNone");
var elements2=document.getElementsByClassName("disableItems");

//VARIABLES
let field1="Title_fa564e0f-0c70-4ab9-b863-0177e6ddd247_$TextField"; //TV
let field2="Category_6df9bd52-550e-4a30-bc31-a4366832a87d_$DropDownChoice"; //TV Drop list
let field3="From_x0020_Agent_ffa78ce0-7d39-4d92-afe1-311c180f26a9_$TextField"; //Tên NV
let field4="Help_x0020_Topic_9c5a510a-cfe9-401e-8b7e-4b5c10cc8ccb_$DropDownChoice"; //Lý do Drop list
let field5="Phone_x0020_Number_405beb8d-cc55-49e7-8847-17d605fcc077_$TextField"; //Sđt
let field6="Content_f74e7e4c-463c-431b-ae77-6f720e31a3d7_$TextField_inplacerte"; //Nội dung
let field7="DueDate_cd21b4c2-6841-4f9e-a23a-738a65f99889_$DateTimeFieldDate"; //Date
let saveBtn="ctl00_ctl26_g_d6611ecc_c3e5_47f8_9f1d_ab339e187141_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem";

let KMvMN = "Tư Vấn / Tư Vấn Khuyến Mãi Và Menu."; // Tư Vấn/ Tư Vấn Khuyến Mãi Và Menu
let TVGH = "Tư Vấn / Tư Vấn Giao Hàng."; // Tư vấn/ Tư Vấn Giao Hàng
let TTDH = "Tư Vấn / Tư Vấn Tình Trạng Đơn Hàng."; // Tư vấn/ Tư Vấn Tình Trạng Đơn Hàng
let LH = "Liên Hệ, Góp Ý, Đóng Góp Ý Kiến"; // Liên Hệ, Góp Ý, Đóng Góp Ý Kiến
let GHTre = "Giao Hàng / Trễ Giờ Với Quy Định."; // Giao hàng/ Trễ Giờ Với Quy định
let KCL = "Sản Phẩm / Kém Chất Lượng."; // Sản Phẩm/ Kém Chất Lượng
let TSP = "Giao Hàng / Thiếu Sản Phẩm."; // Sản Phẩm/ Thiếu Sản Phẩm
let APP = "APP / STORELLET";
let TLS = "Thái Độ/ Thiếu Lịch Sự";
let TTHDKCX = "Thanh Toán Hoá Đơn Không Chính Xác"

let AGENTS= ["KIMLUYEN", "BANGTAM", "THUYDUNG", "ANHQUAN", "TAMAN", "PHUONGANH", "BAOTRAN", "THANHHOA", "THUCDOAN", "DUCHUY","THAINGHI","LICHSU", "THUYANH", "PHAMVY", 
            "MAIANH", "PHUONGNHI", "TUONGVY", "TRANVI", "YENNGAN", "MINHHA", "SONGHUONG", "ANHPHAM", "MYANH", "DUCDUY", "ANHKHOA", "THUNGAN", 
            "KHANHNGOC", "GIAHAN", "LETHU", "ANHTUAN", "NHATRUC", "MITHUONG", "HOAIDUY", "HUYENTRAN", "QUOCBAO", "PHAMTHU", 
            "HONGANH", "NGOCANH", "THANHTRUC", "PHUONGLINH", "HUYENPHUONG", "THUUYEN", "THUYVI", "MYNU", 
            "THANHNGUYEN", "VANLEN", "ANHVI", "THANHTRUYEN", "DUCTHINH"];
let BANNED_AGENTS= [""];

//BEGIN


window.onload = function() {
    var date;
  	chrome.storage.local.get(['namee'], function(result) {
        checkAgentName(result.namee);
	});
    chrome.storage.local.get(['yyyy','mm','dd'], function(result) {
        date=result.yyyy+"-"+result.mm+'-'+result.dd;
        var input = document.getElementById("datetime").value=date;
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
    chrome.storage.local.set({'namee': empname.value});
    checkAgentName(empname.value);
};

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
    }
    else {
        empname.value=agentName;
        if (AGENTS.indexOf(agentName.replaceAll(' ','')) > -1) {
            if (BANNED_AGENTS.indexOf(agentName.replaceAll(' ','')) > -1){
                for (var j=0; j<elements.length; j++) {
                    elements[j].style.display="none";
                }
                for (var j=0; j<elements2.length; j++) {
                    elements2[j].disabled = "true";
                }
                document.getElementsByClassName("displayTrue")[0].innerHTML="Tool đã bị tắt cho Agent này theo yêu cầu của Ban Quản Lý CSC.";
                document.getElementsByClassName("displayTrue")[0].removeAttribute('hidden');
            }
            else {
                for (var j=0; j<elements.length; j++) {
                    elements[j].style.display="";
                }
                for (var j=0; j<elements2.length; j++) {
                    elements2[j].disabled = "";
                }
                document.getElementsByClassName("displayTrue")[0].setAttribute('hidden', 'hidden');
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
            empname.value=agentName;
        }
    }
    coll[0].nextElementSibling.style.maxHeight=null;
    coll[1].nextElementSibling.style.maxHeight=null;
}

function setText(subject, subjectChoice, topic, content) {
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

function setText2(subject, subjectChoice, topic, content, reason) {
    var dt = new Date(datetime.value);
    var dtm = dt.getMonth()+1;
    var dtd = dt.getDate();
    var dty = dt.getFullYear();
    var msg;
    if (reason == "LIEN HE"){
        msg = "Hãy nhập vào lý do KH gọi lên CSC trước khi lưu Ticket!";
    }
    else {
        msg = "Hãy nhập vào các thông tin cần thiết như TÊN NHÀ HÀNG, THỜI GIAN GIAO TRỄ, MÃ BILL,... ĐẦY ĐỦ trước khi lưu Ticket!";
    }
    if (empname.value == "") {
        throwError(empname);
    }
    else {
        if (sdt.value == "") {
            throwError(sdt);
        }
        else {
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
                            'alert("'+msg+'");'}); 
            });
        }
    }
}

//TƯ VẤN
bogo.onclick = function(){
    setText("TV", "TV", KMvMN,"KM: BOGO + GIÁ");
}

outzone.onclick = function() {
    setText("TV", "TV", TVGH,"KVGH: OUTZONE");
};

stats.onclick = function() {
    setText("TV", "TV", TTDH,"TÌNH TRẠNG ĐH");
};

preserve.onclick = function() {
    setText("TV", "TV", LH,"ĐẶT CHỖ");
};

changeBill.onclick = function() {
    setText("TV", "TV", TTDH,"ĐỔI MÓN");
};

cancelBill.onclick = function() {
    setText("TV", "TV", TTDH,"HUỶ ĐH");
};

ord.onclick = function() {
    setText("TV", "TV", LH,"ĐẶT HÀNG TRƯỚC");
};

bill.onclick = function() {
    setText("TV", "TV", LH,"XUẤT HDD");
};

menuPrice.onclick = function() {
    setText("TV", "TV", LH,"MENU: GIÁ");
};

meals.onclick = function() {
    setText("TV", "TV", LH,"MENU: MÓN ĂN");
};

noRes.onclick = function() {
    setText("TV", "TV", TVGH,"KVGH: K CÓ NH HĐ");
};

outOfService.onclick = function() {
    setText("TV", "TV", TVGH,"KVGH: HẾT GIỜ GH");
};

voucher.onclick = function() {
    setText("TV", "TV", LH,"VOUCHER");
};

addPoints.onclick = function() {
    setText("LOYALTY APP", "LOYALTY APP", APP,"TÍCH ĐIỂM");
};

payment.onclick = function() {
    setText("TV", "TV", LH,"HÌNH THỨC TT: TM/CK");
};

lienhe.onclick = function() {
    setText2("TV", "TV", LH,"LIÊN HỆ: ","LIEN HE");
};

//KHIẾU NẠI
late.onclick = function() {
    setText2("KN", "KN", GHTre,"GIAO TRỄ: ____ GIAO TRỄ ____ (BILL ____)","");
};

quality.onclick = function() {
    setText2("KN", "KN", KCL,"CHẤT LƯỢNG SP: NH NÀO VẤN ĐỀ LÀ GÌ (BILL ____)","");
};

missing.onclick = function() {
    setText2("KN", "KN", TSP,"THIẾU SP: ____ GIAO THIẾU ____ (BILL ____)","");
};

wrong.onclick = function() {
    setText2("KN", "KN", TTDH,"SAI ORDER: ____ GIAO SAI ____ (BILL ____)","");
};

noBill.onclick = function() {
    setText2("KN", "KN", LH,"CHƯA XUẤT HDD: ____ CHƯA XHDD NGÀY ____ (BILL ____)","");
};

late2.onclick = function() {
    setText2("KN", "KN", GHTre,"GIAO TRỄ KHÁCH GỌI NHIỀU LẦN: ____ GIAO TRỄ ____ (BILL ____)","");
};

poison.onclick = function() {
    setText2("KN", "KN", LH,"NGỘ ĐỘC TP: NH NÀO VẤN ĐỀ LÀ GÌ (BILL ____)","");
};

ctkm.onclick = function() {
    setText2("KN", "KN", LH,"CTKM: TÊN CTKM + VẤN ĐỀ","");
};

attitude.onclick = function() {
    setText2("KN", "KN", TLS,"THÁI ĐỘ PV: TÊN NH + VẤN ĐỀ","");
};

wrongMoney.onclick = function() {
    setText2("KN", "KN", TTHDKCX,"THANH TOÁN: TÊN NH + THỐI SAI TIỀN / NV KHÔNG MANG TIỀN THỐI (BILL ____)","");
};

//OTHER
prank.onclick = function() {
    setText("OTHER", "Orther", LH,"NM: GỌI LẠI BẬN");
};

nosignal.onclick = function() {
    setText("OTHER", "Orther", LH,"K TÍN HIỆU: GỌI LẠI BẬN");
};
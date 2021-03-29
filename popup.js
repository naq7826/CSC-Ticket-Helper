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
let BOGO = document.getElementById('BOGO');
let poison = document.getElementById('poison');

//OTHER - DEFINES
let prank = document.getElementById('prank');
let nosignal = document.getElementById('nosignal');

//OTHER DEFINES
let empname = document.getElementById('name');
let sdt = document.getElementById('sdt');
let datetime = document.getElementById("datetime");
let pasteClip = document.getElementById('pasteClip');
var coll = document.getElementsByClassName("collapsible");
var i; //FOR LOOP

//VARIABLES
let field1="Title_fa564e0f-0c70-4ab9-b863-0177e6ddd247_$TextField"; //TV
let field2="Category_6df9bd52-550e-4a30-bc31-a4366832a87d_$DropDownChoice"; //TV Drop list
let field3="From_x0020_Agent_ffa78ce0-7d39-4d92-afe1-311c180f26a9_$TextField"; //Tên NV
let field4="Help_x0020_Topic_9c5a510a-cfe9-401e-8b7e-4b5c10cc8ccb_$DropDownChoice"; //Lý do Drop list
let field5="Phone_x0020_Number_405beb8d-cc55-49e7-8847-17d605fcc077_$TextField"; //Sđt
let field6="Content_f74e7e4c-463c-431b-ae77-6f720e31a3d7_$TextField_inplacerte"; //Nội dung
let field7="DueDate_cd21b4c2-6841-4f9e-a23a-738a65f99889_$DateTimeFieldDate"; //Date
let saveBtn="ctl00_ctl26_g_d6611ecc_c3e5_47f8_9f1d_ab339e187141_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem";

let KMvMN = "Tư Vấn / Tư Vấn Khuyến Mãi Và Menu." // Tư Vấn/ Tư Vấn Khuyến Mãi Và Menu
let TVGH = "Tư Vấn / Tư Vấn Giao Hàng." // Tư vấn/ Tư Vấn Giao Hàng
let TTDH = "Tư Vấn / Tư Vấn Tình Trạng Đơn Hàng." // Tư vấn/ Tư Vấn Tình Trạng Đơn Hàng
let LH = "Liên Hệ, Góp Ý, Đóng Góp Ý Kiến" // Liên Hệ, Góp Ý, Đóng Góp Ý Kiến
let GHTre = "Giao Hàng / Trễ Giờ Với Quy Định." // Giao hàng/ Trễ Giờ Với Quy định
let KCL = "Sản Phẩm / Kém Chất Lượng." // Sản Phẩm/ Kém Chất Lượng
let TSP = "Giao Hàng / Thiếu Sản Phẩm." // Sản Phẩm/ Thiếu Sản Phẩm
let APP = "APP / STORELLET"

//BEGIN


window.onload = function() {
  	chrome.storage.local.get(['namee'], function(result) {
        empname.value=result.namee;
	});   
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		var tab = tabs[0].url.toString();
		if (!tab.includes("NewForm") && tab.includes("phvsgnfilesrv")) {
			chrome.tabs.executeScript(
			tabs[0].id,
			{code: 'document.getElementById("idHomePageNewItem").click();'});
		}
	});
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth()+1;
    if (d < 10) {
        d = "0"+d;
    }
    if (m < 10) {
        m = "0"+m;
    }
    var y = date.getFullYear();
    var input = document.getElementById("datetime").value=y+"-"+m+"-"+d;
  	var input = document.getElementById("sdt").focus();
}

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (!tab.title.includes("New Item")) {
			window.close();
		}
});

empname.onchange = function(){
    chrome.storage.local.set({'namee': empname.value});
};

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
                            'document.getElementById("' + field7 +'").value="'+dtm+'/'+dtd+'/'+dty+'";'}); 
            });
        }
    }
    if (reason == "LIEN HE") {
        alert('Hãy nhập vào lý do KH gọi lên CSC ĐẦY ĐỦ trước khi lưu Ticket!');
    }
    else {
        alert('Hãy nhập vào các thông tin cần thiết như TÊN NHÀ HÀNG, THỜI GIAN GIAO TRỄ, MÃ BILL,... ĐẦY ĐỦ trước khi lưu Ticket!"');
    }
    window.close();
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
    setText("TV", "TV", TVGH,"KVGH: NH HẾT GIỜ HĐ");
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

BOGO.onclick = function() {
    setText2("KN", "KN", LH,"BOGO NEW SCHEME: GÓP Ý/PHÀN NÀN CỦA KHÁCH LÀ GÌ","");
};

//OTHER
prank.onclick = function() {
    setText("OTHER", "Orther", LH,"NM: GỌI LẠI BẬN");
};

nosignal.onclick = function() {
    setText("OTHER", "Orther", LH,"K TÍN HIỆU: GỌI LẠI BẬN");
};
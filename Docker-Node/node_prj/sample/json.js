var t = {
    aa: 10,
    bb: 20,
    cc: [10,20,30],
    dd: {
        zz: 10,
        yy: 430
    }
};

var PC = {
    "PC": {
        "HOSTNAME": "mkmgmt02",
        "MB" : {
            "SOCKET" : "",
            "CHIPSET" : "Intel Z860",
            "MemorySlot" : {
                "Total": "32GB",
                "規格": "LPDDR4",
                "スロット数": 4,
                "搭載メモリ": [
                    {
                        "メーカー": "Sumsng1",
                        "容量(GB)": 8,
                        "型番": "SUMDDR4LP08" 
                    },
                    {
                        "メーカー": "Sumsng2",
                        "容量(GB)": 8,
                        "型番": "SUMDDR4LP08",
                        "シリアル": "ABCDEFG"
                    },
                    {
                        "メーカー": "Sumsng3",
                        "容量(GB)": 80,
                        "型番": "SUMDDR4LP08",
                        "シリアル": "ABCDEFGu"
                    },
                    {
                        "メーカー": "Sumsng4",
                        "容量(GB)": 8,
                        "型番": "SUMDDR4LP08" 
                    }
                ]
            }
        },
        "PSU" : {},
        "STORAGE" : {
            "Description": "NVMe SATA 対応です",
            "搭載ストレージ" :
            [
                {
                    "SizeGB": "500",
                    "Type": "NVMe",
                    "搭載先": "NVMe Slot1"
                },
                {
                    "SizeGB": "6000",
                    "Type": "HDD",
                    "搭載先": "SATA port1"
                }
            ]
        }
    }
};


// {"aa":10,"bb":20,"cc":[10,20,30],"dd":{"zz":10,"yy":430}} 文字列に変換
if (0) {
a = JSON.stringify(t);
console.log(a);
console.log(a.length);

b = JSON.parse(a);

console.log(b.dd.yy);
console.log(t.dd.yy);
}


hostname = PC.PC.HOSTNAME;
obj = PC.PC.MB.MemorySlot['搭載メモリ'];

/*
sum = 0;
for (i=0; i<obj.length; i++) {
    sum += obj[i]["容量(GB)"];
}
*/

for (i=0; i<obj.length; i++) {
    if (obj[i]['シリアル'] != undefined) {
        console.log(obj[i]['シリアル']);
    } else {
        console.log("シリアルがない(ホスト" + hostname + ") " + obj[i]['メーカー']);
    }
}


webapi_res = JSON.stringify(PC);
pcobj = JSON.parse(webapi_res);

console.log (pcobj.PC.HOSTNAME);




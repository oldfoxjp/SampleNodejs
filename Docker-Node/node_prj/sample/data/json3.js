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
                        "容量(GB)": 11,
                        "型番": "SUMDDR4LP08" 
                    },
                    {
                        "メーカー": "Sumsng2",
                        "容量(GB)": 22,
                        "型番": "SUMDDR4LP08",
                        "シリアル": "ABCDEFG"
                    },
                    {
                        "メーカー": "Sumsng3",
                        "容量(GB)": 33,
                        "型番": "SUMDDR4LP08",
                        "シリアル": "ABCDEFGu"
                    },
                    {
                        "メーカー": "Sumsng4",
                        "容量(GB)": 44,
                        "型番": "SUMDDR4LP08" ,
                        "シリアル": "hskjskjhafkj"
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

obj = PC['PC']['MB']['MemorySlot']['搭載メモリ'];

const TH = 30;
let sum = 0;
let ary = new Array();
let tmpAry = new Array();
for (i=0; i<obj.length; i++) {
    value = obj[i]['容量(GB)'];

    if (value >= TH) {
        console.log ('slot no.' + i + ' 容量:' + value + ' シリアル:' + obj[i]['シリアル']);
        sum += value;
        ary.push (obj[i]);
        tmpAry.push ({'slot': i, 'value': value});
    }
}

console.log (sum);

"use strict";
// enum
// numeric enums
// enum Month {
//     JAN = 1,
//     FEB = 100,
//     MAR,
//     APR,
//     MEI,
//     JUN,
//     JUL,
//     AUG,
//     SEP,
//     OKT,
//     NOV,
//     DEC
// }
// console.log(Month.FEB);
// string enum
var Month;
(function (Month) {
    Month["JAN"] = "Januari";
    Month["FEB"] = "Februari";
    Month["MAR"] = "Maret";
    Month["APR"] = "April";
    Month["MEI"] = "Mei";
    Month["JUN"] = "Juni";
    Month["JUL"] = "Juli";
    Month["AUG"] = "Agustus";
    Month["SEP"] = "September";
    Month["OKT"] = "Oktober";
    Month["NOV"] = "November";
    Month["DEC"] = "Desember";
})(Month || (Month = {}));
console.log(Month.MAR);

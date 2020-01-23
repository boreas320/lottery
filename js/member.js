var member = [];
var total = config.total;
var digit = 0;
var tmpTotal = total;
while (tmpTotal > 0) {//此处是为了确定展示位数digit, tmpTotal只是用来控制循环的临时变量不会被后面的计算用到
    digit++;
    tmpTotal = parseInt(tmpTotal / 10);
}
for (var i = 1; i <= total; i++) {

    var mem = {"name": "" + (Array(digit).join(0) + i).slice(-digit)};
    member.push(mem);
}



var member = [];
var total = config.total;
var digit = 0;
var tmpTotal = total;
while (tmpTotal > 0) {
    digit++;
    tmpTotal = parseInt(tmpTotal / 10);
}
for (var i = 1; i <= total; i++) {

    var mem = {"name": "" + (Array(digit).join(0) + i).slice(-digit)};
    member.push(mem);
}



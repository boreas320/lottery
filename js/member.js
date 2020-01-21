var member = [];
for (var i = 1; i <= 450; i++) {
    var digit = 3;
    var mem = {"name": "" + (Array(digit).join(0) + i).slice(-digit)};
    member.push(mem);
}



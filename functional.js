var days = 4;
var transport = 150;

function getTotalTransport(days, transport) {
    return days * transport*2;
}

var totalTransport = getTotalTransport(days, transport);

console.log(totalTransport);
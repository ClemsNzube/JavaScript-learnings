var transport = {
    days: 4,
    price: 150,

    getTotalTransport: function() {
        var totalTransports = transport.days * transport.price * 2;
        console.log("getTotalTransport:", totalTransports);
    }
    
}

transport.getTotalTransport();
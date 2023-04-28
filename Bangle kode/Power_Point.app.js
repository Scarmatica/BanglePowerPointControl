g.clear();
g.flip();
g.drawString('Connecting...',30,70,true);
NRF.on('connect', function() {
  g.clear();
  g.setFont("6x8",3);g.setFontAlign(-1,-1);
  g.drawString('Connected',30,70,true);
  setWatch(function() {
    g.clear();
    g.flip();
    (function(){
      var gatt;
      var text = 'LED.toggle()'+"\n";
      NRF.requestDevice({ filters: [{ name: "Puck.js ABCD" }] }).then(function(device) {
      return device.gatt.connect();
    }).then(function(g) {
        gatt = g;
        return g.getPrimaryService("6e400001-b5a3-f393-e0a9-e50e24dcca9e");
      }).then(function(s) {
        return s.getCharacteristic("6e400002-b5a3-f393-e0a9-e50e24dcca9e");
      }).then(function(c) {
        function sender(resolve, reject) {
          if (text.length) {
            var d = text.substr(0,20);
            text = text.substr(20);
            c.writeValue(d).then(function() {
              sender(resolve, reject);
            },reject);
          } else  {
            resolve();
          }
        }
        return new Promise(sender);
      }).then(function() {
        return gatt.disconnect();
      }).then(function() {

      });
    })(); }, BTN1, {"repeat":true,"edge":"rising","debounce":10});
});

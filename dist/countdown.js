var countdown = function (date, ids){
  var _second = 1000,
      _minute = _second * 60,
      _hour = _minute * 60,
      _day = _hour * 24;

  var date = new Date(date),
      timer,

  calculate = function(){
    var now = new Date();
    var remaining = date.getTime() - now.getTime();
    var data;

    if(isNaN(date)){
      console.log("Invalid date/time");
      return;
    }

    if(remaining <= 0){
      callback();
      return;
    } else {
      if(!timer){
        timer = setInterval(calculate, _second);
      }
    }

    data = {
      'days': Math.floor(remaining / _day),
      'hours': Math.floor((remaining % _day) / _hour ),
      'minutes': Math.floor((remaining % _hour) / _minute),
      'seconds': Math.floor((remaining % _minute) / _second)
    }

   if(ids.length){
     for(x in ids){
       var i = ids[x];
       document.getElementById(i).innerHTML = data[i];
     }
   }
  }

calculate();

}

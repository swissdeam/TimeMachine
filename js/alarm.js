var alarms=[];
function printAlarm(){
    
    let inner="";
    alarms.forEach((item,index)=>{
        enable = item.isEnable == 1?"green":"red";
        inner = inner + 
            "<li> <span class='" + enable + "'>" + 
            item.time + 
            " </span> - "+
            "<a href='#' class='off' data-index='" + index + "'>Выкл.</a> / "+
            "<a href='#' class='on' data-index='" + index + "'>Вкл.</a> / "+
            "</li>";
    });
    $('.alarms-list').html(inner);
    $('.alarms-list').on('click','.off',(e)=>{
        let idx = $(e.target).data('index');
        alarms[idx].isEnable = 0;
        printAlarm();
    });
    $('.alarms-list').on('click','.on',(e)=>{
        let idx = $(e.target).data('index');
        alarms[idx].isEnable = 1;
        printAlarm();
    });
}
$( document ).ready(function() {
    $('.add-alarm').click(function(){
        alarms.push({time:$('input[name="time"]').val(),isEnable:1});
        printAlarm();
    });
});

function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function getCurrentTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    // add a zero in front of numbers<10
    h = checkTime(h);
    m = checkTime(m);
    return h + ":" + m;
  }
  
setInterval(()=>{
    alarms.forEach((item)=>{
        if(getCurrentTime() == item.time && item.isEnable == 1)
            alert("Сработал будильник в " + item);
    });
},60000);

module.exports = { checkTime }
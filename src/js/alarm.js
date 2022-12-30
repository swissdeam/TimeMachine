/**
 * @file скрипт для страницы с будильниками
 * @author Evgenii Reshetnikov
 */

/**
 * @description переменная alarms, массив будильников
 */
var alarms=[];


/**
 * @description printAlarm() function places layout of alarm on the page
 */
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


//
/**
 * @description checkTime() add "0" to each number of time for special time-format
 * @param (string) i-время.
 */
function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

/**
 * @description getCurrentTime() takes minute and hour from system and places them into time-format
 */
  function getCurrentTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    // add a zero in front of numbers<10
    h = checkTime(h);
    m = checkTime(m);
    return h + ":" + m;
  }

/**
 * @description setInterval check each alarm if its time is equal current time
 */
    setInterval(()=>{
    alarms.forEach((item)=>{
        if(getCurrentTime() == item.time && item.isEnable == 1)
            alert("Сработал будильник в " + item);
    });
},60000);

module.exports = { checkTime }
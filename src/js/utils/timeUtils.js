/**
 * 获取当前时间 格式：yyyy-MM-dd HH:MM
 */
function getCurrentTime() {
    var date = new Date();//当前时间
    var month = zeroFill(date.getMonth() + 1);//月
    var day = zeroFill(date.getDate());//日
    var hour = zeroFill(date.getHours());//时
    var minute = zeroFill(date.getMinutes());//分
    
    //当前时间
    var curTime = date.getFullYear() + "-" + month + "-" + day
            + " " + hour + ":" + minute;
    
    return curTime;
}
 
/**
 * 补零
 */
function zeroFill(i){
    if (i >= 0 && i <= 9) {
        return "0" + i;
    } else {
        return i;
    }
}

/**
 * 获取yyyy-MM-dd HH:MM格式的时间中的年月日小时分钟
 */
function spiltTimeFromType(time, type) {
    var str = ""
    if (type == "year") {
        str = time.substr(0, 4)
    } else if (type == "month") {
        str = time.substr(5, 2)
    } else if (type == "day") {
        str = time.substr(8, 2)
    } else if (type == "hour") {
        str = time.substr(11, 2)
    } else {
        str = time.substr(14, 2)
    }
    return Number(str)
}

export {
    getCurrentTime,
    spiltTimeFromType
}
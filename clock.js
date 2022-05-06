function makeHands(){
    //创建时针
    var sh = document.createElement('div')
    var mh = document.createElement('div')
    var hh = document.createElement('div')

    sh.className ='second-hand'
    mh.className ='minute-hand'
    hh.className = 'hour-hand'

    var clock =document.querySelector('.clock')
    clock.appendChild(sh)
    clock.appendChild(mh)
    clock.appendChild(hh)
    //获取时间
    var now = new Date()
    var hours = now.getHours()
    var minutes =now.getMinutes()
    var seconds = now.getSeconds()
    //重置第一次时间
    if(hours>12){
        hours = hours - 12
    }

    var secondDge = seconds / 60 * 360
    var minuteDge = (minutes * 60 + seconds)/ 3600 * 360
    var hourDge = (hours * 3600 + minutes * 60 + seconds)/ (12 * 3600) * 360

    sh.style.transform = `rotate(${secondDge-90}deg)`
    mh.style.transform = `rotate(${minuteDge-90}deg)`
    hh.style.transform = `rotate(${hourDge-90}deg)`
}


function step(){
    var now = new Date()
    var hours = now.getHours()
    var minutes =now.getMinutes()
    var seconds = now.getSeconds()

    if(hours>12){
        hours = hours - 12
    }

    var secondDge = seconds / 60 * 360
    var minuteDge = (minutes * 60 + seconds)/ 3600 * 360
    var hourDge = (hours * 3600 + minutes * 60 + seconds)/ (12 * 3600) * 360


    //不重置角度直接加角度
    function handsDeg(hands){
        let s1 = document.querySelector(hands).style.transform
        let s1index = s1.indexOf('(')
        let s1IastIndex = s1.lastIndexOf('deg)')
        let s1NumberString = s1.substring(s1index+1,s1IastIndex)
        return s1NumberString
    }

    //改变角度
    document.querySelector('.second-hand').style.transform = `rotate(${+handsDeg('.second-hand')+6}deg)`
    document.querySelector('.minute-hand').style.transform = `rotate(${+handsDeg('.minute-hand')+0.1}deg)`
    document.querySelector('.hour-hand').style.transform = `rotate(${+handsDeg('.hour-hand')+0.01}deg)`
}


makeHands()
setInterval(function(){
    step()
},1000)



function setTime(){
    let myDate = new Date()
//时间
    let hours = myDate.getHours();
    let minutes = myDate.getMinutes();
    let seconds = myDate.getSeconds();
    if(hours < 10){
        hours = '0'+hours
    }
    if(minutes < 10){
        minutes = '0'+minutes
    }
    if(seconds < 10){
        seconds = '0'+seconds
    }
    let hoursMinutes =document.querySelector('.hours-minutes')
    hoursMinutes.innerHTML = hours+':'+minutes;
    let classSeconds = document.querySelector('.seconds')
    classSeconds.innerHTML = ':'+seconds;
//日期
    let years = myDate.getFullYear();
    let months = myDate.getMonth()+1;
    let toDay = myDate.getDate()
    if(months < 10){
        months = '0'+months
    }
    if(toDay < 10){
        toDay = '0'+toDay
    }
    let classDay = document.querySelector('.day')
    classDay.innerHTML = years+'-'+months+'-'+toDay;


//星期
   let week = myDate.getDay()
   if(week === 0){
       week = '星期天'
   } else if(week === 1){
       week = '星期一'
   }else if(week === 2){
       week = '星期二'
   }else if(week === 3){
       week = '星期三'
   }else if(week === 4){
       week = '星期四'
   }else if(week === 5){
       week = '星期五'
   }else if(week === 6){
       week = '星期六'
   }
    let classWeek = document.querySelector('.week')
    classWeek.innerHTML = week;
}


setInterval(function(){setTime()},1000)



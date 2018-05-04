    let audio = new Audio('http://k003.kiwi6.com/hotlink/rp4oqnc06k/Marty_-_Granpa_s_Little_Train_Song.mp3')
    audio.autoplay = true
    audio.loop = true
    // function getMusic(){
    //     var xhr = new XMLHttpRequest()
    //     xhr.open('GET','music.json',true)
    //     xhr.onload = function(){
    //         if((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304){
    //             let music = JSON.parse(xhr.responseText)
    //             audio.src = music[0].src
    //             console.log(music[0].src)
    //         }else{
    //             console.log('获取数据失败')
    //         }
    //     }
    //     xhr.onerror = function(){
    //         console.log('网络异常')
    //     }
    //     xhr.send()
    // }
    // getMusic()

    function writeCode(prefix, code, fn){
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let timer = setInterval(() =>{
            n += 1
            container.innerHTML = code.substring(0,n)
            styleTag.innerHTML = code.substring(0,n)
            container.scrollTop = container.scrollHeight
            if(n >= code.length){
                window.clearInterval(timer)
                fn && fn.call()
            }
        })
    }
    let code = `/* 画一只小猪佩奇给你看 */

    /* 首先画佩奇的眼睛,先画左眼 */
    
    .left_eye,.right_eye {
        width: 35px;
        height: 35px;
        background: #EB8DC2;
        border-radius: 50%;
        z-index: 1;
    }
    .left_eye {
        top: 44px;
        left: 86px;
    }
    .eyes::after,.eyes::before {
        position: absolute;
        content: "";
        background: #FDFDFD;
        border-radius: 47%;
        border: 11px solid #FDFDFD;
        z-index: 1;
    }
    .eyes::before {
        width: 11px;
        height: 12px;
        top: 50px;
        left: 92px;
    }
    .left_pupil,.right_pupil {
        height: 11px;
        width: 10px;
        background: #000;
        border-radius: 47%;
        transform: rotate(40deg);
        z-index: 2;
    }
    .left_pupil {
        top: 56px;
        left: 100px;
    }
    
    /* 画右眼 */
    
    .right_eye {
        top: 58px;
        left: 130px;
    }
    .eyes::after {
        width: 12px;
        height: 13px;
        top: 64px;
        left: 137px;
        transform: rotate(20deg);
        z-index: 1;
    }
    .right_pupil {
        top: 70px;
        left: 146px;
    }
    
    /* 接下来画佩奇的脸 */
    
    .face {
        top: 40px;
        left: 70px;
        z-index: -1;
        width: 147px;
        height: 150px;
        background: #FFB0DF;
        border: 7px solid #EB8DC2;
        border-bottom-left-radius: 220px;
        border-top-right-radius: 350px;
        border-bottom-right-radius: 235px;
        border-top-left-radius: 180px;
        transform: rotate(18deg);
    }
    
    /* 把脸画胖一点*/
    
    .bottom_face {
        top: 75px;
        left: 62px;
        height: 121px;
        width: 149px;
        background-color: #FFB0DF;
        border-radius: 50%;
        border: 7px solid #EB8DC2;
        border-bottom: 7px solid transparent;
        transform: rotate(180deg)
    }
    .right_face {
        top: 108px;
        left: 144px;
        width: 85px;
        height: 40px;
        border-bottom: 4px solid #FFB0DF;
        border-radius: 50%;
        background-color: #FFB0DF;
        transform: rotate(-85.5deg);
    }
    .left_face {
        top: 83px;
        left: 67px;
        width: 27px;
        height: 26px;
        border-radius: 50%;
        background-color: #FFB0DF;
        z-index: 3;
    }
    
    /* 接下来画佩奇的鼻子 */
    
    .nose {
        top: 22px;
        left: 18px;
        height: 70px;
        width: 51px;
        background-color: #FFB0DF;
        border: 7px solid #EB8DC2;
        border-radius: 50%;
        transform: rotate(29deg);
    }
    .bottom_nose {
        top: 52px;
        left: 38px;
        width: 42px;
        height: 77px;
        border-left: 7px solid #EB8DC2;
        border-top: 7px solid #EB8DC2;
        background-color: #FFB0DF;
        border-radius: 50% 50% 50% 50% / 100% 100% 0% 0%;
        transform: rotate(-67deg);
        z-index: -2;
    }
    .top_nose {
        top: -1px;
        left: 44px;
        width: 68px;
        height: 105px;
        border-right: 7px solid #EB8DC2;
        border-top: 7px solid #EB8DC2;
        border-left: 2px solid transparent;
        background-color: #FFB0DF;
        border-radius: 50% 50% 50% 50% / 100% 100% 0% 0%;
        transform: rotate(-73deg);
        z-index: -1;
    }
    
    /* 画鼻孔 */
    
    .left_nostril,.right_nostril {
        width: 11px;
        height: 12px;
        background-color: #D667A9;
        border-radius: 50%;
        transform: rotate(39deg);
    }
    .left_nostril {
        top: 47px;
        left: 29px;
    }
    .right_nostril {
        top: 51px;
        left: 45px;
    }
    
    /* 让脸蛋更红一点 */
    
    .cheek {
        top: 94px;
        left: 154px;
        width: 45px;
        height: 50px;
        background-color: #FF8CD1;
        border-radius: 50%;
        transform: rotate(24deg);
    }
    
    /* 让佩奇笑起来 */
    
    .mouth {
        top: 82px;
        left: 76px;
        width: 80px;
        height: 71px;
        background-color: transparent;
        border-bottom: 2px solid transparent;
        border-right: 8px solid #D8468F;
        border-top: 4px solid transparent;
        border-radius: 50%;
        transform: rotate(100deg);
    }
    .left_mouth,.right_mouth {
        background-color: #D8468F;
        border-radius: 50%;
        transform: rotate(100deg);
    }
    .left_mouth {
        width: 5px;
        height: 3px;
        top: 129px;
        left: 81px;
    }
    .right_mouth {
        width: 7px;
        height: 5px;
        top: 141px;
        left: 135px;
    }
    
    /* 接着画佩奇的耳朵 */
    
    .left_ear,.right_ear{
        width: 31px;
        height: 52px;
        background-color: #FFB0DF;
        border: 7px solid #EB8DC2;
        border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
        z-index: -2;
    }
    .left_ear {
        top: -2px;
        left: 141px;
        transform: rotate(200deg);
    }
    .right_ear {
        top: 16px;
        left: 173px;
        transform: rotate(222deg);
    }
    
    /* 画佩奇的小裙子 */
    
    .dress {
        top: 141px;
        left: 48px;
        width: 180px;
        height: 154px;
        background-color: #E9565E;
        border: 8px solid #E3353F;
        border-bottom: none;
        border-radius: 50% 50% 50% 50% / 100% 100% 0% 0%;
        z-index: -2;
    }
    .bottom_dress {
        top: 277px;
        left: 48px;
        width: 180px;
        height: 37px;
        border-radius: 22%;
        background: #E9565E;
        border: 8px solid #E3353F;
        z-index: -3;
    }
    
    /* 接着画佩奇的腿 */
    
    .left_leg,.right_leg{
        width: 10px;
        height: 42px;
        background-color: #FCB8E1;
        z-index: -4;
    }
    .left_leg {
        top: 311px;
        left: 102px;
    }
    .left_foot .bottom_of_foot,.top_of_foot{
        background-color: #000;
        border-radius: 5px;
    }
    .left_foot .bottom_of_foot,.right_foot .bottom_of_foot{
        width: 43px;
        height: 7px;
        border-bottom: 1px solid black;
        transform: rotate(-1deg);
    }
    .left_foot .bottom_of_foot{
        top: 354px;
        left: 70px;
    }
    .left_foot .top_of_foot,.right_foot .top_of_foot{
        width: 40px;
        height: 5px;
        transform: rotate(6.2deg);
    }
    .left_foot .top_of_foot {
        top: 350px;
        left: 70px;
    }
    .left_foot .left_of_foot,.right_of_foot{
        border-radius: 50%;
        background-color: #000;
        border-bottom: 1px solid black;
    }
    .left_foot .left_of_foot,.right_foot .left_of_foot{
        width: 22px;
        height: 13px;
    }
    .left_foot .left_of_foot {
        top: 348px;
        left: 64px;
    }
    .left_foot .right_of_foot,.right_foot .right_of_foot{
        width: 8px;
        height: 8px;
    }
    .left_foot .right_of_foot {
        top: 352px;
        left: 106px;
    }
    
    /* 右腿 */
    
    .right_leg {
        top: 311px;
        left: 166px;
    }
    .right_foot .bottom_of_foot,.top_of_foot{
        background-color: #000;
        border-radius: 5px;
    }
    .right_foot .bottom_of_foot {
        top: 355px;
        left: 136px;
    }
    
    .right_foot .top_of_foot {
        top: 351px;
        left: 138px;
    }
    .right_foot .left_of_foot,.right_of_foot{
        background-color: #000;
        border-bottom: 1px solid black;
        border-radius: 50%;
    }
    .right_foot .left_of_foot {
        top: 349px;
        left: 131px;
    }
    .right_foot .right_of_foot {
        top: 353px;
        left: 172px;
    }
    
    /* 接下来画佩奇的手 */
    
    .left_hand,.right_hand{
        height: 10px;
        background-color: #FDB6E0;
        border-radius: 5px;
        border-bottom-right-radius: 50%;
        border-bottom-left-radius: 50%;
    }
    .left_hand {
        top: 215px;
        left: 0;
        width: 75px;
        transform: rotate(156deg);
        z-index: -4;
    }
    .right_hand {
        top: 215px;
        left: 206px;
        width: 65px;
        transform: rotate(204deg);
    }
    .finger1,.finger2,.finger3,.finger4,.finger5{
        height: 8px;
        background-color: #FDB6E0;
        border-radius: 5px;
    }
    .finger1 {
        top: 219px;
        left: 0;
        width: 22px;
        border-top-left-radius: 50%;
        border-top-right-radius: 35%;
        transform: rotate(16deg);
    }
    .finger2 {
        top: 232px;
        left: 11px;
        width: 18px;
        border-bottom-right-radius: 50%;
        transform: rotate(105deg);
    }
    .finger3 {
        top: 232px;
        left: 258px;
        width: 18px;
        border-bottom-right-radius: 50%;
        border-bottom-left-radius: 50%;
        transform: rotate(38deg);
    }
    .finger4 {
        top: 222px;
        left: 256px;
        width: 22px;
        border-top-left-radius: 35%;
        border-top-right-radius: 50%;
        transform: rotate(-18deg);
    }
    .finger5 {
        top: 234px;
        left: 247px;
        width: 18px;
        border-top-right-radius: 50%;
        transform: rotate(75deg);
    }
    
    /* 最后画佩奇的尾巴 */
    
    .left_tail {
        top: 237px;
        left: 214px;
        height: 54px;
        width: 27px;
        border: 8px solid #FDB6E0;
        border-right: 7px solid transparent;
        background-color: transparent;
        border-radius: 50%;
        transform: rotate(-80deg);
        z-index: -4;
    }
    .right_tail {
        top: 251px;
        left: 237px;
        height: 38px;
        width: 27px;
        background-color: transparent;
        border: 8px solid #FDB6E0;
        border-left: 7px solid transparent;
        border-top: 9px solid transparent;
        border-radius: 50%;
        transform: rotate(100deg);
    }
    .top_tail {
        top: 257px;
        left: 231px;
        height: 27px;
        width: 24px;
        background-color: transparent;
        border: 6px solid transparent;
        border-top: 8px solid #FDB6E0;
        border-radius: 50%;
    }
    .bottom_tail {
        top: 273px;
        left: 257px;
        width: 10px;
        height: 8px;
        background-color: #FDB6E0;
        border-radius: 50%;
        transform: rotate(100deg);
    }
    
    /* 阴影部分 */
    
    .shadow {
        top: 341px;
        left: 25px;
        width: 205px;
        height: 31px;
        background-color: #589454;
        border-radius: 50%;
        z-index: -5;
    }`
    writeCode('',code)
   

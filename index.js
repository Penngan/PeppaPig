!function(){
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
        },10)
    }
    let code = `#peppa{
        position: relative;
        width: 280px;
        height: 382px;
    }
    #peppa *{
        position: absolute;
    }
    /* 眼睛 */
    .left_eye,.right_eye{
        width: 35px;
        height: 35px;
        background:#EB8DC2;
        border-radius:50%;
        z-index: 1;
    }
    .left_eye{
        top:44px;
        left: 86px;
    }
    .right_eye{
        top:58px;
        left:130px;
    }
    .left_pupil,.right_pupil{
        height: 11px;
        width: 10px;
        background: #000;
        border-radius: 47%;
        transform: rotate(40deg);
        z-index: 2;
    }
    .left_pupil{
        top: 56px;
        left: 100px;
    }
    .right_pupil{
        top: 70px;
        left: 146px;
    }
    .eyes::after,.eyes::before{
        position: absolute;
        content: "";
        background:#FDFDFD;
        border-radius: 47%;
        border:11px solid #FDFDFD;
        z-index: 1;
    }
    .eyes::before{
        width: 11px;
        height: 12px;
        top: 50px;
        left: 92px;
    }
    .eyes::after{
        width: 12px;
        height: 13px;
        top: 64px;
        left: 137px;
        transform: rotate(20deg);
        z-index: 1;
    }
    /* 脸 */
    .face{
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
    .bottom_face{
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
    .right_face{
        top: 108px;
        left: 144px;
        width: 85px;
        height: 40px;
        border-bottom: 4px solid #FFB0DF;
        border-radius: 50%;
        background-color: #FFB0DF;
        transform: rotate(-85.5deg);
    }
    .left_face{
        top: 83px;
        left: 67px;
        width: 27px;
        height: 26px;
        border-radius: 50%;
        background-color: #FFB0DF;
        z-index: 3;
    }
    /* 鼻子 */
    .nose{
        top: 22px;
        left: 18px;
        height: 70px;
        width: 51px;
        background-color: #FFB0DF;
        border: 7px solid #EB8DC2;
        border-radius: 50%;
        transform: rotate(29deg);
    }
    .bottom_nose{
        top: 52px;
        left: 38px;
        width: 42px;
        height: 77px;
        border-left: 7px solid #EB8DC2;
        border-top: 7px solid #EB8DC2;
        background-color: #FFB0DF;
        border-radius: 50% 50% 50% 50% / 100% 100% 0% 0%;
        transform: rotate(-67deg);
        z-index: -1;
    }
    .top_nose{
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
    .left_nostril,.right_nostril{
        width: 11px;
        height: 12px;
        background-color: #D667A9;
        border-radius: 50%;
        transform: rotate(39deg);
    }
    .left_nostril{
        top: 47px;
        left: 29px;
    }
    .right_nostril{
        top: 51px;
        left: 45px;
    }
    /* 脸颊 */
    .cheek{
        top: 94px;
        left: 154px;
        width: 45px;
        height: 50px;
        background-color: #FF8CD1;
        border-radius: 50%;
        transform: rotate(24deg);
    }
    /* 嘴巴 */
    .mouth{
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
    .left_mouth,.right_mouth{
        background-color: #D8468F;
        border-radius: 50%;
        transform: rotate(100deg);
    }
    .left_mouth{
        width: 5px;
        height: 3px;
        top: 129px;
        left: 81px;
    }
    .right_mouth{
        width: 7px;
        height: 5px;
        top: 141px;
        left: 135px;
    }
    /* 耳朵 */
    .left_ear{
        top: -2px;
        left: 141px;
        width: 31px;
        height: 52px;
        background-color: #FFB0DF;
        border: 7px solid #EB8DC2;
        border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
        transform: rotate(200deg);
        z-index: -2;
    }
    .right_ear{
        top: 16px;
        left: 173px;
        width: 31px;
        height: 52px;
        background-color: #FFB0DF;
        border: 7px solid #EB8DC2;
        border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
        transform: rotate(222deg);
        z-index: -2;
    }
    /* 小裙子 */
    .dress{
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
    .bottom_dress{
        top: 277px;
        left: 48px;
        width: 180px;
        height: 37px;
        border-radius:22%;
        background: #E9565E;
        border: 8px solid #E3353F;
        z-index: -3;
    }
    /* 腿 */
    .left_leg{
        top: 311px;
        left: 102px;
        width: 10px;
        height: 42px;
        background-color: #FCB8E1;
        z-index: -4;
    }
    .right_leg{
        top: 311px;
        left: 166px;
        width: 10px;
        height: 42px;
        background-color: #FCB8E1;
        z-index: -4;
    }
    .left_foot .bottom_of_foot{
        top: 354px;
        left: 70px;
        width: 43px;
        height: 7px;
        border-bottom: 1px solid black;
        border-radius: 5px;
        transform: rotate(-1deg);
        background-color: #000;
    }
    .left_foot .top_of_foot{
        top: 350px;
        left: 70px;
        width: 40px;
        height: 5px;
        border-radius: 5px;
        transform: rotate(6.2deg);
        background-color: #000;
    }
    .left_foot .left_of_foot{
        top: 348px;
        left: 64px;
        width: 22px;
        height: 13px;
        border-bottom: 1px solid black;
        border-radius: 50%;
        background-color: #000;
    }
    .left_foot .right_of_foot{
        top: 352px;
        left: 106px;
        width: 8px;
        height: 8px;
        border-bottom: 1px solid black;
        border-radius: 50%;
        background-color: #000;
    }
    
    
    .right_foot .bottom_of_foot{
        top: 355px;
        left: 136px;
        width: 43px;
        height: 7px;
        border-bottom: 1px solid black;
        border-radius: 5px;
        transform: rotate(-1deg);
        background-color: #000;
    }
    .right_foot .top_of_foot{
        top: 351px;
        left: 138px;
        width: 40px;
        height: 5px;
        border-radius: 5px;
        transform: rotate(6.2deg);
        background-color: #000;
    }
    .right_foot .left_of_foot{
        top: 349px;
        left: 131px;
        width: 22px;
        height: 13px;
        border-bottom: 1px solid black;
        border-radius: 50%;
        background-color: #000;
    }
    .right_foot .right_of_foot{
        top: 353px;
        left: 172px;
        width: 8px;
        height: 8px;
        border-bottom: 1px solid black;
        border-radius: 50%;
        background-color: #000;
    }
    .left_hand{
        top: 215px;
        left: 0;
        width: 75px;
        height: 10px;
        background-color: #FDB6E0;
        border-radius: 5px;
        border-bottom-right-radius: 50%;
        border-bottom-left-radius: 50%;
        transform: rotate(156deg);
        z-index: -4;
    }
    .finger1{
        top: 219px;
        left: 0;
        width: 22px;
        height: 8px;
        border-top-left-radius: 50%;
        border-top-right-radius: 35%;
        background-color: #FDB6E0;
        border-radius: 5px;
        transform: rotate(16deg);
    }
    .finger2{
        top: 232px;
        left: 11px;
        width: 18px;
        height: 8px;
        border-bottom-right-radius: 50%;
        transform: rotate(105deg);
        background-color: #FDB6E0;
        border-radius: 5px;
    }
    .right_hand{
        top: 215px;
        left: 206px;
        width: 65px;
        height: 10px;
        background-color: #FDB6E0;
        border-radius: 5px;
        border-bottom-right-radius: 50%;
        border-bottom-left-radius: 50%;
        transform: rotate(204deg);
    }
    .finger3{
        top: 232px;
        left: 258px;
        width: 18px;
        height: 8px;
        background-color: #FDB6E0;
        border-bottom-right-radius: 50%;
        border-bottom-left-radius: 50%;
        border-radius: 5px;
        transform: rotate(38deg);
    }
    .finger4{
        top: 222px;
        left: 256px;
        width: 22px;
        height: 8px;
        background-color: #FDB6E0;
        border-top-left-radius: 35%;
        border-top-right-radius: 50%;
        border-radius: 5px;
        transform: rotate(-18deg);
    }
    .finger5{
        top: 234px;
        left: 247px;
        width: 18px;
        height: 8px;
        background-color: #FDB6E0;
        border-top-right-radius: 50%;
        border-radius: 5px;
        transform: rotate(75deg);
    }
    /* 尾巴 */
    .left_tail{
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
    .right_tail{
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
    .top_tail{
        top: 257px;
        left: 231px;
        height: 27px;
        width: 24px;
        background-color: transparent;
        border: 6px solid transparent;
        border-top: 8px solid #FDB6E0;
        border-radius: 50%;
    }
    .bottom_tail{
        top: 273px;
        left: 257px;
        width: 10px;
        height: 8px;
        background-color: #FDB6E0;
        border-radius: 50%;
        transform: rotate(100deg);
    }
    /* 阴影 */
    .shadow{
        top: 341px;
        left: 25px;
        width: 205px;
        height: 31px;
        background-color: #589454;
        border-radius: 50%;
        z-index: -5;
    }
    /* 地面 */
    .ground{
        position: absolute;
        margin: auto;
        overflow: hidden;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 40%;
        background-color: #77C76E;
        border-radius: 50% 50% 50% 50% / 3% 9% 0% 0%;
        z-index: -6;
    }`
    writeCode('',code)
}()
   
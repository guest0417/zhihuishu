(function() {
const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time))
  $('.Patternbtn-div').click();
  console.log('初始化');
  for(i=0; i<$(".hour").length; i++) {
    if($('.video').eq(0).find(".time_icofinish").length != 1){
      $(".hour")[i].click();
    }
    break;
  }
  //temp = Math.abs($('.progress-num').text().slice(0,2));
  time = 300*60;
  const start = async function() {
    while (true) {
	    console.log('后台运行中');
	    $('.el-dialog__wrapper,.dialog-test').css("display","none");
      $('.v-modal').css("z-index", "-1");
      //需要加速请删除注释
      /*
      if (!/^X 1.25/.test($('.speedBox').text())) {
        console.log('提升到1.25倍速');
        $('.speedTab10').click();
      }
      */
      if(time>0){  
          console.log(time);
          time=time-5;  
      }  
      else {  
        //习惯分数请删除注释
        //window.location.href = '';
        console.log('退出代碼');
        return 0;
      }  
      if ($('.volumeBox').find('.passVolume').height() != 0) {
        console.log('静音');
        $('.volumeIcon').click();
      }
      /*
      temp = Math.abs($('.progress-num').text().slice(0,2));
      console.log("檢查進度:",temp);
      // 進度切換||時間到逹
      if (Math.abs($('.progress-num').text().slice(0,2) - temp)>5 || $('.currentTime').text() == $('.duration').text()) {
        console.log('下一个视频');
        $('#nextBtn').click();
      }
      */
      if ($('.current_play').find('.time_icofinish').length == 1){
        console.log('已完成，下一个视频');
        $('#nextBtn').click();
      } else {
        if (String($('.playButton').click()).length == 65) {
          console.log('强制播放');
          $('.playButton').click();
        }
      } 
      await sleep(5000)
    }
  }
  start()
}())
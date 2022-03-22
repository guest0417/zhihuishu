//使用说明
/*
1. 复制本文件内全部代码
2. 打开"智慧树"网课播放页面(以能观看视频的页面为准)
3. 按下 F12 打开开发者窗口(以chromium为准，其他浏览器请自行研究)
4. 找到 Console 面板
5. 按下 ctrl+v 粘贴代码
6. 修改 time (如需)
7. 按下回车运行代码
 */
(function () {
    const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time))
    const search = async function () {
        for (let i = 0; i < $(".video").length; i++) {
            if ($('.video').eq(i).find(".time_icofinish").length != 1 && $('.video').eq(i).find(".time_ico_half").length == 1) {
                $('.video').eq(i).click();
                break;
            }
        }
    }
    // 在这里修改时间
    time = 25 * 60;
    console.log('初始化');
    $('.dialog').css("display", "none");
    search()
    const start = async function () {
        while (true) {
            console.log('后台运行中');
            if (time > 0) {
                console.log(time);
                time = time - 5;
            } else {
                //window.location.href = '';
                console.log('退出代码');
                return 0;
            }
            $('.el-dialog__wrapper,.dialog-test').css("display", "none");
            $('.v-modal').css("z-index", "-1");
            //需要加速请删除注释
            /*
            if (!/^X 1.25/.test($('.speedBox').text())) {
                console.log('提升到1.25倍速');
                $('.speedTab10').click();
            }
            */
            if ($('.volumeBox').find('.passVolume').height() != 0) {
                console.log('静音');
                $('.volumeIcon').click();
            }
            if ($('.current_play').find('.time_icofinish').length == 1) {
                console.log('已完成，下一个视频');
                search()
            } else {
                $('.playButton').click();
            }
            await sleep(5000)
        }
    }
    start()
}())

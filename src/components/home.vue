<template>
    <div class="home-wrap">
        <div class="logo"></div>
        <div class="input-box">
            <p class="phone">
                <input type="text" placeholder="请输入手机号码" autocomplete="off">
            </p>
            <p class="code">
                <input type="text" placeholder="请输入验证码" autocomplete="off">
                <span class="get-code">获取验证码</span>
            </p>
        </div>
        <button class="submit" @click="getMoney">确认收款</button>
        <div class="tips">
            <span>收不到短信？<i class="get-video-code">获取语音验证码</i></span>
        </div>
        <div class="phone-calling">
            <p>电话拨打中...请留意来电</p>
            <p><span>60</span>S后重试</p>
        </div>
        <div class="msg-box-wrap" v-show="msgTipShow">
            <div class="msg-box">
                <h3 class="tit">接收短信验证码</h3>
                <p class="content">验证码以短信形式通知你，请留意你的电话</p>
                <p class="confirm">
                    <span class="cancel">取消</span>
                    <span class="ok">接收</span>
                </p>
            </div>
        </div>
        <div v-kiko-loading.fullscreen="loadingFullscreen"></div> 
    </div>
</template>
<script>
export default {
    data() {
        return {
            msgTipShow: false,
            loadingFullscreen: false
        }
    },
    methods: {
        getMoney() { 
            this.$kiko_message('操作成功')
            this.loadingFullscreen = true 
            setTimeout(() => {
                this.loadingFullscreen = false
                this.loading = false
            }, 2000)
        },
        confirmMakeSure() {
            console.log('confirm')
        }
    }

}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// @import '../common/css/mixin'; 
.home-wrap {
    width: 7.5rem;
    height: 100%;
    padding-top: 1.6rem;
    background: url(../common/img/bg.png) 0 0 no-repeat;
    background-size: 7.5rem 5.89rem;
    font-family: 'PingFang-SC-Medium';
    position: relative;
    .logo {
        width: 3.78rem;
        height: 1.65rem;
        background: url(../common/img/login_logo.png) 0 0 no-repeat;
        background-size: 3.78rem 1.65rem;
        margin: 0 auto;
    }
    .input-box {
        width: 6.54rem;
        height: 2.4rem;
        border-radius: 0.08rem;
        background-color: #fff;
        margin: 1.1rem auto 0 auto;
        .phone,
        .code {
            height: 1.2rem;
            line-height: 1.2rem;
            padding: 0 2rem 0 0.66rem;
            box-sizing: border-box;
            background: url(../common/img/ico_mobile.png) 0.24rem 0.38rem no-repeat;
            background-size: 0.32rem 0.44rem;
            input {
                height: 100%;
                line-height: 1.2rem;
                width: 100%;
                font-size: 0.3rem;
                box-sizing: border-box;
                color: #666;
            }
             ::-webkit-input-placeholder {
                color: #ccc;
                font-family: 'PingFang-SC-Medium';
            }
            ;
             :-moz-placeholder {
                color: #ccc;
                font-family: 'PingFang-SC-Medium';
            }
            ;
             ::-moz-placeholder {
                color: #ccc;
                font-family: 'PingFang-SC-Medium';
            }
            ;
             :-ms-input-placeholder {
                color: #ccc;
                font-family: 'PingFang-SC-Medium';
            }
            ;
        }
        .code {
            background: url(../common/img/ico_suo.png) 0.24rem 0.38rem no-repeat;
            background-size: 0.32rem 0.40rem;
            border-top: 1px solid #f3f3f3;
            position: relative;
            .get-code {
                font-size: 0.28rem;
                color: #666;
                position: absolute;
                right: 0.24rem;
                top: 0.4rem;
                height: 0.4rem;
                line-height: 0.4rem;
                display: inline;
            }
        }
    }
    .submit {
        width: 6.54rem;
        height: 0.8rem;
        margin: 0.4rem auto;
        display: block;
        border-radius: 0.08rem;
        font-size: 0.36rem;
        color: #fff;
        background-color: #fc4646;
        border: none;
    }
    .tips,
    .phone-calling {
        width: 100%;
        height: 0.4rem;
        line-height: 0.4rem;
        text-align: center;
        color: #666;
        .get-video-code {
            color: #656ff9;
        }
    }
    .msg-box-wrap {
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        top: 0;
        background-color: rgba(0, 0, 0, 0.4);
        .msg-box {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 5.4rem;
            height: 3.2rem;
            transform: translate(-50%, -74%);
            background-color: #fff;
            border-radius: 0.08rem;
            padding-top: 0.3rem;
            box-sizing: border-box;
            .tit {
                height: 0.74rem;
                font-size: 0.36rem;
                line-height: 0.74rem;
                font-weight: bold;
                text-align: center;
            }
            .content {
                padding: 0 0.47rem 0.32rem 0.47rem;
                text-align: center;
                line-height: 0.48rem;
                font-size: 0.28rem;
                border-bottom: 1px solid #E6E6E5;
            }
            .confirm {
                height: 0.87rem;
                font-size: 0;
                .cancel,
                .ok {
                    height: 100%;
                    display: inline-block;
                    width: 50%;
                    text-align: center;
                    line-height: 0.87rem;
                    color: #2c7de8;
                    font-size: 0.3rem;
                }
                .cancel {
                    box-sizing: border-box;
                    border-right: 1px solid #E6E6E5;
                }
                .ok {
                    font-weight: bold;
                }
            }
        }
    }
}

</style>

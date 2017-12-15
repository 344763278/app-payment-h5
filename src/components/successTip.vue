<template>
	<div class="success-tip-wrap"> 
		<div class="pic-money">
			<img src="../common/img/pic__money.png" alt="pic_money">
		</div>
		<div class="notify">
			收款成功
		</div>
		<div class="desc">
			请在微信中查看：我-钱包-零钱
		</div> 
		<div class="line"></div>
		<div class="pic">
			<img src="../common/img/pic.png" alt="pic">
		</div>
	</div>
</template>
<style scoped lang="scss">
	.success-tip-wrap {
		width: 100%;
		height: 100%;
		background: #fff;
		font-family: 'PingFang-SC-Medium';
		text-align: center; 
		.pic-money {
			padding: 0.48rem 0 0.4rem 0; 
			img {
				width: 6.76rem;
				height: 3.38rem; 
			}
		}
		.notify {
			height: 0.36rem;
			line-height: 0.36rem; 
			font-size: 0.36rem;
			color: #333;
		}
		.desc {
			line-height: 0.7rem;
			padding-bottom: 0.2rem;
			font-size: 0.28rem;
			color: #666;
		}
		.line {
			height: 0.24rem;
			background:#F8F8F8;
		}
		.pic {
			width: 7.5rem;
			height: 7.4rem;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
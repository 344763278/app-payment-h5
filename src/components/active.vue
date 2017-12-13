<template>
	<div class="active-wrap">
		<h2 class="tit">
			收款结果
		</h2>
		<div class="pic-money">
			<img src="../common/img/pic__money.png" alt="pic_money">
		</div>
		<div class="notify">
			收款成功
		</div>
		<div class="desc">
			请在微信中查看：我 - 钱包 - 零钱
		</div> 
		<div class="line"></div>
		<div class="pic">  
			<div class="active-text">
				<div class="text-line"></div>
				<span class="text">活动</span>
			</div>
			<div class="active-url">
				<img src="../common/img/active-url.png" alt="url">
			</div>  
		</div>
	</div>
</template>
<style scoped lang="scss">
	.active-wrap {
		width: 100%;
		height: 100%;
		background: #fff;
		font-family: 'PingFang-SC-Medium';
		text-align: center;
		.tit {
			height: 0.88rem;
			line-height: 0.88rem;
			font-size: 0.36rem; 
			font-weight: bold;
			color: #333;
		}
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
			height: 6.5rem;
			.active-text { 
				width: 100%;
				height: 1rem; 
				position: relative;
				.text-line {
					position: absolute;
					width: 4.06rem;
					height: 1px;
					left: 50%;
					top: 50%;
					transform: translate(-50%,-50%);
					background: #E5E5E5;
				}
				.text {
					position: absolute;
					width: 0.86rem;
					height: 0.24rem;
					left: 50%;
					top: 50%;
					transform: translate(-50%,-50%);
					font-size: 0.24rem;
					line-height: 0.24rem;
					background: #fff;
					color: #ccc;
				}
			}
			.active-url {
				height: 3.6rem; 
				img {
					width: 6.54rem;
					height: 3.6rem;
				}
			}
		}
	}
</style>
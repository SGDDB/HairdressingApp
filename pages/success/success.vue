<!-- 预约跳转界面 -->
<template>
	<view>
		<text class="h1">下单完成√</text>
		<text class="h2">正在等待造型师确认订单</text>
		<text class="h2">感谢您的耐心等候!</text>
		<view class="loginForm_dl">
		<button type="default" @click="goto">返回首页</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			goto() {
				uni.switchTab({
					url: "../home/home"
				})
			}
		}
	}
</script>

<style lang="scss">
	.h1 {
		font-size: 40rpx;
		text-align: center;
		display: block;
		margin-top: 150rpx;
	}

	.h2 {
		font-size: 40rpx;
		text-align: center;
		display: block;
	}

	.loginForm_dl {
		width: 100%;
		height: 50px;
		line-height: 50px;
		margin-top: 150upx;
		position: fixed;
		buttom: 0;
	}

	.loginForm_dl button {
		width: 60%;
		height: 50px;
		buttom: 0;
		line-height: 50px;
		background: #e8eff8;
		color: #4274f0;
		border-radius: 0px;
	}
</style>

<template>
	<view class="upbackground">
		<view class="content">
			<view class="flex-a">
				<view class="user_img">
					<u-avatar :src="src" shape="circle" size="60"></u-avatar>
				</view>
				<view class="user_text">
					徐昕沛</br>
					已在美发预约App126天
				</view>
				<view class="icon-right">
					<u-icon name="setting" color="#FFFFFF" size="30" @click="icon"></u-icon>
				</view>
			</view>
			<view class="item">
				<view class="tj-item">
					<text class="num">128.8</text></br>
					<text>会员卡余额</text>
				</view>
				<view class="tj-item"@click="coupon">
					<text class="num">2</text></br>
					<text>优惠券</text>
				</view>
				<view class="tj-item">
					<text class="num">563.5</text></br>
					<text>累计消费</text>
				</view>
			</view>
			
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: '../../static/images/avatar.png'
			}
		},
		methods: {
			icon(){
				uni.navigateTo({
					url: '../../pages/set/set'
				})
			},
			coupon(){
				uni.navigateTo({
					url:"../../pages/coupon/coupon"
				})
			}
		}
	}
</script>

<style>
	.content {
		width: 100%;
		height: 350rpx;
		background-image: url(../../static/images/login/bg.jpeg);
		background-size: 100%;
	}

	.user_img {
		padding-top: 90rpx;
		padding-left: 50rpx;
	}

	.user_text {
		padding-top: 110rpx;
		color: #FFFFFF;
		font-weight: 1000;
		padding-left: 40rpx;
	}

	.icon-right {
		padding-top: 110rpx;
		padding-left: 20rpx;
	}

	.flex-a {
		display: flex;
		justify-content: space-around;
		flex-direction: row;
		flex-wrap: nowrap;
	}

	.flex-b {
		padding-top: 10rpx;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-around;
	}

	.item{
		display: flex;
		text-align: center;
		justify-content: space-around;
	}
	.tj-item {
		flex-direction: column;
		height: 140upx;
		color: #ffffff;
	}

	.num {
		color: #ffffff;
		margin-bottom: 8upx;
	}
</style>

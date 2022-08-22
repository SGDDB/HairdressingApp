<template>
	<view>
		<u-line></u-line>
		<u-grid :col="4" :border="false">
			<u-grid-item @click="goto_1">
				<u-icon name="chat" :size="50" color="#ffaa00"></u-icon>
				<view class="gird-text">关于我们</view>
			</u-grid-item>
			<u-grid-item @click="goto_2">
				<u-icon name="checkmark-circle" :size="45" color="#ffaa00"></u-icon>
				<view class="gird-text">开始预约</view>
			</u-grid-item>
			<u-grid-item @click="goto_3">
				<u-icon name="shopping-cart" :size="55" color="#ffaa00"></u-icon>
				<view class="gird-text">购物订单</view>
			</u-grid-item>
			<u-grid-item @click="goto_4">
				<u-badge count="3"></u-badge>
				<u-icon name="file-text" :size="50" color="#ffaa00"></u-icon>
				<view class="gird-text">预约订单</view>
			</u-grid-item>
		</u-grid>
		<u-line></u-line>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goto_1(){
				uni.navigateTo({
					url:"../../pages/about_us/about_us"
				})
			},
			goto_2(){
				uni.switchTab({
					url:"../../pages/service/service"
				})
			},
			goto_3(){
				uni.navigateTo({
					url:"../../pages/orderlist/orderlist"
				})
			},
			goto_4(){
				uni.navigateTo({
					url:"../../pages/appointment/appointment"
				})
			}
		
		}
	}
</script>

<style>
	.grid-text {
		font-size: 30rpx;
		margin-top: 4rpx;
		color: $u-type-info;
	}
</style>

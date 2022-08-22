<template>
	<view>
		<u-line></u-line>
		<view class="piece-title">
			<view>
				<text class="piece-title-text">预约订单</text>
			</view>
			<view class="more" open-type="redirect">
				<navigator url="../../pages/appointment/appointment">
					查看全部订单>
				</navigator>
			</view>
		</view>
		<u-grid :col="4" :border="false">
			<u-grid-item>
				<u-icon name="rmb-circle" :size="50" color="#ffaa00"></u-icon>
				<view class="gird-text">待付款</view>
			</u-grid-item>
			<u-grid-item>
				<u-icon name="clock" :size="50" color="#ffaa00"></u-icon>
				<view class="gird-text">服务中</view>
			</u-grid-item>
			<u-grid-item>
				<u-icon name="checkmark-circle" :size="50" color="#ffaa00"></u-icon>
				<view class="gird-text">已完成</view>
			</u-grid-item>
			<u-grid-item>
				<u-icon name="close-circle" :size="50" color="#ffaa00"></u-icon>
				<view class="gird-text">已取消</view>
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
			

		}
	}
</script>

<style>
	.grid-text {
		font-size: 30rpx;
		margin-top: 4rpx;
		color: $u-type-info;
	}

	.piece-title {
		display: flex;
		height: 40px;
		background-color: #f1f1f1;
		align-items: center;
		justify-content: space-between;
	}

	.piece-title-text {
		font-weight: bold;
		font-size: 16px;
	}

	.more {
		font-size: 15px;
		color: #8F939C;
		padding: 10px;
	}
</style>

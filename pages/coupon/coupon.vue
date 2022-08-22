<template>
	<view class="u-wrap">
		<view class="coupon">
			<view class="content">
				<view class="left">
					<view class="sum">
						￥
						<text class="num">8</text>
					</view>
					<view class="type">抵用券</view>
				</view>
				<view class="centre">
					<view class="title">【烫发】8元无门槛红包</view>
					<view class="valid-date">今日到期</view>
				</view>
				<view class="right">
					<view size="mini" class="immediate-use" :round="true" @click="use">立即使用</view>
				</view>
			</view>
		</view>
		<view class="coupon">
			<view class="content">
				<view class="left">
					<view class="sum">
						￥
						<text class="num">6</text>
					</view>
					<view class="type">抵用券</view>
				</view>
				<view class="centre">
					<view class="title">【剪发】6元无门槛红包</view>
					<view class="valid-date">12月31日到期</view>
				</view>
				<view class="right">
					<view size="mini" class="immediate-use" :round="true" @click="use">立即使用</view>
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		methods:{
			use(){
				uni.showToast({
					title:"已使用"
				})
			}
		}
	};
</script>

<style lang="scss" scoped>
	page {
		height: 100%;
		background-color: rgb(244, 244, 244);
	}

	.u-wrap {
		padding: 24rpx;
	}

	.coupon {
		margin: 30rpx auto;
		background-color: #ffffff;
		width: 700rpx;
		// border: 10rpx;
		color: $uni-color-warning;
		font-size: 28rpx;

		.content {
			display: flex;
			align-items: center;
			padding: 80rpx 20rpx;
			border: 10rpx;
			background-color: #fff5f4;

			.left {
				.sum {
					font-size: 32rpx;

					.num {
						font-size: 60rpx;
						font-weight: bold;
					}
				}
			}

			.centre {
				margin-left: 40rpx;

				.title {
					font-size: 32rpx;
					font-weight: bold;
					margin-bottom: 20rpx;
				}
			}

			.right {
				margin-left: 30rpx;

				.immediate-use {
					padding: 0 20rpx;
					height: 50rpx;
					border-radius: 25rpx;
					line-height: 50rpx;
					background-color: $uni-color-warning !important;
					color: #ffffff !important;
					font-size: 24rpx;
					border: none;
					word-break: keep-all;
				}
			}
		}

		.tips {
			padding: 0 20rpx;
			border: 10rpx;
			background-color: $uni-bg-color-hover;
			position: relative;
			color: $uni-bg-color;
			display: flex;
			justify-content: space-between;
			line-height: 60rpx;
			font-size: 24rpx;

			.circle-left,
			.circle-right {
				position: absolute;
				height: 36rpx;
				width: 18rpx;
				background-color: #f2f2f2;
			}

			.circle-right {
				border-radius: 40rpx 0 0 40rpx;
				right: 0;
				top: -18rpx;
			}

			.circle-left {
				border-radius: 0 40rpx 40rpx 0;
				left: 0;
				top: -18rpx;
			}

			.rule {
				font-size: 24rpx;
				display: flex;
				align-items: center;

				text {
					margin-right: 10rpx;
					flex: 1;
				}
			}
		}
	}

	.jingdong {
		margin-top: 40rpx;
		width: 700rpx;
		height: auto;
		background-color: #ffffff;
		display: flex;

		.left {
			padding: 0 30rpx;
			background-color: rgb(95, 148, 224); //rgb(94, 152, 225);
			text-align: center;
			font-size: 28rpx;
			color: #ffffff;

			.sum {
				margin-top: 50rpx;
				font-weight: bold;
				font-size: 32rpx;

				.num {
					font-size: 80rpx;
				}
			}

			.type {
				margin-bottom: 50rpx;
				font-size: 24rpx;
			}
		}

		.right {
			padding: 20rpx 20rpx 0;
			font-size: 28rpx;

			.top {

				.title {
					margin-right: 60rpx;
					line-height: 40rpx;

					.tag {
						padding: 4rpx 20rpx;
						background-color: rgb(73, 154, 201);
						border-radius: 20rpx;
						color: #ffffff;
						font-weight: bold;
						font-size: 24rpx;
						margin-right: 10rpx;
					}
				}

				.bottom {
					display: flex;
					margin-top: 20rpx;
					align-items: center;
					justify-content: space-between;
					margin-bottom: 10rpx;

					.date {
						font-size: 20rpx;
						flex: 1;
					}

					.immediate-use {
						height: auto;
						padding: 0 20rpx;
						font-size: 24rpx;
						border-radius: 40rpx;
						line-height: 40rpx;
						color: rgb(117, 142, 165);
						border: 2rpx solid rgb(117, 142, 165);
					}
				}
			}

			.tips {
				width: 100%;
				line-height: 50rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 24rpx;

				.transpond {
					margin-right: 10rpx;
				}

				.explain {
					display: flex;
					align-items: center;
				}

				.particulars {
					width: 30rpx;
					height: 30rpx;
					box-sizing: border-box;
					padding-top: 8rpx;
					border-radius: 50%;
					text-align: center;
				}
			}
		}
	}
</style>

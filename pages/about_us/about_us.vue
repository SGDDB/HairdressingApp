<!-- 关于我们 -->
<template>
	<view>
		<view class="location">
			<image src="../../static/images/location.png" mode="widthFix"></image>
		</view>
		<u-card :title="title" :sub-title="subTitle">
			<view class="" slot="body">
				<view class="u-body-item u-flex u-border-bottom u-col-between u-p-t-0">
					<view class="u-body-item-title u-line-2">引领美发时尚，捕捉造型流行趋势</view>
					<image src="../../static/images/swiper/01.jpeg" mode="aspectFill"></image>
				</view>
			</view>
		</u-card>
		<u-card :title="title1" :sub-title="subTitle1">
			<view class="" slot="body">
				<view class="u-body-item u-flex u-border-bottom u-col-between u-p-t-0">
					<view class="u-body-item-title u-line-2">
						最顶尖的时尚发布、最贴心的造型设计、最合理的价格优势
					</view>
					<image src="../../static/images/swiper/02.jpeg" mode="aspectFill"></image>
				</view>
			</view>
		</u-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '太原一号店',
				subTitle: '太原市万柏林区滨河东巷',
				title1: '太原二号店',
				subTitle1: '太原市迎泽区体育西路9号',
			};
			methods: {

			};
		}
	}
</script>

<style>
	.location {
		width: 100%;
		height: 100%;
	}

	.location>image {
		width: 100%;
	}

	.u-card-wrap {
		background-color: $u-bg-color;
		padding: 1px;
	}

	.u-body-item {
		font-size: 32rpx;
		color: #333;
		padding: 20rpx 10rpx;
		display: flex;
		justify-content: space-between;
	}


	.u-body-item image {
		width: 120rpx;
		flex: 0 0 120rpx;
		height: 120rpx;
		border-radius: 8rpx;
		margin-left: 12rpx;
	}
</style>

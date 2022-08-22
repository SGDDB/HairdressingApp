<template>
	<view>
		<view class="message-box">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper style="height: 120rpx;" class="swiper" vertical="ture" circular="true"
						indicator-dots='false' indicator-color="rgba(0,0,0,.0)" indicator-active-color="rgba(0,0,0,.0)"
						autoplay="true" interval="4000">
						<swiper-item class="swiper-list" v-for="(item, index) in messageData" :key="index">
							<view class="message-tltle">{{item.title}}</view>
							<view class="message-content">
								{{item.content}}
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				messageData: [{
						title: '「太原1号店」12月31日起暂停营业',
						content: '由于配合市政道路施工暂停营业'
					},
					{
						title: '「太原2号店」新会员办卡享优惠',
						content: '到店充值满300元返100元'
					}
				],
			}
		},
		methods: {

		}
	}
</script>

<style>
	.message-box {
		width: 100%;
		height: 120rpx;
		background: url(../../static/images/home/toAll.png) #f0f0f0;
		background-repeat: no-repeat;
		background-size: 80rpx 80rpx;
		background-position: 15rpx 10rpx;
		margin: 0rpx 0rpx 10rpx 0rpx;
		padding-left: 130rpx;
	}

	.message-tltle {
		height: 65rpx;
		line-height: 70rpx;
		font-weight: 600;
		font-size: 28rpx;
	}

	.message-content {
		color: #0081ff;

	}
</style>

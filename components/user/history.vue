<template>
	<view class="u-page">
		<view class="u-demo-block">
			<u-line></u-line>
			<view class="piece-title">
				<view>
					<text class="piece-title-text">历史浏览商品</text>
				</view>
			</view>
			<u-scroll-list indicatorColor="#fff0f0" indicatorActiveColor="#f56c6c" @right="right" @left="left">
				<view class="scroll-list" style="flex-direction: row;">
					<view class="scroll-list__goods-item" v-for="(item, index) in goodsArr" :key="index"
						:class="[(index === 9) && 'scroll-list__goods-item--no-margin-right']">
						<image class="scroll-list__goods-item__image" :src="item.goodsUrl" mode="aspectFit">
						</image>
						<text class="scroll-list__goods-item__text">￥{{ item.price }}</text>
					</view>
					<view class="scroll-list__show-more" @tap="showMore">
						<text class="scroll-list__show-more__text">查看更多</text>
						<u-icon name="arrow-leftward" color="#f56c6c" size="12"></u-icon>
					</view>
				</view>
			</u-scroll-list>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodsArr: [{
						price: '68.00',
						goodsUrl: '../../static/images/product/1.webp'
					},
					{
						price: '129.00',
						goodsUrl: '../../static/images/product/2.webp'
					},
					{
						price: '39.90',
						goodsUrl: '../../static/images/product/3.webp'
					},
					{
						price: '129.90',
						goodsUrl: '../../static/images/product/4.webp'
					},
					{
						price: '29.9',
						goodsUrl: '../../static/images/product/5.webp'
					},
					{
						price: '19.8',
						goodsUrl: '../../static/images/product/6.webp'
					},
					{
						price: '19.00',
						goodsUrl: '../../static/images/product/7.webp'
					},
					{
						price: '112.00',
						goodsUrl: '../../static/images/product/8.webp'
					},
				],
			}
		},
		methods: {
			showMore() {
				uni.$u.toast('查看更多')
			},
			left() {
				console.log('left');
			},
			right() {
				console.log('right');
			}
		},
	}
</script>

<style lang="scss">
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

	.scroll-list {
		@include flex(column);

		&__goods-item {
			margin-right: 20px;

			&__image {
				width: 60px;
				height: 60px;
				border-radius: 4px;
			}

			&__text {
				color: #f56c6c;
				text-align: center;
				font-size: 12px;
				margin-top: 5px;
			}
		}

		&__show-more {
			background-color: #fff0f0;
			border-radius: 3px;
			padding: 3px 6px;
			@include flex(column);
			align-items: center;

			&__text {
				font-size: 12px;
				width: 12px;
				color: #f56c6c;
				line-height: 16px;
			}
		}

		&__line {
			@include flex;
			margin-top: 10px;

			&__item {
				margin-right: 15px;

				&__image {
					width: 61px;
					height: 48px;
				}

				&__text {
					margin-top: 5px;
					color: $u-content-color;
					font-size: 12px;
					text-align: center;
				}

				&--no-margin-right {
					margin-right: 0;
				}
			}
		}
	}
</style>

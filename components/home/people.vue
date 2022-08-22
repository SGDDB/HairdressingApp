<template>
	<view>
		<!-- 商品列表 -->
		<view class="goods-list">
			<view class="title">— 明星造型师 —</view>
			<view class="people-list">
				<view class="people" v-for="people in peopleList" :key="people.goods_id">
					<image mode="widthFix" :src="people.img"></image>
					<view class="name">{{people.name}}</view>
					<view class="info">
						<view class="price">{{people.price}}</view>
						<view class="slogan">{{people.slogan}}</view>
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
				//猜你喜欢列表
				peopleList: [{
						goods_id: 0,
						img: '../../static/images/person/person01.png',
						name: '阿飞',
						price: '技术店长',
						slogan: '10年经验'
					},
					{
						goods_id: 1,
						img: '../../static/images/person/person02.png',
						name: '阿布',
						price: '造型师',
						slogan: '3年经验'
					},
					{
						goods_id: 2,
						img: '../../static/images/person/person03.png',
						name: '阿福',
						price: '造型师',
						slogan: '3年经验'
					},
					{
						goods_id: 3,
						img: '../../static/images/person/person04.png',
						name: '阿健',
						price: '技术店长',
						slogan: '12年经验'
					},
				],
				currentPageindex: 0,
				headerPosition: "fixed",
			};
		},
		onReady() {

		},
		onLoad() {},
		methods: {}
	};
</script>
<style lang="scss">

	.goods-list {
		background-color: #f4f4f4;

		.title {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 30px;
			color: #979797;
			font-size: 10px;
		}

		.people-list {
			width: 95%;
			padding: 0 2.5% 2.5vw 2.5%;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;

			.people {
				width: 48.75%;
				border-radius: 20upx;
				background-color: #fff;
				margin: 0 0 15upx 0;

				image { 
					width: 100%;
					border-radius: 20upx 20upx 0 0;
				}

				.name {
					width: 92%;
					padding: 10upx 4%;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					text-align: justify;
					overflow: hidden;
					font-size: 30upx;
				}

				.info {
					display: flex;
					justify-content: space-between;
					align-items: flex-end;
					width: 92%;
					padding: 10upx 4% 10upx 4%;

					.price {
						color: #e65339;
						font-size: 30upx;
						font-weight: 600;
					}

					.slogan {
						color: #807c87;
						font-size: 24upx;
					}
				}
			}

		}
	}
</style>

<template>
	<view>
		<view v-if="show==true">
			<view class="goods-detail" v-for="(item,index) in goods" :key="index">
				<view class="detail-left">
					<view class="goods-left">
						<checkbox-group @change="selected(item)">
							<label>
								<checkbox class="selected" color="#555555" :checked="checked" /><text></text>
							</label>
						</checkbox-group>
						<image :src="item.goodsImage" style="width: 150rpx;height: 140rpx;"></image>
					</view>
					<view class="size">
						<text style="font-size: 25rpx;">品名:{{item.size}}</text>
						<text class="goods-price">￥{{item.price}}/件</text>
					</view>
				</view>
				<view class="detail-right">
					<text class="subtract" @click="reduce(item)">-</text>
					<text class="num">{{item.num}}</text>
					<text @click="add(item)" class="add">+</text>
					<u-button type="error" size="mini" @click="ddd">删除</u-button>
				</view>
			</view>
		</view>
			<u-button type="primary" size="mini" style="width: 80px; height: 30px;" @click="all">批量操作
		</u-button>
		<view class="end">
			<view class="end-left">
				<checkbox-group @change="selectgoods()">
					<label>
						<checkbox :checked="allchecked" />全选
					</label>
				</checkbox-group>
				<view>
					总计：<text style="color: #f00000;font-weight: bold;">￥ {{totalPrice}}</text>
				</view>
			</view>
			<view class="end-right" @click="showAll">
				结算({{totalNum}})
			</view>


		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: true,
				allchecked: true,
				checked: true,
				goods: [{
						size: "宣谷生姜洗发水",
						num: 1,
						flag: true,
						price: 68.00,
						goodsImage: "../../static/images/product/1.webp",
					},
					{
						size: "沪美生姜洗发水",
						num: 1,
						flag: true,
						price: 129.00,
						goodsImage: "../../static/images/product/2.webp",
					},
					{
						size: "好迪洗发水/洗发露",
						num: 1,
						flag: true,
						price: 39.50,
						goodsImage: "../../static/images/product/3.webp",
					},
					{
						size: "小菲洗发水",
						num: 1,
						flag: true,
						price: 129.50,
						goodsImage: "../../static/images/product/4.webp",
					},
				],
			}
		},
		methods: {
			goshopping() {
				uni.navigateTo({
					url: '../contact/contact'
				})
			},
			change(e) {
				console.log(e)
			},
			selected(item) {
				item.flag = !item.flag
				if (!item.flag) {
					this.allchecked = false

				} else {
					const a = this.goods.forEach((item) => {
						return item.flag === true
					})
					if (a) {
						this.allchecked = true
					} else {
						this.allchecked = false
					}
				}
			},
			selectgoods() {
				this.allchecked = !this.allchecked
				if (this.allchecked) {
					this.goods.map(item => {
						this.checked = true
						item.flag = true
					})
				} else {
					this.checked = false
					this.goods.map(item => {
						item.flag = false
					})
				}
			},
			reduce(item) {
				let num = item.num
				if (num > 1) {
					num -= 1
				} else if (num = 1) {
					uni.showToast({
						title: "不能再减少了"
					})
				}


				item.num = num
			},
			add(item) {
				let num = item.num
				item.num = num + 1
			},
			ddd() {
				uni.showToast({
					title: "删除"
				})
			},		
			all() {
				uni.showToast({
					title: "批量操作"
				})
			},
			showAll() {
				uni.showToast({
					title: "去结算界面"
				})
			}
		},
		computed: {
			totalNum() {
				let totalNum = 0;
				this.goods.map(item => {
					item.flag ? totalNum += item.num : totalNum += 0
				})
				return totalNum
			},

			totalPrice() {
				let totalPrice = 0;
				this.goods.map(item => {
					item.flag ? totalPrice += item.num * item.price : totalPrice += 0
				})
				return totalPrice
			},
		}
	}
</script>

<style lang="scss">
	.goods {
		line-height: 80rpx;
		background-color: #FFFFFF;

		&-detail {
			display: flex;
			padding: 30rpx 15rpx 30rpx 30rpx;
			background-color: #fff;
			justify-content: space-between;
			border-bottom: 5rpx solid #F1F1F1;
			align-items: center;

			.detail-left {
				display: flex;

				.goods-left {
					display: flex;
					align-items: center;
				}
			}

			.size {
				display: flex;
				justify-content: space-around;
				flex-direction: column;
				margin-left: 30rpx;

				.goods-price {
					font-size: 25rpx;
					color: #F44545;

				}
			}

			.detail-right {
				text {
					width: 50rpx;
					line-height: 50rpx;
					text-align: center;
					display: inline-block;
					background-color: #F7F7F7;
					margin-right: 10rpx;
				}

				.add {
					color: #FA4305;
					border-radius: 10rpx 30rpx 30rpx 10rpx;
					margin-right: 20rpx;
				}

				.subtract {
					border-radius: 30rpx 10rpx 10rpx 30rpx;
				}
			}
		}
	}

	.end {
		width: 100%;
		height: 90rpx;
		background-color: #fff;
		position: fixed;
		bottom: 100rpx;
		left: 0;
		display: flex;
		align-items: center;

		&-left {
			width: 70%;
			display: flex;
			justify-content: space-between;
			padding: 0 30rpx;

			.end-flex {
				display: flex;
				align-items: center;
			}
		}

		&-right {
			width: 30%;
			line-height: 90rpx;
			background-color: #F44545;
			text-align: center;
		}
	}
</style>

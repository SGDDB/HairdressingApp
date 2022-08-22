<template>
 	<view class="type">
		<view class="piece-title">
			<view>
				<text class="tag">l</text>
				<text class="piece-title-text">请选择您要预约的服务</text>
			</view>
			<view class="more">
				<navigator>更多服务</navigator>
			</view>
		</view>
 		<view class="box">
 			<view v-for="item in testData" class="box-item" @click="dealChose(item)"
 				:class="item.id === curItem.id ? 'selected' : ''">
 				<img :src="item.icon" mode=""></img>
 				<text>{{item.msg}}</text>
 			</view>
 		</view>
 	</view>
 </template>

 <script>
 	export default {
 		data() {
 			return {
 				// 后端传递的数据
 				testData: [{
 						id: 1,
 						icon: "static/images/type/01.png",
 						msg: "染发"
 					},
 					{
 						id: 2,
 						icon: "static/images/type/02.png",
 						msg: "剪发"
 					},
 					{
 						id: 3,
 						icon: "static/images/type/03.png",
 						msg: "烫发"
 					},
 					{
 						id: 4,
 						icon: "static/images/type/04.png",
 						msg: "洗发"
 					},
 					
 				],
 				curItem: {}
 			}
 		},
 		methods: {
 			dealChose(item) {
 				console.log(item);
 				// this.curItem.id = item.id;
 				this.$set(this.curItem, 'id', item.id);
 			}
 		}
 	}
 </script>

 <style lang="less" scoped>
 	.data-list {
 		display: flex;
 		justify-content: space-around;

 		.data-item {
 			text-align: center;
 			width: 160rpx;
 			height: 40rpx;
 			border: 2rpx solid gray;
 		}
 	}

 	.box {
 		display: flex;
 		flex-direction: row;
 		justify-content: space-around;
 		flex-wrap: wrap;
 		align-items: center;
 	}

 	.box-item {
 		display: flex;
 		flex-direction: column;
		padding-top: 20rpx;
 		padding-left: 30rpx;
 		padding-right: 30rpx;
 		padding-bottom: 20rpx;
 		align-items: center;
 	}

 	text {
 		width: 120rpx;
 		height: 20rpx;
 		font-size: 30rpx;
 		text-align: center;
 	}

 	img {
 		width: 80rpx;
 		height: 80rpx;
 	}

 	.selected {
 		background-color: #ff5500;
 	}
	.piece-title {
		display: flex;
		height: 40px;
		background-color: #f1f1f1;
		align-items: center;
		justify-content: space-between;
	}
	
	.tag {
		padding: 5px;
		color: #ff5500;
		font-size: 20px;
		font-weight: 900;
	}
	
	.piece-title-text {
		font-weight: bold;
		font-size: 17px;
	}
	
	.more {
		font-size: 15px;
		color: #8F939C;
		padding: 10px;
	}
 </style>

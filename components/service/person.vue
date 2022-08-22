<template>
	<view class="type">
		<view class="piece-title">
			<view>
				<text class="tag">l</text>
				<text class="piece-title-text">点击下方选择造型师和店铺</text>
			</view>
		</view>
		<view>
			<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
				<view style="padding: 20px;background-color: white; text-align: center;">{{ array[index].name }}</view>
			</picker>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				array: [{
					name: '阿飞'
				}, {
					name: '阿布'
				}, {
					name: '阿福'
				}, {
					name: '阿健'
				}],
				index: 0,
			}
		},
		methods: {
			bindPickerChange: function(e) {
				this.index = e.detail.value;
			}
		}
	}
</script>

<style lang="less" scoped>
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
<template>
	<view>
		<view class="piece-title">
			<view>
				<text class="tag">l</text>
				<text class="piece-title-text">请选择造型师</text>
			</view>
		</view>
		<view>
			<picker mode="multiSelector" @columnchange="bindMultiPickerColumnChange" :value="multiIndex"
				:range="multiArray">
				<view style="padding: 20px;background-color: white; text-align: center;">
					{{ multiArray[0][multiIndex[0]] }}，
					{{ multiArray[1][multiIndex[1]] }}，
				</view>
			</picker>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				multiArray: [
					['太原一号店', '太原二号店'],
					['阿布', '阿飞']
				],
				multiIndex: [0, 0]
			};
		},
		methods: {
			bindMultiPickerColumnChange: function(e) {
				this.multiIndex[e.detail.column] = e.detail.value;
				switch (e.detail.column) {
					case 0: //拖动第1列
						switch (this.multiIndex[0]) {
							case 0:
								this.multiArray[1] = ['阿飞', '阿布'];
								break;
							case 1:
								this.multiArray[1] = ['阿福', '阿健'];
								break;
						}
						this.multiIndex.splice(1, 1);
						this.multiIndex.splice(2, 1);
						break;

				}
				this.$forceUpdate();
			}
		}
	};
</script>
<style>
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

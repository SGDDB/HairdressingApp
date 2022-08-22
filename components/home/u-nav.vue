<template>
	<view class="navbar">
		<uni-nav-bar color="#fe714b" background-color="#fe714b" @clickLeft="showCity" @clickRight="confirm()">
			<block slot="left">
				<view class="city">
					店铺
					<uni-icons type="arrowdown" color="#ffffff" size="22" />
				</view>
			</block>
			<view class="input-view">
				<uni-icons style="line-height: 30px;" type="search" size="22" color="#ffffff" />
				<input confirm-type="search" class="nav-bar-input" type="text" placeholder="搜索服务/造型师" placeholder-class="c1"
					@confirm="confirm">
			</view>
			<block slot="right">
				<view class="search">
					搜索
				</view>
			</block>
		</uni-nav-bar>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {}
		},
		methods: {
			showCity() {

				uni.showToast({
					title: '选择店铺'
				})
			},
			confirm() {
				uni.showToast({
					title: '搜索'
				})
			}
		}
	}
</script>

<style>
	.city {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-left: 4px;
		color: #FFFFFF
	}

	.input-view {
		display: flex;
		flex-direction: row;
		flex: 1;
		background-color: #ffaa7f;
		height: 30px;
		border-radius: 15px;
		padding: 0 15px;
		flex-wrap: nowrap;
		margin: 7px 0;
		line-height: 30px;
	}

	.nav-bar-input {
		height: 30px;
		line-height: 30px;
		width: 370rpx;
		padding: 0 5px;
		font-size: 14px;
		background-color: #ffaa7f;
	}

	.c1 {
		color: #FFFFFF;
	}

	.search {
		color: #FFFFFF
	}
</style>

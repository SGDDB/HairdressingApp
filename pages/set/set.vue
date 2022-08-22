<template>
	<view class="container">
		<u-cell-group>
			<u-cell icon="integral-fill" title="个人资料" @click="person"></u-cell>
			<u-cell icon="setting-fill" title="收货地址" @click="position"></u-cell>
			<view class="cell">
				<u-cell icon="chat-fill" title="消息推送"></u-cell>
				<u-switch v-model="value13" asyncChange @change="asyncChange"></u-switch>
			</view>
		</u-cell-group>
		<view class="loginForm_dl">
			<u-button @click="goto">点击退出登录</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value13:true
			};
		},
		methods: {
			asyncChange(e) {
				uni.showModal({
					content: e ? '确定要打开吗' : '确定要关闭吗',
					success: (res) => {
						if (res.confirm) {
							this.value13 = e
						}
					}
				})
			},
			person(){
				uni.showToast({
					title:"跳转到个人资料"
				})
			},
			position(){
				uni.navigateTo({
					url:"../position/position"
				})
			},
			goto(){
				uni.navigateTo({
					url: "../login/login"
				})
			}
		}
	};
</script>

<style lang='scss'>
	.cell {
		display: flex;
		justify-content: space-between;
	}

	.loginForm_dl button {
		background-color: #ff0000;
		color: #ffffff;
		width: 50%;
		height: 40px;
	}
	switch {
		transform: translateX(16upx) scale(.84);
	}
</style>

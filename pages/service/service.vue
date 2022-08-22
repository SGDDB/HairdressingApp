<!-- 预约服务 -->
<template>
	<view>
		<!-- 用户信息 -->
		<user></user>
		<!-- 类别选择 -->
		<type></type>
		<!-- 造型师选择 -->
		<person></person>
		<!-- 时间选择 -->
		<date></date>
		<view class="loginForm_dl">
			<u-button @click="goto">立即下单</u-button>
		</view>
	</view>
</template>
<script>
	import type from '../../components/service/type.vue'
	import user from '../../components/service/user-info.vue'
	import person from '../../components/service/person.vue'
	import date from '../../components/service/date.vue'
	export default {
		data() {
			return {

			}
		},
		onLoad: function() {},
		components: {
			type,
			user,
			person,
			date,
		},
		methods: {
			goto(){
				uni.navigateTo({
					url:"../success/success"
				})
			}
		}
	}
</script>

<style>
	.loginForm_dl button {
		background-color: #2C55C5;
		color: #ffffff;
		width: 50%;
		height: 40px;
	}
</style>

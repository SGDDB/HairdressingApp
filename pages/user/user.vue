<!-- 用户界面 -->
<template>
	<view>
		<!-- 顶部背景 -->
		<upbackground></upbackground>
		<!-- 预约订单 -->
		<appointment></appointment>
		<!-- 购物订单 -->
		<orderlist></orderlist>
		<!-- 历史浏览 -->
		<history></history>
	</view>
</template>

<script>
	import upbackground from '../../components/user/up-background.vue'
	import appointment from '../../components/user/appointment.vue'
	import orderlist from '../../components/user/order-list.vue'
	import history from '../../components/user/history.vue'
	export default {
		data() {
			return {
				
			}
		},
		onLoad: function() {},
		components: {
			orderlist,
			appointment,
			upbackground,
			history
		},
		methods: {
			
		}
	}
</script>

<style>

</style>

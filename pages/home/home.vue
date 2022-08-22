<!-- 首页 -->
<template>
	<view>
		<!-- 导航栏 -->
		<navbar></navbar>
		<!-- 轮播图 -->
		<wrap></wrap>
		<!-- 通知栏 -->
		<message></message>
		<!-- 选项栏 -->
		<selection></selection>
		<!-- 首页造型师列表 -->
		<people></people>
		<!-- 首页商品列表 -->
		<product></product>
	</view>
</template>

<script>
	import navbar from "../../components/home/u-nav.vue"
	import wrap from "../../components/home/u-swiper.vue"
	import message from "../../components/home/message.vue"
	import selection from "../../components/home/selection.vue"
	import people from "../../components/home/people.vue"
	import product from "../../components/home/product.vue"
	export default {
		data() {
			return {

			}
		},
		onLoad: function() {},
		components: {
			navbar,
			wrap,
			message,
			selection,
			people,
			product,
		},
		methods: {

		}
	}
</script>

<style>

</style>

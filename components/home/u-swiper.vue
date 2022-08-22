<template>
	<view class="u-page">
		<view class="u-demo-block">
			<u-swiper
				:list="list"
				previousMargin="30"
				nextMargin="30"
				circular
				:autoplay="true"
				radius="5"
				bgColor="#f0f0f0"
			></u-swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				currentNum: 0,
				list: [
					'../../static/images/swiper/01.jpeg',
					'../../static/images/swiper/02.jpeg',
					'../../static/images/swiper/03.jpeg ',
				],
			}
		},
		methods: {
			change(e) {
				// console.log('change', e);
			},
			click(e) {
				console.log('click', e);
			}
		},
	}
</script>

<style lang="scss">
	.indicator {
		@include flex(row);
		justify-content: center;

		&__dot {
			height: 6px;
			width: 6px;
			border-radius: 100px;
			background-color: rgba(255, 255, 255, 0.35);
			margin: 0 5px;
			transition: background-color 0.3s;

			&--active {
				background-color: #ffffff;
			}
		}
	}

	.indicator-num {
		padding: 2px 0;
		background-color: rgba(0, 0, 0, 0.35);
		border-radius: 100px;
		width: 35px;
		@include flex;
		justify-content: center;

		&__text {
			color: #FFFFFF;
			font-size: 12px;
		}
	}
</style>

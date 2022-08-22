<template>
    <view class="page">
		<view class="piece-title">
			<view>
				<text class="tag">l</text>
				<text class="piece-title-text">点击下方选择日期时间</text>
			</view>
		</view>
        <view class="example-body">
            <uni-datetime-picker
                type="datetime"
            />
        </view>
        
    </view>
</template>

<script>
    export default {
        data() {
            return {
            };
        },

        mounted() {
        },

        methods: {
            change(e) {
                this.single = e;
                console.log("-change事件:", e);
            },
        },
    };
</script>

<style lang="scss">
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
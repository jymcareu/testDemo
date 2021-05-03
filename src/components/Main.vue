<template>
  <div class="container">
    <div>{{msg}}</div>
    <div>{{propData}}</div>
  </div>
</template>

<script>
  import "./video.js";
  export default {
    name: 'test-comp',
    data() {
      return {
        msg: 'JUST A TEST'
      }
    },
    props: {
      propData: {
        type: String,
        default: '我是默认值'
      }
    },
    mounted() {
		const video = new Video({
			count: 2
		})
		console.log(video)
    }
  }

</script>

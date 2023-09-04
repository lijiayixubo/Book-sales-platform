<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style>
page{
	background-image: url(/src/static/images//pages/mine/bg-qjj.jpg);
	background-repeat: no-repeat;
	background-size: cover;
}
</style>

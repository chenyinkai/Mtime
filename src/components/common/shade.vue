<template>
    <div class="mask" @click="changeMaskState">

    </div>
</template>

<script>
export default {
  methods:{
    changeMaskState() {
      this.$emit("changeMaskState");
    }
  }
}
</script>

<style lang="less" scoped>
  .mask{
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 9;
    background-color: rgba(0, 0, 0, 0.5);
    left: 0;
    top: 0
  }
</style>

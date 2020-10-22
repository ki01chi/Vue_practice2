<template>
  <main class="main-container">
    <TextBox />
    <div class="devider"></div>
    mainが入るよ
  </main>
</template>

<script>
import TextBox from './TextBox';

export default {
  components: {
    TextBox,
  }
}
</script>

<style scoped>
.main-container {
  left: 200px;
  width: calc(100% - 200px);
  flex: 1;
  position: absolute;
}

.devider {
  border-top: 10px solid #ccc;
}
</style>
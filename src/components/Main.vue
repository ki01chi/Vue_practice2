<template>
  <main class="main-container">
    <TextBox :onPost="addMessages"/>
    <div class="devider"></div>
    <MessageList :messages="reversedMessages"/>
  </main>
</template>

<script>
import TextBox from './TextBox';
import MessageList from './MessageList';

export default {
  components: {
    TextBox,
    MessageList
  },
  data() {
    return {
      messages: []
    }
  },
  computed: {
    reversedMessages() {
      return this.messages.slice().reverse();
    }
  },
  methods: {
    addMessages(message) {
      this.messages.push(message);
    }
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
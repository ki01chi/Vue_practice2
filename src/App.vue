<template>
  <div>
    <Button title="fuga" :onClick="click"/>
    <Header />
    <div class="app-container">
      <SideMenu />
      <Main />
    </div>
  </div>
</template>

<script>
  import 'normalize.css';
  import Header from './components/Header';
  import SideMenu from './components/SideMenu';
  import Main from './components/Main';
  import Button from './components/Button';

  export default {
    components: {
      Header,
      SideMenu,
      Main,
      Button
    },
    methods: {
      click() {
        console.log('クリック！');
      }
    }
  }
</script>

<style scoped>
.app-container {
  display: flex;
  padding-top: 60px;
}
</style>

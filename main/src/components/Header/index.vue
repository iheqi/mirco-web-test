<template>
  <!-- 用户信息 -->
  <UserInfo />
  <!-- 导航 -->
  <MainNav />
</template>

<script>
import UserInfo from './userInfo'
import MainNav from './main-nav'
export default {
  name: 'header',
  components: {
    UserInfo,
    MainNav
  },
};
</script>

<style lang="scss" scoped>
</style>

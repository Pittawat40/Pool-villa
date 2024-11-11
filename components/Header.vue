<template>
  <div class="section">
    <div class="left">
      <!-- <Icon name="mingcute:tree-4-line" /> -->
      <span>Ban Pool villa</span>
    </div>
    <div class="right">
      <span>Home</span>
      <span>About</span>
      <span>Property</span>
      <span>Blog</span>
      <span>Contact</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.5rem 3rem;
  background: transparent;
  z-index: 1000;

  .left {
    background: transparent;
    span {
      text-transform: uppercase;
      background: transparent;
      font-size: 1.5rem;
      font-weight: bold;
    }
  }

  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    background: transparent;
    span {
      text-transform: uppercase;
      background: transparent;
      font-size: 1rem;
    }
  }
}
</style>

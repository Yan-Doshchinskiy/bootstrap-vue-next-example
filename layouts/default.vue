<template>
  <div class="default-layout">
    <header class="header">
      <nav class="links">
        <nuxt-link class="link" v-for="link in links" :to="link.to">
          {{ link.title }}
        </nuxt-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>
<script lang="ts" setup>
const links = [
  {
    to: '/',
    title: 'Components'
  },
  {
    to: '/deps',
    title: 'Dependencies'
  },
]

</script>

<style lang="scss" scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  padding: 60px 50px 30px 50px;

  > .header {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #b1ffe6;
    border-bottom: 2px solid #3cffbb;
    padding: 15px 30px;

    > .links {
      display: flex;
      grid-column-gap: 20px;
      align-items: center;
      list-style: none;
      margin: unset;

      > .link {
        text-decoration: none;
      }
    }
  }
}
</style>

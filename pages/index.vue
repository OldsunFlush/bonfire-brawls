<template>
  <main>
    <div
      class="splash-screen"
      tabindex="0"
      @click="isHidden = false"
      @keyup="isHidden = false"
      @keyup.esc="isHidden = true"
    >
      <Logo />
      <h1 class="title">
        Press any key to continue...
      </h1>
    </div>
    <MainMenu
      v-if="!isHidden"
      @close="isHidden = true"
    />
  </main>
</template>

<script>
import Logo from '~/components/Logo.vue'
import MainMenu from '~/components/MainMenu.vue'

export default {
  components: {
    Logo,
    MainMenu
  },
  data() {
    return {
      isHidden: true
    }
  }
}
</script>

<style>
.splash-screen {
  z-index: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  background: url('~assets/images/splash-screen.gif') no-repeat center black;
  background-size: auto 100%;
  outline: none;
}

.title {
  font-size: 2.4rem;
  color: white;
  animation: blink 1s steps(5, start) infinite;
}

@keyframes blink {
  to {
    visibility: hidden;
  }
}
</style>

<template>
  <main>
    <div v-if="pageToShow == 'splash'"
      class="splash-screen"
      tabindex="0"
      @click="pageToShow = 'menu'"
      @keyup="pageToShow = 'menu'"
      @keyup.esc="pageToShow = 'menu'"
    >
      <Logo />
      <h1 class="title">
        Press any key to continue...
      </h1>
    </div>
    <MainMenu
      v-if="pageToShow == 'menu'"
      @launch="pageToShow = 'characters'"
      @close="pageToShow = 'splash'"
    />
    <CharacterSelect  v-if="pageToShow == 'characters'" @close="pageToShow = 'tavern'" @go="pageToShow = 'tavern'"/>
    <Tavern v-if="pageToShow == 'tavern'" @close="pageToShow = 'menu'"/>
  </main>
</template>

<script>
import Logo from '~/components/Logo.vue'
import MainMenu from '~/components/MainMenu.vue'
import CharacterSelect from '~/components/CharacterSelection/CharacterSelect.vue'
import Tavern from '~/components/Tavern/Tavern.vue'

export default {
  components: {
    Logo,
    MainMenu,
    CharacterSelect,
    Tavern
  },
  data() {
    return {
      pageToShow: 'splash'
    }
  },
  methods: {
  
  },
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

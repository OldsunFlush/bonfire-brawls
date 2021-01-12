<template>
  <div class="MainMenu">
    <div class="container">
      <h2>Main menu</h2>
      <div id="newgame">
        <button type="button" class="Button--Save" @click="$emit('launch')">
          New game
        </button>
      </div>
      <div id="loadgame">
        <input
          id="save-name"
          v-model="saveName"
          class="Input--SaveName"
          name="save-name"
          type="text"
        >
        <button type="button" class="Button--Save" @click="saveState()">
          Save
        </button>
        <ul class="SaveList">
          <li
            v-for="(savedGame, index) in savedGames"
            :key="index"
            class="SaveList--Item"
          >
            <span class="SaveList--Item-Index">Save {{ index }}</span>
            <button type="button" class="SaveList--Item-Delete" @click="deleteState()">
              Delete
            </button>
            <div>
              <h3 class="SaveList--Item-Name">
                {{ savedGame.name }}
              </h3>
              <span class="SaveList--Item-Date">
                {{ savedGame.date }}
              </span>
            </div>
          </li>
        </ul>
        <button type="button" @click="$emit('close')">
          Back
        </button>
        <button type="button" @click="loadState()">
          Load
        </button>
        <span>Saved!</span>
        <span>Loaded</span>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainMenu',
  data() {
    return {
      saveName: ''
    }
  },
  computed: {
    savedGames() {
      return this.$store.state.savedgames.saves
    }
  },
  methods: {
    saveState() {
      return this.$store.commit('savedgames/add', { name: this.saveName, date: new Date() })
    },
    loadState() {
      return false
    },
    deleteState() {
      return this.$store.commit('savedgames/remove', this.savedGame)
    }
  }
}
</script>

<style lang="scss" scoped>
.MainMenu {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  color: white;
  background: rgba(black, 0.95);
}

.SaveList {
  list-style: none;
  margin: 0;
  padding: 0;

  .SaveList--Item {
    margin: 2rem;
    padding: 2rem;
    border: 2px solid white;
  }
}
</style>

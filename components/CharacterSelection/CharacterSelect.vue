<template>
  <div class="CharacterSelect" @keydown="handleKeyboard">
    <div class="container">
      <h2>Choose your way!</h2>
      <div class="list-characters">
        <portrait v-for="(character, index) in characters" 
          :is-selected="index == selectionCursor"
          :index="index"
          :character="character" 
          :key="character.name" 
          @select="selectedCharacter = $event"
          @keydown="handleKeyboard"
          @click="focus(character, index)"
          />
      </div>
      <preview :selected-character="selectedCharacter" :key="i" @go="$emit('go')"/>
    </div>
  </div>
</template>

<script>
    import Characters from '@/constants/characters.json'
    import  Portrait from '@/components/CharacterSelection/partials/Portrait.vue'
    import  Preview from '@/components/CharacterSelection/partials/Preview.vue'
    import { first } from 'lodash-es';

    export default {
        name: 'CharacterSelect',
        components: {
          Portrait,
          Preview
        },
        data() {
          return {
            characters: Characters,
            focusedCharacter: null,
            selectedCharacter: Characters[0],
            selectionCursor: 0,
            i: 0
          }
        },
        methods: {
          focus(character, index) {
            this.selectionCursor = index
            this.selectedCharacter = character
            this.i++;
          },
          
          handleKeyboard(e) {
            if (e.key === 'ArrowLeft') {
              this.selectionCursor -= 1
               if(this.selectionCursor < 0) {
                this.selectionCursor = characters.length
              }
            }

            if (e.key === 'ArrowRight') {
              this.selectionCursor += 1
              if(this.selectionCursor > characters.length) {
                this.selectionCursor = 0
              }
            }
          }
        },
    }
</script>

<style lang="scss" scoped>
.list-characters {
  display: flex;
}
</style>
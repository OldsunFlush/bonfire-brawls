<template>
  <div>
    <renderer :size="{ w: 600, h: 400 }">
      <scene>
        <orbit-controls :position="{ z: 7}" :rotation="{ x: 2, y: 0, z: 3 }">
          <camera></camera>
          <audio-listener></audio-listener>
        </orbit-controls>
        <light
          :hex="0xefefff"
          :intensity="2"
          :position="{ x: 50, y: 50, z: 50 }"
        >
        </light>
        <light
          :hex="0xefefff"
          :intensity="2"
          :position="{ x: -50, y: -50, z: -50 }"
        >
        </light>
        <character-model :selected-character="selectedCharacter" />
      </scene>
    </renderer>
    <button @click="$emit('go')">Lancer</button>
  </div>
</template>

<script>
import * as THREE from "three";

import CharacterModel from "@/components/CharacterSelection/partials/CharacterModel.vue";

export default {
  name: "Preview",
  components: {
    CharacterModel
  },
  props: {
    selectedCharacter: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>

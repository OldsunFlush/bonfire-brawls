<template>
  <object3d :position="{ x: 0, z: 0, y: 0 }" base-url="/models/characters/">
    <mesh>
      <m-obj-mtl
        :obj-url="selectedCharacter.model"
        :mtl-url="selectedCharacter.material"
        :process="getBody"
      >
      </m-obj-mtl>
    </mesh>
  </object3d>
</template>

<script>
import * as THREE from "three";
import { Object3D } from "vue-threejs";

export default {
  name: "CharacterModel",
  mixins: [Object3D],
  props: {
    selectedCharacter: {
      type: Object,
      required: true
    }
  },
  methods: {
    getBody(group) {
      console.log(group);
      let body = group.children[0];
      body.material.color.set(0xffffff);
      return body;
    }
  }
};
</script>

<style lang="scss" scoped></style>

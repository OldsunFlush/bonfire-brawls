<template>
  <img src="~assets/images/logo.png" alt="Logo">
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style>
.Logo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

<template>
    <figure :class="['Figure', {'is-selected': isSelected}]" v-on="$listeners">
        <img :src="character.avatar" :alt="character.name">
        <figcaption>{{ character.name }}</figcaption>
    </figure>
</template>

<script>
    export default {
        name: "Portrait",
        props: {
            isSelected: {
                type: Boolean,
                default: false
            },
            character: {
                type: Object,
                default: null
            },
        },
    }
</script>

<style lang="scss" scoped>
.Figure {
    width: 300px;
    height: 300px;
    border: 2px solid transparent;

    &.is-selected {
        border: 2px solid red;
    }

    > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>
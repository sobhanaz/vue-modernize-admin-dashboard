<script setup>
import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg';

const props = defineProps({
    icon: String,
    title: String,
    action: Function,
    isActive: Function
});
</script>
<template>
    <div>
        <div class="menu-item" :class="{ 'is-active': isActive ? isActive() : null }" @click="action" :title="title">
            <svg class="remix">
                <use :xlink:href="`${remixiconUrl}#ri-${icon}`" />
            </svg>
        </div>
    </div>
</template>
<style lang="scss">
.menu-item {
    width: 1.75rem;
    height: 1.75rem;
    color: inherit;
    border: none;
    background-color: transparent;
    border-radius: 0.4rem;
    padding: 0.25rem;
    margin-right: 0.25rem;

    svg {
        width: 100%;
        height: 100%;
        fill: currentColor;
    }

    &.is-active,
    &:hover {
        color: #fff;
        background-color: rgb(var(--v-theme-primary));
    }
}
</style>

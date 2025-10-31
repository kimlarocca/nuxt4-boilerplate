<script setup>
const { setDarkMode, setLightMode, isDarkMode } = useDarkMode()
const navigationItems = [
  { label: "Hash Link", href: "/", hash: "#content" },
  { label: "Styleguide", href: "/styleguide", hash: "" },
]
const visible = ref(false)
</script>

<template>
  <div class="container p-4">
    <header class="flex justify-between items-center">
      <NuxtLink to="/" class="plain clickable" aria-label="home">
        <Logo />
      </NuxtLink>
      <div class="flex justify-between items-center">
        <i
          v-if="isDarkMode"
          @click="setLightMode"
          class="pi pi-sun text-lg clickable mr-3"
        />
        <i v-else @click="setDarkMode" class="pi pi-moon text-lg clickable mr-3" />
        <i
          v-if="navigationItems"
          class="pi pi-bars text-2xl clickable"
          @click="visible = !visible"
          aria-label="Toggle navigation menu"
        />
      </div>
    </header>
    <Drawer v-model:visible="visible" position="right">
      <NuxtLink to="/" class="plain clickable" aria-label="home">
        <Logo class="mb-8" />
      </NuxtLink>
      <p v-for="item in navigationItems" class="mb-4">
        <NuxtLink
          :key="item.label"
          :to="item.href + item.hash"
          class="font-medium decoration-none"
          @click="visible = false"
        >
          {{ item.label }}
        </NuxtLink>
      </p>
    </Drawer>
  </div>
</template>

<style lang="scss">
.p-drawer-header button {
  color: var(--p-button-primary-color) !important;
  background: var(--p-button-primary-background) !important;
  border: none !important;
  &:hover {
    background: var(--p-button-primary-hover-background) !important;
    color: var(--p-button-primary-hover-color) !important;
  }
  &:focus,
  &:focus-visible {
    outline-color: transparent !important;
    box-shadow: none !important;
  }
}
</style>

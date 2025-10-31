<script setup>
const { setDarkMode, setLightMode, isDarkMode } = useDarkMode()
const navigationItems = [
  { label: "Hash Link", href: "/", hash: "#issues" },
  { label: "Contact Us", href: "/contact", hash: "" },
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
          class="pi pi-bars text-2xl"
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

<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="container p-4">
    <Divider class="my-12" />
    <footer>
      <NuxtLink to="/" class="plain clickable" aria-label="home">
        <Logo />
      </NuxtLink>
      <p class="small mt-4">Copyright © {{ currentYear }}. All Rights Reserved.</p>
    </footer>
  </div>
</template>

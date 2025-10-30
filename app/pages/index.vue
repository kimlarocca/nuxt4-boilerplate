<template>
  <div class="hero flex flex-col items-center justify-center">
    <div class="container p-4">
      <h1 class="mb-6">Welcome to the homepage</h1>
      <p class="mb-8 text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>
      <NuxtLink to="/" class="mr-3">
        <Button label="Call To Action" />
      </NuxtLink>
      <NuxtLink to="/">
        <Button label="Outlined Button" variant="outlined" />
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  background: url("/images/hero.jpg") no-repeat center center;
  background-size: cover;
  min-height: 500px;
}
</style>

<script setup>
const supabase = useSupabaseClient()
const loading = ref(true)
const supabaseData = ref(null)

const getData = async () => {
  const { data, error } = await supabase.from("lorem-forum").select(`*`).order("name")
  if (error) {
    console.error(error)
  } else {
    supabaseData.value = data
  }
  loading.value = false
}

onMounted(async () => {
  getData()
})
</script>

<template>
  <div>
    <section class="hero flex flex-col items-center justify-center mb-12">
      <div class="container p-4">
        <h1 class="mb-6">Welcome to the homepage</h1>
        <p class="mb-8 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <NuxtLink to="/" class="mr-3">
          <Button label="Call To Action" />
        </NuxtLink>
      </div>
    </section>

    <section class="container p-4">
      <ProgressSpinner v-if="loading" />
      <p v-else>
        {{ supabaseData }}
      </p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  background: url("/images/hero.jpg") no-repeat center center;
  background-size: cover;
  min-height: 500px;
}
</style>

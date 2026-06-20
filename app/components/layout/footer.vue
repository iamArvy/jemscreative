<script setup lang="ts">
const contacts = [
  {
    label: "Whatsapp",
    value: "https://wa.me/2348111371078",
  },
  {
    label: "Email",
    value: "mailto:hello.jemscreatives@gmail.com",
  },
  {
    label: "Phone",
    value: "tel:07084375922",
  },
];
</script>

<template>
  <footer class="border-t border-border bg-card px-5 py-10 sm:px-8">
    <div
      class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left"
    >
      <NuxtLink to="/" class="font-display text-lg font-extrabold">
        <AppLogo />
      </NuxtLink>
      <p class="text-sm text-muted-foreground">
        Build a career brand that opens doors.
      </p>
      <nav
        class="flex gap-5 text-sm font-medium text-muted-foreground"
        aria-label="Footer"
      >
        <span>Contact:</span>
        <a
          v-for="{ label, value } in contacts"
          :href="value"
          class="hover:text-primary"
        >
          {{ label }}
        </a>
      </nav>
    </div>
  </footer>
</template>

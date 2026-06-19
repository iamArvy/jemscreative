<template>
  <header class="absolute inset-x-0 top-0 z-20">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8"
      aria-label="Main navigation"
    >
      <NuxtLink
        to="/"
        class="flex items-center gap-2 font-display text-lg font-extrabold tracking-tight"
      >
        <span
          class="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground"
        >
          <Icon name="lucide:sparkles" class="size-4" />
        </span>
        JEMSCREATIVES<span class="text-primary">.</span>
      </NuxtLink>
      <WaitlistDialog>
        <Button variant="ink" class="hidden sm:inline-flex">
          Join early <Icon name="lucide:arrow-right" />
        </Button>
      </WaitlistDialog>
    </nav>
  </header>
</template>

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
        <AppLogo />
      </NuxtLink>
      <WaitlistDialog>
        <Button variant="ink" class="hidden sm:inline-flex">
          Join early <Icon name="lucide:arrow-right" />
        </Button>
      </WaitlistDialog>
    </nav>
  </header>
</template>

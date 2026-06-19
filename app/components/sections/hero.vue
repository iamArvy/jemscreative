<template>
  <section
    class="hero-glow relative flex min-h-[780px] items-center px-5 pb-20 pt-32 sm:px-8 sm:pt-40"
    aria-labelledby="hero-title"
  >
    <div class="mx-auto w-full max-w-5xl text-center">
      <div
        class="animate-rise inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card px-4 py-2 text-xs font-bold tracking-[0.16em] text-primary shadow-soft"
      >
        <span aria-hidden="true">🚀</span> EARLY ACCESS
      </div>
      <h1
        id="hero-title"
        class="animate-rise mx-auto mt-8 max-w-4xl font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] [animation-delay:80ms] sm:text-6xl lg:text-7xl"
      >
        Stop Being Invisible. Build a Career Brand That
        <span class="text-primary">Opens Doors.</span>
      </h1>
      <p
        class="animate-rise mx-auto mt-7 max-w-2xl text-base leading-7 text-muted-foreground [animation-delay:160ms] sm:text-lg"
      >
        A practical playbook for students, graduates, and early professionals
        ready to attract better opportunities through sharper CVs, LinkedIn
        optimization, and intentional personal branding.
      </p>
      <div
        id="waitlist"
        class="animate-rise mx-auto mt-9 scroll-mt-8 [animation-delay:240ms]"
      >
        <WaitlistDialog>
          <WaitlistTrigger class="min-w-[240px]">
            Join the Waitlist
            <Icon name="lucide:arrow-right" />
          </WaitlistTrigger>
        </WaitlistDialog>
      </div>
      <p class="mt-4 text-sm font-medium text-muted-foreground">
        <Icon name="lucide:gift" class="mr-1 inline size-4 text-primary" /> Get
        40% off and exclusive bonuses reserved for early subscribers.
      </p>
      <div
        class="mt-11 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-semibold text-foreground/75"
      >
        <span
          v-for="item in [
            'No spam. Ever.',
            'Early-bird pricing',
            'Cancel anytime',
          ]"
          key="item"
          class="flex items-center gap-2"
        >
          <Icon name="check" class="size-4 text-success" />
          {{ item }}
        </span>
      </div>
    </div>
  </section>
</template>

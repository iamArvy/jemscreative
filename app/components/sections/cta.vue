<script setup lang="ts">
const ctaItems = [
  "35% Launch Discount",
  "Early Access",
  "Exclusive Bonuses",
  "Priority Notification",
];
</script>

<template>
  <section class="px-5 pb-24 sm:px-8 sm:pb-32" aria-labelledby="final-title">
    <div
      class="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-primary px-6 py-16 text-center text-primary-foreground shadow-cta sm:px-12 sm:py-24"
    >
      <div
        class="absolute -left-24 -top-24 size-72 rounded-full bg-sky/30 blur-3xl"
      />
      <div class="relative mx-auto max-w-3xl">
        <p
          class="text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground/70"
        >
          Your career deserves to be seen
        </p>
        <h2
          id="final-title"
          class="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-6xl"
        >
          Every Day You Stay Invisible Has a Cost.
        </h2>
        <p
          class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/75"
        >
          Opportunities go to people who know how to position themselves. Join
          the waitlist and make sure your next move is backed by a brand that
          speaks before you do.
        </p>
        <div
          class="my-9 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-semibold"
        >
          <span
            v-for="item in ctaItems"
            key="item"
            class="flex items-center gap-2"
          >
            <Icon name="lucide:check" class="size-4" />
            {{ item }}
          </span>
        </div>
        <div class="mx-auto max-w-2xl">
          <WaitlistDialog>
            <WaitlistTrigger class="min-w-[240px]">
              Join the Waitlist <Icon name="lucide:arrow-right" />
            </WaitlistTrigger>
          </WaitlistDialog>
        </div>
      </div>
    </div>
  </section>
</template>

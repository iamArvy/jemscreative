<script setup lang="ts">
const currentReality = [
  "Sending countless applications",
  "Using generic CVs",
  "A weak LinkedIn profile",
  "No recruiter visibility",
  "Constant rejection—or silence",
];
const betterReality = [
  "An ATS-friendly CV",
  "An optimized LinkedIn profile",
  'A strong personal brand", "Recruiters finding you", "More interviews and opportunities',
];
</script>
<template>
  <section class="px-5 py-24 sm:px-8 sm:py-32" aria-labelledby="future-title">
    <div class="mx-auto max-w-6xl">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-sm font-bold uppercase tracking-[0.18em] text-primary">
          Your next chapter
        </p>
        <h2
          id="future-title"
          class="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-5xl"
        >
          Imagine Applying For Jobs One Year From Now…
        </h2>
        <p class="mt-5 text-muted-foreground">
          Same talent. Completely different positioning—and a very different
          result.
        </p>
      </div>
      <div class="mt-14 grid gap-5 lg:grid-cols-2">
        <article
          class="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-10"
        >
          <span
            class="grid size-11 place-items-center rounded-2xl bg-muted text-muted-foreground"
          >
            <Icon name="lucide:x" />
          </span>
          <h3 class="mt-6 font-display text-2xl font-bold">
            The Current Reality
          </h3>
          <ul class="mt-7 space-y-4 text-muted-foreground">
            <li
              v-for="item in currentReality"
              key="item"
              class="flex items-center gap-3"
            >
              <Icon name="lucide:x" class="size-5 shrink-0 text-destructive" />
              {{ item }}
            </li>
          </ul>
        </article>
        <article
          class="relative overflow-hidden rounded-3xl border border-primary/20 bg-secondary p-7 text-secondary-foreground shadow-card sm:p-10"
        >
          <div
            class="absolute -right-20 -top-20 size-56 rounded-full bg-primary/35 blur-3xl"
          />
          <span
            class="relative grid size-11 place-items-center rounded-2xl bg-primary text-primary-foreground"
          >
            <Icon name="lucide:check" />
          </span>
          <h3 class="relative mt-6 font-display text-2xl font-bold">
            The Better Reality
          </h3>
          <ul class="relative mt-7 space-y-4 text-secondary-foreground/75">
            <li
              v-for="item in betterReality"
              key="item"
              class="flex items-center gap-3"
            >
              <Icon name="lucide:check" class="size-5 shrink-0 text-sky" />
              {{ item }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

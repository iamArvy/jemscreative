<script setup lang="ts">
const talents = [
  {
    icon: "lucide:target",
    title: "Clarity",
    text: "Know the value you bring and communicate it without vague buzzwords.",
  },
  {
    icon: "lucide:sparkles",
    title: "Credibility",
    text: "Turn your experience into specific proof that earns trust quickly.",
  },
  {
    icon: "lucide:megaphone",
    title: "Visibility",
    text: "Show up consistently where recruiters and decision-makers look.",
  },
  {
    icon: "lucide:badge-check",
    title: "Positioning",
    text: "Become the clear fit—not another qualified name in the pile.",
  },
];
</script>
<template>
  <section
    class="bg-card px-5 py-24 sm:px-8 sm:py-32"
    aria-labelledby="talent-title"
  >
    <div
      class="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"
    >
      <div>
        <p class="text-sm font-bold uppercase tracking-[0.18em] text-primary">
          Why this playbook exists
        </p>
        <h2
          id="talent-title"
          class="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl"
        >
          Talent Alone Isn't Enough
        </h2>
        <p class="mt-6 text-lg leading-8 text-muted-foreground">
          Thousands of qualified people compete for the same opportunities. The
          difference is rarely potential alone. It's whether the right people
          can quickly understand your value.
        </p>
        <p class="mt-4 text-lg leading-8 text-foreground">
          Visibility gets you considered. Positioning makes you memorable.
        </p>
      </div>
      <div class="grid gap-4 sm:grid-cols-2">
        <article
          v-for="{ icon, title, text } in talents"
          key="title"
          class="rounded-3xl border border-border bg-background p-6 transition duration-300 hover:-translate-y-1 hover:shadow-card"
        >
          <span
            class="grid size-11 place-items-center rounded-2xl bg-accent text-primary"
          >
            <Icon :name="icon" />
          </span>
          <h3 class="mt-5 font-display text-lg font-bold">{{ title }}</h3>
          <p class="mt-2 text-sm leading-6 text-muted-foreground">{{ text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

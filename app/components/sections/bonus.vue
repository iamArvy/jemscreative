<script setup lang="ts">
const bonuses = [
  {
    title: "ATS-Compliant CV Template",
    description:
      "Aprofessionally structured template designed to help you implement the frameworks immediately.",
  },
  {
    title: "CoverLetter Template Pack",
    description:
      "Ready-to-edit cover letter templates you can adapt to different opportunities.",
  },
  {
    title: "ATS Power Words List",
    description:
      "A curated collection of action verbs and impact-driven language designed to strengthen your applications.",
  },
  {
    title: "LinkedIn Headline Formula Sheet",
    description:
      "The exact framework used to create recruiter-friendly headlines that increase profile visibility.",
  },
  {
    title: "Free LinkedIn Banner Design",
    description:
      "A custom-designed LinkedIn banner to instantly elevate your professional presence.",
  },
];
</script>
<template>
  <section
    class="bg-secondary px-5 py-24 text-secondary-foreground sm:px-8 sm:py-32"
    aria-labelledby="bonus-title"
  >
    <div class="mx-auto max-w-6xl">
      <div class="mx-auto max-w-3xl text-center">
        <span
          class="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-sm font-bold text-sky"
        >
          <Icon name="lucide:gift" class="size-4" /> Join Early. Get Rewarded.
        </span>
        <h2
          id="bonus-title"
          class="mt-6 font-display text-4xl font-extrabold tracking-tight sm:text-5xl"
        >
          Join Early. Get Rewarded.
        </h2>
        <p class="mt-5 text-secondary-foreground/65">
          Five ready-to-use resources that help you move from learning to action
          faster.
        </p>
      </div>
      <div class="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <article
          v-for="({ title, description }, index) in bonuses"
          key="bonus"
          class="rounded-3xl border border-secondary-foreground/10 bg-secondary-foreground/5 p-6 transition hover:-translate-y-1 hover:bg-secondary-foreground/10"
        >
          <span class="font-display text-sm font-bold text-sky"
            >BONUS 0{{ index + 1 }}</span
          >
          <Icon
            name="lucide:gift"
            class="mt-8 size-8 text-primary-foreground"
          />
          <h3 class="mt-5 font-display text-lg font-bold">{{ title }}</h3>
          <p class="mt-3 text-sm text-secondary-foreground/55">
            {{ description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

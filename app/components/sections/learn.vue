<script setup lang="ts">
const lessons = [
  {
    icon: "lucide:search-check",
    title: "ATS Optimization",
    text: "Understand how screening systems read your application—and make every keyword count.",
  },
  {
    icon: "lucide:search-check",
    title: "Professional CV Framework",
    text: "Build a clear, focused CV that communicates value before a recruiter loses interest.",
  },
  {
    icon: "lucide:mail",
    title: "Winning Cover Letters",
    text: "Write concise, relevant letters that connect your experience to the role.",
  },
  {
    icon: "lucide:linkedin",
    title: "LinkedIn Optimization",
    text: "Turn your profile into an opportunity magnet with stronger positioning and proof.",
  },
  {
    icon: "lucide:megaphone",
    title: "Personal Branding Strategy",
    text: "Create a credible professional identity people can understand, trust, and remember.",
  },
  {
    icon: "lucide:target",
    title: "Visibility Framework",
    text: "Build a repeatable system for showing your expertise and staying top of mind.",
  },
];
</script>

<template>
  <section class="px-5 py-24 sm:px-8 sm:py-32" aria-labelledby="learn-title">
    <div class="mx-auto max-w-6xl">
      <div class="max-w-2xl">
        <p class="text-sm font-bold uppercase tracking-[0.18em] text-primary">
          Inside the playbook
        </p>
        <h2
          id="learn-title"
          class="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl"
        >
          What You'll Learn
        </h2>
        <p class="mt-5 text-lg text-muted-foreground">
          Practical systems you can use immediately—without becoming a content
          creator or pretending to be someone you're not.
        </p>
      </div>
      <div class="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="({ icon, title, text }, index) in lessons"
          key="title"
          class="group rounded-3xl border border-border bg-card p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-card"
        >
          <div class="flex items-center justify-between">
            <span
              class="grid size-12 place-items-center rounded-2xl bg-accent text-primary transition group-hover:bg-primary group-hover:text-primary-foreground"
            >
              <Icon :name="icon" />
            </span>
            <span class="font-display text-sm font-bold text-muted-foreground"
              >0{{ index + 1 }}</span
            >
          </div>
          <h3 class="mt-7 font-display text-xl font-bold">{{ title }}</h3>
          <p class="mt-3 leading-7 text-muted-foreground">{{ text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const lessons = [
  {
    title: "The Gatekeeper",
    subtitle: "Cracking the ATS Code",
    text: "Learn how Applicant Tracking Systems actually work, why many applications disappear before reaching recruiters, and how to structure your CV so it survives the first screening process.",
  },
  {
    title: "The Blueprint",
    subtitle: "Building an ATS-Compliant CV",
    text: "Discover a proven framework for creating a CV that passes software screening while still persuading human recruiters",
  },
  {
    title: "The Cover Letter Framework",
    subtitle: "Writing to Convert",
    text: "You'll learn how to create openings that grab attention, communicate value effectively, and position yourself as a solution rather than just another applicant",
  },
  {
    title: "The Inbound Career Magnet",
    subtitle: "LinkedIn Optimization",
    text: "Transform your LinkedIn profile into a recruiter-friendly asset that increases visibility, improves discoverability, and positions you for opportunities beyond job boards.",
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
        <!-- <p class="mt-5 text-lg text-muted-foreground">
          Practical systems you can use immediately—without becoming a content
          creator or pretending to be someone you're not.
        </p> -->
      </div>
      <div class="mt-14 grid gap-5 md:grid-cols-2">
        <article
          v-for="({ title, subtitle, text }, index) in lessons"
          key="title"
          class="group rounded-3xl border border-border bg-card p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-card"
        >
          <div class="flex items-center justify-between">
            <h3 class="font-display text-sms font-bold text-primary">
              {{ title }}
            </h3>

            <span class="font-display text-sm font-bold text-muted-foreground"
              >0{{ index + 1 }}</span
            >
          </div>

          <h4 class="mt-4 font-display text-xl font-bold">{{ subtitle }}</h4>
          <p class="mt-3 leading-7 text-muted-foreground">{{ text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

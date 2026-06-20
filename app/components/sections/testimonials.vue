<script setup lang="ts">
import amaraAvatar from "@/assets/images/testimonial-amara.jpg";
import danielAvatar from "@/assets/images/testimonial-daniel.jpg";
import tobiAvatar from "@/assets/images/testimonial-tobi.jpg";

const testimonials = [
  {
    name: "Amara K.",
    role: "Recent graduate",
    image: amaraAvatar,
    quote:
      "I thought this was just another CV guide until I read the ATS section. It completely changed how I think about applications. I immediately rewrote my CV using the framework and realized how many mistakes I had been making.",
  },
  {
    name: "Daniel R.",
    role: "NYSC Member",
    image: danielAvatar,
    quote:
      "The LinkedIn module alone was worth it. I updated my headline and About section using the templates and suddenly my profile looked like someone who knew what they were doing professionally.",
  },
  {
    name: "Tobi A.",
    role: "Early Career Professional",
    image: tobiAvatar,
    quote:
      "What stood out to me was how practical everything was. No fluff. No theory. Every page felt like something I could implement immediately.",
  },
];
</script>

<template>
  <section class="px-5 py-24 sm:px-8 sm:py-32" aria-labelledby="stories-title">
    <div class="mx-auto max-w-6xl">
      <div class="text-center">
        <p class="text-sm font-bold uppercase tracking-[0.18em] text-primary">
          Early reader feedback
        </p>
        <h2
          id="stories-title"
          class="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl"
        >
          Positioning Changes the Conversation
        </h2>
      </div>
      <div class="mt-14 grid gap-5 lg:grid-cols-3">
        <figure
          v-for="{ name, role, image, quote } in testimonials"
          key="name"
          class="rounded-3xl border border-border bg-card p-7 shadow-soft flex flex-col"
        >
          <div class="flex gap-1 text-primary" aria-label="5 out of 5 stars">
            <Icon
              name="lucide:star"
              v-for="i in Array.from({ length: 5 })"
              key="i"
              class="size-4 fill-current"
            />
          </div>
          <blockquote class="mt-6 text-base leading-7 text-foreground flex-1">
            “{{ quote }}”
          </blockquote>
          <figcaption
            class="mt-7 flex items-center gap-3 border-t border-border pt-6"
          >
            <img
              :src="image"
              :alt="name + ' ' + role"
              loading="lazy"
              :width="512"
              :height="512"
              class="size-12 rounded-full object-cover"
            />
            <div>
              <p class="font-bold">{{ name }}</p>
              <p class="text-sm text-muted-foreground">{{ role }}</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import josiahAvatar from "@/assets/images/josiah.jpeg";
import godstimeAvatar from "@/assets/images/godstime.jpeg";
import elishaAvatar from "@/assets/images/elisha.jpeg";

const testimonials = [
  {
    name: "Josiah O.",
    role: "Architectural Engineer",
    image: josiahAvatar,
    quote:
      "The Career Branding Playbook is a valuable resource for job seekers and fresh graduates. It provides practical, actionable guidance that helps readers position themselves strategically in today's competitive job market. The content is clear, relatable, and easy to apply, making it a resource professionals can return to throughout their careers.",
  },
  {
    name: "Godstime O.",
    role: "Entrepreneur",
    image: godstimeAvatar,
    quote:
      "Before reading the Career Branding Playbook, I had never heard of ATS and always believed that visually designed CVs were the best option. This guide completely changed my perspective by showing me how recruiters and screening systems actually evaluate applications. The content is informative, well-organized, and practical, making complex concepts easy to understand and apply.",
  },
  {
    name: "Elisha I.",
    role: "IT Professional",
    image: elishaAvatar,
    quote:
      "I'm not naturally a book person, but this felt more like a practical tutorial than a typical book. The content was easy to understand, well-organized, and clearly emphasized the most important points. I especially liked how each section was broken down to help readers better understand and learn.",
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
          <div
            class="flex gap-1 text-primary justify-center"
            aria-label="5 out of 5 stars"
          >
            <Icon
              v-for="i in Array.from({ length: 5 })"
              key="i"
              name="heroicons:star-solid"
              class="size-4 text-primary"
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

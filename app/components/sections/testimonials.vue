<script setup lang="ts">
import amaraAvatar from "@/assets/images/testimonial-amara.jpg";
import danielAvatar from "@/assets/images/testimonial-daniel.jpg";
import tobiAvatar from "@/assets/images/testimonial-tobi.jpg";

const testimonials = [
  {
    name: "Amara K.",
    role: "Marketing graduate",
    image: amaraAvatar,
    quote:
      "I stopped treating my CV like a list of duties. The positioning approach helped me tell a much clearer story—and recruiters finally started replying.",
  },
  {
    name: "Daniel R.",
    role: "Junior data analyst",
    image: danielAvatar,
    quote:
      "The LinkedIn framework was practical and specific. Within weeks, I had more profile views and two conversations I didn't have to chase.",
  },
  {
    name: "Tobi A.",
    role: "Associate product manager",
    image: tobiAvatar,
    quote:
      "This is the guidance I wish I had after graduation: straightforward, honest, and focused on making your value visible.",
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
          class="rounded-3xl border border-border bg-card p-7 shadow-soft"
        >
          <div class="flex gap-1 text-primary" aria-label="5 out of 5 stars">
            <Icon
              name="lucide:star"
              v-for="i in Array.from({ length: 5 })"
              key="i"
              class="size-4 fill-current"
            />
          </div>
          <blockquote class="mt-6 text-base leading-7 text-foreground">
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

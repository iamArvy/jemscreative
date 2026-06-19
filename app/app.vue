<script setup lang="ts">
// const seo = {
//   title: "Career Brand Playbook Waitlist | Positioned",
//   description:
//     "Join the Career Brand Playbook waitlist and learn to build an ATS-friendly CV, optimize LinkedIn, and attract better career opportunities.",
//   ogTitle: "Stop Being Invisible — Career Brand Playbook",
//   ogDescription:
//     "Join early for 40% off, practical career positioning frameworks, and exclusive launch bonuses.",
// };
</script>
<template>
  <div class="min-h-screen overflow-hidden bg-background text-foreground">
    <LayoutHeader />
    <main>
      <SectionsHero />
      <SectionsFuture />
      <SectionsTalent />
      <SectionsLearn />
      <SectionsBonus />
      <SectionsTestimonials />
      <SectionsCta />
    </main>
    <LayoutFooter />
    <!-- <div
      class="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 p-3 shadow-card backdrop-blur sm:hidden"
    >
      <WaitlistDialog>
        <Button variant="hero" size="xl" class="w-full">
          Secure My Spot <ArrowRight />
        </Button>
      </WaitlistDialog>
    </div> -->
  </div>
</template>

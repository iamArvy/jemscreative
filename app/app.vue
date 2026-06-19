<script setup lang="ts"></script>
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
    <div
      class="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 p-3 shadow-card backdrop-blur sm:hidden"
    >
      <WaitlistDialog>
        <Button variant="hero" size="xl" class="w-full">
          Secure My Spot <Icon name="lucide:arrow-right" />
        </Button>
      </WaitlistDialog>
    </div>
  </div>
</template>

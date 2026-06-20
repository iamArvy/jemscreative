<script setup lang="ts">
import { useWaitlistForm } from "~/composables/useWaitlistForm";
import { cn } from "~/lib/utils";

const open = ref<boolean>(false);
// const status = ref<"idle" | "loading" | "success">("idle")

const { success, isSubmitting, onSubmit, resetForm, meta } = useWaitlistForm();

const handleOpenChange = (next: boolean) => {
  open.value = next;
  if (!next) window.setTimeout(resetForm, 300);
};

const inputClass =
  "h-14 rounded-2xl border border-input bg-card px-5 text-base outline-none transition focus:ring-2 focus:ring-ring placeholder:text-muted-foreground";
</script>
<template>
  <Dialog :onOpenChange="handleOpenChange">
    <DialogTrigger asChild>
      <slot />
    </DialogTrigger>
    <DialogContent
      class="max-w-md gap-0 overflow-hidden rounded-3xl border border-border bg-card p-0 shadow-card sm:rounded-3xl"
    >
      <div class="bg-primary p-6 text-primary-foreground">
        <DialogHeader class="text-left">
          <span
            class="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-primary-foreground/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground"
          >
            <Icon name="lucide:gift" class="size-4" /> Early Access
          </span>
          <DialogTitle
            class="font-display text-2xl font-extrabold tracking-tight"
            >Join the Waitlist</DialogTitle
          >
          <DialogDescription
            class="mt-2 text-sm leading-6 text-primary-foreground/80"
          >
            Reserve your spot for 35% off launch pricing and free bonus
            templates.
          </DialogDescription>
        </DialogHeader>
      </div>
      <div class="p-6 pt-2">
        <div
          v-if="success"
          class="flex min-h-65 flex-col items-center justify-center gap-3 rounded-2xl bg-accent px-5 text-center"
          role="status"
        >
          <div
            class="grid size-14 place-items-center rounded-full bg-primary text-primary-foreground"
          >
            <Icon name="lucide:badge-check" class="size-7" />
          </div>
          <p class="font-display text-xl font-bold text-foreground">
            You're on the list!
          </p>
          <p class="text-sm text-muted-foreground">
            We'll send launch details and your early-bird discount to your
            inbox.
          </p>
          <DialogClose as-child>
            <Button variant="outline" class="mt-2 rounded-xl"> Close </Button>
          </DialogClose>
        </div>
        <form
          v-else
          @submit="onSubmit"
          class="grid gap-4"
          aria-label="Join the waitlist"
        >
          <FormField name="name" v-slot="{ componentField }">
            <FormItem>
              <FormLabel for="waitlist-name"> Full name </FormLabel>
              <FormControl>
                <Input
                  id="waitlist-name"
                  type="text"
                  required
                  :minLength="2"
                  :maxLength="100"
                  autoComplete="name"
                  placeholder="e.g. Sarah Johnson"
                  :class="inputClass"
                  v-bind="componentField"
                />
              </FormControl>
            </FormItem>
          </FormField>
          <FormField name="email" v-slot="{ componentField }">
            <FormItem>
              <FormLabel for="waitlist-email"> Email Address </FormLabel>
              <FormControl>
                <Input
                  id="waitlist-email"
                  type="email"
                  required
                  :maxLength="254"
                  autoComplete="email"
                  placeholder="you@example.com"
                  :class="inputClass"
                  v-bind="componentField"
                />
              </FormControl>
            </FormItem>
          </FormField>
          <FormField name="phone" v-slot="{ componentField }">
            <FormItem>
              <FormLabel for="waitlist-phone">Phone number </FormLabel>
              <FormControl>
                <InputGroup :class="inputClass">
                  <InputGroupInput
                    id="waitlist-phone"
                    placeholder="810 123 4567"
                    type="tel"
                    required
                    :minLength="7"
                    :maxLength="20"
                    autoComplete="tel"
                    v-bind="componentField"
                  />
                  <InputGroupAddon> +234 </InputGroupAddon>
                </InputGroup>
              </FormControl>
            </FormItem>
          </FormField>
          <Button
            type="submit"
            variant="hero"
            size="xl"
            class="mt-2 w-full"
            :disabled="isSubmitting || !meta.valid"
          >
            <template v-if="isSubmitting">
              <Spinner /> Securing your spot…
            </template>
            <template v-else>
              Secure My Spot <Icon name="lucide:arrow-right" />
            </template>
          </Button>
          <p class="text-center text-xs text-muted-foreground">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </form>
      </div>
    </DialogContent>
  </Dialog>
</template>

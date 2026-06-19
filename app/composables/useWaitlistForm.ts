import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import z from "zod";

export function useWaitlistForm() {
  const createSchema = z.object({
    name: z.string().min(2).max(120),
    email: z.string().email(),
    phone: z.string().max(11),
  });

  const formSchema = toTypedSchema(createSchema);

  const { handleSubmit, isSubmitting, resetForm, meta } = useForm({
    validationSchema: formSchema,
  });
  const success = ref<boolean>(false);

  const onSubmit = handleSubmit(async (formValues) => {
    try {
      window.setTimeout(() => (success.value = true), 900);
      success.value = true;
    } catch (e: unknown) {
      console.error(e);
      // error(handleError(e, "Error saving ad"));
    }
  });

  return {
    success,
    onSubmit,
    isSubmitting,
    resetForm,
    meta,
  };
}

import { Button } from "~/components/ui/button";
import {
  createFormHook,
  createFormHookContexts,
  useStore,
} from "@tanstack/react-form";

import { z } from "zod/v4";
import { Label } from "@radix-ui/react-label";
import { FormInput } from "~/components/ui/form/input-form";

export default function VoteForm() {
  const { fieldContext, formContext } = createFormHookContexts();

  const categories = [
    "song",
    "presentation",
    "stageshow",
    "outfit",
    "glitter",
  ] as const;

  const { useAppForm } = createFormHook({
    fieldComponents: {
      Input: FormInput,
      Button,
    },
    formComponents: {
      Button,
    },
    fieldContext,
    formContext,
  });

  const ratingCategoriesSchema = z.object({
    song: z
      .number()
      .int()
      .min(0, { message: "Minimum rating is 0" })
      .max(10, { message: "Maximum rating is 10" }),
    presentation: z
      .number()
      .int()
      .min(0, { message: "Minimum rating is 0" })
      .max(10, { message: "Maximum rating is 10" }),
    stageshow: z
      .number()
      .int()
      .min(0, { message: "Minimum rating is 0" })
      .max(10, { message: "Maximum rating is 10" }),
    outfit: z
      .number()
      .int()
      .min(0, { message: "Minimum rating is 0" })
      .max(10, { message: "Maximum rating is 10" }),
    glitter: z
      .number()
      .int()
      .min(0, { message: "Minimum rating is 0" })
      .max(10, { message: "Maximum rating is 10" }),
  });

  const form = useAppForm({
    validators: {
      onSubmit: ratingCategoriesSchema,
    },
    onSubmit: ({ value }) => {
      // add to the database
      console.log("Form submitted with values:", value);
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      className="flex flex-col gap-4"
    >
      {categories.map((category) => (
        <div key={category} className="flex flex-row gap-2 items-center">
          <Label className=" font-bold">{category}</Label>
          <form.AppField name={category}>
            {(field) => (
              <>
                <FormInput field={field} type="number" />
                {field.state.meta.errors.map((error, i) => (
                  <div key={field.name} className="error">
                    {error?.message}
                  </div>
                ))}
              </>
            )}
          </form.AppField>
        </div>
      ))}

      <Button type="submit">Submit</Button>
    </form>
  );
}

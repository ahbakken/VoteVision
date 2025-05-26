import { useState } from "react";
import { set, z } from "zod/v4";

import { Button } from "~/components/ui/button";
import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import { Label } from "@radix-ui/react-label";

import { FormInput } from "~/components/ui/form/input-form";

interface VoteFormProps {
  country: string;
}

export default function VoteForm({ country }: VoteFormProps) {
  const json = localStorage.getItem(country);
  const data = json ? JSON.parse(json) : null;

  const categories = [
    "song",
    "presentation",
    "stageshow",
    "outfit",
    "glitter",
  ] as const;

  const { fieldContext, formContext } = createFormHookContexts();

  const [saved, setSaved] = useState(false);

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
    defaultValues: {
      song: data?.song ?? 0,
      presentation: data?.presentation ?? 0,
      stageshow: data?.stageshow ?? 0,
      outfit: data?.outfit ?? 0,
      glitter: data?.glitter ?? 0,
    },
    validators: {
      onSubmit: ratingCategoriesSchema,
      onChange: () => {
        setSaved(false);
      },
    },
    onSubmit: ({ value }) => {
      localStorage.setItem(country, JSON.stringify(value));
      // add to the database
      console.log("Form submitted with values:", value);
      setSaved(true);
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
        <div key={category} className="flex flex-row gap-2">
          <form.AppField name={category}>
            {(field) => (
              <div className="flex flex-col gap-1">
                <Label className=" font-bold">{category}</Label>
                <FormInput field={field} type="number" />
                {field.state.meta.errors.map((error, i) => (
                  <div key={field.name} className="error">
                    {error?.message}
                  </div>
                ))}
              </div>
            )}
          </form.AppField>
        </div>
      ))}

      <Button className={saved ? "bg-green-700" : ""} type="submit">
        {saved ? "Saved" : "Submit"}
      </Button>
    </form>
  );
}

import { Button } from "~/components/ui/button";
import { createFormHook, createFormHookContexts } from "@tanstack/react-form";

import { z } from "zod/v4";
import { Input } from "~/components/ui/input";
import { Label } from "@radix-ui/react-label";

export default function VoteForm() {
  const { fieldContext, formContext } = createFormHookContexts();

  const { useAppForm } = createFormHook({
    fieldComponents: {
      Input,
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
      song: 0,
      presentation: 0,
      stageshow: 0,
      outfit: 0,
      glitter: 0,
    },
    validators: {
      onChange: ratingCategoriesSchema,
    },
    onSubmit: ({ value }) => {
      // add to the database
      alert(JSON.stringify(value, null, 2));
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
      <div className="flex flex-row gap-2 items-center">
        <Label className=" font-bold">Song</Label>
        <form.AppField
          name="song"
          children={(field) => <field.Input type="number" />}
        />
      </div>
      <div className="flex flex-row gap-2 items-center">
        <Label className=" font-bold">Presentation</Label>
        <form.AppField
          name="presentation"
          children={(field) => <field.Input type="number" />}
        />
      </div>
      <div className="flex flex-row gap-2 items-center">
        <Label className=" font-bold">Stage Show</Label>
        <form.AppField
          name="stageshow"
          children={(field) => <field.Input type="number" />}
        />
      </div>
      <div className="flex flex-row gap-2 items-center">
        <Label className=" font-bold">Outfit</Label>
        <form.AppField
          name="outfit"
          children={(field) => <field.Input type="number" />}
        />
      </div>
      <div className="flex flex-row gap-2 items-center">
        <Label className=" font-bold">Glitter</Label>
        <form.AppField
          name="glitter"
          children={(field) => <field.Input type="number" />}
        />
      </div>
      <form.AppField
        name="glitter"
        children={(field) => (
          <field.Button
            type="submit"
            variant="default"
            className="bg-pink-500  hover:bg-pink-600  font-bold py-2 px-4 rounded"
          >
            Submit
          </field.Button>
        )}
      />
    </form>
  );
}

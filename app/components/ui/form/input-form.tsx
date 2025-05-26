import { Input } from "~/components/ui/input";

export function FormInput({
  field,
  ...props
}: {
  field: any;
} & React.ComponentProps<typeof Input>) {
  return (
    <Input
      name={field.name}
      value={field.state.value ?? ""}
      onChange={(e) => field.handleChange(e.target.valueAsNumber)}
      onBlur={field.handleBlur}
      aria-invalid={!field.state.meta.isValid}
      {...props}
    />
  );
}

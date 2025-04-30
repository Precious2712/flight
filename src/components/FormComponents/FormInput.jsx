
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const FormInput = ({ control, name, config}) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{config.label}</FormLabel>
        <FormControl>
          <Input 
            placeholder={config.placeholder} 
            {...field} 
            required={config.required}
            type={config.type || "text"}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

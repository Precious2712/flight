import { useState } from "react";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

export function AuthForm({ 
  fields, 
  onSubmit, 
  title, 
  subtitle, 
  submitText, 
  footer,
  className,
  showPassword,
  togglePasswordVisibility
}) {
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm({
    defaultValues: Object.fromEntries(
      fields.map(field => [field.name, ""])
    ),
  });

  const handleSubmit = async (values) => {
    setIsLoading(true);
    try {
      await onSubmit(values);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("w-full max-w-md mx-auto p-6 space-y-6", className)}>
      <div className="space-y-2 text-center">
        <h1 className="text-2xl lg:text-3xl font-bold">{title}</h1>
        <p className="text-xs lg:text-muted-foreground">{subtitle}</p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 ">
          {fields.map((field) => (
            <FormField
              key={field.name}
              control={form.control}
              name={field.name}
              rules={field.validation}
              render={({ field: fieldProps }) => (
                <FormItem>
                  <FormLabel>{field.label}</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <input
                        type={field.type}
                        className="w-full h-9 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        placeholder={field.placeholder}
                        {...fieldProps}
                      />
                      {field.name === "password" && (
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        >
                          {showPassword ? <Eye className="h-5 w-5 text-gray-500" /> : <EyeOff className="h-5 w-5 text-gray-500" />}
                        </button>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Processing..." : submitText}
          </Button>
        </form>
      </Form>
      
      {footer && (
        <div className="text-center text-sm text-muted-foreground">
          {footer}
        </div>
      )}
    </div>
  );
}

"use client";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { formValidation } from "@/lib/validations/formValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createTitle } from "@/lib/actions/titleAction";

type Input = z.infer<typeof formValidation>;

const InputFrom = () => {
  const form = useForm<Input>({
    resolver: zodResolver(formValidation),
    defaultValues: {
      title: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formValidation>) => {
    await createTitle(values.title);

    form.reset();
  };
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Input Todo</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default InputFrom;

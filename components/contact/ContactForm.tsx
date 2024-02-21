"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input"
import { Textarea } from "@nextui-org/input";
import { useForm } from "react-hook-form";
import { z } from "zod";


const contactSchema = z.object({
  email: z.string().email(),
  title: z.string().min(5, "Title must be of at least 5 characters"),
  description: z.string().min(10, "Description must be of at least 10 character")
})
const submitHandler = (data: z.infer<typeof contactSchema>) => {
  console.log("form data= ", data)
}
export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof contactSchema>>({ resolver: zodResolver(contactSchema) })
  return (
    <form onSubmit={handleSubmit(submitHandler)} >
      <div className="my-2">
        <Input radius="sm" isInvalid={errors.email?.message ? true : false}  {...register("email")} errorMessage={errors.email?.message} color="primary" variant="bordered" label="Email" placeholder="Enter your Email" />
      </div>
      <div className="my-2">
        <Input radius="sm" isInvalid={errors.title?.message ? true : false} {...register("title")} errorMessage={errors.title?.message} color="primary" variant="bordered" label="Title" placeholder="Enter the Title" />
      </div>
      <div className="my-2">
        <Textarea radius="sm" isInvalid={errors.description?.message ? true : false} {...register("description")} errorMessage={errors.description?.message} color="primary" variant="bordered" minRows={6}
          label="Description" placeholder="Enter your description">
        </Textarea>
      </div>
      <Button className="mt-3" type="submit" variant="flat" color="primary" radius="sm" >Submit</Button>
    </form >
  )
}
"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input"
import { Textarea } from "@nextui-org/input";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";


const contactSchema = z.object({
  email: z.string().email(),
  name: z.string().min(5, "Name must be of at least 5 characters"),
  description: z.string().min(10, "Description must be of at least 10 character")
})
export type TContactSchema = z.infer<typeof contactSchema>


export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<z.infer<typeof contactSchema>>({ resolver: zodResolver(contactSchema) })
  const [message, setMessage] = useState<boolean | undefined>(false)
  const handleContact = async (data: TContactSchema) => {
    setMessage(true)
    await fetch("/api/sendEmail", {
      method: "POST",
      body: JSON.stringify(data)
    })
    setTimeout(() => {
      setMessage(false)
      reset()
    }, 3000)
  }
  const formRef = useRef<HTMLFormElement>(null)
  return (
    <form ref={formRef} onSubmit={handleSubmit(handleContact)} >
      <div className="my-2">
        <Input radius="sm" isInvalid={errors.email?.message ? true : false}  {...register("email")} errorMessage={errors.email?.message} color="primary" variant="bordered" label="Email" placeholder="Enter your Email" />
      </div>
      <div className="my-2">
        <Input radius="sm" isInvalid={errors.name?.message ? true : false} {...register("name")} errorMessage={errors.name?.message} color="primary" variant="bordered" label="Name" placeholder="Enter the Name" />
      </div>
      <div className="my-2">
        <Textarea radius="sm" isInvalid={errors.description?.message ? true : false} {...register("description")} errorMessage={errors.description?.message} color="primary" variant="bordered" minRows={6}
          label="Description" placeholder="Enter your description">
        </Textarea>
      </div>
      <Button isLoading={message} className="mt-3" type="submit" variant="flat" color="primary" radius="sm" >Submit</Button>
    </form >
  )
}
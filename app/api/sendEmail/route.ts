"use server"
import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";


export async function POST(req:Request,res:Response) {
  try {
    const {email, name, description} = await req.json()
    const tranporter =  createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.API
      }
    })
    const mailOption =  {
      from:email,
      to:process.env.EMAIL,
      subject:"Email from joshi v1 2023",
      html:`<li>Name = ${name}</li>
          <li>Email = ${email}</li>
          <h3>Subject = ${description}</h3>`
    }
    const data = await tranporter.sendMail(mailOption)
    return NextResponse.json({sucess: true,data:data})
  }
  catch (e) {
    return NextResponse.json({sucess: false,error:e})
  }
}

export async function GET(req:Request) {
  return NextResponse.json({message:"Hi"})
}
import ContactForm from "./ContactForm";

export default function ContactComponent() {
  return (
    <section className="flex flex-col w-3/4 min-h-[400px] mx-auto mb-10">
      <div className="text-2xl font-bold">
        <h1 className="text-[#0271f0]">Contact Us</h1>
      </div>
      <div className="w-2/3 mt-3">
        <ContactForm />
      </div>
    </section>
  )
}
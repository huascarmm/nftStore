import { useState, VFC } from "react"

import { CustomInput } from "@/components/custom_input/custom_input"

export const TopPageView: VFC = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactInfo({
      ...contactInfo,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(contactInfo)
  }

  return (
    <main className="flex flex-col justify-center items-center p-4 w-full h-screen grid-4">
      <form onSubmit={onSubmit} className="flex flex-col space-y-4 max-w-4xl">
        <div className="text-center prose">
          <h1>Contáctanos!</h1>
        </div>
        <CustomInput
          label="Name"
          name="name"
          value={contactInfo.name}
          onChange={handleChange}
        />
        <CustomInput
          label="Email"
          name="email"
          value={contactInfo.email}
          onChange={handleChange}
        />
        <CustomInput
          label="Message"
          name="message"
          value={contactInfo.message}
          onChange={handleChange}
        />
        <button className="w-full btn btn-primary">Send</button>
      </form>
    </main>
  )
}

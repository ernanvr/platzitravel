import { NextPage } from 'next'
import * as React from 'react'
import { Field, Form } from 'react-final-form'

type Values = {
  email: string
  password: string
}

// const response = fetch('http://localhost:3000/api/v1/users', {
//   mode: 'same-origin'
// })

// console.log(response)

const RegisterForm: NextPage = () => {
  const onSubmit = async (values: Values) => {
    console.log(values)
    const response = await fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({
        ...values,
        role: 'agent'
      })
    })
    console.log(JSON.stringify({ ...values, role: 'agent' }))
    console.log(response.json())
  }
  return (
    <div className="relative flex flex-col justify-center items-center w-full text-white h-[100vh] from-secondary to-tertiary bg-gradient-to-tl ">
      <h1 className="text-5xl font-bold">Registration</h1>
      <Form
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form
            action=""
            className="flex flex-col items-center w-4/5 justify-evenly h-2/4"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col w-full">
              <label htmlFor="email" className="text-xl">
                Email
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                component="input"
                className="input-field" // custom class tailwind
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="password" className="text-xl">
                Password
              </label>
              <Field
                type="password"
                name="password"
                id="password"
                component="input"
                className="input-field"
              />
            </div>
            <button type="submit" className="mt-2 primary-btn">
              Send
            </button>
          </form>
        )}
      />
    </div>
  )
}

export default RegisterForm

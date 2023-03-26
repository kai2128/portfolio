import React from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { useDataStore } from '@/stores/data'

interface Props { }

interface Inputs {
  name: string
  email: string
  subject: string
  message: string
}

const Contact = (props: Props) => {
  const { contact } = useDataStore().data

  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:${contact.email}?subject=${formData.subject}&body=Hi, I am ${formData.name}. ${formData.message} %0D%0A(${formData.email})`
  }

  return (
    <div>
      <div className='section-subheading'>Contact</div>

      <div className='section-body'>
        <div className='w-full h-[250px]'>
          <iframe src={contact.googleMapUrl || ''} height={'100%'} width={'100%'} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='grid mt-2 grid-cols-[100px_7px_1fr]'>
          <span className='text-primary/70 text-base uppercase'>Location</span>
          <span className='text-primary/70'>:</span>
          <span>{contact.adress}</span>

          <span className='text-primary/70 text-base uppercase'>Email</span>
          <span className='text-primary/70'>:</span>
          <span>{contact.email}</span>
        </div>
      </div>

      <div className='section-subheading'>Drop Me an email</div>
      <div className='section-body'>
        <div className='flex flex-col w-full'>
          <div className=''>
            <form className='flex flex-col space-y-2 mx-auto max-w-[800px] border border-l-8 border-l-primary p-4' onSubmit={handleSubmit(onSubmit)}>
              <div className='flex space-x-2'>
                <label>
                  <span>Name</span>
                  <input {...register('name')} placeholder='Name' type="text" />
                </label>
                <label>
                  <span>Contact</span>
                  <input {...register('email')} placeholder='Email' type="text" />
                </label>
              </div>
              <label>
                <span>Subject</span>
                <input {...register('subject')} placeholder='Subject' type="text" />
              </label>
              <label>
                <span>Message</span>
                <textarea {...register('message')} placeholder='Message' className='contactInput'></textarea>
              </label>
              <button type='submit' className='button-primary lg:w-1/2'>Submit</button>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact

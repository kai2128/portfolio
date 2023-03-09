import React from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'

interface Props { }

interface Inputs {
  name: string
  email: string
  subject: string
  message: string
}

const Contact = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    // REVIEW - replace email
    window.location.href = `mailto:myemail?subject=${formData.subject}&body=Hi, I am ${formData.name}. ${formData.message} %0D%0A(${formData.email})`
  }

  return (
    <div>
      <div className='section-subheading'>Contact</div>

      <div className='section-body'>
        <div className='w-full h-[250px]'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1019768.6698219931!2d101.3809674!3d3.2322231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4252cdeb045f%3A0x26e1bee1215dfbb9!2sSelangor!5e0!3m2!1sen!2smy!4v1678380543190!5m2!1sen!2smy" height={'100%'} width={'100%'} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='grid grid-cols-2 gap-x-2 md:gap-x-8 mt-2'>
          <div className='flex justify-between'>
            <span>Location</span>
            <span>Malaysia</span>
          </div>
          <div className='flex justify-between'>
            <span>Email</span>
            <span>01134567</span>
          </div>
        </div>
      </div>

      <div className='section-subheading'>Drop Me a Message</div>
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

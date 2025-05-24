'use client';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { motion } from 'motion/react';


const faqs = [
  {
    question: "What is this platform?",
    answer:
      "Our platform connects aspiring data professionals with mentors specializing in Data Science, Machine Learning, Program Management, and People Leadership careers in the U.S. and Canada.",
  },
  {
    question: "How does the platform work?",
    answer:
      "Mentors and mentees create profiles, browse available matches, and apply to connect. Mentees pay only after an accepted application to start a 1-on-1 mentorship.",
  },
  {
    question: "Who can join the platform?",
    answer:
      "Anyone interested in growing a career in data fields can join as a mentee, while experienced professionals in these areas can apply to become mentors.",
  },
  {
    question: "Is it free to use the platform?",
    answer:
      "Yes, it’s free to sign up, explore mentors, and send/receive applications. Mentees are charged only when their application is accepted, and they are ready to start sessions.",
  },
  {
    question: "What specific areas of expertise are covered?",
    answer:
      "Mentors cover general data-related topics such as resume reviews, Python, and Machine Learning, as well as specialized areas like Deep Learning, Gen-AI, and Retrieval-Augmented Generation (RAGs).",
  } 
]

const faqs_mentees = [
  {
    question: "How do I find the right mentor for me?",
    answer:
      "Browse mentors by specialization, experience, and reviews, with the option to explore specific skills and topics relevant to Data careers.",
  },
  {
    question: "What should I expect from a mentorship session?",
    answer:
      "Sessions are personalized based on your goals and may include technical guidance, career advice, project feedback, or job search tips.",
  },
  {
    question: "How do I prepare for my first session with a mentor?",
    answer:
      "Bring specific questions, career objectives, and any relevant background information on the Data Science topics you wish to discuss.",
  },
  {
    question: "Can I work with more than one mentor at a time?",
    answer:
      "Yes, each mentee can connect with up to two mentors simultaneously, allowing for guidance in different areas.",
  },
  {
    question: "What happens if my mentor-mentee relationship isn’t working out?",
    answer:
      "If the mentorship doesn’t meet your expectations, you can request a new match or a full refund.",
  },
  {
    question: "How long will it take to hear back from a mentor?",
    answer:
      "Mentors respond within seven days of receiving your application.",
  },
  {
    question: "How long do I have to make a payment after an accepted application?",
    answer:
      "You have seven days to complete payment after an application is accepted to secure your mentorship.",
  },
  {
    question: "What if I don’t book my session after payment?",
    answer:
      "After successful payment, you have 30 days to schedule a session with your mentor, or the mentorship will expire.",
  }     
]

const faqs_mentors = [
  {
    question: "How do I become a mentor on the platform?",
    answer:
      "Apply by creating a mentor profile and detailing your experience and the areas of Data careers you specialize in.",
  },
  {
    question: "Do mentors get compensated?",
    answer:
      "Yes, mentors can set fees for their services, and our platform provides fast, secure payment solutions.",
  },
  {
    question: "How many mentees can I have at one time?",
    answer:
      "Mentors can work with up to five mentees simultaneously.",
  },
  {
    question: "What services can I offer as a mentor?",
    answer:
      "Mentors can create and offer general services like resume reviews, Python, and Machine Learning, as well as niche areas like Deep Learning, Gen-AI, and RAGs.",
  },
  {
    question: "How much time commitment is expected from mentors?",
    answer:
      "Mentors set their own schedules, so the commitment is entirely flexible.",
  } 
]

const faqs_technical  = [
  {
    question: "What are the benefits of being a mentor?",
    answer:
      "Mentoring allows you to share expertise, build your network, and support the next generation of Data professionals.",
  },
  {
    question: "How do I contact support if I have issues?",
    answer:
      "Reach out to our support team through the help center or by emailing us at [info@omentors.com].",
  } 
]


export default function FAQ(){
    return (
    <div className="w-full lg:w-10/12 text-center mx-auto pt-8 lg:pt-20 pb-16 space-y-8 lg:space-y-12 lg:bg-white bg-gray-50">
        
                    <div className="text-center flex flex-col gap-4">
                              <div className="text-gray-800 font-bold text-xl">Frequently asked questions</div>
                              <div className=" text-md text-gray-500">
                                  Everything you need to know about being mentor and mentee.
                              </div>
                    </div>
        
                    <div>
                              <div className="mx-auto px-6 lg:px-8 space-y-10 ">
                
                                <div className="mx-auto ">
                                  <div className="text-slate-800 font-bold text-md text-left">General Questions</div>
                                  <dl className="mt-8  divide-y divide-gray-900/10 px-4">
                                    {faqs.map((faq) => (
                                      <Disclosure key={faq.question} as="div" className="py-3 first:pt-0 last:pb-0">
                                        <dt>
                                          <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-700">
                                            <span className="text-base/7 font-semibold">{faq.question}</span>
                                            <span className="ml-6 flex h-7 items-center">
                                              <PlusCircleIcon aria-hidden="true" className="size-6 group-data-open:hidden" />
                                              <MinusCircleIcon aria-hidden="true" className="size-6 group-not-data-open:hidden" />
                                            </span>
                                          </DisclosureButton>
                                        </dt>
                                        <DisclosurePanel as={motion.div}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }} className="mt-2 pr-4">
                                          <p className="text-md/7 text-gray-700 text-left">{faq.answer}</p>
                                        </DisclosurePanel>
                                      </Disclosure>
                                    ))}
                                  </dl>
                                </div>
                
                                <div className="mx-auto">
                                  <div className="text-slate-800 font-bold text-md text-left">For Mentees</div>
                                  <dl className="mt-8 divide-y divide-gray-900/10 px-4">
                                    {faqs_mentees.map((faq) => (
                                      <Disclosure key={faq.question} as="div" className="py-3 first:pt-0 last:pb-0">
                                        <dt>
                                          <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-700">
                                            <span className="text-base/7 font-semibold">{faq.question}</span>
                                            <span className="ml-6 flex h-7 items-center">
                                              <PlusCircleIcon aria-hidden="true" className="size-6 group-data-open:hidden" />
                                              <MinusCircleIcon aria-hidden="true" className="size-6 group-not-data-open:hidden" />
                                            </span>
                                          </DisclosureButton>
                                        </dt>
                                        <DisclosurePanel as={motion.div}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }} className="mt-2 pr-4">
                                          <p className="text-md/7 text-gray-700 text-left">{faq.answer}</p>
                                        </DisclosurePanel>
                                      </Disclosure>
                                    ))}
                                  </dl>
                                </div>
                
                                <div className="mx-auto">
                                  <div className="text-slate-800 font-bold text-md text-left">For Mentors</div>
                                  <dl className="mt-8 divide-y divide-gray-900/10 px-4">
                                    {faqs_mentors.map((faq) => (
                                      <Disclosure key={faq.question} as="div" className="py-3 first:pt-0 last:pb-0">
                                        <dt>
                                          <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-700">
                                            <span className="text-base/7 font-semibold">{faq.question}</span>
                                            <span className="ml-6 flex h-7 items-center">
                                              <PlusCircleIcon aria-hidden="true" className="size-6 group-data-open:hidden" />
                                              <MinusCircleIcon aria-hidden="true" className="size-6 group-not-data-open:hidden" />
                                            </span>
                                          </DisclosureButton>
                                        </dt>
                                        <DisclosurePanel as={motion.div}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }} className="mt-2 pr-4">
                                          <p className="text-md/7 text-gray-700 text-left">{faq.answer}</p>
                                        </DisclosurePanel>
                                      </Disclosure>
                                    ))}
                                  </dl>
                                </div>
                                
                
                               <div className="mx-auto">
                                  <div className="text-slate-800 font-bold text-md text-left">Technical and Account Information</div>
                                  <dl className="mt-8 divide-y divide-gray-900/10 px-4">
                                    {faqs_technical.map((faq) => (
                                      <Disclosure key={faq.question} as="div" className="py-3 first:pt-0 last:pb-0">
                                        <dt>
                                          <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-700">
                                            <span className="text-base/7 font-semibold">{faq.question}</span>
                                            <span className="ml-6 flex h-7 items-center">
                                              <PlusCircleIcon aria-hidden="true" className="size-6 group-data-open:hidden" />
                                              <MinusCircleIcon aria-hidden="true" className="size-6 group-not-data-open:hidden" />
                                            </span>
                                          </DisclosureButton>
                                        </dt>
                                        <DisclosurePanel as={motion.div}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }} className="mt-2 pr-4">
                                          <p className="text-md/7 text-gray-700 text-left">{faq.answer}</p>
                                        </DisclosurePanel>
                                      </Disclosure>
                                    ))}
                                  </dl>
                                </div>
                                
                
                              </div>
                    </div>
        
    </div>  
    );
}
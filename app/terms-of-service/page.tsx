'use client';

import Header from "@/ui/components/common/nav/header";
import Footer from "@/ui/components/public/footer";


export default function Home() { 

  return (
   <>
    <Header/>

    <div className="min-h-[500px]">

      <div className="mx-auto 2xl:w-11/12 lg:px-8 px-6 ">
       
 
        <div className="w-full lg:w-6/12 text-center mx-auto py-16 gap-6">
           <div className="text-center flex flex-col gap-4">
             <div className="text-brand-600 text-md">Current as of 6 Jan 2025</div>
              <div className="text-gray-800 font-bold text-4xl lg:text-5xl">Terms of Service</div>
              <div className="text-base lg:text-xl text-gray-600 text-balance">
                  Welcome to O&apos;Mentors! These Terms of Service (&quot;Terms&quot;) govern your use of the O&apos;Mentors platform, including our website and services. By accessing or using O&apos;Mentors, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use our services.
              </div>
           </div>
        </div>


        <div className="w-full lg:w-5/12 text-center mx-auto py-8 lg:py-16 space-y-8">

            <div className="text-left space-y-4 lg:space-y-8">
                <div className="text-xl lg:text-3xl font-bold text-gray-800">
                    Overview of O&apos;Mentors
                </div>
                <div className="text-base lg:text-lg text-gray-600">
                    You must be at least 18 years old to use O&apos;Mentors. By accessing or using our platform, you confirm that you are at least 18 years old and capable of entering into a legally binding agreement.
                </div> 

            </div>

            <div className="text-left space-y-4 lg:space-y-8">
                <div className="text-xl lg:text-3xl font-bold text-gray-800">
                    Eligibility
                </div>
                <div className="text-base lg:text-lg text-gray-600">
                    O&apos;Mentors is a platform that connects mentees with mentors in the fields of Data Science, Machine Learning, Program Management, and People Leadership for personalized, 1-on-1 mentoring sessions.
                </div> 

            </div>

            <div className="text-left space-y-4 lg:space-y-8">
                <div className="text-xl lg:text-3xl font-bold text-gray-800">
                    Account Registration
                </div>
                <div className="text-base lg:text-lg text-gray-600">
                    To use O&apos;Mentors, you must create an account. You agree to provide accurate, current, and complete information during the registration process and to update it as necessary. You are responsible for maintaining the confidentiality of your account login details and for all activities under your account.
                </div> 
            </div>


 

            <div className="text-left space-y-4 lg:space-y-8">
                <div className="text-xl lg:text-3xl font-bold text-gray-800">
                    Use of the Platform
                </div>
 

                <div className="text-base lg:text-lg text-gray-600 px-4">
                    <ul className="list-disc list-outside">
                        <li>
                            <b>For Mentees:</b> You can browse available mentors, send applications, and schedule 1-on-1 sessions. Once an application is accepted and payment is processed, you may begin your mentorship.
                        </li>

                        <li>
                            <b>For Mentors:</b> You can create a profile, list your services, and accept applications from mentees. Mentors are responsible for providing their services in a professional manner.
                        </li> 
                    </ul>
                </div>

               <div className="text-base lg:text-lg text-gray-600">
                    You agree to use O&apos;Mentors only for lawful purposes and in compliance with these Terms. You must not use the platform to:
                </div>

                <div className="text-base lg:text-lg text-gray-600 px-4">
                    <ul className="list-disc list-outside">
                        <li>
                            Violate any applicable laws or regulations.
                        </li>

                        <li>
                            Distribute harmful or offensive content.
                        </li> 

                        <li>
                            Harass, abuse, or harm others.
                        </li>                         
                    </ul>
                </div>
            </div>



            <div className="text-left space-y-4 lg:space-y-8">
                <div className="text-xl lg:text-3xl font-bold text-gray-800">
                    Payment and Fees
                </div>
                <div className="text-base lg:text-lg text-gray-600">
                   O&apos;Mentors charges a fee for mentoring services. Mentees will be required to pay after an application has been accepted by a mentor. The fees may vary depending on the mentor’s services. Payments will be processed through secure payment gateways.
                </div>
                <div className="text-base lg:text-lg text-gray-600">
                    Mentors will receive payment after successful mentoring sessions and will be subject to a commission or fee as outlined on the platform.
                </div>
            </div>            


            <div className="text-left space-y-4 lg:space-y-8">
                <div className="text-xl lg:text-3xl font-bold text-gray-800">
                    Cancellation and Refunds
                </div>
 

                <div className="text-base lg:text-lg text-gray-600 px-4">
                    <ul className="list-disc list-outside">
                        <li>
                            <b>For Mentees:</b> You may request a full refund if a session has not been booked within 30 days of payment. Refund requests must be made through the platform&apos;s support system.
                        </li>

                        <li>
                            <b>For Mentors:</b> You may cancel or reschedule sessions with proper notice as agreed upon with the mentee.
                        </li> 
                    </ul>
                </div>

               <div className="text-base lg:text-lg text-gray-600">
                    Refunds will be processed at the discretion of O&apos;Mentors based on the circumstances and platform policies.
                </div> 
            </div>



            <div className="text-left space-y-4 lg:space-y-8">
                <div className="text-xl lg:text-3xl font-bold text-gray-800">
                    Confidentiality
                </div>

               <div className="text-base lg:text-lg text-gray-600">
                    Both mentors and mentees agree to maintain the confidentiality of any sensitive, personal, or business-related information shared during mentoring sessions. Information shared should not be used outside of the scope of the mentoring relationship without explicit consent.
                </div> 
            </div>


            <div className="text-left space-y-4 lg:space-y-8">
                <div className="text-xl lg:text-3xl font-bold text-gray-800">
                    Termination
                </div>
                
               <div className="text-base lg:text-lg text-gray-600">
                    We may suspend or terminate your account at our sole discretion if we believe you have violated these Terms. Upon termination, you will lose access to O&apos;Mentors, but any fees owed will remain due.
                </div> 

                <div className="text-base lg:text-lg text-gray-600">
                    You may terminate your account at any time by contacting support.
                </div>
            </div>



            <div className="text-left space-y-4 lg:space-y-8">
                <div className="text-xl lg:text-3xl font-bold text-gray-800">
                    Disclaimers and Limitation of Liability
                </div>
                
               <div className="text-base lg:text-lg text-gray-600">
                   O&apos;Mentors provides a platform for mentorship, but we do not guarantee the quality or effectiveness of mentoring sessions. Mentors are independent contractors and are not employees of O&apos;Mentors.
                </div> 

                <div className="text-base lg:text-lg text-gray-600">
                    We do not assume responsibility for any loss, damage, or issues arising from the use of the platform, including but not limited to:
                </div>

                <div className="text-base lg:text-lg text-gray-600 px-4">
                    <ul className="list-disc list-outside">
                        <li>
                            Any interactions between mentors and mentees.
                        </li>

                        <li>
                            Disputes, dissatisfaction, or personal harm caused by mentorship sessions.
                        </li> 
                    </ul>
                </div>

                <div className="text-base lg:text-lg text-gray-600">
                    To the maximum extent permitted by law, O&apos;Mentors’ liability will be limited to the amount you have paid for services through the platform.
                </div>
            </div>

 

           <div className="text-left space-y-4 lg:space-y-8">
                <div className="text-xl lg:text-3xl font-bold text-gray-800">
                    Intellectual Property
                </div>
                <div className="text-base lg:text-lg text-gray-600">
                   All content, features, and functionality on O&apos;Mentors, including text, images, graphics, and logos, are the property of O&apos;Mentors and are protected by copyright laws. You may not reproduce, distribute, or modify the content without prior written consent.
                </div>
            </div>   


           <div className="text-left space-y-4 lg:space-y-8">
                <div className="text-xl lg:text-3xl font-bold text-gray-800">
                    Privacy
                </div>
                <div className="text-base lg:text-lg text-gray-600">
                   Your use of O&apos;Mentors is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information. Please review our Privacy Policy carefully.
                </div>
            </div> 


           <div className="text-left space-y-4 lg:space-y-8">
                <div className="text-xl lg:text-3xl font-bold text-gray-800">
                    Modifications to Terms
                </div>
                <div className="text-base lg:text-lg text-gray-600">
                   We may update these Terms from time to time. Any changes will be posted on this page, and the effective date will be updated. By continuing to use the platform after any changes, you agree to be bound by the revised Terms.
                </div>
            </div> 


           <div className="text-left space-y-4 lg:space-y-8">
                <div className="text-xl lg:text-3xl font-bold text-gray-800">
                    Governing Law
                </div>
                <div className="text-base lg:text-lg text-gray-600">
                   These Terms are governed by and construed in accordance with the laws of the State of Missouri, USA. Any disputes arising under or in connection with these Terms will be subject to the exclusive jurisdiction of the courts in Missouri.
                </div>
            </div> 

           <div className="text-left space-y-4 lg:space-y-8">
                <div className="text-xl lg:text-3xl font-bold text-gray-800">
                    Contact Us
                </div>
                <div className="text-base lg:text-lg text-gray-600">
                   If you have any questions about these Terms, please contact us at:
                </div>
                <div className="text-base lg:text-lg text-gray-600">
                   <div>Email: support@omentors.com</div>
                   <div>Website: www.omentors.com</div>
                </div>
                <div className="text-base lg:text-lg text-gray-600">
                   By using O&apos;Mentors, you acknowledge that you have read, understood, and agreed to these Terms of Service.
                </div>
            </div> 

        </div>
    
      
      </div>        

    </div>

    <Footer/>

   </>
  )

}

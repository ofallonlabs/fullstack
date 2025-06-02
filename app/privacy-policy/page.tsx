'use client';


import Header from "@/ui/components/common/nav/header";
import Footer from "@/ui/components/public/footer";

 
export default function Home() {

  return (
   <>
    <Header/>

    <div className="min-h-[500px]">

      <div className="mx-auto 2xl:w-11/12 lg:px-8 px-6 ">
       
 
        <div className="w-6/12 text-center mx-auto py-16 gap-6">
           <div className="text-center flex flex-col gap-4">
             <div className="text-brand-600 text-md">Current as of 6 Jan 2025</div>
              <div className="text-gray-800 font-bold text-4xl lg:text-5xl">Privacy Policy</div>
              <div className=" text-base lg:text-xl text-gray-600 text-balance">
                  At O'Mentors, your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our platform. By accessing or using O'Mentors, you agree to the terms of this Privacy Policy.
              </div>
           </div>
        </div>


        <div className="w-full lg:w-5/12 text-center mx-auto py-8 lg:py-16 space-y-8">

            <div className="text-left space-y-4 lg:space-y-8">
                <div className="text-xl lg:text-3xl font-bold text-gray-800">
                    What information do we collect?
                </div>
                <div className="text-base lg:text-lg text-gray-600">
                    We collect two types of information:
                </div>

                <div className="text-base lg:text-lg text-gray-600 px-4">
                    <ul className="list-disc list-outside">
                        <li>
                            <b>Personal Information:</b> This includes information you provide when you sign up, create a profile, or use our services, such as your name, email address, phone number, and payment details.
                        </li>

                        <li>
                            <b>Usage Data:</b> We automatically collect certain information when you interact with our platform, such as IP addresses, browser type, device information, and pages visited on our site.
                        </li>
                    </ul>
                </div>

            </div>


            <div className="text-left space-y-4 lg:space-y-8">
                <div className="text-xl lg:text-3xl font-bold text-gray-800">
                    How do we use your information?
                </div>
                <div className="text-base lg:text-lg text-gray-600">
                    We use the information we collect for the following purposes:
                </div>

                <div className="text-base lg:text-lg text-gray-600 px-4">
                    <ul className="list-disc list-outside">
                        <li>To provide and improve our services, including connecting mentees with mentors and facilitating communication.</li>
                        <li>To process payments and manage your account.</li>
                        <li>To send you relevant updates, promotions, and information related to your mentoring sessions</li>
                        <li>To personalize your experience and enhance platform features.</li>
                        <li>To comply with legal requirements and protect our rights.</li>
                    </ul>
                </div>

            </div>


            <div className="text-left space-y-4 lg:space-y-8">
                <div className="text-xl lg:text-3xl font-bold text-gray-800">
                    Sharing Your Information
                </div>
                <div className="text-base lg:text-lg text-gray-600">
                    We do not sell, rent, or trade your personal information. However, we may share your information in the following situations:
                </div>

                <div className="text-base lg:text-lg text-gray-600 px-4">
                    <ul className="list-disc list-outside">
                        <li>
                            <b>With Mentors:</b> To facilitate 1-on-1 mentoring sessions, your name, profile details, and session information will be shared with the mentor you are connected with.
                        </li>

                        <li>
                            <b>Service Providers:</b> We may share information with trusted third-party service providers who help us operate our platform, process payments, and enhance user experience.
                        </li>

                        <li>
                            <b>Legal Requirements:</b>  We may disclose your information to comply with legal obligations, enforce our terms, or protect the rights, safety, or property of O'Mentors or others.
                        </li>
                    </ul>
                </div>

            </div>

            <div className="text-left space-y-4 lg:space-y-8">
                <div className="text-xl lg:text-3xl font-bold text-gray-800">
                    Data Security
                </div>
                <div className="text-base lg:text-lg text-gray-600">
                   We take reasonable measures to protect your personal information from unauthorized access, alteration, or disclosure. While we strive to use commercially acceptable means to protect your data, no method of transmission over the Internet or electronic storage is 100% secure.
                </div>
            </div>            


            <div className="text-left space-y-4 lg:space-y-8">
                <div className="text-xl lg:text-3xl font-bold text-gray-800">
                    Your Rights and Choices
                </div>

                <div className="text-base lg:text-lg text-gray-600 px-4">
                    <ul className="list-disc list-outside">
                        <li>
                            <b>Access and Update:</b> You can access and update your personal information by logging into your account.
                        </li>

                        <li>
                            <b>Opt-Out:</b> You can unsubscribe from marketing communications by following the opt-out instructions in emails or by contacting us directly.
                        </li>

                        <li>
                            <b>Data Retention:</b> We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy or as required by law.
                        </li>
                    </ul>
                </div>

            </div>


           <div className="text-left space-y-4 lg:space-y-8">
                <div className="text-xl lg:text-3xl font-bold text-gray-800">
                    Cookies
                </div>
                <div className="text-base lg:text-lg text-gray-600">
                   Our website uses cookies to enhance your experience. Cookies are small text files stored on your device that help us improve site functionality, analyze traffic, and customize content. You can control cookie settings through your browser preferences.
                </div>
            </div>   


           <div className="text-left space-y-4 lg:space-y-8">
                <div className="text-xl lg:text-3xl font-bold text-gray-800">
                    Children’s Privacy
                </div>
                <div className="text-base lg:text-lg text-gray-600">
                   O'Mentors is not intended for children under the age of 13. We do not knowingly collect personal information from children. If we become aware that a child under 13 has provided us with personal information, we will take steps to remove such data.
                </div>
            </div> 


           <div className="text-left space-y-4 lg:space-y-8">
                <div className="text-xl lg:text-3xl font-bold text-gray-800">
                    Changes to This Privacy Policy
                </div>
                <div className="text-base lg:text-lg text-gray-600">
                   We may update this Privacy Policy from time to time. When we make changes, we will post the updated policy on this page with the revised date. Please review this policy periodically to stay informed.
                </div>
            </div> 

        </div>
    
      
      </div>        

    </div>

    <Footer/>

   </>
  )

}

import Link from 'next/link';
import { auth } from '@/lib/auth/auth';
import { headers } from 'next/headers';

export default async function AllMentors(){
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return <div>Not authenticated</div>;
  }

  const user = session.user;
  if(!user) return null;

  const tabNavs = [
    { name: 'All Services', href: '/dashboard/services/browse', current: false },
    { name: 'All Mentors', href: '/dashboard/services/mentors/browse', current: true },  
  ]

  if(user.role == "MENTOR"){
    tabNavs.unshift({ name: 'My Services', href: '/dashboard/services', current: false });
  }


    return (
        <div className="relative space-y-10 mb-32">

            <div className="pt-4 sticky top-[65px] sm:top-[60px] lg:top-0 inset-x-0 bg-white overflow-x-auto -z-0">

                <div className="text-left px-2 md:px-4 mb-4">
                    <div className="text-gray-800  font-bold text-xl xl:text-3xl flex flex-row gap-1 items-center justify-start">
                        <div>{"Services"}</div>
                    </div> 
                </div>

                <header className="border-b border-brand-500">
                  <nav className="flex overflow-x-auto py-4">
                    <ul
                      role="list"
                      className="flex min-w-full flex-none gap-x-6 px-4 text-sm/6 font-semibold text-gray-600 "
                    >
                      {tabNavs.map((item) => (
                        <li key={item.name}>
                          <Link href={item.href}
                           className={item.current ? 'text-brand-400' : ''}>
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </header>

              </div> 

              <div></div>        
        </div>
    );
}
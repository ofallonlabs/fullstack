import { headers } from "next/headers";
import { auth } from "@/lib/auth/auth";

const secondaryNavigation = [
  { name: 'Stats', href: '#item-1', current: true },
  { name: 'Todo', href: '#item-2', current: false }
]

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return <div>Not authenticated</div>;
  }

  const user = session.user;

  return (
    <div className="relative transition-all duration-300 scroll-smooth">
       <nav className="sticky top-0 inset-x-0 bg-white flex overflow-x-auto border-b border-white/10 py-4">
                <ul
                  role="list"
                  className="flex min-w-full flex-none gap-x-6 px-4 text-sm/6 font-semibold text-gray-400 sm:px-6 lg:px-8"
                >
                  {secondaryNavigation.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className={item.current ? 'text-brand-400' : ''}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
        </nav>

        <div className="space-y-[350px]">
          <div>Hi {user.name}</div>
          {
            [1,2].map((item)=>{
              return <div id={`item-${item}`} key={`item-${item}`} className="h-[350px] bg-brand-100 font-bold text-3xl">{item}</div>;
            })
          }
        </div>
    </div>
  );
}
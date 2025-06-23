import NotificationFlyout from "@/ui/elements/notification-flyout";
import AvatarFlayout from "@/ui/elements/avatar-flyout";
import Header from "@/ui/components/common/nav/auth/header";
import BottomSheet from "@/ui/components/dashboard/bottom-sheet";
import DashboardNavDialogLayout from '@/ui/components/dashboard/dashboard-nav-dialog';
import ProfileNavItem from "@/ui/components/dashboard/profile-navitem";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}){

  return (
    <>
      <div className="relative">
        <div className="sticky top-0 inset-x-0 z-50 sm:hidden">
          <Header>
            <>
              <NotificationFlyout/>
              <AvatarFlayout/>
            </>         
          </Header>       
        </div>

        <DashboardNavDialogLayout profile={<ProfileNavItem/>}>
           <>
              <NotificationFlyout/>
              <AvatarFlayout/>
           </>           
        </DashboardNavDialogLayout>

        <main className="lg:pl-72 bg-slate-50 min-h-screen flex flex-col">

          <div className="">
            {children}
          </div>
         
        </main>

         <BottomSheet/>

      </div>
    </>
  )
}

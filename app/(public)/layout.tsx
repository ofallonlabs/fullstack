
import Header from "@/ui/components/common/nav/header";
import Footer from "@/ui/components/public/footer";
import NotificationFlyout from "@/ui/elements/notification-flyout";
import AvatarFlayout from "@/ui/elements/avatar-flyout";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}){
  return (
    <>
        <Header>
          <>
            <NotificationFlyout/>
            <AvatarFlayout/>
          </>
        </Header>
        {children}
        <Footer/>    
    </>
  );
}
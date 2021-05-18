import { CalendarIcon, ChevronDownIcon, DesktopComputerIcon, ShoppingBagIcon, UserGroupIcon, UsersIcon } from "@heroicons/react/solid";
import { useSession } from "next-auth/client"
import SidebarRow from "./SidebarRow";

function Sidebar() {
    const [session, loading] = useSession();

    return (
        <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
            <SidebarRow src={session.user.image} title={session.user.name} />
            <SidebarRow Icon={UsersIcon} title='Friends' />
            <SidebarRow Icon={UserGroupIcon} title='Marketplace' />
            <SidebarRow Icon={ShoppingBagIcon} title='Watch' />
            <SidebarRow Icon={DesktopComputerIcon} title='Events' />
            <SidebarRow Icon={CalendarIcon} title='Memories' />
            <SidebarRow Icon={ChevronDownIcon} title='See More' />
        </div>
    )
}

export default Sidebar

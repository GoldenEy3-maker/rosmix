import { HeaderNav } from "./nav";
import { NotificationsPopover } from "./notifications-popover";
import { HeaderSearchCommand } from "./search";
import { UserPopover } from "./user-popover";

export function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 px-3 grid grid-cols-[auto_1fr_repeat(2,auto)] gap-2 items-center border-b bg-background">
      <HeaderSearchCommand />
      <HeaderNav />
      <NotificationsPopover />
      <UserPopover />
    </header>
  );
}

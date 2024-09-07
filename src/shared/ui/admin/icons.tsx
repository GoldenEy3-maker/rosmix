import {
  TbAtom,
  TbBell,
  TbBox,
  TbBrandGoogleAnalytics,
  TbCalculator,
  TbCalendar,
  TbCreditCard,
  TbHelp,
  TbHome,
  TbLayoutSidebarLeftExpand,
  TbLetterK,
  TbMail,
  TbMoodSmile,
  TbMoon,
  TbPhoto,
  TbSearch,
  TbSettings,
  TbSun,
  TbUser,
  TbUsers,
  TbX,
  TbChecks,
  TbCheck,
  TbTrash,
  TbLogout2,
  TbUserPlus,
  TbSettings2,
  TbChevronDown,
  TbUserDown,
  TbArrowLeft,
  TbUsersPlus,
  TbDotsVertical,
} from "react-icons/tb";
import { LuCommand } from "react-icons/lu";
import { cn } from "@/shared/lib";

export const Icons = {
  Home: TbHome,
  Box: TbBox,
  Photo: TbPhoto,
  SidebarLeftExpand: TbLayoutSidebarLeftExpand,
  Search: TbSearch,
  Command: LuCommand,
  LetterK: TbLetterK,
  Mail: TbMail,
  Help: TbHelp,
  Moon: TbMoon,
  Sun: TbSun,
  Bell: TbBell,
  Users: TbUsers,
  ChartBar: TbBrandGoogleAnalytics,
  Atom: TbAtom,
  X: TbX,
  Calendar: TbCalendar,
  Emoji: TbMoodSmile,
  Calculator: TbCalculator,
  User: TbUser,
  CreditCard: TbCreditCard,
  Settings: TbSettings,
  Settings2: TbSettings2,
  ChevronDown: TbChevronDown,
  UserDown: TbUserDown,
  ArrowLeft: TbArrowLeft,
  DoubleCheck: TbChecks,
  Check: TbCheck,
  Trash: TbTrash,
  UserPlus: TbUserPlus,
  Logout: TbLogout2,
  UsersPlus: TbUsersPlus,
  DotsVertical: TbDotsVertical,
  Loader: ({ className, ...props }: React.ComponentProps<"svg">) => (
    <svg
      className={cn("animate-spin", className)}
      width="1em"
      height="1em"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}>
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  ),
  BgMask: (props: React.ComponentProps<"svg">) => (
    <svg
      width="427"
      height="417"
      viewBox="0 0 427 417"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M379.75 261.352L187.75 372.203C172.083 381.248 152.5 369.942 152.5 351.851L152.5 130.149C152.5 112.058 172.083 100.752 187.75 109.797L379.75 220.648C395.417 229.694 395.417 252.306 379.75 261.352Z"
        stroke="currentColor"
        strokeOpacity={0.4}
      />
      <path
        d="M379.75 191.352L187.75 302.203C172.083 311.248 152.5 299.942 152.5 281.851L152.5 60.1488C152.5 42.0585 172.083 30.752 187.75 39.7971L379.75 150.648C395.417 159.694 395.417 182.306 379.75 191.352Z"
        stroke="currentColor"
        strokeOpacity={0.4}
      />
      <path
        d="M379.75 228.352L139.75 366.916C124.083 375.961 104.5 364.654 104.5 346.564L104.5 69.4359C104.5 51.3456 124.083 40.0392 139.75 49.0843L379.75 187.648C395.417 196.694 395.417 219.306 379.75 228.352Z"
        stroke="currentColor"
        strokeOpacity={0.4}
      />
      <path
        d="M414.75 226.852L103.5 406.552C87.8333 415.597 68.25 404.291 68.25 386.2L68.25 26.7997C68.25 8.70942 87.8333 -2.59702 103.5 6.44814L414.75 186.148C430.417 195.194 430.417 217.806 414.75 226.852Z"
        stroke="currentColor"
        strokeOpacity={0.4}
      />
      <path
        d="M266 198.108C274 202.727 274 214.274 266 218.892L209.75 251.368C201.75 255.987 191.75 250.214 191.75 240.976V176.024C191.75 166.786 201.75 161.013 209.75 165.632L266 198.108Z"
        fill="currentColor"
        fillOpacity={0.15}
      />
    </svg>
  ),
};

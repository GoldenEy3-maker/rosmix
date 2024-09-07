"use client";

import { usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/shared/ui/admin";
import { RoutesMap } from "@/shared/lib/admin";
import { Icons } from "@/shared/ui/admin";
import Link from "next/link";
import { ValueOf } from "@/shared/lib";

const TabsMap = {
  Home: "Home",
  Models: "Models",
  Media: "Media",
  Settings: "Settings",
} as const;

type TabsMap = ValueOf<typeof TabsMap>;

const TabsTriggerMap: Record<
  TabsMap,
  { path: string; icon: React.ReactNode; text: string }
> = {
  Home: {
    path: RoutesMap.Dashborad,
    icon: <Icons.Home className="text-lg mr-2" />,
    text: "Главная",
  },
  Models: {
    path: RoutesMap.Models,
    icon: <Icons.Box className="text-lg mr-2" />,
    text: "Модели",
  },
  Media: {
    path: RoutesMap.Media,
    icon: <Icons.Photo className="text-lg mr-2" />,
    text: "Медиа",
  },
  Settings: {
    path: RoutesMap.Settings,
    icon: <Icons.Settings className="text-lg mr-2" />,
    text: "Настройки",
  },
};

export function HeaderNav() {
  const pathname = usePathname();

  return (
    <Tabs value={pathname ?? undefined} className="ml-4">
      <TabsList>
        {Object.entries(TabsTriggerMap).map(([key, trigger]) => (
          <TabsTrigger key={key} value={trigger.path} asChild className="h-14">
            <Link href={trigger.path}>
              {trigger.icon}
              <span>{trigger.text}</span>
            </Link>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}

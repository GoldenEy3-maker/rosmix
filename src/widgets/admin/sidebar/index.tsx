"use client";

import Link from "next/link";
import { RoutesMap } from "@/shared/lib/admin";
import { Button } from "@/shared/ui/admin";
import { Icons } from "@/shared/ui/admin";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui/admin";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { cn } from "@/shared/lib";

const iconExpanderVariants: Variants = {
  expand: {
    rotate: "-180deg",
  },
  closed: {
    rotate: "0deg",
  },
};

export function Sidebar() {
  const [isExpand, setIsExpand] = useState(false);

  function toggleExpand() {
    setIsExpand((prev) => !prev);
  }

  return (
    <aside
      className={cn(
        "sticky top-0 left-0 z-50 px-3 w-[4.1rem] transition-all duration-300 py-2 overflow-y-auto overflow-x-hidden border-r flex flex-col max-h-svh",
        {
          "w-[16rem]": isExpand,
        }
      )}>
      <Link
        href={RoutesMap.Dashborad}
        className="w-full h-10 flex items-center px-[0.2rem] justify-start shrink-0">
        <Icons.Atom className="text-4xl shrink-0 text-primary" />
        <span
          className={cn(
            "pl-6 opacity-0 [transition:padding-left_300ms_ease_100ms,opacity_300ms_ease_100ms]",
            {
              "pl-4 opacity-100": isExpand,
            }
          )}>
          Rosmix
        </span>
      </Link>
      <Tooltip open={isExpand ? false : undefined}>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="mt-6 justify-start w-full transition-all px-3 py-2 shrink-0"
            asChild>
            <Link href={RoutesMap.Team}>
              <Icons.Users className="text-lg shrink-0" />
              <span
                className={cn(
                  "ml-4 opacity-0 [transition:margin-left_300ms_ease_100ms,opacity_300ms_ease_100ms]",
                  {
                    "ml-3 opacity-100": isExpand,
                  }
                )}>
                Команда
              </span>
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Команда</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip open={isExpand ? false : undefined}>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="justify-start w-full transition-all px-3 py-2 shrink-0"
            asChild>
            <Link href={RoutesMap.Analytics}>
              <Icons.ChartBar className="text-lg shrink-0" />
              <span
                className={cn(
                  "ml-4 opacity-0 [transition:margin-left_300ms_ease_100ms,opacity_300ms_ease_100ms]",
                  {
                    "ml-3 opacity-100": isExpand,
                  }
                )}>
                Аналитика
              </span>
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Аналитика</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip open={isExpand ? false : undefined}>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="mt-auto justify-start w-full transition-all px-3 py-2 shrink-0">
            <Icons.Help className="text-lg shrink-0" />
            <span
              className={cn(
                "ml-4 opacity-0 [transition:margin-left_300ms_ease_100ms,opacity_300ms_ease_100ms]",
                {
                  "ml-3 opacity-100": isExpand,
                }
              )}>
              Обратная связь
            </span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Обратная связь</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip open={isExpand ? false : undefined}>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="shrink-0 w-full justify-start transition-all px-3 py-2">
            <Icons.Mail className="text-lg shrink-0" />
            <span
              className={cn(
                "ml-4 opacity-0 [transition:margin-left_300ms_ease_100ms,opacity_300ms_ease_100ms]",
                {
                  "ml-3 opacity-100": isExpand,
                }
              )}>
              Поддержка
            </span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Поддержка</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip open={isExpand ? false : undefined}>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="justify-start w-full transition-all px-3 py-2 shrink-0"
            onClick={toggleExpand}>
            <motion.span
              variants={iconExpanderVariants}
              initial={false}
              transition={{ type: "spring" }}
              animate={isExpand ? "expand" : "closed"}>
              <Icons.SidebarLeftExpand className="text-lg shrink-0" />
            </motion.span>
            <span
              className={cn(
                "ml-4 opacity-0 [transition:margin-left_300ms_ease_100ms,opacity_300ms_ease_100ms]",
                {
                  "ml-3 opacity-100": isExpand,
                }
              )}>
              Скрыть боковую панель
            </span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Развернуть боковую панель</p>
        </TooltipContent>
      </Tooltip>
    </aside>
  );
}

"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/admin";
import { Button } from "@/shared/ui/admin";
import { Icons } from "@/shared/ui/admin";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui/admin";
import Link from "next/link";
import { dayjs } from "@/shared/lib/admin";
import { useRippleEffect } from "@/shared/hooks/admin";
import { cn } from "@/shared/lib";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/shared/ui/admin";
import { Badge } from "@/shared/ui/admin";
import { RoutesMap } from "@/shared/lib/admin";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTimeout } from "usehooks-ts";
import { Skeleton } from "@/shared/ui/admin";

export function NotificationsPopover() {
  const [data, setData] = useState([
    {
      id: crypto.randomUUID(),
      title: "Re: Support Case (#12008)",
      text: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi sunt iusto dolore id autem nisi temporibus odit exercitationem dolor fugiat? Voluptas, beatae molestias cumque alias delectus hic? Dolorum, eum illum?",
      date: dayjs(new Date()).add(-5, "h").toDate(),
      isReaded: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Support Case (#11022)",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi sunt iusto dolore id autem nisi temporibus odit exercitationem dolor fugiat? Voluptas, beatae molestias cumque alias delectus hic? Dolorum, eum illum?",
      date: dayjs(new Date()).add(-2, "d").toDate(),
      isReaded: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Support Case (#12008)",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      date: dayjs(new Date()).add(-10, "d"),
      isReaded: true,
    },
    {
      id: crypto.randomUUID(),
      title: "Re: Support Case (#12008)",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi sunt iusto dolore id autem nisi temporibus odit exercitationem dolor fugiat? Voluptas, beatae molestias cumque alias delectus hic? Dolorum, eum illum?",
      date: dayjs(new Date("07/18/2024")),
      isReaded: true,
    },
    {
      id: crypto.randomUUID(),
      title: "Re: Support Case (#12008)",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi sunt iusto dolore id autem nisi temporibus odit exercitationem dolor fugiat? Voluptas, beatae molestias cumque alias delectus hic? Dolorum, eum illum?",
      date: dayjs(new Date("07/18/2024")),
      isReaded: true,
    },
    {
      id: crypto.randomUUID(),
      title: "Re: Support Case (#12008)",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi sunt iusto dolore id autem nisi temporibus odit exercitationem dolor fugiat? Voluptas, beatae molestias cumque alias delectus hic? Dolorum, eum illum?",
      date: dayjs(new Date("07/18/2024")),
      isReaded: true,
    },
  ]);
  const [isDataLoading, setIsDataLoading] = useState(true);

  const rippleEffectEvent = useRippleEffect();

  const newestNotificationsLength = useMemo(() => {
    return data.filter((item) => !item.isReaded).length;
  }, [data]);

  function notificationPointerHandler(
    event: React.PointerEvent<HTMLAnchorElement>
  ) {
    rippleEffectEvent(event);
  }

  function deleteNotification(id: string) {
    setData((prev) => prev.filter((item) => item.id !== id));
  }

  function readNotification(id: string) {
    setData((prev) =>
      prev.map((item) => {
        if (item.id === id) return { ...item, isReaded: true };

        return item;
      })
    );
  }

  function readAllNotifications() {
    setData((prev) => prev.map((item) => ({ ...item, isReaded: true })));
  }

  useTimeout(() => {
    setIsDataLoading(false);
  }, 3000);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="rounded-full data-[state=open]:bg-primary/10 data-[state=open]:text-primary">
          <Icons.Bell className="text-lg" />
          {!isDataLoading ? (
            newestNotificationsLength ? (
              <Badge className="absolute top-1 right-1 py-0 px-1.5">
                {newestNotificationsLength}
              </Badge>
            ) : null
          ) : (
            <Badge className="absolute top-2 right-2 p-0">
              <Icons.Loader />
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        onOpenAutoFocus={(event) => {
          event.preventDefault();
          (event.target as HTMLElement | null)?.focus();
        }}
        className={cn(
          "p-0 w-[18rem] transition-all duration-300 overflow-hidden",
          {
            "w-96": data.length || isDataLoading,
          }
        )}
        sideOffset={20}
        collisionPadding={{ right: 20 }}>
        <div className="flex items-center justify-between gap-2 px-4 py-2 border-b">
          <div className="font-medium">Уведомления</div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  if (!data.length) {
                    setData([
                      {
                        id: crypto.randomUUID(),
                        title: "Re: Support Case (#12008)",
                        text: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi sunt iusto dolore id autem nisi temporibus odit exercitationem dolor fugiat? Voluptas, beatae molestias cumque alias delectus hic? Dolorum, eum illum?",
                        date: dayjs(new Date()).add(-5, "h").toDate(),
                        isReaded: false,
                      },
                    ]);
                  } else {
                    readAllNotifications();
                  }
                }}
                className="rounded-full text-muted-foreground">
                <Icons.DoubleCheck className="text-lg " />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">Прочитать все</TooltipContent>
          </Tooltip>
        </div>
        <div className="overflow-y-auto overflow-x-hidden max-h-[calc(100vh-14rem)]">
          <AnimatePresence initial={false}>
            {!isDataLoading ? (
              data.length ? (
                data.map((item, i) => (
                  <ContextMenu key={item.id}>
                    <ContextMenuTrigger asChild>
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                        }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden">
                        <Link
                          href="#"
                          className={cn(
                            "relative overflow-hidden grid grid-cols-[auto_1fr] gap-x-3 p-4 border-b hover:bg-primary/10",
                            {
                              "bg-primary/5": !item.isReaded,
                              "border-none": i === data.length - 1,
                            }
                          )}
                          onPointerDown={notificationPointerHandler}>
                          <div className="row-span-3 mt-[0.5rem]">
                            <span
                              className={cn(
                                "relative flex items-center justify-center h-3 w-3",
                                {
                                  invisible: item.isReaded,
                                }
                              )}>
                              <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-primary/50"></span>
                              <span className="relative inline-flex w-2 h-2 rounded-full bg-primary"></span>
                            </span>
                          </div>
                          <div className="mb-1 truncate">{item.title}</div>
                          <p className="text-sm text-muted-foreground line-clamp-3">
                            {item.text}
                          </p>
                          <time
                            className="mt-1 text-sm"
                            dateTime={dayjs(item.date).toISOString()}>
                            {dayjs(item.date).fromNow()}
                          </time>
                        </Link>
                      </motion.div>
                    </ContextMenuTrigger>
                    <ContextMenuContent className="w-40">
                      <ContextMenuItem
                        onSelect={() => readNotification(item.id)}
                        disabled={item.isReaded}>
                        <Icons.Check className="mr-2 text-lg" />
                        <span>Прочитать</span>
                      </ContextMenuItem>
                      <ContextMenuItem
                        onSelect={() => deleteNotification(item.id)}>
                        <Icons.Trash className="mr-2 text-lg" />
                        <span>Удалить</span>
                      </ContextMenuItem>
                    </ContextMenuContent>
                  </ContextMenu>
                ))
              ) : (
                <motion.div
                  key="empty-statement"
                  initial={{ opacity: 0, height: 0, marginBlock: 0 }}
                  animate={{ opacity: 1, height: "auto", marginBlock: "1rem" }}
                  exit={{ opacity: 0, height: 0, marginBlock: 0 }}
                  className="overflow-hidden">
                  <div className="h-[7rem] relative overflow-hidden flex items-center text-primary justify-center">
                    <div className="bg-[radial-gradient(ellipse,transparent_0%,hsl(var(--popover))_70%)] absolute inset-0 z-10"></div>
                    <Icons.BgMask className="absolute w-full -left-[2%]" />
                    <Icons.Bell className="text-xl" />
                  </div>
                  <span className="text-center block font-medium mb-0.5">
                    Уведомлений пока нет
                  </span>
                  <p className="text-sm text-center text-muted-foreground">
                    Возвращайтесь позже
                  </p>
                </motion.div>
              )
            ) : (
              <motion.div
                key="loading-layout"
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden">
                <div className="overflow-hidden grid grid-cols-[auto_1fr] gap-x-3 px-4 py-5">
                  <div className="row-span-3 w-3"></div>
                  <Skeleton className="rounded-full w-40 h-4 mb-4" />
                  <div className="space-y-1">
                    <Skeleton className="w-full h-3 rounded-full" />
                    <Skeleton className="w-full h-3 rounded-full" />
                    <Skeleton className="w-full h-3 rounded-full" />
                  </div>
                  <Skeleton className="rounded-full h-3 w-20 mt-4" />
                </div>
                <div className="overflow-hidden grid grid-cols-[auto_1fr] gap-x-3 px-4 py-5">
                  <div className="row-span-3 w-3"></div>
                  <Skeleton className="rounded-full w-40 h-4 mb-4" />
                  <div className="space-y-1">
                    <Skeleton className="w-full h-3 rounded-full" />
                    <Skeleton className="w-full h-3 rounded-full" />
                    <Skeleton className="w-full h-3 rounded-full" />
                  </div>
                  <Skeleton className="rounded-full h-3 w-20 mt-4" />
                </div>
                <div className="overflow-hidden grid grid-cols-[auto_1fr] gap-x-3 px-4 py-5">
                  <div className="row-span-3 w-3"></div>
                  <Skeleton className="rounded-full w-40 h-4 mb-4" />
                  <div className="space-y-1">
                    <Skeleton className="w-full h-3 rounded-full" />
                    <Skeleton className="w-full h-3 rounded-full" />
                    <Skeleton className="w-full h-3 rounded-full" />
                  </div>
                  <Skeleton className="rounded-full h-3 w-20 mt-4" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <AnimatePresence mode="popLayout" initial={false}>
          {data.length || isDataLoading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="px-4 py-1 border-t">
              <Button type="button" variant="link" asChild>
                <Link href={RoutesMap.Notifications}>Посмотреть все</Link>
              </Button>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </PopoverContent>
    </Popover>
  );
}

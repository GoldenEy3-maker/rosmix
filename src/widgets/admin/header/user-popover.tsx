"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/admin";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/admin";
import { Button } from "@/shared/ui/admin";
import { Icons } from "@/shared/ui/admin";
import Link from "next/link";
import { RoutesMap } from "@/shared/lib/admin";
import { Switch } from "@/shared/ui/admin";
import { Label } from "@/shared/ui/admin";
import { Separator } from "@/shared/ui/admin";
import { useTheme } from "next-themes";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui/admin";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import { cn } from "@/shared/lib";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/shared/ui/admin";
import Image from "next/image";

const iconVariants: Variants = {
  open: {
    rotate: "180deg",
  },
  closed: {
    rotate: 0,
  },
};

const accountsWrapperVariants: Variants = {
  closed: {
    marginBlock: 0,
  },
  hasAccounts: {
    marginBlock: "0.5rem",
  },
  empty: {
    marginBlock: "1rem",
  },
};

export function UserPopover() {
  const [additionalAccounts, setAdditionalAccounts] = useState([
    {
      id: crypto.randomUUID(),
      image: "https://github.com/shadcn.png",
      name: "shadcn",
      role: "Admin",
    },
    {
      id: crypto.randomUUID(),
      image: "https://github.com/shadcn.png",
      name: "shadcn",
      role: "Admin",
    },
  ]);
  const [isAdditionalAccountsShown, setIsAdditionalAccountsShown] =
    useState(false);

  const { setTheme, theme } = useTheme();

  function deleteAdditionalAccount(id: string) {
    setAdditionalAccounts((prev) =>
      prev.filter((account) => account.id !== id)
    );
  }

  function addAdditionalAccount() {
    if (!isAdditionalAccountsShown) setIsAdditionalAccountsShown(true);

    setAdditionalAccounts((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        image: "https://github.com/shadcn.png",
        name: "shadcn",
        role: "Admin",
      },
    ]);
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          type="button"
          className="text-left data-[state=open]:bg-primary/10 data-[state=open]:text-primary group h-auto flex justify-normal rounded-none font-normal px-2 max-w-44 min-w-44 w-full gap-x-3">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="@shadcn"
              asChild>
              <Image
                src="https://github.com/shadcn.png"
                alt="@shadcn"
                fill
                sizes="5vw"
              />
            </AvatarImage>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm truncate -mb-1">shadcn</p>
            <span className="text-muted-foreground text-xs">Admin</span>
          </div>
          <div className="flex items-center justify-center text-base">
            <Icons.DotsVertical className="text-muted-foreground group-hover:text-primary group-data-[state=open]:text-primary" />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        onOpenAutoFocus={(event) => {
          event.preventDefault();
          (event.target as HTMLDivElement | null)?.focus();
        }}
        className="p-0"
        sideOffset={20}
        collisionPadding={{ right: 20 }}>
        <div className="px-4 py-2 flex items-center justify-between gap-2 border-b">
          <p>
            Привет, <span className="font-semibold">shadcn!</span>
          </p>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                size="icon"
                variant="ghost"
                onClick={() => setIsAdditionalAccountsShown((prev) => !prev)}
                className="rounded-full text-muted-foreground">
                <motion.span
                  initial={false}
                  variants={iconVariants}
                  animate={isAdditionalAccountsShown ? "open" : "closed"}>
                  <Icons.ChevronDown className="text-lg" />
                </motion.span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              Выбрать другой аккаунт
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="overflow-x-hidden overflow-y-auto max-h-[calc(100vh-10rem)]">
          <div
            className={cn("border-b overflow-hidden transition-all", {
              "border-transparent": !isAdditionalAccountsShown,
            })}>
            <motion.div
              initial={false}
              variants={accountsWrapperVariants}
              animate={
                isAdditionalAccountsShown
                  ? additionalAccounts.length
                    ? "hasAccounts"
                    : "empty"
                  : "closed"
              }>
              <AnimatePresence initial={false}>
                {isAdditionalAccountsShown ? (
                  additionalAccounts.length ? (
                    additionalAccounts.map((account, i) => (
                      <ContextMenu key={account.id}>
                        <ContextMenuTrigger asChild>
                          <motion.div
                            initial={{
                              opacity: 0,
                              height: 0,
                            }}
                            animate={{
                              opacity: 1,
                              height: "auto",
                            }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden">
                            <Button
                              type="button"
                              variant="ghost"
                              className="grid justify-normal w-full px-6 rounded-none font-normal text-left h-auto gap-x-3 grid-cols-[auto_1fr]">
                              <Avatar className="row-span-2">
                                <AvatarImage
                                  src={account.image}
                                  alt={account.name}
                                  asChild>
                                  <Image
                                    src={account.image}
                                    alt={account.image}
                                    fill
                                    sizes="5vw"
                                  />
                                </AvatarImage>
                                <AvatarFallback>CN</AvatarFallback>
                              </Avatar>
                              <p className="text-base truncate">
                                {account.name}
                              </p>
                              <span className="text-sm text-muted-foreground truncate">
                                {account.role}
                              </span>
                            </Button>
                          </motion.div>
                        </ContextMenuTrigger>
                        <ContextMenuContent className="w-40">
                          <ContextMenuItem>
                            <Icons.ArrowLeft className="mr-2 text-lg" />
                            <span>Перейти</span>
                          </ContextMenuItem>
                          <ContextMenuItem
                            onSelect={() =>
                              deleteAdditionalAccount(account.id)
                            }>
                            <Icons.Trash className="mr-2 text-lg" />
                            <span>Удалить</span>
                          </ContextMenuItem>
                        </ContextMenuContent>
                      </ContextMenu>
                    ))
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginBlock: 0 }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{ opacity: 0, height: 0, marginBlock: 0 }}
                      className="overflow-hidden">
                      <div className="h-[7rem] relative overflow-hidden flex items-center text-primary justify-center">
                        <div className="bg-[radial-gradient(ellipse,transparent_0%,hsl(var(--popover))_70%)] absolute inset-0 z-10"></div>
                        <Icons.BgMask className="absolute w-full -left-[2%]" />
                        <Icons.UsersPlus className="text-xl" />
                      </div>
                      <span className="text-center block font-medium mb-0.5">
                        Аккаунтов нет
                      </span>
                      <p className="text-sm text-center text-muted-foreground">
                        Вы можете добавить аккаунт ниже
                      </p>
                    </motion.div>
                  )
                ) : null}
              </AnimatePresence>
            </motion.div>
          </div>
          <div className="p-2">
            <Button
              variant="ghost"
              className="w-full justify-normal"
              onClick={addAdditionalAccount}>
              <Icons.UserPlus className="text-lg mr-2" />
              <span>Добавить аккаунт</span>
            </Button>
            <Button variant="ghost" className="w-full justify-normal" asChild>
              <Link href={RoutesMap.Account}>
                <Icons.Settings2 className="text-lg mr-2" />
                <span>Настройки аккаунта</span>
              </Link>
            </Button>
            <Separator className="my-2" />
            <Button asChild variant="ghost" className="w-full cursor-pointer">
              <Label>
                <Icons.Moon className="text-lg mr-2" />
                <div className="flex-1">
                  <span>Темная тема</span>
                </div>
                <Switch
                  checked={theme === "dark"}
                  onCheckedChange={() =>
                    setTheme(theme === "dark" ? "light" : "dark")
                  }
                />
              </Label>
            </Button>
            <Separator className="my-2" />
            <Button variant="ghost" className="w-full justify-normal">
              <Icons.Help className="text-lg mr-2" />
              <span>Обратная связь</span>
            </Button>
            <Button variant="ghost" className="w-full justify-normal">
              <Icons.Logout className="text-lg mr-2" />
              <span>Выйти</span>
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

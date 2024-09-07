"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/shared/ui/admin";
import { useState } from "react";
import { Button } from "@/shared/ui/admin";
import { Icons } from "@/shared/ui/admin";
import { useEventListener } from "usehooks-ts";
import { isAppleUserAgent } from "@/shared/hooks/admin";

export function HeaderSearchCommand() {
  const [isOpen, setIsOpen] = useState(false);

  useEventListener("keydown", (event) => {
    const isShortcutPressed = isAppleUserAgent(navigator)
      ? event.metaKey && event.code === "KeyK"
      : event.ctrlKey && event.code === "KeyK";

    if (isShortcutPressed) {
      event.preventDefault();
      setIsOpen(true);
    }
  });

  return (
    <div>
      <Button
        variant="secondary"
        className="min-w-56"
        onClick={() => setIsOpen(true)}>
        <Icons.Search className="text-lg mr-2" />
        <span className="mr-2 font-normal">Поиск</span>
        <div className="flex items-center gap-0.5 ml-auto">
          <span className="border shadow-sm bg-background border-muted text-base  rounded-md w-6 h-6 flex items-center justify-center">
            <Icons.Command className="opacity-80" />
          </span>
          <span className="border shadow-sm bg-background border-muted text-base  rounded-md w-6 h-6 font-normal flex items-center justify-center">
            <Icons.LetterK className="opacity-80" />
          </span>
        </div>
      </Button>
      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder="Что-то ищите..." />
        <CommandList>
          <CommandEmpty>Совпадений не найдено.</CommandEmpty>
          <CommandGroup heading="Предложения">
            <CommandItem>
              <Icons.Calendar className="mr-3 text-lg" />
              <span>Календар</span>
            </CommandItem>
            <CommandItem>
              <Icons.Emoji className="mr-3 text-lg" />
              <span>Поиск эмодзи</span>
            </CommandItem>
            <CommandItem disabled>
              <Icons.Calculator className="mr-3 text-lg" />
              <span>Калькулятор</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Настройки">
            <CommandItem>
              <Icons.User className="mr-3 text-lg" />
              <span>Профиль</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Icons.CreditCard className="mr-3 text-lg" />
              <span>Оплата</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Icons.Settings className="mr-3 text-lg" />
              <span>Настройки</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}

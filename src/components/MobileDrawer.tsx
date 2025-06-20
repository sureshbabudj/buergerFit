import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { MenuIcon, XIcon } from "lucide-react";
import { Tabs } from "./Tabs";

export function MobileDrawer({ reset }: { reset: () => void }) {
  return (
    <Drawer direction={"left"}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="p-2">
          <MenuIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="flex w-[300px] h-full min-w-auto rounded-none">
        <div className=" mx-auto w-full max-w-sm ">
          <DrawerHeader className="flex items-center justify-between">
            <DrawerTitle>Settings</DrawerTitle>
            <DrawerClose asChild>
              <Button variant="outline" className="p-2 rounded-full">
                <XIcon className="h-4 w-4 dark:text-white" />
              </Button>
            </DrawerClose>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <Tabs reset={reset} showRegion={false} className="flex flex-col" />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

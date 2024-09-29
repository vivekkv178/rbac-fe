import React from "react";
import { Plus, RefreshCcw, Settings as SettingsIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@vivekkv178/library";

import { Button } from "@vivekkv178/library";
import { useUsersContext } from "../context/context";
import { useAppSelector } from "@/lib/reduxHooks";
import { ROLES } from "@/lib/constants";

const Settings = () => {
  const { commonState } = useUsersContext();
  const authState = useAppSelector((state) => state.auth);

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <SettingsIcon className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Settings</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {authState?.user?.role === ROLES.SUPER_ADMIN && (
            <DropdownMenuItem onClick={() => commonState?.setAddDialog(true)}>
              <Plus className="mr-2 h-4 w-4" />
              <span>Add User</span>
            </DropdownMenuItem>
          )}
          <DropdownMenuItem onClick={commonState?.refreshHandler}>
            <RefreshCcw className="mr-2 h-4 w-4" />
            <span>Sync Data</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Settings;

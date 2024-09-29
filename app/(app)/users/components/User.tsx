/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@vivekkv178/library";
import { useUsersContext } from "../context/context";
import { Icon } from "@iconify/react";
import { Card, CardContent, CardHeader, CardTitle } from "@vivekkv178/library";
import { User } from "../utils/types";
import { useAppSelector } from "@/lib/reduxHooks";
import { ROLES } from "@/lib/constants";

type UserProps = {
  user: User;
};

const UserComp: React.FC<UserProps> = ({ user }) => {
  const { commonState } = useUsersContext();
  const authState = useAppSelector((state) => state.auth);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium"></CardTitle>
        <div className="flex tw-gap-2">
          <TooltipProvider delayDuration={0}>
            {[ROLES.SUPER_ADMIN, ROLES.ADMIN].includes(
              authState?.user?.role,
            ) && (
              <Tooltip>
                <TooltipTrigger>
                  <Icon
                    icon="lucide:edit"
                    className="h-4 w-4 text-muted-foreground"
                    onClick={() => commonState?.editHandler(user)}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Edit</p>
                </TooltipContent>
              </Tooltip>
            )}
            {authState?.user?.role === ROLES.SUPER_ADMIN && (
              <Tooltip>
                <TooltipTrigger>
                  <Icon
                    icon="lucide:trash-2"
                    className="h-4 w-4 text-muted-foreground"
                    color="red"
                    onClick={() => commonState?.deleteHandler(user)}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Delete</p>
                </TooltipContent>
              </Tooltip>
            )}
          </TooltipProvider>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{user?.name}</div>
        <p className="text-xs text-muted-foreground">{user?.email}</p>
      </CardContent>
    </Card>
  );
};

export default UserComp;

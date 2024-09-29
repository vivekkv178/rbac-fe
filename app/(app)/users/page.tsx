"use client";

import React from "react";

import AddUser from "./components/AddUser";
import Settings from "./components/Settings";
import User from "./components/User";
import EditUser from "./components/EditUser";
import DeleteUser from "./components/DeleteUser";
import { UsersProvider, useUsersContext } from "./context/context";
import { Loader2 } from "lucide-react";
import { useAppSelector } from "@/lib/reduxHooks";
import { RBAC_EDIT, ROLES } from "@/lib/constants";

function Users() {
  const { commonState } = useUsersContext();
  const authState = useAppSelector((state) => state.auth);
  const userRole: ROLES = authState?.user?.role ?? ROLES.USER;
  const editableRoles = RBAC_EDIT[userRole];

  return (
    <>
      <AddUser />
      <EditUser />
      <DeleteUser />
      <div className="tw-flex tw-flex-row-reverse">
        <Settings />
      </div>
      {commonState?.listLoading || !authState?.user ? (
        <div className="tw-grid tw-place-items-center">
          <Loader2 className="tw-h-12 tw-w-12 tw-animate-spin" />
        </div>
      ) : (
        <>
          <div className="tw-text-center tw-text-xl tw-font-bold">{`You are ${authState?.user?.role}.`}</div>
          <div className="tw-max-w-[85rem] tw-px-4 tw-py-10 sm:tw-px-6 lg:tw-px-8 lg:tw-py-14 tw-mx-auto">
            <div className="tw-grid sm:tw-grid-cols-2 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-3 sm:tw-gap-6">
              {commonState?.users
                ?.filter((user) => editableRoles?.includes(user?.access_role))
                ?.map((user, index) => <User key={index} user={user} />)}
            </div>
          </div>
        </>
      )}
    </>
  );
}

const ManageUsers = () => {
  return (
    <UsersProvider>
      <Users />
    </UsersProvider>
  );
};

export default ManageUsers;

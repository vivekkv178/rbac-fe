"use client";

import React from "react";

import { ComponentProvider, useComponentContext } from "./context/context";
import { Icon } from "@iconify/react";
import { useAppSelector } from "@/lib/reduxHooks";

function Home() {
  const { commonState } = useComponentContext();
  const authState = useAppSelector((state) => state.auth);

  return (
    <>
      {commonState?.listLoading || !authState?.user ? (
        <div className="tw-grid tw-place-items-center">
          <Icon
            icon="lucide:loader-circle"
            className="tw-h-12 tw-w-12 tw-animate-spin"
          />
        </div>
      ) : (
        <>
          <div className="tw-text-center tw-text-xl tw-font-bold">{`Welcome ${authState?.user?.email}. Please find your details below:`}</div>
          <div className="tw-text-center tw-text-xl tw-font-bold">{`You are ${authState?.user?.role}.`}</div>
          <br />
          <pre className="tw-self-center">
            {JSON.stringify(commonState?.mainItems, null, 2)}
          </pre>
        </>
      )}
    </>
  );
}

const Manage = () => {
  return (
    <ComponentProvider>
      <Home />
    </ComponentProvider>
  );
};

export default Manage;

"use client";
import { Button, SectionTitle } from "@vivekkv178/library";
import Link from "next/link";
import { Icon } from "@iconify/react";

const APIDocs = () => {
  return (
    <section id="api-docs" className="relative mb-12 xl:mb-48 p-8">
      <div className="container mx-auto xl:flex xl:space-x-8 gap-x-20">
        <div className="tw-max-w-[500px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <SectionTitle title="API Docs" />
          <p className="subtitle mb-4 text-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <p className="subtitle">
                  {`Our API documentation is designed to help developers and
                  businesses seamlessly integrate and expand their applications
                  with ease. Whether you're building from scratch or enhancing
                  existing features, our APIs provide the building blocks to
                  power your app's backend with efficiency and precision.`}
                </p>
              </div>
            </div>
          </p>
          <Link
            href={`${process?.env?.NEXT_PUBLIC_RBAC_BE_URL}/docs/v1#/operations/SignUpController_signUp`}
            target="_blank"
          >
            <Button className="tw-gap-x-2">
              API Documentation
              <Icon icon="lucide:navigation" className="tw-w-5 tw-h-5" />
            </Button>
          </Link>
        </div>
        <div className="tw-ml-8 tw-mx-auto">
          <img
            src={`${process?.env?.NEXT_PUBLIC_CDN_PATH}/rbac/Api_docs.png`}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default APIDocs;

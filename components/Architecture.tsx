"use client";
import { SectionTitle } from "@vivekkv178/library";

const Architecture = () => {
  return (
    <section id="arch" className="relative mb-2 xl:mb-48 p-8">
      <div className="container mx-auto xl:flex xl:space-x-8 gap-x-20">
        {/* text */}
        <div className="tw-max-w-[500px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <SectionTitle title="Architecture" />
          <p className="subtitle mb-8 text-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <p className="subtitle">
                  Our architecture combines Next.js for the front-end, Nest.js
                  for the backend, and MongoDB for data storage. This setup
                  offers a streamlined approach to building modern web
                  applications, providing a user-friendly interface, efficient
                  backend processing, and reliable data management.
                </p>
              </div>
            </div>
          </p>
        </div>
        <div className="mx-auto">
          <img
            src={`${process?.env?.NEXT_PUBLIC_CDN_PATH}/rbac/Architecture.gif`}
            className="mx-auto tw-h-3/4 tw-w-3/4"
          />
        </div>
      </div>
    </section>
  );
};

export default Architecture;

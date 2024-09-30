"use client";
import { SectionTitle } from "@vivekkv178/library";

const Usecase = () => {
  return (
    <section id="usecase" className="relative mb-2 xl:mb-48 p-8">
      <div className="container mx-auto xl:flex xl:space-x-8 gap-x-20">
        {/* text */}
        <div className="tw-max-w-[500px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <SectionTitle title="Usecase" />
          <p className="subtitle mb-8 text-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <p className="subtitle">
                  This application illustrates a use case where users can
                  register and gain access to the platform. Depending on their
                  assigned roles, users can add, update, or delete other users,
                  enabling efficient management and streamlined permissions.
                </p>
              </div>
            </div>
          </p>
        </div>
        <div className="mx-auto">
          <img
            src={`${process?.env?.NEXT_PUBLIC_CDN_PATH}/rbac/Usecase.png`}
            className="mx-auto tw-rounded-sm tw-h-80"
          />
        </div>
      </div>
    </section>
  );
};

export default Usecase;

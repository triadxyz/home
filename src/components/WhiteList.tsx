"use client";

import { useCallback, useEffect, useState } from "react";
import { WhiteListForm } from "./form";
import Image from "next/image";
import MockupImage from "../../public/img/mockup.png";
import { cn } from "@/utils/cn";

export const WhiteList: React.FC<{ initForm: (value: boolean) => void }> = ({
  initForm,
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formStarted, setFormStarted] = useState(false);

  const handleFormSubmit = useCallback(() => {
    setFormSubmitted(true);
  }, []);

  const handleInitForm = useCallback(
    (value: boolean) => {
      setFormStarted(value);
      initForm(formStarted);
    },
    [initForm, formStarted]
  );

  useEffect(() => {
    if (formSubmitted) {
      localStorage.setItem("submittedForm", "true");
    }
  }, [formSubmitted]);

  return (
    <div className="w-full lg:max-w-[1330px] h-fit text-center">
      <div className="w-full">
        {formSubmitted ? (
          <div
            className={cn("grid relative place-content-center", {
              "-mt-40": formStarted,
            })}
          >
            <Image
              className="mx-auto mb-10"
              src={require("../../public/img/concludedForm.svg")}
              alt=""
            />
            <span className="text-xl lg:text-5xl leading-snug text-white font-medium">
              Thank you for joining our whitelist
            </span>

            <div className="relative p-4 pt-8 mt-10 lg:mt-40 w-full lg:w-2/3 h-[400px] lg:h-[200px] mx-auto bg-fire-gray-custom rounded-2xl">
              <div className="w-full lg:w-1/2">
                <h3 className="text-center lg:text-start text-2xl leading-7 text-white">
                  <span className="font-semibold">Follow us</span> for more
                  information!
                </h3>
                <button className="px-10 max-[768px]:w-full py-2 mt-6 text-white rounded-xl flex justify-center items-center bg-fire-blue-medium">
                  <a target="_blank" href="https://twitter.com/triadfi">
                    Join
                  </a>
                </button>
              </div>

              <Image
                width={240}
                height={320}
                className="absolute right-4 bottom-0 w-40 h-48 lg:w-60 lg:h-72 object-contain"
                src={MockupImage}
                alt=""
              />
            </div>
          </div>
        ) : (
          <>
            <div
              className={cn("w-fit mt-6 mx-auto relative", {
                hidden: formStarted,
              })}
            >
              <h3 className="font-medium relative text-white text-2xl mb-10">
                Whitelist is open!
              </h3>
              <Image
                width={12}
                height={12}
                className="absolute bottom-0 -right-2.5"
                src={require("../../public/img/icon-decoration.svg")}
                alt=""
              />
              <Image
                width={12}
                height={12}
                className="absolute -bottom-1 -right-4"
                src={require("../../public/img/icon-decoration.svg")}
                alt=""
              />
            </div>

            <WhiteListForm
              setStartedForm={handleInitForm}
              formStarted={formStarted}
              onSubmit={handleFormSubmit}
            />
          </>
        )}
      </div>
    </div>
  );
};

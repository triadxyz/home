import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import api from "@/constants/api";

interface WhiteListFormProps {
  onSubmit: () => void;
  setStartedForm: (value: boolean) => void;
  formStarted: boolean;
}

export const WhiteListForm: React.FC<WhiteListFormProps> = ({
  onSubmit,
  setStartedForm,
  formStarted,
}) => {
  const [animateRight, setAnimateRight] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [buttonClicked, setButtonClicked] = useState(false);

  const questions: string[] = [
    "",
    "1. Your email (optional)",
    "2. Your DAO Community (Twitter handle)",
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [formData, setFormData] = useState<string[]>(
    Array(questions.length).fill("")
  );

  const validateFormData = useCallback(
    (data: string[], index: number): void => {
      const isEmailField = index === 1;
      const isEmpty = data[index].trim() === "";
      if (!isEmailField && !isEmpty) {
        setIsButtonDisabled(false);
      } else if (isEmailField) {
        setIsButtonDisabled(false);
      } else {
        setIsButtonDisabled(true);
      }
    },
    []
  );

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      const newFormData: string[] = [...formData];
      newFormData[currentQuestionIndex] = event.target.value;
      setFormData(newFormData);
    },
    [currentQuestionIndex, formData]
  );

  useEffect(() => {
    if (buttonClicked) {
      setStartedForm(true);
    }
  }, [buttonClicked, setStartedForm]);

  const handleNextQuestion = useCallback(async () => {
    if (!buttonClicked) {
      setButtonClicked(true);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setAnimateRight(true);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      try {
        setLoading(true);
        const requestData = {
          walletAddress: formData[0],
          email: formData[1],
          community: formData[2],
        };

         await api.post("/whitelist", requestData);

        setCurrentQuestionIndex(0);
        setFormData(Array(questions.length).fill(""));
        void onSubmit();
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  }, [
    currentQuestionIndex,
    formData,
    questions.length,
    onSubmit,
    buttonClicked,
  ]);

  useEffect(() => {
    setTimeout(() => {
      setAnimateRight(false);
    }, 1000);
  }, [animateRight]);

  useEffect(() => {
    validateFormData(formData, currentQuestionIndex);
  }, [formData, currentQuestionIndex, validateFormData]);

  return (
    <div
      className={cn(
        "relative z-30",
        formStarted && currentQuestionIndex === 1 ? "animate-slide-up" : "",
        animateRight && currentQuestionIndex !== 1 ? "animate-right" : ""
      )}
    >
      <label className="font-semibold lg:text-5xl text-white">
        {questions[currentQuestionIndex]}
      </label>

      <div className="lg:flex w-full lg:w-2/3 mx-auto relative mt-8 gap-x-3">
        <div className="lg:w-10/12">
          <input
            className="w-full text-white px-4 h-16 placeholder:text-sm bg-fire-gray-custom rounded-2xl border border-white/20"
            type="text"
            value={formData[currentQuestionIndex]}
            required={currentQuestionIndex !== 1}
            placeholder={placeholders[currentQuestionIndex]}
            onChange={handleInputChange}
          />

          {currentQuestionIndex === 0 && (
            <div className="w-fit mt-1.5 lg:mt-4 mr-auto cursor-default">
              <p className="text-center text-white/60 text-[10px] lg:text-sm leading-4">
                If you prefer, use your{" "}
                <span className="text-fire-blue-medium underline">Email</span>{" "}
                to enlist. And keep an eye on our{" "}
                <span className="text-fire-blue-medium underline">Twitter</span>
                .
              </p>
            </div>
          )}
        </div>

        <button
          className="bg-fire-blue-medium min-w-[135px] flex items-center justify-center max-[768px]:ml-auto mt-5 lg:mt-0 disabled:opacity-60 disabled:cursor-not-allowed py-5 gap-x-4 text-white rounded-2xl h-16"
          onClick={() => {
            handleNextQuestion();
          }}
          disabled={isButtonDisabled}
        >
          {loading ? (
            <div className="animate-spin ease-in w-6 h-6 border border-white rounded-full"></div>
          ) : (
            <>
              {currentQuestionIndex === questions.length - 1 ? "Done" : "Next"}

              {currentQuestionIndex === questions.length - 1 ? (
                <Image
                  width={30}
                  height={30}
                  src={require("../../public/img/icon-done.svg")}
                  alt="next-step-arrow"
                />
              ) : (
                <Image
                  width={30}
                  height={30}
                  src={require("../../public/img/icon-arrow.svg")}
                  alt="done"
                />
              )}
            </>
          )}
        </button>
      </div>
    </div>
  );
};

// utils
const placeholders: string[] = [
  "Enter your wallet address",
  "Enter your email",
  "Enter your DAO Community",
];

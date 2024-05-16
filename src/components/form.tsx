import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import api from "@/constants/api";
import { isValidEmail, validateSolanaAddress } from "@/utils/validateForm";

interface WhiteListFormProps {
  onSubmit: () => void;
  setStartedForm: (value: boolean) => void;
  formStarted: boolean;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

export const WhiteListForm: React.FC<WhiteListFormProps> = ({
  onSubmit,
  setStartedForm,
  formStarted,
  setCurrentIndex,
}) => {
  const [animateRight, setAnimateRight] = useState(false);
  const [animateleft, setAnimateleft] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [buttonClicked, setButtonClicked] = useState(false);
  const questions: string[] = [
    "1. Your Solana address",
    "2. Your email (optional)",
    "3. Your DAO Community (Twitter handle)",
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [formData, setFormData] = useState<string[]>(
    Array(questions.length).fill("")
  );

  const validateFormData = useCallback(
    (data: string[], index: number): void => {
      const isEmailField = index === 1;
      const isEmpty = data[index].trim() === "";
      let isDisabled = false;

      if (!isEmpty && index === 0) {
        isDisabled = !validateSolanaAddress(data[0]);
      } else if (!isEmpty && isEmailField) {
        isDisabled = !isValidEmail(data[1]);
      } else if (isEmpty && isEmailField) {
        isDisabled = false;
      } else if (isEmpty && index === 0){
        isDisabled = true
      }


      setIsButtonDisabled(isDisabled);
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
      setCurrentIndex(currentQuestionIndex);
    }
  }, [buttonClicked, setStartedForm, setCurrentIndex, currentQuestionIndex]);

  const handlePreviousQuestion = useCallback(() => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
    setAnimateleft(true);

    if (currentQuestionIndex === 0) {
      setStartedForm(false);
    }

    setCurrentIndex(currentQuestionIndex);
  }, [currentQuestionIndex, setStartedForm, setCurrentIndex]);

  const handleNextQuestion = useCallback(async () => {
    if (!buttonClicked) {
      setButtonClicked(true);
    }

    setCurrentIndex(currentQuestionIndex);

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

        await fetch(`/api/whitelist`, {
          method: 'POST',
          body: JSON.stringify(requestData)
        })

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
    setCurrentIndex,
  ]);

  useEffect(() => {
    setTimeout(() => {
      setAnimateRight(false);
      setAnimateleft(false);
    }, 1000);
  }, [animateRight, animateleft]);

  useEffect(() => {
    validateFormData(formData, currentQuestionIndex);
  }, [formData, currentQuestionIndex, validateFormData]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter" && !isButtonDisabled) {
        handleNextQuestion();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleNextQuestion, isButtonDisabled]);

  return (
    <div
      className={cn("relative z-30", {
        "animate-right": animateRight,
        "animate-slide-left": animateleft,
         "-top-28": currentQuestionIndex !== 0,
         "pt-40": formStarted
      })}
    >
      <label className="font-semibold lg:text-5xl text-white">
        {questions[currentQuestionIndex]}
      </label>

      <div className="lg:flex w-full lg:w-2/3 mx-auto relative mt-14 gap-x-3">
        <div className="lg:w-10/12 relative">
          <input
            className="w-full text-white px-4 h-16 lg:placeholder:text-lg placeholder:text-white/40 bg-fire-gray-custom rounded-2xl border border-white/20"
            type="text"
            value={formData[currentQuestionIndex]}
            required={currentQuestionIndex !== 1}
            placeholder={placeholders[currentQuestionIndex]}
            onChange={handleInputChange}
          />
        </div>

        <button
          className="bg-fire-blue-medium min-w-[135px] flex items-center justify-center max-[768px]:ml-auto mt-5 lg:mt-0 disabled:opacity-60 disabled:cursor-not-allowed py-5 gap-x-4 text-white rounded-2xl h-16"
          onClick={() => {
            handleNextQuestion();
          }}
          disabled={isButtonDisabled}
        >
          {loading ? (
            <div className="loader"></div>
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

      {formStarted === true && (
        <div className="flex w-fit gap-x-4 mx-auto mt-28 lg:mt-[140px] items-center">
          <button
            className="rounded-lg bg-fire-gray-custom p-2 disabled:cursor-not-allowed disabled:opacity-60"
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            <Image
              className="rotate-180 opacity-75"
              src={require("../../public/img/icon-arrow.svg")}
              alt=""
            />
          </button>

          <button
            disabled={isButtonDisabled}
            className="rounded-lg bg-fire-gray-custom p-2 disabled:cursor-not-allowed disabled:opacity-60"
            onClick={handleNextQuestion}
          >
            <Image
              className="opacity-75"
              src={require("../../public/img/icon-arrow.svg")}
              alt=""
            />
          </button>
        </div>
      )}
    </div>
  );
};

// utils

const placeholders: string[] = [
  "Enter your Solana wallet address",
  "Enter your email",
  "Enter your DAO Community... Ex: @triadlabs",
];

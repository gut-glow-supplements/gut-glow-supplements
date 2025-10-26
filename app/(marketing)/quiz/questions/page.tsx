"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

const QUESTIONS = [
  {
    question: "How often do you experience bloating after meals?",
    options: ["Rarely", "A few times a week", "Almost every day"]
  },
  {
    question: "How would you describe your energy throughout the day?",
    options: ["Steady", "Up and down", "Constantly drained"]
  },
  {
    question: "How many servings of plants do you typically eat daily?",
    options: ["5+", "2-4", "Less than 2"]
  }
];

export default function QuizQuestionsPage() {
  const [step, setStep] = useState(0);
  const [responses, setResponses] = useState<number[]>(Array(QUESTIONS.length).fill(-1));
  const isLastStep = step === QUESTIONS.length - 1;

  return (
    <Container className="py-12">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-soft">
        <p className="text-sm uppercase tracking-wide text-peach">Step {step + 1} of {QUESTIONS.length}</p>
        <h1 className="mt-4 text-3xl font-heading font-semibold text-teal">{QUESTIONS[step].question}</h1>
        <div className="mt-6 space-y-3">
          {QUESTIONS[step].options.map((option, index) => (
            <button
              key={option}
              type="button"
              className={`w-full rounded-full border px-5 py-3 text-left text-sm transition-colors ${responses[step] === index ? "border-teal bg-sage/20 text-teal" : "border-sand/80 bg-white text-charcoal/80 hover:border-teal/70"}`}
              onClick={() => {
                const nextResponses = [...responses];
                nextResponses[step] = index;
                setResponses(nextResponses);
              }}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-between">
          <Button
            type="button"
            variant="ghost"
            disabled={step === 0}
            onClick={() => setStep((prev) => Math.max(prev - 1, 0))}
            className="sm:w-auto"
          >
            Previous
          </Button>
          {isLastStep ? (
            <Button asChild disabled={responses.includes(-1)}>
              <Link href="/quiz/results">See my results</Link>
            </Button>
          ) : (
            <Button
              type="button"
              onClick={() => setStep((prev) => Math.min(prev + 1, QUESTIONS.length - 1))}
              disabled={responses[step] === -1}
              className="sm:w-auto"
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
}

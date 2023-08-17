import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

export const FAQ = () => {
  const t = useTranslations("FAQ");
  const faqs = [
    {
      question: t("1.question"),
      answer: t("1.answer"),
    },
    {
      question: t("2.question"),
      answer: t("2.answer"),
    },
    {
      question: t("3.question"),
      answer: t("3.answer"),
    },
    {
      question: t("4.question"),
      answer: t("4.answer"),
    },
    {
      question: t("5.question"),
      answer: t("5.answer"),
    },
    {
      question: t("6.question"),
      answer: t("6.answer"),
    },
    {
      question: t("7.question"),
      answer: t("7.answer"),
    },
  ];

  return (
    <section
      id="faq"
      className="container max-w-7xl space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-24"
    >
      <div className="mb-6">
        <h1 className="text-3xl my-2 md:text-4xl font-bold">{t("title")}</h1>
        <hr className="border-0 max-w-[36px] h-[6px] bg-green-500" />
      </div>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map(({ question, answer }) => (
          <AccordionItem key={question} value={question}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

FAQ.messages = ["FAQ"];

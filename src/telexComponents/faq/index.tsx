import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const Faq: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center lg:px-[50px] lg:flex-row lg:space-x-4">
        <div className="hidden flex-1 lg:block">
          <Image
            src="/images/faq-image.svg"
            alt="FAQ Image"
            width={500}
            height={500}
          />
        </div>

        <div className="flex flex-1 items-start justify-center flex-col">
          <h1 className="text-3xl font-semibold mb-4">Got Questions?</h1>
          <p className="mb-8">
            Explore common questions and answers to get the most out of Telex.
          </p>

          <div className="block  mx-auto mb-2 lg:hidden ">
            <Image
              src="/images/faq-image.svg"
              alt="FAQ Image"
              width={250}
              height={250}
            />
          </div>

          <div className="w-full text-left md:mt-[20px]">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[#1D1D1D]">
                  What is a real-time notification system?
                </AccordionTrigger>

                <AccordionContent className="text-[#767676]">
                  The real-time notification system is designed to collect and
                  organize events from all applications managed by your
                  organization. It provides instant notifications on key events
                  such as logins, errors, and bugs, helping you stay informed
                  and respond quickly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-[#1D1D1D]">
                  How do I organize channels for teams?
                </AccordionTrigger>

                <AccordionContent className="text-[#767676]">
                  The real-time notification system is designed to collect and
                  organize events from all applications managed by your
                  organization. It provides instant notifications on key events
                  such as logins, errors, and bugs, helping you stay informed
                  and respond quickly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-[#1D1D1D]">
                  How do I integrate with my existing apps?
                </AccordionTrigger>

                <AccordionContent className="text-[#767676]">
                  The real-time notification system is designed to collect and
                  organize events from all applications managed by your
                  organization. It provides instant notifications on key events
                  such as logins, errors, and bugs, helping you stay informed
                  and respond quickly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-[#1D1D1D]">
                  What events can be tracked through the system?
                </AccordionTrigger>

                <AccordionContent className="text-[#767676]">
                  The real-time notification system is designed to collect and
                  organize events from all applications managed by your
                  organization. It provides instant notifications on key events
                  such as logins, errors, and bugs, helping you stay informed
                  and respond quickly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-[#1D1D1D]">
                  Can I customize channels and notifications?
                </AccordionTrigger>

                <AccordionContent className="text-[#767676]">
                  The real-time notification system is designed to collect and
                  organize events from all applications managed by your
                  organization. It provides instant notifications on key events
                  such as logins, errors, and bugs, helping you stay informed
                  and respond quickly.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

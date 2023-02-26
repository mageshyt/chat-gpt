export type featureProps = {
  title: string;
  examples: string[];
};

export const featuresData: featureProps[] = [
  {
    title: "Examples",
    examples: [
      "Explain quantum computing in simple terms",
      "Got anv creative ideas for a 10 vear old's birthday?",
      "How do I make an HTTP request in Javascript?",
    ],
  },
  {
    title: "Capabilities",
    examples: [
      "Remembers what user said earlier in the conversation",
      "Allows user to provide follow-up corrections",
      "Trained to decline inappropriate requests",
    ],
  },
  {
    title: "Limitations",

    examples: [
      "May occasionally generate incorrect information",
      "Mav occasionally produce harmful instructions or biased content",
      "Limited knowledge of world and events after 2021",
    ],
  },
];

export const model: any = [
  {
    value: "text-davinci",
    label: "text-davinci-003",
  },
  {
    value: "code-davinci-002",
    label: "Code Davinci",
  },
  {
    value: "text-babbage",
    label: "text-babbage-001",
  },
];

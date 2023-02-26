export type Message = {
  text: string;
  createdAt: any;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
};

export type Options = {
  value: string;
  label: string;
};

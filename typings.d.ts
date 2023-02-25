export type Message = {
  text: string;

  user: {
    _id: string;
    name: string;
    avatar: string;
  };
};

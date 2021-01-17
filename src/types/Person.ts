export type Person = {
  name: string;
  title: string;
  office: {
    sys: { id: string };
  };
  mugshot: { sys: { id: string } };
  biography: any;
  order: number;
};

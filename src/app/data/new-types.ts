export type BaseRecord<TId> = {
  id: TId;
};

export type Food = BaseRecord<number> & {
  description: string;
};

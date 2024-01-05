declare global {
  type BaseRecord<TId> = {
    id: TId;
  };

  type Food = BaseRecord<number> & {
    description: string;
  };
}

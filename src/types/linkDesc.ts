export type LinkDesc = {
  title: string;
} & (
  | {
      href: string;
    }
  | {
      onClick: () => void;
    }
);

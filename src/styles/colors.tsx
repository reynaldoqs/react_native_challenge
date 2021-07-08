type Colors = {
  primary: string;
  secondary: string;
  contrast: string;
  text: string;
};

type Categories = {
  Electronics: string;
  "Sports&Outdoors": string;
  Fashion: string;
};

export const redThemeColors: Colors = {
  primary: "hsl(351, 63%, 48%)",
  secondary: "hsl(352, 58%, 90%)",
  contrast: "hsl(0, 0%, 100%)",
  text: "hsl(10, 100%, 10%)",
};

export const categoryColors: Categories = {
  Electronics: "hsl(28, 87%, 62%)",
  "Sports&Outdoors": "hsl(146, 64%, 36%)",
  Fashion: "hsl(214, 84%, 56%)",
};

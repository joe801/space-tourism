export type TmenuItem = {
  no: string;
  title: string;
  link: string;
  route: string;
};

type imageT = {
  png: string;
  webp: string;
};

export type Tdestination ={
  name: string;
  images: imageT;
  description: string;
  distance: string;
  travel: string;
};

export type Tdestinations = Tdestination[];

export type TmenuItems = TmenuItem[];

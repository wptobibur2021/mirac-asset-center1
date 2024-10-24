// Menu Item Type

declare type MenuItemType = {
  name: string;
  href: string;
};

// Slider type

declare type SliderType = {
  id: number;
  image: string;
  title: string;
  subTitle: string;
  btnLink: string;
  btnText: string;
};

// Service type

declare type ServiceType = {
  id: number;
  image: string;
  title: string;
  subTitle: string;
};

// Event type

declare type EventSliderType = {
  id: number;
  image: string;
  title: string;
  eventItem: {
    id: number;
    title: string;
  }[];
  date: string;
};

// Arraow Control type

declare type ArrowSliderControlType = {
  position: string;
  onClick?: () => void;
  isLeft?: boolean;
  isRight?: boolean;
};

// Avenue type

declare type AvenueSliderType = {
  id: number;
  image: string;
  title: string;
};

export interface IWidget {
  type: string;
  name: string;
  icon: string;
  route: string,
  chartSvg: string;
};

export interface IWidgetFinal {
  name: string;
  value: string;
  parentKey?: string;
  display?: boolean;
  type: string;
  icon: string;
  route: string,
  chartSvg: string;
};

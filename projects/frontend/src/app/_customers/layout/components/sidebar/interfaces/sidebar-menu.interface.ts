interface ISidebarItem {
  name: string;
  route?: string;
};

export interface ISidebarMenuItem extends ISidebarItem {
  svg: string;
  items?: ISidebarItem[];
};

export interface ISidebarFooterItem extends ISidebarItem {
  svg: string;
  classes: string;
};
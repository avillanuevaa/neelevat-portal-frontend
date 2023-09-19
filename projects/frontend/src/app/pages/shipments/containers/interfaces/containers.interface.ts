export interface IContainers {
  customer: string;
  mbl: string;
  hbl: string;
  containerNumber: string;
  customerReference: string;
  tms: string;
  wms: string;
  shipmentID: string;
  product: string;
  sku: string[];
  batch: string;
  podETA: string;
  podATA: string;
  termETA: string;
  termATA: string;
  status: string;
  daysTerminal: string;
  tracked: string;
  priority: string;
  remarks: string;
  showAdditionalBadges: {
    containerNumber: boolean;
    shipmentID: boolean;
    batch: boolean;
    terminal: boolean;
  };
}

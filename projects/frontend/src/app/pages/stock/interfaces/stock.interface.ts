
export interface IStock {
  relationNumber: number;
  fileNumber: number;
  productSku: string;
  description: string;
  category: string;
  lot: string;
  quantityClosing: number;
  quantityToReceive: number;
  quantityToDeliver: number;
  quantityAvailable: number;
  stockBlocked: boolean;
  countryOfOrigin: string;
  grossWeight: number;
  nettWeight: number;
  numberOfPallets: number;
  palletId: string;
  palletType: string;
  dangerousGood: string;
  packingGroup: string;
  unNumber: string;
  reference: string;
  inboundOrderId: number;
  inboundDate: any;
  location: string;
  warehouse: string;
  id: number;
  index?: number;

  totalPallets?: number;
  pallets?:number;
  quantity?:number;
};

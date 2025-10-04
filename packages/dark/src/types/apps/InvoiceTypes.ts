interface OrderType {
  itemName?: string;
  unitPrice?: number;
  units?: number;
  unitTotalPrice?: number;
}

export interface InvoiceType {
  id?: number | any;
  billFrom?: string;
  billFromEmail?: string;
  billFromAddress?: string;
  billFromPhone?: number;
  billFromFax?: number;
  billTo?: string;
  billToEmail?: string;
  billToAddress?: string;
  billToPhone?: number;
  billToFax?: number;
  orderDate?: Date | string;
  totalCost?: number;
  vat?: number;
  grandTotal?: number;
  status?: string;
  completed?: boolean;
  isSelected?: boolean;
  orders?: OrderType[];
}

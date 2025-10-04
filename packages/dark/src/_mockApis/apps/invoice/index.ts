import type { InvoiceType } from "@/types/apps/InvoiceTypes";
import mock from "../../mockAdapter";
import { Chance } from "chance";
const chance = new Chance();

const InvoiceData: InvoiceType[] = [
  {
    id: 101,
    billFrom: "PineappleInc.",
    billFromEmail: "first@xabz.com",
    billFromAddress: "Ganesh glory,Godrej garden city,Ahmedabad.",
    billFromPhone: 979796786,
    billFromFax: 13,
    billTo: "Redq Inc.",
    billToEmail: "toFirst@agth.com",
    billToAddress: "Godrej garden city,Ahmedabad.",
    billToPhone: 757575233,
    billToFax: 76,
    orders: [
      {
        itemName: "Courge",
        unitPrice: 10,
        units: 15,
        unitTotalPrice: 90,
      },
    ],
    orderDate: new Date(),
    totalCost: 90,
    vat: 9,
    grandTotal: 99,
    status: "Shipped",
    completed: false,
    isSelected: false,
  },
  {
    id: 102,
    billFrom: "Pineapple.",
    billFromEmail: "first@xabz.com",
    billFromAddress: "Ganesh glory,Godrej garden city,Ahmedabad.",
    billFromPhone: 979796786,
    billFromFax: 13,
    billTo: "ME Inc.",
    billToEmail: "toFirst@agth.com",
    billToAddress: "Godrej garden city,Ahmedabad.",
    billToPhone: 757575233,
    billToFax: 76,
    orders: [
      {
        itemName: "Courge",
        unitPrice: 10,
        units: 9,
        unitTotalPrice: 90,
      },
    ],
    orderDate: new Date(),
    totalCost: 90,
    vat: 9,
    grandTotal: 99,
    status: "Delivered",
    completed: false,
    isSelected: false,
  },
  {
    id: 103,
    billFrom: "Incorporation.",
    billFromEmail: "first@xabz.com",
    billFromAddress: "Ahmedabad.",
    billFromPhone: 979796786,
    billFromFax: 13,
    billTo: "Redirwed.",
    billToEmail: "toFirst@agth.com",
    billToAddress: "Godrej garden city,Ahmedabad.",
    billToPhone: 757575233,
    billToFax: 76,
    orders: [
      {
        itemName: "Courge",
        unitPrice: 10,
        units: 9,
        unitTotalPrice: 90,
      },
    ],
    orderDate: new Date(),
    totalCost: 90,
    vat: 9,
    grandTotal: 99,
    status: "Pending",
    completed: false,
    isSelected: false,
  },
  {
    id: 104,
    billFrom: "PineappleTimes.",
    billFromEmail: "first@xabz.com",
    billFromAddress: "Ganesh glory,Godrej garden city,Ahmedabad.",
    billFromPhone: 979796786,
    billFromFax: 13,
    billTo: "RFc.",
    billToEmail: "toFirst@agth.com",
    billToAddress: "Godrej garden city,Ahmedabad.",
    billToPhone: 757575233,
    billToFax: 76,
    orders: [
      {
        itemName: "Courge",
        unitPrice: 10,
        units: 9,
        unitTotalPrice: 90,
      },
    ],
    orderDate: new Date(),
    totalCost: 90,
    vat: 9,
    grandTotal: 99,
    status: "Shipped",
    completed: false,
    isSelected: false,
  },
  {
    id: 105,
    billFrom: "FortuneCreation",
    billFromEmail: "first@xabz.com",
    billFromAddress: "Ganesh glory,Godrej garden city,Ahmedabad.",
    billFromPhone: 979796786,
    billFromFax: 13,
    billTo: "Soft solution.",
    billToEmail: "toFirst@agth.com",
    billToAddress: "Godrej garden city,Ahmedabad.",
    billToPhone: 757575233,
    billToFax: 76,
    orders: [
      {
        itemName: "Courge",
        unitPrice: 10,
        units: 9,
        unitTotalPrice: 90,
      },
    ],
    orderDate: new Date("2020-10-15"),
    totalCost: 90,
    vat: 9,
    grandTotal: 99,
    status: "Delivered",
    completed: false,
    isSelected: false,
  },
  {
    id: 106,
    billFrom: "PineappleTimes.",
    billFromEmail: "first@xabz.com",
    billFromAddress: "Ganesh glory,Godrej garden city,Ahmedabad.",
    billFromPhone: 979796786,
    billFromFax: 13,
    billTo: "RFc.",
    billToEmail: "toFirst@agth.com",
    billToAddress: "Godrej garden city,Ahmedabad.",
    billToPhone: 757575233,
    billToFax: 76,
    orders: [
      {
        itemName: "Courge",
        unitPrice: 10,
        units: 9,
        unitTotalPrice: 90,
      },
    ],
    orderDate: new Date(),
    totalCost: 90,
    vat: 9,
    grandTotal: 99,
    status: "Shipped",
    completed: false,
    isSelected: false,
  },
  {
    id: 107,
    billFrom: "FortuneCreation",
    billFromEmail: "first@xabz.com",
    billFromAddress: "Ganesh glory,Godrej garden city,Ahmedabad.",
    billFromPhone: 979796786,
    billFromFax: 13,
    billTo: "Soft solution.",
    billToEmail: "toFirst@agth.com",
    billToAddress: "Godrej garden city,Ahmedabad.",
    billToPhone: 757575233,
    billToFax: 76,
    orders: [
      {
        itemName: "Courge",
        unitPrice: 10,
        units: 9,
        unitTotalPrice: 90,
      },
    ],
    orderDate: new Date("2020-10-15"),
    totalCost: 90,
    vat: 9,
    grandTotal: 99,
    status: "Delivered",
    completed: false,
    isSelected: false,
  },
];

mock.onGet("/api/data/invoices/invoiceData").reply(() => {
  return [200, InvoiceData];
});

// Handle POST requests to add a new invoice
mock.onPost("/api/data/invoices/invoiceData").reply((config) => {
  try {
    // Parse the new invoice from the request body
    const newInvoice = JSON.parse(config.data) as InvoiceType;

    // Assign a new ID to the new invoice
    const newId =
      InvoiceData.length > 0
        ? Math.max(...InvoiceData.map((i) => i.id)) + 1
        : 1;
    newInvoice.id = newId;

    // Add the new invoice to the invoice array
    InvoiceData.push(newInvoice);

    // Return the new invoice in the response
    return [201, newInvoice];
  } catch (error) {
    return [500, { message: "Failed to add new invoice" }];
  }
});

// Handle PUT requests to update an existing invoice
mock.onPut(/\/api\/data\/invoices\/invoiceData\/\d+/).reply((config) => {
    const id = config.url?.split('/').pop(); // Get the last segment of the URL
    console.log('Extracted ID:', id);
    if (!id) {
      return [400, { message: "Invalid ID" }];
    }
  
    const updatedInvoice = JSON.parse(config.data) as InvoiceType;
    const index = InvoiceData.findIndex(invoice => invoice.id === parseInt(id, 10));
    console.log('Index of invoice to update:', index);
  
    if (index !== -1) {
      InvoiceData[index] = { ...InvoiceData[index], ...updatedInvoice };
  
      return [200, InvoiceData[index]];
    }
  
    return [404, { message: "Invoice not found" }];
  });
  
export default InvoiceData;

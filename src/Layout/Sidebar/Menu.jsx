export const MENUITEMS = [
  {
    Items: [
      {
        title: "Dashboard",
        icon: "home",
        type: "link",
        active: false,
        path:  `${process.env.PUBLIC_URL}/dashboard/default`,
      }
    ],
  },
  {
    Items: [
      {
        title: "Cateogry",
        icon: "form",
        type: "sub",
        menutitle: "Forms & Table",
        menucontent: "Ready to use froms & tables",
        active: false,
        children:
          [
            {
              "title": "Electronics",
              "type": "sub",
              "children": [
                { "title": "Mobile Phones", "type": "link", "path": `${process.env.PUBLIC_URL}/app/ecommerce/product` },
                { "title": "Laptops", "type": "link", "path": `${process.env.PUBLIC_URL}/app/ecommerce/product` },
                { "title": "Headphones", "type": "link", "path": `${process.env.PUBLIC_URL}/app/ecommerce/product` },
                { "title": "Cameras", "type": "link", "path": `${process.env.PUBLIC_URL}/app/ecommerce/product` },
                { "title": "Smartwatches", "type": "link", "path": `${process.env.PUBLIC_URL}/app/ecommerce/product` }
              ]
            },
            {
              "title": "Home Appliances",
              "type": "sub",
              "children": [
                { "title": "Refrigerators", "type": "link", "path": `${process.env.PUBLIC_URL}/app/ecommerce/product` },
                { "title": "Washing Machines", "type": "link", "path": `${process.env.PUBLIC_URL}/app/ecommerce/product` },
                { "title": "Microwaves", "type": "link", "path": `${process.env.PUBLIC_URL}/app/ecommerce/product` },
                { "title": "Air Conditioners", "type": "link", "path": `${process.env.PUBLIC_URL}/app/ecommerce/product` },
                { "title": "Dishwashers", "type": "link", "path": `${process.env.PUBLIC_URL}/app/ecommerce/product` }
              ]
            },
            {
              "title": "Clothing",
              "type": "sub",
              "children": [
                { "title": "Men's Clothing", "type": "link", "path": `${process.env.PUBLIC_URL}/app/ecommerce/product` },
                { "title": "Women's Clothing", "type": "link", "path": `${process.env.PUBLIC_URL}/app/ecommerce/product` },
                { "title": "Kids' Clothing", "type": "link", "path": `${process.env.PUBLIC_URL}/app/ecommerce/product` },
                { "title": "Sportswear", "type": "link", "path": `${process.env.PUBLIC_URL}/app/ecommerce/product` },
                { "title": "Accessories", "type": "link", "path": `${process.env.PUBLIC_URL}/app/ecommerce/product` }
              ]
            },
          ],
      },

    ],
  },

 
];

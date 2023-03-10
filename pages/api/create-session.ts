import { NextApiRequest, NextApiResponse } from "next";

import { candypay } from "../../helpers";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { items } = req.body;

    try {
      const response = await candypay.session.create({
        success_url: "https://posolpayments.vercel.app/",
        cancel_url: "https://posolpayments.vercel.app/",
        tokens: [ "samo"],
        items: items,
        discounts:{
          collection_id:
            "2w2nViZM4dGngugHJxAvtbz5X91YCRJVY6ChrZ15Zwpv", 
          discount: 0.95,
          name: "Vietnam HH Merch Token",
          image:
            "https://res.cloudinary.com/dtzqgftjk/image/upload/v1671540678/Vector_1_zxj0wf.png",
        }
      });

      return res.status(200).json(response);
    } catch (error) {
      console.log(error);

      return res.status(200).json({
        error: "Error creating session",
      });
    }
  } else {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }
};

export default handler;

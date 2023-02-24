import { NextApiRequest, NextApiResponse } from "next";

import { candypay } from "../../helpers";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { items } = req.body;

    try {
      const response = await candypay.session.create({
        success_url: "https://posolpayments.vercel.app/",
        cancel_url: "https://posolpayments.vercel.app/",
        tokens: [ "samo", "bonk"],
        items: items,
        discounts:{
          collection_id:
            "a474abba0c075a2437f5af9b1b770546", 
          discount: 0.3,
          name: "Samoyedcoin NFT",
          image:
            "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafkreifaph56hyconj2ps3zsmsamnxg7b66bzpwlcqmxfj3uttcevwsw6a.ipfs.nftstorage.link/",
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

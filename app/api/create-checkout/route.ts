import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not set");
  return new Stripe(key);
}

interface CheckoutLineItem {
  name: string;
  description: string;
  /** Unit price in pence (GBP) */
  unitAmount: number;
  quantity: number;
  imageUrl?: string;
}

export interface CheckoutPayload {
  items: CheckoutLineItem[];
}

export async function POST(req: NextRequest) {
  try {
    const body: CheckoutPayload = await req.json();

    if (!body.items || body.items.length === 0) {
      return NextResponse.json({ error: "No items provided" }, { status: 400 });
    }

    const stripe = getStripe();

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ??
      (req.headers.get("origin") || "http://localhost:3000");

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: body.items.map((item) => ({
        price_data: {
          currency: "gbp",
          product_data: {
            name: item.name,
            description: item.description,
            ...(item.imageUrl ? { images: [item.imageUrl] } : {}),
          },
          unit_amount: item.unitAmount,
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      shipping_address_collection: {
        allowed_countries: ["GB"],
      },
      success_url: `${baseUrl}/shop/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/shop/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unexpected error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

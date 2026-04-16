import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Initialise Stripe lazily so the build doesn't fail without a real key.
// Set STRIPE_SECRET_KEY in your Netlify environment variables.
function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not set");
  return new Stripe(key);
}

export interface CheckoutPayload {
  name: string;
  description: string;
  /** Unit price in pence (GBP) */
  unitAmount: number;
  quantity: number;
  /** Absolute URL of the product image */
  imageUrl?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: CheckoutPayload = await req.json();
    const { name, description, unitAmount, quantity, imageUrl } = body;

    if (!name || !unitAmount || !quantity) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const stripe = getStripe();

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ??
      (req.headers.get("origin") || "http://localhost:3000");

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: {
              name,
              description,
              ...(imageUrl ? { images: [imageUrl] } : {}),
            },
            unit_amount: unitAmount,
          },
          quantity,
        },
      ],
      mode: "payment",
      // Shipping details collected at Stripe checkout — remove if digital product
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

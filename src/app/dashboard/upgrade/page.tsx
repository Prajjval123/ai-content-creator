"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Auth } from "@/components/auth";

const Upgrade = () => {
  const router = useRouter();

  const handleOnClick = async () => {
    const response = await axios.post("/api/upgrade/checkout");
    // push user to the stripe url
    console.log(response);
    // This is the url result -> "https://checkout.stripe.com/c/pay/cs_test_a14SKHgHr4mBYiTn4KAYZ7G1zFKYHd0Std5dIpP6i83rbEPaRaCckhlyeI#fidkdWxOYHwnPyd1blpxYHZxWjA0VDZcMXFOSXVvYTN2fFQ2Qmxsd19PbzA9Uz1ETk80Qmw3PTBqclVvYzRgf0ttMGhcPTA3bkREMTBJfXFQZENmMk1KcXNnaVRGSzE8UH1CdHBzYUBcRzRpNTVJdTdAbW9MMScpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl"
    router.push(response.data.url);
  };

  return (
    <div className="mx-5 py-2">
      <div className="mt-5 py-6 px-4 bg-white rounded flex items-center">
        <h2 className="font-medium">Upgrade Credit</h2>
        <div className="ml-auto hidden lg:flex gap-4 sm:gap-6">
          <div className="flex items-center">
            <Auth />
          </div>
        </div>
      </div>
      <div className="mt-5 py-6 px-4 rounded">
        <Card className="w-[350px] flex flex-col mx-auto">
          <CardHeader>
            <CardTitle>$10 One-Time Purchase</CardTitle>
            <CardDescription>10,000 AI Credit</CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <p className="flex my-2 gap-2">
                <Check></Check> 100,000 words/purchase
              </p>
              <p className="flex my-2 gap-2">
                <Check></Check> All Template Access
              </p>
              <p className="flex my-2 gap-2">
                <Check></Check> Retain All History
              </p>
            </div>
            <Button className="mt-5" onClick={handleOnClick}>
              Purchase
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Upgrade;

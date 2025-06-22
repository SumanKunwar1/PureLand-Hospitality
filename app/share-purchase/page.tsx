import SharePurchaseForm from "@/components/share-form/SharePurchaseForm";
import { Section } from "@/components/ui/section";
import React from "react";

const SharePurchase = () => {
  return (
    <div className="pt-20 lg:pt-24">
      <Section className="bg-emerald-50">
        <SharePurchaseForm />
      </Section>
    </div>
  );
};

export default SharePurchase;

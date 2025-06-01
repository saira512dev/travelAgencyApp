import { Header } from "@/components";
import React from "react";

type Props = {};

const Trips = (props: Props) => {
  return (
    <main className="all-users wrapper">
      <Header
        title="Trips"
        description="View and edit AI-generated travel plans"
        ctaText="Create a trip"
        ctaUrl="/trips/create"
      />
    </main>
  );
};

export default Trips;

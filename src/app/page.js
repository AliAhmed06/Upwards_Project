import { Navbar } from "@/components/custom/Navbar";
import { Button } from "@/components/ui/button";
import React from "react";

function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 bg-primary">
        <h1 className="text-3xl font-bold">Welcome to UPWARDS</h1>
        <p className="mt-4 text-lg text-gray-600">
          This is a demo page showcasing the responsive navbar with submenu
          functionality.
        </p>
      </div>
    </main>
  );
}

export default HomePage;

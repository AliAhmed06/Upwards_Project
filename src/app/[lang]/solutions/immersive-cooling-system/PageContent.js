"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/custom/SectionHeading";
import ServicesSection from "@/components/custom/ServicesSection";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Brain,
  Users,
  BarChart3,
  Lightbulb,
  Globe,
  Award,
} from "lucide-react";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";
import { b_t_animation } from "@/lib/Data";
import Image from "next/image";
import AnimatedHeading from "@/components/custom/AnimatedHeading";
import LeftSection from "../LeftSection";
import RightSection from "../RightSection";
import { SolutionsCard } from "../SolutionsCard";
import CallToAction from "../CallToAction";

export default function PageContent({ dictionary }) {
  return (
    <div className="flex flex-col min-h-screen mt-[120px]">
      {/* Hero Section */}
      <div className="px-[20px]  lg:px-[90px]">
        <SectionHeading
          title={"Immersive Cooling System"}
          description={""}
          border={"150px"}
        />
      </div>

      <LeftSection
        title={"Submerging components"}
        description={
          "in non-conductive liquid: Immersion cooling involves directly submerging computer hardware components, such as CPUs, GPUs, and memory modules, in a specially engineered dielectric liquid. This liquid acts as a heat transfer medium, directly removing heat generated by the components."
        }
        image={"/images/solutions/ai-agents/img1.jfifff"}
      />

      <RightSection
        title={"Single-phase: liquid stays liquid"}
        description={
          "In single-phase immersion cooling, the dielectric fluid remains in its liquid state throughout the cooling process. Heat is transferred from the components to the liquid through convection and conduction. The liquid is then circulated through a heat exchanger to dissipate the heat into the environment. This approach is generally simpler and less complex than two-phase methods."
        }
        image={"/images/solutions/ai-agents/img2.jpgfff"}
      />

      <LeftSection
        title={"Two-phase: coolant boils to remove heat"}
        description={
          "Two-phase immersion cooling utilizes a dielectric fluid that undergoes a phase change—from liquid to vapor— during the cooling process. As the components generate heat, the liquid coolant boils, absorbing significant amounts of heat through the vaporization process. This latent heat of vaporization makes two-phase cooling particularly efficient. The vapor is then condensed and recycled back into the liquid phase."
        }
        image={"/images/solutions/ai-agents/img3.jpgfff"}
      />

      {/*  Section 2 */}
      <div className="px-[20px]  lg:px-[90px] mt-[50px]">
        <SectionHeading
          title={"Cooling Technology Principles"}
          description={""}
          border={"150px"}
        />
      </div>

      <LeftSection
        title={"Coolant Selection"}
        description={
          "We employs a tailored coolant strategy. For GPUs, we utilize Shell S5LV, chosen for its excellent dielectric properties and high thermal conductivity, ensuring efficient heat transfer from the components. Our server systems utilize FHC01, a specialized dielectric fluid optimized for consistent performance and longevity in high-heat environments. Both coolants are rigorously tested to ensure compatibility and prevent corrosion"
        }
        image={"/images/solutions/ai-agents/img1.jfiffff"}
      />

      <RightSection
        title={"High-Efficiency Heat Exchanger"}
        description={
          "Our system incorporates a high-performance plate heat exchanger. The design is crucial for efficient heat dissipation, maintaining optimal operating temperatures. We achieve this via precise coolant flow management with an inlet temperature of 32°C and a controlled 7°C rise across the exchanger. This ensures the dielectric fluid remains well within its operational parameters, maximizing cooling efficiency."
        }
        image={"/images/solutions/ai-agents/img2.jpgfff"}
      />

      <LeftSection
        title={"Precision Pump System"}
        description={
          "Consistent coolant flow is maintained through a robust pump system designed for continuous operation. We monitor flow rates and pressures in real time, adjusting as needed to optimize heat transfer and prevent hotspots. This ensures the dielectric liquid effectively circulates through the immersion tank and across the heat exchanger for efficient heat removal—essential for the reliable performance of the immersed components, whether in single-phase or two-phase configurations."
        }
        image={"/images/solutions/ai-agents/img3.jpgfff"}
      />

      <img
        src="/images/solutions/immersive-cooling/img1.png"
        className="mx-auto mt-[30px]"
        alt=""
      />

      {/* section 4 */}
      <div className="mt-[70px]">
        <SectionHeading
          title={"Technology Benefits"}
          description={""}
          border={"300px"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6  mx-[20px] md:mx-[100px] mb-[50px]">
        <SolutionsCard
          title="High Density Computing"
          description="Our immersion cooling tanks support an unprecedented level of server density. The A32 tank, for instance, can house up to 4 H100 servers, maximizing space utilization in your data center and reducing overall infrastructure costs. This high density is achieved without compromising cooling performance, thanks to the superior heat transfer capabilities of our dielectric coolant."
          variant={"second"}
        />
        <SolutionsCard
          title="Energy Efficiency"
          description="Immersion cooling drastically reduces energy consumption compared to traditional air cooling methods. By directly contacting the heat source, our system eliminates the need for massive air conditioning units and their associated power demands. This translates into significant cost savings, reduced carbon footprint, and enhanced sustainability for your operations."
          variant={"second"}
        />
        <SolutionsCard
          title="Hardware Longevity"
          description="The consistent and precise temperature control provided by immersion cooling minimizes thermal stress on server components. This protection extends the lifespan of your hardware, reducing the frequency of replacements and associated downtime. The reduced wear and tear leads to lower maintenance costs and increased return on investment."
          variant={"second"}
        />
        <SolutionsCard
          title="Future-Ready"
          description="Fognitives immersion cooling technology is designed to meet the evolving demands of modern data centers. Its scalability and adaptability make it ideal for supporting AI, HPC, and edge computing applications, ensuring your infrastructure remains at the forefront of technological advancements. The system’s flexible design allows for easy integration with various hardware configurations and future upgrades."
          variant={"second"}
        />
      </div>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
}

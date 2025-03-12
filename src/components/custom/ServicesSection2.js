import { ServicesSection2Item } from "./ServicesSection2Item";
import { AiFillRobot } from "react-icons/ai";
import { FaCarSide } from "react-icons/fa";
import { GiRobotLeg } from "react-icons/gi";
import { FaTrafficLight } from "react-icons/fa";
import { MdOutlineSmartToy } from "react-icons/md";
import AnimatedHeading from "./AnimatedHeading";
import SectionHeading from "./SectionHeading";

export default function ServicesSection2() {
  const techItems = [
    {
      title: "Immersive Cooling Data Center",
      description:
        "Revolutionizing efficiency with cutting-edge immersive cooling technology for next-gen data centers.",
      //   Icon: AiFillRobot,
      img: "/images/solution1.png",
    },
    {
      title: "Humanoid Robot",
      description:
        "Bridging the gap between humans and technology with intelligent humanoid robotics.",
      //   Icon: FaCarSide,
      img: "/images/solution2.png",
    },
    {
      title: "Immigration & Law Enforcement",
      description:
        "Ensuring justice and security with expert immigration and law enforcement solutions.",
      //   Icon: GiRobotLeg,
      img: "/images/solution3.png",
    },
    {
      title: "IOT",
      description:
        "Connecting the world seamlessly with smart and innovative IoT solutions.",
      //   Icon: FaTrafficLight,
      img: "/images/solution4.png",
    },
    {
      title: "AI",
      description:
        "Empowering the future with intelligent and transformative AI solutions.",
      //   Icon: FaTrafficLight,
      img: "/images/solution1.png",
    },
    {
      title: "Transportation",
      description:
        "Driving the future of mobility with smart and efficient transportation solutions.",
      //   Icon: FaTrafficLight,
      img: "/images/solution2.png",
    },
    {
      title: "Low-Code No-Code",
      description:
        "Accelerate innovation with powerful Low-Code No-Code solutions—build faster, smarter, and easier!",
      //   Icon: FaTrafficLight,
      img: "/images/solution3.png",
    },
    {
      title: "Education",
      description:
        "Empowering minds through innovative and accessible education solutions.",
      //   Icon: FaTrafficLight,
      img: "/images/solution4.png",
    },
    {
      title: "Payment Gateway",
      description:
        "Seamless, secure, and fast transactions with our cutting-edge payment gateway solutions.",
      //   Icon: FaTrafficLight,
      img: "/images/solution1.png",
    },
  ];

  return (
    <div className="container mx-auto px-[20px]  lg:px-[50px] py-12">
      <SectionHeading
        title={"Solutions"}
        description={
          "These are some of our main solutions that we have developed for our customers. Get in touch with us and we will share our experience and designed a suitable solution for your needs."
        }
        border={"170px"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {techItems.map((item, index) => (
          <ServicesSection2Item
            key={index}
            title={item.title}
            description={item.description}
            // Icon={item.Icon}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
}

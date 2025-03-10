import Image from "next/image";
import Link from "next/link";
import React from "react";

function SolutionsSectionContentItem({
  title,
  description,
  link,
  img,
  direction,
}) {
  return (
    <div className="max-w-7xl mx-auto">
      {direction === "simple" ? (
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="flex items-center mb-6">
              <div className="w-1.5 h-10 bg-primary mr-3"></div>
              <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
            </div>

            <div className="space-y-4 mb-8">
              <p className="text-gray-700">{description}</p>
            </div>

            <div>
              <Link
                href={link}
                className="inline-block px-6 py-2.5 bg-primary text-white font-medium rounded hover:bg-amber-700 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2">
            <div className="relative h-[200px] md:h-[300px] w-full overflow-hidden rounded-md">
              <Image
                src={img}
                alt="Medical robotics facility with patients and healthcare professionals"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Content */}
          <div className="w-full md:w-1/2">
            <div className="relative h-[200px] md:h-[300px] w-full overflow-hidden rounded-md">
              <Image
                src={img}
                alt="Medical robotics facility with patients and healthcare professionals"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="flex items-center mb-6">
              <div className="w-1.5 h-10 bg-primary mr-3"></div>
              <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
            </div>

            <div className="space-y-4 mb-8">
              <p className="text-gray-700">{description}</p>
            </div>

            <div>
              <Link
                href={link}
                className="inline-block px-6 py-2.5 bg-primary text-white font-medium rounded hover:bg-amber-700 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SolutionsSectionContentItem;

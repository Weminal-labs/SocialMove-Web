"use client";
export default function LogoCarousel() {
  const logos = [
    { name: "Razor", alt: "Razor" },
    { name: "Razor", alt: "Razor" },
    { name: "Razor", alt: "Razor" },
    { name: "Razor", alt: "Razor" },
    { name: "Razor", alt: "Razor" },
    { name: "Razor", alt: "Razor" },
    { name: "Razor", alt: "Razor" },
    { name: "Razor", alt: "Razor" },
    { name: "Razor", alt: "Razor" },
  ];

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index} className="flex justify-between items-center gap-4">
            <span className="text-3xl font-bold">{logo.name}</span>
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll "
        aria-hidden="true"
      >
        {logos.map((logo, index) => (
          <li key={index} className="flex justify-between items-center gap-4">
            <span className="text-3xl font-bold">{logo.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

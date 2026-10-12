import Image from "next/image";
import type { ReactNode } from "react";
import { images } from "@/content/images";

/** Dark textured outer container (DESIGN.md 3.3): blurred photo, grain and the 33 degree gradient. */
export function DarkShape({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <div className="py-edge">
      <section id={id} data-theme="dark" className="shape bg-brand-950">
        <div className="absolute inset-0" aria-hidden="true">
          <Image src={images.darkBg} alt="" fill sizes="100vw" className="object-cover" />
          <div className="section-gradient absolute inset-0" />
          <div className="grain absolute inset-0" />
        </div>
        {children}
      </section>
    </div>
  );
}

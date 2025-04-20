"use client";

import { Companies } from "@/components/homepage/companies";
import { Features } from "@/components/homepage/features";
import { WeCreate } from "@/components/homepage/we-create";
import { TracingBeam } from "@/components/homepage/tracing-beam";

import { Services } from "@/components/homepage/services";
import { Hero } from '@/components/homepage/hero';

export default function Home() {    
  return( 
  <TracingBeam className="relative mx-auto">
    <Hero />
    <Services />
    <WeCreate />
    <Features />
    <Companies />
  </TracingBeam>)
}

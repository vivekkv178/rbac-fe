"use client";

import Hero from "@/components/Hero";
import Architecture from "@/components/Architecture";
import Storybook from "@/components/Storybook";
import Features from "@/components/Features";
import Usecase from "@/components/Usecase";
import APIDocs from "@/components/APIDocs";

export default function Home() {
  return (
    <>
      <Hero />
      <Usecase />
      <Architecture />
      <APIDocs />
      <Features />
      <Storybook />
    </>
  );
}

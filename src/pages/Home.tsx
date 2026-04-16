import { Hero } from "@/components/home/Hero"
import { BeyondDashboard } from "@/components/home/BeyondDashboard"
import { Roadmap } from "@/components/home/Roadmap"
import { TrustedBy } from "@/components/home/TrustedBy"
import { CTABanner } from "@/components/home/CTABanner"
import { VelvetRope } from "@/components/layout/VelvetRope"

export default function Home() {
  return (
    <>
      <Hero />
      <BeyondDashboard />
      <Roadmap />
      <TrustedBy />
      <CTABanner />
      <VelvetRope />
    </>
  )
}

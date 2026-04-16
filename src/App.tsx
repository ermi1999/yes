import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect, useState, useCallback } from "react"

import { Layout } from "@/components/layout/Layout"
import { LogoLoader } from "@/components/LogoLoader"
import Home from "@/pages/Home"
import NotFound from "@/pages/NotFound"
import Initialize from "@/pages/Initialize"
import Intelligence from "@/pages/Intelligence"
import Privacy from "@/pages/Privacy"
import Terms from "@/pages/Terms"
import TheStandard from "@/pages/TheStandard"
import ForTalent from "@/pages/ForTalent"
import Eor from "@/pages/solutions/Eor"
import TalentAcquisition from "@/pages/solutions/TalentAcquisition"
import Integrity from "@/pages/solutions/Integrity"
import Payroll from "@/pages/solutions/Payroll"
import TrainingAcademy from "@/pages/solutions/TrainingAcademy"
import Enterprise from "@/pages/solutions/Enterprise"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const handleComplete = useCallback(() => setLoading(false), [])

  if (loading) {
    return <LogoLoader onComplete={handleComplete} />
  }

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="initialize" element={<Initialize />} />
          <Route path="intelligence" element={<Intelligence />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="the-standard" element={<TheStandard />} />
          <Route path="for-talent" element={<ForTalent />} />
          <Route path="talent-network" element={<ForTalent />} />
          <Route path="solutions/eor" element={<Eor />} />
          <Route path="solutions/talent-acquisition" element={<TalentAcquisition />} />
          <Route path="solutions/integrity" element={<Integrity />} />
          <Route path="solutions/payroll" element={<Payroll />} />
          <Route path="solutions/training-academy" element={<TrainingAcademy />} />
          <Route path="solutions/enterprise" element={<Enterprise />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

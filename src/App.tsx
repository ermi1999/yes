import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect, useState, useCallback, lazy, Suspense } from "react"

import { Layout } from "@/components/layout/Layout"
import { LogoLoader } from "@/components/LogoLoader"

// Route-level code splitting — each page loads only when navigated to
const Home = lazy(() => import("@/pages/Home"))
const NotFound = lazy(() => import("@/pages/NotFound"))
const Initialize = lazy(() => import("@/pages/Initialize"))
const Intelligence = lazy(() => import("@/pages/Intelligence"))
const Privacy = lazy(() => import("@/pages/Privacy"))
const Terms = lazy(() => import("@/pages/Terms"))
const TheStandard = lazy(() => import("@/pages/TheStandard"))
const ForTalent = lazy(() => import("@/pages/ForTalent"))
const Eor = lazy(() => import("@/pages/solutions/Eor"))
const TalentAcquisition = lazy(() => import("@/pages/solutions/TalentAcquisition"))
const Integrity = lazy(() => import("@/pages/solutions/Integrity"))
const Payroll = lazy(() => import("@/pages/solutions/Payroll"))
const TrainingAcademy = lazy(() => import("@/pages/solutions/TrainingAcademy"))
const Enterprise = lazy(() => import("@/pages/solutions/Enterprise"))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const [loading, setLoading] = useState(() => {
    // Only show loader on first visit per session
    if (sessionStorage.getItem("yes-loaded")) return false
    return true
  })

  const handleComplete = useCallback(() => {
    sessionStorage.setItem("yes-loaded", "1")
    setLoading(false)
  }, [])

  if (loading) {
    return <LogoLoader onComplete={handleComplete} />
  }

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={null}>
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
      </Suspense>
    </>
  )
}

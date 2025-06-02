import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import UserProfiles from "@/components/user-profiles"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Features />
      <UserProfiles />
      <FAQ />
      <Footer />
    </div>
  )
}

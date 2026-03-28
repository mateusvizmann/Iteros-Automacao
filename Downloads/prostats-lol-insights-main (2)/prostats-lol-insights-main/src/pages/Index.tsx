import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RankingsTable from "@/components/RankingsTable";
import QuickAccess from "@/components/QuickAccess";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <RankingsTable />
        <QuickAccess />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

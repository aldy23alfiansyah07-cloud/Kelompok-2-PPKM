import Navbar from './components/navbar';
import Footer from './components/footer';
import Hero from './components/hero';
import Anggota from './components/anggota';
import KakakAsuh from './components/kakakasuh';
import GaleriKegiatan from './components/galerikegiatan';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <KakakAsuh />
        <Anggota />
        <GaleriKegiatan />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import { Header } from "./components/Header";
import { ProductPageSecondary } from "./components/ProductToSix/ProductPageSecond";
import { ProductPage } from "./components/ProductToThree/ProductPage";
import { Quality } from "./components/Quality";
import { IndividPage } from "./components/IndividPage";
import { ProductPageThird } from "./components/ProductToNine/ProductPageThird";
import { Price } from "./components/Price";
import { VideoPlayer } from './components/Video/VideoPlayer';
import videoSrc from '../src/assets/video/video_coffe.mp4'
import poster from '../src/assets/absolute/man-card.png';
import { HomeOpto } from "./components/OptPrice/HomeOpto";
import { Footer } from "./components/Footer";


function App() {


  return (
    <main className="min-h-screen bg-black">
      <Header />
      <ProductPage />
      <Quality />
      <ProductPageSecondary />
      <IndividPage />
      <ProductPageThird />
      <Price />
      <VideoPlayer
        videoSrc={videoSrc}
        poster={poster}
        className="container mx-auto"
      />
      <HomeOpto />
      <Footer />
    </main>
  );
}

export default App;

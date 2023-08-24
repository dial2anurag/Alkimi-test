import {AboutUs , Banner , Profile , AccordionPannel , Navbar , Marquee} from './components';
export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Profile />
      <AboutUs />
      <Marquee />
      <Banner />
      <AccordionPannel />
    </main>
  );
}

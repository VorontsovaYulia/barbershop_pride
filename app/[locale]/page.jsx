import { Advantages } from '../components/Advantages';
import { Barbers } from '../components/Barbers';
import { Certificate } from '../components/Certificate';
import { Contacts } from '../components/Contacts';
import { Gallery } from '../components/Gallery';
import { Hero } from '../components/Hero';
import { Prices } from '../components/Prices';

export default function Home() {
  return (
    <>
      <Hero />
      <Advantages />
      <Barbers />
      <Prices />
      <Gallery />
      <Certificate />
      <Contacts />
    </>
  );
}

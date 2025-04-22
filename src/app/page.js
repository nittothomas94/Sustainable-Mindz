// Home page

import EmpowerHome from './components/empower/empower';
import Platform from './components/platform/platform';
import Map from './components/map/map';
import ContactUs from './components/contact/contact';

export default function Home() {
  return (
    <div className="flex flex-col gap-8 bg-white text-black">
      <EmpowerHome
        paragraph="Empower Your Brand with Sustainable Mindz Influencer Platform"
        butText="Discover Opportunities"
      />
      <Platform />
      <ContactUs contactImage="/images/girl-speek.png" />
      <Map />
    </div>
  );
}

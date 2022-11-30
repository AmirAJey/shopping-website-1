import {
  BannerSection,
  BrandsSection,
  CommunitySection,
  FooterSection,
  Header,
  NavbarSection,
  NewArrivalsSection,
  VouchersSection,
  YoungFavoritesSection,
} from "./containers";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <NavbarSection />
      <Header />
      <BrandsSection />
      <NewArrivalsSection />
      <BannerSection />
      <YoungFavoritesSection />
      <VouchersSection />
      <CommunitySection />
      <FooterSection />
    </div>
  );
};

export default App;

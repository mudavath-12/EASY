import heroImg from "../assets/hero.jpg";

export default function Home() {
  return (
    <div className="container">
      <img src={heroImg} alt="Hero" className="hero" />
      <h1>Welcome to Easy Ride Planner</h1>
      <p>Plan your rides effortlessly and stay organized.</p>
    </div>
  );
}

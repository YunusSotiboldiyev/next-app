import Layout from "./components/Layout";
import Booking from "./components/Booking";
import WithUs from "./components/WithUs";
import Ideas from "./components/Ideas";
import Last from "./components/last";

export default function Home() {
  return (
    <Layout>
      <Booking />
      <WithUs />
      <Ideas />
      <Last />
    </Layout>
  );
}

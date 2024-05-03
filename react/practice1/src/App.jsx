import LatestProducts from "./LatestProducts";
import TrendingProducts from './TrendingProducts';
import Todos from "./Todos"

export default function App() {
  return (
    <>
      <h1>React Fundamentals</h1>
      <TrendingProducts/>
      <LatestProducts />
      <Todos/>
    </>
  );
}
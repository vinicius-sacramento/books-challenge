import BestSellers from "../../components/BestSellers";
import Categories from "../../components/Categories";

export default function Home({ bestsellers, saveCategory, saveTitle }) {
  return (
    <>
      <BestSellers bestsellers={bestsellers} />
      <Categories saveCategory={saveCategory} saveTitle={saveTitle} />
    </>
  );
}

import { Category, CategoriesGrid, Container, Title } from "./styles";
import { useHistory } from "react-router-dom";

const Categories = ({ saveCategory, saveTitle }) => {
  const history = useHistory();
  function handleCategory(category) {
    return () => {
      saveCategory(category);
      saveTitle(`${category} Books`);
      history.push("/list");
    };
  }
  return (
    <>
      <Container>
        <Title>Department</Title>
        <CategoriesGrid>
          <Category onClick={handleCategory("Design")}>
            Art {"&"} Design
          </Category>
          <Category onClick={handleCategory("Business")}>Business</Category>
          <Category onClick={handleCategory("Fantasy")}>Fantasy</Category>
          <Category onClick={handleCategory("History")}>History</Category>
          <Category onClick={handleCategory("Romance")}>Romance</Category>
          <Category onClick={handleCategory("Religion")}>Religion</Category>
          <Category onClick={handleCategory("Science Fiction")}>
            Science Fiction
          </Category>
          <Category onClick={handleCategory("Self Help")}>Self-Help</Category>
        </CategoriesGrid>
      </Container>
    </>
  );
};

export default Categories;

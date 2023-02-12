import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList";
import useFirebase from "../../hooks/useFirebase";

// import saveFromJSONToFirebase from "../../services/saveFromJSONToFirebase";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, loading, error] = useFirebase(categoryId);

  return (
    <div>
      <div>
        {error && <h1>ohoh hubo un error: {error}</h1>}
        {loading ? (
          <div className="d-flex justify-content-center m-4">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <ItemList productos={products} />
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;

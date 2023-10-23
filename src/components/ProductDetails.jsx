import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import ProductDetailsCard from "./ProductDetailsCard";
import "./ProductDetails.css";

const ProductDetails = () => {
  return (
    <section className="productdetails_section py-5">
      <div className="container">
        <div className="row">
          <Breadcrumb className="mb-5">
            <Breadcrumb.Item>
              <Link className="text-success fw-bold fs-6" to={"/Home"}>
                Home
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="fw-bold fs-6">
              Product Details
            </Breadcrumb.Item>
          </Breadcrumb>
          <ProductDetailsCard></ProductDetailsCard>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

import { Link, useLocation } from "react-router-dom";
import "./product.css";
import Chart from "../../components/charts/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
import { useSelector } from "react-redux";

export default function Product() {
  const location = useLocation();
  console.log(location);
  const productId = location.pathname.split("/")[1];
  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="pruductAddButton">Add Product</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product.img} alt="" className="productInfoImg" />
            <span className="productInfoTitle">Apple Pods</span>
          </div>
          <div className="productInfoBottom">
            <div className="poductInfoItem">
              <span className="productInfoKey">Id:</span>
              <span className="productInfoValue">{product._id}</span>
            </div>
            <div className="poductInfoItem">
              <span className="productInfoKey">Sales:</span>
              <span className="productInfoValue">123412</span>
            </div>

            <div className="poductInfoItem">
              <span className="productInfoKey">Stock:</span>
              <span className="productInfoValue">{product.inStock}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple Airpod" />
            <label>Stock</label>
            <select name="stock" id="stockId">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="productUploadImg"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productUpdate">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

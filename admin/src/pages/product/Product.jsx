import { Link, useLocation } from "react-router-dom";
import "./product.css";
import Chart from "../../components/charts/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useState, useMemo, useEffect } from "react";

export default function Product() {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [productStats, setProductStats] = useState([]);
  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );

  const MONTH = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getProductStats = async () => {
      try {
        const res = await userRequest.get("/order/income/?pid=" + productId);
        res.data.map((item) =>
          setProductStats((prev) => [
            ...prev,
            { name: MONTH[item._id - 1], Sales: item.total },
          ])
        );
      } catch (error) {}
    };
    getProductStats();
  }, [MONTH]);

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
            <img src={product?.img} alt="" className="productInfoImg" />
            <span className="productInfoTitle">{product.title}</span>
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
            <input type="text" placeholder={product.title} />
            <label>Product Description</label>
            <input type="text" placeholder={product.desc} />
            <label>Product Price</label>
            <input type="text" placeholder={product.price} />
            <label>Stock</label>
            <select name="stock" id="stockId">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            {/* <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select> */}
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={product.img} alt="" className="productUploadImg" />
              <label htmlFor="file">
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

import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { GlobalState } from "../../../GlobalState";
import { useParams } from "react-router-dom";
const initialState = {
  product_id: "id",
  title: "title",
  content: "content",
  description: "des",
  priceDetails: "price",
  category: "catey",
};
function CreateProduct() {
  const state = useContext(GlobalState);
  const [product, setProduct] = useState(initialState);
  const [category] = state.categoryApi.categories;
  const [isAdmin] = state.userApi.isAdmin;
  const [token] = state.token;

  const [productImage, setProductImages] = useState(false);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const [onEdit, setOnEdit] = useState(false);
  const [products] = state.productsApi.products;

  const styleUplaod = {
    display: productImage ? "block" : "none",
  };
  console.log();

  function hanldeInputChange(e) {
    const { name, value } = e.target;
    setProduct({ ...initialState, [name]: value });
    console.log(product);
  }

  async function handleImageUpload(e) {
    e.preventDefault();

    try {
      if (!isAdmin) return alert("Not an Admin");

      const file = e.target.files[0];
      if (!file) return alert("No file exists");
      if (file.type !== "image/jpeg" && file.type !== "image/png")
        return alert("Invalid Image");

      if (file.size > 1024 * 1024 * 2) return alert("File Size is Heavy");

      const formData = new FormData();
      formData.append("file", file);
      setLoading(true);

      const res = await axios.post("/api/uploadImage", formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: token,
        },
      });

      setLoading(false);
      setProductImages(res.data);
    } catch (error) {
      alert(error);
    }
  }

  async function handleUploadCancel() {
    try {
      setLoading(true);

      await axios.post(
        "/api/deleteImage",
        { public_id: productImage.public_id },
        {
          headers: { Authorization: token },
        }
      );

      setLoading(false);
      setProductImages(false);
    } catch (error) {
      alert(error);
    }
  }
  // useEffect(() => {
  //   if (params.id) {
      
  //     setOnEdit(true);
  //     products.forEach((productItem) => {
  //       if (productItem._id === params.id) {
  //         setProduct(productItem);
  //         setProductImages(productItem.productImage);
  //       }
  //     });
  //   } else {
  //     setOnEdit(false);

  //     setProduct(initialState);

  //     setProductImages(false);
  //   }
  // }, [params.id, products]);

  async function handleFormSubmit(e) {
    e.preventDefault();

    if (onEdit) {
      try {
        await axios.patch(`/api/product/${params.id}`, {
          ...product,
          productImage,
        });
      } catch (error) {
        alert(error);
      }
    } else {
      await axios.post("/api/product", { ...product, productImage }, {});
      setProductImages(false);
      // setProduct(initialState);
    }
  }

  return (
    <div className="create_product">
      <div className="upload">
        <input
          type="file"
          name="file"
          id="file_up"
          onChange={handleImageUpload}
        />
        {loading ? (
          <h4>Please Wait</h4>
        ) : (
          <div className="file_img" style={styleUplaod}>
            <img src={productImage.url} alt="" />
            <span onClick={handleUploadCancel}>X</span>
          </div>
        )}
      </div>

      <form onSubmit={handleFormSubmit}>
        <div className="row">
          <label htmlFor="product_id">Product Id</label>
          <input
            type="text"
            name="product_id"
            id="product_id"
            required
            value={product.product_id}
            onChange={hanldeInputChange}
            disabled={onEdit}
          />
        </div>
        <div className="row">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            required
            value={product.title}
            onChange={hanldeInputChange}
          />
        </div>
        <div className="row">
          <label htmlFor="content">Content</label>
          <input
            type="text"
            name="content"
            id="content"
            required
            value={product.content}
            onChange={hanldeInputChange}
          />
        </div>

        <div className="row">
          <label htmlFor="priceDetails">Price Details</label>
          <textarea
            type="text"
            name="priceDetails"
            id="priceDetails"
            required
            value={product.priceDetails}
          
            onChange={hanldeInputChange}
            rows={4}
          />
        </div>

        <div className="row">
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            name="description"
            id="description"
            required
            value={product.description}
        
            onChange={hanldeInputChange}
            rows={4}
          />
        </div>

        <div className="row">
          <label htmlFor="category">Category</label>
          <select
            type="text"
            name="category"
            required
            value={product.category}
            onChange={hanldeInputChange}
          >
            <option value="">Select Category</option>
            {category.map((item) => {
              return <option value={item._id}>{item.name}</option>;

            
            })}
          </select>
        </div>
        <button type="submit">{onEdit ? "Update" : "Create"}</button>
      </form>
    </div>
  );
}

export default CreateProduct;

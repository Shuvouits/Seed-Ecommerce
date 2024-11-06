import React, { useState, useEffect } from 'react';
import { Route, Routes, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loader from './component/loader';
import Template2 from "./templates/template-2/index";
import Template1 from "./templates/template-1/index";
import Home from './templates/Home';

// Template component with dynamic ID
function TemplateWithData() {
  const {  productId } = useParams();
  const [productData, setProductData] = useState(null);
  const [Setting, setSetting] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/product/${productId}`);
        const setting = await axios.get(`http://127.0.0.1:8000/api/products/setting`);
        setProductData(response.data);
        setSetting(setting.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch product data');
        setLoading(false);
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, [productId]); // Re-fetch when productId changes

  if (loading) {
    return <Loader/>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render different templates based on templateId
switch (productData[0].template_id) {
    case 1:
      return <Template1 productData={productData[0]} Setting={Setting} />;
    case 2:
      return <Template2 productData={productData[0]} Setting={Setting} />;
    // Add more templates as needed
    default:
      return <div>Template not found</div>;
  }
  
}

// Router configuration
function AppRouter() {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path="/:productId" element={<TemplateWithData />} />
    </Routes>
  );
}



export default AppRouter;
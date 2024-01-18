import { Card, message, Button, Spin, Input, } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./home.css";

function Homepage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const { Meta } = Card;

    const getData = async () => {
        setLoading(true)
        try {
            const response = await axios.get("http://localhost:4000/data");
            setData(response.data.products);
            setLoading(false)
        } catch (error) {
            message.error(error.message);
            setLoading(false)
        }
        finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const handleEdit = (productId) => {
        console.log(`Edit product with ID: ${productId}`);
    };

    const handleDelete = (productId) => {
        console.log(`Delete product with ID: ${productId}`);
    };

    return (
        <div className="container">
            <Spin spinning={loading}>
                <h1 className="heading">This is All Products</h1>
                <Input.Search enterButton />
                <div className="main">
                    {data.map((item) => (
                        <Card key={item.id} className="product-card"
                            cover={<img src={item.thumbnail} alt="hello" className="image_class" />}
                        >
                            <Meta title={item.name} description={item.description} />
                            <div className="button_container">
                                <Button type="primary" onClick={() => handleEdit(item.id)}>
                                    Edit
                                </Button>
                                <Button type="danger" onClick={() => handleDelete(item.id)}>
                                    Delete
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </Spin>
        </div >
    );
}

export default Homepage;

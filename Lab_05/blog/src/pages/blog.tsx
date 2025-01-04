import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import {Article} from '../types/Article';
import { Card, Button } from "antd";
import { PlusOutlined, HomeOutlined } from "@ant-design/icons";


const Blog = () => {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        setArticles(JSON.parse(localStorage.getItem('articles') || '[]'));
    }, []);

    return (
        <div style={{ padding: '20px', width: '100%' }}>
            <h1 style={{ textAlign: 'center' }}>Blog</h1>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {articles.map((article: Article) => (
                    <Card key={article.id} style={{ margin: '10px', width: '80%', maxHeight: '400px', overflowY: 'auto', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                        <Link to={`/article/${article.id}`}>{article.title}</Link>
                    </Card>
                ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '20px', alignItems: 'center' }}>
                <Button size="large" icon={<PlusOutlined />} style={{ width: '250px', marginBottom: '5px', backgroundColor: 'lightblue' }}>
                    <Link to="/add">Add article</Link>
                </Button>
                <Button size="large" icon={<HomeOutlined />} style={{width: '250px'}}>
                    <Link to="/">Back to homepage</Link>
                </Button>
            </div>
        </div>
    );
};

export default Blog;

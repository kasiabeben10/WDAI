import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Article } from "../types/Article";
import { Typography, Card, Button } from 'antd';
const { Title, Paragraph } = Typography;
import { RollbackOutlined } from '@ant-design/icons';


const ArticlePage = () => {
    const { id } = useParams();
    const [article, setArticle] = useState<Article | null>(null);

    useEffect(() => {
        const articles = JSON.parse(localStorage.getItem('articles') || '[]');
        const article = articles.find((article: Article) => article.id === id);
        setArticle(article);
    }, [id]);

    if (!article) {
        return <div>Article not found</div>;
    }  
    return (
        <div>
            <Card style={{ maxWidth: 800, margin: '50px auto', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                <Title level={2} style={{ textAlign: 'center' }}>{article.title}</Title>
                <Card style={{ marginTop: 20 }}>
                    <Paragraph>{article.content}</Paragraph>
                </Card>
            </Card>
            <Button size="large" icon={<RollbackOutlined />} style={{width: '250px'}}>
                <Link to="/blog">Back to blog</Link>
            </Button>
            
        </div>
    );
};

export default ArticlePage;
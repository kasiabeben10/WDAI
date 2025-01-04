import { Link } from "react-router-dom";
import ArticleForm from "../components/ArticleForm";
import { Button } from "antd";
import { RollbackOutlined } from "@ant-design/icons";

const AddArticle = () => {
    return (
        <div style={{width: '100%'}}>
            <h1>Add article</h1>
            <ArticleForm />
            <Button size="large" icon={<RollbackOutlined />} style={{width: '250px'}}>
                <Link to="/blog">Back to blog</Link>
            </Button>
        </div>
    )
};

export default AddArticle;
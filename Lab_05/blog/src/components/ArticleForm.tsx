import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import { ArticleProps } from '../types/Article';
import {Form, Input, Button, Card} from 'antd';


const ArticleForm = () => {
    const navigate = useNavigate();
    const [ArticleData, setArticleData] = useState<ArticleProps>({title: '', content: ''});

    const handleSubmit = (values: ArticleProps) => {
        const articles = JSON.parse(localStorage.getItem('articles') || '[]');
        localStorage.setItem('articles', JSON.stringify([...articles, {...values, id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}` }]));
        
        setArticleData({title: '', content: ''});
        navigate('/blog');
    };

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setArticleData({...ArticleData, title: e.currentTarget.value});
    };

    const changeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setArticleData({...ArticleData, content: e.currentTarget.value});
    };

    return (
        <Card style={{justifySelf: 'center',margin: '10px', width: '80%', overflowY: 'auto'}}>
            <Form onFinish={handleSubmit} layout="vertical" >
                <Form.Item 
                    style={{alignSelf: 'center'}} 
                    label="Title" 
                    labelCol={{ style: { textAlign: 'center' }, span: 24 }}
                    name="title"
                    rules={[{ required: true, message: 'Please input article title!' }]}
                >
                    <Input type="text" value={ArticleData.title} placeholder="enter title of article" onChange={changeTitle} style={{textAlign: 'center'}}/>
                </Form.Item>
                <Form.Item 
                    style={{alignSelf: 'center'}} 
                    label="Content" 
                    labelCol={{ style: { textAlign: 'center' }, span: 24 }}
                    name="content"
                    rules={[{ required: true, message: 'Please input article content!' }]}
                >
                    <Input.TextArea rows={8} value={ArticleData.content} placeholder="put here article content" onChange={changeContent} style={{textAlign: 'center'}}/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </Card>
    );


};
export default ArticleForm;
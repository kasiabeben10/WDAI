import { Link } from 'react-router';
import { Card, Typography, Button } from 'antd';
const {Title, Paragraph} = Typography;


const Home = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
            <Card style={{boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', width:'100%'}}>
                <Title>Welcome!</Title>
                <Paragraph>
                    <Link to="/blog">
                        <Button 
                            size="large" 
                            style={{
                                width: '100%',
                                height: '50px',
                                backgroundColor: 'lightblue',
                                border: 'none',
                                fontWeight: 'bold',
                                fontSize: '18px',
                                letterSpacing: '0.5px'
                            }}
                        >
                            Discover Our Various Articles!
                        </Button>
                    </Link>
                </Paragraph>
            </Card>
        </div>
    );
};

export default Home;
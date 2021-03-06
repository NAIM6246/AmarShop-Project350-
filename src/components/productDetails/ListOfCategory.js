import React, { Component,Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class ListOfCategory extends Component {

    constructor(props) {
        super(props);
        
    }

    render() {

        const myList=this.props.Data;
        const category=this.props.category;

        const view=myList.map((myList,i)=>{
            return    <Col key={i.toString()}className="p-1"key={1} xl={2} lg={2} md={3} sm={4} xs={6}>
            <Link to={"/productDetails/"+myList.id}>
                <Card className="image-box card">
                <img src="images/product1.jpg"></img>
                    <Card.Body>
                        <p className="product-name-on-card text-center">{myList.id}</p>
                        <p className="product-price-on-card text-center">Price:{myList.price}TK</p>
                    </Card.Body>
                </Card>
                </Link>
            </Col>
        })
        return (
            <Fragment>
            <Container fluid={true} className="mt-5">
                <br></br>
                <br></br>
                <h5 className="section-title text-center">{category}</h5>
                <p className="section-sub-title text-center">Some Of Our Exclusive Collection, You May Like</p>
                <Row>
                    
                {view}
                </Row>
            </Container>
        </Fragment>
        );
    }
}

export default ListOfCategory;
import React, { useContext } from 'react'
import { Div, Modal, Text, Row, Col, Anchor, Button, Container, Icon } from "atomize";
import { ShopContext } from '../context/shopContext'

const Cart = () => {

    const { isCartOpen, closeCart, checkout, removeItemFromCheckout, product } = useContext(ShopContext)

    if (checkout.lineItems) {
        return (
            <Modal isOpen={isCartOpen} onClose={closeCart}>
                <Container d="flex" flexDir="column" h='20'>
                    <Row justify="space-between" border={{ b: '1px solid' }} p="0.7rem" borderColor="gray300">
                        <Text tag="h1" textColor="#002fa7" textSize="paragraph" hoverTextColor="#002fa7" transition="0.3s">Bag</Text>
                        <Anchor onClick={() => closeCart()} ><Icon name="Cross" color="#002fa7" /></Anchor>
                    </Row>
                    <Row flexGrow="2" p="0.7rem" overflow="auto" flexWrap="nowrap" flexDir="column">
                        {checkout.lineItems.length < 1 ?
                            <Row>
                                <Col><Text tag="h1" textColor="#002fa7" textSize="paragraph" hoverTextColor="#002fa7" transition="0.3s">Cart Is Empty</Text></Col>
                            </Row>
                            :
                            <>
                                {checkout.lineItems && checkout.lineItems.map(item => (
                                    <Row key={item.id} p={{ t: "5px" }}>
                                        <Col>
                                            <Div bgImg={item.variant.image.src} bgSize="cover" bgPos="center" h="2rem" w="4rem" />
                                        </Col>
                                        <Col>
                                            <Text>{item.title}</Text>
                                            <Text>{item.variant.title}</Text>
                                            <Text>{item.quantity}</Text>
                                        </Col>
                                        <Col>
                                            <Text>{item.variant.price}</Text>
                                        </Col>
                                        <Button rounded="0" shadow="3" bg="#002fa7" m={{ y: '2rem' }} onClick={() => removeItemFromCheckout(item.id)}>X</Button>
                                    </Row>
                                     
                                ))}
                            </>
                        }
                    </Row>
                    <Row border={{ t: '1px solid' }} p="0.7rem" borderColor="gray300">
                        <Anchor w="100%" href={checkout.webUrl} target="_blank" rel="noopener noreferrer">
                            <Button w="100%" rounded="0" bg="#002fa7" shadow="2" hoverShadow="3" m={{ t: '1rem' }}>
                                Checkout
                            </Button>
                        </Anchor>
                    </Row>
                </Container>
            </Modal>
        )
    }

    return null

}

export default Cart
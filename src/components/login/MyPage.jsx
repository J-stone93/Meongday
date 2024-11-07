import { useState } from "react";
import styled from "styled-components";


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const LogoImg = styled.img`
  width: 150px;
  display: block;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const Section = styled.section`
  width: 550px;
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
`;

const Input = styled.input`
  width: 100%;
  height: 45px;
  margin-top: 5px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 0 10px;
`;

const Button = styled.button`
  width: 100%;
  height: 45px;
  font-size: 18px;
  font-weight: bold;
  background-color: #ccc;
  border-radius: 8px;
  border: 1px solid #ccc;
  cursor: pointer;

  &:hover {
    background-color: #bbb;
  }
`;

const OrderHistory = styled.ul`
  list-style: none;
  padding: 0;
`;

const OrderItem = styled.li`
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

function MyPage() {
    const [userInfo, setUserInfo] = useState({
        username: "홍길동",
        email: "example@email.com",
        password: ""
    });

    const [orderHistory, setOrderHistory] = useState([
        { id: 1, product: "멍쿠키", date: "2024-10-10", price: "3,500원" },
        { id: 2, product: "멍치즈", date: "2024-10-12", price: "5,500원" }
    ]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("회원 정보 수정:", userInfo);
    };
    return (
        <Container>
            <LogoImg src="/images/meongday.png" alt="meongday" />
            <Title>마이페이지</Title>

            <Section>
                <SectionTitle>회원 정보 수정</SectionTitle>
                <form onSubmit={handleFormSubmit}>
                    <Label>사용자 이름</Label>
                    <Input
                        type="text"
                        name="username"
                        value={userInfo.username}
                        onChange={handleInputChange}
                    />
                    <Label>이메일</Label>
                    <Input
                        type="email"
                        name="email"
                        value={userInfo.email}
                        onChange={handleInputChange}
                    />
                    <Label>비밀번호 변경</Label>
                    <Input
                        type="password"
                        name="password"
                        value={userInfo.password}
                        onChange={handleInputChange}
                    />
                    <Button type="submit">정보 수정</Button>
                </form>
            </Section>

            <Section>
                <SectionTitle>주문 내역 조회</SectionTitle>
                <OrderHistory>
                    {orderHistory.map((order) => (
                        <OrderItem key={order.id}>
                            <p>상품명: {order.product}</p>
                            <p>주문일: {order.date}</p>
                            <p>가격: {order.price}</p>
                        </OrderItem>
                    ))}
                </OrderHistory>
            </Section>
        </Container>
    );
};

export default MyPage;
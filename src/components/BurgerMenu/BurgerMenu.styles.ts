import styled from 'styled-components';

export const BMList = styled.ul`
    list-style-type:none;
    padding:10px 20px 10px 20px;
    margin:0;
    a{
        text-align:left;
        color: white;
        text-decoration: none;

    }
    li{
        margin-top:0.5rem;
    }
    .line{
        height:0.25rem;
        background-color:black;
        margin-top:0.3rem;
        width:2rem;
    }
    
`;

export const BurgerMenuContainer = styled.button`
    cursor: pointer;
    width: 5rem;
    display:flex;
    align-items:center;
    justify-content:center;
    height:60px;
    background: rgba(255, 255, 255, 1);
    border:none;
`
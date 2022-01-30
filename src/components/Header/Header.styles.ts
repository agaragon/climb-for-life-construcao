import styled from 'styled-components';

export const Container = styled.div`
    position:fixed;
    top:0;
    list-style-type:none;
    padding:10px 20px 10px 20px;
    margin:0;
    background-color:black;
    width:100vw;
    background-color:rgb(0,0,0,0);
    a{
        text-align:left;
        color: white;
        text-decoration: none;
        
    }
    li{
        list-style-type:none;
        margin-top:0.5rem;
        font-size:1.25rem;
    }
    .line{
        height:0.25rem;
        background-color:black;
        margin-top:0.3rem;
        width:2rem;
    }
    ul{
        display:flex;
        align-items:center;
        justify-content:space-between;
    }
    .left{
        width:30vw;
    }
    @media screen and (max-width: 599px) {
        display:none;
    }
    
`

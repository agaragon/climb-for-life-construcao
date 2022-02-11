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
    .center-div{
        width:30vw;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:left;
    }
    .left-div{
        width:20vw;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-around;
    }
    .contact{
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
    }
    a{
        text-align:left;
        text-decoration: none;
        color: white;
        
    }
    li{
        color: white;
        list-style-type:none;
        margin-top:0.5rem;
        letter-spacing: .02em;
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
        padding:0 40px 0 40px;
    }
    .main{
        width:100vw;
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-size: 1.1em;
    }
    .instagram-logo{
        height:4rem;
    }
    @media screen and (max-width: 599px) {
        display:none;
    }
    
`

import styled from 'styled-components'

export const LayoutSidBar = styled.div`
    background: #181818;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #B5B5B5;
    height: 100vh;
    border-right: 5px #333333 solid;
    @media(max-width: 905px){
        display: none;
    }
`;
export const Avatar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    div{
        border-radius: 50%;
        width: 170px;
        margin: 10px;
        height: 170px;
        background: url("https://web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.24694-24%2F118725697_640332243278368_7804395663473249528_n.jpg%3Foh%3Df586e79a615eca3694db3be0896e8ad3%26oe%3D5F661CD4&t=l&u=559988095963%40c.us&i=1598639151&n=DFMIRjWwbxg6C6DYjepGSlgEuNNaP1qUGCIxGbYDGkE%3D");
        overflow: hidden;
        position: relative;
        @media(max-width: 905px){
            width: 100px;
            height: 100px;
            background-position: 30px;
        }
    }
    @media(max-width: 905px){
        display: flex;
    }
    span{
        font-family: Exo, sans-serif;
        font-size: 17px;
        transition: all 0.3s;
        text-align: center;
        margin-top: 7px;
        cursor: pointer;
        :hover{
            color: #6092ff;
        }
    }
`;
export const Links = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    justify-content: space-between;
    span{
        font-family: Exo, sans-serif;
        cursor: pointer;
        margin-top: 10px;
        font-size: 19px;
        font-weight: 600;
        transition: all 0.4s;
        border-bottom: 2px solid transparent;
        :hover{
            color: #6092ff;
            border-bottom: 2px solid #6092ff;
        }
    }
`;
export const Contact = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    svg{
        margin: 5px;
    }
`;

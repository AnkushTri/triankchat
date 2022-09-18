import { Box, styled } from "@mui/material";


// import Message from "./Message";
import Footer from "./Footer";
import { backGroundChatImage } from "../../../constants/data";


const Wrapper = styled(Box)`
  background-image: url(${backGroundChatImage});
  background-size: 50%;
`;

const Component = styled(Box)`
    height: 76vh;
    overflow-y: scroll;
`;

const Messages = () => {
    return (
        <Wrapper>
            < Component>

            </ Component>
            <Footer />
        </Wrapper>

    )
}

export default Messages;
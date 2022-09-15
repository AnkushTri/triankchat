import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';


import { AppBar, Toolbar,styled ,Box} from '@mui/material';

//components
import LoginDialog from './acount/LoginDialog';
import ChatDialog from './chat/ChatDialog';

const Component=styled(Box)`
   height:100vh;
   background-color:#DCDCDC;

`

const  LoginHeader=styled(AppBar)`
   height:220px;
   background-color: #00A884;
   box-shadow:none;

`
const Header = styled(AppBar)`
   height:125px;
   background-color: #00bfa5;
   box-shadow:none;

`

const Messenger=()=>{

const {account}=useContext(AccountContext);

 return(
    <Component>
      {
         account?
         <>
         <Header>
          <Toolbar>

          </Toolbar>
         </Header>
         <ChatDialog />
         </>
         :
         <>
                <LoginHeader>
                   <Toolbar />
                </LoginHeader>
                <LoginDialog />
            
         </>
      }
    </Component>
    
 )
}
export default Messenger;



// import { useContext } from 'react';

// // import { AccountContext } from '../context/AccountProvider';

// //components
// // import ChatDialog from './chat/ChatDialog';
// import LoginDialog from './acount/LoginDialog';

// const Component = styled(Box)`
//     height: 100vh;
//     background: #DCDCDC;
// `;

// const Header = styled(AppBar)`
//     background-color: #00A884;
//     height: 200px;
//     box-shadow: none;
// `;

// // const LoginHeader = styled(AppBar)`
// //     background: #00bfa5;
// //     height: 200px;
// //     box-shadow: none;
// // `;

// const Messenger = () => {
//     // const { account } = useContext(AccountContext);

//     return (
//         <Component>
            
//                     <>
//                         <Header>
//                             <Toolbar></Toolbar>
//                         </Header>
//                         {/* <ChatDialog /> */}
//                     </>
//                     {/* { <>
//                         <LoginHeader>
//                             <Toolbar></Toolbar>
//                         </LoginHeader>
//                         <LoginDialog />
//                     </> }  */}
//         </Component>
//     )
// }

// export default Messenger;
import React from 'react';
import { Link } from 'react-router'; 

class Main extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        return (
            <div>
                <h1>
                    <Link to="/">Elbaumstagram</Link>
                </h1>
            </div>
        );       
    }
}

// const Main = React.createClass({
//     render() {
//         return (
//             <div>
//                 <h1>
//                     <Link to="/">Elbaumstagram</Link>
//                 </h1>
//             </div>
//         ); 
//     }
// }); 

export default Main; 
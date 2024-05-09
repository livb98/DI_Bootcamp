// import React from "react";
// import quotes from "./Quotes";

// class QuotesGenerator extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             db : quotes
//         }
//     }
//     Generator() {
//         const {db} = this.state
//         const randomIndex = Math.floor(Math.random() * db.length)
//         const randomQuote = db.map((item) => {
//             return <div>
//                     {item.quote}
//             </div>
//         })

//         return (
//             <>
//                 <div>{Object.keys(db)[randomIndex]}</div>
//                 <div>{db.map}</div>
//                 {/* <div>{typeof db[randomIndex]}</div> */}
//             </>
//         )
        

//     }

//     render() {
//         return (
//             <>
//                 <div>{this.Generator()}</div>

//             </>

//         )
//     }
// }

// export default QuotesGenerator

import React from "react";
import quotes from "./Quotes";

class QuotesGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            db: quotes,
            currentQuote: null
        };
        this.generateRandomQuote = this.generateRandomQuote.bind(this);
    }

    generateRandomQuote() {
        const { db } = this.state;
        const randomIndex = Math.floor(Math.random() * db.length);
        const randomQuote = db[randomIndex];
        this.setState({ currentQuote: randomQuote });
    }
    

    render() {
        const { currentQuote } = this.state;
        const randomColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
        return (
            <>
            <div style={{border: 'solid black 1px',
            width: '100vw', 
            height: "100vh",
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: `${randomColor}`,
            // backgroundColor:`rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,
     
            }}>
                <div style={{border: 'solid black 1px',
            backgroundColor: 'white',
            width: '50vw',
            height: '50vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center'
            }}> 
                {currentQuote && (
                <div>
                        <header>{currentQuote.quote}</header>
                        <p style={{fontSize: 'small', display: 'flex', justifyContent: 'flex-end', alignItems:'flex-end'}}> - <i>{currentQuote.author}</i> - </p>
                    </div>
                )}
                <button onClick={this.generateRandomQuote}
                style={{backgroundColor: `${randomColor}`,
                    marginLeft: '200px'
            }}
                >new quote</button>
                </div>

            </div>

            </>
        );
    }
}

export default QuotesGenerator;

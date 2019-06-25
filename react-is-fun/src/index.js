import React, { Component } from 'react'
import {render} from 'react-dom'



//This are constants accessible for all the app
var style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'Arial'
}
let skiData = {
    total:50,
    powder: 20,
    backcountry:10,
    goal: 100
}

//A simple component class rendering JSX context
class Message extends Component {    
    render() {
        console.log(this.props)
        return (
            <div>
                <h1 style={ {color: this.props.color}}>
                    {this.props.msg}
                </h1>
                <p>
                    I'll check back in {this.props.minutes} minutes
                </p>
            </div>
        )
    }
}



///////////////////////////////////////////////////////////////////////////
//This are functions accessible for all the class
// const getPercent = decimal => {
//     return decimal * 100 + '%'
// }

// const calcGoalProgress = (total, goal) => {
//         return getPercent(total/goal)
// }

//This a function that Returns a COMPONENT
// const SkiDayCounter = ({total, powder, backcountry, goal}) => {
//     return(
//         <section>
//                 <div> 
//                     <p>Total Days: {total}</p>
//                 </div>
//                 <div> 
//                     <p>Powder Days: {powder}</p>
//                 </div>
//                 <div> 
//                     <p>Backcountry Days: {backcountry}</p>
//                 </div>
//                 <div> 
//                     <p>Goal progress: {calcGoalProgress(total, goal)}</p>
//                 </div>
//             </section>
//     )
// }

///////////////////////////////////////////////////////////////////////////
//This is a component class that has functions inside

// class SkiDayCounter extends React.Component {
//     getPercent = decimal => {
//         return decimal * 100 + '%'
//     }

//     calcGoalProgress = (total, goal) => {
//         return this.getPercent(total/goal)
//     }
//     render() {
//         const {total, powder, backcountry, goal} = this.props
//         return (            
//             <section>
//                 <div> 
//                     <p>Total Days: {total}</p>
//                 </div>
//                 <div> 
//                     <p>Powder Days: {powder}</p>
//                 </div>
//                 <div> 
//                     <p>Backcountry Days: {backcountry}</p>
//                 </div>
//                 <div> 
//                     <p>Goal progress: {this.calcGoalProgress(total, goal)}</p>
//                 </div>
//             </section>
//         )
//     }
// }

////////////////////////////////////////////////////////////
//This is how you would render the SkiDayCounter class
// (weather as a component or as a function that returns a component)
// ReactDOM.render(
//     <SkiDayCounter 
//         total = {skiData.total}
//         powder = {skiData.powder}
//         backcountry = {skiData.backcountry}
//         goal = {skiData.goal}
//         />, 
//     document.getElementById('root')
// )

let bookList = [
    {"title": "book of title", "author":"author of the book", "pages":400},
    {"title": "Any book", "author":"another author", "pages":20},
    {"title": "Whatever book", "author":"Any author", "pages":300},
    {"title": "Last book", "author":"Last author", "pages":150}
]

const Book = ({title, author, pages, freeBookmark}) =>{
    return(        
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>pages:{pages} pages </p>
            <p>free bookmark today:{freeBookmark ? 'yes':'no'} </p>
        </section>
    )
}

// //Function named library that will return a component with JSX elements that will contain books info
// const Library = ({books}) => {
//     return(        
//         <div>
//             {
//                 books.map(
//                     (book, i) => <Book 
//                                 key={i}
//                                 title={book.title} 
//                                 author ={book.author}
//                                 pages= {book.pages}/>
//                 )
//             }
//         </div>
//     )
// }

const Hiring = () => 
    <div>
        <p>The library is hiring. Go to www.library.com/jobs for more.</p>

    </div>

const NotHiring = () => 
<div>
    <p>The library is not hiring. Check back later for more info.</p>    
</div>

class Translation extends React.Component {
    state = {
        loading: true,
        data: null
    };
    async componentDidMount(){
        const url = "https://blooming-beyond-50661.herokuapp.com/localize/en"
        const response = await fetch(url,{headers:{'Access-Control-Allow-Origin':''}})
        const data = await response.json()
        console.log(data)
        this.setState({data: data.results[0]})
    }
    render(){
       return  (<h1>Title</h1>)
    }
}
//A component class Library 
class Library extends React.Component {
    
    state = {
        open: false,
        freeBookmark: false,
        hiring: true,
        data: [],
        loading: false
    }

    componentDidMount(){
        //console.log("The component did mount")
        this.setState({loading: true})
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
            .then(data => data.json() )
            .then(data=> this.setState({data, loading:false}) )
    }

    componentDidUpdate(){
        console.log("The component just updated")
    }

    //COnstructor boiler plate
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         open: true 
    //     }
    //     this.toggleOpenClosed = this.toggleOpenClosed.bind(this)
    // }

    toggleOpenClosed= () => {
        this.setState( 
            prevState => ({
                open: !prevState.open
            })            
        )
    }
    render(){
        console.log(this.state)
        const { books } = this.props
        return(                    
            <div>
                {<Translation/>}
                {this.state.hiring ? <Hiring/> : <NotHiring/>}
                {this.state.loading  ?  "loading..." : 
                    <div>
                        {this.state.data.map( (product) =>{
                            return (
                                <div>
                                    <h3>Library product of the week</h3>
                                    <h4>{product.name}</h4>
                                    <img src={product.image} height={100}/>
                                </div>
                            )
                        })}
                    </div> 
                }
                <h1>The library is {this.state.open ? 'open':'closed'}</h1>
                <button onClick= {this.toggleOpenClosed}> Change</button> 
                {
                    books.map(
                        (book, i) => <Book 
                                    key={i}
                                    title={book.title} 
                                    author ={book.author}
                                    pages= {book.pages}
                                    freeBookmark={this.state.freeBookmark}/>
                    )
                }                
            </div>
        )
    }
}

render(
    <div>
        <Library books={bookList}/>        
    </div>,
    document.getElementById('root')
)
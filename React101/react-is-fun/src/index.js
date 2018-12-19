import React, {Component} from 'react'
import {render} from 'react-dom'

let bookList = [
  {"title":"The Art of War", "author":"Tzun Zu", pages: 120},
  {"title":"The call of ktuhulu", "author":"HP Lovecraft", pages: 500},
  {"title":"The prince", "author":"Maquivelo", pages: 260},
  {"title":"The gray", "author":"Mark Maks", pages: 260}
]

const Book = ({title, author, pages}) => {
  return(
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages}</p>
    </section>
  )
}
const Library = ({books}) => {
  return(
    <div>
      {books.map(
        (book, i) =>  <Book
                        key = {i}
                        title={book.title}
                        author={book.author}
                        pages={book.pages}/>
      )}
    </div>
  )
}

render(
  <Library books={bookList}/>,
  document.getElementById('root')
)



//////---------Part 1
/*
let skiData = {
  total:50,
  powder: 20,
  backcountry:10,
  goal: 100
}

//-----SkyDayCounter as a function
//This is a normal JS syntax
const getPercent = decimal => {
  return decimal * 100 + '%'
}
const calcGoalProgress = (total, goal) => {
  return getPercent(total/goal)
}
const SkiDayCounter = ({total, powder, backcountry, goal}) => {
  return (
    <section>
      <div>
        <p>Total days: {total}</p>
      </div>
      <div>
        <p>Powder days: {powder}</p>
      </div>
      <div>
        <p>Backcountry days: {backcountry}</p>
      </div>
      <div>
        <p>Goal Progress: {calcGoalProgress(total, goal)}</p>
      </div>
    </section>
  )
}
//-----SkyDayCounter as a class
// class SkyDayCounter extends Component {
//
//   getPercent = decimal => {
//     return decimal * 100 + '%'
//   }
//   calcGoalProgress = (total, goal) => {
//     return this.getPercent(total/goal)
//   }
//
//   render(){
//     const {total, powder, backcountry, goal} = this.props
//     return (
//
//     )
//   }
// }


class Message extends React.Component {
  render(){
    console.log(this.props);
    return (
      <div>
        <h1 style = {{color:this.props.color}}>
          {this.props.msg}
        </h1>
        <p>I'll check back in {this.props.minutes}</p>
      </div>
    )
  }
}






  render(
  //<Message color= "blue" msg="how are you?" minutes={60}/>,
  <SkiDayCounter
    total={skiData.total}
    powder={skiData.powder}
    backcountry={skiData.backcountry}
    goal={skiData.goal}
  />,
  document.getElementById('root')
)
*/

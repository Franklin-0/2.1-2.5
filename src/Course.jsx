const parts = [
  { name: 'Fundamentals of React', exercises: 10 },
  { name: 'Using props to pass data', exercises: 7 },
  { name: 'State of a component', exercises: 14 },
  { name: 'Redux', exercises: 11 }
]
const parts2 = [
  {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2 }
]

const Header1 = () =>{
  return <h1>Web Development Curriculum</h1>
}
 
const Header =()=>{
  return(
  <h3>Half Stack application development</h3>
  )
}

const Header2 = ()=>{
  return <h3>Node.js</h3>
}

const Part1 = () =>{
  return(
    10
  )
}

const Part2 = () =>{
  return(
    7
  )
}
const Part3 = () =>{
  return(
    14
  )
}

const Part4 = () =>{
  return(
    11
  )
}

const Part5 = () =>{
  return(
    3
  )
}

const Part6 = () =>{
  return(
    7
  )
}

const Total = () => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return <strong>Total exercises: {total}</strong>
}
const Total2 = () =>{
  const total = parts2.reduce((s,p)=>s + p.exercises, 0)
 return <strong>Total exercises: {total}</strong>
}


const Content = ()=>{
  return(
    <div>
      <Header1/>
      <Header/>
      <p>Fundamentals of React <Part1/> </p>
      <p>Using props to pass data <Part2/></p>
      <p>State of a component <Part3/> </p>
      <p>Redux <Part4/></p>
      <p><Total/></p>
      <Header2/>
      <p>Routing <Part5/>  </p>
      <p>Middleware <Part6/> </p>
      <p><Total2/></p>
    </div>
  )
}
const Course = ()=>{
  return(
    <div>
      <Content/>
    </div>
  )
}
export default Course;
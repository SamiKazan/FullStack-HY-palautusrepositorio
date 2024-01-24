const Header = (props) => {
  console.log(props.course.name)
  return (
    <h1>
      {props.course.name}
    </h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} exercise={props.parts[0]}/>
      <Part part={props.parts[1]} exercise={props.parts[1]}/>
      <Part part={props.parts[2]} exercise={props.parts[2]}/>
    </div>
  )
}

const Total = (props) => {
  console.log("Total:", props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises)
  return (
    <>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </>
  )
}

const Part = (props) => {
  console.log(props.part.name, props.part.exercises)
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

"'npm run dev' in console to start app"
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App
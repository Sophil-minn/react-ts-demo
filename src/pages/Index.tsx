import { Link } from 'react-router-dom'

function Index() {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/hoc">hoc</Link></li>
      <li><Link to="/hook">hook</Link></li>
      <li><Link to="/hook2">hooks2</Link></li>
      <li><Link to="/hook3">hooks3</Link></li>
      <li><Link to="/sideMaster">sideMaster</Link></li>
      <li><Link to="/index">index</Link></li>
      <li><Link to="/lifeCycle">lifeCycle</Link></li>
      <li><Link to="/statePattern">statePattern</Link></li>
    </ul>
  )
}

export default Index
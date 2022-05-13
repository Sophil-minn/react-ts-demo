import { Link } from 'react-router-dom'

function Index() {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/hoc">hoc</Link></li>
      <li><Link to="/sideMaster">sideMaster</Link></li>
      <li><Link to="/index">index</Link></li>
    </ul>
  )
}

export default Index
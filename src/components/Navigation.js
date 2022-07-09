import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/superhero">Superhero</Link>
            </li>
            <li>
                <Link to="/rqsuperhero">RqSuperhero</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navigation
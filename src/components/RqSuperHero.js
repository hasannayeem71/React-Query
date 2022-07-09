import axios from "axios"
import { useQuery } from "react-query"
import Navigation from "./Navigation"


const fetcher = () => {
return axios.get('http://localhost:4000/superheroes')
}

const RqSuperHero = () => {
     const {data,isLoading,isError,error} = useQuery('hero',fetcher)
    if(isLoading){
        return(<>
            <Navigation />
            <h2>Loading...</h2>
        </>
        )
    }
    if(isError){
        return (<>
            <Navigation/>
            <h2>{error.message}</h2>
        </>
        )
    }
  return (
    <>
    <Navigation/>
    <h2>React Query Super Heroes Page</h2>
    {data?.data.map(hero => {
        return <div>{hero?.name}</div>
    }
    )}
    </>
  )
}

export default RqSuperHero
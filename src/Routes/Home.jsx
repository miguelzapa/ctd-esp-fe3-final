import React, { useContext } from 'react'
import Card from '../Components/Card'
import { useContextGlobal} from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {data, theme} = useContextGlobal()
  console.log(data);
  return (
    <main className={theme} >
      <h1>Home</h1>
      <div className='card-grid'>
        {data?.map(item => {
            return <Card id={item.id} name={item.name} username={item.username} key={item.id}></Card> 
          })}
      </div>
    </main>
  )
}

export default Home
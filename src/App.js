import React from 'react'
import Card from './card'
import Header from './header'
import Buttons from './buttons'
import data from './data'
import Preloader from './preloader'

export default function App() {


  let [persons , setPerson] = React.useState()
  let [pages , setpages] = React.useState()
  let [count , setcount ] =  React.useState(1)


  console.log(count)
  React.useEffect(()=>{

    fetch(`https://dummyapi.io/data/v1/user?page=${count}&limit=10` , {method:"GET" , headers : {
      "app-id" : "63266346ae7bba718fce0d76"
    }})

    .then(res=>res.json())
    .then(data=>{
      setPerson(data)
      // console.log(data.data)
      setpages(()=>{
        let i = 0
        return new Array(5).fill(0).map(num=>{
          return i++
        })
      })
    })

  },[count])


  function Pagejsx(){

    
  return  pages?.map(page=>{
      return <Buttons page={page} pagejump={pagejump} count={count} />
    })
  }

  function pagejump(e){
    // console.log(e.target.dataset.id)
    setcount(Number(e.target.dataset.id))
  }


  function Cardjsx (){

    if(!persons) return

      let array = [...persons.data]

     return array.splice(0,10).map(person=>{
        return <Card person={person} />
      })

    
  }

  function nextpage(){
    if(count==pages.length) return
    setcount(preval=>{
      return preval+1
    })
  }

  function prevpage(){
    console.log('yess')
    if(count==1) return
    setcount(preval=>{
      return preval-1
    })
  }

 

  return (
    <>
    <Header />

    {!persons &&<Preloader />}

    { persons && <main className='flexcontainer'>
            {Cardjsx()}
    </main>}

    {persons && <div  className='pagination pages'>

        <div onClick={()=>prevpage()} className='navbtn'>Prev</div>
   
        {Pagejsx()}

        <div onClick={()=>nextpage()} className='navbtn'>Next</div>
      
    </div>}
    </>
  )
}


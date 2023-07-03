import React, {useState} from 'react'
import axios from '../../api'


const initialState = {
    title: "",
    desc: ""
}

function Blog({SetStuReload}) {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const [loading, setLoding] = useState(false)



    const handleSubmit = e=>{
        e.preventDefault()
        let newPro = {
           title,
           desc
        }
        console.log(newPro);
        axios.post("/blogs", newPro)
        .then(res => {
            alert(res.data.msg)
            SetStuReload(p=> !p)
            console.log(res)
        })
        .catch(err=> console.log(err))
        .finally(()=>{
            setLoding(false)
        })
    }


  return (
    <div>
        <h2>CreateStudent</h2>
        <form onSubmit={handleSubmit} action="">
            <input required value={title} onChange={e=> setTitle(e.target.value)} type="text" placeholder='title' />
            <input required value={desc} onChange={e=> setDesc(e.target.value)} type="text" placeholder='desc' />

            

            <button type='submit'>Create student</button>
        </form>
    </div>
  )
}

export default Blog
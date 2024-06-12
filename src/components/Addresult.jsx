import React, { useState } from 'react'

const Addresult = () => {

    const [data, setData] = useState(
        {
            "name":"",
            "admno":"",
            "class":"",
            "mark":"",
            "grade":""
        }
    )

    const inputHandler = (event) => {
        setData({...data, [event.target.name]: event.target.value })}

        const readValue = () => {
            console.log(data)
            axios.post("http://localhost:8080/add", data).then(
                (response) => {
                    console.log(response)
                    if (response.data.status == "success") {
                        alert("success")
                    }
                    else {
                        alert("ok")
                    }
                }


            ).catch()
        }
    
  return (
    <div>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">STUDENT NAME</label>
                    <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">ADMISSION NO</label>
                    <input type="text" className="form-control" name='admno' value={data.admno} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">CLASS</label>
                    <select name="class" id="" className="form-control" value={data.class} onChange={inputHandler}>
                        <option className="option">select an option</option>
                        <option className="1st">1st</option>
                        <option className="2nd">2nd</option>
                        <option className="3rd">3rd</option>
                        <option className="4th">4th</option>
                        <option className="5th">5th</option>
                        <option className="6th">6th</option>
                        <option className="7th">7th</option>
                        <option className="8th">8th</option>
                        <option className="9th">9th</option>
                        <option className="10th">10th</option>
                    </select>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">TOTAL MARK</label>
                    <input type="text" className="form-control" name='mark' value={data.mark} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">GRADE</label>
                    <input type="text" className="form-control" name='grade' value={data.grade} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-success" onClick={readValue}>SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )

}
export default Addresult
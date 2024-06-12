import React from 'react'

const Viewresult = () => {

    const [data, changeData] = useState([])
    const fetchData = () => {
        axios.get("http://localhost:8080/view").then(
            (Response) => {
                changeData(Response.data)
            }
        ).catch()
    }
    useEffect(() => { fetchData() }, [])


    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">NAME</th>
                                    <th scope="col">ADMISSION NO</th>
                                    <th scope="col">CLASS</th>
                                    <th scope="col">MARK</th>
                                    <th scope="col">GRADE</th>
                                </tr>
                            </thead>
                            <tbody>

                                {data.map(
                                    (value, index) => {

                                        return <tr>
                                            <td>{value.name}</td>
                                            <td>{value.admno}</td>
                                            <td>{value.class}</td>
                                            <td>{value.mark}</td>
                                            <td>{value.grade}</td>
                                        </tr>
                                    }
                                )}


                                

                                    


                            </tbody>
                        </table>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Viewresult
import axios from "axios";
import { Navigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Sign_Up from "./Sign_Up";

const Data_Table = () => {
  const [first, setfirst] = useState(false);
  const [dataname, setdataname] = useState([]);
  console.log(dataname);

  const homeHandle = () => {
    setfirst(true);
  };
  if (first) {
    return <Sign_Up/>;
  }

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/getUser")
  //     .then(function (response) {
  //       console.log(response.data);
  //       setdataname(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

  const refresh = () => {
    axios
      .get("http://localhost:5000/getUser")
      .then(function (response) {
        console.log(response.data);
        setdataname(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header text-center">
                  <h3 className="card-title">
                    DataTable with minimal features & hover style
                  </h3>
                  <Link to="/">
                    <button onClick={homeHandle}>to home page</button>
                  </Link>
                  <button className="mx-3" onClick={refresh}>
                    Refresh
                  </button>
                </div>
                {/* card-header */}
                <div className="card-body">
                  <table
                    id="example2"
                    className="table table-bordered table-hover"
                  >
                    <thead>
                      <tr className="text-center">
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>CSS grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataname.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{index}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                            <td></td>
                          </tr>
                        )
                      })}
                    </tbody>
                    {/* <tfoot>
                      <tr>
                        <th>Rendering engine</th>
                        <th>Browser</th>
                        <th>Platform(s)</th>
                        <th>Engine version</th>
                        <th>CSS grade</th>
                      </tr>
                    </tfoot> */}
                  </table>
                </div>
                {/* card-body */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Data_Table;

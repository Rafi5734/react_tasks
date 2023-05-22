import React, { useEffect, useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");

  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [tasks, setTasks] = useState([]);
  const [active, setActive] = useState([]);
  const [completed, setCompleted] = useState([]);

  const handleClick = (val) => {
    setShow(val);

    if (val === "active") {
      const activeAll = tasks.filter((task) => task.status === "active");
      setActive(activeAll);
    }

    if (val === "completed") {
      const completedAll = tasks.filter((task) => task.status === "completed");
      setCompleted(completedAll);
    }

    switch (val) {
      case "all":
        return tasks.sort((a, b) => {
          if (a.status === "active" && b.status !== "active") {
            return -1;
          } else if (a.status !== "active" && b.status === "active") {
            return 1;
          } else if (a.status === "completed" && b.status !== "completed") {
            return -1;
          } else if (a.status !== "completed" && b.status === "completed") {
            return 1;
          } else {
            return 0;
          }
        });
      default:
        return tasks;
    }
  };

  // console.log(tasks);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && status) {
      const newTask = {
        name: name,
        status: status,
      };

      setTasks([...tasks, newTask]);

      setName(" ");
      setStatus(" ");
    }
  };

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Enter") {
        // 👇️ call submit function here
        handleSubmit();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  //   console.log(tasks);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            className="row gy-2 gx-3 align-items-center mb-4"
            onSubmit={handleSubmit}
          >
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Status"
                name="status"
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {show === "all" && (
                <>
                  {tasks.map((task, index) => (
                    <tr key={index}>
                      <td>{task.name}</td>
                      <td>{task.status}</td>
                    </tr>
                  ))}
                </>
              )}
              {show === "active" && (
                <>
                  {active.map((task, index) => (
                    <tr key={index}>
                      <td>{task.name}</td>
                      <td>{task.status}</td>
                    </tr>
                  ))}
                </>
              )}
              {show === "completed" && (
                <>
                  {completed.map((task, index) => (
                    <tr key={index}>
                      <td>{task.name}</td>
                      <td>{task.status}</td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;

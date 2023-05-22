import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;


function LogNewForm() {
    let navigate = useNavigate();
    const [log, setLog] = useState({
        "date": "",
        "exercise_name": "",
        "description": "",
        "sets_reps": "",
        "set1": "",
        "set2": "",
        "set3": "",
        "set4": "",
        "set5": "",
        "set6": ""
    })

    const addLog = (newLog) => {
        axios
            .post(`${API_URL}/logs`, newLog)
            .then(
                () => {
                    navigate(`/logs`);
                },
                (error) => console.error(error)
            )
            .catch((c) => console.warn("catch", c));
    }


    const handleTextChange = (event) => {
        setLog({ ...log, [event.target.id]: event.target.value });
    };

    const handleCheckboxChange = () => {
        // setLog({ ...log, is_favorite: !bookmark.is_favorite });
    };

    const handleEmptyStrings = (newLogData) => {
        for (const key in newLogData) {
            if (key.startsWith("set")) {
                if (key === "") {
                    key = null;
                }
            }
        }
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        addLog(log);
    };


    return (
        <div className="New">
            <section className="background-overlay2">
                <h2>Add an Exercise to Your Log</h2>
                <br />
                <form onSubmit={handleSubmit}>
                    <label htmlFor="date">Date:</label>
                    <input
                        id="date"
                        value={log.date}
                        type="date"
                        onChange={handleTextChange}
                        placeholder="MM/DD/YYYY"
                        required
                    />
                    <br />
                    <br />
                    <label htmlFor="exercise_name">Name of Exercise:</label>
                    <input
                        id="exercise_name"
                        value={log.exercise_name}
                        type="text"
                        onChange={handleTextChange}
                        placeholder="Name"
                        required
                    />
                    <br />
                    <br />
                    <label htmlFor="description">Description of Exercise:</label>
                    <input
                        id="description"
                        value={log.description}
                        type="text"
                        onChange={handleTextChange}
                        placeholder="Description"
                    />
                    <br />
                    <br />
                    <label htmlFor="sets_reps">Sets and Reps for Exercise:</label>
                    <input
                        id="sets_reps"
                        value={log.sets_reps}
                        type="text"
                        onChange={handleTextChange}
                        placeholder="Sets and Reps"
                        required
                    />
                    <br />
                    <br />
                    <label htmlFor="set1">Amount of Reps Completed in Set 1:</label>
                    <input
                        id="set1"
                        value={log.set1}
                        type="text"
                        onChange={handleTextChange}
                        placeholder="Reps Completed"
                    />
                    <br />
                    <br />
                    <label htmlFor="set2">Amount of Reps Completed in Set 2:</label>
                    <input
                        id="set2"
                        value={log.set2}
                        type="text"
                        onChange={handleTextChange}
                        placeholder="Reps Completed"
                    />
                    <br />
                    <br />
                    <label htmlFor="set3">Amount of Reps Completed in Set :</label>
                    <input
                        id="set3"
                        value={log.set3}
                        type="text"
                        onChange={handleTextChange}
                        placeholder="Reps Completed"
                    />
                    <br />
                    <br />
                    <label htmlFor="set4">Amount of Reps Completed in Set 4:</label>
                    <input
                        id="set4"
                        value={log.set4}
                        type="text"
                        onChange={handleTextChange}
                        placeholder="Reps Completed"
                    />
                    <br />
                    <br />
                    <label htmlFor="set5">Amount of Reps Completed in Set 5:</label>
                    <input
                        id="set5"
                        value={log.set5}
                        type="text"
                        onChange={handleTextChange}
                        placeholder="Reps Completed"
                    />
                    <br />
                    <br />
                    <label htmlFor="set6">Amount of Reps Completed in Set 6:</label>
                    <input
                        id="set6"
                        value={log.set6}
                        type="text"
                        onChange={handleTextChange}
                        placeholder="Reps Completed"
                    />
                    <br />
                    <br />
                    <br />
                    <input type="submit" />
                </form>
            </section>
        </div>
    )
};

export default LogNewForm;
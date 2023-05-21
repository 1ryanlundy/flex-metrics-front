import axios from "axios";
import { useState, useEffect } from "react";
import Log from "./Log";
import { Table } from "react-bootstrap";

const API_URL = process.env.REACT_APP_API_URL;

function Logs() {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${API_URL}/logs`).then((response) => {
            setLogs(response.data);
            setLoading(false);
        }).catch((error) => {
            console.warn("catch", error)
            setLoading(false);
        });
    }, []);


    const separatedLogs = logs.reduce((acc, item) => {
        const date = item.date.slice(0, 10);
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(item);
        return acc;
    }, {});




    let dateValues = [...new Set(logs.map(item => item.date.slice(0, 10)))];

    let log1 = separatedLogs[dateValues[0]];
    let log2 = separatedLogs[dateValues[1]];


    function dateFormatter(date) {
        let month = date.slice(5, 7);
        let day = date.slice(-2);
        let year = date.slice(0, 4);

        return `${month}/${day}/${year}`
    }

    let formattedDate1 = "";
    let formattedDate2 = "";

    if (!loading && logs.length > 0) {
        formattedDate1 = dateFormatter(dateValues[0]);
        formattedDate2 = dateFormatter(dateValues[1]);
    }


    return (
        <div className="logs">
            <section className="background-overlay">
                <h3>{formattedDate1}</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Exercise</th>
                            <th>Description / Notes</th>
                            <th>Sets and Reps</th>
                            <th>Set1</th>
                            <th>Set2</th>
                            <th>Set3</th>
                            <th>Set4</th>
                            <th>Set5</th>
                            <th>Set6</th>
                        </tr>
                    </thead>
                    <tbody>
                        {log1 && log1.map((exercise) => {
                            return <Log key={exercise.date} exercise={exercise} />
                        })}
                    </tbody>
                </Table>
            </section>
            <br></br>
            <section className="background-overlay">
                <h3>{formattedDate2}</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Exercise</th>
                            <th>Description</th>
                            <th>Sets and Reps</th>
                            <th>Set1</th>
                            <th>Set2</th>
                            <th>Set3</th>
                            <th>Set4</th>
                            <th>Set5</th>
                            <th>Set6</th>
                        </tr>
                    </thead>
                    <tbody>
                        {log1 && log2.map((exercise) => {
                            return <Log key={exercise.date} exercise={exercise} />
                        })}
                    </tbody>
                </Table>
            </section>
        </div>
    )
};

export default Logs;
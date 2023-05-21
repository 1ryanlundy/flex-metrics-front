import { Link } from "react-router-dom";

function Log({ exercise }) {
  return (
    <tr>
      <td>
        <p>{exercise.exercise_name}</p>
      </td>
      <td>
        {exercise.description}
      </td>
      <td>
        {exercise.sets_reps}
      </td>
      <td>
        {exercise.set1}
      </td>
      <td>
        {exercise.set2}
      </td>
      <td>
        {exercise.set3}
      </td>
      <td>
        {exercise.set4}
      </td>
      <td>
        {exercise.set5}
      </td>
      <td>
        {exercise.set6}
      </td>
    </tr>
  )
}

export default Log;
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivities, filterByActivity } from "../store/actions";

export default function FilterByActivity() {
    const dispatch = useDispatch()
    const activities = useSelector((state) => state.activities)
    useEffect(() => {
        dispatch(fetchActivities())
    },[])
    function handleFilterActivity(e){
        e.preventDefault()
        dispatch(filterByActivity(e.target.value))
    }
    let orderedActivities = activities.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
    })
    return (
        <div>
            Filter by activity: 
            <form>
            <select onChange={e => handleFilterActivity(e)}>
                <option value='All'>Select activity...</option>
            {orderedActivities.map(activity => {
                return <option value={activity.name}>{activity.name}</option>
            })}
        </select>
            </form>
        </div>
    )
}
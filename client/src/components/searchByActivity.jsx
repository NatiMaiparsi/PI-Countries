import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivities } from "../store/actions";
import Country from "./country";

// export default function SearchByActivity() {
//     const dispatch = useDispatch()
//     const allActivities = useSelector((state) => state.activities)
//     useEffect(() => {
//         dispatch(fetchActivities())
//     },[dispatch])
//     console.log(allActivities)
//     return (
//         <div>
//             <select>
//                 <option>All activities</option>
//                 {allActivities.map((activity) => {
//                     return <option key={activity.id}value={activity.name}>{activity}</option>
//                 })}
//             </select>
//         </div>
//     )

// }
import { useState } from "react";
import { TimelineContext } from "./TimeLineContext";

const TimelinesProvider = ({children}) => {
    
    const [timelines, setTimelines] = useState([]);

    const data = {
        timelines,
        setTimelines,
    };
    return (
    <TimelineContext.Provider value={data}>{children}</TimelineContext.Provider>
);
};

export default TimelinesProvider;
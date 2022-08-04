import { Box } from "@mui/system";
import React from "react";
import CardResep from "./CardResep";

const HasilCari = ({ result, loading }) => {

    if (loading) {
        return (
            <>
                <p>Mencari...</p>
            </>
        )
    }

    return (
        <>
            <Box sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
            }}>
                {result.map((item) => {
                    return <CardResep key={item.key} data={item} />
                })}
                {/* {console.log(result[0])} */}
            </Box>
        </>
    )
}

export default HasilCari;

import { useEffect, useState } from "react"
import {Text } from "@chakra-ui/react"

export const Error = ({err}) => {

    const {errorType, errorMsg} = err
    console.log("in error component, err object",errorType, errorMsg )
    if (errorType !== "" && errorMsg !== ""){
        return (
        <>
            <Text color="tomato"> {errorMsg}</Text>
        </>
        )
    }
}
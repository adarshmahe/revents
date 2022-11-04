import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { increment, decrement } from "./testReducer";

export default function Sandbox() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.test.data);
    return(
        <>
            <h1>Testing 123</h1>
            <h2>The date is: {data}</h2>
            <Button content='Increment' color="green" onClick={() => dispatch(increment(20))} />
            <Button content='Decrement' color="red" onClick={() => dispatch(decrement(10))} />
        </>
    )
}
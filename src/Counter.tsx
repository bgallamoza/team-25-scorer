import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter(): JSX.Element {
    const [count, setCount] = useState<number>(0);
    return (
        <div>
            <p>Press the button!</p>
            <Button onClick={() => setCount(count + 1)}>Count: {count}</Button>
        </div>
    );
}

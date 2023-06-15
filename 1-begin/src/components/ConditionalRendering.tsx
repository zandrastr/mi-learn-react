export const ConditionalRendering = () => {
    const age = 43;

    // ------ 1. If ------
    // let html = <></>;
    // if (age > 40) {
    //     html = <p>Age: {age}</p>;
    // }
    // return <>{html}</>;

    // ------ 2. Ternary Operator ------
    // return <>{age > 40 ? <p>Age: {age}</p> : <></>}</>;

    // ------ 3. && logical operator ------
    return <>{age > 40 && <p>Age: {age}</p>}</>;
};

export const Lists = () => {
    const numbers: number[] = [1, 2, 3, 4, 5];

    const html = numbers.map((n, index) => {
        return <li key={index}>{n}</li>;
    });

    return <ul>{html}</ul>;

    // ------ another way, same result ------
    // return (
    //     <ul>
    //         {numbers.map((n, index) => {
    //             return <li key={index}>{n}</li>;
    //         })}
    //     </ul>
    // );
};

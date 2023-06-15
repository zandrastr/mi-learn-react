export const Interpolation = () => {
    const msg = '✅ Interpolation';
    const imageUrl = 'https://media.geeksforgeeks.org/wp-content/uploads/20230426115225/computer-image-660.jpg';

    return (
        <>
            <h2>{msg}</h2>
            <img src={imageUrl} alt='Computer' />
        </>
    );
};

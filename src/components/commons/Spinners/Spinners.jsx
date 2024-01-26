import HashLoader from 'react-spinners/HashLoader';

const override = {
    display: 'block',
    margin: 'auto',
    borderColor: '#FFCE00'
};

function Spinners ( {isLoading} ) {
    return (
    <div>
        <HashLoader
        color="#FFCE00"
        size={50}
        loading={isLoading}
        cssOverride={override}
        aria-label="Loading Spinner"
        data-testId="loader"
        />
    </div>
    )
}

export default Spinners

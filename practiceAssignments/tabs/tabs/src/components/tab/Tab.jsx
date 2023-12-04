const Tab = ({label, index, setActiveTab, callback}) =>{
    const handleClick = () => {
        setActiveTab(index);
        if (callback) {
            callback(index);
        }
    }
    return (
        <button onClick={handleClick}>
        {label}
        </button>
    );
}

export default Tab;
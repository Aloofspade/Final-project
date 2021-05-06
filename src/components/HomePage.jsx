const HomePage = ({toDaily}) => {
    return(
    <div className="home">
        home
        <div id = "bottom">
            <button id = "next" onClick={() => toDaily()}></button>
        </div>
    </div>
    );
};

export default HomePage;
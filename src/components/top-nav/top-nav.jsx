import React/*, {useState}*/ from 'react';

const TopNav = () => {
    //const [sortOption, setSortOption] = useState(1);
    
    const tabs = [
        "Weekly",
        "Monthly",
        "6-Months"
    ];
    const tabNav = tabs.map((tab, index) =>{
        return(
            <div key={index}> {tab} </div>
        );
    });


    return (
        <nav>
            <div className="top-nav d-flex justify-content-around align-items-center py-4">
                {tabNav}
            </div>
        </nav>
    )
}

export default TopNav;

import React from 'react';

const TopNav = () => {
    const tabs = [
        "Weekly",
        "Monthly",
        "6-Months"
    ];

    const [sortOption, setSortOption] = useState(1);

    return (
        <nav>
            <div className="top-nav">

            </div>
        </nav>
    )
}

export default TopNav;

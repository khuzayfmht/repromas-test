
const Dashboard = () => {
    return (
        <>
            <h3>Team Members</h3>
            <div style={{ display: "grid", gridTemplateColumns: '1fr 1fr 1fr 1fr', gridGap: '10px', padding: '20px' }}>
            <div style={{ borderRadius: '5px', background: '#F3C5FF', height: '100px'}}>
                <h3 style={{color: '#4B4453'}}>Nasir</h3>
            </div>
            <div style={{ borderRadius: '5px', background: '#F9B14E', height: '100px'}}>
                <h3 style={{color: '#4B4453'}}>Khuzaifa (Team Lead)</h3>
            </div>
            <div style={{ borderRadius: '5px', background: '#C4FCF0', height: '100px'}}>
                <h3 style={{color: '#4B4453'}}>Zunnurain</h3>
            </div>
            <div style={{ borderRadius: '5px', background: '#80B2C9', height: '100px'}}>
                <h3 style={{color: '#4B4453'}}>Isa</h3>
            </div>
        </div>
        </>
    )
}

export default Dashboard;

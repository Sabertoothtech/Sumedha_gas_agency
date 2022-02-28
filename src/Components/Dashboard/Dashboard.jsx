import React,{useState} from 'react'
import './Dashboard.css'
import LeftSidebar from '../Sidebar/LeftSidebar'
import DashboardHeader from './DashboardHeader'
import Button from '@mui/material/Button';
import ThreeSmallContainer from './DashboardSmallContainer/ThreeSmallContainer'
import StatisticsContainer from './DashboardSmallContainer/StatisticsContainer'
import Instock2in1Container from './DashboardSmallContainer/Instock2in1Container';
import DoughnutContainer from './DashboardSmallContainer/DoughnutContainer';
import BarChartWithDoughtnut from './DashboardSmallContainer/BarChartWithDoughtnut';
import MovingIcon from '@mui/icons-material/Moving';
import LineChartDashboard from './DashboardSmallContainer/LineChartDashboard';
import TableDashboard from './DashboardSmallContainer/TableDashboard';
import AllAgency from './DashboardSmallContainer/AllAgency/AllAgency';
import useMediaQuery from '@mui/material/useMediaQuery';
import MobNavbar from '../../CommonComponents/MobNavbar';

function Dashboard() {
    const matches = useMediaQuery('(max-width:1100px)');
    const [allCountryData, setAllCountryData] = useState(false)
    return (
        <>
        
            <div className="dashboard__main">
            {matches?null:<LeftSidebar />}
                <div className="dashboard__container">
                {matches?<MobNavbar/>:null}
                    <div className="dashboard_main_container">
                        
                        <DashboardHeader allCountryData={allCountryData} setAllCountryData={setAllCountryData} />
                        <hr style={{ color: "#f5f5f5" }} />
                       
                        {
                            allCountryData? <AllAgency/>:
                            <>
                            <div className="dashboard_3small_Container">
                            <ThreeSmallContainer bgcolor="#006400" color="#006400" />
                            <ThreeSmallContainer bgcolor="#dc143c" color="#dc143c" />
                            <ThreeSmallContainer bgcolor="#7b68ee" color="#7b68ee" />
                        </div>
                        <hr style={{ color: "#f5f5f5", width: "90%", margin: "auto" }} />
                        <div className="dashboard_statistics">
                            <div className="dashboard_statistics__text">
                                <small>Statistics</small>
                                <select name="" id="">
                                    <option value="">Per day</option>
                                    <option value="">Per week</option>
                                    <option value="">Per month</option>
                                    <option value="">Last 6 Month</option>
                                    <option value="">Per year</option>
                                </select>
                            </div>
                            <div className="dashboard_statistics_chartbar">
                                <StatisticsContainer />
                            </div>
                        </div>
                        <hr style={{ color: "#f5f5f5", width: "90%", margin: "auto" }} />

                        <div className="dashboard_view_statistics">
                            <div className="dashboard_instock_2small_container">
                                <small>In stock</small>
                                <div className="dashboard_2smallin1container">
                                    <Instock2in1Container bgcolor="#006400"/>
                                    <Instock2in1Container bgcolor="#dc143c"/>
                                </div>
                            </div>
                            <div className="view_statistics_button">
                                <Button variant="outlined">View Statistics</Button>
                            </div>
                        </div>
                        <hr style={{ color: "#f5f5f5", width: "90%", margin: "auto" }} />

                        <div className="dashboard_circlechart">
                            <div className="dashboard_doughnut_text">
                                <small>Same Distribution</small>
                                <div className="dashbord__doughtnut">
                                    <DoughnutContainer/>
                                </div>
                            </div>

                            <div className="dashboard_barchart_doughnut">
                                <small>Performance</small>
                                <span>Total order</span>
                                <BarChartWithDoughtnut/>
                            </div>
                        </div>
                        <hr style={{ color: "#f5f5f5", width: "90%", margin: "auto" }} />

                        <div className="dashboard__linechart_table">
                            <div className="dashboard_linechart">
                            <small>Gas Price</small>  
                            <LineChartDashboard/>
                            </div>
                            <div className="dashboard_table">
                            <small>Top buyers</small>
                            <TableDashboard/>
                            </div>
                        </div>
                            </>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard

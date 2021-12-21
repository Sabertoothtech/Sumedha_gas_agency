import React from 'react'
import './Finance.css'
import LeftSidebar from  '../Sidebar/LeftSidebar'
import FinanceHeader from './AllFinanceContainer/FinanceHeader'
import ProgressbarContainer from './AllFinanceContainer/ProgressbarContainer'
import DataCircleGraph from './AllFinanceContainer/DataCircleGraph'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import CompanyReceivable from './AllFinanceContainer/CompanyReceivable'
import CompanyPayable from './AllFinanceContainer/CompanyPayable'

function Finance() {
    return (
        <div className="finance__main">
            <LeftSidebar/>
            <div className="finance__container">
                <div className="finance_main_container">
                    <FinanceHeader/>
                    <hr style={{ color: "#f5f5f5" }} />
                    <div className="finance_progressbar_container">
                        <DataCircleGraph bgcolor="#006400" icon={TrendingUpIcon}/>
                        <DataCircleGraph bgcolor="#dc143c" icon={TrendingDownIcon}/>
                        <ProgressbarContainer title="Amount to receive"/>
                        <ProgressbarContainer title="Payable amount"/>
                        
                    </div>

                    <div className="finance_both_table">
                        <div className="finance_amount_receivable_table">
                            <small >Amount Receivable</small>
                            <div className="finance_receivable_company">
                            <CompanyReceivable/>
                            </div>
                        </div>
                        <div className="finance_amount_payable_table">
                        <small>Amount Payable</small>
                        <div className="finance_payable_company">
                            <CompanyPayable/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Finance

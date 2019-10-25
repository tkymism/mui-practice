import React from 'react';

import DashboardTemplate from './containers/dashboard/DashboardTemplate'

const chart = (time, amount) => { return { time, amount }} 
const charts = [
    chart('00:00', 0),
    chart('03:00', 300),
    chart('06:00', 600),
    chart('09:00', 800),
    chart('12:00', 1500),
    chart('15:00', 2000),
    chart('18:00', 2400),
    chart('21:00', 2400),
    chart('24:00', undefined),
]

// Generate Order Data
const row = (id, date, name, shipTo, paymentMethod, amount) => {
    return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
    row(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
    row(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
    row(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
    row(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
    row(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
]

const mainList = [
    { itemText: 'Dashboard',    itemIcon: 'dashboard' }, 
    { itemText: 'Orders',       itemIcon: 'shoppingCart' }, 
    { itemText: 'Customers',    itemIcon: 'people' }, 
    { itemText: 'Reports',      itemIcon: 'barChart' }, 
    { itemText: 'Integrations', itemIcon: 'layers' }, 
]

const secondaryList = [
    { itemText: 'Current month', itemIcon: 'assignment' }, 
    { itemText: 'Last quarter',  itemIcon: 'assignment' }, 
    { itemText: 'Year-end sale', itemIcon: 'assignment' }, 
]

const secondaryListTitle = 'Saved reports'

const applicationName='Dashboard'

const App = () => (
    <DashboardTemplate 
        titleName={applicationName}
        mainList={mainList}
        secondaryList={secondaryList}
        secondaryListTitle={secondaryListTitle}
        charts={charts}
        rows={rows}
        />
)

export default App
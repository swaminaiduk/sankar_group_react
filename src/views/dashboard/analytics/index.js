import InvoiceList from '@src/views/apps/invoice/list'
import { Row, Col,  Media } from 'reactstrap'
import {
  Eye,
  MessageSquare,
  Users,
  Award
} from 'react-feather'
import StatsVertical from '@components/widgets/stats/StatsVertical'
import '@styles/react/libs/charts/apex-charts.scss'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDashboardCount } from '../store/action'
const AnalyticsDashboard = () => {
  const dispatch = useDispatch()
  const store = useSelector(state => state.dashboard.dashboardCnt)
  useEffect(() => {
    dispatch(getDashboardCount())
  }, [])
  return (
    <div id='dashboard-analytics'>
      <Row className='match-height'>
      <Col xl='2' md='4' sm='6'>
          <StatsVertical icon={<Eye size={21} />} color='info' stats={store?.brand} statTitle='Brnds' />
        </Col>
        <Col xl='2' md='4' sm='6'>
          <StatsVertical icon={<Users size={21} />} color='success' stats={store?.staff} statTitle='Employees' />
        </Col>
        <Col xl='2' md='4' sm='6'>
          <StatsVertical icon={<Award size={21} />} color='primary' stats={store?.task} statTitle='Tasks' />
        </Col>
        <Col xl='2' md='4' sm='6'>
          <StatsVertical icon={<Award size={21} />} color='success' stats={store?.completedTask} statTitle='Completed Tasks' />
        </Col>
        <Col xl='2' md='4' sm='6'>
          <StatsVertical icon={<Award size={21} />} color='danger' stats={store?.pendingTask} statTitle='Pending Tasks' />
        </Col>
      </Row>
      <Row className='match-height'>
      <Col xs='6'>
          {/* <InvoiceList /> */}
        </Col>
        <Col xs='6'>
          {/* <InvoiceList /> */}
        </Col>
      </Row>
    </div>
  )
}

export default AnalyticsDashboard

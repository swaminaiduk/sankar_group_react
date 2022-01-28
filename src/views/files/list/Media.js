import { Fragment, useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import { columns } from './columns'
import { getAllData, remove } from '../store/action'
import { useDispatch, useSelector } from 'react-redux'
import { ChevronDown, PlusCircle, Trash2, FileText, DownloadCloud } from 'react-feather'
import DataTable from 'react-data-table-component'
import { Card,  Row, Col, Label, CardLink } from 'reactstrap'
import config from '../../../configs/themeConfig'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
// ** Table Header
const CustomHeader = ({ toggleSidebar}) => {
  return (
    <div className='invoice-list-table-header w-100 mr-1 ml-50 mt-2 mb-75'>
      <Row>
        <Col xl='6' className='d-flex align-items-center p-0'>
          <div className='d-flex align-items-center w-100'>
            <Label for='rows-per-page'> <FileText size={18}/> Files & Media</Label>
          </div>
        </Col>
        <Col
          xl='6'
          className='d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1'
        >
          <PlusCircle onClick={toggleSidebar}/>
        </Col>
      </Row>
    </div>
  )
}

const MediaList = () => {
  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.media.allData)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)
  useEffect(() => {
    dispatch(getAllData())
  }, [dispatch])
  const dataToRender = () => {
    if (store.results && store !== undefined && store.results.length > 0) {
      return store.results.map((data, i) => {
        const mediaFile = (data.media) ? <CardLink target="_blank" title={`${data.media}`} src={`${config.app.serverApi}/images/${data.media}`} download><DownloadCloud/></CardLink> : ''
        return { 
          ...data, 
          sno: i + 1, 
          media: mediaFile ? mediaFile : '', 
          actions: <Trash2 size={14} className='mr-10' onClick={ () => dispatch(remove(data.id)) } /> 
        }
      }) 
    }
  }
  return (
    <Fragment>
      <Card>
        <DataTable
          noHeader
          pagination
          subHeader
          responsive
          paginationServer
          columns={columns}
          sortIcon={<ChevronDown />}
          className='react-dataTable'
          data={dataToRender()}
          subHeaderComponent={
            <CustomHeader
              toggleSidebar={toggleSidebar}
            />
          }
        />
      </Card>
      <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
    </Fragment>
  )
}

export default MediaList

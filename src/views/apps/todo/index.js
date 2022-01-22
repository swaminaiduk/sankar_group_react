// ** React Imports
import { Fragment, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// ** Third Party Components
import classnames from 'classnames'

// ** Todo App Components
import Tasks from './Tasks'
import Sidebar from './Sidebar'
import TaskSidebar from './TaskSidebar'
import CommentSidebar from './CommentSidebar'

import { useDispatch, useSelector } from 'react-redux'
import { getGroups, getTasks, updateTask, selectTask, addTask, deleteTask, reOrderTasks, getComment, giveTaskComment } from './store/actions'

// ** Styles
import '@styles/react/apps/app-todo.scss'

const TODO = () => {
  // ** States
  const [sort, setSort] = useState('')
  const [query, setQuery] = useState('')
  const [mainSidebar, setMainSidebar] = useState(false)
  const [openTaskSidebar, setOpenTaskSidebar] = useState(false)
  const [openCommentSidebar, setOpenCommentSidebar] = useState(false)

  const dispatch = useDispatch()
  const store = useSelector(state => state.todo)

  const paramsURL = useParams()
  const params = {
    filter: paramsURL.filter || '',
    q: query || '',
    sortBy: sort || '',
    tag: paramsURL.tag || ''
  }
  // ** Function to handle Left sidebar & Task sidebar
  const handleMainSidebar = () => setMainSidebar(!mainSidebar)
  const handleTaskSidebar = () => setOpenTaskSidebar(!openTaskSidebar)
  const handleCommentSidebar = () => setOpenCommentSidebar(!openCommentSidebar)

  // ** Get Tasks on mount & based on dependency change
  useEffect(() => {
    dispatch(getGroups())
    dispatch(
      getTasks({
        filter: paramsURL.filter || '',
        q: query || '',
        sortBy: sort || '',
        tag: paramsURL.tag || ''
      })
    )
  }, [store.tasks.length, paramsURL.filter, paramsURL.tag, query, sort])
  return (
    <Fragment>
      <Sidebar
        store={store}
        params={params}
        getTasks={getTasks}
        dispatch={dispatch}
        mainSidebar={mainSidebar}
        urlFilter={paramsURL.filter}
        setMainSidebar={setMainSidebar}
        handleTaskSidebar={handleTaskSidebar}
        handleCommentSidebar={handleCommentSidebar}
        getComment={getComment}
      />
      <div className='content-right'>
        <div className='content-wrapper'>
          <div className='content-body'>
            <div
              className={classnames('body-content-overlay', {
                show: mainSidebar === true
              })}
              onClick={handleMainSidebar}
            ></div>

            {store ? (
              <Tasks
                store={store}
                tasks={store.tasks}
                sort={sort}
                query={query}
                params={params}
                setSort={setSort}
                setQuery={setQuery}
                dispatch={dispatch}
                getTasks={getTasks}
                paramsURL={paramsURL}
                updateTask={updateTask}
                selectTask={selectTask}
                reOrderTasks={reOrderTasks}
                handleMainSidebar={handleMainSidebar}
                handleTaskSidebar={handleTaskSidebar}
                handleCommentSidebar={handleCommentSidebar}
                getComment={getComment}
              />
            ) : null}

            <TaskSidebar
              store={store}
              params={params}
              addTask={addTask}
              dispatch={dispatch}
              open={openTaskSidebar}
              updateTask={updateTask}
              selectTask={selectTask}
              deleteTask={deleteTask}
              handleTaskSidebar={handleTaskSidebar}
            />
            <CommentSidebar
              store={store}
              params={params}
              addTask={addTask}
              dispatch={dispatch}
              open={openCommentSidebar}
              handleCommentSidebar={handleCommentSidebar}
              getComment={getComment}
              commentList={store?.selectedComment}
              giveTaskComment={giveTaskComment}
              updateTask={updateTask}
              selectedTask={store?.selectedTask}
            />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default TODO

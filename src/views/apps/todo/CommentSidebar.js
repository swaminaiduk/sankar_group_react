import   moment  from 'moment'
import { useState, Fragment } from 'react'
import { Modal, ModalBody, Button, Form, FormGroup, Input, Label, Media } from 'reactstrap'
import { X, Star, Trash } from 'react-feather'
import classnames from 'classnames'
import { Editor } from '@tinymce/tinymce-react'
import { useSkin } from '@hooks/useSkin'
import '@styles/react/libs/editor/editor.scss'
import renderHTML from 'react-render-html'
const CommentSidebar = props => {
    const { open, handleCommentSidebar, selectedTask, store, dispatch, commentList, giveTaskComment, updateTask} = props
    const [desc, setDesc] = useState('<p></p>')
    const [skin, setSkin] = useSkin()
    const [completed, setCompleted] = useState(selectedTask?.isCompleted)

const renderFooterButtons = () => {
    const user = JSON.parse(localStorage.getItem('userData'))[0]
    const [important, setImportant] = useState(false)

    const state = {
      description: desc,
      isCompleted: completed,
      isImportant: important,
      employee_id: user.id
    }
    if (store) {
      return (
        <Fragment>
          <Button
            color='primary'
            disabled={!desc.length}
            className='update-btn update-todo-item mr-1'
            onClick={() => {
                dispatch(giveTaskComment({ ...state, task_id: commentList[0].task_id }))
                handleCommentSidebar()
            }}
          >
            Post Comment
          </Button>
        </Fragment>
      )
    }
  }  

  const showComment = (commentList) => {
      if (commentList.length) {
        return commentList && commentList?.map((item, index) => {
            const user = JSON.parse(localStorage.getItem('userData'))[0]
            const side = (item.employee_id === user.id) ? "text-right" : "text-left"
            return (
            <div className={side}>
                {renderHTML(item.description)}
                <span>{item.createdAt.replace('T', ' ').substring(0, item.createdAt.length - 8)}</span>
            </div>
            )
        })
    }
  }
  const changeStatus = (selectedTask) => {
    setCompleted(!completed)
    dispatch(updateTask({task_id:selectedTask.id, isCompleted: completed}))
  }
    return (
        <Modal
            isOpen={open}
            toggle={handleCommentSidebar}
            contentClassName='p-0'
            modalClassName='modal-slide-in sidebar-todo-modal'
            >
            <div className='modal-header d-flex align-items-center justify-content-between mb-1'>
            <h5 className='modal-title'>Comments</h5>
                <div className='todo-item-action d-flex align-items-center'>
                    <span className='todo-item-favorite cursor-pointer mx-75'>
                    <Button.Ripple
                    outline
                    size='sm'
                    // onClick={() => setCompleted(!completed)}
                    onClick={() => changeStatus(selectedTask)}
                    color={completed === true ? 'success' : 'secondary'}
                    >
                    {completed === true ? 'Completed' : 'Mark Complete'}
                    </Button.Ripple>
                    </span>
                    <X className='font-weight-normal mt-25' size={16} onClick={handleCommentSidebar}/>
                </div>
            </div>
            <Form id='form-modal-todo' className='todo-modal' onSubmit={(e) => e.preventDefault()}>
                <ModalBody className='flex-grow-1 pb-sm-0 pb-3'>
                    <FormGroup>
                        <Editor
                        apiKey='emjshh1tafcjgizkmk6eofcmmcxc2cmugajs9l2ordjyca64'
                        value={desc}
                        onEditorChange={content => setDesc(content)}
                        init={{
                            menubar: false,
                            toolbar: 'bold italic underline aligncenter link',
                            toolbar_location: 'bottom',
                            skin: skin === 'dark' ? 'dark' : undefined,
                            content_css: skin === 'dark' ? 'dark' : undefined
                        }}
                        />
                    </FormGroup>
                    <FormGroup className='my-1'>{renderFooterButtons()}</FormGroup>
                </ModalBody>
            </Form>
            <div className='p-1'>
                {showComment(commentList)}
            </div>
        </Modal>
    )
}

export default CommentSidebar
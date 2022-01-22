import React from "react"
import { Trash } from "react-feather"
import { useDispatch } from "react-redux"
import { Button, UncontrolledTooltip } from "reactstrap"

export default function DeleteButton({ id, title }) {
  const dispatch = useDispatch()
  return (
    <>
      <Button.Ripple
        color="danger"
        outline
        onClick={() => {
          dispatch(setDeleteIsOpen(true))
          dispatch(setId(id))
        }}
        id={`delete_${id}`}
        size="sm"
      >
        <Trash />
      </Button.Ripple>
      <UncontrolledTooltip placement="right" target={`delete_${id}`}>
        Delete {title}
      </UncontrolledTooltip>
    </>
  )
}

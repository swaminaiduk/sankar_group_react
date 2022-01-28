import renderHTML from 'react-render-html'
export const columns = [
  {
    name: 'S No',
    selector: 'sno',
    sortable: true,
    cell: row => row.sno 
  },
  {
    name: 'Title',
    selector: 'title',
    sortable: true,
    cell: row => row.title     
  },
  {
    name: 'Description',
    selector: 'description',
    sortable: true,
    cell: row => renderHTML(row.description)
  },
  {
    name: 'Media',
    selector: 'media',
    sortable: true,
    cell: row => row.media
  },
  {
    name: 'Actions',
    selector: 'fullName',
    sortable: true,
    cell: row => row.actions
  }
]

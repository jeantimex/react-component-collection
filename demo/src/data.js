export const treeNodes = [
  {
    id: '1',
    name: 'Folder 1',
    type: 'folder',
    hasCollaborations: true,
    children: [
      {
        id: '1-1',
        name: 'Sub folder 1',
        type: 'folder',
        hasCollaborations: false,
        children: [
          {
            id: '1-1-1',
            name: 'File.docx',
            type: 'file',
            extension: 'docx'
          },
          {
            id: '1-1-2',
            name: 'File.boxnote',
            type: 'file',
            extension: 'boxnote'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    name: 'Folder 2',
    type: 'folder',
    hasCollaborations: false,
    children: []
  },
  {
    id: '3',
    name: 'Box Reports.xls',
    type: 'file',
    extension: 'xls'
  }
];

import TableRow from "./TableRow"

function Table() {
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Remetente</th>
          <th>Destinatário</th>
          <th>Formato</th>
          <th>Valor</th>
          <th>Data e Hora</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <TableRow />
        <TableRow />
        <TableRow />
      </tbody>
    </table>
  )
}

export default Table
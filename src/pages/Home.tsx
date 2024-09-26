import Table from "../components/Table"

function Home() {
  return (
    <div>
      <header>
        <h1>Transações</h1>

        <a href="/new">Nova transação</a>
      </header>

      <Table />
    </div>
  )
}

export default Home
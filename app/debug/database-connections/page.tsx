import DatabaseConnectionTest from "@/components/debug/database-connection-test"

export default function DatabaseConnectionsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Database Connection Debug</h1>
      <div className="flex justify-center">
        <DatabaseConnectionTest />
      </div>
    </div>
  )
}

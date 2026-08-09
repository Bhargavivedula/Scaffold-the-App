async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    cache: "no-store",
  });

  return res.json();
}

export default async function HealthPage() {
  const data = await getData();

  return (
    <div>
      <h1 className="text-xl font-bold">Health Check</h1>
      <pre className="mt-4 text-xs bg-gray-100 p-4 rounded">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

export async function GET(request) {
  // Handle GET request for /api/users
  // Retrieve users from the database or any data source
  const users = [
    { id: 1, name: "Alex" },
    { id: 2, name: "Tom" },
  ];
  // Send the users as a response
  return new Response(JSON.stringify(users));
}

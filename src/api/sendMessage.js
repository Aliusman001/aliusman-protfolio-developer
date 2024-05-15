export default async function sendMessage(message) {
  try {
    const res = await fetch(
      `https://aliusman-portfolio-backend.vercel.app/api/v1/sendmessage`,
      {
        method: "POST",
        body: JSON.stringify(message),
        headers: { "Content-Type": "application/json" },
      }
    );
    return await res.json();
  } catch (error) {
    return { status: "fail", data: { message: error.message } };
  }
}
